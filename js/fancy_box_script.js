




/*
     FILE ARCHIVED ON 11:40:44 Mar 7, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:07:06 Jun 14, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function($){
	$(document).ready(function(){
		$('a[rel="showVideo"]').click(function() {
			$.fancybox({
				'autoScale'		: false,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none',
				'title'			: this.title,
				'width'			: 450,
				'height'		: 350,
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf',
				'swf'			: {
				'wmode'			: 'transparent',
				'allowfullscreen'	: 'true'
				}
			});
		
			return false;
		});
		
		
		$("a[rel='showZoomImage']").fancybox({
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'titlePosition'	: 'inside'
		});
		
		$(".dg1").fancybox({
	     
			'autoScale'     	: true,
			'transitionIn'		: 'elastic',
			'transitionOut'		: 'elastic'
		});
	})
})(jQuery);