jQuery(document).ready(function($){
	if($('.gallery-block').length){
		$('.gallery').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.gallery-nav'
		})
		$('.gallery-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			nextArrow:'<i class="icon-right-arrow"></i>',
			prevArrow:'<i class="icon-left-arrow"></i>',
			asNavFor: '.gallery',
			dots: false,
			centerMode: true,
			focusOnSelect: true,

		})
	}
	if($('.why-choose').length){
		if($('.why-choose h2 span').text().length > 0){
			$('.why-choose h2').show();
		}
	}
	if($('.product-img .item').length > 1){
		console.log('if')
		$('.product-img').slick({
			lazyLoad: 'progressive',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			dots:false,
			infinite:false,
			asNavFor: '.product-nav',
			swipe:false,
		});
		$('.product-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.product-img',
			dots:false,
			infinite:false,
			focusOnSelect: true,
			centerMode:true,
		});
		$('.product-nav').show();
	}else{
		$('.product-img .item').each(function(){
			var dataLazy = $(this).find('img').attr('data-lazy');
			console.log(dataLazy)
			$(this).find('img').attr('src', dataLazy);
		})
	}
	$('.burger-menu').click(function(){
		$(this).toggleClass('close');
		$('body').toggleClass('modal-open');
	})
	$('.products-items.slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll:1,
		dots: true,
		prevArrow:'<i class="icon-arrow-left"></i>',
		nextArrow:'<i class="icon-arrow-right"></i>',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll:1,
			}
		},{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows:false,
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,

			}
		}]
	});
	$('.other-products .items').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll:1,
		dots: true,
		prevArrow:'<i class="icon-arrow-left"></i>',
		nextArrow:'<i class="icon-arrow-right"></i>',
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll:1,
			}
		},{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows:false,
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
			}
		}]
	});
	if($(window).width() > 767){
		if($('.grid').length){
			var grid = $('.grid');
			while( grid.children('img').length){
				grid.children('img:lt(4)').wrapAll('<div class="images">');
			}
			$('.images').each(function(){
				var imageSwrap = $(this).children('img')
				for (var i = 1; i < imageSwrap.length; i += 3) {
					if (i < 2) {
						imageSwrap.slice(i, i + 2).wrapAll('<div class="center"></div>');
					}
				}
			});
		}
	}else{
			$('.grid img').each(function(){
				$(this).wrap('<div class="img-slider"></div>');
			})
	}

	$('.reviews .items').slick({
		arrows:false,
		dots: true,
		responsive: [{
			breakpoint: 10000,
			settings: "unslick"
		},{
			breakpoint: 992,
			settings: {
				infinite: true,
				slidesToShow: 3,
				slidesToScroll:1,
				adaptiveHeight: true
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				adaptiveHeight: true
			}
		},{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true
			}
		}]
	});
	if($('.blog, .about').length){
		var flag = true;
		$(window).on('resize', function () {
			console.log(flag)
			if ($(window).width() < 481) {
				if(flag = true){
					if($('.blog .gallery .grid').length == 0){
						$('.blog .gallery img').wrap('<div class="img"></div>');
						$('.blog .gallery .img').wrapAll('<div class="grid"></div>');
						$('.gallery .grid').slick({
							arrows:false,
							dots: true,
							responsive: [{
								breakpoint: 10000,
								settings: "unslick"
							},{
								breakpoint: 768,
								settings: {
									infinite: true,
									slidesToShow: 1,
									centerMode: true,
									variableWidth: true,
									adaptiveHeight: true
								}
							}]
						});
					 }
					flag = false
				}
			}
			else{
				flag = true
			}
			});

		$(window).on('resize', function () {
			if ($(window).width() > 480) {
				if($('.grid').length){
					$('.gallery .grid').slick('unslick')
					$('.posts .items').slick('unslick')
					$('.blog .gallery img').unwrap().unwrap();
				}
			}else{
				if($('.posts .items:not(.slick-initialized)')){
					$('.posts .items').slick({
						arrows:false,
						dots: true,
						responsive: [{
							breakpoint: 10000,
							settings: "unslick"
						},{
							breakpoint: 480,
							settings: {
								focusOnSelect: true,
								infinite: true,
								slidesToShow: 1,
							}
						}]
					});
				}
			}

		});
		if($(window).width() < 481){
			if($('.gallery').length){
				$('.blog .gallery img').wrap('<div class="img"></div>')
				$('.blog .gallery .img').wrapAll('<div class="grid"></div>')
			}
		}
	}
	$('a[href="#gallery"]').on('shown.bs.tab', function (e) {
		if($('.gallery .grid.slick-initialized').length == 0){
			$('.gallery .grid').slick({
				arrows:false,
				dots: true,
				responsive: [{
					breakpoint: 10000,
					settings: "unslick"
				},{
					breakpoint: 768,
					settings: {
						infinite: true,
						slidesToShow: 1,
						centerMode: true,
						variableWidth: true,
						adaptiveHeight: true
					}
				}]
			});
		}
	})

	$('.posts .items').slick({
		arrows:false,
		dots: true,
		responsive: [{
			breakpoint: 10000,
			settings: "unslick"
		},{
			breakpoint: 480,
			settings: {
				infinite: true,
				slidesToShow: 1,
			}
		}]
	});
	$('a[href*=#]:not([data-toggle="tab"]):not(.button):not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 150
				}, 1000);
				return false;
			}
		}
	});
