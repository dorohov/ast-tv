(function(){
	
	$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: '&#x3c;Пред',
			nextText: 'След&#x3e;',
			currentText: 'Сегодня',
			monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
			dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
			dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			weekHeader: 'Нед',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	
	var cal = $('.cal-datepicker');
	
	var _a = $('<a/>', {
		class : 'fecss-modal-btn fecss-modal-btn-hidden',
		href : '#site-modal-date',
	})
		.appendTo($(document.body))
	;
	
	cal.datepicker({
		onSelect:function (dateText, inst) {
			//console.log(inst);
			/*
			inst.currentDay
			inst.currentMonth
			inst.currentYear
			*/
			
			var base_url = cal.attr('data-base-url') || '';
			
			var day = '' + inst.currentDay;
			var month = '' + (inst.currentMonth + 1);
			
			if(day.length == 1) {
				day = '0' + day;
			}
			if(month.length == 1) {
				month = '0' + month;
			}
			
			var getDateContentByDate;
			
			if(typeof window.getDateContentByDate != 'undefined') {
				
				getDateContentByDate = window.getDateContentByDate;
				
			} else {
				
				console.log('Undefined function getDateContentByDate!');
				
				getDateContentByDate = function(str) {
					return 0;
				};
				
			}
			
			var item_id = getDateContentByDate('' + month + day);
			
			$.post(base_url,
				{
					'action':'azbnajax_call',
					'method':'getDateContentByDate',
					'id':item_id,
					'type':'plain',
				},
				function(data){
					
					$('#site-modal-date-content').html(data);
					
					_a.trigger('click');
					
					/*
					$('a.fecss-modal-btn[href="#site-modal-date"]')
						//.appentTo($(document.body))
						.trigger('click')
						//.empty()
						//.remove()
					;
					*/
					
				}
			);
			
		},
	});
	
	//cal.find('.ui-datepicker-today a').trigger('click');
	
	$('.b-holiday-day .more a').on('click.azbn', function(event){
		cal.find('.ui-datepicker-today a').trigger('click');
		//alert(1);
	})
	
})();