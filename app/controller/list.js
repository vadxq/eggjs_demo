'use strict';

// const Controller = require('egg').Controller;
const Controller = require('../core/base_controller');

class ListController extends Controller {
  async list() {
    const result = await this.ctx.model.List.find({}, {});
    if (result) {
      this.success(result);
    }
  }

  async listOne() {
    const { id } = this.ctx.params;
    const result = await this.ctx.model.List.find({ _id: id }, {});
    if (result) {
      this.success(result);
    }
  }
}

module.exports = ListController;
