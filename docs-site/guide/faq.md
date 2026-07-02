# 常见问题

## Base URL 应该填什么？

- OpenAI 兼容客户端：`https://www.fastapi.cool/v1`
- Claude Code / Anthropic：`https://www.fastapi.cool`
- Gemini 原生接口：`https://www.fastapi.cool`

不要把 `/chat/completions` 重复附加到已经要求填写完整地址的客户端字段中。

## 为什么提示 401？

检查密钥是否完整、是否多了空格、是否已禁用或过期，并确认请求头为 `Authorization: Bearer YOUR_API_KEY`。

## 为什么提示 402 或余额不足？

检查账户余额、订阅状态、周期额度和 API Key 自身额度。订阅额度与充值余额可能采用不同的结算范围。

## 为什么提示 403？

常见原因是密钥无权访问该模型、IP 白名单不匹配、分组不可用或服务地区限制。

## 为什么提示 429？

当前请求超过并发、RPM、TPM 或上游动态配额。降低并发，读取 `Retry-After`（如有）并采用指数退避。

## 模型名称从哪里获取？

调用 `GET /v1/models`，或查看控制台当前可用模型。不要假设某个上游模型一定已经开放。

## 密钥泄露怎么办？

立即在控制台禁用或删除密钥，创建新密钥，检查使用记录和异常消费；账户凭证可能泄露时同时修改密码并启用 TOTP。

## 如何联系客服？

发送邮件至 [fast.api@qq.com](mailto:fast.api@qq.com)，提供注册邮箱、订单号或请求时间、问题描述和脱敏截图。客服不会索要密码、完整 API Key、验证码或 TOTP 密钥。
