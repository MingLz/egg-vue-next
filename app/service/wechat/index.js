const Service = require('egg').Service;
const Wechat = require('wechat-jssdk');
const wechatConfig = require('../../config/wechat.config.js');

const wx = new Wechat(wechatConfig);

class WechatService extends Service {

  // 验证微信
  async verifySignature(query) {
    if (wx.jssdk.verifySignature(query)) {
      console.log(`verifySignature${JSON.stringify(query)}`);
      return {
        success: true,
        echostr: query.echostr
      };
    }
    return {
      success: false
    };
  }

  // 获取微信JSSDK验证
  async getSignature() {
    const { ctx } = this;
    return wx.jssdk.getSignature(ctx.query.url);
  }

  // 行为
  async postBehavior() {
    const { ctx } = this;
    console.log(ctx.query.url);

    return;
  }
}
module.exports = WechatService;