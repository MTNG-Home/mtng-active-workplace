## Candidate Instructions for CTO Meeting

This project is used as a common exercise for all candidates (engineering, product, and leadership roles) during CTO discussions. The goal is to understand how you explore an existing system, reason about its design, and communicate improvements.

### 1. Objective

- **Purpose**: Demonstrate how you understand the current project, identify strengths and weaknesses, and propose realistic next steps.
- **Scope**: You are **not** expected to complete full features. We care more about your analysis, priorities, and trade-offs than the amount of code you write.

### 2. Setup

From the project root:

```bash
yarn install
yarn start
```

Then open `http://localhost:3624` in a modern browser and sign in with:

- **Email**: `mtngtest@chain.biz`
- **Password**: `testpassword`

If you cannot run the app locally (for example, due to environment restrictions), proceed by reading the documentation and code.

### 3. What to review

- **Documentation**: Read `README.md` and `QUICK_START_GUIDE.md` to understand how the project starts, builds, and is structured at a high level.
- **Application behavior**: Log in and click through the main flows (such as creating or managing campaigns, if available). Note areas that feel strong and areas that are confusing or incomplete.
- **Codebase**: Skim the key folders and entry points to understand how data flows from user actions through the rest of the system, as far as visible in this repository.

### 4. What to prepare

Please come prepared to discuss, from your own professional perspective:

- **Understanding**
  - How you interpret the purpose of this platform and its main user journeys.
  - How you believe the system is structured (components, data flow, and any external integrations).
- **Strengths and weaknesses**
  - At least **2–3 strengths** in the current design, UX, architecture, or implementation.
  - At least **2–3 weaknesses** or risks (for example, technical, architectural, UX, scalability, security, or process-related).
- **Improvements**
  - A short list of **3–5 concrete improvements or next steps** you would propose for the project.
  - Why you would prioritize them, what trade-offs you see, and how you would roughly approach implementing or managing them.

### 5. Expectations

- Limit preparation time to a **few hours**; do not attempt large refactors.
- It is acceptable to make **reasonable assumptions** where details are missing—be ready to state them clearly.
- During the CTO meeting, you may be asked to:
  - Walk through your understanding of the system.
  - Describe your proposed improvements and priorities.
  - Respond to hypothetical scenarios (for example, scale, new features, or constraints) based on this project.
