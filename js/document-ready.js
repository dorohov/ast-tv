'use strict';

window.onerror = function(error, url, lineNumber, column, errorObj) {
	console.log('Error FECSS: ' + url + ':' + lineNumber + ':' + column + ': ' + JSON.stringify(error) + '\n' + JSON.stringify(errorObj));
	return;
}

function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{"default":[],portrait:[],landscape:[]},sm:{"default":[],portrait:[],landscape:[]},md:{"default":[],portrait:[],landscape:[]},lg:{"default":[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t["default"].push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type]["default"])for(var r=0;r<e.__resizefunctions[n.type]["default"].length;r++){var t=e.__resizefunctions[n.type]["default"][r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()});

$(document).ready(function() {
	
	$(document.body).on("fecss.default",null,{},function(o){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(o){console.log("body trigger:fecss.init")}),$(document.body).on("fecss.window.unload",null,{},function(o,n){console.log("body trigger:fecss.window.unload: "+JSON.stringify(n))}),$(document.body).on("fecss.ajax.success",null,{},function(o){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(o,n){console.log("body trigger:fecss.keydown: "+JSON.stringify(n))}),$(document.body).on("DOMSubtreeModified",null,{},function(o,n){console.log("body trigger:DOMSubtreeModified: "+JSON.stringify(n))});
$(document.body).on("fecss.changeDOM",".fecss-change-dom",{},function(e,c){console.log(".fecss-change-dom trigger:fecss.changeDOM")}),$(document.body).on("DOMSubtreeModified",".fecss-change-dom",{},function(e,c){$(this).trigger("fecss.changeDOM")});
$(document.body).on("fecss.modal.show.after",null,{},function(e,o,t){e.preventDefault(),console.log("body trigger:fecss.modal.show.after")}),$(document.body).on("fecss.modal.hide.after",null,{},function(e,o,t){e.preventDefault(),console.log("body trigger:fecss.modal.hide.after")}),$(document.body).on("fecss.active.set",".fecss-modal .white-container",{},function(e,o,t){e.preventDefault(),console.log(".white-container trigger:fecss.active.set")}),$(document.body).on("fecss.active.unset",".fecss-modal .white-container",{},function(e,o,t){e.preventDefault(),console.log(".white-container trigger:fecss.active.unset")});
	
	$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).bind("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})});
$(document.body).on("click.fecss.modal.show",".fecss-modal-btn",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.show");var s=$(this),a=s.attr("href"),o=$(document.body).find(".fecss-modal "+a+".white-container"),c=o.closest(".fecss-modal");if(o.size()){var i=$(document.body).find(".fecss-modal .white-container.active:not(.in-bg)").eq(0);i.size()&&(i.addClass("in-bg"),i.closest(".fecss-modal").addClass("in-bg"),o.data("fecss-modal-prev",i.attr("id"))),c.addClass("active").removeClass("in-bg");var t=c.find(".black-container");t.css({top:$(document).scrollTop()+50+"px"}),o.addClass("active").removeClass("in-bg").trigger("fecss.active.set"),$(document.body).trigger("fecss.modal.show.after",[c,o])}}),$(document.body).on("click.fecss.modal.hide",".fecss-modal .white-container .hide-modal",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.hide");var s=$(this),a=s.closest(".white-container"),o=s.closest(".fecss-modal");if(a.size()){a.removeClass("active").removeClass("in-bg");var c=$("#"+a.data("fecss-modal-prev"));if(c.size()){var i=c.closest(".fecss-modal");i.hasClass("active")?i.hasClass("in-bg")&&(o.removeClass("active").removeClass("in-bg"),i.removeClass("in-bg")):(o.removeClass("active"),i.addClass("active").removeClass("in-bg")),c.removeClass("in-bg")}else o.removeClass("active");a.data("fecss-modal-prev","").trigger("fecss.active.unset"),$(document.body).trigger("fecss.modal.hide.after",[o,a])}});
$(document.ready).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
$(document.body).on("click.fecss.program-switcher.program-title",".program-switcher .program-title",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.program-switcher.program-title");var i=$(this),t=i.attr("data-program-filter");i.closest(".program-switcher").find(".program-title").removeClass("active"),i.addClass("active"),$(".b-archive-video .video-list .video-line .item").removeClass("visible"),$('.b-archive-video .video-list .video-line .item[data-program-filter="'+t+'"]').addClass("visible"),$(".b-archive-video .video-list").trigger("fecss.video-list.init")}),$(function(){var e,i,t,s={xs:1,sm:3,md:4,lg:4,padding:{xs:15,sm:15,md:15,lg:15},item_w:0,slide:0};$(document.body).on("click.fecss.video-list.video-line.item",".video-list .video-line .item",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.video-list.video-line.item");var i=$(this),t=i.attr("data-youtube-uid"),s="https://www.youtube.com/embed/"+t;$(".program-video-player").attr("src",s)}),$(document.body).on("fecss.video-list.init",".b-archive-video .video-list",{},function(o){o.preventDefault(),console.log("body trigger:fecss.video-list.init"),e=$(this),i=e.find(".video-line"),t=i.find(".item.visible");var d=e.outerWidth(!0),r=d+2*s.padding[screenJS.screenIs()];s.item_w=r/s[screenJS.screenIs()],t.each(function(e){$(this).css({width:s.item_w+"px",left:s.item_w*e+"px"}),screenJS.isXS()?$(this).find(".preview-player").attr("src","https://www.youtube.com/embed/"+$(this).attr("data-youtube-uid")):$(this).find(".preview").css({"background-image":"url(http://i1.ytimg.com/vi/"+$(this).attr("data-youtube-uid")+"/default.jpg)"})}),s.slide=0,e.trigger("fecss.video-list.sliteTo",[s.slide]),t.eq(0).trigger("click.fecss.video-list.video-line.item")}),$(document.body).on("fecss.video-list.sliteTo",".b-archive-video .video-list",{},function(e,t){e.preventDefault(),console.log("body trigger:fecss.video-list.sliteTo");var o=-s.item_w*t;i.css({transform:"translateX("+o+"px)"}).data("slide",t).data("css_pos",o)}),$(document.body).on("click.fecss.video-list.video-btn",".video-list .video-btn",{},function(e){e.preventDefault();var i=$(this),o=i.closest(".video-list"),d=o.find(".video-line"),r=(d.data("css_pos"),d.data("slide"));i.hasClass("left")?r>0&&(s.slide=r-1,o.trigger("fecss.video-list.sliteTo",[s.slide])):i.hasClass("right")&&r<t.size()-(s[screenJS.screenIs()]-0)&&(s.slide=r+1,o.trigger("fecss.video-list.sliteTo",[s.slide]))})});
$(document.body).on("click.fecss.table-switcher.switcher",".table-switcher .switcher-row .switcher a",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.table-switcher.switcher");var t=$(this),s=t.attr("data-table-filter");t.closest(".switcher-row").find(".switcher").removeClass("active"),t.parent().addClass("active"),$(".cost-table").removeClass("active"),$('.cost-table[data-table-filter="'+s+'"]').addClass("active"),$(".other-service .body").removeClass("active"),$('.other-service .body[data-table-filter="'+s+'"]').addClass("active")}),$(".table-switcher .switcher-row .switcher:nth-child(1) a").trigger("click.fecss.table-switcher.switcher");
$(function(){var e,t=$(".b-tv-slider .slider-cont .tv"),s=t.find(".screen"),i=s.find(".item");e=setInterval(function(){t.find(".tv-btn.right").trigger("click.fecss.b-tv-slider.slider-cont.tv.tv-btn")},4e3),$(document.body).on("fecss.b-tv-slider.slider-cont.tv.init",".b-tv-slider .slider-cont .tv",{},function(e){e.preventDefault(),console.log("body trigger:fecss.b-tv-slider.slider-cont.tv.init"),i.addClass("next"),i.eq(0).toggleClass("active next")}),$(document.body).on("mouseover.fecss.b-tv-slider.slider-cont.tv",".b-tv-slider .slider-cont .tv",{},function(t){t.preventDefault(),clearInterval(e)}),$(document.body).on("mouseleave.fecss.b-tv-slider.slider-cont.tv",".b-tv-slider .slider-cont .tv",{},function(s){s.preventDefault(),e=setInterval(function(){t.find(".tv-btn.right").trigger("click.fecss.b-tv-slider.slider-cont.tv.tv-btn")},4e3)}),$(document.body).on("click.fecss.b-tv-slider.slider-cont.tv.tv-btn",".b-tv-slider .slider-cont .tv .tv-btn",{},function(e){e.preventDefault();var t=$(this);if(t.hasClass("left")){var s=i.filter(".active"),l=s.prev(".item.prev");1==l.size()?(s.toggleClass("active next"),l.toggleClass("active prev")):(s.toggleClass("active"),i.removeClass("next").addClass("prev"),i.eq(-1).toggleClass("active prev"))}else if(t.hasClass("right")){var s=i.filter(".active"),n=s.next(".item.next");1==n.size()?(s.toggleClass("active prev"),n.toggleClass("active next")):(s.toggleClass("active"),i.removeClass("prev").addClass("next"),i.eq(0).toggleClass("active next"))}})});

	
	$(window).on('resize',function(event){
		$(function(){var s={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},w={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},i="window-width",d="window-height",h=$(window).outerWidth(!0),m=$(window).outerHeight(!0),a=$("html body").eq(0);h<s.xs.max&&(a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-xs"),h>s.sm.min&&h<s.sm.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-sm"),h>s.md.min&&h<s.md.max&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-lg")&&a.removeClass("window-width-lg"),i="window-width-md"),h>s.lg.min&&(a.hasClass("window-width-xs")&&a.removeClass("window-width-xs"),a.hasClass("window-width-sm")&&a.removeClass("window-width-sm"),a.hasClass("window-width-md")&&a.removeClass("window-width-md"),i="window-width-lg"),m<w.xs.max&&(a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-xs"),m>w.sm.min&&m<w.sm.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-sm"),m>w.md.min&&m<w.md.max&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-lg")&&a.removeClass("window-height-lg"),d="window-height-md"),m>w.lg.min&&(a.hasClass("window-height-xs")&&a.removeClass("window-height-xs"),a.hasClass("window-height-sm")&&a.removeClass("window-height-sm"),a.hasClass("window-height-md")&&a.removeClass("window-height-md"),d="window-height-lg"),$("html body").eq(0).addClass(i).addClass(d)});
