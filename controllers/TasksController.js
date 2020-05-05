const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    Task.find(id).then((task) => res.json(task));
  });
}

exports.update = (req, res) =>{
  //Viene de la URL
  let id = req.params.id; 
  //req.body.id si fuera de la forma o
  Task.find(id).then((task) =>{
    return Task.markAsDone(task);
  }).then((result) => {
    res.json({result: result});
  })
}
 
exports.delete = (req, res) =>{
  //Viene de la URL
  let id = req.params.id; 
  Task.find(id).then((task) =>{
    Task.erase(task.id).then(erased => {
      res.json(task);
    });
  });
}
