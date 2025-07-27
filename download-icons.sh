#!/bin/bash
set -e

cd public/icons

echo "Downloading SVGs for all techs..."

curl -sSLo react.svg           https://cdn.simpleicons.org/react
curl -sSLo typescript.svg      https://cdn.simpleicons.org/typescript
curl -sSLo redux.svg           https://cdn.simpleicons.org/redux
curl -sSLo nodejs.svg          https://cdn.simpleicons.org/nodedotjs
curl -sSLo vite.svg            https://cdn.simpleicons.org/vite
curl -sSLo vitest.svg          https://svgur.com/i/15Fj.svg
curl -sSLo cypress.svg         https://cdn.simpleicons.org/cypress
curl -sSLo playwright.svg      https://svgur.com/i/15Fl.svg
curl -sSLo rails.svg           https://cdn.simpleicons.org/rails
curl -sSLo rspec.svg           https://svgur.com/i/15Fm.svg
curl -sSLo mongodb.svg         https://cdn.simpleicons.org/mongodb
curl -sSLo date-fns.svg        https://svgur.com/i/15Fk.svg
curl -sSLo awslambda.svg       https://cdn.simpleicons.org/awslambda
curl -sSLo kubernetes.svg      https://cdn.simpleicons.org/kubernetes
curl -sSLo jquery.svg          https://cdn.simpleicons.org/jquery
curl -sSLo html5.svg           https://cdn.simpleicons.org/html5
curl -sSLo css3.svg            https://cdn.simpleicons.org/css3
curl -sSLo sass.svg            https://cdn.simpleicons.org/sass
curl -sSLo elasticsearch.svg   https://cdn.simpleicons.org/elasticsearch
curl -sSLo redis.svg           https://cdn.simpleicons.org/redis
curl -sSLo rabbitmq.svg        https://cdn.simpleicons.org/rabbitmq
curl -sSLo newrelic.svg        https://cdn.simpleicons.org/newrelic
curl -sSLo sentry.svg          https://cdn.simpleicons.org/sentry
curl -sSLo highcharts.svg      https://svgur.com/i/15Fh.svg
curl -sSLo backbone-dot-js.svg https://cdn.simpleicons.org/backbonedotjs
curl -sSLo npm.svg             https://cdn.simpleicons.org/npm
curl -sSLo golang.svg          https://cdn.simpleicons.org/go
curl -sSLo github.svg          https://cdn.simpleicons.org/github
curl -sSLo linkedin.svg        https://cdn.simpleicons.org/linkedin

# Missing from simpleicons: React Flow, ReactVis, Velocity.js, OAuth 2.0
# Use placeholder SVGs or download official/project SVGs manually if needed
# Example placeholder:
curl -sSLo reactflow.svg       https://svgur.com/i/15Fn.svg
curl -sSLo reactvis.svg        https://svgur.com/i/15Fo.svg
curl -sSLo velocityjs.svg      https://svgur.com/i/15Fp.svg
curl -sSLo oauth.svg           https://svgur.com/i/15Fq.svg

echo "All SVGs downloaded and named correctly in public/icons/"
