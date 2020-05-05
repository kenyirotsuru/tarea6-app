const Task = require('../models/Task');

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then((task) => res.json(task));
    } else{
      res.redirect('/');
    }
  });
}

exports.update = (req, res) =>{
  //Viene de la URL
  let id = req.params.id; 
  //req.body.id si fuera de la forma o
  Task.find(id).then((task) =>{
    return Task.markAsDone(task);
  }) 
  .then((result) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1){
      res.json({result: result});
    }else{
      res.redirect('/');
    }
  })
}
 
exports.delete = (req, res) =>{
  //Viene de la URL
  let id = req.params.id; 
  //req.body.id si fuera de la forma o
  Task.find(id).then((task) =>{
    Task.erase(task.id).then(erased => {
      if (req.xhr || req.headers.accept.indexOf('json') > -1){
        res.json(task);
      }else{
        res.redirect('/');
      }
    });
  });
}
