// MENU
var MenuModule = (function () {
	$(document).ready(function(){
			// При нажатии на гамбургер идет плавный переход в крестик 
		$('.menu__link').click(function(){
			$(this).toggleClass('open');
			$(this).toggleClass('menu-fixed');
		});

			// Показывает и скрывает меню
		$('.menu__link').on('click', function(e){
			$('.menu__list').slideToggle();
		});
	});
}());