$(function(){$(".b-archive-video .video-list").trigger("fecss.video-list.init")});
$(function(){var n=function(){var n=new ymaps.Map("contact-map-cont",{center:[52.979427,36.062993],zoom:17}),o=new ymaps.Placemark([52.979427,36.062993],{hintContent:"Москва!",balloonContent:"Столица России"},{preset:"islands#dotIcon",iconColor:"#c30"});n.geoObjects.add(o)},o=$("#contact-map-cont");o.size()&&ymaps.ready(n)});
$(function(){$(".b-tv-slider .slider-cont .tv").trigger("fecss.b-tv-slider.slider-cont.tv.init")});
$(function(){var t=function(t,a){return Math.random()},a=function(t,a){return t=parseInt(t),a=parseInt(a),Math.floor(Math.random()*(a-t+1))+t},e=function(e){for(var r=$(".page-container").outerHeight(!0),n=e.outerWidth(!0)-60,o=0;o<12;o++){var i=a(0,200),p=a(.5,2.5)+t(),s=(a(0,3),19),d=a(0,r),l=a(0,n);$("<span/>",{"class":"goldenrain","data-top":d,"data-p-speed":a(0,1.5)+t()}).css({top:d+"px",left:l+"px",transform:"rotate(-"+s+"deg) scale("+p+") translateZ("+i+"px)"}).prependTo(e)}},r=$(".parallax-goldenrain.left"),n=$(".parallax-goldenrain.right");r.empty(),n.empty();var o=($(window).outerWidth(!0)-$(".b-menu .gradiented").outerWidth(!0)-80)/2;r.css({width:o+"px"}),n.css({width:o+"px"}),screenJS.isXS()||screenJS.isSM()||(e(r),e(n))});
	}).trigger('resize');
	
	$(window).on('scroll',function(){
		$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?a<200&&o.removeClass("active"):a>200&&o.addClass("active")});
$(function(){var a=$(document).scrollTop();$(".parallax-goldenrain .goldenrain").each(function(t){var n=$(this);n.css({top:n.attr("data-top")-n.attr("data-p-speed")*a+"px"})})});
	}).trigger('scroll');
	
	$('body').on('changeClass',function(){
		$(".line-gallery").each(function(a){var s=$(this),i=$("body").eq(0),d=3;i.hasClass("window-width-xs")?d=s.attr("data-xs-vis")||1:i.hasClass("window-width-sm")?d=s.attr("data-sm-vis")||2:i.hasClass("window-width-md")?d=s.attr("data-md-vis")||3:i.hasClass("window-width-lg")&&(d=s.attr("data-lg-vis")||3);for(var t=s.find(".img-block .item"),e=d;e<t.size();e++)t.eq(e).hide();for(var e=0;d>e;e++)t.eq(e).is(":hidden")&&t.eq(e).fadeIn("fast")});
	});
	
		
	
	window.onbeforeunload = function(event) {
		//alert(event.target.URL);
		$('body').trigger('fecss.window.unload', [event]);
		return;//return false;
	}
	
	$(document.body).trigger('fecss.init');
	
});