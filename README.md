# Ripple End-to-End

### Installation 

```
npm install
```

## How run the tests

### Running all tests
```
npm run tests
```

### Running tests on a expecific browser
```
npm run chrome
```
#### Options:
- chrome
- safari
- firefox

### Running a single test spec
```
npx playwright test name-test.spec.ts
```

### Running tests in headed mode(it will open the browser)
```
npm run headed
```

## Debugging tests

### Debugging all tests(It will open the playwright debug windows)
```
npx playwrigth test --debug
```

### Debugging a specific test file
```
npx playwright test name-test.spec.ts --debug
```

### Show test reports
```
npx playwright show-report
```