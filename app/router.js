'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/list', controller.list.list);
  router.get('/one/:id', controller.list.getOne);
  router.post('/one', controller.list.addOne);
  router.delete('/one/:id', controller.list.delOne);
  router.put('/one', controller.list.editOne);
};
