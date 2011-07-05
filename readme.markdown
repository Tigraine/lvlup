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
		// drop-area is the ID of the div that acts as a drop-target
		lvlup("drop-area", {
			progress: function (percent) {
				//This method gets called periodically while the file is being uploaded with it's progress
				console.log("progress: " + percent);
			},
			success: function (file) {
				//Callback once the upload is finished
				console.log("finished uploading " + file.fileName);
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
