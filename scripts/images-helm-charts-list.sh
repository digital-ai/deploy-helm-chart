#!/bin/bash

docker run --rm \
  -e HOME=/opt/project \
  -v ./:/opt/project:rw \
  --entrypoint helm \
  xldevdocker/kuttl:latest \
  dependency update

docker run --rm \
  -v ./:/opt/project:rw \
  --entrypoint helm \
  xldevdocker/kuttl:latest \
  images get digitalai "/opt/project" -n digitalai \
  --values "/opt/project/tests/values/basic.yaml" \
  --values "/opt/project/tests/values/images.yaml" \
  --skip ConfigMap=digitalai-digitalai-deploy-master-config,ConfigMap=digitalai-digitalai-deploy-worker-config \
  | grep -v xebialabs | sort | uniq
