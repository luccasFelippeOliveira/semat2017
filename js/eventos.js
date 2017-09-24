var popular_eventos = function(json) {
    var container = $('#eventos');
    var template = $('.evento_container', container).clone();
    container.empty();

    json.eventos.forEach(function (x) {
	var tmp = template.clone();
	$('.evento_dia', tmp).text(x.dia);
	$('.evento_horarioInicio', tmp).text(x.horarioInicio);
	$('.evento_horarioFim', tmp).text(x.horarioFim);
	$('.evento_titulo', tmp).text(x.titulo);
	$('.evento_apresentador', tmp).text(x.apresentador);
	$('.evento_local', tmp).text(x.local);
	container.append(tmp);
    });
};

var popularEvento = function(container, template, evento) {
    container.empty();
    var tmp = template.clone();
    $('.evento_dia', tmp).text(evento.dia);
    $('.evento_horarioInicio', tmp).text(evento.horarioInicio);
    $('.evento_horarioFim', tmp).text(evento.horarioFim);
    $('.evento_titulo', tmp).text(evento.titulo);
    $('.evento_apresentador', tmp).text(evento.apresentador);
    $('.evento_local', tmp).text(evento.local);
    container.append();
};

var popularEventoTest = function(container, template) {
    container.empty();
    var tmp = template.clone();
    $('.evento_dia', tmp).text('12/12/1209');
    $('.evento_horarioInicio', tmp).text('19:00');
    $('.evento_horarioFim', tmp).text('20:00');
    $('.evento_titulo', tmp).text('Gas the kikes');
    $('.evento_apresentador', tmp).text('Mengele');
    $('.evento_local', tmp).text('Aushwitz');
    container.append();
};

var getDates = function(json) {
    var dates = [];
    json.eventos.forEach(function(x){
	dates.push(new Date(x.dia));
    });
    return dates;
};

$(
    function() {
	var dates = []; // Array vazia
	var container = $('#eventos');	
	var template = $('.evento_container', container).clone();
	var eventTypes = [];
	var events = [];
	var obj;
	
	container.empty();
	popularEventoTest(container,template);
	
	$.getJSON("json/eventos.json", function(json) {
	    json.tipoEvento.forEach(function (tipo){
		eventTypes.push(tipo);
	    });
	    json.eventos.forEach(function (evento) {
		events.push(evento);
	    });

	    //popularEvento(container, template, events[0]);
	    popularEventoTest(container, template);
	});
    }
);
