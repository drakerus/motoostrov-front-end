$(function() {



	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	});

	var show = false;
	$(".main-header .top-header .top-login .login-box .login.is-login").on("click", "span",  function() {
		if(show == false) {
			$(this).parent().addClass("shown");
			show = true;
		}
		else {
			$(this).parent().removeClass("shown");
			$("body").on("click", function() {
				$(".main-header .top-header .top-login .login-box .login.is-login").removeClass("shown");
				show = false;
			});
			show = false;
		}
		return false;
	});

	$(".custom-select").niceSelect();

	var w = $(window).width();
	//console.log(w);
	if (w > 425) {
		$('.equal2').equalHeights();
		$('.equal1').equalHeights();
	}
	if (w > 992) {
		$('.content-block .select-delivery input[type="radio"] + label .item').equalHeights();
	}

	$('.catalog .right-block .catalog-list li .img').equalHeights();

	$(".banner-top-list").owlCarousel({
		items: 1
	});
	$(".content-block .compare-list").owlCarousel({
		items: 3,
		nav: true,
		navText: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			992:{
				items:1
			},
			1300:{
				items:2
			}
		}
	});
	$(".review-list").owlCarousel({
		items: 1,
		nav: true,
		navText: false
	});

	$(".partner-list").owlCarousel({
		items: 5,
		nav: true,
		navText: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			580:{
				items:2
			},
			1000:{
				items:3
			},
			1200:{
				items:5
			}
		}
	});

	$(".brand-list").owlCarousel({
		items: 4,
		nav: true,
		navText: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			580:{
				items:2
			},
			1000:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});

	$(".sim-product ul").owlCarousel({
		items: 4,
		nav: true,
		navText: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			580:{
				items:2
			},
			1000:{
				items:3
			},
			1200:{
				items:5
			}
		}
	});

	$('.accordion__trigger').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
		accordionItem = $this.closest('.accordion__item'),
		accordionList = $this.closest('.accordion__list'),
		accordionItems = accordionList.find('.accordion__item'),
		accordeonContent = accordionItem.find('.accordion__content'),
		accordeonOtherContent = accordionList.find('.accordion__content'),
		
		duration = 250;
		
		if (!accordionItem.hasClass('is-active')) {
			accordionItem.addClass('is-active').siblings().removeClass('is-active');
			accordeonOtherContent.slideUp(duration);
			accordeonContent.slideDown(duration);
		} else {
			accordeonOtherContent.slideUp(duration);
			
			accordionItem.removeClass('is-active');
		}
	});
	$('.list-photo').bxSlider({
		mode: 'vertical',
		minSlides: 3,
		pager: false,
		slideMargin: 15
	});

	$(".tab_item").not(":first").hide();
	$(".tab").click(function() {
		$(".tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.count-minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.count-plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");
	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
