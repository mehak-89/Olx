// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://mehakdhami190:rJxvSgFN55cyQVSC@cluster0.f8hzoqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("mongoDB connected"))
    .catch((error) => console.error("DB error", error));
};

module.exports = connectDB;
