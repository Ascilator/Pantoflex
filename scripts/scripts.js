
jQuery(function () {
	$('.form_btn').mousedown(function(){
		$(this).children('.upper_btn').css({
			'transform':'translateY(7px)',
			'transition':'.2s'
		});
	});
	$('.form_btn').mouseup(function(){
		$(this).children('.upper_btn').css({
			'transform':'translateY(0px)',
			'transition':'.2s'
		})
	});
	$('#_1 ._form').on('focus', function(){		
		if ($(this).val() == 'Имя'  || $(this).val() == 'Телефон') {
			$(this).val('');
		}
	});

	$('#_1 ._form').on('blur', function(){
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Телефон');
			}
			
		}
	});
	function my_clock(argument) {
		var hours 	= $('.timer_hours').text();
			minutes = $('.timer_minutes').text();
			seconds = $('.timer_seconds').text();
		
	
		
		seconds--;
		if(seconds < 0){
			minutes--;
			seconds = 60;
			if(minutes < 0){
				hours--;
				minutes = 60;
				if(hours === 0){
					return;
				}
			}
		}

		if(hours < 10) {
			if(hours[0] != '0'){ 
				hours = '0' + hours;
			}
		}
		if(minutes < 10) { 
			if(minutes[0] != '0') { 
				minutes = '0' + minutes;
			}
		}
		if(seconds < 10) { seconds = '0' + seconds; }

		$('.timer_hours').text(hours);
		$('.timer_minutes').text(minutes);
		$('.timer_seconds').text(seconds);
	}
	setInterval(my_clock, 1000);

});