# 📝 relnotes

> **Stop writing changelogs. Let AI write them in 1 second.**

[![npm version](https://badge.fury.io/js/relnotes.svg)](https://badge.fury.io/js/relnotes)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Groq API](https://img.shields.io/badge/Groq-Free%20API-purple)](https://console.groq.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## 📖 Table of Contents
- [Why Another Release Tool?](#-why-another-release-tool)
- [✨ Features](#-features)
- [🎥 Demo](#-demo)
- [⚡️ Quick Start](#%EF%B8%8F-quick-start)
- [🛠 Installation & Setup](#-installation--setup)
- [🔑 Configuration (Groq API)](#-configuration-groq-api)
- [🎯 Usage & Examples](#-usage--examples)
- [🧠 How It Works (Under the Hood)](#-how-it-works-under-the-hood)
- [⚠️ Troubleshooting](#-troubleshooting)
- [🗺️ Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🤔 Why Another Release Tool?

Writing release notes is **boring**, **repetitive**, and steals **20 minutes** of digging through Git logs. 

Most developers just copy-paste commit messages and call it a day—which is useless for users. `relnotes` fixes this by using **AI (Llama 3.3 70B via Groq)** to summarize your Git history into **clean, categorized, and readable Markdown** in under 1 second. 

**Best part?** Groq's API is **completely free** with a generous rate limit, so this tool costs you exactly **$0** to run forever.

---

## ✨ Features

- ⚡️ **Blazing Fast:** Powered by Groq's LPU inference engine—generates notes in ~500ms.
- 🆓 **100% Free:** Uses Groq's free tier. No OpenAI billing or credit cards required.
- 🔍 **Smart Auto-Detect:** If you don't specify references, it automatically compares your latest two Git tags.
- 🎭 **3 Unique Tones:** 
  - `professional`: Enterprise-grade, categorized changelogs.
  - `funny`: Over-the-top pirate/slack humor with emojis (perfect for internal demos).
  - `concise`: Zero fluff, bare-bones bullet points.
- 📄 **Flexible Output:** Print to terminal or save directly to `CHANGELOG.md`.
- 🔧 **Zero Setup:** Just clone, add your API key, and run. 

---

## 🎥 Demo

*(Pro Tip: Replace this placeholder with a GIF of you running `relnotes` in your terminal!)*

![Demo Placeholder](https://via.placeholder.com/800x400/0D1117/FFFFFF?text=GIF:+Running+relnotes+in+Terminal)

**Example Output:**
```markdown
## Release Notes (Professional)

### 🚀 New Features
- **Payment Gateway**: Integrated Stripe API for secure transactions.
- **Map View**: Added interactive dashboard map.

### 🐛 Bug Fixes
- Fixed login crash on Safari browsers.
- Resolved memory leak in image uploader.

### 🧹 Chores
- Updated dependencies to latest versions.
```

