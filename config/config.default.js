const path = require('path');
const fs = require('fs');
const mongoConf = require('../app/config/mongodb.conf');
const commonConf = require('../app/config/common.conf');

module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  exports.keys = commonConf.cookieKeys;

  exports.middleware = [
    'access'
  ];
  exports.security = {
    csrf: {
      enable: false,
      ignore: '/api'
    },
  };
  exports.mongoose = {
    client: {
      url: mongoConf.dbUrl,
      options: mongoConf.options,
    },
  };
  return exports;
};
