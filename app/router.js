
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/client', app.controller.home.home.client);

  app.get('/wechat', app.controller.wechat.wechat.index)
};
