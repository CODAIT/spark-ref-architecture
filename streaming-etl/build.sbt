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

name := "spark-streaming-etl-application"

version := "1.0"

scalaVersion := "2.11.7"

resolvers += "Typesafe Repo" at "http://repo.typesafe.com/typesafe/releases/"
resolvers += "Sonatype Repository" at "http://oss.sonatype.org/content/repositories/releases"

libraryDependencies += "org.elasticsearch" % "elasticsearch" % "1.7.2"
libraryDependencies += "org.slf4j" % "slf4j-api" % "1.7.12"


// Spark dependencies
/* Do not remove "provided" - We do not need to include spark dependency
on the jar because the jar is gonna be executed by spark-submit*/
libraryDependencies += ("org.apache.spark"  %% "spark-streaming-kafka-0-10"  % "2.0.1").exclude("org.spark-project.spark", "unused")

libraryDependencies += "org.apache.spark"  %% "spark-core"             % "2.0.1"  % "provided"
libraryDependencies += "org.apache.spark"  %% "spark-streaming"        % "2.0.1"  % "provided"
libraryDependencies += "org.apache.spark"  %% "spark-sql"              % "2.0.1"  % "provided"
libraryDependencies += "org.apache.spark"  %% "spark-repl"             % "2.0.1"  % "provided"
libraryDependencies += "org.apache.spark"  %% "spark-hive"             % "2.0.1"  % "provided"

libraryDependencies ++= Seq(
  "org.apache.kafka" %% "kafka" % "0.10.0.1"
    exclude("javax.jms", "jms")
    exclude("com.sun.jdmk", "jmxtools")
    exclude("com.sun.jmx", "jmxri")
)

assemblyJarName in assembly := "spark-application.jar"