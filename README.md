<div align="center">

# 📝 relnotes — AI-Powered Release Notes CLI Generator

### *Stop Writing Changelogs Manually. Let AI Generate Structured Release Notes in 1 Second.*

[![npm version](https://badge.fury.io/js/relnotes.svg)](https://badge.fury.io/js/relnotes)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Groq API](https://img.shields.io/badge/Groq-Free%20API-f55036?style=for-the-badge)](https://console.groq.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-quick-usage">Quick Usage</a> •
  <a href="#-cli-options">CLI Options</a>
</p>

---

</div>

> [!TIP]
> **relnotes** uses high-speed Groq LLM inference to analyze your recent `git log` commits, group them logically (Features, Fixes, Refactors, Breaking Changes), and format them into clean Markdown.

---

## ⚡ Features

- 🚀 **Lightning Fast**: Powered by Groq's Llama 3 70B inference engine (sub-second release note generation).
- 🏷️ **Smart Commit Categorization**: Automatically groups commits into `Features`, `Bug Fixes`, `Performance Boosts`, and `Breaking Changes`.
- 🔍 **Git Tag Awareness**: Analyzes commits between specified tags (`--since v1.0.0 --until v1.2.0`).
- 📄 **Flexible Export**: Outputs directly to terminal stdout or appends to `CHANGELOG.md`.

---

## 🚀 Installation & Setup

```bash
# Global installation via npm
npm install -g relnotes

# Or run directly via npx
npx relnotes
```

### Get a Free Groq API Key
Set your `GROQ_API_KEY` environment variable:

```bash
# Linux/macOS
export GROQ_API_KEY="gsk_..."

# Windows PowerShell
$env:GROQ_API_KEY="gsk_..."
```

---

## 💻 Quick Usage

```bash
# Generate release notes for the latest 10 commits
relnotes

# Generate release notes since a specific Git tag
relnotes --since v1.0.0

# Export release notes to CHANGELOG.md
relnotes --out CHANGELOG.md
```

---

<div align="center">

Crafted by **[Pradeep](https://github.com/Pradeep-B28)**

</div>
