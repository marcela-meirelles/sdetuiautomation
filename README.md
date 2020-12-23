# dev_i_get ui automation

# Installation guide
## First install:
1. Clone repo.
1. Initialize npm project: 
    
    $ npm init -y     
    
    to give a standard npm project (remove -y for more options)

1. Intall webdriver.io inside project folder: 
    
    $ npm install webdriverio

1. Install wdio.cli:

    $ npm i --save-dev @wdio/cli

1. Generate Configuration File:
    We'll next want to generate a configuration file that stores all of our WebdriverIO settings. 
    To do that just run the configuration utility:

    $ ./node_modules/.bin/wdio config

    A question interface pops up. It will help to create the config easy and fast. If you are not sure what to answer follow this answers:

    Q: Where should your tests be launched?
    A: local

    Q: Shall I install the runner plugin for you?
    A: Yes

    Q: Where is your automation backend located?
    A: On my local machine

    Q: Which framework do you want to use?
    A: jasmine

    Q: Shall I install the framework adapter for you?
    A: Yes (just press enter)

    Q: Do you want to run WebdriverIO commands synchronous or asynchronous?
    A: sync (just press enter, you can also run commands async and handle promises by yourself but for the sake of simplicity let's run them synchronously)

    Q: Where are your test specs located?
    A: ./test/specs/*/.js (just press enter)

    Q: Which reporter do you want to use?
    A: junit

    Q: Shall I install the reporter library for you?
    A: Yes (just press enter)

    Q: Do you want to add a service to your test setup?
    A: none (just press enter, let's skip this for simplicity)

    Q: Level of logging verbosity:
    A: trace

    Q: What is the base url?
    A: http://localhost (just press enter)

    That's it! The configurator now installs all required packages for you and creates a config file 
    with the name wdio.conf.js. 

1. Overwrite wdio.conf.js with the one in the repo

## Run the following installs in your project folder
1. install spec reporter:
    
    $ npm install @wdio/spec-reporter --save-dev 

1. intall junit reporter:
    
    $ npm install @wdio/junit-reporter --save-dev
    
    info: https://webdriver.io/docs/junit-reporter.html

1. install babel.js: 
    
    $ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
    
    info: https://webdriver.io/docs/babel.html

    Create a babel.conf.js file in the project folder.
    Make sure your babel.config.js is configured properly. 
    The simplest setup you can use is:

```javascript
        module.exports = {
            presets: [
                ['@babel/preset-env', {
                    targets: {
                        node: 8
                    }
                }]
            ]
        }
```

1. if necessary install jasmine adapter:
    
    $ npm install @wdio/jasmine-framework --save-dev
    
    info: https://webdriver.io/docs/frameworks.html
    
1. install allure reporter: 
    
    $ npm install @wdio/allure-reporter --save-dev
    
    info: https://webdriver.io/docs/allure-reporter.html

# Run Tests
1. Open terminal and run 
    $ npm run-script test

1. (If Allure is setted) Generate reports using allure:
- Create an allure-results folder
- Open terminal at allure-results folder and use the command 'allure serve .' to build the report and launch it in html form

1. (If Allure is setted) RUN EVERYTHING
- npm run-script test && npm run-script report

# File structure
```
DEVIGET_UI_SUITE
|- .vscode
|- allure-report    (future implementation)
|- allure-results   (future implementation)
|- app
|    |- pageObjects
|       |-page.js
|       |-home.page.js
|       |-searchResults.page.js
|       |-item.page.js
|    |- specs
|       |-landingAndSearching.js
|- helpers          (future implementation)
|- img              
|- node_modules
|- reports          (future implementation)
|- .gitignore
|- babel.config.js
|- package-lock.json
|- package.json
|- README.md
|- session_data.json   (future implementation)
|- wdio.conf.js
```
## Directory description
- allure folders will host the report data, when running allure serve . the data will be read from these folders
- app contains all the page objects in the page object folder and tests in the specs folder
- helpers contains helper files for the automation, which contain helper methods, like authentication methods and others
- img is where the screenshots for a failing test will be
- reports is the xml data taken from JUnit reporter, this will be used for allure reporter too
- .gitignore
- babel.config.js babel config file
- chromedriver is necessary to be able to run the tests in google chrome. Otherwise, with the correct settings we can run them in firefox without the need for a firefox driver
- package-lock.json -> is automatically generated for any operations where npm modifies either the node_modules tree, or package. json . It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
- package.json -> this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
- README.md -> this file
- session_data.json -> this is not a shared file, due to security considerations this file must be shared between the company through other means. All the data for the test cases is kept in this file, like user names and IDs, organization names, etc.
- wdio.conf.js -> configuration file for webdriverio. It gets generated when running 'npx wdio config -y' and installs all the required packages. Here we will also set up the test runner, assertion library, hooks, add screenshot paths, set up test capabilities (wether we want to tun them in chrome, firefox or any other browser, even mobile (for mobile we must add appium))

# Notes
## On babel config files
(This is taken from a nice stackoverflow answer here: https://stackoverflow.com/questions/60288375/when-to-use-babel-config-js-and-babelrc)

From the docs https://babeljs.io/docs/en/config-files#project-wide-configuration

Babel has two parallel config file formats which can be used together, or independently.

Project-wide configuration
    babel.config.json files, with the different extensions

File-relative configuration
    .babelrc.json files, with the different extensions
    package.json files with a "babel" key

Babel loads .babelrc.json files, or an equivalent one using the supported extensions, by searching up the directory structure starting from the "filename" being compiled

Given that information:

.babelrc would be useful if you want to run certain transformations / plugins on a subset of files /directories. Maybe you have 3rd party libraries that you don't want to be transformed/changed by babel.

babel.config.json is useful if you have multiple packages (ie multiple package.json) directories in your project that utilize a single babel config. This is less common.

If your question is about file extensions (ie .js vs .json) with respect to babel configurations

Using .js exposes a babel config api.

https://babeljs.io/docs/en/config-files#config-function-api

Keep in mind this increases complexity with regards to caching, most of the time it's best to use .json static configurations

# Built With
- webdriverio test framework: https://webdriver.io/
- (future addition) allure framework for reporting: https://docs.qameta.io/allure/
- Jasmine for assertions

# Contributing

# Future Additions and Improvements
- [ ] session_data.json file as JSON to pass test data
- [ ] multiple driver options: add firefox and safari (and edge if possible)
- [ ] running tests in parallel is basically set, but we need more suites to be able to see it (more describe functions)
- [ ] reporting tool (Allure)
- [ ] send report by email
- [ ] Appium for mobile automation
- [ ] Add CI/CD settings

# Author
Marcela Meirelles: marcemei@gmail.com