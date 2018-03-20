( function ( document, $, undefined ) {
	$(document).on('click', function(e){
		if( 
			$(e.target).closest('.genesis-responsive-menu').length == 0 &&
			$('.menu-toggle').attr('aria-expanded') == 'true' && 
			$(e.target).closest('.menu-toggle').length == 0
		){
			$('.menu-toggle').attr('aria-expanded', false);
			$('.menu-toggle').toggleClass('activated');
			$('.menu-toggle').attr('aria-pressed', false);
			$(".genesis-responsive-menu").removeAttr("style");
		}
	});
})( document, jQuery );
