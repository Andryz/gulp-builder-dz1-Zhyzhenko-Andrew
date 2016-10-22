var SidebarModule = (function () {
	$(document).ready(function(){
			// Показывает и скрывает сайдбар в блоге,
			// при мощи дополнительного класа который мы добавляем и убираем
		$('.list-article').on('click', function(e){
			$('.list-article').toggleClass('open-sidebar');
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

	}());

	var FlipperModule = (function () {
		$(document).ready(function(){
			$('.authorize').on('click', function(e){
				$('.flipper').toggleClass("rotate-authorize");
			});

			$('.authorize-btn__item_home').on('click', function(e){
				$('.flipper').toggleClass("rotate-authorize");
			});
		});	
}());