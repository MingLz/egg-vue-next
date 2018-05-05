const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;
const WechatApi = require('co-wechat-api');
const wechatConfig = require('../../config/config.wecher');

const wx = new WechatApi(wechatConfig.appId, wechatConfig.appSecret)

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
    const { query } = this.ctx;

    if ( !query.url ) {
        return {
            success : false,
            error_code: 'URL NULL',
            error_msg: '缺失url参数'
        }
    }
    console.log(query.url)
    return wx.addLocations(query.url);
  }

  // 行为
  async postBehavior() {
    const { ctx } = this
    console.log(ctx.query.url)
    return 
  } 
}
module.exports = WechatService;