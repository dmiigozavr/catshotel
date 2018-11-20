(function($) {
	$(document).ready(function() {
		
		
		//header
		function header_modified() {
			var w_scroll = $(window).scrollTop();
			if (w_scroll > 100) {
				$('header').addClass('modified');
			}
			else {
				$('header').removeClass('modified');
			}
		}
		header_modified();
		$(window).on('scroll', function() {
			header_modified();
		});
		
		$('.modal').on('show.bs.modal', function(e) {
			$('header').addClass('fix');
		});
		$('.modal').on('hidden.bs.modal', function(e) {
			$('header').removeClass('fix');
		});
			
		
		//burger menu
		$('.burger').on('click', function() {
			$('.burger-menu').addClass('b-opened');
			$('body, header').addClass('fix');
		});
		$('.crossy').on('click', function() {
			$('.burger-menu').removeClass('b-opened');
			$('body, header').removeClass('fix');
		});
		$(document).mouseup(function(e) {
			var div = $('.burger-menu');
			if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass('b-opened')) {
				div.removeClass('b-opened');
				$('body, header').removeClass('fix');
			}
		});
		
		
		//sliders
		$('.number-slider').slick({
			prevArrow: '<button type="button" class="slick-prev slick-arrow icon-arr-left" aria-label="Previous"></button>',
			nextArrow: '<button type="button" class="slick-next slick-arrow icon-arr-right" aria-label="Next"></button>'
		});
		
		$('.about-slider').slick({
			prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Previous"></button>',
			nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Next"></button>',
			slidesToShow: 2,
			appendArrows: $('.about-us-inner'),
			//autoplay: true,
			//autoplaySpeed: 5000
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
		
		
		//lightcase
		$('a[data-rel^=lightcase]').lightcase({
			maxWidth: 2000,
			maxHeight: 1200,
			swipe: true
		});
		
		
		//datepicker
		var dates1 = $('#date-from1, #date-to1').datepicker({
			minDate: new Date(),
			onSelect: function(selectedDate1) {
				var option1 = this.id == 'date-from1' ? 'minDate' : 'maxDate',
					instance1 = $(this).data('datepicker'),
					date1 = $.datepicker.parseDate(instance1.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate1, instance1.settings);
				dates1.not(this).datepicker('option', option1, date1);
			}
		});
				
		var dates2 = $('#date-from2, #date-to2').datepicker({
			minDate: new Date(),
			onSelect: function(selectedDate2) {
				var option2 = this.id == 'date-from2' ? 'minDate' : 'maxDate',
					instance2 = $(this).data('datepicker'),
					date2 = $.datepicker.parseDate(instance2.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate2, instance2.settings);
				dates2.not(this).datepicker('option', option2, date2);
			}
		});
		
		var dates3 = $('#date-from3, #date-to3').datepicker({
			minDate: new Date(),
			onSelect: function(selectedDate3) {
				var option3 = this.id == 'date-from3' ? 'minDate' : 'maxDate',
					instance3 = $(this).data('datepicker'),
					date3 = $.datepicker.parseDate(instance3.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate3, instance3.settings);
				dates3.not(this).datepicker('option', option3, date3);
			}
		});
		
		
		//maskedinput
		$('.user-tel').mask('+7 ( 999 ) 999 - 99 - 99');
		
		
	});
}) (jQuery);

