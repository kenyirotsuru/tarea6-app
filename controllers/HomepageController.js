const Task = require('../models/Task');

exports.index = (req, res) => {
  console.log("entre a index de homepagecontroller");
  
  let tasks = Task.all().then((tasks) => {
    res.json(tasks);
  });
}
