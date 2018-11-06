'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, swagger } = app
  require('./swagger')(app);
  router.get('/', controller.home.index)

  // userAccess
  router.post('/api/user/access/login', controller.userAccess.login)


  router.get('/api/user/access/current', app.jwt, controller.userAccess.current)

  router.get('/api/user/access/logout',app.jwt, controller.userAccess.logout)
  router.put('/api/user/access/resetPsw', app.jwt, controller.userAccess.resetPsw)

  router.delete('/api/user',app.jwt, controller.user.removes)
  router.resources('user', '/api/user', controller.user)



  // upload
  router.post('/api/upload',app.jwt, controller.upload.create)
  router.post('/api/upload/url',app.jwt, controller.upload.url)
  router.post('/api/uploads',app.jwt, controller.upload.multiple)
  router.delete('/api/upload/:id',app.jwt, controller.upload.destroy)
  router.post('/api/upload/:id',app.jwt, controller.upload.update) // Ant Design Pro
  router.put('/api/upload/:id/extra',app.jwt, controller.upload.extra)
  router.get('/api/upload/:id',app.jwt, controller.upload.show)
  router.get('/api/upload',app.jwt, controller.upload.index)
  router.delete('/api/upload',app.jwt, controller.upload.removes)
  // router.resources('upload', '/api/upload', controller.upload)
}
