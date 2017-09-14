// Assumi-se que JQuery ja foi importado aqui.

$(document).ready(function() {

    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
    
    $("#navLogoLink").click(function() {
	$("#divAreaUtil").html("")
	navMain.collapse('hide');
    });
    
    $("#navLocalizacaoLink").click(function() {		
	$("#divAreaUtil").load("localizacao.html")
    });
});

