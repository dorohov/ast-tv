$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("trident")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).bind("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})});
$(document.body).on("click.fecss.modal.show",".fecss-modal-btn",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.show");var s=$(this),a=s.attr("href"),o=$(document.body).find(".fecss-modal "+a+".white-container"),c=o.closest(".fecss-modal");if(o.size()){var i=$(document.body).find(".fecss-modal .white-container.active:not(.in-bg)").eq(0);i.size()&&(i.addClass("in-bg"),i.closest(".fecss-modal").addClass("in-bg"),o.data("fecss-modal-prev",i.attr("id"))),c.addClass("active").removeClass("in-bg");var t=c.find(".black-container");t.css({top:$(document).scrollTop()+50+"px"}),o.addClass("active").removeClass("in-bg").trigger("fecss.active.set"),$(document.body).trigger("fecss.modal.show.after",[c,o])}}),$(document.body).on("click.fecss.modal.hide",".fecss-modal .white-container .hide-modal",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.modal.hide");var s=$(this),a=s.closest(".white-container"),o=s.closest(".fecss-modal");if(a.size()){a.removeClass("active").removeClass("in-bg");var c=$("#"+a.data("fecss-modal-prev"));if(c.size()){var i=c.closest(".fecss-modal");i.hasClass("active")?i.hasClass("in-bg")&&(o.removeClass("active").removeClass("in-bg"),i.removeClass("in-bg")):(o.removeClass("active"),i.addClass("active").removeClass("in-bg")),c.removeClass("in-bg")}else o.removeClass("active");a.data("fecss-modal-prev","").trigger("fecss.active.unset"),$(document.body).trigger("fecss.modal.hide.after",[o,a])}});
$(document.ready).on("click.fecss.go-to-top",".go-to-top",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},777)});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(t){t.preventDefault(),console.log("body trigger:click.fecss.scrollto");var o=$(this),l=$(o.attr("href")).eq(0),e=parseInt(o.attr("data-scrollto-diff"))||0,r=parseInt(o.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:l.offset().top+e},r)});
$(document.body).on("click.fecss.program-switcher.program-title",".program-switcher .program-title",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.program-switcher.program-title");var i=$(this),t=i.attr("data-program-filter");i.closest(".program-switcher").find(".program-title").removeClass("active"),i.addClass("active"),$(".b-archive-video .video-list .video-line .item").removeClass("visible"),$('.b-archive-video .video-list .video-line .item[data-program-filter="'+t+'"]').addClass("visible"),$(".b-archive-video .video-list").trigger("fecss.video-list.init")}),$(function(){var e,i,t,s={xs:1,sm:3,md:4,lg:4,padding:{xs:15,sm:15,md:15,lg:15},item_w:0,slide:0};$(document.body).on("click.fecss.video-list.video-line.item",".video-list .video-line .item",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.video-list.video-line.item");var i=$(this),t=i.attr("data-youtube-uid"),s="https://www.youtube.com/embed/"+t;$(".program-video-player").attr("src",s)}),$(document.body).on("fecss.video-list.init",".b-archive-video .video-list",{},function(o){o.preventDefault(),console.log("body trigger:fecss.video-list.init"),e=$(this),i=e.find(".video-line"),t=i.find(".item.visible");var d=e.outerWidth(!0),r=d+2*s.padding[screenJS.screenIs()];s.item_w=r/s[screenJS.screenIs()],t.each(function(e){$(this).css({width:s.item_w+"px",left:s.item_w*e+"px"}),screenJS.isXS()?$(this).find(".preview-player").attr("src","https://www.youtube.com/embed/"+$(this).attr("data-youtube-uid")):$(this).find(".preview").css({"background-image":"url(http://i1.ytimg.com/vi/"+$(this).attr("data-youtube-uid")+"/default.jpg)"})}),s.slide=0,e.trigger("fecss.video-list.sliteTo",[s.slide]),t.eq(0).trigger("click.fecss.video-list.video-line.item")}),$(document.body).on("fecss.video-list.sliteTo",".b-archive-video .video-list",{},function(e,t){e.preventDefault(),console.log("body trigger:fecss.video-list.sliteTo");var o=-s.item_w*t;i.css({transform:"translateX("+o+"px)"}).data("slide",t).data("css_pos",o)}),$(document.body).on("click.fecss.video-list.video-btn",".video-list .video-btn",{},function(e){e.preventDefault();var i=$(this),o=i.closest(".video-list"),d=o.find(".video-line"),r=(d.data("css_pos"),d.data("slide"));i.hasClass("left")?r>0&&(s.slide=r-1,o.trigger("fecss.video-list.sliteTo",[s.slide])):i.hasClass("right")&&r<t.size()-(s[screenJS.screenIs()]-0)&&(s.slide=r+1,o.trigger("fecss.video-list.sliteTo",[s.slide]))})});
$(document.body).on("click.fecss.table-switcher.switcher",".table-switcher .switcher-row .switcher a",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.table-switcher.switcher");var t=$(this),s=t.attr("data-table-filter");t.closest(".switcher-row").find(".switcher").removeClass("active"),t.parent().addClass("active"),$(".cost-table").removeClass("active"),$('.cost-table[data-table-filter="'+s+'"]').addClass("active"),$(".other-service .body").removeClass("active"),$('.other-service .body[data-table-filter="'+s+'"]').addClass("active")}),$(".table-switcher .switcher-row .switcher:nth-child(1) a").trigger("click.fecss.table-switcher.switcher");
$(function(){var e,t=$(".b-tv-slider .slider-cont .tv"),s=t.find(".screen"),i=s.find(".item");e=setInterval(function(){t.find(".tv-btn.right").trigger("click.fecss.b-tv-slider.slider-cont.tv.tv-btn")},4e3),$(document.body).on("fecss.b-tv-slider.slider-cont.tv.init",".b-tv-slider .slider-cont .tv",{},function(e){e.preventDefault(),console.log("body trigger:fecss.b-tv-slider.slider-cont.tv.init"),i.addClass("next"),i.eq(0).toggleClass("active next")}),$(document.body).on("mouseover.fecss.b-tv-slider.slider-cont.tv",".b-tv-slider .slider-cont .tv",{},function(t){t.preventDefault(),clearInterval(e)}),$(document.body).on("mouseleave.fecss.b-tv-slider.slider-cont.tv",".b-tv-slider .slider-cont .tv",{},function(s){s.preventDefault(),e=setInterval(function(){t.find(".tv-btn.right").trigger("click.fecss.b-tv-slider.slider-cont.tv.tv-btn")},4e3)}),$(document.body).on("click.fecss.b-tv-slider.slider-cont.tv.tv-btn",".b-tv-slider .slider-cont .tv .tv-btn",{},function(e){e.preventDefault();var t=$(this);if(t.hasClass("left")){var s=i.filter(".active"),l=s.prev(".item.prev");1==l.size()?(s.toggleClass("active next"),l.toggleClass("active prev")):(s.toggleClass("active"),i.removeClass("next").addClass("prev"),i.eq(-1).toggleClass("active prev"))}else if(t.hasClass("right")){var s=i.filter(".active"),n=s.next(".item.next");1==n.size()?(s.toggleClass("active prev"),n.toggleClass("active next")):(s.toggleClass("active"),i.removeClass("prev").addClass("next"),i.eq(0).toggleClass("active next"))}})});
