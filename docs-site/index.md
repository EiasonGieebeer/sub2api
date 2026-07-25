---
layout: home

hero:
  name: Fast API
  text: Sub2API 网关接入文档
  tagline: 注册登录后创建 API Key，查看可用渠道和模型，按需充值、订阅、兑换，并统一核对订单、额度和调用记录。
  image:
    src: /logo.svg
    alt: Fast API
  actions:
    - theme: brand
      text: 5 分钟快速开始
      link: /guide/getting-started
    - theme: alt
      text: 创建 API Key
      link: https://sub.fastapi.cool/keys
    - theme: alt
      text: 进入控制台
      link: https://sub.fastapi.cool/dashboard

features:
  - title: 多协议兼容
    details: 支持 OpenAI Responses、Chat Completions、Anthropic Messages 和 Gemini 原生接口。
  - title: 渠道与额度透明
    details: 可在控制台查看可用渠道、渠道状态、订阅套餐、余额和订单状态。
  - title: 密钥与风控可控
    details: 可为不同环境创建独立密钥，并设置额度、有效期、模型范围和 IP 白名单。
---

::: danger 重要警示
根据中国大陆的法律法规限制，本站不为来自中国大陆的用户提供任何 OpenAI 相关的服务，请来自中国大陆的用户自觉停止访问本站。
:::

## 接入信息

| 项目 | 内容 |
| --- | --- |
| 控制台 | `https://sub.fastapi.cool` |
| OpenAI Base URL | `https://sub.fastapi.cool/v1` |
| Anthropic Base URL | `https://sub.fastapi.cool` |
| Gemini Base URL | `https://sub.fastapi.cool` |
| API Key | 在控制台的「API 密钥」页面创建 |
| 模型名称 | 通过 `/v1/models` 或控制台当前可用模型获取 |
| 可用渠道 | 登录后查看「可用渠道」页面 |
| 充值与订阅 | 登录后进入「充值/订阅」页面 |

::: tip
首次使用建议先完成一次[快速开始](/guide/getting-started)，不要把真实密钥粘贴到聊天、截图、代码仓库或客户端日志中。
:::
