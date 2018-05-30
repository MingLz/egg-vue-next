const Model = require('../../mocks/article/list');

module.exports = app => {
  return class HomeController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('home/home.js', Model.getPage(1, 10));
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('home/home.js', Model.getPage(1, 10));
    }

    async resume() {
      const { ctx } = this;
      await ctx.renderClient('resume/resume.js');
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }
  };
};