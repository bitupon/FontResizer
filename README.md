# FontResizer
This Repository contains a JQuery plugin to resize Font size in a website

# Introduction
“FontResizer” is a JQuery Plugin to resize (increase/decrease) font sizes in the desired HTML sections/elements. Web Accessibility is an important aspect of the modern websites and including functionality for increasing / decreasing the font-size is a good step for achieving. It has useful features including – 

 *	Maximum/Minimum Font Size value can be set.
 *	Increase/Decrease of Font Size occurs stepwise as 1px by default. The step value can be set as well.
 *	Reset the font-size to its original value.
 *	Font resize can be implemented on desired HTML sections 


#Getting Started
1. To use the “FontResizeController” plugin, include the jQuery library and the “FontResizeController” plugin inside the <head> tag of your HTML document:

`<script type="text/javascript" src="/path/to/jquery-latest.js"></script> `
`<script type="text/javascript" src="/path/to/fontResizeController.js"></script> `


2. Start by telling “FontResizeController” to make the following three <a> elements to control Font-Size by configuring with the “fontResize” property with three possible values namely “increase”, ”decrease” and “reset”. 

`<script type="text/javascript">`
    `$(document).ready(function(){`
        `$("#font-increase").fontResizeController({"fontResize": "increase"});`
        `$("#font-decrease").fontResizeController({"fontResize": "decrease"});`
        `$("#font-reset").fontResizeController({"fontResize": "reset"});`
    `})        `
`</script>`
`<body>`
     `<ul>`
         `<li><a id="font-reset">Increase</a></li> `
         `<li><a id="font-decrease">Decrease</li>`
         `<li><a id="font-increase">Reset</a></li>`
     `</ul>`
     `<div class="text">`
        `Some Text….`
     `</div>`
`</body>`

**Note: You can use any html element to implement the functionality of the “fontResizeController”**
***


3. By default, the three different <a> elements with “fontResizeController” functionality will act on the HTML blocks/elements with Class Name “text”. But one can override this Class Name to any other name of his/her choice. Example – 

`<script type="text/javascript">`
    `$(document).ready(function(){`
            `$("#font-increase").fontResizeController(`
                   `{"fontResize": "increase", "tarClass": "MyClass"});`
            `$("#font-decrease").fontResizeController(`
                   `{"fontResize": "decrease", "tarClass": "MyClass"});`
            `$("#font-reset").fontResizeController(`
                   `{"fontResize": "reset", "tarClass": "MyClass"});`
    `})        `
`</script>`
`<body>`
     `<ul>`
         `<li><a id="font-reset">Increase</a></li> `
         `<li><a id="font-decrease">Decrease</li>`
         `<li><a id="font-increase">Reset</a></li>`
     `</ul>`
     `<div class="MyClass">`
        `Some Text….`
     `</div>`
`</body>`
