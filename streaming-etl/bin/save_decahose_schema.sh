$SPARK_HOME/bin/spark-shell --master $SPARK_MASTER <<EOF

val js1 = spark.read.json("/decahose_flat/2016_01_01*", "/decahose_flat/2016_07_01*")
val fos=new java.io.FileOutputStream("decahose-schema.js")
fos.write(js1.schema.prettyJson.getBytes())
fos.close()

EOF
