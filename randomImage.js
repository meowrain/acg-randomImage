const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const readDir = fs.readdirSync(path.resolve(__dirname, "./images"));
let images_url = [];
readDir.forEach((element) => {
  images_url.push(
    path.join("https://pan.meowrain.cn/_uploads/acg_api", element)
  );
});
app.use(express.static("./public"));
app.get("/", (req, res) => {});
app.get("/api/json", (req, res) => {
  const randomIndex = Math.round(Math.random() * images_url.length);
  const image_url = images_url[randomIndex];
  const id = path.parse(image_url).name;
  const object = {
    Status: 200,
    API_name: "Meowrain ACG API",
    id: id,
    type: "Normal",
    imgurl: image_url,
  };
  res.send(object);
});
app.get("/api", (req, res) => {
  const randomIndex = Math.round(Math.random() * images_url.length);
  const image_url = images_url[randomIndex];
  res.send(
    `<img src=${image_url} style="height:100%;width:100%;object-fit:contain;">`
  );
});
app.listen(8081, () => {
  console.log("listening in port 8081");
});
