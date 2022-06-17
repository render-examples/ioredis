require('dotenv').config();
const Redis = require("ioredis");

const {
  REDIS_SERVICE_NAME,
  REDIS_PORT
} = process.env;

// This will only work on Render hosted services
const renderRedis = new Redis({
  // Use Render Redis service name as host, red-xxxxxxxxxxxxxxxxxxxx
  host: REDIS_SERVICE_NAME,
  // Default Redis port
  port: REDIS_PORT || 6379,
});

console.log("Connected to Render Redis! 🚀");

renderRedis.set("animal", "mouse");

renderRedis.get("animal").then((result) => {
  console.log(`Result for key animal: ${result}`); // Prints "mouse"
});

renderRedis.del("animal");
