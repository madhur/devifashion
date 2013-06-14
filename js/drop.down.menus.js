




/*
     FILE ARCHIVED ON 10:55:41 Mar 7, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:07:10 Jun 14, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function($){
	$.fn.dropDownMenus=function(w){
		w=parseInt(w);
		$(this).hover(
			function(){
				$(this).addClass('on');
				elementOffset = $(this).offset();
				elementLeft=parseInt(elementOffset.left);
				screenWidth=$(document).width();
				
				if((elementLeft+w*2)>screenWidth){
					$('ul:first',this).css('right',0)
					$('ul ul',this).css({'left':-w,'top':0})
				}
				
				else {
					
					$('ul ul',this).css({'left':w+'px','top':0})
					
				}
				
				$('ul',this).css('width',w)
				$('ul:first', this).fadeIn('slow')
				$('ul:first a', this).hover(
					function(){$(this).addClass('on')},
					function(){$(this).removeClass('on')}
				)
				
			},
			
			function(){
				$(this).removeClass('on');
				$('ul:first', this).hide()
				$(this).removeClass('over');
			}
		)
	}
})(jQuery)