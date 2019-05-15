#!/bin/sh

if [ -d ../templates/_complex-content ] || [ -d ../templates/_blocks ] || [ -d ../templates/component-gallery ]
then
    echo Complex Content is already installed OR you have conflicting directories in your templates folder.
else
    cd ../ && \
    mkdir ./cc-temp && \
    curl -SL -X POST http://papertrain.io/actions/papertrain-module/default/complex-content-download | tar -xf - -C ./cc-temp && \
    mv ./cc-temp/papertrain-0.1.1 ./modules && \
    mv ./cc-temp/_blocks ./templates && \
    mv ./cc-temp/_complex-content ./templates && \
    mv ./cc-temp/component-gallery ./templates && \
    mv ./cc-temp/complex-content.yaml ./ && \
    rm -rf ./cc-temp && \
    echo Complex Content has been installed.
fi
