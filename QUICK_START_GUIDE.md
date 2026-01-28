# Quick Start Guide

## Prerequisites
- Node.js 20.x or later
- Yarn package manager (the project relies on Yarn workspaces and lockfiles)
- Modern Chromium-based browser (Chrome/Edge) for validation

### Install Yarn (if needed)
```bash
npm install -g yarn
yarn --version
```

## Installation
```bash
# From the project root
yarn install
```

## Available Scripts
```bash
# Start the client with connected API services
yarn start

# Execute the automated test suite
yarn test

# Build a production bundle
yarn build
```

## Running the Application
```bash
yarn start
```

Access the client at `http://localhost:3624` and sign in with the provided credentials (`mtngtest@chain.biz` / `testpassword`).

## Troubleshooting
- **Command not found: yarn** – Install Yarn globally (`npm install -g yarn`) and restart the terminal.
- **Cannot find module / dependency errors** – Clear `node_modules` and rerun `yarn install`.
- **Port 3624 in use** – Stop the conflicting process or adjust the port in `package.json`.
- **Asset upload errors** – Ensure images are PNG or JPG within reasonable file-size limits.
- **Authentication failures** – Confirm the development server is running and re-fetch credentials if required.