
$(function(){

var timer;

var tv = $('.b-tv-slider .slider-cont .tv');
var screen = tv.find('.screen');
var items = screen.find('.item');

timer = setInterval(function(){
	tv.find('.tv-btn.right').trigger('click.fecss.b-tv-slider.slider-cont.tv.tv-btn');
}, 4000);

/*
$(document.body).on('click.fecss.video-list.video-line.item', '.video-list .video-line .item', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:click.fecss.video-list.video-line.item');
	
});
*/


$(document.body).on('fecss.b-tv-slider.slider-cont.tv.init', '.b-tv-slider .slider-cont .tv', {}, function(event){
	event.preventDefault();
	
	console.log('body trigger:fecss.b-tv-slider.slider-cont.tv.init');
	
	items.addClass('next');
	items.eq(0).toggleClass('active next');
	
});

$(document.body).on('mouseover.fecss.b-tv-slider.slider-cont.tv', '.b-tv-slider .slider-cont .tv', {}, function(event){
	event.preventDefault();
	
	clearInterval(timer);
	
});

$(document.body).on('mouseleave.fecss.b-tv-slider.slider-cont.tv', '.b-tv-slider .slider-cont .tv', {}, function(event){
	event.preventDefault();
	
	timer = setInterval(function(){
		tv.find('.tv-btn.right').trigger('click.fecss.b-tv-slider.slider-cont.tv.tv-btn');
	}, 4000);
	
});

$(document.body).on('click.fecss.b-tv-slider.slider-cont.tv.tv-btn', '.b-tv-slider .slider-cont .tv .tv-btn', {}, function(event){
	event.preventDefault();
	
	var btn = $(this);
	
	if(btn.hasClass('left')) {
		
		var active = items.filter('.active');
		var prev = active.prev('.item.prev');
		
		if(prev.size() == 1) {
			active.toggleClass('active next');
			prev.toggleClass('active prev');
		} else {
			active.toggleClass('active');
			items.removeClass('next').addClass('prev');
			items.eq(-1).toggleClass('active prev');
		}
		
	} else if(btn.hasClass('right')) {
		
		var active = items.filter('.active');
		var next = active.next('.item.next');
		
		if(next.size() == 1) {
			active.toggleClass('active prev');
			next.toggleClass('active next');
		} else {
			active.toggleClass('active');
			items.removeClass('prev').addClass('next');
			items.eq(0).toggleClass('active next');
		}
		
	}
	
});

});