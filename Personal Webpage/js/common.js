
/* hamburger menu*/
$(document).ready(function() {
	$(".main_menu_btn").click(function() {
	$(".main_btn ul").slideToggle();
	});
	});


/* carousel*/	
	
$(document).ready(function() { 

 

var slides = $(".slider .slides").children(".slide"); 
var width = $(".slider .slides").width(); 
var i = slides.length; 
var offset = i * width; 
var cheki = i-1;

$(".slider .slides").css('width',offset); 

for (j=0; j < slides.length; j++) {

if (j==0) {

$(".slider .navigation").append("<div class='dot active'></div>");

}

else {

$(".slider .navigation").append("<div class='dot'></div>");

}

}

var dots = $(".slider .navigation").children(".dot");
offset = 0; 
i = 0; 

 

$('.slider .navigation .dot').click(function(){

$(".slider .navigation .active").removeClass("active");                                 

$(this).addClass("active");

i = $(this).index();

offset = i * width;

$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 

});


$("body .slider .next").click(function(){   

if (offset < width * cheki) {  

offset += width; 

$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 

$(".slider .navigation .active").removeClass("active");   

$(dots[++i]).addClass("active");

}

});

$("body .slider .prev").click(function(){    

if (offset > 0) { 

offset -= width; 

$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 

$(".slider .navigation .active").removeClass("active");   

$(dots[--i]).addClass("active");

}

});

});