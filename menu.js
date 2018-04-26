$(document).ready(function () {

    $(window).scroll(function () {
        
        var pageNum = $(this).scrollTop()/$(this).height()+1;
        
        if (pageNum < 2) {
            document.getElementById("menu").src = "Images/Menu3_white.png";

        } else {
            document.getElementById("menu").src=" Images/Menu3.png";
            //add !
        } 
        console.log(pageNum);
    });

});