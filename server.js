const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config/.env" });
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const auth = require("./routes/auth");
const cookieParser = require("cookie-parser");
connectDB();
const app = express();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/auth", auth);

app.use(errorHandler);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    ` server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
