const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

dotenv.config();

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error connecting to database: " + error));

// Define user schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;

// Define API endpoints
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.get("/signup", (req, res) => {
  res.send("This is the signup page.");
});

app.post('/signup', async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      res.send({ message: 'Email already registered', alert: false });
    } else {
      const data = userModel(req.body);
      const save = await data.save();
      res.send({
        message: 'User data has been successfully stored',
        alert: true,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({ message: 'Error occurred while saving user data', alert: false });
  }
});

//login
app.get("/login", (req, res) => {
  res.send("This is the login page.");
});

app.post('/login', async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: 'Login is successfully',
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: 'Email is not available, please sign up',
        alert: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      message: 'Error occurred while finding user data',
      alert: false,
    });
  }
});

// Start the server
app.listen(PORT, () => console.log("Server is running at port: " + PORT));