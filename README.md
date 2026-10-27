<div align="center">

# 📝 relnotes — AI-Powered Release Notes CLI Generator

### *Stop Writing Changelogs Manually. Let Groq Llama 3 Transform Git Commits into Enterprise Release Notes in Seconds.*

[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Groq API](https://img.shields.io/badge/LLM-Groq%20Llama%203.3%2070B-f55036?style=for-the-badge)](https://console.groq.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-key-features">Key Features</a> •
  <a href="#-installation--setup">Setup</a> •
  <a href="#-cli-usage--examples">Usage & Examples</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-license--copyright">License & Copyright</a>
</p>

</div>

---

## 💡 Overview

**relnotes** automates the changelog authoring workflow. By interfacing directly with local Git history via `simple-git` and dispatching commit logs to **Groq's ultra-low latency Llama-3.3-70B model**, **relnotes** produces professional, structured markdown release notes within seconds.

---

## ⚡ Key Features

- ⚡ **Ultra-Fast AI Inference**: Powered by Groq's LPU inference engine running `llama-3.3-70b-versatile`.
- 🏷️ **Automated Semantic Grouping**: Categorizes raw commits into Features, Bug Fixes, Refactors, and Breaking Changes.
- 🎭 **Customizable Tones**:
  - `professional`: Structured enterprise changelog format grouped by domain.
  - `concise`: High-density bulleted summary with zero fluff (max 5 lines).
  - `funny`: Humorous, Slack/pirate-style release announcement with TL;DR and emojis.
- 🎯 **Flexible Git Range Resolution**: Compares any two tags or branches, or auto-detects changes between the two most recent git tags.
- 📄 **Direct File Output**: Outputs directly to stdout or writes directly to `CHANGELOG.md` or release files.

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.0.0 or higher.
- A free [Groq Cloud API Key](https://console.groq.com/keys).

### Local Installation & Build

```powershell
# 1. Clone repository
git clone https://github.com/Pradeep-B28/Rel_Notes.git
cd Rel_Notes

# 2. Install dependencies
npm install

# 3. Build TypeScript to dist/
npm run build

# 4. Link CLI globally
npm link
```

### Environment Configuration

Configure your `GROQ_API_KEY`:

```powershell
# In PowerShell:
$env:GROQ_API_KEY = "gsk_your_groq_api_key_here"

# Or create a .env file in the project root:
GROQ_API_KEY=gsk_your_groq_api_key_here
```

---

## 💻 CLI Usage & Examples

### Command Syntax

```bash
relnotes [from] [to] [options]
```

### Options

| Option | Shorthand | Description | Default |
| :--- | :--- | :--- | :--- |
| `--tone <tone>` | `-t` | Tone of generated notes (`professional`, `concise`, `funny`) | `professional` |
| `--output <file>` | `-o` | Target file path to write release notes to | `stdout` |
| `--help` | `-h` | Display command help and options | — |
| `--version` | `-V` | Output CLI version | — |

### Real-World Examples

```bash
# 1. Auto-detect commits between the two latest tags:
relnotes

# 2. Compare a specific release tag with the current working branch:
relnotes v1.0.0 main

# 3. Generate concise notes and save directly to CHANGELOG.md:
relnotes v1.0.0 v1.1.0 --tone concise -o CHANGELOG.md

# 4. Generate a fun Slack announcement:
relnotes v1.1.0 v1.2.0 -t funny
```

---

## 📁 Repository Architecture

```text
Rel_Notes/
├── src/
│   ├── index.ts               # Public library export module
│   ├── cli.ts                 # Commander CLI definition & runtime handler
│   ├── git.ts                 # simple-git repository inspection & tag resolver
│   ├── ai.ts                  # Groq API client & prompt engineering pipeline
│   └── types.ts               # TypeScript data interfaces (Commit, Tone)
├── dist/                      # Compiled JavaScript binaries
├── tsconfig.json              # TypeScript compiler configuration
├── package.json               # Package metadata and bin declaration
├── LICENSE                    # MIT License with copyright
└── README.md                  # Comprehensive documentation
```

---

## 📄 License & Copyright

```
Copyright (c) 2026 Pradeep (Pradeep-B28). All Rights Reserved.

Licensed under the MIT License. You may freely use, modify, and distribute
this project under the terms of the MIT license. See the LICENSE file for details.
```

Crafted with ⚡ by **[Pradeep](https://github.com/Pradeep-B28)**.

---

## 👨‍💻 Author & Contact

**Pradeep B**  
*Java & DSA Master Trainer | Full-Stack Architect | Web Platform Engineer*

- 🌐 **Softech Career & Placement Portal:** [reachsoftech.onrender.com](https://reachsoftech.onrender.com/home)
- 🌌 **3D Interactive Developer Portfolio:** [pradeep-b28.github.io/GIT_3D_Portfolio](https://pradeep-b28.github.io/GIT_3D_Portfolio/)
- 💻 **GitHub Profile:** [@Pradeep-B28](https://github.com/Pradeep-B28)
- 💼 **LinkedIn:** [linkedin.com/in/pradeepb-2k](https://www.linkedin.com/in/pradeepb-2k)
- 📧 **Email:** [pradeepbashaa@gmail.com](mailto:pradeepbashaa@gmail.com)

### 🚀 Live Web Applications & Platforms
- 🌐 **Softech Career Portal:** [reachsoftech.onrender.com](https://reachsoftech.onrender.com/home)
- 🗺️ **Namma Route (Tamil Nadu Transit Graph):** [nammaroute-sigma.vercel.app](https://nammaroute-sigma.vercel.app/)
- 🎆 **Diwali Sky (Fireworks Simulator):** [diwalisky.vercel.app](https://diwalisky.vercel.app)
- ⚪ **Life in Dots (Lifespan in Weeks):** [lifeindots.vercel.app](https://lifeindots.vercel.app)
- 🤖 **Catch the AI (Code Review & Debug Game):** [catch-the-ai.vercel.app](https://catch-the-ai.vercel.app/)
