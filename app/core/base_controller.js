'use strict';

const { Controller } = require('egg');
class BaseController extends Controller {
  // getUser() {
  //   return this.ctx.session.user;
  // }

  success(data) {
    this.ctx.body = {
      data,
      status: 1,
      msg: '成功',
    };
  }

  fail(err) {
    this.ctx.body = {
      msg: '失败',
      status: 0,
      err,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;
