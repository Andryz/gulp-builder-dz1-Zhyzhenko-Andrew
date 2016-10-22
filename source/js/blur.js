//BLUR
var BlurModule = (function () {

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
		blur.set()
	}); // -> ready_end;

	$(window).resize(function(){
		blur.set()

	}); // -> resize_end;
}());