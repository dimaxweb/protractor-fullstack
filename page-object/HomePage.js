/**
 * Created by Dmitry on 28/11/2015.
 */

var Page = require('astrolabe').Page;

module.exports = Page.create({

    url: { value: 'http://localhost:9000' },

    navigationBar:   { get: function() { return this.findElement(this.by.css('.navbar')); } },// finds an element with the class 'navbar'
    header:   { get: function() { return this.findElement(this.by.css('.page-header')); } },// finds an element with the class 'page-header'
    footer:   { get: function() { return this.findElement(this.by.tagName('footer')); } },// finds an element with the class 'page-header'
    mainContainer:   { get: function() { return this.findElement(this.by.id('container')); } }// finds an element with the class 'homePageContainer'
});
