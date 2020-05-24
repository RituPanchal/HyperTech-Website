import $ from "jquery";

$(document).ready(function () {
    $(".nav-link span").click(function(event) {
        $('.nav-link span').removeClass("active");
        $(this).addClass("active");
    });
    
    });