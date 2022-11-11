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
		/*if ($('#name-add-new').val() != 0) {
			alert('Подписка оформлена!');
		} ----потом нормально добавить услвие "если содержит '@', то показать уведомление"*/
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
	//Далее - про курсы валют
	$.get('http://data.fixer.io/api/latest', 
		{'access_key': '7556a4a9e24d262b95e2bdc7193a5b65'}, 
		function(response){
			$('#RUB-rate').text('RUB = ' + response.rates.RUB);
			$('#USD-rate').text('USD = ' + response.rates.USD);
			$('#GEL-rate').text('GEL = ' + response.rates.GEL);
		});
});





/*$('#darkButton').click(function(){
		$('link').remove();
		var nightCSS = $('<link id="css_night" rel="stylesheet" type="text/css" href="news_agency_dark_css.css">');
		$('head').prepend(nightCSS);
		$('#logo').removeClass('layer_exist');
		$('#logo').addClass('layer_none');
		$('#newlogodark').removeClass('layer_none');
		$('#newlogodark').addClass('layer_exist');
		$('#logo2').removeClass('layer_exist');
		$('#logo2').addClass('layer_none');
		$('#newlogodark2').removeClass('layer_none');
		$('#newlogodark2').addClass('layer_exist');
		$(this).removeClass('layer_front');
		$(this).addClass('layer_back');
		$('#dayButton').removeClass('layer_back');
		$('#dayButton').addClass('layer_front');
		//Далее вводдим функции дневной кнопки
		$('#dayButton').click(function(){
		$('link').remove();
		var dayCSS = $('<link id="css_day" rel="stylesheet" type="text/css" href="news_agency_css.css">');
		$('head').prepend(dayCSS);
		$('#logo').removeClass('layer_none');
		$('#logo').addClass('layer_exist');
		$('#newlogodark').removeClass('layer_exist');
		$('#newlogodark').addClass('layer_none');
		$('#logo2').removeClass('layer_none');
		$('#logo2').addClass('layer_exist');
		$('#newlogodark2').removeClass('layer_exist');
		$('#newlogodark2').addClass('layer_none');
		$(this).removeClass('layer_front');
		$(this).addClass('layer_back');
		$('#darkButton').removeClass('layer_back');
		$('#darkButton').addClass('layer_front');
		});
	});*/