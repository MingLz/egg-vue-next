const Model = require('../../mocks/article/list');

module.exports = app => {

  return class wechatController extends app.Controller {

    async verifySignature() {
      const { ctx, service } = this;
      const query = ctx.query;
      const verify = await ctx.service.wechat.index.verifySignature(query);
      if (verify.success) {
        ctx.body = verify.echostr;
      } else {
        ctx.body = 'error';
      }
    }

    async getSignature() {
      const { ctx, service } = this;
      const signatureDate = await ctx.service.wechat.index.getSignature();
      ctx.body = signatureDate;
    }
  };
};