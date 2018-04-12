'use strict';

const Controller = require('egg').Controller;

class indexController extends Controller {
  async welcome() {
    this.ctx.body = 'Hello world';
  }
}

module.exports = indexController;
