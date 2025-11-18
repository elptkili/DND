const ABILS = ["FUE","DES","CON","INT","SAB","CAR"];

const SKILLS = [
  { name:"Atletismo", stat:"FUE" },
  { name:"Acrobacias", stat:"DES" },
  { name:"Juego de manos", stat:"DES" },
  { name:"Sigilo", stat:"DES" },
  { name:"Resistencia física", stat:"CON" },
  { name:"Investigación", stat:"INT" },
  { name:"Tecnología", stat:"INT" },
  { name:"Análisis", stat:"INT" },
  { name:"Ingeniería", stat:"INT" },
  { name:"Percepción", stat:"SAB" },
  { name:"Medicina", stat:"SAB" },
  { name:"Perspicacia", stat:"SAB" },
  { name:"Supervivencia", stat:"SAB" },
  { name:"Intimidación", stat:"CAR" },
  { name:"Persuasión", stat:"CAR" },
  { name:"Engaño", stat:"CAR" },
  { name:"Interpretación", stat:"CAR" }
];

const RACES = [
  { id:'elfo', name:'Elfo biónico', icon:'🧝‍♂️', desc:'Reflejos y óptica mejorada.', bonuses:{FUE:0,DES:2,CON:0,INT:0,SAB:0,CAR:0}, speed:30 },
  { id:'humano', name:'Humano biónico', icon:'👤', desc:'Versátiles y adaptables.', bonuses:{FUE:1,DES:1,CON:1,INT:1,SAB:1,CAR:1}, speed:30 },
  { id:'enano', name:'Enano biónico', icon:'🧔', desc:'Tenaces y resistentes.', bonuses:{FUE:0,DES:0,CON:2,INT:0,SAB:0,CAR:0}, speed:25 },
  { id:'mediano', name:'Mediano biónico', icon:'🧒', desc:'Ágiles y sigilosos.', bonuses:{FUE:0,DES:2,CON:0,INT:0,SAB:0,CAR:0}, speed:25 },
  { id:'gnomo', name:'Gnomo biónico', icon:'🤖', desc:'Analíticos y curiosos.', bonuses:{FUE:0,DES:0,CON:0,INT:2,SAB:0,CAR:0}, speed:25 }
];

const CLASSES = [
  { id:'analista', name:'Analista', icon:'🧠', desc:'Estratega y calculador.' },
  { id:'centinela', name:'Centinela', icon:'🛡️', desc:'Defensa y apoyo.' },
  { id:'explorador', name:'Explorador', icon:'🏹', desc:'Rastreador y sigiloso.' },
  { id:'francotirador', name:'Francotirador', icon:'🎯', desc:'Precisión letal.' },
  { id:'hacker', name:'Hacker', icon:'💻', desc:'Infiltración digital.' },
  { id:'ingeniero', name:'Ingeniero', icon:'⚙️', desc:'Constructor y técnico.' },
  { id:'medico', name:'Médico de campo', icon:'💉', desc:'Curación biotecnológica.' },
  { id:'operador', name:'Operador', icon:'🕶️', desc:'Infiltración táctica.' },
  { id:'piloto', name:'Piloto', icon:'🚀', desc:'Control total de vehículos.' },
  { id:'vanguardista', name:'Vanguardista', icon:'💪', desc:'Fuerza biomecánica.' }
];

