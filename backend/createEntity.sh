#!/bin/bash

cp ./routes/template.routes.js ./routes/$1.routes.js;
cp ./controller/template.controller.js ./controller/$1.controller.js;
cp ./model/template.model.js ./model/$1.model.js;


sed -i -e "s/template/$1/g" ./routes/$1.routes.js;
sed -i -e "s/template/$1/g" ./controller/$1.controller.js;
sed -i -e "s/template/$1/g" ./model/$1.model.js;


echo "created /routes/$1.routes.js";
echo "created /controller/$1.controller.js";
echo "created /model/$1.model.js";