module.exports = app => {
  const { router, controller, swagger } = app
  swagger.post('/api/user/access/login',{
    tags:['access'],
    summary:'系统登录',
    description:'系统登录',
    parameters:[
    {
      in:'string',
      name:'mobile',
      description: '登录账户',
    },
    {
      in:'string',
      name:'password',
      description: '密码',
    }]
  })

  swagger.get('/api/user/access/current',
    {
      tags:['access'],
      summary:'查看登录的用户信息',
      description:'查看登录的用户信息',
    })

  swagger.get('/api/book',
  {
    tags:['书籍'],
    summary:'获取所有书籍',
    description:'获取所有书籍',
  })
  swagger.get('/api/readlog',
  {
    tags:['书籍'],
    summary:'书籍读书记录',
    description:'书籍读书记录',
  })
  swagger.get('/api/readlog/status/:id',
  {
    tags:['书籍'],
    summary:'获取当前阅读状态',
    description:'获取当前阅读状态',
  })
}