const RACE_TRAITS = {
  'elfo': [
    'Visión en la oscuridad: Estás acostumbrado a la luz crepuscular de los bosques y al cielo nocturno. Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante y, en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.',
    'Linaje feérico: Tienes ventaja en las tiradas de salvación para no quedar hechizado y no puedes quedarte dormido por ningún efecto mágico.',
    'Trance: Los elfos no necesitan dormir, en lugar de ello meditan profundamente y permanecen semi inconscientes durante cuatro horas al día (conocido como «trance»). Descansar de este modo te otorga los mismos beneficios que dormir ocho horas a un humano.',
    'Sensores de Análisis Cognitivo: Puedes activar tus sensores para analizar expresiones, tono y microgestos. Tienes ventaja en tiradas de Perspicacia (Sabiduría) para detectar mentiras o intenciones ocultas.'
  ],
  'humano': [
    'Alineamiento: Los humanos no tienen tendencia a ningún alineamiento en particular. Entre ellos puede encontrarse tanto lo mejor como lo peor.',
    'Idiomas: Puedes hablar, leer y escribir común y un idioma adicional de tu elección.',
    'Implante de Sincronización Adaptativa: Tus sistemas biónicos ajustan tus reflejos y capacidad mental al entorno. Una vez por descanso largo, puedes añadir un +2 a cualquier tirada de habilidad después de ver el resultado del dado.'
  ],
  'enano': [
    'Visión en la oscuridad: Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante, y en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.',
    'Velocidad enana: Tu velocidad no se reduce por llevar armadura pesada.',
    'Fortaleza enana: Tienes ventaja en las tiradas de salvación contra venenos y eres resistente al daño por veneno.',
    'Sensores Sísmicos (Biónico): Tus implantes detectan vibraciones a través del suelo. Puedes sentir el movimiento de criaturas o mecanismos grandes en un radio de 30 pies, incluso a través de paredes delgadas o terreno sólido.'

  ],
  'mediano': [
    'Agilidad de mediano: Puedes moverte por el espacio de cualquier criatura que tenga un tamaño mayor al tuyo.',
    'Valiente: Tienes ventaja en las tiradas de salvación para no asustarte.',
    'Afortunado: Cuando saques un 1 en 1d20 en una tirada de ataque, prueba de habilidad o tirada de salvación, puedes volver a tirar el dado, pero debes quedarte con el nuevo resultado.',
    'Implante de Adaptación Táctica (Biónico): Tu sistema neural analiza el entorno en tiempo real. Una vez por descanso corto, puedes repetir una tirada fallida de Sigilo o Percepción (el segundo resultado cuenta).'
  ],
  'gnomo': [
    'Astucia de gnomo: Tienes ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia.',
    'Visión en la oscuridad: Al estar acostumbrado a la vida subterránea, puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante, y en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.',
    'Traductor Neural (Biónico): Tu implante cerebral decodifica patrones de lenguaje y comunicación. Una vez por descanso corto, puedes comprender (aunque no hablar) cualquier idioma durante 10 minutos.'
  ]
};

