const mongoose = require("mongoose");
const logger = require("../utils/logger");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("MongoDB Connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
