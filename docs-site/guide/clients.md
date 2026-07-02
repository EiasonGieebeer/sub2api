# 客户端配置

## 地址速查

| 客户端类型 | Base URL |
| --- | --- |
| OpenAI 兼容客户端 | `https://www.fastapi.cool/v1` |
| Claude Code / Anthropic | `https://www.fastapi.cool` |
| Gemini 原生客户端 | `https://www.fastapi.cool` |

模型名称必须使用当前密钥实际可访问的模型 ID。

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
base_url = "https://www.fastapi.cool/v1"
env_key = "FAST_API_KEY"
wire_api = "responses"
```

设置环境变量后启动：

```bash
export FAST_API_KEY="YOUR_API_KEY"
codex
```

## Claude Code

```bash
export ANTHROPIC_BASE_URL="https://www.fastapi.cool"
export ANTHROPIC_AUTH_TOKEN="YOUR_API_KEY"
export ANTHROPIC_MODEL="MODEL_ID"
claude
```

Windows PowerShell：

```powershell
$env:ANTHROPIC_BASE_URL="https://www.fastapi.cool"
$env:ANTHROPIC_AUTH_TOKEN="YOUR_API_KEY"
$env:ANTHROPIC_MODEL="MODEL_ID"
claude
```

## Gemini CLI / SDK

不同版本的 Gemini 工具对自定义地址的变量名可能不同。核心配置是：

```text
Base URL: https://www.fastapi.cool
API Key: YOUR_API_KEY
```

Gemini 原生请求使用 `/v1beta` 路径和 `x-goog-api-key` 请求头。请以所用客户端版本的自定义端点说明为准。

## ChatBox、Cherry Studio 等

1. 选择 OpenAI Compatible 或自定义 OpenAI 服务；
2. Base URL 填写 `https://www.fastapi.cool/v1`；
3. 填入 API Key；
4. 手动添加真实模型 ID；
5. 先进行非流式文本测试，再启用流式、图片或工具调用。

客户端是否支持自定义地址、Responses、工具调用和多模态由客户端自身决定。
