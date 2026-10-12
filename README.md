<div align="center">

# 🔒 ENTE
### End-to-End Encrypted Cloud Storage & Photo Memories

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Docker Support](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![End-to-End Encrypted](https://img.shields.io/badge/Security-E2EE%20Zero--Knowledge-success?style=for-the-badge&logo=shield)](https://ente.io)
[![License](https://img.shields.io/badge/License-AGPLv3-orange?style=for-the-badge)](LICENSE)

<br/>

<p align="center">
  <b>A private, secure, and encrypted alternative to Google Photos & Apple iCloud.</b><br/>
  Zero-knowledge architecture ensuring that only you hold the keys to your memories and files.
</p>

---

</div>

<br/>

## 👑 Leadership & Executive Team

<div align="center">

| <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Akshit" width="110" height="110" style="border-radius:50%"/> <br/> **Akshit Rai Kakkar** | <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Dipanshu" width="110" height="110" style="border-radius:50%"/> <br/> **Dipanshu Batra** |
| :---: | :---: |
| 👔 **Chief Executive Officer (CEO)** | 💻 **Chief Technology Officer (CTO)** |
| *Vision, Product Strategy & Strategic Leadership* | *Engineering Architecture, Cryptography & Systems* |

</div>

<br/>

---

## ✨ Key Features & Architecture

- 🛡️ **Zero-Knowledge Encryption**: End-to-end encryption with client-side cryptography. Your photos, metadata, and files are encrypted before leaving your browser.
- ⚡ **Instant Static Delivery**: Pre-compiled production bundles optimized for lightning-fast loads on global CDNs.
- 🖼️ **High-Performance Gallery**: Multi-threaded indexing, seamless album categorization, and real-time client decryption.
- 🌐 **Global Cloud Sync**: Seamlessly synchronized with real enterprise storage backend (`https://api.ente.io`).
- 📱 **Cross-Platform Ready**: Fully responsive web experience compatible across modern desktop and mobile browsers.

<br/>

---

## 🚀 One-Click Deployment on Vercel

This repository is optimized for instantaneous deployment on **Vercel** without any compilation steps required.

### 📋 Steps to Deploy:
1. Fork or import this repository on **[Vercel](https://vercel.com)** (`dipanshubatra/ente`).
2. Keep the Framework Preset as **`Other`** (Static).
3. Root Directory: **`./`** (leave default).
4. Hit **Deploy**.
5. Your private Ente cloud interface is instantly live!

> [!TIP]
> Pre-configured routing and redirects are automatically handled by [`vercel.json`](./vercel.json).

<br/>

---

## 🐳 Local & VPS Deployment (Docker)

Deploy the entire suite locally or on your own VPS with Docker Compose:

```bash
# Clone the repository
git clone https://github.com/dipanshubatra/ente.git
cd ente

# Build and start services
docker compose up -d --build
```

### Available Endpoints:
| Application | Service URL | Purpose |
| :--- | :--- | :--- |
| 📸 **Ente Photos** | [`http://localhost:3000`](http://localhost:3000) | Main Encrypted Photo Gallery & Timeline |
| 👤 **Ente Accounts** | [`http://localhost:3001`](http://localhost:3001) | Profile & Subscription Management |
| 📁 **Ente Albums** | [`http://localhost:3002`](http://localhost:3002) | Shared & Private Album Management |
| 🔑 **Ente Auth** | [`http://localhost:3003`](http://localhost:3003) | Authentication & Passkey Services |
| 🗄️ **Ente Locker** | [`http://localhost:3009`](http://localhost:3009) | Encrypted File Locker & Vault |

```bash
# To stop containers
docker compose down
```

<br/>

---

## 📁 Repository Structure

```tree
.
├── 🐳 Dockerfile          # Production high-performance Nginx container
├── 📦 compose.yaml        # Docker Compose multi-service definition
├── ⚙️ nginx.conf          # Custom multi-port reverse proxy & routing
├── ▲ vercel.json         # Vercel CDN deployment specification
├── 🌐 netlify.toml        # Netlify static configuration
├── 📖 README.md           # Documentation & Leadership Guide
└── 🚀 out/                # Pre-compiled, production-ready static bundles
    ├── photos/           # Core Photos & Timeline Web App
    ├── accounts/         # User Accounts Interface
    ├── albums/           # Album Management Interface
    ├── auth/             # Authentication Module
    └── locker/           # Secure Cloud Storage Locker
```

<br/>

---

<div align="center">

### 🛡️ Built for Privacy. Engineered for Speed.
Crafted with ❤️ by **Akshit Rai Kakkar (CEO)** & **Dipanshu Batra (CTO)**

</div>
