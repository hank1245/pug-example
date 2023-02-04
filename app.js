const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

let articles = [
  {
    id: 0,
    title: "Lion is beating up the tiger",
    author: "Robert Kinsley",
    body: "Lion Rules. this is the truth",
  },
  {
    id: 1,
    title: "Tiger is beating up the Lion",
    author: "John Traversy",
    body: "Tiger Rules. this is the truth",
  },
  {
    id: 2,
    title: "The Secret of Beauty",
    author: "Mike Hanagen",
    body: "Eat Vegetables. ",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    title: "Articles",
    articles,
  });
});

app.get("/:article", (req, res) => {
  const id = req.params.article;
  const body = articles[id].body;
  const title = articles[id].title;
  res.render("article", {
    title,
    body,
  });
});

//Add Route
app.get("/articles/add", (req, res) => {
  res.render("add_article", {
    title: "Add Article",
  });
});

app.listen(5000, () => {
  console.log("server runing");
});
