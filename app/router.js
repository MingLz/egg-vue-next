
module.exports = app => {
  // html 页面
  app.get('/', app.controller.html.html.index);
  app.get('/client', app.controller.html.html.indexC);
  app.get('/html/resume', app.controller.html.html.resume);
  app.get('/html/client/resume', app.controller.html.html.resumeC);
  // API 接口
  app.get('/api/wechat', app.controller.wechat.wechat.verifySignature);
  app.post('/api/wechat', app.controller.wechat.wechat.postBehavior);
  app.get('/api/wechat/get-signature', app.controller.wechat.wechat.getSignature);
  // example 栗子
  app.get('/api/example/', app.controller.example.index.index);
};
