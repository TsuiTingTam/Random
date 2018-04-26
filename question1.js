$(document).ready(function () {

    $(window).scroll(function () {
        
        var pageNum = $(this).scrollTop()/$(this).height()+1;
        
        if ( pageNum > 0 && pageNum < 2) {
            $('#white').text('ness');
            $('#green').text('random');
            $('#green').removeClass('random_light');

            //add !
        } else if ( pageNum > 1 && pageNum < 3) {
            $('#white').text('');
            $('#green').text('random?');
            $('#green').addClass('random_light');
            //add !
        } else if ( pageNum > 2 && pageNum < 4){
            $('#white').text('');
            $('#green').text('random!');
            $('#green').addClass('random_light');
            //set back to random?
        }
        
    });

});