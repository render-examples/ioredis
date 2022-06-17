# Connecting to Render Redis with ioredis

This repo contains examples on how to connect to [Render Redis](https://render.com/docs/redis) with [ioredis](https://github.com/luin/ioredis).

More details in the [ioredis guide](https://render.com/docs/connecting-to-redis-with-ioredis).

Examples provided:

### Redis URL

_Recommended configuration_

File: `example-redis-url.js`  
To test: `yarn run redis-url`

### Detailed Configuration - Internal Connection

File: `example-internal-detailed.js`  
To test: `yarn run internal-detailed`

### Detailed Configuration - External Connection

File: `example-external-detailed.js`  
To test: `yarn run external-detailed`

### Blueprint Example

A `render.yaml` file is provided in the repo. Which creates a background worker, and a redis service. Uses the configuration in example-redis-url.js.
