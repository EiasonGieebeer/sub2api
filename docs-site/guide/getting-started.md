# 快速开始

## 1. 注册并登录

打开 [Fast API 控制台](https://sub.fastapi.cool/register)，按页面提示完成人机验证、邮箱验证并登录。注册或第三方登录首次创建账号时是否需要人机验证，以站点当前安全配置为准。

登录后建议进入[「个人资料」](https://sub.fastapi.cool/profile)启用 TOTP 二次验证。如果页面提供 Passkey（通行密钥），也可以在验证当前密码后绑定设备，用于更安全、便捷地登录；该能力取决于浏览器、设备和站点配置。

## 2. 查看可用渠道和模型

先打开[「模型广场」](https://sub.fastapi.cool/model-plaza)浏览站点公开的模型、分组与价格。模型广场可能由管理员关闭或要求登录；登录后还可进入[「可用渠道」](https://sub.fastapi.cool/available-channels)，查看当前账号实际可访问的渠道、分组、支持模型和价格信息。需要排查服务状态时，可打开[「渠道状态」](https://sub.fastapi.cool/monitor)查看近期可用性和延迟。

模型广场用于选型参考；模型、价格和可用协议可能随账号分组、订阅状态和管理员配置变化。实际调用前仍应查询 `/v1/models`，并以当前 API Key 的接口返回为准。

## 3. 充值、订阅或兑换

如需增加可用额度，可进入[「充值/订阅」](https://sub.fastapi.cool/purchase)：

- 「充值」用于增加账户余额；
- 「订阅」用于购买可用套餐；
- 支付后可在[「我的订单」](https://sub.fastapi.cool/orders)查看状态；
- 已获得兑换码时，可在[「兑换码」](https://sub.fastapi.cool/redeem)兑换余额、并发或订阅权益。

如暂未开放支付入口、没有可用套餐或没有可用支付方式，请以页面提示为准并联系管理员。

## 4. 创建 API Key

进入[「API 密钥」](https://sub.fastapi.cool/keys)，点击创建密钥。建议按用途分别创建，并设置：

- 容易识别的名称；
- 合理的额度上限和有效期；
- 需要使用的模型范围；
- 固定服务端调用时配置 IP 白名单。

密钥通常只在创建时完整展示，请立即安全保存。

## 5. 获取可用模型

```bash
curl https://sub.fastapi.cool/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

实际模型和可用协议由密钥所属分组决定，请以接口返回和控制台显示为准。

## 6. 发起一次测试

以下示例使用 OpenAI Chat Completions。请将 `MODEL_ID` 替换为真实可用模型：

```bash
curl https://sub.fastapi.cool/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "MODEL_ID",
    "messages": [{"role": "user", "content": "Say hello"}],
    "stream": false
  }'
```

::: danger OpenAI 服务地区限制
根据中国大陆的法律法规限制，本站不为来自中国大陆的用户提供任何 OpenAI 相关的服务，请来自中国大陆的用户自觉停止访问本站。
:::

## 7. 查看调用记录

登录后进入[「使用记录」](https://sub.fastapi.cool/usage)，可核对模型、Token、费用、状态和耗时。遇到错误时记录请求时间和请求 ID，再联系客服；不要发送完整 API Key。
