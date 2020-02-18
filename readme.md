# Unittest With Node JS

source : [https://medium.com/walkme-engineering/measure-your-nodejs-code-coverage-using-istanbul-82b129c81ae9](https://medium.com/walkme-engineering/measure-your-nodejs-code-coverage-using-istanbul-82b129c81ae9)


## Tests librairies : jasmine & supertest & istambul (code coverage)

> npm install -D jasmine jasmine-node istanbul jasmine-console-reporter supertest jasmine-supertest

in package.json

> "scripts": {
"start": "node index.js",
"test": "jasmine",
"test-cover": "istanbul cover --include-all-sources spec/specs.js && istanbul check-coverage"
}

## Configuration Jasmine :

cf spec/spec.js in source code





## Execute test coverage

> npm run test-cover
