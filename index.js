const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello world");
});


app.get("/users", (req, res) => {
  const users = ["user1", "user2", "user3"];
  res.json(users);
});


app.post("/users", (req, res) => {
  res.send("Юзер добавлен");
});


app.all("/admin", (req, res) => {
  res.send("Не хватает прав доступа");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});