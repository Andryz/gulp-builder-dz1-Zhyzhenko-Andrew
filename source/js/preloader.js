// PRELOADER
var PreloaderModule = (function () {


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
}());