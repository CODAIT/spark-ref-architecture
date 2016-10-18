/*
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import java.io.{PrintWriter, StringWriter}

import org.apache.spark._
import org.apache.spark.rdd.RDD
import org.apache.spark.sql.SparkSession
import org.apache.spark.streaming._


object Application {
  def main(args: Array[String]): Unit = {

    println("Starting Streaming Application")

    val sparkConf = new SparkConf().setAppName("Spark-Streaming")
    val sparkContext = new SparkContext(sparkConf)
    val sparkSession = SparkSession.builder.config(sparkConf).getOrCreate()
    val streamingContext = new StreamingContext(sparkContext, Seconds(5))

    println("Will start processing the file")

    //val dDataStream = streamingContext.fileStream("hdfs://localhost:9000/user/twitter/decahose/2015_10_07_23_50_activity.json.gz")
    // val dDataStream = streamingContext.textFileStream("hdfs://redrock.softlayer.com:9000/redrock/decahose/")
    val dDataStream = streamingContext.textFileStream("hdfs://redrock.softlayer.com:9000/streaming/joins/")

    val dRulesStream = streamingContext.textFileStream("hdfs://redrock.softlayer.com:9000/streaming/rules/")

    println("Will start processing each record")

    dDataStream.foreachRDD { rdd =>

      //rdd.foreach(record => println("### " + record + " ###"))

      if(! rdd.isEmpty()) {
        println("Processing RDD -> ")

        val df = sparkSession.read.json(rdd)
          .selectExpr(
            s"'id' as tweet_id",
            s"'actor.id' as user_id",
            s"'body' as text",
            s"'generator.displayName' as source"
          )

        df.printSchema()

        df.groupBy("source").count().show()

      }



      /*
      rdd.foreach(record =>
        try {
          println("### " + record + " ###")
          val df = sqlContext.read.json(record)
            .filter(s"'verb' = 'post' AND 'generator.displayName' IS NOT NULL")
            .selectExpr(
              s"id as tweet_id",
              s"actor.id as user_id",
              s"body as text",
              s"generator.displayName as source"
            )

          df.printSchema()

          df.groupBy("source").count().show()

        } catch {
          case e: Exception => {
            println("Exception: ")
            val content = new StringWriter
            e.printStackTrace(new PrintWriter(content))
            content.append("Caused by:")
            e.getCause.printStackTrace(new PrintWriter(content))
            println(content.toString)
          }
        }
      ) */
    }

    streamingContext.start();
    streamingContext.awaitTermination();

    println("Ending Streaming Application")

  }

}
