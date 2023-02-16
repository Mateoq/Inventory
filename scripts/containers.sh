#!/bin/bash

if [ "$1" == "--clear" ]
then
  echo "-- Clearing All Inventory Containers"
  docker-compose -f config/docker-compose.yml down -v --remove-orphans --rmi all
  docker rm $(docker ps -a -q) || true
  docker rmi $(docker images -a -q) || true
  docker volume rm $(docker volume ls -q) || true
elif [ "$1" == "--run" ]
then
  echo "-- Running Inventory Containers"
  docker-compose -f config/docker-compose.yml up
elif [ "$1" == "--build" ]
then
  echo "-- Building Inventory Images"
  docker-compose -f config/docker-compose.yml build
else
  echo "Try --clear, --run or --build"
fi


echo "-- DONE --"
