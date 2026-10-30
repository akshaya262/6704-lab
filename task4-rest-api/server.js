const express = require("express");
const app = express();

app.use(express.json());

let students = [{ id: 1, name: "Ananya" }];

// Read all students
app.get("/students", (req, res) => res.json(students));

// Add a student
app.post("/students", (req, res) => {
  const student = { id: Date.now(), name: req.body.name };
  students.push(student);
  res.json(student);
});

// Update a student
app.put("/students/:id", (req, res) => {
  students = students.map((s) =>
    s.id == req.params.id ? { ...s, name: req.body.name } : s
  );
  res.json(students);
});

// Delete a student
app.delete("/students/:id", (req, res) => {
  students = students.filter((s) => s.id != req.params.id);
  res.json(students);
});

app.listen(3000, () => console.log("API running at http://localhost:3000"));