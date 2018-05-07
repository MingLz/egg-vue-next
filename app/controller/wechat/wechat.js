const Model = require('../../mocks/article/list');

module.exports = app => {

  return class wechatController extends app.Controller {

    async verifySignature() {
      const { ctx } = this;
      const query = ctx.query;
      const verify = await ctx.service.wechat.index.verifySignature(query);
      if (verify.success) {
        ctx.body = verify.echostr;
      } else {
        ctx.body = 'error';
      }
    }

    async getSignature() {
      const { ctx } = this;
      const signatureDate = await ctx.service.wechat.index.getSignature();
      ctx.body = signatureDate;
    }

    async postBehavior() {
      const { ctx } = this;
      const behavior = await ctx.service.wechat.index.postBehavior();
      console.log(`query: ${JSON.stringify(ctx.query)}`)
      console.log(`body: ${JSON.stringify(ctx.request.body)}`)
      
    }
  };
};