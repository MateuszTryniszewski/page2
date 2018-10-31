$(document).ready(function(){
    addScrolled();
})
    $(window).scroll(function() {
        addScrolled();
        
    });
    function addScrolled(){
        
        if($(window).scrollTop() > $('.navbar').outerHeight()){
           $('.navbar').addClass('change-color');
           }else {
               $('.navbar').removeClass('change-color');
           }
    };
    
 //

 //scroll effect
 $(document).ready(function() { 

	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500);
		}
	});
});
//
 window.sr = ScrollReveal();
 sr.reveal('.flex-item', {
     reset: false,
     delay: 300,
     distance: '100px',
     origin: 'right'
 });
 sr.reveal('img,i,.about-content', {
     reset: false,
     delay: 500,
     distance: '100px',
     origin: 'right'
 });
 sr.reveal('p,h1,h2,h3,.col', {
     reset: false,
     delay: 500,
     distance: '100px',
     origin: 'right'
 });
 