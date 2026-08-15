# 客户端配置

## 地址速查

| 客户端类型 | Base URL |
| --- | --- |
| OpenAI 兼容客户端 | `https://sub.fastapi.cool/v1` |
| Claude Code / Anthropic | `https://sub.fastapi.cool` |
| Gemini 原生客户端 | `https://sub.fastapi.cool` |

模型名称必须使用当前密钥实际可访问的模型 ID。

::: tip
建议先在控制台查看[可用渠道](https://sub.fastapi.cool/available-channels)，再调用 `/v1/models` 确认当前 API Key 实际可访问的模型。客户端里手动填写的模型名必须与返回的模型 ID 一致。
:::

## Codex CLI

::: danger 地区限制
本站不向来自中国大陆的用户提供任何 OpenAI 相关服务。
:::

编辑 `~/.codex/config.toml`：

```toml
model = "MODEL_ID"
model_provider = "fast_api"

[model_providers.fast_api]
name = "Fast API"
base_url = "https://sub.fastapi.cool/v1"
env_key = "FAST_API_KEY"
wire_api = "responses"
```

设置环境变量后启动：

```bash
export FAST_API_KEY="YOUR_API_KEY"
codex
```

网关管理员通常应让 Codex 上游身份和客户端版本保持自动同步；只有上游明确要求固定版本或自定义终端指纹时才需要覆盖。自定义后也应确保 User-Agent 首段、尾部身份和 `version` 头使用同一版本，避免陈旧身份影响上游路由。

## Claude Code

```bash
export ANTHROPIC_BASE_URL="https://sub.fastapi.cool"
export ANTHROPIC_AUTH_TOKEN="YOUR_API_KEY"
export ANTHROPIC_MODEL="MODEL_ID"
claude
```

Windows PowerShell：

```powershell
$env:ANTHROPIC_BASE_URL="https://sub.fastapi.cool"
$env:ANTHROPIC_AUTH_TOKEN="YOUR_API_KEY"
$env:ANTHROPIC_MODEL="MODEL_ID"
claude
```

## Gemini CLI / SDK

不同版本的 Gemini 工具对自定义地址的变量名可能不同。核心配置是：

```text
Base URL: https://sub.fastapi.cool
API Key: YOUR_API_KEY
```

Gemini 原生请求使用 `/v1beta` 路径和 `x-goog-api-key` 请求头。请以所用客户端版本的自定义端点说明为准。

## ChatBox、Cherry Studio 等

1. 选择 OpenAI Compatible 或自定义 OpenAI 服务；
2. Base URL 填写 `https://sub.fastapi.cool/v1`；
3. 填入 API Key；
4. 手动添加真实模型 ID；
5. 先进行非流式文本测试，再启用流式、图片或工具调用。

客户端是否支持自定义地址、Responses、工具调用和多模态由客户端自身决定。

## Grok CLI 与媒体能力

当 API Key 所属分组为 Grok 时，「API 密钥」页面的使用说明可按当前平台生成 Grok CLI、Claude Code、Codex CLI 或 OpenCode 示例。优先复制页面生成的配置，避免把 OpenAI、Anthropic 与 Grok 的认证变量混用。

Grok 分组可能额外开放视频、Web/X 搜索、TTS、STT、Realtime 和自定义语音；这些能力并非所有密钥默认可用，也不应仅根据模型广场判断。请以当前 API Key 的 `/v1/models` 返回、页面提示和实际接口响应为准。
