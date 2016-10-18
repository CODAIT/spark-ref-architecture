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
import _root_.kafka.serializer.StringDecoder
import org.apache.spark._
import org.apache.spark.sql.SQLContext
import org.apache.spark.streaming._
import org.apache.spark.streaming.kafka010._

object KafkaApplication {
  def main(args: Array[String]): Unit = {

    println("Starting Streaming Application")

    val sparkConf = new SparkConf().setAppName("Spark-Streaming")
    val sparkContext = new SparkContext(sparkConf)
    val streamingContext = new StreamingContext(sparkContext, Seconds(5))

    println("Will start processing kafka topic")


    val kafkaConfig = Map("metadata.broker.list" -> "localhost:2181") //"consumer.forcefromstart" -> "true"
    val kafkaTopics = Set("test")


    val kafkaOffsetRanges = Array(
      OffsetRange("test", 0, 0L,1000L)
    )

    //val kafkaStream = KafkaUtils.createStream(streamingContext, "localhost:2181", "spark-streaming", Map("test" -> 1))

    //val kafkaStream = KafkaUtils.createStream(streamingContext, "sdsvm902056.svl.ibm.com:2181", "spark-streaming", Map("test" -> 1))

    //val kafkaStream = KafkaUtils.createDirectStream[String, String, StringDecoder, StringDecoder] (streamingContext, kafkaConfig, kafkaTopics)

    //val kafkaStream = KafkaUtils.createStream(streamingContext, "lennox.svl.ibm.com:2181", "spark-streaming", Map("LauraT1" -> 1))

    //val kafkaStream = KafkaUtils.createStream(streamingContext, "lennox.svl.ibm.com:2181", "spark-streaming", Map("LauraT1" -> 1))


    //val kafkaRdd = KafkaUtils.createRDD[String, String, StringDecoder, StringDecoder](streamingContext, kafkaConfig, kafkaOffsetRanges)

    //KafkaUtils.
    println("Will start processing each record")

    /*
    kafkaStream.foreachRDD { rdd =>
      if(! rdd.isEmpty()) {
        println("Processing RDD -> ")

        //rdd.foreach(record => println("### " + record + " ###"))
        rdd.foreach(println)
      }
    }
    */

    streamingContext.start()
    streamingContext.awaitTermination()

    println("Ending Streaming Application")
  }

}
