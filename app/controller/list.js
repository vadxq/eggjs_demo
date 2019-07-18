'use strict';

// const Controller = require('egg').Controller;
const Controller = require('../core/base_controller');

class ListController extends Controller {
  /**
   * get list Controller
   */
  async list() {
    const result = await this.service.list.list();
    if (result.status) {
      this.success(result.data);
    } else {
      this.fail(result.data);
    }
  }

  /**
   * get one Controller
   */
  async getOne() {
    const { id } = this.ctx.params;
    const result = await this.service.list.getOne(id);
    if (result.status) {
      this.success(result.data);
    } else {
      this.fail(result.data);
    }
  }

  /**
   * add one Controller
   */
  async addOne() {
    const payload = this.ctx.request.body || {};
    const result = await this.service.list.add(payload);
    if (result.status) {
      this.success(result.data);
    } else {
      this.fail(result.data);
    }
  }

  /**
   * delete one Controller
   */
  async delOne() {
    const { id } = this.ctx.params;
    const result = await this.service.list.del(id);
    if (result.status) {
      this.success(result.data);
    } else {
      this.fail(result.data);
    }
  }

  /**
   * edit one Controller
   */
  async editOne() {
    const payload = this.ctx.request.body || {};
    const result = await this.service.list.edit(payload);
    if (result.status) {
      this.success(result.data);
    } else {
      this.fail(result.data);
    }
  }
}

module.exports = ListController;
