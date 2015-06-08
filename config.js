System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "js/*": "js/*.js",
    "ts/*": "ts/*.ts",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "*": "*.js"
  },
  "typescriptOptions": {
    "emitDecoratorMetadata": true,
    "noLib": true
  }
});

System.config({
  "map": {
    "Arnavion/typescript-github": "github:Arnavion/typescript-github@master",
    "Microsoft/TypeScript": "github:Microsoft/TypeScript@master",
    "ModuleLoader/es6-module-loader": "github:ModuleLoader/es6-module-loader@ts-0.17",
    "inversify": "npm:inversify@1.0.0",
    "systemjs/systemjs": "github:systemjs/systemjs@0.17.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});

