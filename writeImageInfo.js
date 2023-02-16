const fs = require("fs");
const path = require("path");
const readDir = fs.readdirSync(path.resolve(__dirname, "./images"));
let images_url = [];
readDir.forEach((element) => {
  images_url.push(
    path.join("https://pan.meowrain.cn/_uploads/acg_images", element)
  );
});

fs.writeFile(
  path.resolve(__dirname, "./document.txt"),
  images_url.join("\n"),
  { flags: "w" },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("写入链接成功！");
    }
  }
);
