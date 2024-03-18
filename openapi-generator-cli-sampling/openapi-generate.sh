#!/bin/bash

openapi-generator-cli generate -g typescript-angular -i ./references/api-with-examples.yaml -o ./generated --global-property=models --additional-properties=modelPropertyNaming=camelCase --model-package=responses
openapi-generator-cli generate -g typescript-angular -i ./references/api-with-examples.yaml -o ./generated --global-property=models --model-package=requests