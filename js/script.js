
$("document").ready(function($){

				var nav = $('.r2');

				$(window).scroll(function () {
					if ($(this).scrollTop() > 180) {
						nav.addClass("f-nav");
					} else {
						nav.removeClass("f-nav");
					}
    });
	
	//creating tool tip on gallery images
		$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );
  
 //creating tooltips for images
   $( function() {
    $( document ).tooltip({
	  show: { effect: "blind", duration: 800 },
      items: "img",                                             
      content: function() {
        var element = $( this );
        if ( element.is( "img" ) ) {
          return element.attr( "alt" );
        }
      }
    });
  } );
  //hower fuction for link images home page
  $('.image-frame').hover(function(){
		$('.image-caption',this).slideToggle('slow');
	});
	//text animation in inforamtion page
	$(window).scroll(function () {
					if ($(this).scrollTop() > 180) {
					function blink_text() {
			$("#titles").fadeOut(1000).addClass("c4");
			$("#titles").fadeIn(1000).addClass("c5");
		}
		setInterval(blink_text, 2000);
		$( function() {				

		$("#head").delay(2000).animate({fontSize:"50px"},5000,function(){
		
		$("#p1").delay(2000).animate({fontSize:"20px"},2000, function(){
		
		$("#p2").delay(2000).animate({fontSize:"20px"},2000)})
		
		}).addClass( "newClass", 1000);
		
		$("#l1").delay(15000).animate({fontSize:"25px"},2000,function(){
		
		$("#l2").delay(1000).animate({fontSize:"25px"},2000,function(){
		$("#l3").delay(1000).animate({fontSize:"25px"},2000,function(){
		$("#l4").delay(1000).animate({fontSize:"25px"},2000,function(){
		$("#l5").delay(1000).animate({fontSize:"25px"},2000,function(){
		$("#l6").delay(1000).animate({fontSize:"25px"},2000).addClass("c6", 1000)
		}).addClass("c5", 1000)
		}).addClass("c4", 1000)
		}).addClass("c3", 1000)
		}).addClass("c2", 1000)
		
		}).addClass( "c1", 1000);
		
		
		
	 });
					} else {
						
					}
    });





	

  //this is end 
});
