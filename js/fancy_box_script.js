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