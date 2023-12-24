const express = require("express")
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

app.use("/public", express.static(process.cwd() + "/public"));

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(path.join(process.cwd() + "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});