/**
 * Created by Dmitry.Mogilko on 8/19/2015.
 */

var revisor  = require('./revisor');



/**
 * Override the finishCallback so we can add some cleanup methods.
 * This is run after all tests have been completed.
 */
var _finishCallback = jasmine.Runner.prototype.finishCallback;
jasmine.Runner.prototype.finishCallback = function () {
    // Run the old finishCallback
    _finishCallback.bind(this)();

    console.log("You can  add you cleanup methods here");
};


beforeEach(function(){

    console.log("Before each");

    //TODO  : move from here to some module

    var matchers = {
        toEqualBecause: function( value, message ) {
            this.message = function() {
                return "Expected '" + this.actual + "' to equal '" + value + "' because " + message;
            };

            return this.actual == value;
        }
    };
    this.addMatchers(matchers);


});



afterEach(function(){

   console.log("After each");

   //revisor.testHyperLinksUrls();

   revisor.testConsoleForErrors();

   //revisor.testTitle();


});


