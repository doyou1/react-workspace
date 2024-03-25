#!/bin/bash

mkdir ./references

until curl "{secret url}" 1>./references/openapi3.yaml 2>./references/log.csv;
do
    sleep 5
done

openapi-generator-cli generate -g typescript-angular -i ./references/openapi3.yaml -o ./generated --global-property=models --additional-properties=modelPropertyNaming=snake_case --model-package=requests
openapi-generator-cli generate -g typescript-angular -i ./references/openapi3.yaml -o ./generated --global-property=models --additional-properties=modelPropertyNaming=camelCase --model-package=responses

