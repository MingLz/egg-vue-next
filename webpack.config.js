module.exports = {
  egg: true,
  framework: 'vue', // 使用 easywebpack-vue 构建解决方案
  entry: {
    include: [ 'app/web/page' ], // 自动遍历 app/web/page 目录下的 js 文件入口
    exclude: [ 'app/web/page/[a-z]+/component' ],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    },
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'], // webpack dll 构建
  loaders: {},
  plugins: {},
  done() { // 编译完成回调

  },
};
