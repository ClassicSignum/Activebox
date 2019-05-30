$(document).ready(function(){



$(function(){

    if($(window).width()>360){
    var width=650;
var animationSpeed=1000;
var pause = 3000;
var currentSlide=1;
var count=currentSlide+1;

var $mycontainer=$('.mycontainer');
var $slides=$mycontainer.find('.slides');
var $slide=$mycontainer.find('.slide');

$( "ul.nav li:nth-child(1)" ).css( "color", "#fff" );

setInterval(function(){
    
    $slides.animate({'margin-left':'-='+width},animationSpeed,function(){

        // $( "ul.nav li:nth-child("+count+")" ).css( "color", "#fff" );
        currentSlide++;
        $( "ul.nav li ").css( "color", "#6c7279" );
        $( "ul.nav li:nth-child("+currentSlide+")" ).css( "color", "#fff" );
    
        if(currentSlide == $slide.length)
        {
            currentSlide=1;
            $( "ul.nav li ").css( "color", "#6c7279" );
            $( "ul.nav li:nth-child(1)" ).css( "color", "#fff" );
            $slides.css('margin-left',0);
        }
    });
},pause);

    }

    else{

        var width=330;
var animationSpeed=1000;
var pause = 3000;
var currentSlide=1;
var count=currentSlide+1;

var $mycontainer=$('.mycontainer');
var $slides=$mycontainer.find('.slides');
var $slide=$mycontainer.find('.slide');

$( "ul.nav li:nth-child(1)" ).css( "color", "#fff" );

setInterval(function(){
    
    $slides.animate({'margin-left':'-='+width},animationSpeed,function(){

        // $( "ul.nav li:nth-child("+count+")" ).css( "color", "#fff" );
        currentSlide++;
        $( "ul.nav li ").css( "color", "#6c7279" );
        $( "ul.nav li:nth-child("+currentSlide+")" ).css( "color", "#fff" );
    
        if(currentSlide == $slide.length)
        {
            currentSlide=1;
            $( "ul.nav li ").css( "color", "#6c7279" );
            $( "ul.nav li:nth-child(1)" ).css( "color", "#fff" );
            $slides.css('margin-left',0);
        }
    });
},pause);

    }



});









})