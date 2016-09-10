
!(function($){
	$(function(){
		$('.contacts__button').on('click', function(e) {
			console.log('Start')
	    Custombox.open({
	        target: '.popup',
	        effect: 'fadein'
	    });
	    e.preventDefault();
		});
	});
})(jQuery);