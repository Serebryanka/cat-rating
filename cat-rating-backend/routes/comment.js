var ObjectID = require('mongodb').ObjectID;

const itemToComment = (item) => ({
  id: item._id,
  catID: item.cat_id,
  text: item.text,
});

module.exports = (app, db) => {

  // get by ID
  app.get('/comments/:id', async (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    try {
      const receivedComment = await db.collection('comments').findOne(details);
      const comment = itemToComment(receivedComment);
      res.send(comment);
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

  // get list by cat_id
  app.get('/comments', async (req, res) => {
    const catID = req.query.catID;
    const details = { 'cat_id': catID };
    try {
      const receivedComments = await db.collection('comments').find(details).toArray();
      const comments = receivedComments.map(itemToComment);
      res.send(comments);
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

  // create
  app.post('/comments', async (req, res) => {
    const commentBody = {
      cat_id: req.body.catID,
      text: req.body.text,
    };
    try {
      const result = await db.collection('comments').insertOne(commentBody);
      const comment = itemToComment(result.ops[0]);
      res.send(comment);
    } catch (err) {
      res.status(500).send({ 'error': 'An error has occurred' });
    }
  }); // End post comment

  // delete
  app.delete('/comments/:id', async (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    try {
      const result = await db.collection('comments').deleteOne(details);
      res.send({
        success: result.result.n === 1,
      });
    } catch (err) {
      res.status(500).send({'error':'An error has occurred'});
    }
  });

};
