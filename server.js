const app = require("./app");
const express = require("express");

const port = process.env.PORT || 4444;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.info("listening on port -> ", port);
});
