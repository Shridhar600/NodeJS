const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/api/courses/:courseID', (req,res)=>{
    res.send(req.params.courseID);
})
// env file
const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log(`listening to port ${port}...`);
});
