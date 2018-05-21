module.exports = app => {

  return class exampleController extends app.Controller {

    async index() {
      const { ctx } = this;
      ctx.body = await ctx.service.example.index.login();
    }
  };
};