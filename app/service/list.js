'use strict';

const Service = require('egg').Service;

class ListService extends Service {
  /**
   * get list service
   * @param {Object} query -
   */
  async list(query) {
    if (query.page && query.limit) {
      const result = await this.ctx.model.List.find({ del: false }, {
        title: 1,
        id: 1,
        publishedAt: 1,
        updateAt: 1,
        content: 1,
      })
        .skip((+query.page - 1) * +query.limit)
        .limit(7)
        .sort({ _id: -1 });
      let data;
      if (result) {
        data = {
          status: 1,
          data: result,
        };
      } else {
        data = {
          status: 0,
          data: '获取列表失败',
        };
      }
      return data;
    }
  }

  /**
   * get one service
   * @param {Object} id - input data
   * @return {Object} - return data
   */
  async getOne(id) {
    const result = await this.ctx.model.List.findOne({ _id: id, del: false }, {
      title: 1,
      id: 1,
      publishedAt: 1,
      updateAt: 1,
      content: 1,
    });
    let data;
    if (result) {
      data = {
        status: 1,
        data: result,
      };
    } else {
      data = {
        status: 0,
        data: '获取文章详情失败',
      };
    }
    return data;
  }

  /**
   * add one service
   * @param {Object} payload - input data
   * @return {Object} - return data
   */
  async add(payload) {
    const result = await this.ctx.model.List.create(payload);
    let data;
    if (result) {
      data = {
        status: 1,
        data: result,
      };
    } else {
      data = {
        status: 0,
        data: '获取列表失败',
      };
    }
    return data;
  }

  /**
   * delete one service
   * @param {Object} id - input data
   * @return {Object} - return data
   */
  async del(id) {
    const result = await this.ctx.model.List.findByIdAndUpdate({ _id: id }, { del: true }, {
      title: 1,
      id: 1,
      publishedAt: 1,
      updateAt: 1,
      content: 1,
    });
    let data;
    if (result) {
      data = {
        status: 1,
        data: result,
      };
    } else {
      data = {
        status: 0,
        data: '删除失败',
      };
    }
    return data;
  }

  /**
   * edit one service
   * @param {Object} payload - input data
   * @return {Object} - return data
   */
  async edit(payload) {
    const result = await this.ctx.model.List.findByIdAndUpdate(
      { _id: payload._id },
      { $set: {
        title: payload.title,
        content: payload.content,
      },
      }
    );
    let data;
    if (result) {
      data = {
        status: 1,
        data: result,
      };
    } else {
      data = {
        status: 0,
        data: '修改失败',
      };
    }
    return data;
  }
}

module.exports = ListService;
