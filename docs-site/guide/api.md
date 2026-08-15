# API 调用

## 认证

OpenAI 和 Anthropic 兼容接口推荐使用 Bearer Token：

```http
Authorization: Bearer YOUR_API_KEY
```

Gemini 原生客户端也可使用 `x-goog-api-key`。不要把密钥放在浏览器前端、公开仓库或可下载的客户端包中。

## 常用接口

| 协议或用途 | 方法与路径 |
| --- | --- |
| 查询模型 | `GET /v1/models` |
| OpenAI Responses | `POST /v1/responses` |
| OpenAI Chat Completions | `POST /v1/chat/completions` |
| Anthropic Messages | `POST /v1/messages` |
| Anthropic Token 计数 | `POST /v1/messages/count_tokens` |
| Embeddings | `POST /v1/embeddings` |
| 图片生成 | `POST /v1/images/generations` |
| 图片编辑 | `POST /v1/images/edits` |
| 视频创建与查询 | `POST /v1/videos`、`GET /v1/videos/{request_id}` |
| Grok Web / X 搜索 | `POST /v1/web_search`、`POST /v1/x_search` |
| Grok 语音合成 / 识别 | `POST /v1/tts`、`POST /v1/stt` |
| Grok 自定义语音 | `/v1/custom-voices` 及其 `{voice_id}` 子路径 |
| Grok Realtime | `GET /v1/realtime`（WebSocket） |
| Gemini 模型列表 | `GET /v1beta/models` |
| Gemini 内容生成 | `POST /v1beta/models/{model}:generateContent` |
| Gemini 流式生成 | `POST /v1beta/models/{model}:streamGenerateContent?alt=sse` |

并非所有分组或模型都支持表中全部接口。视频、搜索、语音和 Realtime 还取决于分组平台、上游账号能力及管理员是否完成对应价格和功能配置；当前实现中的 Grok 搜索与语音路由只对 Grok 分组开放。请先查询模型，并根据客户端和模型选择对应协议。

视频任务还可通过 `/v1/videos/generations`、`/v1/videos/edits`、`/v1/videos/extensions` 创建，并用对应的 `{request_id}` 状态或 `content` 子路径查询。异步媒体请求应保留创建接口返回的请求 ID，轮询到完成状态后再下载结果。

## OpenAI SDK

::: danger 地区限制
本站不向来自中国大陆的用户提供任何 OpenAI 相关服务。
:::

### Python

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://sub.fastapi.cool/v1",
)

response = client.responses.create(
    model="MODEL_ID",
    input="Hello",
)
print(response.output_text)
```

### Node.js

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.FAST_API_KEY,
  baseURL: "https://sub.fastapi.cool/v1",
});

const response = await client.responses.create({
  model: "MODEL_ID",
  input: "Hello",
});
console.log(response.output_text);
```

## Anthropic Messages

```bash
curl https://sub.fastapi.cool/v1/messages \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "MODEL_ID",
    "max_tokens": 512,
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

## Gemini 原生接口

```bash
curl "https://sub.fastapi.cool/v1beta/models/MODEL_ID:generateContent" \
  -H "x-goog-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'
```

## 流式输出与重试

支持流式输出的接口可设置 `"stream": true`，Gemini 使用 `streamGenerateContent?alt=sse`。客户端应设置合理的连接和读取超时；只对可安全重试的请求采用指数退避，并避免因重复提交产生重复计费。

## 错误排查

| 状态码 | 常见含义 |
| --- | --- |
| `400` | 参数、模型或协议不正确 |
| `401` | API Key 缺失、错误或已失效 |
| `403` | 分组、模型、IP 或权限限制 |
| `402` | 余额或订阅额度不足 |
| `429` | 速率、并发或上游配额限制 |
| `5xx` | 网关或上游暂时异常 |

具体原因以响应体和控制台使用记录为准。
