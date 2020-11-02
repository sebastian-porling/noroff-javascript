$(document).ready(() => {
    $("#toggle").click(() => {
        $("#toggle").effect("shake");
        $(".a1").addClass("a1-dropped");
        $(".a2").addClass("a2-dropped");
        $(".a3").addClass("a3-dropped");
        $(".a4").addClass("a4-dropped");
    });

    $("#shake").click(function() {
        $("#toggle").trigger("click");
    });

    $("#reset").click(function() {
        $(".a1").removeClass("a1-dropped");
        $(".a2").removeClass("a2-dropped");
        $(".a3").removeClass("a3-dropped");
        $(".a4").removeClass("a4-dropped");
    });
});