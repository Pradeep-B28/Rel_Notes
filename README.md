# 📝 relnotes

> Stop writing changelogs. Let AI do it in seconds.

[![npm version](https://badge.fury.io/js/relnotes.svg)](https://badge.fury.io/js/relnotes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Why?
Writing release notes is boring, repetitive, and takes 20 minutes of digging through Git logs. `relnotes` does it in **5 seconds** with the tone you actually want.

## ✨ Features
- 🔍 Auto-detects latest tags if you don't specify them.
- 🤖 Uses GPT-4 to summarize commits intelligently (groups by feature/fix).
- 🎭 3 Tones: `professional`, `funny` (pirate mode), and `concise`.
- 📄 Outputs to stdout or directly to `CHANGELOG.md`.

## ⚡️ Quick Start

```bash
npx relnotes