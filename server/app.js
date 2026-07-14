const exppress = require("express");
const app = exppress();
const cors = require("cors");

const POSTS = [];
const start = 1;
const end = 1_000;

app.use(cors());

for (let i = start; i <= end; i++) {
  const obj = {
    id: i,
    title: `This is post title ${i}`,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sit iste. Eaque modi minima illo deserunt molestiae accusantium tempore! At saepe fugit aperiam vel ut quam facilis reiciendis quaerat beatae modi quidem dolorem natus accusamus commodi, sequi quas error. Provident vel quia reiciendis? Cumque reiciendis iure aperiam fugiat doloremque quibusdam laborum eos illum laudantium illo.",
    likes: Math.ceil(Math.random() * 50),
    views: Math.ceil(Math.random() * 5_000),
  };

  POSTS.push(obj);
}

console.log("POSTS object is ready :)");

app.get("/api/posts", (req, res) => {
  const start = req.query.start;
  console.log("page start:", start);
  res.json(POSTS.slice(start, +start + +req.query.limit));
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});
