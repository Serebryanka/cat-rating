
var ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {

  app.get('/cats/:id', async (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    try {
      const cat = await db.collection('cats').findOne(details);
      res.send(cat);
    } catch (err) {
      res.send({'error':'An error has occurred'});
    }
  });

  app.get('/cats', async (req, res) => {
    try {
      const cats = await db.collection('cats').find({}).toArray();
      res.send(cats);
    } catch (err) {
      res.send({'error':'An error has occurred'});
    }
  });

  app.post('/cats', async (req, res) => {
    const cat = {
      //id: req.body.body,
      name: req.body.name,
      icon: req.body.icon,
      like: req.body.like,
    };
    try {
      const result = await db.collection('cats').insert(cat);
      res.send(result.ops[0]);
    } catch (err) {
      res.send({ 'error': 'An error has occurred' });
    }
  }); // End post cats
};
