---
layout: home

hero:
  name: Fast API
  text: Sub2API 网关接入文档
  tagline: 一个 API Key 接入站内已开放的模型，并统一查看额度、订阅和调用记录。
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
  - title: 密钥与额度可控
    details: 可设置密钥过期时间、额度、模型范围和 IP 白名单。
  - title: 用量透明
    details: 在控制台查看请求记录、Token、费用、响应耗时和错误信息。
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

::: tip
首次使用建议先完成一次[快速开始](/guide/getting-started)，不要把真实密钥粘贴到聊天、截图、代码仓库或客户端日志中。
:::