const CLASS_TRAITS = {
  'analista': [
    'Evaluación táctica: Puedes usar una acción adicional para analizar una situación o enemigo. Un aliado a menos de 60 pies gana ventaja en su próxima tirada de ataque o habilidad antes de tu siguiente turno.',
    'Análisis de riesgo: Tienes ventaja en tiradas de Investigación o Percepción para detectar emboscadas, trampas o movimientos hostiles.',
    'Predicción de movimientos: Una vez por descanso corto, puedes anticipar la acción de un enemigo. Ese enemigo tiene desventaja en su próxima tirada de ataque o salvación.',
    'Mapa mental: Siempre sabes la ruta más eficiente hacia un punto que hayas visitado o visualizado antes. No puedes perderte por causas naturales.',
    'Red de comando: Puedes conectar a tu grupo mediante tu enlace táctico durante 2 turnos. Mientras dure, todos los aliados a 30 pies ganan +1 a las tiradas de ataque y salvación mientras mantengas concentración.',
    'Evaluación avanzada: Puedes analizar a una criatura o máquina durante un turno completo para conocer una de sus debilidades o vulnerabilidades específicas (según determine el DM).'
  ],
  'centinela': [
    'Protocolo Defensivo: Puedes usar una acción adicional para proteger a un aliado a 5 pies, otorgándole +2 a la CA hasta el inicio de tu siguiente turno.',
    'Resistencia Entrenada: Tienes ventaja en tiradas de salvación contra ser empujado o derribado.',
    'Muro Humano: Si estás a menos de 5 pies de un aliado, cualquier ataque dirigido hacia él puede redirigirse hacia ti (debes decidirlo antes de conocer el resultado del ataque).',
    'Escudo Cinético: Una vez por descanso corto, puedes activar tu escudo interno, reduciendo en 1d8 el daño recibido de un ataque.',
    'Zona Segura: Durante 2 turnos, todos los aliados a 10 pies de ti ganan +1 a la CA y tiradas de salvación, siempre que permanezcan dentro del área.',
    'Inquebrantable: Cuando tus puntos de vida bajen a 0, puedes realizar una tirada de Constitución (DC 10). Si la superas, quedas a 1 punto de vida en lugar de caer inconsciente (una vez por descanso largo).'
  ],
  'explorador': [
    'Instinto de Cazador: Puedes marcar a una criatura como tu objetivo con una acción adicional. Obtienes +1 al daño contra ella y puedes rastrearla incluso si rompe la línea de visión. Solo puedes tener un objetivo marcado a la vez.',
    'Movimiento Silencioso: No dejas rastro visible y tienes ventaja en Sigilo si te mueves a velocidad normal.',
    'Adaptación Ambiental: Ignoras penalizaciones por calor, frío o terreno difícil natural. Además, puedes moverte a velocidad completa mientras te escondes o te agachas.',
    'Ataque Coordinado: Si un aliado ataca a un enemigo que está dentro de tu línea de visión, puedes usar tu reacción para realizar un ataque adicional a distancia contra ese mismo enemigo (una vez por combate).',
    'Zona Controlada: Durante 2 turnos, puedes designar un área de 20 pies a tu alrededor como terreno vigilado. Cualquier enemigo que entre o salga de esa zona provoca un ataque de oportunidad por tu parte.',
    'Instinto de Emboscada: Si atacas a una criatura que no te ha detectado, infliges +2 de daño y tienes ventaja en esa tirada de ataque.'
  ],
  'francotirador': [
    'Disparo Certero: Si no te has movido en tu turno, obtienes +2 al daño de tu primer ataque a distancia.',
    'Pulso Firme: Puedes repetir una tirada fallida de ataque a distancia una vez por combate.',
    'Ojo Analítico: Puedes usar una acción adicional para marcar a un enemigo que esté dentro de tu línea de visión. Tienes ventaja en tus ataques contra él durante 2 turnos.',
    'Cambio de Posición: Después de realizar un ataque a distancia, puedes moverte hasta 10 pies sin provocar ataques de oportunidad (simulando un reposicionamiento rápido).',
    'Camuflaje Óptico: Activando tu sistema de invisibilidad parcial, puedes volverte prácticamente indetectable durante 2 turnos, siempre que no ataques ni te muevas más de 10 pies.',
    'Disparo Letal: Una vez por descanso corto, puedes preparar un disparo calculado. Si impacta, inflige el doble de daño base.'
  ],
  'hacker': [
    'Hackeo Básico: Puedes usar una acción para acceder o alterar un sistema electrónico simple (cerraduras, cámaras, sensores o paneles). Si lo consigues, puedes abrir, apagar o alterar su función durante 1 turno.',
    'Interferencia Digital: Puedes emitir una señal de bloqueo que anula las comunicaciones enemigas o drones menores en un radio de 20 pies durante 1 turno.',
    'Sobrecarga Eléctrica: Una vez por descanso corto, puedes provocar una sobrecarga en un dispositivo, dron o exotraje enemigo, causando 1d8 de daño eléctrico o aturdiéndolo durante 1 turno (salvación de Constitución CD 12).',
    'Infiltración Avanzada: Puedes desactivar trampas o sistemas electrónicos con una tirada de Inteligencia (CD 12). Si fallas, el sistema no se activa automáticamente.',
    'Dron de Ataque Remoto: Tu dron de sabotaje puede volar hasta 40 pies y atacar un objetivo con una pequeña carga explosiva. Inflige 1d10 de daño eléctrico o de fuego. Puede hacerlo una vez por turno durante 3 turnos antes de necesitar recarga (una vez por descanso corto).',
    'Reprogramación Hostil: Puedes intentar hackear el sistema nervioso o digital de un enemigo dentro de 30 pies. Realiza una tirada de Inteligencia (CD 13). Si tiene éxito, el objetivo queda aturdido durante 1 turno al recibir una sobrecarga sensorial. Puedes usar esta habilidad una vez por descanso corto.'
  ],
  'ingeniero': [
    'Montaje Rápido: Puedes usar una acción para construir o reparar un objeto sencillo (trampa, escudo portátil, luz, cerradura, etc.) en menos de un minuto, siempre que tengas materiales disponibles.',
    'Sistema de Reparación: Puedes reparar maquinaria, armaduras o drones aliados, restaurando 1d6 puntos de vida por descanso corto.',
    'Torreta Modular: Puedes desplegar una torreta automática en un punto a 10 pies de ti. La torreta tiene CA 12 y 15 puntos de vida. Realiza un ataque por turno (1d8 + tu modificador de Inteligencia) a un enemigo dentro de 30 pies. Permanece activa durante 3 turnos o hasta ser destruida. Puedes usarla una vez por descanso corto.',
    'Mejora Biónica: Tu conexión neural con tus creaciones te permite controlarlas mentalmente. Puedes redirigir la torreta o el dron sin usar acción, una vez por turno.',
    'Campo de Energía Portátil: Puedes desplegar un escudo de energía semicircular que cubre un área de 10 pies a tu alrededor. Todos los aliados dentro obtienen +2 CA durante 2 turnos.',
    'Reparación de Emergencia: Cuando un aliado o dron cae a 0 puntos de vida, puedes usar tu reacción para inyectarle energía biónica, devolviéndole 1d6 puntos de vida. (Una vez por descanso corto.)'
  ],
  'medico': [
    'Primeros Auxilios Avanzados: Puedes usar una acción para curar a una criatura a 5 pies. Restaura 1d8 puntos de vida. Puedes hacerlo tantas veces como tu modificador de Sabiduría por descanso largo.',
    'Diagnóstico Neural: Como acción gratuita, puedes analizar el estado vital de una criatura a la vista y saber si está envenenada, inconsciente o bajo estrés físico extremo.',
    'Inyección de Adrenalina: Puedes usar una acción adicional para otorgar a un aliado +2 a su movimiento y a las tiradas de ataque durante 2 turnos. Una vez por descanso corto.',
    'Campo Antidolor: Puedes emitir una onda de nanobots que reduce en 1d6 el daño recibido por un aliado visible durante ese turno. Una vez por turno, hasta tres veces por descanso largo.',
    'Nanoreparación de Emergencia: Una vez por descanso corto, puedes liberar un enjambre de nanobots que curan 2d8 puntos de vida a todos los aliados en un radio de 10 pies.',
    'Estimulante de Supervivencia: Cuando una criatura aliada caiga a 0 puntos de vida, puedes usar tu reacción para reanimarla con la mitad de sus puntos de vida máximos. Solo puede usarse una vez por descanso largo.'
  ],
  'operador': [
    'Desliz Silencioso: Obtienes ventaja en tiradas de Sigilo en zonas oscuras o ruidosas. Si inicias el combate sin ser detectado, tu primer ataque inflige +2 de daño adicional.',
    'Reflejos Aumentados: Puedes usar tu reacción para aumentar tu CA en +2 frente a un ataque que conozcas antes de que el DM anuncie si impacta. (Usable un número de veces igual a tu modificador de Destreza por descanso largo).',
    'Neutralización: Si atacas por sorpresa o desde el sigilo, puedes intentar aturdir al objetivo durante 1 turno(tirada de Constitución CD 13).',
    'Dispositivo de Señal Fantasma: Una vez por descanso corto, puedes crear una proyección térmica falsa de tu silueta en un punto a 15 pies. Los enemigos deben superar una tirada de Percepción (CD 12) o atacarán la ilusión durante 1 turno.',
    'Camuflaje Activo: Puedes activar tu sistema de camuflaje biónico, volviéndote invisible durante 2 turnos, o hasta que ataques o recibas daño. (Una vez por descanso corto).',
    'Eliminación Silenciosa: Si derrotas a un enemigo con un ataque cuerpo a cuerpo, puedes moverte inmediatamente hasta 10 pies y realizar un ataque adicional contra otro enemigo a tu alcance.'
  ],
  'piloto': [
    'Instinto Acelerado: Tus reflejos sobrehumanos te permiten reaccionar antes que nadie. Ganas +2 a la Iniciativa y puedes añadir tu modificador de Destreza al daño de un ataque con arma de fuego o de energía una vez por turno.',
    'Precisión Mecánica: Estás entrenado para calcular trayectorias y movimientos en fracciones de segundo. Puedes repetir una tirada de ataque fallida con un arma de distancia una vez por combate.',
    'Maniobra Instintiva: Una vez por descanso corto, puedes aumentar tu CA en +2 durante 1 turno al reaccionar ante un ataque.',
    'Control Remoto: Puedes controlar un dron o vehículo a distancia si estás dentro de 100 pies de él. Si el vehículo tiene armamento, puedes realizar una acción de disparo remoto usando tu modificador de Destreza.',
    'Modo de Combate Extendido: Puedes sincronizar tu cuerpo con una máquina (vehículo, exotraje o dron pesado) durante 2 turnos. Mientras dure: Ganas +1 a la CA, Tus ataques infligen +2 de daño, Y puedes usar una acción adicional cada turno para realizar una maniobra (disparo, recarga, esquiva o apoyo). Usable una vez por descanso corto.',
    'Aterrizaje Perfecto: Siempre caes de pie y no recibes daño por caídas de hasta 30 pies, gracias a los servomotores estabilizadores de tus piernas biónicas.'
  ],
  'vanguardista': [
    'Fuerza Cinética: Cuando realizas un ataque cuerpo a cuerpo, puedes añadir +2 al daño una vez por turno, aprovechando la energía acumulada en tus servomotores.',
    'Contraataque Mecánico: Cuando una criatura te impacta con un ataque cuerpo a cuerpo, puedes usar tu reacción para realizar un golpe de respuesta, infligiendo 1d6 de daño (una vez por turno).',
    'Carga Potenciada: Puedes usar una acción adicional para avanzar hasta 15 pies y realizar un ataque cuerpo a cuerpo. Si impactas, el ataque inflige 1d6 de daño adicional. (Una vez por descanso corto.)',
    'Resistencia Ampliada: Tienes ventaja en tiradas de salvación contra ser derribado o empujado, y recibes mitad de daño por caídas.',
    'Modo Berserk: Puedes sobrecargar tus implantes musculares durante 2 turnos. Mientras dure: Ganas +2 al daño cuerpo a cuerpo, +2 a la CA, Y tus ataques cuerpo a cuerpo pueden derribar enemigos si fallan una tirada de Fuerza (CD 13). Usable una vez por descanso corto. ',
    'Reforzamiento Automático: Cuando tus puntos de vida bajen a la mitad o menos, tus implantes liberan adrenalina sintética. Recuperas 1d8 puntos de vida inmediatamente (una vez por descanso largo).'
  ]
};

