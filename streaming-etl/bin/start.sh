#!/usr/bin/env bash

ps aux |grep "spark-streaming-etl" | tr -s " " |  cut -d " " -f 2 | xargs kill >/dev/null 2>&1

sbt clean compile package assembly

# using environment variable to find Spark & Hadoop home directory
if [ -z "$SPARK_HOME" ]; then echo "SPARK_HOME is NOT set"; else echo "SPARK_HOME defined as '$SPARK_HOME'"; fi
if [ -z "$HADOOP_HOME" ]; then echo "$HADOOP_HOME is NOT set"; else echo "HADOOP_HOME defined as '$HADOOP_HOME'"; fi

# hadoop fs -rm hdfs://localhost:9000/user/twitter/decahose/*

HOSTNAME="$(/bin/hostname -f)"

if [ "$1" = "csv" ]
then
  echo "Starting Apache Spark Streaming ETL Application at $SPARK_HOME"
  hadoop fs -rm hdfs://localhost:9000/users/lresende/data.csv
  hadoop fs -put /Users/lresende/opensource/apache/spark/spark-ref-architecture/streaming-etl/src/main/resources/csv/data.csv hdfs://localhost:9000/users/lresende/data.csv
  nohup $SPARK_HOME/bin/spark-submit --master spark://$HOSTNAME:7077 --packages com.databricks:spark-csv_2.11:1.3.0 --conf spark.serializer=org.apache.spark.serializer.KryoSerializer --class com.luck.csv.CsvApplication ./target/scala-2.11/spark-application_2.11-1.0.jar >> ./target/application.out; tail -100f ./target/application.out &

fi

if [ "$1" = "stream" ]
then
  nohup $SPARK_HOME/bin/spark-submit --master spark://$HOSTNAME:7077 --num-executors 3 --class KafkaApplication ./target/scala-2.10/spark-stream.jar >> ./target/spark-stream.out &
fi


# hadoop fs -put ~/dev/stc/source/redrock/dev/docker/data/tweet* hdfs://localhost:9000/user/twitter/decahose