//	if($('#gallery').length){
//		$('#gallery .images').each(function(){
//			var imageSwrap = $(this).children('img')
//			for (var i = 1; i < imageSwrap.length; i += 7) {
//				if (i < 6) {
//					imageSwrap.slice(i, i + 6).wrapAll('<div class="min-gallery"></div>');
//				}
//			}
//		});
//	}
	$('.tab-content a.button').click(function(e){
		e.preventDefault();
		if($('.tab-content form').hasClass('show')){
			$('.tab-content form').removeClass('show');
		}else{
			$('.tab-content form').addClass('show');
		}

	});
	$('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
		$('.tab-content form').removeClass('show');
	})

	$('body').on('click', '.title', function() {
		var allMenu = $('.accardion .description'),
			currMenu = $(this).next();
		if ( $(this).parent().hasClass('open') ) {
			currMenu.slideUp(300);
			currMenu.prev().removeClass('icon-minus')
			currMenu.prev().addClass('icon-plus')
			$('.accardion .item').removeClass('open');
			console.log('if')

		} else {
			console.log('else')
			$('.accardion .item').removeClass('open');
			$(this).parent().addClass('open');
			allMenu.slideUp(300);
			allMenu.prev().removeClass('icon-minus')
			allMenu.prev().addClass('icon-plus')
			currMenu.slideDown(300);
			currMenu.prev().addClass('icon-minus')
			currMenu.prev().removeClass('icon-plus')

		}
	});
	if($('.glossary').length){
		$('.tab-pane').each(function(){
			if($(this).children().length == 0){
				var idEl = $(this).attr('id');
				$('#'+idEl+'').addClass('disabled');
				$('[href="#'+ idEl +'"]').parent().addClass('disabled');
			}
		});
		$('.nav [href="#all"]').click(function(){
			$(this).addClass('active');
			$('.tab-pane:not(.disabled)').addClass('active')
		})
	}
	if($('#wpadminbar').length){
		$('body').addClass('adminbar')
	}
	$('.office li:first').addClass('active');
	if($(window).width() < 992){
		if($('.sub-menu').length){
			$('.sub-menu').each(function(){
				if($(this).parents('li').find('i').length == 0){
					$(this).parents('li').children('a').after('<i class="icon-plus">');
				}
				$(this).parents('li').children('a').click(function(e){
					e.preventDefault();
					$(this).parent().find('.sub-menu').slideToggle();
					if($(this).parent().find('i').hasClass('icon-plus')){
						$(this).parent().find('i').attr('class', 'icon-minus');
					}else{
						$(this).parent().find('i').attr('class', 'icon-plus');
					}
				})
			})
		}
	}

	$('.open-form').click(function(e){
		e.preventDefault();
		$(this).next().children('form').toggleClass('open');
	})
	$('.about-company .button').click(function(e){
		e.preventDefault();
		$('.about-company-form form').toggleClass('show');
	})
	let images = [...document.querySelectorAll('.lazy-image')]

	const interactSettings = {
	  root: document.querySelector('.center'),
	  rootMargin: '0px 0px 200px 0px'
	}

	function onIntersection(imageEntites) {
	  imageEntites.forEach(image => {
		if (image.isIntersecting) {
		  observer.unobserve(image.target)
		  image.target.src = image.target.dataset.src
		  image.target.onload = () => image.target.classList.add('loaded')
		}
	  })
	}

	let observer = new IntersectionObserver(onIntersection, interactSettings)

	images.forEach(image => observer.observe(image))

})
