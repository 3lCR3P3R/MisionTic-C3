$(window).scroll(function () {

    if ($("#menu").offset().top > 90) {
        $("#menu").addClass("bg-edit");

    } else {
        $("#menu").removeClass("bg-edit");
    }

});