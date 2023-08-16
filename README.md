# Ripple End to end

## Installation 

```
npm install
```

## How run the tests

* Running all tests
```
npx playwright test
```

* Running a single test spec
```
npx playwright test name-test.spec.ts
```

* Running test files set
```
npx playwright test tests/todo-page/ tests/landing-page/
```

* Running a test in headed mode(it will open the browser)
```
npx playwright test landing-page.spec.ts --headed
```

* Running test on a expecific browser
```
npx playwright test login-page.ts --project=chromium
```

## How run the tests using scripts

* Running tests using script
```
npm run scriptName

```

* Running a test in headed mode(it will open the browser)
```
npm run scriptName -- --headed
```

## Debugging tests

* Debugging all tests(It will open the playwright debug windows)
```
npx playwrigth test --debug
```

* Debugging a specific test file
```
npx playwright test name-test.spec.ts --debug
```

## Show test reports
```
npx playwright show-report
```