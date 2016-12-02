$(document).ready(function () {

    $('.menu-icon').click(function () {
        if ($('#navigator').css("left") == "-250px") {
            $('#navigator').animate({left: '0px'}, 350);
            $('.menu-icon').animate({left: '250px'}, 350);
            $('.menu-text').animate({left: '285px'}, 350).empty().text("Close");
        } 
        else  {
            $('#navigator').animate({left: '-250px'}, 350); 
            $(this).animate({left: '0px'}, 350);
            $('.menu-text').animate({left: '35px'}, 350).empty().text("Month");

        } 
	});
    $('.menu-icon').click(function () {
	            $(this).toggleClass("on"); });
});