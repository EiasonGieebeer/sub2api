# 快速开始

## 1. 注册并登录

打开 [Fast API 控制台](https://www.fastapi.cool/register)，完成邮箱验证并登录。建议进入个人资料立即启用 TOTP 二次验证。

## 2. 创建 API Key

进入[「API 密钥」](https://www.fastapi.cool/keys)，点击创建密钥。建议按用途分别创建，并设置：

- 容易识别的名称；
- 合理的额度上限和有效期；
- 需要使用的模型范围；
- 固定服务端调用时配置 IP 白名单。

密钥通常只在创建时完整展示，请立即安全保存。

## 3. 获取可用模型

```bash
curl https://www.fastapi.cool/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

实际模型和可用协议由密钥所属分组决定，请以接口返回和控制台显示为准。

## 4. 发起一次测试

以下示例使用 OpenAI Chat Completions。请将 `MODEL_ID` 替换为真实可用模型：

```bash
curl https://www.fastapi.cool/v1/chat/completions \
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

## 5. 查看调用记录

登录后进入[「使用记录」](https://www.fastapi.cool/usage)，可核对模型、Token、费用、状态和耗时。遇到错误时记录请求时间和请求 ID，再联系客服；不要发送完整 API Key。
