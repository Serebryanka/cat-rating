

module.exports = (app, db) => {
  app.post('/cats', (req, res) => {
    const cat = {
      //id: req.body.body,
      name: req.body.name,
      icon: req.body.icon,
      like: req.body.like,
    };
    db.collection('cats').insert(cat, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
