
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  app.get('/client', app.controller.home.home.client);

  app.get('/api/wechat', app.controller.wechat.wechat.verifySignature)
  app.get('/api/wechat/get-signature', app.controller.wechat.wechat.getSignature)
};
