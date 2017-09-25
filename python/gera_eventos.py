import sys
import json
import os
from datetime import datetime

class Evento:
    def __init__(self):
        self.tipo = None
        self.data = None
        self.horarioInicio = None
        self.horarioFim = None
        self.titulo = None
        self.apresentador = None
        self.local = None

    def __repr__(self):
        return "{ " + str(self.tipo) + \
            str(self.data) + " ," + \
            str(self.horarioInicio) + " ," + \
            str(self.horarioFim) + " ," + \
            str(self.titulo) + " ," + \
            str(self.apresentador) + " ," + \
            str(self.local) + "}"

    @classmethod
    def fromjson(cls, jsonObj):
        e = Evento()
        e.tipo = int(jsonObj["tipo"])
        e.data  = datetime.strptime(jsonObj["dia"], "%Y-%m-%d")
        e.horarioInicio = jsonObj["horarioInicio"]
        e.horarioFim = jsonObj["horarioFim"]
        e.titulo = jsonObj["titulo"]
        e.apresentador = jsonObj["apresentador"]
        e.local = jsonObj["local"]
        return e

# TODO: init this script with the 'eventos.json' filepath
if len(sys.argv) != 2:
    print "Uso errado -> script json_filepath"
    quit()
    
new_path = sys.argv[1]
eventos_file = open(new_path)
try:
    eventos_json = json.load(eventos_file)
except:
    print "Nao pode gerar eventos"
eventos_file.close()

# The parsed object must have both tipoEvento and eventosArray.

jsonTiposDeEventos = eventos_json["tipoEvento"]
jsonEventos        = eventos_json["eventos"]

eventos = []
for jsonEvento in jsonEventos:
    eventos.append(Evento.fromjson(jsonEvento))


# Sort through day
eventos = sorted(eventos, key = lambda evento: evento.data)

# Fill the template.
template = '''
         <div class="card">
         <h5  class="card-header">{0.titulo}</h5>
         <div class="card-block">
         Horário: {0.horarioInicio} às {0.horarioFim} <br>
         Apresentador(a): {0.apresentador}
         Local: {0.local}
         </div>
         </div>
'''

diaTemplate = '''<div class="card"> <h3>{0.data}</h3>'''

print "<div id=eventos_container class=\"card\">"
dia = eventos[0].data
diaTemplate =  '''<div class="card" >'''
print diaTemplate
for ev in eventos:
    if ev.data == dia:
        print template.format(ev)
    else:
        print "</div>"
        print diaTemplate
        print template.format(ev)
print "</div>"
print "</div>"
