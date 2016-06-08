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
package com.stc.spark.streaming.kafka

import java.util.Properties;

import kafka.producer.ProducerConfig;

object KafkaConfig {
  val props = new Properties();

  props.put("metadata.broker.list", "127.0.0.1:9092");
  props.put("serializer.class", "kafka.serializer.StringEncoder");
  props.put("producer.type", "async")

  val config = new ProducerConfig(props);
}
