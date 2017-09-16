// Assumi-se que JQuery ja foi importado aqui.

$(document).ready(function() {

    $("#divAreaUtil").load("apresentacao.html");

    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });

    $("#navLogoLink").click(function() {
        $("#divAreaUtil").load("apresentacao.html")
        navMain.collapse('hide');
    });

    $("#navLocalizacaoLink").click(function() {
        $("#divAreaUtil").load("localizacao.html")
    });
});