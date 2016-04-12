
$(document.body).on('click.fecss.program-switcher.program-title', '.program-switcher .program-title', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.program-switcher.program-title');
	
	var btn = $(this);
	var filter = btn.attr('data-program-filter');
	
	btn.closest('.program-switcher').find('.program-title').removeClass('active');
	btn.addClass('active');
	
	$('.b-archive-video .video-list .video-line .item').removeClass('visible');
	$('.b-archive-video .video-list .video-line .item[data-program-filter="' + filter + '"]').addClass('visible');
	
	$('.b-archive-video .video-list').trigger('fecss.video-list.init');
	
});
//$('.program-switcher .program-title').eq(0).trigger('click.fecss.program-switcher.program-title');



$(function(){


var _param = {
	xs : 1,
	sm : 3,
	md : 4,
	lg : 4,
	padding : {
		xs : 15,
		sm : 15,
		md : 15,
		lg : 15,
	},
	item_w : 0,
	slide : 0,
};

var block, vl, items;



$(document.body).on('click.fecss.video-list.video-line.item', '.video-list .video-line .item', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.video-list.video-line.item');
	
	var btn = $(this);
	var uid = btn.attr('data-youtube-uid');
	var url = 'https://www.youtube.com/embed/' + uid;
	
	$('.program-video-player').attr('src', url);
	
});



$(document.body).on('fecss.video-list.init', '.b-archive-video .video-list', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:fecss.video-list.init');
	
	block = $(this);
	vl = block.find('.video-line');
	items = vl.find('.item.visible');
	
	var b_w = block.outerWidth(true);
	var b_w_padding = b_w + (_param.padding[screenJS.screenIs()] * 2);
	
	_param.item_w = (b_w_padding / _param[screenJS.screenIs()]);
	items.each(function(index){
		$(this).css({
			width : _param.item_w + 'px',
			left : (_param.item_w * index) + 'px',
		});
		if(screenJS.isXS()) {
			$(this).find('.preview-player').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('data-youtube-uid'));
		} else {
			$(this).find('.preview').css({
				'background-image' : 'url(http://i1.ytimg.com/vi/' + $(this).attr('data-youtube-uid') + '/default.jpg)',
			});
		}
	})
	
	_param.slide = 0;
	
	block.trigger('fecss.video-list.sliteTo', [_param.slide]);
	
	items.eq(0).trigger('click.fecss.video-list.video-line.item');//program-video-player
	
});



$(document.body).on('fecss.video-list.sliteTo', '.b-archive-video .video-list', {}, function(event, slide){
	event.preventDefault();
	
	console.log('body trigger:fecss.video-list.sliteTo');
	
	var pos = -_param.item_w * slide;
	
	vl.css({
		'transform' : 'translateX(' + pos + 'px)',
	})
		.data('slide', slide)
		.data('css_pos', pos);
});



$(document.body).on('click.fecss.video-list.video-btn', '.video-list .video-btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	var block = btn.closest('.video-list');
	var vl = block.find('.video-line');
	var css_pos = vl.data('css_pos');
	var slide = vl.data('slide');
	
	if(btn.hasClass('left')) {
		
		if(slide > 0) {
			_param.slide = slide - 1;
			block.trigger('fecss.video-list.sliteTo', [_param.slide]);
		}
		
	} else if(btn.hasClass('right')) {
		
		if(slide < (items.size() - (_param[screenJS.screenIs()] - 0))) {
			_param.slide = slide + 1;
			block.trigger('fecss.video-list.sliteTo', [_param.slide]);
		}
		
	}
	
});

});