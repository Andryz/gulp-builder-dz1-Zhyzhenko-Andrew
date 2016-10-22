// // Mail forma
// var MailModule = (function () {

// 	$(document).ready(function() {

// 		//E-mail Ajax Send
// 		$("form").submit(function() { //Change
// 			var th = $(this);
// 			$.ajax({
// 				type: "POST",
// 				url: "/assets/php/mail.php", //Change
// 				data: th.serialize()
// 			}).done(function() {
// 				alert("Thank you!");
// 				setTimeout(function() {
// 					// Done Functions
// 					th.trigger("reset");
// 				}, 1000);
// 			});
// 			return false;
// 		});

// 	});
// }());