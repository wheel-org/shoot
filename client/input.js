
var keyState = [];
var mouseState = { position: createTuple(0, 0) };

$(document).ready(function () {
	$(document).keydown(function (e) {
		var code = e.keyCode || e.which;
		keyState[code] = 1;		
	});
	$(document).keyup(function (e) {
		var code = e.keyCode || e.which;
		keyState[code] = 0;
	});
	$(document).mousedown(function (e) {
		
	});
	$(document).mousemove(function (e) { 
		var rect = canvas.getBoundingClientRect();
		mouseState.position = toWorldCoord(createTuple(e.clientX - rect.left, e.clientY - rect.top));
	});
	$(document).mouseup(function (e) {
		
	});
});
