function lvlup(options) {
	(function (){
		"use strict";
		var uploadFile = function (file, callbacks) {
			var xhr = new XMLHttpRequest(),
				fd = new FormData();

			fd.append("content", file);

			xhr.upload.addEventListener("progress", function (evt) {
				var progressPct = Math.floor( evt.loaded * 100 / evt.total );
				callbacks.progress(progressPct);
			});
			xhr.addEventListener("load", callbacks.success, false);

			xhr.open(options.method || "POST", options.url);
			xhr.send(fd);

		},
		createDragDrop = function () {
			var dropTarget = document.getElementById(options.target),
				preventDefault = function (evt) { evt.preventDefault(); };
			if (dropTarget === null) return; 	//Nothing to do - No target area

			dropTarget.addEventListener("dragover", preventDefault, false);
			dropTarget.addEventListener("drop", function (evt) {
				var files = evt.dataTransfer.files,
					i, file;

				for( i = 0; i < files.length; i += 1) {
					file = files[i];
					(function (file) {
						var callbackScope = options.start(file);
						uploadFile(file, {
							progress: function (percent) {
								callbackScope.progress.call(dropTarget, percent, evt);
							},
							success: function (evt) {
								callbackScope.success.call(dropTarget, evt.target.responseText, evt);
							}
						});
					}(file));
				}
				preventDefault(evt);
			}, false);
		};

		createDragDrop();
		console.log("lvlup!");
	}());
}
