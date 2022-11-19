const express = require("express");
app = express();

app.get("/ab", (req, res) => {
  res.send({ res: "hello" });
});

// app.use((req, res, next) => {
//   console.log("welcome to app");
//   //   next();
//   res.send("error");
// });

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
