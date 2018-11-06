module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513779989145_1674'

  // add your config here
  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ]

  // 只对 /api 前缀的 url 路径生效
  // config.errorHandler = {
  //   match: '/api',
  // }

  config.multipart = {
    fileExtensions: [ '.png', '.jpeg', '.jpg', '.gif'],
  },

  config.bcrypt = {
    saltRounds: 10 // default 10
  }

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/image_bed',
    options: {
      useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  }

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  }
  config.security = {
    csrf:{
      enable:false,
      ignoreJSON:true,
    },
    domainWhiteList: [ 'http://langwenda.com:8002','http://localhost:3002'],
  }
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '0.0.0.0',
    }
  };
  return config
}
