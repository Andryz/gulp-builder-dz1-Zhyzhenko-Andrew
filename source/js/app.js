	// PRELOADER
$(function(){

	var imgs =[];

	$.each($('*'), function () {

		var $this = $(this),
			background = $this.css('background-image');		//находим картинки через background
			img = $this.is('img');

		if(background != 'none'){
			var path = background.replace('url("', '').replace('")', ''); /*reaplace - заменяет одну строку на другую*/
			imgs.push(path);  
		}
		 if (img) {
		 	var path = $this.attr('src');  //находим картинки через img

		 	if(path){
		 		imgs.push(path); //добавляем их в массив 
		 	}
		 }

	});

	var percentsTotal = 1;

	for (var i = 0; i < imgs.length; i++) {
		var image = $('<img>', {
			attr: {
				src: imgs[i]
			}
		});

		image.on({
			load : function () {
				setPercents(imgs.length, percentsTotal);
				percentsTotal++;
			},

			error : function () {
				percentsTotal++;
			}
		});
	}

	function setPercents(total, current) {
		var percent = Math.ceil(current / total * 100);

		if (percent >= 100) {
			$('.preloader').fadeOut();
		}

		$('.preloader__percents').text(percent + '%');
	}

});

	// MENU

$(document).ready(function(){
		// При нажатии на гамбургер идет плавный переход в крестик 
	$('.menu__link').click(function(){
		$(this).toggleClass('open');
	});

		// Показывает и скрывает меню
	$('.menu__link').on('click', function(e){
		$('.menu__list').slideToggle();
	});

		// Показывает и скрывает сайдбар в блоге,
		// при мощи дополнительного класа который мы добавляем и убираем
	$('.list-article').on('click', function(e){
		$('.list-article').toggleClass('open-sidebar');
	});

	$('.authorize').on('click', function(e){
		$('.flip-container').toggleClass('rotate-authorize');
	});


});


	// Плавный скролл по якорям
	$(document).ready(function() {
	$('a[href^="#"]').click(function(){
	var el = $(this).attr('href');
	$('body').animate({
	scrollTop: $(el).offset().top}, 1500);
	return false;
	});
	});

	//Фиксация при скроле на выбранном элементе
	$(window).scroll(function() {  			    //Берем высоту нашего header
		if ($(this).scrollTop() > headerBlog.height()){    
		$('.list-article').addClass("list-article__sticky");    // если мы проскролили больше чем высота header
		$('.page-articles').addClass("page-articles_scroll");	// то тогда меняем стили
		}
		else{
		$('.list-article').removeClass("list-article__sticky");
		$('.page-articles').removeClass("page-articles_scroll");
		}

	});

	var headerBlog = $('.page-header-blog');
	var git = $('.article_git');
	var conemu = $('.article_conemu');

	$(window).scroll(function() {

		if ($(this).scrollTop() > headerBlog.height()){
			$('.list-article__name_git').addClass("list-article__name__link_scroll");
		}
		else{
			$('.list-article__name_git').removeClass("list-article__name__link_scroll");
		}

	});

	$(window).scroll(function() {

		if ($(this).scrollTop() > headerBlog.height()+git.height()){
			$('.list-article__name_conemu').addClass("list-article__name__link_scroll");
		 	$('.list-article__name_git').removeClass("list-article__name__link_scroll");
		}
		else{
			$('.list-article__name_conemu').removeClass("list-article__name__link_scroll");
		}

	});

	$(window).scroll(function() {

		if ($(this).scrollTop() > headerBlog.height()+git.height()+conemu.height()){
			$('.list-article__name_gulp').addClass("list-article__name__link_scroll");
			$('.list-article__name_conemu').removeClass("list-article__name__link_scroll");
		}
		else{
			$('.list-article__name_gulp').removeClass("list-article__name__link_scroll");
		}

	});