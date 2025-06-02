const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Simple function to test in CI pipeline
function add(a, b) {
  return a + b;
}

// Health check endpoint for CI/CD
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: Date.now() });
});
if (require.main == module) {
  app.listen(port, () => {
    console.log(`CI/CD test app listening at http://localhost:${port}`);
  });
}

// Export add function for tests
module.exports = { add };
