// SLIDER
var SliderModule = (function () {
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
}());