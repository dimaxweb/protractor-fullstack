# Revisor

Battle hardened boilerplate for quickly integrating  Protractor tests inside your AngularJS application.

![alt tag](https://github.com/dimaxweb/revisor/blob/master/revisor.jpg)


# Description

Starting the end to end testing project can be very time consuming task even with a such great tools like Protractor.
 

The minimum functionality required to succesfully run end to end testing with Protractor , as well as 'how to' examples and helper library to keep you code DRY 
are included in boilerplate.

*   Flexible configuration using [nconf](https://github.com/indexzero/nconf) in order to be able to run different configurations on development , production and any custom environment. 

*   [Winston logger](https://github.com/winstonjs/winston) wrapper . Can be configured per environment.

*   Integration with [SauceLabs](https://saucelabs.com)  - to easily test against variety of browsers.
  
*   Integrated reports inside (5 jasmine-reporters)  -   
 
*   Helpers library containing more than 20 useful functions. 
 
*   ConsolePlugin - to identify possible errors by inspecting console during the tests . Can be configured per environment.

*   How to examples   - to save your time searching over the internet.
  
## Installation

### Prerequisites
Your need the bellow Nodejs packages to be installed globally :
[Grunt-Cli](https://github.com/gruntjs/grunt-cli),[Protractor](https://github.com/angular/protractor) and [Bower](http://bower.io) need to be installed globally.

``` sh 

npm install -g grunt-cli protractor bower

```


### Revisor installation

```sh

$ git clone https://github.com/dimaxweb/revisor

$ npm install

```


## Usage

### Configuration

### Reports

### ConsolePlugin

### SauceLabs

### helpers.js





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

$ git clone https://github.com/dimaxweb/revisor

$ npm install

```

Run tests
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
