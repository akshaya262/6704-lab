const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secret = "classroom-secret";
const students = [
  { id: 1, name: "Ananya", course: "Computer Science" },
  { id: 2, name: "Rahul", course: "Information Technology" },
];

// Log in and receive a token
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "student" || password !== "1234") {
    return res.status(401).json({ message: "Wrong username or password" });
  }

  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
  res.json({ token });
});

// Check the token
function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }

  try {
    jwt.verify(token, secret);
    next();
  } catch {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

// Protected route
app.get("/students", checkToken, (req, res) => {
  res.json(students);
});

app.listen(3002, () => {
  console.log("Task 6 running at http://localhost:3002");
});