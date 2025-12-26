# Personal Project with GitHub Actions Pipeline

This project demonstrates a robust DevOps pipeline using GitHub Actions for a Node.js/TypeScript application.

## Features

- **TypeScript**: Typed source code.
- **Linting & Formatting**: ESLint (v9 Flat Config) + Prettier.
- **Testing**: Jest for unit tests.
- **CI Pipeline**:
    - Automatic Linting, Testing, and Building.
    - **Security Scanning**: `npm audit` for dependencies and **CodeQL** for code analysis.
    - **Verified Commit Check**: Ensures commits are signed (GPG/SSH).
- **CD Pipeline**:
    - **Semantic Release**: Automates versioning and releases based on commit messages.

## Setup

1.  **Clone**:
    ```bash
    git clone <repo-url>
    cd app-repo
    ```
2.  **Install**:
    ```bash
    npm install
    ```
3.  **Run Locally**:
    - `npm run lint`: Check code style.
    - `npm run format`: Fix code style.
    - `npm test`: Run tests.
    - `npm run build`: Compile to JS.

## GitHub Actions

### CI (`ci.yml`)
Triggers on Pull Requests and Pushes to `main`. Verified checks must pass.
- **Jobs**:
    - **Build, Lint, Test**
    - **Security Audit**: `npm audit`
    - **CodeQL**: Deep code analysis.
    - **Semgrep**: Static Analysis Security Testing (SAST).
    - **Trivy**: Scanning filesystem and Docker image for vulnerabilities.
    - **SonarCloud**: Code quality and security hotspots.
    - **Verified Commit**: Checks for GPG signatures.

### Release (`release.yml`)
Triggers on Push to `main`. Requires `GITHUB_TOKEN` (default).

### Dependency Updates
**Renovate Bot** is configured (`renovate.json`) to automatically create Pull Requests for dependency updates on weekends.

## Badges

![CI](https://github.com/USER/REPO/actions/workflows/ci.yml/badge.svg)
