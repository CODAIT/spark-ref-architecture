#!/usr/bin/env bash


ps aux |grep "spark-application" | tr -s " " |  cut -d " " -f 2 | xargs kill >/dev/null 2>&1

