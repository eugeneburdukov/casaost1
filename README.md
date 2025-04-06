# 🎭 CodeceptJS + Playwright E2E Tests

This project uses [CodeceptJS](https://codecept.io/) with [Playwright](https://playwright.dev/) for end-to-end testing.

---

## 📦 Prerequisites

- Node.js (v16+ recommended)
- npm

---

## 🚀 Installation

```bash
npm install
# Run all tests
npx codeceptjs run

# Run all tests with steps output
npx codeceptjs run --steps

# Run all tests in headless mode with steps
HEADLESS=true npx codeceptjs run --steps

# Run tests with a specific tag
npx codeceptjs run --grep @jellyfin_api_count_movies

# Run a specific test file
npx codeceptjs run def

# Run tests and generate a mochawesome report
npx codeceptjs run --reporter mochawesome
# Create a new branch
git checkout -b exampleBranch      

# Stage changes
git add .   

# Check status
git status        

# Commit changes
git commit -m "added features"

# Push to remote
git push origin exampleBranch    
