<div align="center">

<img src="./assets/ente-logo.svg" width="120" height="120" alt="Ente Logo" />

# 🛡️ ENTE
### **The Next-Generation End-to-End Encrypted Cloud Storage & Photos Ecosystem**

[![Vercel Deployment](https://img.shields.io/badge/Deploy%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Docker Support](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![E2EE Architecture](https://img.shields.io/badge/Security-E2EE%20Zero--Knowledge-10B981?style=for-the-badge&logo=shield&logoColor=white)](https://ente.io)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPLv3-F59E0B?style=for-the-badge&logo=open-source-initiative&logoColor=white)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/dipanshubatra/ente?style=for-the-badge&color=8B5CF6)](https://github.com/dipanshubatra/ente/stargazers)

<br/>

<p align="center">
  <b>Ente is a private, secure, zero-knowledge sanctuary for all your photos, files, and precious memories.</b><br/>
  <i>Engineered as an uncompromising, privacy-first alternative to Google Photos and Apple iCloud.</i><br/>
  Only <u>YOU</u> hold the keys to your data.
</p>

---

</div>

<br/>

## 🏛️ Executive Leadership & Engineering Board

<div align="center">

<table>
  <tr>
    <td align="center" width="300">
      <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Akshit&backgroundColor=6366f1" width="120" height="120" style="border-radius: 50%; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
      <br/><br/>
      <h3 style="margin-bottom: 2px;">Akshit Rai Kakkar</h3>
      <code>👔 Chief Executive Officer (CEO)</code>
      <br/><br/>
      <p><i>Vision, Product Architecture, Corporate Strategy & Global Growth Operations</i></p>
    </td>
    <td align="center" width="300">
      <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Dipanshu&backgroundColor=10b981" width="120" height="120" style="border-radius: 50%; box-shadow: 0 4px 14px rgba(0,0,0,0.25);" />
      <br/><br/>
      <h3 style="margin-bottom: 2px;">Dipanshu Batra</h3>
      <code>💻 Chief Technology Officer (CTO)</code>
      <br/><br/>
      <p><i>Cryptographic Infrastructure, System Architecture, Web Performance & Core Engineering</i></p>
    </td>
  </tr>
</table>

</div>

<br/>

---

## 💎 Why Ente? Key Highlights

```
   ┌─────────────────────────────────────────────────────────────┐
   │                    Zero-Knowledge Shield                    │
   │  Your data is encrypted on your device before transmission  │
   └──────────────────────────────┬──────────────────────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
┌─────────────────────────┐                     ┌─────────────────────────┐
│     Client Decryption   │                     │     Hardened Security   │
│  Instant in-browser     │                     │  Zero trackers, no ads, │
│  cryptographic engine   │                     │  strict zero-knowledge  │
└─────────────────────────┘                     └─────────────────────────┘
```

- 🔐 **Zero-Knowledge Privacy** — Advanced client-side XChaCha20-Poly1305 / Argon2id encryption. Not even the servers can view your files.
- ⚡ **Global CDN Ready** — Pre-optimized, zero-latency static assets ready for edge deployment.
- 🗂️ **Dynamic Galleries & Smart Albums** — Group, tag, and explore your photo timeline seamlessly.
- 🔗 **Direct Live Sync** — Interoperates directly with verified Ente API infrastructure (`https://api.ente.io`).
- 📱 **Responsive & Intuitive** — Built with clean, accessible design principles for desktop, tablets, and mobiles.

<br/>

---

## ⚡ Deployment Options

### Option 1: Deploy to Vercel (Instant 1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdipanshubatra%2Fente)

1. Open **[Vercel Dashboard](https://vercel.com/new)** and connect your GitHub repository `dipanshubatra/ente`.
2. Configure Settings:
   - **Framework Preset**: `Other` (Static)
   - **Root Directory**: `./` (Default root)
   - **Build Command**: *Disabled / None* (Pre-built production bundles)
   - **Output Directory**: `out/photos` (handled automatically by [`vercel.json`](./vercel.json))
3. Click **Deploy**. Your secure cloud photo gallery goes live in seconds!

<br/>

### Option 2: Run with Docker Compose (Local & VPS)

Spin up the entire suite in one command with isolated multi-service containers:

```bash
# 1. Clone the repository
git clone https://github.com/dipanshubatra/ente.git
cd ente

# 2. Build and launch services in background
docker compose up -d --build
```

#### 🌐 Service Directory:
| Service | Local Address | Description |
| :--- | :--- | :--- |
| 📸 **Ente Photos** | [`http://localhost:3000`](http://localhost:3000) | Primary Gallery, Timeline & Media Player |
| 👤 **Ente Accounts** | [`http://localhost:3001`](http://localhost:3001) | Identity, Security Keys & Plan Controls |
| 📁 **Ente Albums** | [`http://localhost:3002`](http://localhost:3002) | Shared Collections & Collaborative Albums |
| 🔑 **Ente Auth** | [`http://localhost:3003`](http://localhost:3003) | Multi-Factor Authentication & Verification |
| 🗄️ **Ente Locker** | [`http://localhost:3009`](http://localhost:3009) | Encrypted File Locker & Digital Vault |

```bash
# To stop all services cleanly:
docker compose down
```

<br/>

---

## 📂 Project Architecture

```asciidoc
ente/
├── 📁 assets/             # Brand logos, icons & graphic elements
│   └── ente-logo.svg
├── 🐳 Dockerfile          # Hardened Nginx production runtime container
├── 📦 compose.yaml        # Multi-port container orchestration
├── ⚙️ nginx.conf          # Reverse-proxy router with security headers
├── ▲ vercel.json         # High-performance Vercel Edge configuration
├── 🌐 netlify.toml        # Netlify static deployment manifest
├── 📖 README.md           # Documentation & Leadership Guide
└── 🚀 out/                # Pre-compiled static release artifacts
    ├── photos/           # Core Photos & Gallery Application
    ├── accounts/         # Accounts & User Profiles Module
    ├── albums/           # Album Sharing & Management
    ├── auth/             # Cryptographic Identity & Verification
    └── locker/           # Encrypted Vault & Secure Storage
```

<br/>

---

<div align="center">

### 🛡️ Built for Privacy. Engineered for Scale.
Crafted with passion by **Akshit Rai Kakkar** *(CEO)* & **Dipanshu Batra** *(CTO)*

<br/>

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/dipanshubatra/ente)

</div>
