$(window).load(function() {

	$("#up_button, #footer_up").on("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('html, body').animate({
	  		scrollTop:0
		}, 450);
	});

	$("#header_menu a, #header .logo a").on("click", function (e) {
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top-80
		}, 500);
		if(document.documentElement.clientWidth < 768) {
			$("#header_menu").removeClass('display');
		};
	});

	$("#header_menu a").on("click", function (e) {
		$("#header_menu a").removeClass('active');
		$(this).toggleClass('active');
	});

	$(".nav-portofolio a").on("click", function (e) {
		$(".nav-portofolio a").removeClass('active');
		$(this).toggleClass('active');
	});
});

$(document).ready(function($) {
	$('#canvas1 iframe').addClass('scrolloff');
	$('#canvas1').on('click', function () {
		$('#canvas1 iframe').removeClass('scrolloff');
	});
	$("#canvas1 iframe").mouseleave(function () {
		$('#canvas1 iframe').addClass('scrolloff');
	});

	$('.tabs_menu a').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		$('.tabs_menu .active').removeClass('active');
		$(this).addClass('active');
		$('.tab').hide();
		$('#'+$(this).attr('href')).fadeIn(400);
	});
});

$(window).scroll(function() {
	if ($(window).scrollTop()>360)
		$("#up_button").fadeIn();
	else 
		$("#up_button").fadeOut();
});

function openMenu() {
	var open = document.getElementById('header_menu');
	open.classList.toggle('display');
};