$(function(){
	 const stopScroll = function() {
		$('#subscribe-container').on('mousewheel', function(){
				return false;
			});
		$('html').css({
			'overflow': 'hidden'
		});
	}
	function showAlert (){
		$('#subscribe-container').fadeIn(300, stopScroll);
	}
	setTimeout(showAlert, 1500);
	$('#subscribe-container').click(function(event){
		if(event.target == this) {
			$(this).hide();
		}
		$('html').css({
			'overflow': 'auto'
		});
	});
	$('#send').on('click', function(){
		$('#subscribe-container').hide();
		$('html').css({
			'overflow': 'auto'
		});
		return false;
	});
	$('#device-menu').on('click', function() {
		$('#menu-phone-fact').css({
			'display': 'inline'
		});
		$('#mpf-container').css({
			'display': 'inline'
		});
		$('#menu-phone-fact').animate({
			'width': '290px'
		}, 400);
	});
	$('#close-mpf').on('click', function() {
		$('#menu-phone-fact').animate({
			'width': '0px'
		});
		$('#menu-phone-fact').animate({
			'width': '0px'
		});
		$('#mpf-container').fadeOut(400);
	});

	$('#banner-scroll').on('click', function(){
		$('#banner-mechanic').toggleClass('banner-mech-back');
		$('#banner-mechanic').toggleClass('banner-mech-back-2');
	});

	$.get('https://api.apilayer.com/fixer/latest?symbols=rub%2Cusd%2Cgel&base=eur', 
		{'apikey': 'KKWpKrwsPriuXWHIx1zzY2kqqqUh62b7'}, 
		function(response){
			$('#RUB-rate').text('RUB = ' + response.rates.RUB);
			$('#USD-rate').text('USD = ' + response.rates.USD);
			$('#GEL-rate').text('GEL = ' + response.rates.GEL);
	});

	$('#darkButton').click(function(){
		if ($('#checker').css('font-size') == '1px') {
			$('#checker').css('font-size', '2px');
			$('#css_day').remove();
			let nightCSS = $('<link id="css_night" rel="stylesheet" type="text/css" href="news_agency_dark_css.css">');
			$('head').prepend(nightCSS);
		} else {
			if ($('#checker').css('font-size') == '2px') {
				$('#checker').css('font-size', '1px');
				$('#css_night').remove();
				let dayCSS = $('<link id="css_day" rel="stylesheet" type="text/css" href="news_agency_css.css">');
				$('head').prepend(dayCSS);
			}
		}
	});
	$('#darkButton-mpf').click(function(){
		if ($('#checker').css('font-size') == '1px') {
			$('#checker').css('font-size', '2px');
			$('#css_day').remove();
			let nightCSS = $('<link id="css_night" rel="stylesheet" type="text/css" href="news_agency_dark_css.css">');
			$('head').prepend(nightCSS);
		} else {
			return false;
		}
	});
	$('#dayButton-mpf').click(function(){
		if ($('#checker').css('font-size') == '2px') {
			$('#checker').css('font-size', '1px');
			$('#css_night').remove();
			let dayCSS = $('<link id="css_day" rel="stylesheet" type="text/css" href="news_agency_css.css">');
			$('head').prepend(dayCSS);
		} else {
			return false;
		}
	});
});





