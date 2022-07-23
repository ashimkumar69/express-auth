const mongoose = require("mongoose");

const connectDB = async () => {
  const connected = await mongoose.connect(process.env.MONG_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`Server running on: ${connected.connection.host}`);
};

module.exports = connectDB;
