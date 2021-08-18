jQuery(document).ready(function ($) {
	$('.top-form').submit(function (e) {
		e.preventDefault();
		var data = {
			name: $('.top-form input[name=name]').val(),
			email: $('.top-form input[name=email]').val(),
			phone: $('.top-form input[name=phone]').val(),
			count: $('.top-form input[name=count]').val(),
		}
		$.ajax({
			type: "post",
			url: "/mail.php",
			data: data,
			dataType: "dataType",
			success: function (response) {
				сonsole.log(response);
				alert("send");
			}
		});
	});
	$('.footer-form').submit(function (e) {
		e.preventDefault();
		var data = {
			name: $('.footer-form input[name=name]').val(),
			email: $('.footer-form input[name=email]').val(),
			phone: $('.footer-form input[name=phone]').val(),
			count: $('.footer-form input[name=count]').val(),
			message: $('.footer-form input[name=message]').val(),
			subject: $('.footer-form input[name=subj]').val(),
		}
		$.ajax({
			type: "post",
			url: "/mail.php",
			data: data,
			dataType: "dataType",
			success: function (response) {
				сonsole.log(response);
				alert("send");
			}
		});
	});
	$('.form-coupon').submit(function (e) {
		e.preventDefault();
		var data = {
			name: $('.form-coupon input[name=name]').val(),
			email: $('.form-coupon input[name=email]').val(),
			phone: $('.form-coupon input[name=phone]').val(),
		}
		$.ajax({
			type: "post",
			url: "/mail.php",
			data: data,
			dataType: "dataType",
			success: function (response) {
				сonsole.log(response);
				alert("send");
			}
		});
	});
});
