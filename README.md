# 🚀 Automated CI/CD Pipeline Deployment via GitHub Actions

[![Deploy Static Content to GitHub Pages](https://github.com/jegajothi296-ai/github-pages-cicd/actions/workflows/deploy.yml/badge.svg)](https://github.com/jegajothi296-ai/github-pages-cicd/actions/workflows/deploy.yml)
![DevOps](https://img.shields.io/badge/DevOps-CI%2FCD-blue)
![Platform](https://img.shields.io/badge/Hosting-GitHub%20Pages-green)

An end-to-end DevOps automation project demonstrating Continuous Integration (CI) and Continuous Deployment (CD) pipelines. Every push to the `main` branch triggers an automated Ubuntu cloud runner to validate, build, and deploy production static assets to GitHub Pages with zero manual intervention.

---

## 📌 Project Architecture & Workflow

```text
[ Developer Machine (VS Code) ]
               │
               ▼ (git push origin main)
    [ GitHub Repository ]
               │
               ▼ (Webhook Trigger)
 [ GitHub Actions (Ubuntu Runner) ]
         ├── 1. Code Checkout
         ├── 2. Setup Environment
         ├── 3. Artifact Packaging
         └── 4. Deployment Gate
               │
               ▼ (Automated Release)
     [ GitHub Pages (Live CDN) ]
