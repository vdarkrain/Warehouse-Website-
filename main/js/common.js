$(document).ready(function() {

	$(".sandwich").click(function(){
		$(this).toggleClass("active");
		$(".mob_mnu_wrap").fadeToggle();
	});
	
	$(".mob_link").click(function(){
		$(".mob_mnu_wrap").fadeOut();
	});

	$(".question").click(function(){
		$(this).next(".answer").slideToggle();
		$(this).toggleClass("active");
	});

	function calcValue() {
		checked = $(".calculator").find('input:radio:checked');
		containerType = checked.attr("data-value");
		range = $(".calculator").find('.range');
		cont = checked.attr("value");
		month = document.getElementById('range').value;
		total = cont * month;
		$('.value').text(total + " р");
		$("#cont_popup").attr("value", containerType);
		$("#time_popup").attr("value", "Срок " + month + " мес" );
		$("#value_popup").attr("value", "Стоимость " + total + " р" );
	};

	calcValue()

	$(".calculator").find("input").change(
		function() {
			calcValue();
		}
	);
	
	$('.gallery_slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		zoom: {
				enabled: true,
				duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
		gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
		});

	$('.gallery_slider').slick({
		centerMode: true,
		centerPadding: '230px',
		slidesToShow: 2,
		prevArrow: '<div class="arr_left"></div>',
		nextArrow: '<div class="arr_right"></div>',
		arrows: false,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: true,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.gallery_arrow_left').on('click', function() {
    $('.gallery_slider').slick('slickPrev');
	});
	$('.gallery_arrow_right').on('click', function() {
    $('.gallery_slider').slick('slickNext');
  });

	$('.feedback_slider').slick({
		dots: true,
		centerMode: true,
		variableWidth: true,
		slidesToShow: 1,
		prevArrow: '<div class="arr_left"></div>',
		nextArrow: '<div class="arr_right"></div>',
		arrows: true,
		responsive: [
			{
				breakpoint: 999,
				settings: {
					centerMode: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					centerMode: false,
					slidesToShow: 1
				}
			}
		]
	});

	$("form").submit(function(){
		var th=$(this);
		$.ajax({type:"POST",
						url:"mail.php",
						data:th.serialize()}).done(function(){
							$.magnificPopup.close();
							$(".popup_done").fadeIn();
							$(".popup_done").addClass("active");
						setTimeout(function(){th.trigger("reset");},1000);})
						;return false;});
	
	$(".popup_done").click(function(){
		$(this).fadeOut();
		$(this).removeClass("active");
	})

	$('.popup_btn').magnificPopup({
		type: 'inline',
		preloader: false
	});
	
});
