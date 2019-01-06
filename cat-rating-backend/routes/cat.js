
var ObjectID = require('mongodb').ObjectID;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const itemToCat = (item) => ({
  id: item._id,
  name: item.name,
  icon: item.icon,
  like: (item.like === 'true' || item.like === true) ? true : false,
});

module.exports = (app, db) => {

  app.get('/cats/:id', async (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    try {
      const receivedCat = await db.collection('cats').findOne(details);
      const cat = itemToCat(receivedCat);
      res.send(cat);
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

  app.get('/cats', async (req, res) => {
    try {
      const receivedCats = await db.collection('cats').find({}).toArray();
      const cats = receivedCats.map(itemToCat);
      res.send(cats);
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

  app.post('/cats', async (req, res) => {
    const cat = {
      //id: req.body.body,
      name: req.body.name || '',
      icon: req.body.icon || '',
      like: req.body.like || false,
    };
    try {
      const result = await db.collection('cats').insertOne(cat);
      const formattedResult = itemToCat(result.ops[0]);
      res.send(formattedResult);
    } catch (err) {
      res.status(500).send({ 'error': 'An error has occurred' });
    }
  }); // End post cats

  app.delete('/cats/:id', async (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    try {
      const result = await db.collection('cats').deleteOne(details);
      res.send({
        success: result.result.n === 1,
      });
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

  app.get('/cats/:id/like', async (req, res) => {
    const id = req.params.id;
    const like = req.query.value === 'true';
    const details = { '_id': new ObjectID(id) };
    try {
      const result = await db.collection('cats').updateOne(details, {$set: {like}});
      res.send({
        success: result.result.n === 1,
      });
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

};
