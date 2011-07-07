lvlup!
======

The general idea of this little script is to provide a base for a HTML5 backed drag&drop capable file upload as you may already know from GMail.
It's 100% pure JavaScript that utilizes Drag&Drop and the [XMLHttpRequest2](http://www.w3.org/TR/XMLHttpRequest2/) progress events.

Usage
---------

lvlup! is completely self contained inside lvlup.js. See lvlup.html for a sample usage.

In a nutshell you need to tell lvlup! what your drag&drop target for files is and define some callbacks like this:

Sample usage:

```js
	window.onload = function () {
		lvlup({
			target: 'drop-area', //Id of element that acts as a drop target
			url: 'upload', 		//Server URL that receives file upload (parameter 'content')
			start: function(file) {
				//start gets called for each file that gets uploaded.
				//use this closure for progress indicators etc.
				return {
					progress: function (percent) {
						//called with status updates on uploaded %
						console.log(percent.toString() + "% of file " + file.fileName);
					},
					success: function () {
						//called when file finished uploading
						console.log("finished uploading " + file.fileName);
					}
				}
			}
		});
	};
```
License
-------

lvlup! is licensed under the Apache2 license

Remarks
-------

I am by no means a good JavaScript programmer, and I won't claim this script works on all browsers, because it doesn't. 
I had a specific need for a file upload inside WebKit based browsers for an application and this is the result. *Don't expect this to work on IE!*
Also, since I am still fairly new to JavaScript i'd be glad to hear your feedback on the code.
