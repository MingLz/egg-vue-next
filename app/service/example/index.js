const Service = require('egg').Service;
const to = require('await-to-js').to;

class exampleService extends Service {
  async login() {
    const { ctx, model } = this;
    const { query } = ctx;
    if (query.userName && query.password) {
      const ExampleModel = ctx.model.Example;
      const [ err, resUser = {} ] = await to(ExampleModel.create({
        userName: query.userName,
        password: query.password
      }));
      return !err ? {
        success: true,
        data: resUser,
        errMgs: 'created user success',
        errCode: ''
      } : {
        success: false,
        err_mgs: 'created user false',
        err_code: ''
      };
    } else {
      return {
        success: false,
        err_mgs: 'userName and password can not be empty'
      };
    }
  }
}
module.exports = exampleService;