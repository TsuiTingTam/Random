$(document).ready(function(){
    $(window).scroll(function(){
        
        var pageNum =$(this).scrollTop()/$(this).height()+1;
        
        console.log(pageNum);
        
        if(pageNum > 1 && pageNum < 4) {
            $('#randomdiv').addClass('random_light');
            $('#randomdiv').removeClass('random_dark');
            $('#canvas').addClass('canvas_fade');
            $('#canvas').removeClass('canvas_normal');
        }
        
        else if(pageNum > 3){
            $('#randomdiv').removeClass('random_light');
            $('#randomdiv').addClass('random_dark');
            $('#canvas').addClass('canvas_fade');
            $('#canvas').removeClass('canvas_normal');
            
        }
        else if(pageNum < 1) {
            $('#canvas').removeClass('canvas_fade');
            $('#canvas').addClass('canvas_normal');
             $('#randomdiv').addClass('random_dark');
            $('#randomdiv').removeClass('random_light');
        }
    })    
    
})




