console.log("main.js hard copy")

$(document).ready(function () {
	var json = "db.json";
	$.getJSON(json, function(res) {
		var pics = "";

		console.log(res.images[0].src);
		$.each(res.images, function () {
			pics += '<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 l-box"><img class="pure-img" src="' + this.src + '"></div>';
		});
		$('#img-container').append(pics);
	});
});