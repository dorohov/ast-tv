
$(document.body).on('click.fecss.table-switcher.switcher', '.table-switcher .switcher-row .switcher a', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.table-switcher.switcher');
	
	var btn = $(this);
	var filter = btn.attr('data-table-filter');
	
	btn.closest('.switcher-row').find('.switcher').removeClass('active');
	btn.parent().addClass('active');
	
	$('.cost-table').removeClass('active');
	$('.cost-table[data-table-filter="' + filter + '"]').addClass('active');
	
	$('.other-service .body').removeClass('active');
	$('.other-service .body[data-table-filter="' + filter + '"]').addClass('active');
	
});
$('.table-switcher .switcher-row .switcher:nth-child(1) a').trigger('click.fecss.table-switcher.switcher');
