'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/list', controller.list.list);
  router.get('/list/:id', controller.list.listOne);
};
