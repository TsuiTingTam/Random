$(document).ready(function () {

    $(window).scroll(function () {
        
        var pageNum = $(this).scrollTop()/$(this).height()+1;
        
        if (pageNum > 4) {
            document.getElementById("menu").src = "Images/Menu3_white.png";
            document.getElementById("clear").src = "Images/Clear3_white.png";
            //icon turn white
            

        } else {
            document.getElementById("menu").src="Images/Menu3.png";
            document.getElementById("clear").src = "Images/Clear3.png";
            //black icon
        } 
        console.log(pageNum);
    });

});