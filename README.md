# protractor-fullstack

### *Battle hardened boilerplate for quickly starting the Protractor test project*

![alt tag](https://github.com/dimaxweb/protractor-fullstack/blob/master/protractor-fullstack.jpg)


# Description

Everything you need for starting the end to end testing project can be very time consuming task even with a such great tool as Protractor.
 

The minimum functionality required to successfully run end to end testing with Protractor , as well as 'how to' examples and helper library to keep you code DRY 
are included in this  boilerplate project.

*   Flexible configuration using [nconf](https://github.com/indexzero/nconf) in order to be able to run different configurations on development , production and any custom environment. 

*   Integration with [SauceLabs](https://saucelabs.com)  - to easily test against variety of browsers.
  
*   Reports for test results. [jasmine-reporters](https://github.com/larrymyers/jasmine-reporters) are integrated inside.
 
*   [helpers.js](/lib/util/helpers.js) - containing more than 20 useful functions. 
 
*   [ConsolePlugin](/lib/util/ConsolePlugin.js) - to identify possible errors by inspecting console during the tests .

*   [Winston logger](https://github.com/winstonjs/winston) wrapper .

*   [How to examples](/howtos)   - to save your time searching over the internet.
  
## Installation

### Prerequisites
[Grunt-Cli](https://github.com/gruntjs/grunt-cli),[Protractor](https://github.com/angular/protractor) and [Bower](http://bower.io) need to be installed globally.

``` sh 

npm install -g grunt-cli protractor bower

```

### protractor-fullstack installation

```sh

$ git clone https://github.com/dimaxweb/protractor-fullstack

$ npm install

```


## Usage

### Configuration

We provided flexible wrapper over [nconf](https://github.com/indexzero/nconf) which makes it possible to pass arguments through the command line,
and also add your own configuration files following conventions and industry recommendations (using environment variables)
for configuring the NODEJS applications.
 
+  config.json,
+ 'config.' + 'NODE_ENV' + '.json',
+ 'config.' + 'NODE_ENV' + '.' + 'USER' + '.json'
 

Your can add more logic use or use more environment variables in  [configuration/appConfig.js](configuration/appConfig.js) 
to make it even more flexible.  
 
```js

var appConfig = require(path.resolve(__dirname, 'configuration/appConfig.js'));

//get url of the web server url in your tests
var webServerUrl  = appConfig.get('webServerUrl');

```


### Reports

Project provides the integration with popular [jasmine-reporters](https://github.com/larrymyers/jasmine-reporters) package.  

Each report provider can be configured per environment , disabled or enabled.
 
Example : 
configuration/config.development.json 

```json

"reports": {
    "jasmineReporters": {
      "jasmineReporters.JUnitXmlReporter ": {
        "isEnabled": true,
        "savePath": "reports/junit",
        "consolidateAll": true,
        "consolidate": true,
        "filePrefix": "juintresults",
        "useDotNotation": true,
        "package": "Jasmine Results"
      },
      "jasmineReporters.NUnitXmlReporter ": {
        "isEnabled": true,
        "savePath": "reports/nunit",
        "filename": "nunitresults.xml",
        "reportName": "Jasmine Results"
      },
      "jasmineReporters.TapReporter": {
        "isEnabled": false
      },
      "jasmineReporters.TeamCityReporter": {
        "isEnabled": false
      },
      "jasmineReporters.TerminalReporter": {
        "isEnabled": false
      }
    }
  },

```

### SauceLabs

[SauceLabs](https://saucelabs.com) integration can be done thorough configuration.
Fully functional [example](configuration/config.saucelabs.json) (need to provide your user name and password in configuration).   
IMPORTANT:  
In order to be able to test sites in local intranet , behind the firewall or just the **localhost** with Sauce Labs - your will to establish tunnel connection to Sauce Labs with
SauceLabs Connect utility. 

Running the bellow command will do all the work for you (download the Sauce Labs connector in first run and then will start it with your account credentials from configuration file) 

```sh

node /lib/saucelabs-connect.js

```  



### helpers.js
Please look inside the [helpers.spec.js](test/logic/helpers.spec.js) to the the examples of usage.

### ConsolePlugin
Please look inside the [ConsolePlugin.spec.js](test/logic/ConsolePlugin.spec.js) for examples of usage.


### Scripts to run the test application
Scripts for Window and Linux to start the protractor process together with setting environment variables are included in
[/run](/run) folder. 
 


## Tests

### Configure and run the example application :

```sh


$ npm install

$ bower install
 
$ grunt server 

```

Run tests

```sh

protractor tests/protractor.test.conf

```

### Examples

Configure and run the example application :

```sh

$ git clone https://github.com/dimaxweb/protractor-fullstack

$ npm install

```

Run the example tests :

```sh

protractor howtos/protractor.howtos.conf

```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D



## License
MIT
