$(function(){
	var pos = $(document).scrollTop();
	
	$('.parallax-goldenrain .goldenrain').each(function(index){
		
		var block = $(this);
		
		block.css({
			top : (block.attr('data-top') - (block.attr('data-p-speed') * pos)) + 'px',
		})
		
	})
});