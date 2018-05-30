const Model = require('../../mocks/article/list');

module.exports = app => {
  return class HomeController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('home/home.js', Model.getPage(1, 10));
    }

    async indexC() {
      const { ctx } = this;
      await ctx.renderClient('home/home.js', Model.getPage(1, 10));
    }

    async resume() {
      const { ctx } = this;
      await ctx.render('resume/resume.js');
    }

    async resumeC() {
      const { ctx } = this;
      await ctx.renderClient('resume/resume.js');
    }
  };
};