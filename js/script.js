new WOW().init();

jQuery('a[href^="#"]').on('click',function(){

var header = jQuery('.header').innerHeight();
var id= jQuery(this).attr('href');
var position = 0;
if ( id != '#'){
    position = jQuery(id).offset().top - header;
}
jQuery('html,body').animate({
scrollTop:position
} ,
300);
});
