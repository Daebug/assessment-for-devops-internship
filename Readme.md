🚀 Steps Implemented


Project Setup

Initialized Node.js project (npm init -y).

Added scripts in package.json:

start → run app (node index.js)

test → run tests with Mocha

lint → check code style with ESLint



Testing

Created test.js to verify the app runs.

Configured Mocha + NYC for test execution and coverage reporting.

CI/CD Workflow (.github/workflows/ci.yml)

Lint job → checks code with ESLint.

Test job → runs tests across multiple Node.js versions and OS.

Deploy job → mock deployment (simple echo commands).



📂 Run Locally


npm install

npm run lint

npm test
