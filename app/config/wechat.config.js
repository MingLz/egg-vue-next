module.exports = {
    wechatRedirectUrl: "http://yourdomain.com/wechat/oauth-callback", 
    wechatToken: "xxx", //第一次在微信控制台保存开发者配置信息时使用
    appId: "xxx",
    appSecret: "xxx",
    card: false, //开启卡券支持，默认关闭
    payment: false, //开启支付支持，默认关闭
    merchantId: '', //商户ID
    paymentSandBox: false, //沙箱模式，验收用例
    paymentKey: '', //必传，验签密钥，TIP:获取沙箱密钥也需要真实的密钥，所以即使在沙箱模式下，真实验签密钥也需要传入。
    //pfx 证书
    paymentCertificatePfx: fs.readFileSync(path.join(process.cwd(), 'cert/apiclient_cert.p12')),
    //默认微信支付通知地址
    paymentNotifyUrl: `http://your.domain.com/api/wechat/payment/`,
  }