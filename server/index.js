const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");

app.use(cors());
app.use(express.json());

const PORT = 3001;

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.hxzte.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set("useFindAndModify", false);

app.post("/insert", async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const image = req.body.image;
  const friend = new FriendModel({
    name,
    age,
    image,
  });

  await friend.save();
  res.send("Данные добавились!");
});

app.get("/read", async (req, res) => {
  await FriendModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Is worked!");
      res.send(result);
    }
  });
});

app.put("/update", async (req, res) => {
  const newName = req.body.newName;
  const id = req.body._id;

  try {
    await FriendModel.findById(id, (err, result) => {
      result.name = String(newName);
      result.save();
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  try {
    await FriendModel.findByIdAndRemove(id).exec();
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("server starting in 3001 port...");
});
