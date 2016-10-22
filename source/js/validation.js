// VALIDATION
var ValidationModule = (function () {
	$(function() {

	    $("#form-validation").validate({

	        rules: {
	 			form_name: {
	                required: true
	            },
	            form_email: {
	                required: true,
	                email: true
	            },
	            form_password: {
	                required: true,
	                minlength: 6
	            }
	        },
	        messages: {
	            form_name: {
	                required: "Поле Имя обязательное для заполнения"
	            },
	            form_email: {
	                required: "Поле E-mail обязательное для заполнения",
	                email: "Введите пожалуйста корректный e-mail"
	            },
	            form_password: {
	                required: "Поле Пароль обязательное для заполнения",
	                minlength: "Пароль должен иметь не менее 6 символов"
	            }
	        },
	        focusCleanup: true,  //При фокусе очищает цвет ошибки
	        focusInvalid: false,
	        submitHandler: function() {
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
	        }
	    });

	});
}());