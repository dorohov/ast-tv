
$(function(){
	
	var rDrob = function(m,n) {
		return Math.random();
	};
	
	var rInt = function(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};
	
	var createChildren = function(_parent) {
		
		var pch = $('.page-container').outerHeight(true);
		var _pw = _parent.outerWidth(true) - 60;
		
		for(var i = 0; i < 19; i++) {
			
			var tz = rInt(0, 200);
			var scale = rInt(0.5, 2.5) + rDrob();
			var psp = rInt(0, 3);
			var deg = 19;//rInt(1, 89);
			
			var _top = rInt(0, pch);
			var _left = rInt(0, _pw);
			
			var span = $('<span/>', {
				'class' : 'goldenrain',
				'data-top' : _top,
				'data-p-speed' : rInt(0, 3) + rDrob(),
			})
				.css({
					top : _top + 'px',
					left : _left + 'px',
					//transform : 'perspective(' + psp + 'px) rotate(-' + deg + 'deg) scale(' + scale + ') translateZ(' + tz + ')',
					//perspective : psp + 'px',
					transform : 'rotate(-' + deg + 'deg) scale(' + scale + ') translateZ(' + tz + 'px)',
				})
				.prependTo(_parent)
				;
			
		}
	}
	
	var pgl = $('.parallax-goldenrain.left');
	var pgr = $('.parallax-goldenrain.right');
	
	pgl.empty();
	pgr.empty();
	
	var m_w = ($(window).outerWidth(true) - $('.b-menu .gradiented').outerWidth(true) - 80) / 2;
	
	pgl.css({
		width : m_w + 'px',
	});
	
	pgr.css({
		width : m_w + 'px',
	});
	
	if(!screenJS.isXS() && !screenJS.isSM()) {
		createChildren(pgl);
		createChildren(pgr);
	} else {
		
	}
	
});