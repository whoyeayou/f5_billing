$(function() {

    $("#f5_billing_card-1").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#f5_billing_card-2").removeClass("active");
        $("#f5_billing_card-3").removeClass("active");
    });

    $("#f5_billing_card-2").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#f5_billing_card-1").removeClass("active");
        $("#f5_billing_card-3").removeClass("active");
    });

    $("#f5_billing_card-3").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#f5_billing_card-1").removeClass("active");
        $("#f5_billing_card-2").removeClass("active");
    });

});