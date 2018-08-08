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
    }
    
    
