
$(document.body).on('click.fecss.program-switcher.program-title', '.program-switcher .program-title', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.program-switcher.program-title');
	
	var btn = $(this);
	
	btn.closest('.program-switcher').find('.program-title').removeClass('active');
	btn.addClass('active');
	
	
});
$('.program-switcher .program-title').eq(0).trigger('click.fecss.program-switcher.program-title');
