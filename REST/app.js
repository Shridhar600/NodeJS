const { application } = require("express");
const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON objects, gives a middleware.

const courses = [
  { id: 1, CourseName: "Course 1" },
  { id: 2, CourseName: "Course 2" },
  { id: 3, CourseName: "Course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/api/courses/:courseID", (req, res) => {
//   res.send(req.params.courseID);
// });

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course with the given ID was not found.");
  } else {
    res.send(course);
  }
});

//POST METHOD
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.CourseName,
  };
  courses.push(course);
  res.send(course);
});

//Put Request

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  course.CourseName = req.body.CourseName;
  res.send(course);
});

//delete Request

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});
// env file
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
