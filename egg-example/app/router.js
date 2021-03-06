'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news',controller.news.index);
  router.get('/news/content',controller.news.content);
  router.get('/news/list/:id',controller.news.list);
  router.get('/admin',controller.admin.index);
};
