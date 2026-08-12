import { CampaignEvent, PostItem, ExtraFlyer, DerivativeFolder, ProductionGoal } from '../types';

export const CAMPAIGN_INFO = {
  candidate: 'Yasser Arámbulo',
  role: 'Alcaldía Distrital de La Brea–Negritos',
  party: 'Alianza para el Progreso',
  motto: 'Siempre con la gente',
  district: 'La Brea–Negritos',
  month: 'Agosto 2026',
  dateRange: 'Del lunes 10 al lunes 31 de agosto',
  metaTitle: 'ESCUCHAR + EXPLICAR + CONSTRUIR CONFIANZA',
  transitionFrom: '“He visto a Yasser.”',
  transitionTo: '“Conozco mejor a Yasser, sé qué está haciendo, lo veo recorriendo el distrito, escuchando diferentes sectores y entiendo mejor su experiencia anterior.”',
  fiveGoals: [
    '1. Incrementar presencia territorial.',
    '2. Humanizar al candidato.',
    '3. Generar conversaciones reales con diferentes sectores.',
    '4. Explicar su experiencia anterior como consejero sin convertir la página en una campaña defensiva.',
    '5. Obtener información ciudadana para comenzar septiembre hablando de soluciones y propuestas confirmadas.'
  ],
  campaignPhilosophy: {
    august: 'ESCUCHAMOS',
    september: 'HABLAMOS DE SOLUCIONES'
  }
};

export const CAMPAIGN_EVENTS: CampaignEvent[] = [
  {
    id: 'evento-1',
    eventNumber: 1,
    date: '2026-08-15',
    dayText: 'SÁBADO 15 DE AGOSTO',
    title: 'NEGRITOS, QUEREMOS ESCUCHARTE',
    subtitle: 'Encuentro Juvenil con Yasser Arámbulo',
    objective: 'Escuchar a jóvenes sobre oportunidades, trabajo, educación, deporte, cultura, emprendimiento y participación.',
    antesTasks: ['Teaser (10 Ago)', 'Video/Pregunta juvenil (11 Ago)', 'Lanzamiento oficial (12 Ago)', 'Video invitación Yasser (14 Ago)', 'Historias con cuenta regresiva'],
    duranteTasks: ['Fotografías de alta calidad', 'Historias en vivo', 'Videos verticales', 'Preguntas ciudadanas en directo', 'Testimonios en cámara', 'Tomas espontáneas de Yasser escuchando'],
    despuesTasks: ['Reel rápido la misma noche (15 Ago)', 'Resumen estructurado (16 Ago)', 'Carrusel 5 ideas escuchadas (17 Ago)', 'Guardar 7 piezas para banco derivado']
  },
  {
    id: 'evento-2',
    eventNumber: 2,
    date: '2026-08-19',
    dayText: 'MIÉRCOLES 19 DE AGOSTO',
    title: 'SIEMPRE CON LA GENTE',
    subtitle: 'Escucha en tu sector #1',
    objective: 'Recorrer un sector y escuchar directamente problemas y oportunidades de los vecinos en sus calles.',
    sector: '[POR CONFIRMAR]',
    antesTasks: ['Lanzamiento oficial en redes (17 Ago)', 'Recordatorio en historias (18 Ago)', 'Preparación de equipo técnico de campo'],
    duranteTasks: ['Caminata y recorrido de calles', 'Conversaciones breves espontáneas con vecinos', 'Registro audiovisual vertical de necesidades reales'],
    despuesTasks: ['Reel nocturno de recorrido (19 Ago)', 'Contenido derivado: Tres temas escuchados (20 Ago)']
  },
  {
    id: 'evento-3',
    eventNumber: 3,
    date: '2026-08-22',
    dayText: 'SÁBADO 22 DE AGOSTO',
    title: 'NEGRITOS TRABAJA',
    subtitle: 'Encuentro con trabajadores y emprendedores',
    objective: 'Escuchar a comerciantes, emprendedores, trabajadores, pescadores y pequeños negocios del distrito.',
    antesTasks: ['Lanzamiento oficial (18 Ago)', 'Invitación formal flyer + video (20 Ago)', 'Recordatorio nocturno con historia (21 Ago)'],
    duranteTasks: ['Entrevistas micro en mano a emprendedores', 'Preguntas sobre barreras de negocio y licencias', 'Cobertura fotográfica de oficios locales'],
    despuesTasks: ['Reel de cobertura nocturna (22 Ago)', 'Carrusel 5 cosas que nos dijeron los emprendedores (23 Ago)']
  },
  {
    id: 'evento-4',
    eventNumber: 4,
    date: '2026-08-26',
    dayText: 'MIÉRCOLES 26 DE AGOSTO',
    title: 'EL NEGRITOS QUE VIVIMOS',
    subtitle: 'Conversatorio con adultos mayores',
    objective: 'Recuperar memoria, identidad y necesidades actuales de nuestros adultos mayores. Coincide con el Día Nacional de las Personas Adultas Mayores en Perú.',
    specialNote: 'Día Nacional de las Personas Adultas Mayores (26 de Agosto)',
    antesTasks: ['Lanzamiento con concepto histórico (23 Ago)', 'Recordatorio en historias (25 Ago)'],
    duranteTasks: ['Escucha atenta y respetuosa', 'Historias del Negritos antiguo vs actual', 'Video emocional vertical'],
    despuesTasks: ['Reel emocional nocturno (26 Ago)', 'Serie "Historias de Negritos - Episodio 1" (27 Ago)']
  },
  {
    id: 'evento-5',
    eventNumber: 5,
    date: '2026-08-28',
    dayText: 'VIERNES 28 DE AGOSTO',
    title: 'SIEMPRE CON LA GENTE',
    subtitle: 'Escucha en tu sector #2',
    objective: 'Segunda caminata de campo para diagnosticar realidades y problemáticas específicas en otro sector del distrito.',
    sector: '[POR CONFIRMAR]',
    antesTasks: ['Convocatoria a vecinos del sector (25 Ago)', 'Historias previas de aviso (27 Ago)'],
    duranteTasks: ['Recorrido casa por casa', 'Preguntas sobre servicios e infraestructura local', 'Testimonios espontáneos'],
    despuesTasks: ['Reel de recorrido nocturno (28 Ago)', 'Banco de problemas detectados para propuestas']
  },
  {
    id: 'evento-6',
    eventNumber: 6,
    date: '2026-08-29',
    dayText: 'SÁBADO 29 DE AGOSTO',
    title: 'NEGRITOS SE MUEVE',
    subtitle: 'Juventud, deporte y comunidad',
    objective: 'Generar un encuentro juvenil mucho más dinámico, deportivo, con mini retos y producción audiovisual fresca.',
    antesTasks: ['Lanzamiento evento deportivo (24 Ago)', 'Recordatorio historias de preparativos (28 Ago)'],
    duranteTasks: ['Mini retos deportivos', 'Yasser participando naturalmente', 'Tomas de acción deportiva y risas'],
    despuesTasks: ['TikTok/Reel dinámico la misma noche (29 Ago)', 'Resumen de mejores momentos deportivos (30 Ago)']
  },
  {
    id: 'evento-7',
    eventNumber: 7,
    date: '2026-08-31',
    dayText: 'LUNES 31 DE AGOSTO',
    title: 'LO QUE NOS DIJO NEGRITOS',
    subtitle: 'Cierre ciudadano de agosto',
    objective: 'Presentar los principales temas escuchados durante el mes y preparar la gran entrada a septiembre con propuestas.',
    antesTasks: ['Anuncio formal del cierre (27 Ago)', 'Convocatoria final de expectativa (31 Ago mañana)'],
    duranteTasks: ['Compilación de hallazgos por sectores', 'Mensaje de Yasser cerrando la etapa de escucha'],
    despuesTasks: ['Reel principal del mes (31 Ago noche)', 'Transición estratégica hacia SEPTIEMBRE: SOLUCIONES']
  }
];

