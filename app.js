const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("First Middleward");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Middleward");
//   res.send("<p>Assigment solved (almos!)</p>");
// });

app.use("/", (req, res, next) => {
  console.log("/middleware");
  res.send("<p>The Middleware that handlers just </p>");
});
app.use("/users", (req, res, next) => {
  console.log("/users middleware");
  res.send("<p>The Middleware that handlers just /users</p>");
});

app.listen(3000);
