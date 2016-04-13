/*
$(function(){
	
	var rDrob = function(m,n) {
		return Math.random();
	};
	
	var rInt = function(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};
	
	var body = $('body');
	
	$('.goldenrain').empty().remove();
	
	if(!screenJS.isXS() && !screenJS.isSM()) {
		for(var i = 0; i < 26; i++) {
			
			var span = $('<span/>', {
				'class' : 'goldenrain',
				'data-scale' : rInt(0, 3) + rDrob(),
				'data-top' : rInt(0, body.outerHeight(true)),
				'data-left' : rInt(0, body.outerWidth(true)) - 60,
				'data-p-speed' : rInt(0, 3) + rDrob(),
			})
				.prependTo(body);
			if(span.attr('data-scale') > 2) {
				span.addClass('filter blur');
			}
			span.css({
				top : span.attr('data-top') + 'px',
				left : span.attr('data-left') + 'px',
				transform : 'rotate(-26deg) scale(' + span.attr('data-scale') + ')',
			});
			
		}
	}
	
});

$(window).on('scroll', function(){
	var pos = $(document).scrollTop();
	
	$('.goldenrain').each(function(index){
		
		var block = $(this);
		
		block.css({
			top : (block.attr('data-top') - (block.attr('data-p-speed') * pos)) + 'px',
		})
		
	})
});
*/