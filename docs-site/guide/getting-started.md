# 快速开始

## 1. 注册并登录

打开 [Fast API 控制台](https://sub.fastapi.cool/register)，按页面提示完成人机验证、邮箱验证并登录。注册或第三方登录首次创建账号时是否需要人机验证，以站点当前安全配置为准。第三方登录在确认创建新账号前会校验当前待处理登录流程，请勿转发回调地址、验证码或在不受信任的页面继续授权。

如果页面使用腾讯验证码，请在弹出后及时完成；票据过期时刷新页面后重试。管理员只有启用腾讯验证码时才需要配置服务站点，并确保中国站或国际站与 `CaptchaAppId` 所属控制台一致；两站凭据不能混用。

如果管理员配置了邮箱域名白名单，注册规则以页面提示为准：白名单留空时不限制域名；白名单非空时，管理员还可选择是否允许其他主流邮箱主域名各注册一个账户。该限量开关默认关闭，关闭时非白名单域名会被直接拒绝。

登录后建议进入[「个人资料」](https://sub.fastapi.cool/profile)启用 TOTP 二次验证。如果页面提供 Passkey（通行密钥），也可以在验证当前密码后绑定设备，用于更安全、便捷地登录；该能力取决于浏览器、设备和站点配置。

## 2. 查看可用渠道和模型

先打开[「模型广场」](https://sub.fastapi.cool/model-plaza)浏览站点公开的模型、分组与价格。模型广场可能由管理员关闭或要求登录；复合分组可汇总多个平台的模型，表格中的平台标识用于区分模型来源。登录后还可进入[「可用渠道」](https://sub.fastapi.cool/available-channels)，查看当前账号实际可访问的渠道、分组、支持模型和价格信息。需要排查服务状态时，可打开[「渠道状态」](https://sub.fastapi.cool/monitor)查看近期可用性和延迟；页面可能采用主动探测视图，或采用基于真实请求聚合的被动监控视图，取决于管理员配置。

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
