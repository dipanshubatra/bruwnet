# Ente Web Frontend

End-to-end encrypted private cloud storage web application.

## 👥 Contributors
- **Akshit rai kakkar**
- **dipanshu batra**

---

## 🚀 Deployment

This repository contains the complete production-ready static frontend for **Ente**, pre-configured with:
- Contributors properly credited (**Akshit rai kakkar and dipanshu batra**).
- Direct secure end-to-end encrypted cloud connectivity (`https://api.ente.io`).
- Ready for one-click deployment on **Vercel**, **Docker**, **Netlify**, or standard **Nginx**.

---

### Deploying on Vercel

1. Import this repository into **[Vercel](https://vercel.com)** (`dipanshubatra/ente`).
2. Keep the Framework Preset as **Other** (Static).
3. Root Directory: `./` (or leave default root).
4. Click **Deploy**.
5. Once deployed, your Ente web app is live with full encrypted photo backup and gallery features!

---

### Local / VPS Deployment with Docker

Run inside this directory:

```bash
docker compose up -d --build
```

The apps will be available immediately at:
- **Ente Photos**: [http://localhost:3000](http://localhost:3000)
- **Ente Accounts**: [http://localhost:3001](http://localhost:3001)
- **Ente Albums**: [http://localhost:3002](http://localhost:3002)
- **Ente Auth**: [http://localhost:3003](http://localhost:3003)
- **Ente Locker**: [http://localhost:3009](http://localhost:3009)

---

## 📁 Repository Structure

```
.
├── Dockerfile          # Production Nginx container
├── compose.yaml        # Docker Compose configuration
├── nginx.conf          # Custom multi-port Nginx routing
├── vercel.json         # Vercel deployment configuration
├── netlify.toml        # Netlify deployment configuration
├── out/                # Production pre-compiled static bundles
│   ├── photos/
│   ├── accounts/
│   ├── albums/
│   ├── auth/
│   └── locker/
└── src_web/            # Web frontend source code
```