const state = {race:null, klass:null, name:'', assigned:{}, ac:15, speed:30, hpMax:0, weapon:'', gear:''};

const $ = s => document.querySelector(s);
const mod = s => Math.floor((s-10)/2);
const choice = a => a[Math.floor(Math.random()*a.length)];

function renderList(container, items, kind){
  container.innerHTML='';
  items.forEach(item=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<div class="icon">${item.icon}</div><div><div class="title">${item.name}</div><div class="desc">${item.desc}</div></div>`;
    card.onclick = () => {
      if (kind === 'race') {
        state.race = item;
        const traits = RACE_TRAITS[item.id] || ['—'];
        $('#raceTraits').innerHTML = traits.map(t => `• ${t}`).join('<br>');
      } 
      else if (kind === 'class') {
        state.klass = item;
        const traits = CLASS_TRAITS[item.id] || ['—'];
        $('#classTraits').innerHTML = traits.map(t => `• ${t}`).join('<br>');
      }
      updateRightPane();
    };
    container.appendChild(card);
  });
}

function updateRightPane(){
  $('#selRace').textContent=state.race?state.race.name:'—';
  $('#selClass').textContent=state.klass?state.klass.name:'—';
  $('#selDesc').textContent=state.race&&state.klass?`${state.race.desc} | ${state.klass.desc}`:'Selecciona una raza y una clase.';
  $('#speedDisplay').textContent=state.race?`${state.race.speed} pies`:'—';
}

function renderAssign(){
  const box=$('#assign');
  box.innerHTML='';
  ABILS.forEach(a=>{
    const input=document.createElement('input');
    input.type='number';input.placeholder='—';
    input.oninput=()=>state.assigned[a]=parseInt(input.value||0,10);
    const slot=document.createElement('div');
    slot.className='slot';
    slot.innerHTML=`<h3>${a}</h3>`;
    slot.appendChild(input);
    box.appendChild(slot);
  });
}

$('#btnRandName').onclick=()=>{if(state.race){state.name=choice([
    'Aelion','Mira','Kael','Thorin','Lyra','Nira','Solenn','Varik','Elara','Drax',
    'Kyra','Orren','Talia','Riven','Sarek','Zyra','Khalen','Astra','Veyla','Kaena',
    'Dorian','Seris','Nyx','Varek','Lunara','Xeran','Kira','Soren','Jyn','Rhoen',
    'Selka','Taran','Elyndra','Marek','Sia','Vesper','Kaelis','Renna','Orion','Kell',
    'Voss','Naerys','Dhalan','Rivena','Zorek','Ylena','Kasra','Orian','Thalos',
    'Lirae','Nox','Vaelis','Ryna','Kelaris','Jora','Syra','Talos','Rivka','Aelor',
    'Zai','Kess','Draven','Corin','Maela','Zylen','Ysera','Fayra','Hale','Varyn',
    'Alira','Jarek','Saera','Neris','Corva','Torrin','Reka','Zae','Marris','Serin',
    'Rova','Kaelis','Narek','Syl','Vara','Olen','Nirae','Tessra','Valen','Astrae',
    'Riven Sol']);$('#nameInput').value=state.name;}};
$('#nameInput').oninput=e=>state.name=e.target.value;
$('#acInput').oninput=e=>state.ac=parseInt(e.target.value||0,10);
$('#hpInput').oninput=e=>state.hpMax=parseInt(e.target.value||0,10);
$('#weaponInput').oninput=e=>state.weapon=e.target.value;
$('#gearInput').oninput=e=>state.gear=e.target.value;

$('#btnValidate').onclick=()=>{
  const m=[];
  if(!state.race)m.push('raza');
  if(!state.klass)m.push('clase');
  if(!state.name.trim())m.push('nombre');
  if(Object.keys(state.assigned).length<6)m.push('atributos');
  if(!state.hpMax)m.push('vida');
  $('#status').textContent=m.length?`⚠️ Falta: ${m.join(', ')}`:'✅ Personaje completo.';
  $('#status').style.color=m.length?'var(--warn)':'var(--ok)';
};

$('#tabRaces').onclick=()=>showTab('races');
$('#tabClasses').onclick=()=>showTab('classes');
function showTab(which){
  $('#tabRaces').classList.toggle('active',which==='races');
  $('#tabClasses').classList.toggle('active',which!=='races');
  $('#listRaces').style.display=which==='races'?'grid':'none';
  $('#listClasses').style.display=which!=='races'?'grid':'none';
}

renderList($('#listRaces'),RACES,'race');
renderList($('#listClasses'),CLASSES,'class');
renderAssign();

function calcSkill(skill){
  const base = (state.assigned[skill.stat]||10)+(state.race?.bonuses[skill.stat]||0);
  const total = mod(base);
  return total>=0?`+${total}`:`${total}`;
}

// imprimir pdf
$('#btnPrint').onclick=()=>{
  if(!state.race||!state.klass||!state.name.trim()){alert('Completa tu personaje antes de imprimir');return;}

  $('#p_name').textContent=state.name;
  $('#p_race').textContent=state.race.name;
  $('#p_class').textContent=state.klass.name;
  $('#p_ac').textContent=state.ac;
  $('#p_speed').textContent=`${state.race.speed} pies`;
  $('#p_hp').textContent=state.hpMax;
  $('#p_weapon').textContent=state.weapon||'—';
  $('#p_gear').textContent=state.gear||'—';

  const stats=$('#p_stats');stats.innerHTML='';
  ABILS.forEach(a=>{
    const val=(state.assigned[a]||10)+(state.race?.bonuses[a]||0);
    const div=document.createElement('div');
    div.style.border='1px solid rgba(255,255,255,.2)';
    div.style.padding='6px';div.style.textAlign='center';
    div.innerHTML=`<strong>${a}</strong><br>${val} (${mod(val)>=0?'+':''}${mod(val)})`;
    stats.appendChild(div);
  });

  const skills=$('#p_skills');skills.innerHTML='';
  SKILLS.forEach(s=>{
    const div=document.createElement('div');
    div.textContent=`${s.name} (${s.stat})  ${calcSkill(s)}`;
    skills.appendChild(div);
  });
  
  $('#p_raceTraits').innerHTML = $('#raceTraits').innerHTML;
  $('#p_classTraits').innerHTML = $('#classTraits').innerHTML;

  const root=$('#printRoot');
  root.style.display='block';
  window.print();
  setTimeout(()=>root.style.display='none',1000);
};
