
	// PARALLAX
$(document).ready(function (){
		layer.map(function (key, value) {
			var bottomPosition = ((window.innerHeight / 2) * ((key + 1) / 100));
			$(value).css({
				'bottom': '-' + bottomPosition + 'px',
				'transform': 'translate3d(0px, 0px, 0px)'
			});
		});
	});
var layer = $('.parallax').find('.parallax__layer');
$(window).on('mousemove', function (e) {   
	var mouse_dx = e.pageX;
	var mouse_dy = e.pageY;

	var w = (window.innerWidth / 2) - mouse_dx;
	var h = (window.innerHeight / 2) - mouse_dy;

	layer.map(function (key, value) {
		var bottomPosition = ((window.innerHeight / 2) * ((key + 1) / 100));
		var widthPosition = w * ((key + 1) / 100);
		var heightPosition = h * ((key +1 ) / 100);
		$(value).css({
			'bottom': '-' + bottomPosition + 'px',
			'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0px)'
		});
	});

});

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
		$('.flipper').toggleClass("rotate-authorize");
	});

	$('.authorize-btn__item_home').on('click', function(e){
		$('.flipper').toggleClass("rotate-authorize");
	});

});


// Плавный скролл по якорям
	$(document).ready(function() {
	$('a[href^=".anchor-"]').on('click', function(){
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
// SLIDER

$(document).ready(function(e){
	var sliderObject ={
		nameOne: 'САЙТ ШКОЛЫ ОНЛАЙН ОБУЧЕНИЯ',
		nameTwo: 'САЙТ СТУДИИ ITLOFT',
		nameThree: 'САЙТ КОМПАНИИ LOFT BLOG',
		nameFour: 'САЙТ ШКОЛЫ ATMA YOGA',
		image1: 'assets/img/images_png/portfolio.png',
		image2: 'assets/img/images_png/portfolio-2.png',
		image3: 'assets/img/images_png/portfolio-3.png',
		image4: 'assets/img/images_png/portfolio-4.png',
		technologies1: 'HTML, CSS, JAVASCRIPT',
		technologies2: 'HTML, CSS, SVG',
		technologies3: 'HTML, CSS, PARALAX',
		technologies4: 'HTML, CSS, JAVASCRIPT, PHP',
		sliderLink1: '.slider__list__link_one',
		sliderLink2: '.slider__list__link_two',
		sliderLink3: '.slider__list__link_tree',
		sliderLink4: '.slider__list__link_four'
	};
	var item = ['nameOne','nameTwo','nameThree','nameFour'];
	var itemImg = ['image1','image2','image3','image4'];
	var itemTechnologies = ['technologies1','technologies2','technologies3','technologies4'];
	var itemLink =['sliderLink1','sliderLink2','sliderLink3','sliderLink4'];
	var sliderTitle = $('.slider__detail__title');
	var sliderImg = $('.slider__portfolio__img_item');
	var sliderTechnologies = $('.slider__detail__technologies');
	var i = 0;
	$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'});

	$('.slider__arrow_right').on('click', function(){
		setTimeout(function(){
			sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
			sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
		}, 1000);
		$(sliderObject[itemLink[i]]).css({'background': '#fff','color': '#fff'});//Каждой ссылке элемента списка присваиваем класс со сменой фона 
 		i++; //увеличиваем значение на +1
 		if(i > item.length-1){
 			i = 0;
 		}  
 		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
		sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
		sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
		sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
		sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
		sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
	});

	$('.slider__arrow_left').on('click', function(){
		$(sliderObject[itemLink[i]]).css({'background': '#fff','color': '#fff'});//Каждой ссылке элемента списка присваиваем класс со сменой фона 
		i--;
		if(i < 0){
 			i = item.length-1;
 		}
		setTimeout(function(){
			sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
			sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
		}, 1000);
		$(sliderObject[itemLink[i]]).css({'background': '#48cdb9','color': '#48cdb9'}); //Каждой ссылке элемента списка присваиваем класс со сменой фона
		sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
		sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
		sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
		sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
		sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
	});
	
	// $('.slider__list__btn_one').on('click', function(){	
	// 	setTimeout(function(){
	// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
	// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
	// 	}, 1000);
 // 		 	i = 0;
	// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
	// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
	// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
	// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
	// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
	// });

	// $('.slider__list__btn_two').on('click', function(){	
	// 	setTimeout(function(){
	// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
	// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
	// 	}, 1000);
 // 		 	i = 1;
	// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
	// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
	// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
	// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
	// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
	// });

	// $('.slider__list__btn_three').on('click', function(){	
	// 	setTimeout(function(){
	// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
	// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
	// 	}, 1000);
 // 		 	i = 2;
	// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
	// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
	// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
	// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
	// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
	// });

	// $('.slider__list__btn_four').on('click', function(){	
	// 	setTimeout(function(){
	// 		sliderTitle.removeClass('bounceInDown'); 	//Удаляем класс с анимацией на текст
	// 		sliderImg.removeClass('bounceInUp'); 	//Удаляем класс с анимацией на картинку
	// 	}, 1000);
 // 		 	i = 3;
	// 	sliderImg.attr('src', sliderObject[itemImg[i]]); 	//Изменяем путь к картинке
	// 	sliderTitle.text(sliderObject[item[i]]); 	//выбираем текущий обьект в массиве
	// 	sliderTechnologies.text(sliderObject[itemTechnologies[i]]); //выбираем текущий обьект в массиве
	// 	sliderTitle.addClass('bounceInDown'); 	//Добавляем классом анимацию на текст
	// 	sliderImg.addClass('bounceInUp'); 	//Добавляем классом анимацию на картинку
	// });


});

//BLUR
var blur = (function(){
    var blur = $('.feedback__blur'),
	    blurSection = $('.feedback');

	return {
		set : function () {
			var
				imgWidth = $('.page-form').width(),
				posLeft = blurSection.offset().left - blur.offset().left,
				posTop = blurSection.offset().top - blur.offset().top;

			blur.css({
				'background-size' : imgWidth + 'px' + ' ' + 'auto'
			})
		}
	}
}());
$(document).ready(function(){
	blur.set();
}); // -> ready_end;

$(window).resize(function(){
	blur.set();

}); // -> resize_end;

// Mail forma

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/assets/php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

	//VALIDATOR

// var result = form.addEventListener('submit', validate);
// function validate(e) {
// 	var inputs = document.getElementsByTagName("input");
//     var checked = true;
//   	e.preventDefault();
//    	for(var i = 0; i< inputs.length; i++){
//     	if(!inputs[i].value){
//        	checked = false;
//        	inputs[i].style.outline = "3px solid red";
//     	}else{
//        		if(!inputs[i].checked && inputs[i].value == 'on'){
//          	checked = false;
//          	inputs[i].style.outline = "3px solid red";
// 			}
//     	}
//      	// console.log(inputs[i].value);
//    	}
//   	// console.log(checked);
// };


	
// function validate() {
// 	var formLogin = document.getElementById("login");
//     var formPassword = document.getElementById("password");
//     var formEmail = document.getElementById("email");
//     var formText = document.getElementById("text");
//     var formPerson = document.getElementById("person");
//     var formQestion = document.getElementById("qestion");
  
// //   e.preventDefault();
  
// 	if(!formLogin.value){
//         formLogin.style.border = "3px solid red";
// 		return false;
// 	}
//     if(!formPassword.value){
//         formPassword.style.border = "3px solid red";
// 		return false;
// 	}
//   if(!formEmail.value){
//         formEmail.style.border = "3px solid red";
// 		return false;
// 	}
// 	if(!formText.required){
//         formText.style.border = "3px solid red";
// 		return false;
// 	}
//  //  if(!formPerson.checked){
//  //        formPerson.style.border = "3px solid red";
// 	// 	return false;
// 	// }
//  //  if(!formQestion.checked){
//  //        formQestion.style.border = "3px solid red";
// 	// 	return false;
// 	// }
// };

	


// VALIDATION
// $(window).on('load', function() {
// 	(function ($, w) {
//     var my = {};

//     publicInteface()
//     init();
//     addListener();

//     function addListener() {
//         $('.authorizhe-form__conteiner').on('submit', submitForm); //выбрала форму на странице авторизации
//         $('.feedback__form').on('submit', submitForm); // выбрала форму обратной связи на странице работ
//     }

//     function submitForm(e) {
//         e.preventDefault();
//         var $form = $(this),
//             url = '',
//             defObject = ajaxForm($form, url);
//         console.log('submit');

//     }

//     function ajaxForm(form, url) {
//         if (!validation.validateForm(form)) {
//             return false; // Возвращает false, если не проходит валидацию
//         }
//         // запрос
//     }

//     function init() {
//         // Инициализация модуля
//         my.publicMethod();
//     }

//     function publicInteface() {
//         my = {
//             publicMethod: function () {
//                 console.log('Публичный метод');
//             }
//         }
//     }

//     w.formQtp = my;

// 	})(jQuery, window);

// });