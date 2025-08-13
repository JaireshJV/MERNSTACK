const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const mongoose = require("mongoose");
const TaskRoute = require("./routes/taskRoutes");
const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hiiiiii");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `The port is running successfully on PORT ${process.env.PORT}`
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", TaskRoute);




// const connectDB = async () => {

//   try {
//     const connectionString = 'mongodb+srv://officialangel2014:Officialangel2014@cluster0.jislnli.mongodb.net/sdce?retryWrites=true&w=majority&appName=Cluster0';
//     // const connectionString = 'mongodb+srv://abiofficial:abini@301097@cluster0.7f2za4o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


//   //  const connectionString= appConfig.mongoDbConnection

//    console.log("connectionString",connectionString)

//     await mongoose.connect(connectionString); // 🔄 Remove deprecated options

//     console.log('✅ MongoDB connected successfully');
//   } catch (error) {
//     console.error('❌ MongoDB connection error:', error.message);
//     process.exit(1); // Exit if DB connection fails
//   }
// };

// export default connectDB;