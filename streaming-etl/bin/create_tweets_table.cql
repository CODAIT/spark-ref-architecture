CREATE KEYSPACE test_rep_1 WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};
CREATE TABLE test_rep_1.tweets (tweet_id varchar PRIMARY KEY, user varchar, body varchar);
