const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./models");
const { User } = require("./models");
const cors = require("cors");

app.use(cors());
app.use(express.json());
db.sequelize.sync({ alter: true }).then((req, res) => {
  app.listen(PORT, () => {
    console.log(`Listening on Port ${3001}`);
  });
});

app.post("/signin", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const googleid = req.body.googleid;
  const channelname = req.body.channelname;
  const imageurl = req.body.imageurl;

  User.create({
    name: name,
    email: email,
    googleid: googleid,
    channelname: channelname,
    imageurl: imageurl,
  }).then((err) => {
    console.log(err);
  });

  res.send("Inserted into database");
});
