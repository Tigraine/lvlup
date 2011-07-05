function lvlup(target, callbacks) {
	(function (){
		"use strict";
		var uploadFile = function (file, callbacks) {
			var xhr = new XMLHttpRequest(),
				fd = new FormData();

			fd.append("content", file);

			callbacks.progress = callbacks.progress || function () { };
			callbacks.success = callbacks.success || function () { };

			xhr.upload.addEventListener("progress", function (evt) {
				var progressPct = Math.floor( evt.loaded * 100 / evt.total );
				callbacks.progress(progressPct);
			});
			xhr.addEventListener("load", callbacks.success, false);

			xhr.open("POST", "upload");
			xhr.send(fd);

		},
		createDragDrop = function () {
			var dropTarget = document.getElementById(target),
				preventDefault = function (evt) { evt.preventDefault(); };
			if (dropTarget === null) return; 	//Nothing to do - No target area

			dropTarget.addEventListener("dragover", preventDefault, false);
			dropTarget.addEventListener("drop", function (evt) {
				var files = evt.dataTransfer.files,
					i, file;

				for( i = 0; i < files.length; i += 1) {
					file = files[i];
					uploadFile(file, {
						progress: function (percent) {
							callbacks.progress.call(dropTarget, percent);
						},
						success: function (evt) {
							callbacks.success.call(dropTarget, file);
						}
					});
				}
				preventDefault(evt);
			}, false);
		};

		createDragDrop();
		console.log("lvlup!");
	}());
}
