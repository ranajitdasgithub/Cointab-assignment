const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
let port = process.env.PORT;
const { userModel } = require("./Models/User.model");

const { connection } = require("./Config/db");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is homepage");
});
app.get("/userfetch", (req, res) => {
  var Name, gender, Age, City, State, Country, email, phone, Postcode, Pin;
  axios
    .get("https://randomuser.me/api/?results=50")
    .then((respo) => {
      let data = respo.data.results;
      {
        data.map( async (ele) => {
          Name = ele.name.first + " " + ele.name.last;
          Age = ele.dob.age;
          City = ele.location.city;
          State = ele.location.state;
          Country = ele.location.country;
          Postcode = ele.location.postcode;
          Pin = ele.location.street.number;
          var { gender, email, phone } = ele;
          var user = new userModel({
            Name,
            gender,
            Age,
            City,
            State,
            Country,
            email,
            phone,
            Postcode,
            Pin,
          });
          await user.save();
        });
      }
      res.send("User data store in database successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/userdata", async (req, res) => {
    let user=await userModel.find()
  res.send(user);
});
app.delete("/delete", async(req, res) => {
  await userModel.deleteMany()
  res.send("Delete succsfully");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to db successfully");
  } catch (err) {
    console.log(err);
  }
  console.log(`Server started at ${port}`);
});
