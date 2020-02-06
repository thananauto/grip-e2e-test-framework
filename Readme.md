# Grip_E2E_test_framework

This is a powerful boilerplate for UI automation test that uses WebdriverIO v5 and TypeScript v3. This framework includes examples of the PageObject pattern and using WebdriverIO to build an automated test suite with Mocha & Chai.

## Features
+ Use Page Object Model for managing your test cases
+ [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) for verification and validation
+ Interactive report with [Allure](https://webdriver.io/docs/allure-reporter.html)

## Getting Started

```sh
npm install
```

## Running Tests

Run all tests. Mocha will look for test folder. If you need to use another folder, please specify it in package.json file.

```sh
npm run test
```
In order to run one spec test, you can use:

```sh
npm run dev path-to-test-file
```

## Reports

The test report will show as a HTML webpage on a new window tab.

For running the test and show the report:

```sh
npm run report
```

For showing the report only:

```sh
npm run run-report
```

## Rerferences

[WebdriverIO API](http://webdriver.io/api/)