export const POSTS_DATA: PostItem[] = [
  // LUNES 10 DE AGOSTO
  {
    id: 'post-10-1',
    date: '2026-08-10',
    dayName: 'LUNES 10 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'AGOSTO: VAMOS A ESCUCHAR MUCHO MÁS A NEGRITOS',
    format: 'Reel',
    pillar: 'Persona y Candidato',
    pitch: 'Yasser anuncia una nueva etapa de recorridos, encuentros y conversaciones cercanas en el distrito La Brea–Negritos.',
    contentCopy: 'Durante estas semanas vamos a seguir recorriendo La Brea–Negritos, caminando sus calles, conversando con nuestros vecinos y escuchando las ideas de quienes quieren un mejor futuro para nuestro distrito.\n\nVamos a encontrarnos con jóvenes, trabajadores, emprendedores, familias y adultos mayores.\n\nQueremos seguir construyendo una campaña cercana.\n\nSiempre con la gente.',
    question: '¿Qué tema quieres que conversemos durante agosto?',
    isDoublePostDay: true,
    tags: ['Apertura de Agosto', 'Persona y Candidato', 'Reel', 'Escucha']
  },
  {
    id: 'post-10-2',
    date: '2026-08-10',
    dayName: 'LUNES 10 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'JÓVENES DE NEGRITOS: QUEREMOS ESCUCHARLOS (TEASER)',
    format: 'Flyer',
    pillar: 'Juventud',
    eventId: 'evento-1',
    contentCopy: 'Este sábado tendremos un espacio para conversar sobre las oportunidades que necesita nuestra juventud.\n\nFecha: Sábado 15 de agosto\nDatos pendientes: Hora y Lugar [POR CONFIRMAR].',
    callToAction: 'Muy pronto todos los detalles.',
    pendingData: ['Hora exacta del evento', 'Lugar exacto del evento'],
    isDoublePostDay: true,
    tags: ['Teaser', 'Encuentro Juvenil', 'Flyer', 'Evento 1']
  },

  // MARTES 11 DE AGOSTO
  {
    id: 'post-11-1',
    date: '2026-08-11',
    dayName: 'MARTES 11 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN PRINCIPAL',
    title: 'SI TIENES ENTRE 18 Y 29 AÑOS… QUEREMOS HACERTE UNA PREGUNTA',
    format: 'Video',
    pillar: 'Juventud',
    eventId: 'evento-1',
    hook: 'SI TIENES ENTRE 18 Y 29 AÑOS… QUEREMOS HACERTE UNA PREGUNTA',
    contentCopy: '¿Qué oportunidad hace más falta para los jóvenes de La Brea–Negritos?\n\nQueremos preparar la conversación de este sábado escuchando sus opiniones desde hoy.',
    question: '¿Qué oportunidad hace más falta para los jóvenes de La Brea–Negritos?',
    optionsForStories: ['Trabajo', 'Capacitación', 'Emprendimiento', 'Deporte', 'Cultura', 'Otros'],
    tags: ['Pregunta Juvenil', 'Video', 'Encuesta', 'Juventud']
  },

  // MIÉRCOLES 12 DE AGOSTO
  {
    id: 'post-12-1',
    date: '2026-08-12',
    dayName: 'MIÉRCOLES 12 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'LA JUVENTUD NO SOLO ES EL FUTURO, TAMBIÉN ES EL PRESENTE',
    format: 'Flyer + Reel',
    pillar: 'Efeméride',
    eventId: 'evento-1',
    contentCopy: 'Hoy 12 de agosto se conmemora el Día Internacional de la Juventud. Escuchar sus ideas, preocupaciones y expectativas también es construir comunidad.',
    question: '¿Qué necesita hoy un joven para poder desarrollarse en La Brea–Negritos?',
    isDoublePostDay: true,
    tags: ['Día de la Juventud', 'Efeméride', 'Flyer + Reel']
  },
  {
    id: 'post-12-2',
    date: '2026-08-12',
    dayName: 'MIÉRCOLES 12 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'LANZAMIENTO OFICIAL: NEGRITOS, QUEREMOS ESCUCHARTE',
    format: 'Flyer',
    pillar: 'Juventud',
    eventId: 'evento-1',
    contentCopy: 'Encuentro Juvenil con Yasser Arámbulo\nSábado 15 de agosto\nHora: [POR CONFIRMAR]\nLugar: [POR CONFIRMAR]\n\nTemas clave:\n• Trabajo\n• Formación\n• Emprendimiento\n• Deporte\n• Cultura\n• Participación',
    callToAction: 'Ven, participa y comparte tus ideas.',
    pendingData: ['Hora oficial', 'Lugar oficial'],
    isDoublePostDay: true,
    tags: ['Lanzamiento Oficial', 'Flyer', 'Evento 1', 'Convocatoria']
  },

  // JUEVES 13 DE AGOSTO
  {
    id: 'post-13-1',
    date: '2026-08-13',
    dayName: 'JUEVES 13 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN PRINCIPAL',
    title: '¿CONSEJERO REGIONAL Y ALCALDE HACEN LO MISMO?',
    format: 'Flyer',
    pillar: 'Educación Ciudadana',
    contentCopy: 'Respuesta: NO.\n\nCONSEJERO REGIONAL:\n• Fiscaliza.\n• Propone normas.\n• Integra comisiones.\n• Representa.\n\nALCALDE DISTRITAL:\n• Dirige la administración municipal.\n• Ejecuta la gestión local.\n• Conduce los planes municipales.\n\nPara evaluar una gestión, primero debemos conocer las funciones.',
    storiesNotes: 'Cuenta regresiva en Historias: "Faltan 2 días para escuchar a nuestros jóvenes."',
    tags: ['Educación Ciudadana', 'Funciones', 'Flyer', 'Transparencia']
  },

  // VIERNES 14 DE AGOSTO
  {
    id: 'post-14-1',
    date: '2026-08-14',
    dayName: 'VIERNES 14 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN PRINCIPAL',
    title: 'MAÑANA QUIERO ESCUCHAR A LOS JÓVENES DE NEGRITOS',
    format: 'Video',
    pillar: 'Juventud',
    eventId: 'evento-1',
    hook: 'MAÑANA QUIERO ESCUCHAR A LOS JÓVENES DE NEGRITOS',
    pitch: 'Este sábado tendremos un espacio para conversar directamente con nuestros jóvenes. Queremos escuchar qué oportunidades hacen falta, qué problemas enfrentan y qué ideas tienen para nuestro distrito. No queremos una reunión para hablarles. Queremos una reunión para escucharlos.',
    contentCopy: 'Este sábado tendremos un espacio para conversar directamente con nuestros jóvenes. Queremos escuchar qué oportunidades hacen falta, qué problemas enfrentan y qué ideas tienen para nuestro distrito. No queremos una reunión para hablarles. Queremos una reunión para escucharlos.',
    question: 'Si pudieras cambiar una cosa para mejorar las oportunidades de nuestros jóvenes, ¿cuál sería?',
    storiesNotes: 'Historias durante el día: Ubicación, Hora, Cuenta regresiva, Preparativos, "Mañana nos encontramos".',
    tags: ['Video Invitación', 'Yasser', 'Evento 1', 'Juventud']
  },

  // SÁBADO 15 DE AGOSTO (EVENTO 1)
  {
    id: 'post-15-1',
    date: '2026-08-15',
    dayName: 'SÁBADO 15 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'ES HOY: NEGRITOS, QUEREMOS ESCUCHARTE',
    format: 'Flyer',
    pillar: 'Juventud',
    eventId: 'evento-1',
    contentCopy: '¡ES HOY! Encuentro Juvenil con Yasser Arámbulo.\nDatos completos del encuentro: Hora y lugar exacto. ¡Te esperamos para construir juntos!',
    isDoublePostDay: true,
    tags: ['Recordatorio', 'Es Hoy', 'Evento 1', 'Flyer']
  },
  {
    id: 'post-15-2',
    date: '2026-08-15',
    dayName: 'SÁBADO 15 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'HOY LOS JÓVENES TOMARON LA PALABRA',
    format: 'Reel',
    pillar: 'Juventud',
    eventId: 'evento-1',
    pitch: 'Reel rápido de 20–30 segundos del evento. No esperar días para producir el video largo.',
    contentCopy: 'Hoy los jóvenes de La Brea–Negritos tomaron la palabra. Escuchamos sus inquietudes, sus proyectos y su visión para el distrito.',
    details: ['Llegada de participantes', 'Jóvenes opinando', 'Preguntas reales', 'Yasser escuchando atentamente', 'Momentos espontáneos'],
    question: '¿Qué tema juvenil deberíamos seguir conversando?',
    isDoublePostDay: true,
    tags: ['Reel Rápido', 'Cobertura Evento 1', 'Juventud', 'Noche']
  },

  // DOMINGO 16 DE AGOSTO
  {
    id: 'post-16-1',
    date: '2026-08-16',
    dayName: 'DOMINGO 16 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'FELIZ DÍA DEL NIÑO',
    format: 'Flyer',
    pillar: 'Efeméride',
    contentCopy: 'Que nuestras niñas y niños crezcan rodeados de amor, respeto, protección y oportunidades.\n\n(Recomendación: Yasser debe aparecer de forma secundaria. No utilizar menores identificables sin autorización explícita).',
    isDoublePostDay: true,
    tags: ['Día del Niño', 'Efeméride', 'Familia']
  },
  {
    id: 'post-16-2',
    date: '2026-08-16',
    dayName: 'DOMINGO 16 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'ESTO NOS DIJERON LOS JÓVENES DE NEGRITOS',
    format: 'Reel',
    pillar: 'Juventud',
    eventId: 'evento-1',
    contentCopy: 'Selección de 3 a 5 temas reales mencionados durante el Encuentro Juvenil del sábado. Presentado de forma transparente y sin inventar porcentajes.',
    callToAction: 'Seguiremos escuchando.',
    isDoublePostDay: true,
    tags: ['Resumen Evento 1', 'Reel', 'Resultados']
  },

  // LUNES 17 DE AGOSTO
  {
    id: 'post-17-1',
    date: '2026-08-17',
    dayName: 'LUNES 17 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: '5 IDEAS QUE ESCUCHAMOS DE NUESTROS JÓVENES',
    format: 'Carrusel',
    pillar: 'Juventud',
    eventId: 'evento-1',
    contentCopy: 'Carrusel derivado con 5 propuestas e ideas reales mencionadas por los jóvenes asistentes al encuentro.',
    question: '¿Cuál agregarías tú?',
    isDoublePostDay: true,
    tags: ['Carrusel', '5 Ideas', 'Derivado Juventud']
  },
  {
    id: 'post-17-2',
    date: '2026-08-17',
    dayName: 'LUNES 17 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'SIEMPRE CON LA GENTE: ESCUCHA EN TU SECTOR #1',
    format: 'Flyer',
    pillar: 'Escucha Territorial',
    eventId: 'evento-2',
    contentCopy: 'Este miércoles llegamos a: [SECTOR POR CONFIRMAR]\nFecha: Miércoles 19 de Agosto.\nQueremos caminar tu calle y conversar directamente contigo.',
    question: '¿Qué necesita mejorar en tu sector?',
    pendingData: ['Nombre del sector', 'Hora y punto de encuentro'],
    isDoublePostDay: true,
    tags: ['Escucha Territorial', 'Sector #1', 'Flyer', 'Evento 2']
  },

  // MARTES 18 DE AGOSTO
  {
    id: 'post-18-1',
    date: '2026-08-18',
    dayName: 'MARTES 18 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'FISCALIZAR TAMBIÉN ES TRABAJAR',
    format: 'Flyer',
    pillar: 'Educación Ciudadana',
    contentCopy: 'Explicación sencilla de una acción de fiscalización comprobada del periodo de Yasser como consejero regional, utilizando documento original verificado sin sobredimensionar.',
    isDoublePostDay: true,
    tags: ['Experiencia Documentada', 'Consejero', 'Fiscalización']
  },
  {
    id: 'post-18-2',
    date: '2026-08-18',
    dayName: 'MARTES 18 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'NEGRITOS TRABAJA: ENCUENTRO CON TRABAJADORES Y EMPRENDEDORES',
    format: 'Flyer',
    pillar: 'Trabajo y Emprendimiento',
    eventId: 'evento-3',
    contentCopy: 'Queremos escuchar a quienes todos los días mueven nuestra economía local.\nFecha: Sábado 22 de agosto.\nInvitados: Emprendedores, comerciantes, trabajadores, pescadores y pequeños negocios.',
    question: '¿Qué es lo más difícil hoy para emprender o trabajar en nuestro distrito?',
    pendingData: ['Hora del evento', 'Lugar del evento'],
    storiesNotes: 'Historias: Recordatorio "Mañana: Escucha en tu sector #1"',
    isDoublePostDay: true,
    tags: ['Lanzamiento Emprendedores', 'Negritos Trabaja', 'Evento 3']
  },

  // MIÉRCOLES 19 DE AGOSTO (EVENTO 2)
  {
    id: 'post-19-1',
    date: '2026-08-19',
    dayName: 'MIÉRCOLES 19 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – ANTES DE SALIR',
    title: 'HOY NO VENIMOS A DAR UN DISCURSO, VENIMOS A ESCUCHAR',
    format: 'Flyer',
    pillar: 'Escucha Territorial',
    eventId: 'evento-2',
    contentCopy: 'Hoy estamos recorriendo el sector [CONFIRMAR]. No venimos a dar discursos, venimos a escuchar a cada vecino.',
    isDoublePostDay: true,
    tags: ['Previo Recorrido', 'Sector #1', 'Escucha']
  },
  {
    id: 'post-19-2',
    date: '2026-08-19',
    dayName: 'MIÉRCOLES 19 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'LE PREGUNTAMOS A LOS VECINOS DE [SECTOR]: ¿QUÉ NECESITA MEJORAR PRIMERO?',
    format: 'Reel',
    pillar: 'Escucha Territorial',
    eventId: 'evento-2',
    hook: 'LE PREGUNTAMOS A LOS VECINOS DE [SECTOR]: ¿QUÉ NECESITA MEJORAR PRIMERO?',
    contentCopy: 'Reel de recorrido nocturno mostrando calles, vecinos, Yasser caminando y conversando sobre necesidades reales.',
    question: '¿Cuál es la principal necesidad de tu sector?',
    isDoublePostDay: true,
    tags: ['Reel Recorrido', 'Cobertura Sector #1', 'Evento 2']
  },

  // JUEVES 20 DE AGOSTO
  {
    id: 'post-20-1',
    date: '2026-08-20',
    dayName: 'JUEVES 20 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'TRES TEMAS QUE ESCUCHAMOS EN [SECTOR]',
    format: 'Carrusel',
    pillar: 'Escucha Territorial',
    eventId: 'evento-2',
    contentCopy: 'Resumen de los tres temas principales detectados en las calles del sector recorrido ayer.',
    callToAction: 'Escuchar es el primer paso para comprender.',
    isDoublePostDay: true,
    tags: ['Derivado Recorrido', 'Carrusel', 'Resultados Sector']
  },
  {
    id: 'post-20-2',
    date: '2026-08-20',
    dayName: 'JUEVES 20 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'ESTE SÁBADO QUEREMOS ESCUCHAR A QUIENES TRABAJAN Y EMPRENDEN',
    format: 'Flyer + Video',
    pillar: 'Trabajo y Emprendimiento',
    eventId: 'evento-3',
    contentCopy: 'Invitación formal para el encuentro "Negritos Trabaja" de este sábado 22 de agosto.',
    question: '¿Qué debería mejorar para que nuestros negocios tengan más oportunidades?',
    isDoublePostDay: true,
    tags: ['Invitación Formal', 'Negritos Trabaja', 'Evento 3']
  },

  // VIERNES 21 DE AGOSTO
  {
    id: 'post-21-1',
    date: '2026-08-21',
    dayName: 'VIERNES 21 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: '3 PREGUNTAS A YASSER',
    format: 'TikTok/Reel',
    pillar: 'Persona y Candidato',
    contentCopy: '1. ¿Qué es lo que más valoras de La Brea–Negritos?\n2. ¿Qué estás aprendiendo de estos recorridos?\n3. ¿Qué tipo de alcalde quieres ser?\n\nRespuestas dichas directamente por Yasser a cámara.',
    isDoublePostDay: true,
    tags: ['TikTok/Reel', 'Yasser Responde', 'Humanización']
  },
  {
    id: 'post-21-2',
    date: '2026-08-21',
    dayName: 'VIERNES 21 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'MAÑANA: NEGRITOS TRABAJA',
    format: 'Flyer',
    pillar: 'Trabajo y Emprendimiento',
    eventId: 'evento-3',
    contentCopy: 'Recordatorio oficial con datos completos de hora y lugar para el encuentro de emprendedores de mañana.',
    storiesNotes: 'Historias: Cuenta regresiva y ultimos cupos/detalles.',
    isDoublePostDay: true,
    tags: ['Recordatorio', 'Negritos Trabaja', 'Evento 3']
  },

  // SÁBADO 22 DE AGOSTO (EVENTO 3)
  {
    id: 'post-22-1',
    date: '2026-08-22',
    dayName: 'SÁBADO 22 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'ES HOY: NEGRITOS TRABAJA',
    format: 'Flyer',
    pillar: 'Trabajo y Emprendimiento',
    eventId: 'evento-3',
    contentCopy: '¡ES HOY! Encuentro con trabajadores, comerciantes, artesanos, pescadores y emprendedores de La Brea–Negritos.',
    isDoublePostDay: true,
    tags: ['Es Hoy', 'Negritos Trabaja', 'Evento 3']
  },
  {
    id: 'post-22-2',
    date: '2026-08-22',
    dayName: 'SÁBADO 22 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'HOY ESCUCHAMOS A QUIENES MUEVEN NEGRITOS TODOS LOS DÍAS',
    format: 'Reel',
    pillar: 'Trabajo y Emprendimiento',
    eventId: 'evento-3',
    contentCopy: 'Reel de cobertura nocturna del encuentro con trabajadores y emprendedores.',
    details: ['¿Qué negocio tienes?', '¿Cuál es tu principal dificultad?', '¿Qué oportunidad estamos desaprovechando?', '¿Qué necesita un pequeño negocio para crecer?'],
    question: '¿Cuál es hoy la mayor dificultad para trabajar o emprender en Negritos?',
    isDoublePostDay: true,
    tags: ['Reel Cobertura', 'Negritos Trabaja', 'Evento 3']
  },

  // DOMINGO 23 DE AGOSTO
  {
    id: 'post-23-1',
    date: '2026-08-23',
    dayName: 'DOMINGO 23 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: '5 COSAS QUE NOS DIJERON LOS EMPRENDEDORES',
    format: 'Carrusel',
    pillar: 'Trabajo y Emprendimiento',
    eventId: 'evento-3',
    contentCopy: 'Carrusel informativo. No decir "Los emprendedores de Negritos piensan...", decir: "Durante nuestro encuentro escuchamos..."',
    isDoublePostDay: true,
    tags: ['Carrusel', 'Resultados Emprendedores', 'Derivado']
  },
  {
    id: 'post-23-2',
    date: '2026-08-23',
    dayName: 'DOMINGO 23 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'EL NEGRITOS QUE VIVIMOS: CONVERSATORIO CON ADULTOS MAYORES',
    format: 'Flyer',
    pillar: 'Adultos Mayores',
    eventId: 'evento-4',
    contentCopy: 'Lanzamiento del conversatorio con nuestros adultos mayores este miércoles 26 de agosto.\nConcepto: ¿Qué Negritos recuerdas y qué Negritos quieres dejar a tus nietos?',
    pendingData: ['Hora', 'Lugar exacto'],
    isDoublePostDay: true,
    tags: ['Lanzamiento Adultos Mayores', 'Evento 4', 'Flyer']
  },

  // LUNES 24 DE AGOSTO
  {
    id: 'post-24-1',
    date: '2026-08-24',
    dayName: 'LUNES 24 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: '¿QUÉ SÍ PUEDE HACER UNA MUNICIPALIDAD DISTRITAL?',
    format: 'Carrusel',
    pillar: 'Educación Ciudadana',
    contentCopy: 'Carrusel educativo explicando de forma sencilla las competencias municipales verificadas (limpieza, licencias, parques, pistas locales, seguridad ciudadana preventiva).',
    isDoublePostDay: true,
    tags: ['Educación Ciudadana', 'Competencias Municipales', 'Carrusel']
  },
  {
    id: 'post-24-2',
    date: '2026-08-24',
    dayName: 'LUNES 24 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'NEGRITOS SE MUEVE: JUVENTUD, DEPORTE Y COMUNIDAD',
    format: 'Flyer',
    pillar: 'Deporte y Comunidad',
    eventId: 'evento-6',
    contentCopy: 'Lanzamiento del encuentro deportivo juvenil del Sábado 29 de Agosto.',
    question: '¿Qué deporte practicas y qué crees que hace falta para impulsarlo en nuestro distrito?',
    isDoublePostDay: true,
    tags: ['Lanzamiento Deportivo', 'Negritos Se Mueve', 'Evento 6']
  },

  // MARTES 25 DE AGOSTO
  {
    id: 'post-25-1',
    date: '2026-08-25',
    dayName: 'MARTES 25 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'GESTIONAR TAMBIÉN ES HACER SEGUIMIENTO',
    format: 'Flyer + Video',
    pillar: 'Educación Ciudadana',
    contentCopy: 'Acción documentada de la gestión de Yasser como consejero regional. Acompañada con: Documento oficial, Fecha, Institución y Explicación sencilla.',
    isDoublePostDay: true,
    tags: ['Gestionar', 'Experiencia Documentada', 'Consejero']
  },
  {
    id: 'post-25-2',
    date: '2026-08-25',
    dayName: 'MARTES 25 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'ESTE VIERNES ESTAREMOS EN [SECTOR #2]',
    format: 'Flyer',
    pillar: 'Escucha Territorial',
    eventId: 'evento-5',
    contentCopy: 'Convocatoria para el segundo recorrido territorial de escucha del viernes 28 de agosto.',
    callToAction: 'Queremos escucharte.',
    storiesNotes: 'Historias: Recordatorio "Mañana conversamos con nuestros adultos mayores."',
    isDoublePostDay: true,
    tags: ['Convocatoria Sector #2', 'Escucha', 'Evento 5']
  },

  // MIÉRCOLES 26 DE AGOSTO (EVENTO 4)
  {
    id: 'post-26-1',
    date: '2026-08-26',
    dayName: 'MIÉRCOLES 26 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'HOY ESCUCHAMOS LA VOZ DE LA EXPERIENCIA',
    format: 'Flyer',
    pillar: 'Efeméride',
    eventId: 'evento-4',
    contentCopy: 'En el Día Nacional de las Personas Adultas Mayores en el Perú: Nuestros adultos mayores guardan una parte viva e importante de la memoria de nuestro distrito.',
    isDoublePostDay: true,
    tags: ['Día Adultos Mayores', 'Efeméride', 'Evento 4']
  },
  {
    id: 'post-26-2',
    date: '2026-08-26',
    dayName: 'MIÉRCOLES 26 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: '¿CÓMO ERA NEGRITOS CUANDO USTED ERA JOVEN?',
    format: 'Reel',
    pillar: 'Adultos Mayores',
    eventId: 'evento-4',
    hook: '¿CÓMO ERA NEGRITOS CUANDO USTED ERA JOVEN?',
    contentCopy: 'Reel emocional conversando con adultos mayores sobre memorias, cambios y esperanzas para sus nietos.',
    details: ['¿Qué lugar recuerda?', '¿Qué ha cambiado?', '¿Qué no deberíamos perder?', '¿Qué necesitan hoy nuestros adultos mayores?', '¿Qué distrito quisiera dejar a sus nietos?'],
    callToAction: 'Escuchar su experiencia también es valorar nuestra historia.',
    isDoublePostDay: true,
    tags: ['Reel Emocional', 'Adultos Mayores', 'Memoria']
  },

  // JUEVES 27 DE AGOSTO
  {
    id: 'post-27-1',
    date: '2026-08-27',
    dayName: 'JUEVES 27 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'HISTORIAS DE NEGRITOS – EPISODIO 1',
    format: 'Video',
    pillar: 'Adultos Mayores',
    eventId: 'evento-4',
    contentCopy: 'Video relatando una historia real de un adulto mayor de La Brea–Negritos. (Inicio de la serie de testimonios para septiembre).',
    isDoublePostDay: true,
    tags: ['Historias de Negritos', 'Episodio 1', 'Serie Video']
  },
  {
    id: 'post-27-2',
    date: '2026-08-27',
    dayName: 'JUEVES 27 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'ANUNCIO: LO QUE NOS DIJO NEGRITOS (CIERRE DE AGOSTO)',
    format: 'Flyer',
    pillar: 'Cierre y Resumen',
    eventId: 'evento-7',
    contentCopy: 'El lunes 31 de agosto, después de un mes escuchando a diferentes sectores, vamos a conversar sobre los temas que más se han repetido.',
    storiesNotes: 'Historias: Mañana Escucha en tu sector #2 | Faltan 2 días para "Negritos se mueve".',
    isDoublePostDay: true,
    tags: ['Anuncio Cierre', 'Agosto', 'Evento 7']
  },

  // VIERNES 28 DE AGOSTO (EVENTO 5)
  {
    id: 'post-28-1',
    date: '2026-08-28',
    dayName: 'VIERNES 28 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'HOY LLEGAMOS A [SECTOR #2]',
    format: 'Flyer',
    pillar: 'Escucha Territorial',
    eventId: 'evento-5',
    contentCopy: 'Hoy recorremos las calles del sector [CONFIRMAR] para dialogar directamente con los vecinos.',
    question: 'Si pudieras mejorar una sola cosa de tu sector, ¿cuál sería?',
    isDoublePostDay: true,
    tags: ['Previo Sector #2', 'Escucha', 'Evento 5']
  },
  {
    id: 'post-28-2',
    date: '2026-08-28',
    dayName: 'VIERNES 28 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'ESTO NOS DIJERON LOS VECINOS DE [SECTOR #2]',
    format: 'Reel',
    pillar: 'Escucha Territorial',
    eventId: 'evento-5',
    contentCopy: 'Reel con testimonios y momentos clave del recorrido en el sector #2.',
    question: '¿Este problema también existe donde tú vives?',
    storiesNotes: 'Historias: Recordatorio "Mañana: Negritos se mueve."',
    isDoublePostDay: true,
    tags: ['Reel Cobertura', 'Sector #2', 'Evento 5']
  },

  // SÁBADO 29 DE AGOSTO (EVENTO 6)
  {
    id: 'post-29-1',
    date: '2026-08-29',
    dayName: 'SÁBADO 29 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'ES HOY: NEGRITOS SE MUEVE',
    format: 'Flyer',
    pillar: 'Deporte y Comunidad',
    eventId: 'evento-6',
    contentCopy: '¡ES HOY! Encuentro deportivo de juventud, deporte y comunidad. Datos completos de lugar y hora.',
    isDoublePostDay: true,
    tags: ['Es Hoy', 'Negritos Se Mueve', 'Evento 6']
  },
  {
    id: 'post-29-2',
    date: '2026-08-29',
    dayName: 'SÁBADO 29 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: '¿QUÉ NECESITA EL DEPORTE EN NEGRITOS?',
    format: 'TikTok/Reel',
    pillar: 'Deporte y Comunidad',
    eventId: 'evento-6',
    contentCopy: 'TikTok/Reel super dinámico mostrando jóvenes practicando deporte, mini retos, Yasser participando naturalmente y risas.',
    question: '¿Qué disciplina deportiva te gustaría que tuviera más oportunidades en nuestro distrito?',
    isDoublePostDay: true,
    tags: ['TikTok/Reel Dinámico', 'Deporte', 'Evento 6']
  },

  // DOMINGO 30 DE AGOSTO
  {
    id: 'post-30-1',
    date: '2026-08-30',
    dayName: 'DOMINGO 30 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'SANTA ROSA DE LIMA',
    format: 'Flyer',
    pillar: 'Efeméride',
    contentCopy: '30 DE AGOSTO - SANTA ROSA DE LIMA.\nUna fecha de tradición y reflexión para muchas familias peruanas. Que sea una jornada de unión y esperanza para nuestros hogares.\n(Recomendación: No politizar excesivamente el flyer).',
    isDoublePostDay: true,
    tags: ['Santa Rosa de Lima', 'Feriado', 'Efeméride']
  },
  {
    id: 'post-30-2',
    date: '2026-08-30',
    dayName: 'DOMINGO 30 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'EL DEPORTE TAMBIÉN UNE A NUESTRA COMUNIDAD',
    format: 'Reel',
    pillar: 'Deporte y Comunidad',
    eventId: 'evento-6',
    contentCopy: 'Resumen con mejores momentos de la jornada deportiva "Negritos se Mueve".',
    question: '¿Qué otras actividades juveniles deberíamos escuchar y conocer?',
    storiesNotes: 'Cuenta regresiva en Historias: MAÑANA "LO QUE NOS DIJO NEGRITOS"',
    isDoublePostDay: true,
    tags: ['Resumen Deportivo', 'Negritos Se Mueve', 'Reel']
  },

  // LUNES 31 DE AGOSTO (EVENTO 7)
  {
    id: 'post-31-1',
    date: '2026-08-31',
    dayName: 'LUNES 31 DE AGOSTO',
    timeOfDay: 'mañana',
    postNumberText: 'PUBLICACIÓN 1 – MAÑANA',
    title: 'HOY CERRAMOS UN MES DE ESCUCHA',
    format: 'Flyer',
    pillar: 'Cierre y Resumen',
    eventId: 'evento-7',
    contentCopy: 'Jóvenes. Trabajadores. Emprendedores. Vecinos. Adultos mayores. Deportistas.\n\nEsta noche conversaremos sobre todo lo que fuimos escuchando durante el mes de agosto.',
    isDoublePostDay: true,
    tags: ['Convocatoria Cierre', 'Agosto', 'Evento 7']
  },
  {
    id: 'post-31-2',
    date: '2026-08-31',
    dayName: 'LUNES 31 DE AGOSTO',
    timeOfDay: 'noche',
    postNumberText: 'PUBLICACIÓN 2 – NOCHE',
    title: 'AGOSTO: LO QUE NOS DIJO NEGRITOS (REEL PRINCIPAL)',
    format: 'Reel',
    pillar: 'Cierre y Resumen',
    eventId: 'evento-7',
    hook: 'AGOSTO: LO QUE NOS DIJO NEGRITOS',
    contentCopy: 'Estructura del Reel:\n• JÓVENES NOS HABLARON DE… [Información real]\n• TRABAJADORES Y EMPRENDEDORES NOS HABLARON DE… [Información real]\n• EN LOS SECTORES ESCUCHAMOS… [Información real]\n• NUESTROS ADULTOS MAYORES NOS RECORDARON… [Información real]\n• LOS DEPORTISTAS NOS DIJERON… [Información real]\n\nCierre de Yasser:\n"Durante agosto salimos a escuchar. Ahora viene una nueva etapa: estudiar estos problemas, conversar sobre soluciones y presentar propuestas claras para nuestro distrito. Seguimos advancing. Siempre con la gente."',
    question: '¿Qué tema consideras que debemos abordar primero durante septiembre?',
    isDoublePostDay: true,
    tags: ['Reel Principal del Mes', 'Cierre de Agosto', 'Transición a Septiembre']
  }
];

export const EXTRA_FLYERS: ExtraFlyer[] = [
  {
    id: 1,
    title: 'TU BARRIO TAMBIÉN TIENE ALGO QUE DECIR',
    question: '¿Qué necesitamos escuchar en tu sector?',
    type: 'Sector / Escucha',
    text: 'Caminar cada sector nos permite entender las necesidades reales de cada familia.',
  },
  {
    id: 2,
    title: 'PARA CONOCER UN DISTRITO HAY QUE CAMINARLO',
    text: 'Escuchar directamente a nuestros vecinos nos permite comprender mejor cada realidad.',
    type: 'Identidad / Territorio',
  },
  {
    id: 3,
    title: '¿QUÉ NEGRITOS QUEREMOS?',
    question: 'Completa la frase: quiero un Negritos con más ________.',
    type: 'Participación Ciudadana',
  },
  {
    id: 4,
    title: 'LOS JÓVENES QUIEREN SER ESCUCHADOS',
    question: '¿Qué oportunidad hace falta?',
    type: 'Juventud',
  },
  {
    id: 5,
    title: 'EMPRENDER TAMBIÉN ES CREER EN NEGRITOS',
    question: '¿Qué necesita un pequeño negocio para crecer?',
    type: 'Emprendimiento',
  },
  {
    id: 6,
    title: 'CONSEJERO Y ALCALDE NO SON LO MISMO',
    text: 'Contenido educativo sobre diferencias de rol y competencias gubernamentales.',
    type: 'Educación Ciudadana',
  },
  {
    id: 7,
    title: 'LOS DOCUMENTOS TAMBIÉN CUENTAN LA HISTORIA',
    text: 'Utilizar exclusivamente documentos oficiales y verificables de la gestión.',
    type: 'Gestión / Transparencia',
  },
  {
    id: 8,
    title: 'FISCALIZAR TAMBIÉN ES SERVIR',
    text: 'Explicar una acción comprobada del periodo como consejero regional.',
    type: 'Fiscalización',
  },
  {
    id: 9,
    title: 'YASSER RESPONDE',
    text: 'Plantilla en video/flyer para convertir preguntas reales de ciudadanos en respuestas claras.',
    type: 'Interacción / Q&A',
  },
  {
    id: 10,
    title: 'VOCES DE NEGRITOS',
    text: 'Plantilla para destacar testimonios directos o preguntas de la comunidad.',
    type: 'Testimonios',
  },
  {
    id: 11,
    title: '¿SABÍAS QUE…?',
    text: 'Serie de educación municipal sobre servicios, presupuesto e historia local.',
    type: 'Educación Municipal',
  },
  {
    id: 12,
    title: 'SIEMPRE CON LA GENTE',
    subtitle: 'PRÓXIMO SECTOR: [NOMBRE]',
    text: 'Plantilla para avisos de recorridos territoriales.',
    type: 'Convocatoria Territorial',
  }
];

export const DERIVATIVE_FOLDERS: DerivativeFolder[] = [
  {
    id: 'folder-1',
    eventName: 'Encuentro Juvenil',
    eventNumber: 1,
    items: [
      { id: 'd1-1', name: '¿Qué necesita un joven?', description: 'Video opinión de participantes', status: 'pendiente' },
      { id: 'd1-2', name: '¿Trabajo o emprendimiento?', description: 'Debate de opciones', status: 'pendiente' },
      { id: 'd1-3', name: 'Una palabra para el futuro', description: 'Tomas rápidas de cierre', status: 'pendiente' },
      { id: 'd1-4', name: 'Preguntas a Yasser', description: 'Bloque de respuestas en vivo', status: 'pendiente' },
      { id: 'd1-5', name: 'Testimonios juveniles', description: '3 entrevistas breves', status: 'pendiente' },
      { id: 'd1-6', name: 'Mejores momentos B-Roll', description: 'Fotos y tomas de ambiente', status: 'pendiente' },
      { id: 'd1-7', name: 'Frases reales destacadas', description: 'Citas para placas gráficas', status: 'pendiente' }
    ]
  },
  {
    id: 'folder-2',
    eventName: 'Escucha en tu Sector',
    eventNumber: 2,
    items: [
      { id: 'd2-1', name: 'Problema #1 identificado', description: 'Clip de pista/agua/seguridad', status: 'pendiente' },
      { id: 'd2-2', name: 'Problema #2 identificado', description: 'Clip de parque/limpieza', status: 'pendiente' },
      { id: 'd2-3', name: 'Historia de un vecino', description: 'Relato ciudadano de barrio', status: 'pendiente' },
      { id: 'd2-4', name: 'Yasser responde en calle', description: 'Explicación cercana', status: 'pendiente' },
      { id: 'd2-5', name: 'Visuales antes/después', description: 'Recorrido territorial', status: 'pendiente' },
      { id: 'd2-6', name: 'Preguntas ciudadanas de campo', description: 'Interacción directa', status: 'pendiente' }
    ]
  },
  {
    id: 'folder-3',
    eventName: 'Negritos Trabaja',
    eventNumber: 3,
    items: [
      { id: 'd3-1', name: 'Historia de emprendedor', description: 'Perfil de negocio local', status: 'pendiente' },
      { id: 'd3-2', name: 'Historia de pescador', description: 'Testimonio del sector pesca', status: 'pendiente' },
      { id: 'd3-3', name: 'Historia de comerciante', description: 'Mercado/bodega local', status: 'pendiente' },
      { id: 'd3-4', name: 'Principal dificultad económica', description: 'Compilado de trabas locales', status: 'pendiente' },
      { id: 'd3-5', name: 'Oportunidad de desarrollo', description: 'Ideas para potenciar ventas', status: 'pendiente' },
      { id: 'd3-6', name: 'Pregunta a Yasser sobre PYMES', description: 'Respuesta en el evento', status: 'pendiente' }
    ]
  },
  {
    id: 'folder-4',
    eventName: 'Adultos Mayores (Serie "Historias de Negritos")',
    eventNumber: 4,
    items: [
      { id: 'd4-1', name: 'Episodio 1: Orígenes de Negritos', description: 'Memorias de las primeras décadas', status: 'pendiente' },
      { id: 'd4-2', name: 'Episodio 2: Tradiciones y Vida Familiar', description: 'Historias de la comunidad', status: 'pendiente' },
      { id: 'd4-3', name: 'Episodio 3: El Distrito que soñamos', description: 'Mensaje a las nuevas generaciones', status: 'pendiente' },
      { id: 'd4-4', name: 'Episodio 4: La fuerza de nuestra historia', description: 'Homenaje y experiencia', status: 'pendiente' }
    ]
  },
  {
    id: 'folder-5',
    eventName: 'Encuentro Deportivo ("Negritos se Mueve")',
    eventNumber: 6,
    items: [
      { id: 'd5-1', name: 'Deportes que practican', description: 'Compilado de varias disciplinas', status: 'pendiente' },
      { id: 'd5-2', name: 'Jóvenes opinando de lozas y canchas', description: 'Diagnóstico de infraestructura', status: 'pendiente' },
      { id: 'd5-3', name: 'Retos rápidos deportivos', description: 'Dinámica de tiros y juegos con Yasser', status: 'pendiente' },
      { id: 'd5-4', name: 'Necesidades deportivas', description: 'Implementos y torneos', status: 'pendiente' },
      { id: 'd5-5', name: 'Momentos espontáneos y risas', description: 'B-Roll fresco', status: 'pendiente' },
      { id: 'd5-6', name: 'Preguntas a Yasser sobre deporte', description: 'Propuestas para la juventud', status: 'pendiente' }
    ]
  }
];

export const PRODUCTION_GOALS: ProductionGoal[] = [
  {
    id: 'goal-reels',
    name: 'Reels Principales',
    targetMin: 10,
    targetMax: 14,
    currentCount: 11,
    unit: 'videos',
    description: 'Reels de resumen y cobertura de los 7 eventos del mes.'
  },
  {
    id: 'goal-shorts',
    name: 'Videos Cortos / TikToks Derivados',
    targetMin: 15,
    targetMax: 20,
    currentCount: 16,
    unit: 'videos',
    description: 'Clips verticales cortos de preguntas, mini retos y respuestas.'
  },
  {
    id: 'goal-flyers',
    name: 'Flyers Estratégicos',
    targetMin: 8,
    targetMax: 10,
    currentCount: 10,
    unit: 'gráficos',
    description: 'Lanzamientos oficiales, convocatorias y educación ciudadana.'
  },
  {
    id: 'goal-carousels',
    name: 'Carruseles de Informativos',
    targetMin: 5,
    targetMax: 6,
    currentCount: 5,
    unit: 'carruseles',
    description: '5 ideas escuchadas, competencias municipales y resúmenes.'
  },
  {
    id: 'goal-photos',
    name: 'Fotografías Útiles de Campo',
    targetMin: 60,
    targetMax: 100,
    currentCount: 65,
    unit: 'fotos',
    description: 'Banco de imágenes de Yasser caminando y escuchando a vecinos.'
  },
  {
    id: 'goal-testimonies',
    name: 'Testimonios y Respuestas',
    targetMin: 15,
    targetMax: 25,
    currentCount: 18,
    unit: 'citas',
    description: 'Voces reales de jóvenes, trabajadores y adultos mayores.'
  }
];

export const DOUBLE_POST_DAYS = [
  '10 de Agosto (Apertura + Teaser Juvenil)',
  '12 de Agosto (Día de la Juventud + Convocatoria Oficial)',
  '15 de Agosto (Recordatorio + Cobertura Juvenil Evento 1)',
  '16 de Agosto (Día del Niño + Resumen Juvenil)',
  '17 de Agosto (Resultados Juveniles + Convocatoria Territorial #1)',
  '18 de Agosto (Contenido Documentado + Convocatoria Emprendedores)',
  '19 de Agosto (Previo + Cobertura Territorial #1 Evento 2)',
  '20 de Agosto (Resultados Recorrido + Convocatoria Emprendedores)',
  '21 de Agosto (Yasser Responde + Recordatorio Emprendedores)',
  '22 de Agosto (Recordatorio + Cobertura Emprendedores Evento 3)',
  '23 de Agosto (Resultados Emprendedores + Convocatoria Adultos Mayores)',
  '24 de Agosto (Educación Municipal + Lanzamiento Deportivo)',
  '25 de Agosto (Experiencia Documentada + Convocatoria Territorial #2)',
  '26 de Agosto (Día Adulto Mayor + Cobertura Conversatorio Evento 4)',
  '27 de Agosto (Historia Adulto Mayor + Anuncio Cierre de Agosto)',
  '28 de Agosto (Previo + Cobertura Recorrido #2 Evento 5)',
  '29 de Agosto (Recordatorio + Cobertura Deportiva Evento 6)',
  '30 de Agosto (Santa Rosa + Resumen Deportivo)',
  '31 de Agosto (Convocatoria Final + Cierre de Agosto Evento 7)'
];
