import mongoose from "mongoose";

// set up mongoose connection
console.log(process.env.MONGO_URI);
const connect = async function connect() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const conn = mongoose.connection;

  conn.on("connected", () => {
    console.log("Database connected");
  });

  conn.on("error", (err) => {
    console.log("Database connection error: " + err);
  });
};

export default connect;
