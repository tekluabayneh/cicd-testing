const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function add(a, b) {
  return a + b;
}

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: Date.now() });
});

let server;
if (require.main === module) {
  server = app.listen(port, () => {
    console.log(`CI/CD test app listening at http://localhost:${port}`);
  });
}

module.exports = { app, add, server };
