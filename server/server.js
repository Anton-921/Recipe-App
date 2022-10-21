const path = require("path");
const dotenv = require("dotenv");
const app = require("./app");
// const { PORT, DATABASE_CONNECTION_STRINGS } = require("./config");
const mongoose = require('mongoose')

dotenv.config({
  path: path.join(__dirname, ".env"),
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_CONNECTION_STRINGS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server Started listening on port ${process.env.PORT}`);
});
