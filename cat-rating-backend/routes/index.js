

const catRoutes = require('./cat');
module.exports = (app, db) => {
  catRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
