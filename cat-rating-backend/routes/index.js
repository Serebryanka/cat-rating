

const catRoutes = require('./cat');
const commentRoutes = require('./comment');
module.exports = (app, db) => {
  catRoutes(app, db);
  commentRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
