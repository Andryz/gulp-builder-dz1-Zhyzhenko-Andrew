
// // Плавный скролл по якорям
var ScrollAnchorModule = (function () {
	$(document).ready(function() {
		$('a[href^=".anchor-"]').on('click', function(){
		var el = $(this).attr('href');
		$('body').animate({
		scrollTop: $(el).offset().top}, 1500);
		return false;
		});
	});
}());