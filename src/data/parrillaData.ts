import { PostItem, CampaignPhase, CandidatePillarInfo, PostPillarKey } from '../types';

export const CAMPAIGN_INFO = {
  candidate: 'Yasser Arámbulo',
  role: 'Alcaldía Distrital de La Brea–Negritos',
  party: 'Alianza para el Progreso',
  partyAbbr: 'APP',
  motto: 'Siempre con la gente',
  district: 'La Brea–Negritos',
  province: 'Talara',
  region: 'Piura',
  timeframe: 'Agosto – Octubre 2026',
  coreNarrative: 'De la cercanía y escucha humana hacia la convicción, las propuestas técnicas sustentadas y el voto de confianza.',
  videoRule: 'Cero aburrimiento: Textos cortos, subtítulos dinámicos en todos los videos (estilo Alex Hormozi) y flyers con jerarquía visual clara.'
};

export const CAMPAIGN_PHASES: CampaignPhase[] = [
  {
    id: 'fase1',
    month: 'agosto',
    name: 'Fase 1: El Ciudadano y el Territorio',
    periodText: '17 al 31 de Agosto',
    slogan: '¿Quién es Yasser y por qué quiere servir a La Brea?',
    objective: 'Posicionamiento humano. Responder a la pregunta: ¿Quién es Yasser y por qué quiere servir a La Brea?',
    strategy: 'Mostrar a "Yasser 1" (El Ciudadano) y "Yasser 4" (El Líder Territorial). Cero discursos de podio. Muchos videos caminando por Negritos, escuchando a la gente en la caleta de pescadores o el Salar, con cámara en mano (estilo vlogger). Introduciremos a los regidores como un equipo cercano y diverso.',
    keyPillars: [
      'Yasser 1: El Ciudadano',
      'Yasser 4: El Líder Territorial',
      'Yasser 5: El Candidato (Equipo)',
      'Interacción Directa con la Comunidad'
    ],
    metas: [
      'Alcanzar un pico de reproducciones orgánicas en Reels y TikTok.',
      'Establecer la identidad visual sólida (colores oficiales APP, tipografía moderna, edición ágil con subtítulos destacados).',
      'Recolectar la primera base de datos de simpatizantes activos mediante automatizaciones y flujos de ManyChat en Facebook e Instagram.'
    ],
    techAndTactics: [
      'Edición estilo Alex Hormozi (subtítulos dinámicos con palabras clave resaltadas).',
      'Cámara en mano / vlogger territorial en Punta Balcones, caleta y centro.',
      'Flujos ManyChat conectados a comentarios para captar voluntarios.'
    ]
  },
  {
    id: 'fase2',
    month: 'setiembre',
    name: 'Fase 2: El Gestor y sus Propuestas',
    periodText: '1 al 30 de Setiembre',
    slogan: '¿Qué sabe hacer Yasser y qué propone para el distrito?',
    objective: 'Credibilidad y Visión. Responder a la pregunta: ¿Qué sabe hacer y qué propone?',
    strategy: 'Lanzar la serie "YASSER Y SU EXPERIENCIA" y desglosar el Plan de Gobierno 2027–2030. Utilizaremos pantallas verdes o motion graphics para mostrar la evidencia (documentos oficiales, ordenanzas) mientras él explica de forma didáctica. Aquí metemos las propuestas potentes: Agua y Saneamiento, Emprende Mujer Negriteña, Turismo ("Negritos es Chévere") y la Casa del Pescador.',
    keyPillars: [
      'Yasser 2: El Gestor',
      'Yasser 3: El Fiscalizador',
      'Propuestas Centrales del Plan 2027–2030',
      'Renders de Proyectos Emblemáticos'
    ],
    metas: [
      'Posicionar a Yasser como el único candidato verdaderamente preparado técnica y políticamente.',
      'Fomentar debates constructivos en comentarios de redes y generar contenido viralizable por WhatsApp.',
      'Usar herramientas de generación de video con IA (como Sora o Veo) para crear renders o apoyos visuales hiperrealistas de cómo se vería el Polideportivo Negritos o el mejoramiento integral del litoral.'
    ],
    techAndTactics: [
      'Serie "YASSER Y SU EXPERIENCIA" con soporte documental en pantalla.',
      'Pantallas verdes y Motion Graphics corporativos.',
      'Renders de proyectos con IA generativa (Sora / Veo).',
      'Paquetes de piezas sintéticas compartibles para cadenas de WhatsApp.'
    ]
  },
  {
    id: 'fase3',
    month: 'octubre',
    name: 'Fase 3: El Voto de Confianza',
    periodText: '1 al 4 de Octubre (Día Central de Elección)',
    slogan: 'La Brea necesita una autoridad que conozca su realidad y trabaje con responsabilidad.',
    objective: 'Cierre emocional, consolidación del voto y movilización ciudadana.',
    strategy: 'Mensajes directos, emotivos y de urgencia. Compilatorios de los mejores momentos de la campaña, testimonios de la gente de La Brea respaldando a Yasser y un llamado claro a la acción bajo la premisa: "La Brea necesita una autoridad que conozca su realidad, escuche a su gente y trabaje con responsabilidad."',
    keyPillars: [
      'Cierre Emocional y Respaldo Popular',
      'Llamado al Voto Responsable por APP',
      'Defensa y Protección del Voto'
    ],
    metas: [
      'Maximizar el alcance pagado y orgánico en todo el distrito.',
      'Saturación positiva del mensaje central: "Siempre con la gente".',
      'Movilización de personeros y protección integral del voto en las mesas de sufragio.'
    ],
    techAndTactics: [
      'Videos testimoniales cruzados (pescadores, madres, jóvenes, comerciantes).',
      'Compilatorio cinematográfico del recorrido territorial.',
      'Guía visual rápida de cómo marcar por la A de APP en la cédula.'
    ]
  }
];

export const CANDIDATE_PILLARS: CandidatePillarInfo[] = [
  {
    key: 'Yasser 1: El Ciudadano',
    number: 1,
    name: 'El Ciudadano',
    roleDescription: 'El vecino humilde, cercano y auténtico. Habla de su amor por Talara y Negritos, su familia, sus recuerdos y la vocación de servicio.',
    tone: 'Cálido, humilde, reflexivo, cercano, en primera persona.',
    visualTone: 'Caminando por las calles, atardeceres en Punta Balcones, fotos familiares y cotidianas.',
    exampleTopics: ['"No vengo a prometer, vengo a escuchar"', 'Orgullo negriteño', 'Valores familiares']
  },
  {
    key: 'Yasser 2: El Gestor',
    number: 2,
    name: 'El Gestor',
    roleDescription: 'El profesional con experiencia pública que sabe cómo funciona el Estado, los presupuestos y cómo destrabar obras.',
    tone: 'Didáctico, seguro, técnico pero accesible, resolutivo.',
    visualTone: 'Explicaciones dinámicas, mapas, motion graphics, expedientes técnicos, pantallas verdes.',
    exampleTopics: ['"No me cuentes cómo se hace, ya estuve ahí"', 'Agua y Saneamiento', 'Negritos Plástico Challenge']
  },
  {
    key: 'Yasser 3: El Fiscalizador',
    number: 3,
    name: 'El Fiscalizador',
    roleDescription: 'La autoridad honesta y valiente que ha fiscalizado la gestión pública y defendido los recursos de Talara y La Brea con documentos.',
    tone: 'Firme, documentado, transparente e incorruptible.',
    visualTone: 'Infografías, documentos oficiales sellados, recortes y actas de fiscalización.',
    exampleTopics: ['Experiencia demostrada', 'Fiscalización de salud en Talara', 'Defensa ambiental']
  },
  {
    key: 'Yasser 4: El Líder Territorial',
    number: 4,
    name: 'El Líder Territorial',
    roleDescription: 'El líder que no está en el escritorio sino en la caleta, en el salar, en el mercado y en los barrios escuchando a los vecinos.',
    tone: 'Cámara en mano, espontáneo, empático, sin protocolo.',
    visualTone: 'Estilo vlogger, conversando con pescadores, comerciantes y vecinos en bodegas.',
    exampleTopics: ['Un café en sectores populares', 'Comercio local en el mercado', 'Recorrido por el Salar']
  },
  {
    key: 'Yasser 5: El Candidato (Equipo)',
    number: 5,
    name: 'El Candidato y su Equipo',
    roleDescription: 'El postulante con visión integral de futuro y un equipo de regidores jóvenes, técnicos y representativos de cada barrio.',
    tone: 'Inspirador, entusiasta, moderno y colectivo.',
    visualTone: 'Formatos dinámicos de TikTok, Ping Pong con regidores, carruseles de visión 2027–2030.',
    exampleTopics: ['Conoce al equipo de regidores', 'Ping Pong de regidores', 'Las 4 dimensiones del Plan de Gobierno']
  },
  {
    key: 'Interacción',
    number: 6,
    name: 'Interacción Ciudadana',
    roleDescription: 'Dinámicas participativas en Stories y publicaciones para escuchar prioridades, recoger comentarios y activar flujos ManyChat.',
    tone: 'Participativo, directo, ameno y consultivo.',
    visualTone: 'Stickers de preguntas, encuestas de historias, cuadrantes interactivos para comentarios.',
    exampleTopics: ['¿Qué servicio municipal urge mejorar?', 'Preguntas para el Plan de Gobierno']
  }
];

export const POSTS_DATA: PostItem[] = [
  // LUNES 17
  {
    id: 'post-17',
    month: 'agosto',
    date: '2026-08-17',
    dayName: 'LUNES 17 DE AGOSTO',
    dayShort: 'Lun 17',
    phase: 'fase1',
    title: 'No vengo a prometer, vengo a escuchar',
    format: 'Video Reel / TikTok (Storytelling)',
    pillar: 'Yasser 1: El Ciudadano',
    productionStyle: 'Subtítulos dinámicos estilo Alex Hormozi • Cámara en mano vlogger • Colores APP',
    visualScript: 'Yasser caminando por Punta Balcones o el centro de Negritos al atardecer. Tomas fluidas de cámara en mano, plano medio a primer plano con luz dorada natural.',
    hook: 'No vengo a pararme en un estrado a hacer promesas vacías. Vengo a escuchar a quienes caminan estas calles todos los días.',
    messageOrCopy: 'Presentación corta y auténtica. Quién es Yasser Arámbulo, su orgullo por Talara y por qué La Brea merece una gestión presente y comprometida. Tono humilde pero firme.',
    contentCopy: `No vengo a prometer, vengo a escuchar.

Durante años nos han acostumbrado a candidatos que solo aparecen cada cuatro años para dar discursos de podio y dejar promesas en el aire.

Yo soy Yasser Arámbulo, hijo de esta tierra bendita de Talara, y sé perfectamente que para gobernar bien primero hay que pisar el barro, mirar a los ojos y escuchar a la gente.

La Brea tiene historia, tiene identidad y tiene un potencial gigantesco que merece ser liderado con respeto y trabajo honesto.

Arrancamos este camino juntos. ¡Coméntame desde qué barrio o sector de Negritos nos estás viendo!

#YasserArámbulo #LaBreaNegritos #SiempreConLaGente #AlianzaParaElProgreso #ElCiudadano`,
    question: '¿Desde qué barrio o sector de Negritos nos estás viendo?',
    callToAction: 'Déjame tu comentario para enviarte un saludo y escuchar tus inquietudes por interno.',
    interactiveDetails: 'Activar flujo ManyChat en FB/IG: al comentar la palabra "NEGRITOS" o el barrio, enviar saludo personalizado por DM e invitar a unirse al grupo de voluntarios.',
    tags: ['Lanzamiento', 'Storytelling', 'Punta Balcones', 'Yasser 1', 'Escucha'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 18
  {
    id: 'post-18',
    month: 'agosto',
    date: '2026-08-18',
    dayName: 'MARTES 18 DE AGOSTO',
    dayShort: 'Mar 18',
    phase: 'fase1',
    title: '3 cosas que nos unen a La Brea',
    format: 'Flyer (Carrusel IG/FB)',
    pillar: 'Yasser 4: El Líder Territorial',
    productionStyle: 'Carrusel de 4 a 5 láminas en alta resolución con diseño de marca APP (Azul, Rojo y Blanco)',
    visualScript: 'Láminas fotográficas de alto impacto: 1. Portada atractiva con Yasser en Punta Balcones. 2. El Bosque Petrificado. 3. El Salar y su riqueza natural. 4. La caleta y la pesca artesanal. 5. Cierre con logo de APP y "Siempre con la gente".',
    hook: 'La Brea–Negritos tiene una riqueza única que nos infla el pecho de orgullo. ¿Conocías estos 3 tesoros que nos unen?',
    messageOrCopy: 'Datos curiosos e históricos del distrito (El Bosque Petrificado, El Salar, la pesca artesanal). Conecta la identidad y el orgullo territorial con el compromiso de desarrollo.',
    contentCopy: `3 cosas que nos unen y nos llenan de orgullo en La Brea–Negritos 💙🔴

1️⃣ Nuestro Bosque Petrificado: Un testimonio arqueológico y natural único en el Perú que merece ser protegido y puesto en valor turístico.
2️⃣ El majestuoso Salar y Punta Balcones: El punto más occidental de América del Sur, donde el mar y el viento cuentan nuestra historia.
3️⃣ La tradición de nuestra pesca artesanal: Hombres y mujeres de mar que con valentía madrugan cada día para alimentar a miles de familias.

La Brea no es solo su pasado glorioso; es el futuro que vamos a construir juntos.

Guarda este post y compártelo con orgullo negriteño.

#LaBreaNegritos #OrgulloNegriteño #YasserArámbulo #SiempreConLaGente #APP`,
    carouselSlides: [
      'PORTADA: 3 cosas que nos unen a La Brea–Negritos (por Yasser Arámbulo)',
      'LÁMINA 1: El Bosque Petrificado — Patrimonio natural milenario en nuestro desierto.',
      'LÁMINA 2: El Salar y Punta Balcones — El hito geográfico más occidental de Sudamérica.',
      'LÁMINA 3: La Pesca Artesanal — La fuerza y el corazón de nuestras familias de mar.',
      'CIERRE: La Brea merece un futuro a la altura de su historia. Yasser Arámbulo • APP'
    ],
    question: '¿Cuál de estos tres tesoros de nuestro distrito es tu favorito?',
    callToAction: 'Comparte este carrusel en tus historias si te sientes orgulloso de haber nacido en Negritos.',
    interactiveDetails: 'Al guardar o compartir, responder comentarios destacando anécdotas de vecinos.',
    tags: ['Identidad', 'Turismo', 'Pesca', 'Bosque Petrificado', 'Punta Balcones'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 19
  {
    id: 'post-19',
    month: 'agosto',
    date: '2026-08-19',
    dayName: 'MIÉRCOLES 19 DE AGOSTO',
    dayShort: 'Mié 19',
    phase: 'fase1',
    title: 'Conoce al equipo que trabajará por La Brea',
    format: 'Video Dinámico (Trend)',
    pillar: 'Yasser 5: El Candidato (Equipo)',
    productionStyle: 'Formato TikTok / Reels de ritmo rápido con música en tendencia, cortes dinámicos y textos flotantes',
    visualScript: 'Estilo TikTok. Los candidatos a regidores caminan con seguridad y una sonrisa hacia la cámara uno por uno en una locación icónica de Negritos. Aparece un rótulo con su nombre, especialidad/profesión y el barrio al que representan. Al final, Yasser se suma al centro del equipo.',
    hook: 'Nadie transforma un distrito solo. Conoce a los hombres y mujeres que conforman el equipo de La Brea.',
    messageOrCopy: 'Música en tendencia, actitud positiva, cercana y fresca. Demuestra que no es una candidatura individual, sino un equipo técnico y vecinal preparado.',
    contentCopy: `Un verdadero cambio no lo hace una sola persona: lo hace un equipo comprometido con su gente 🤝🇵🇪

Hoy te presentamos a los hombres y mujeres que integran nuestra lista de regidores por La Brea–Negritos:
✨ Vecinos de tus mismos barrios.
✨ Profesionales jóvenes y con experiencia social.
✨ Pescadores, emprendedores, educadores y líderes comunitarios.

Gente honesta que no busca servirse de la política, sino servir con el corazón a nuestro distrito.

¡Déjales un mensaje de aliento en los comentarios!

#EquipoNegritos #YasserArámbulo #RegidoresAPP #SiempreConLaGente #JuventudYExperiencia`,
    question: '¿A cuál de nuestros candidatos a regidores reconoces de tu sector?',
    callToAction: 'Comenta y cuéntanos qué perfil técnico o vecinal crees que es más urgente en el concejo municipal.',
    interactiveDetails: 'Etiquetar las cuentas de redes sociales de los regidores para que interactúen directamente con los vecinos.',
    tags: ['Equipo', 'Regidores', 'Trend', 'Juventud', 'TikTok'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 20
  {
    id: 'post-20',
    month: 'agosto',
    date: '2026-08-20',
    dayName: 'JUEVES 20 DE AGOSTO',
    dayShort: 'Jue 20',
    phase: 'fase1',
    title: '¿Qué es lo que más te enorgullece de Negritos?',
    format: 'Flyer Cuadrado (Interactivo)',
    pillar: 'Yasser 1: El Ciudadano',
    productionStyle: 'Diseño limpio y de alto contraste con tipografía bold y recuadro central para incentivar respuestas',
    visualScript: 'Flyer cuadrado 1:1 optimizado para feed de Facebook e Instagram. Foto cercana de Yasser sonriendo con vecinos de fondo, acompañada de la pregunta en tipografía gigante y clara.',
    hook: 'Cada rincón de nuestro distrito tiene una historia que vale la pena contar. Queremos leer la tuya.',
    messageOrCopy: 'Pregunta abierta a la comunidad para generar engagement orgánico y comentarios de valor. "Yasser Arámbulo te lee en los comentarios".',
    contentCopy: `¿Qué es lo que más te enorgullece de haber crecido o vivir en Negritos? 🌊☀️

¿Su comida marina? ¿La tranquilidad de sus tardes? ¿La calidez de su gente trabajadora? ¿O esos recuerdos de infancia en el muelle y la playa?

Leo todos sus comentarios personalmente. Este espacio es para recordar por qué amamos tanto a La Brea y por qué vale la pena luchar por su desarrollo.

¡Te leo abajo! 👇

#OrgulloNegriteño #LaBreaNegritos #YasserArámbulo #SiempreConLaGente`,
    question: '¿Qué es lo que más te enorgullece de Negritos?',
    callToAction: 'Escribe tu respuesta y Yasser te responderá directamente en los comentarios.',
    interactiveDetails: 'Automatización ManyChat: Enviar una respuesta automática por mensaje directo agradeciendo el aporte y enviando un enlace al canal de WhatsApp de la campaña.',
    tags: ['Interacción', 'Comunidad', 'Engagement', 'Orgullo', 'ManyChat'],
    platforms: ['Facebook', 'Instagram']
  },

  // VIERNES 21
  {
    id: 'post-21',
    month: 'agosto',
    date: '2026-08-21',
    dayName: 'VIERNES 21 DE AGOSTO',
    dayShort: 'Vie 21',
    phase: 'fase1',
    title: 'Un café en [Sector popular de Negritos]',
    format: 'Video Reel (Cámara en mano)',
    pillar: 'Yasser 4: El Líder Territorial',
    productionStyle: 'Estilo documental vlogger • Planos detalle de miradas, tazas de café y manos trabajadoras • Sin música invasiva',
    visualScript: 'Yasser sentado en una banca o mesa de una bodega popular en un sector tradicional de Negritos, compartiendo un café o refresco con pescadores y vecinos mayores. Yasser en actitud de escucha activa (anotando o asintiendo). Tomas de apoyo (B-roll) de las calles, niños jugando y el movimiento barrial.',
    hook: 'Las mejores propuestas para un pueblo no se inventan detrás de un escritorio con aire acondicionado...',
    messageOrCopy: 'Las mejores propuestas no nacen en un escritorio, nacen escuchando a los que caminan nuestras calles todos los días. Cercanía pura sin poses.',
    contentCopy: `Las mejores propuestas no nacen en un escritorio, nacen escuchando a los que caminan nuestras calles todos los días ☕🏘️

Hoy nos tomamos un café con los vecinos en el barrio, hablando de las necesidades reales: la falta de presión de agua, la falta de espacios deportivos para los chicos y la necesidad de reactivar la economía local.

Un alcalde debe ser, antes que nada, el vecino que mejor conoce las preocupaciones de su comunidad. 

Gracias por abrirme las puertas de sus hogares. ¡Seguimos caminando juntos!

#LaBreaTerritorio #CaminarEscucharResolver #YasserArámbulo #SiempreConLaGente #APP`,
    question: '¿En qué calle o sector te gustaría que nos tomemos el próximo café para conversar?',
    callToAction: 'Comenta tu barrio y coordinamos una visita vecinal esta misma semana.',
    interactiveDetails: 'El equipo de campaña mapea los barrios comentados para agendar la ruta de las caminatas de los días siguientes.',
    tags: ['Cámara En Mano', 'Vlogger', 'Vecinos', 'Escucha', 'Territorio'],
    platforms: ['Instagram Reels', 'TikTok', 'Facebook Reels']
  },

  // SÁBADO 22
  {
    id: 'post-22',
    month: 'agosto',
    date: '2026-08-22',
    dayName: 'SÁBADO 22 DE AGOSTO',
    dayShort: 'Sáb 22',
    phase: 'fase1',
    title: 'Historias: Encuesta Ciudadana de Prioridades',
    format: 'Historias (Encuestas)',
    pillar: 'Interacción',
    productionStyle: 'Pack de 4 Stories interactivas con stickers de votación rápida y caja de preguntas abierta',
    visualScript: 'Secuencia de historias verticales: Story 1: Video de Yasser saludando e invitando a votar. Story 2: Sticker encuesta (Agua vs. Limpieza). Story 3: Sticker encuesta (Seguridad vs. Empleo Joven). Story 4: Caja de preguntas para dejar comentarios específicos.',
    hook: 'Queremos que nuestro Plan de Gobierno tenga la voz de cada vecino. Vota en estas encuestas.',
    messageOrCopy: 'Stickers de preguntas y encuestas: "¿Qué servicio municipal necesita mejorar urgente?" (Agua, Limpieza, Seguridad). Sirve para calentar el terreno para el Plan de Gobierno 2027–2030.',
    contentCopy: `📱 SECUENCIA DE HISTORIAS INTERACTIVAS (SÁBADO 22 DE AGOSTO):

👉 Historia 1: "¡Hola amigos de Negritos! Este sábado queremos escucharte con números claros."
👉 Historia 2 (Encuesta): ¿Qué servicio municipal necesita una solución más urgente en tu sector?
   ⚪ A) Agua potable continua y saneamiento
   ⚪ B) Limpieza pública y recojo de basura
👉 Historia 3 (Encuesta): ¿Cuál debe ser la prioridad para nuestros jóvenes?
   ⚪ A) Talleres técnicos y empleo
   ⚪ B) Espacios deportivos y culturales
👉 Historia 4 (Caja de preguntas): "¿Qué problema en tu calle nadie ha solucionado hasta hoy? Déjalo aquí."`,
    question: '¿Qué servicio municipal necesita mejorar con máxima urgencia en tu sector?',
    callToAction: 'Interactúa con los stickers de nuestras historias en Instagram y Facebook.',
    interactiveDetails: 'Los resultados porcentuales se guardan como insumo gráfico para los videos de propuestas de la Fase 2 (Setiembre).',
    tags: ['Stories', 'Encuestas', 'Diagnóstico', 'Participación', 'Interacción'],
    platforms: ['Instagram Stories', 'Facebook Stories']
  },

  // DOMINGO 23
  {
    id: 'post-23',
    month: 'agosto',
    date: '2026-08-23',
    dayName: 'DOMINGO 23 DE AGOSTO',
    dayShort: 'Dom 23',
    phase: 'fase1',
    title: 'El futuro que soñamos para nuestros hijos',
    format: 'Foto de alta calidad',
    pillar: 'Yasser 1: El Ciudadano',
    productionStyle: 'Fotografía profesional en alta resolución • Iluminación natural • Composición humana y emotiva',
    visualScript: 'Foto familiar o de descanso dominical con sus seres queridos (o Yasser en un mirador frente al mar de Negritos contemplando el horizonte con una mirada serena y esperanzadora).',
    hook: 'Los domingos son para recargar el corazón con la familia y recordar por qué luchamos cada día.',
    messageOrCopy: 'Foto familiar o de descanso dominical o Yasser en un mirador del litoral. Copy reflexivo sobre el futuro de los jóvenes y niños del distrito.',
    contentCopy: `El domingo es para abrazar a la familia y recordar el verdadero motivo por el que estamos aquí 👨‍👩‍👧‍👦🌅

Cuando camino por Negritos y veo a nuestros niños jugando en las calles o a los jóvenes buscando oportunidades, me convenzo de que La Brea tiene que ofrecerles un futuro digno, seguro y lleno de esperanza.

No queremos que nuestros hijos tengan que irse de su tierra para poder salir adelante. Queremos que aquí encuentren educación, deporte, trabajo y tranquilidad.

Que tengan un bendecido domingo en compañía de quienes más aman.

#Familia #DomingoDePaz #FuturoParaNuestrosHijos #YasserArámbulo #SiempreConLaGente`,
    question: '¿Qué mensaje le darías hoy a los jóvenes de La Brea que sueñan con salir adelante?',
    callToAction: 'Dedícale este domingo un momento a tu familia y comparte tus bendiciones.',
    interactiveDetails: 'Responder con afecto y cercanía a cada vecino que salude a la familia del candidato.',
    tags: ['Familia', 'Domingo', 'Reflexión', 'Valores', 'Yasser 1'],
    platforms: ['Facebook', 'Instagram']
  },

  // LUNES 24
  {
    id: 'post-24',
    month: 'agosto',
    date: '2026-08-24',
    dayName: 'LUNES 24 DE AGOSTO',
    dayShort: 'Lun 24',
    phase: 'fase1',
    title: 'No me cuentes cómo se hace, ya estuve ahí',
    format: 'Video Reel (Teaser Serie)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Edición cinematográfica y dinámica con motion graphics, overlays de documentos y ritmo ágil',
    visualScript: 'Yasser en encuadre dinámico, caminando hacia la cámara y gesticulando con seguridad. Mientras habla, aparecen animaciones gráficas flotantes simulando presupuestos, expedientes del Gobierno Regional y logos institucionales.',
    hook: 'Administrar una municipalidad no es para improvisar ni aprender en el camino. Se necesita saber exactamente cómo tocar las puertas del Estado.',
    messageOrCopy: 'Teaser de la serie. Yasser explica brevemente qué hace un Consejero Regional y cómo esa experiencia le da ventaja para gestionar financiamiento y obras por La Brea.',
    contentCopy: `No me cuentes cómo se hace: ya estuve ahí y sé cómo conseguir resultados 💼📊

Muchos candidatos prometen obras millonarias sin saber de dónde sale un solo sol de presupuesto. La realidad es clara: el presupuesto propio de La Brea es limitado, y si no sabes gestionar ante el Gobierno Regional y los Ministerios en Lima, el distrito se queda estancado.

Como ex Consejero Regional por Talara, aprendí a destrabar expedientes, a fiscalizar cada centavo y a exigir lo que por justicia le corresponde a nuestra gente.

Esa experiencia la pondremos al servicio de Negritos desde el primer día de gestión.

¡Se viene la serie donde te explicaré punto por punto cómo lo haremos!

#GestiónPública #ExperienciaComprobada #YasserArámbulo #LaBreaNegritos #APP`,
    question: '¿Crees que la experiencia previa en gestión es fundamental para liderar un municipio?',
    callToAction: 'Síguenos y activa las notificaciones para no perderte el desglose de nuestras propuestas.',
    interactiveDetails: 'Activar ManyChat con palabra clave "GESTION" para enviar el primer capítulo de la serie en cuanto se publique.',
    tags: ['Gestión', 'Consejero Regional', 'Experiencia', 'Presupuesto', 'Yasser 2'],
    platforms: ['Instagram Reels', 'TikTok', 'Facebook Reels']
  },

  // MARTES 25
  {
    id: 'post-25',
    month: 'agosto',
    date: '2026-08-25',
    dayName: 'MARTES 25 DE AGOSTO',
    dayShort: 'Mar 25',
    phase: 'fase1',
    title: 'Experiencia demostrada en favor de la provincia',
    format: 'Flyer (Infografía)',
    pillar: 'Yasser 3: El Fiscalizador',
    productionStyle: 'Infografía corporativa de alta jerarquía con sellos de gestión, iconografía y viñetas contrastadas',
    visualScript: 'Flyer infográfico limpio y estructurado en 3 bloques de evidencia comprobada: 1. Fiscalización de la salud y hospitales en Talara. 2. Impulso a iniciativas ecológicas como el "Negritos Plástico Challenge". 3. Defensa del presupuesto descentralizado para distritos.',
    hook: 'Las palabras se las lleva el viento, pero los documentos y las gestiones quedan registradas.',
    messageOrCopy: 'Viñetas rápidas de sus gestiones documentadas (Salud en Talara, Negritos Plástico Challenge, etc.). Diseño limpio, corporativo y transparente.',
    contentCopy: `Experiencia demostrada: los hechos hablan más fuerte que las promesas 📑✅

Cuando asumí la responsabilidad de representar a nuestra provincia, lo hice con un solo principio: defender los intereses de la población sin deberle favores a nadie.

📌 Fiscalización en Salud: Exigiendo equipamiento y atención digna para los centros médicos de la provincia de Talara.
📌 Acción Ambiental Concreta: Promoviendo desde 2019 iniciativas como el "Negritos Plástico Challenge" para limpiar nuestras playas.
📌 Fiscalización de Obras: Asegurando que los recursos públicos se ejecuten con transparencia.

Gobernar es saber gestionar. Yasser Arámbulo • Experiencia al servicio de La Brea.

#FiscalizaciónConResultados #ExperienciaDemostrada #YasserArámbulo #Transparencia #APP`,
    question: '¿Qué obra o sector crees que necesita mayor fiscalización y transparencia en Negritos?',
    callToAction: 'Comparte esta infografía para que más vecinos conozcan la trayectoria y resultados de Yasser.',
    interactiveDetails: 'Disponer del archivo digital con los documentos de sustento para quienes soliciten información por mensaje privado.',
    tags: ['Fiscalización', 'Infografía', 'Hechos', 'Salud', 'Yasser 3'],
    platforms: ['Facebook', 'Instagram']
  },

  // MIÉRCOLES 26
  {
    id: 'post-26',
    month: 'agosto',
    date: '2026-08-26',
    dayName: 'MIÉRCOLES 26 DE AGOSTO',
    dayShort: 'Mié 26',
    phase: 'fase1',
    title: 'Ping Pong con los Regidores - Parte 1',
    format: 'Video Reel (Entrevista Rápida)',
    pillar: 'Yasser 5: El Candidato (Equipo)',
    productionStyle: 'Formato vertical dinámico • Pantalla dividida o cortes rápidos cada 2 segundos con subtítulos animados',
    visualScript: 'Micrófono de solapa o inalámbrico con branding APP. Preguntas rápidas y espontáneas a 2 o 3 integrantes de la lista de regidores: ¿Plato típico de Negritos? ¿Rincón favorito del distrito? ¿Qué te motivó a sumarte al equipo de Yasser?',
    hook: '3 preguntas sin filtro a los vecinos que postulan como regidores en nuestro equipo.',
    messageOrCopy: 'Preguntas rápidas a 2 o 3 regidores (Plato favorito, rincón favorito de Negritos, principal motivación). Humaniza al equipo de forma fresca y cercana.',
    contentCopy: `🏓 Ping Pong con los Regidores de La Brea–Negritos (Parte 1) ✨

Hoy pusimos a prueba la rapidez y espontaneidad de nuestro equipo:
👉 ¿Ceviche o sudado de pescado fresco?
👉 ¿Punta Balcones o el Salar?
👉 ¿Qué es lo primero que harás desde el concejo municipal?

Conoce a la gente real que acompaña a Yasser Arámbulo. Vecinos con ganas de trabajar y transformar nuestro distrito.

¡Comenta qué otra pregunta te gustaría que les hagamos en la Parte 2!

#PingPongRegidores #EquipoCercano #YasserArámbulo #LaBreaNegritos #GenteReal`,
    question: '¿Qué pregunta sin filtro le harías tú a los candidatos a regidores?',
    callToAction: 'Deja tu pregunta y la incluiremos en la Parte 2 de esta serie.',
    interactiveDetails: 'Seleccionar las 3 preguntas ciudadanas más votadas de los comentarios para el siguiente reel de la serie.',
    tags: ['Ping Pong', 'Entrevista', 'Humanización', 'Regidores', 'Humor'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 27
  {
    id: 'post-27',
    month: 'agosto',
    date: '2026-08-27',
    dayName: 'JUEVES 27 DE AGOSTO',
    dayShort: 'Jue 27',
    phase: 'fase1',
    title: 'Tenemos el litoral más hermoso, vamos a cuidarlo',
    format: 'Reel / TikTok (Medio Ambiente)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Tomas panorámicas de la playa combinadas con cámara en mano recogiendo residuos simbólicos',
    visualScript: 'Yasser caminando por la playa al amanecer. Muestra la belleza del mar y menciona su experiencia de trabajo voluntario en el "Negritos Plástico Challenge" de 2019. Conecta el cuidado ecológico con el enorme potencial de turismo sostenible.',
    hook: 'Dios nos dio uno de los litorales más hermosos del norte del Perú, pero no podemos dejar que la basura y el abandono lo arruinen.',
    messageOrCopy: 'Yasser en la playa. Recuerda su experiencia en el "Negritos Plástico Challenge" 2019. Conecta el cuidado ambiental con el potencial turístico y la economía de los pescadores.',
    contentCopy: `Tenemos el litoral más hermoso del Perú, y es hora de cuidarlo como se merece 🌊🏖️

En 2019 demostramos con el "Negritos Plástico Challenge" que cuando la juventud y la comunidad se organizan, podemos recuperar nuestros espacios naturales sin gastar millones.

En nuestro Plan de Gobierno 2027–2030, el cuidado ambiental no será un adorno: será el motor para atraer turismo responsable, generar empleo para los jóvenes y proteger las zonas de pesca artesanal.

Una playa limpia es salud, es turismo y es orgullo negriteño.

#CuidadoAmbiental #PlayasLimpias #NegritosPlasticoChallenge #TurismoSostenible #YasserArámbulo`,
    question: '¿Te sumarías a una gran jornada de limpieza de playas y concientización con nosotros?',
    callToAction: 'Comenta "YO ME SUMO" para enviarte la convocatoria de la próxima jornada ambiental.',
    interactiveDetails: 'Flujo ManyChat con "YO ME SUMO" para registrar simpatizantes ambientales y voluntarios juveniles.',
    tags: ['Medio Ambiente', 'Playas', 'Turismo', 'Plástico Challenge', 'Yasser 2'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // VIERNES 28
  {
    id: 'post-28',
    month: 'agosto',
    date: '2026-08-28',
    dayName: 'VIERNES 28 DE AGOSTO',
    dayShort: 'Vie 28',
    phase: 'fase1',
    title: 'Nuestra Visión 2027–2030: Las 4 Dimensiones',
    format: 'Flyer (Carrusel)',
    pillar: 'Yasser 5: El Candidato (Equipo)',
    productionStyle: 'Carrusel infográfico de 5 láminas con diseño editorial moderno, íconos y paleta oficial APP',
    visualScript: 'Lámina 1: Portada con título imponente "Nuestra Visión 2027–2030". Lámina 2: Dimensión Social (Agua, Salud y Educación). Lámina 3: Dimensión Económica (Pesca, Empleo y Turismo). Lámina 4: Dimensión Ambiental y Territorial. Lámina 5: Dimensión Institucional y Transparencia. CTA para solicitar el documento completo.',
    hook: 'Un plan de gobierno serio no se improvisa: se estructura en 4 dimensiones estratégicas para transformar La Brea.',
    messageOrCopy: 'Un resumen muy visual de las 4 dimensiones del plan (Social, Económica, Ambiental, Institucional). Promover que pidan el PDF por mensaje directo (DM).',
    contentCopy: `Nuestra Visión para La Brea–Negritos 2027–2030 📘🏛️

No venimos con ocurrencias de último minuto. Nuestro Plan de Gobierno está construido sobre 4 dimensiones técnicas sólidas:

1️⃣ Dimensión Social: Agua continua, posta médica equipada y apoyo integral a la niñez y adulto mayor.
2️⃣ Dimensión Económica: Modernización de la caleta pesquera, programa "Emprende Mujer" y turismo ("Negritos es Chévere").
3️⃣ Dimensión Ambiental: Gestión de residuos, arborización y protección de nuestro litoral.
4️⃣ Dimensión Institucional: Municipio de puertas abiertas, trámites digitales y cero corrupción.

¿Quieres leer el documento completo con todas las propuestas detalladas? 

Comenta la palabra "PLAN" y te enviamos el PDF directo a tu buzón de mensajes.

#PlanDeGobierno #Vision2027_2030 #LaBreaNegritos #YasserArámbulo #PropuestasClaras`,
    carouselSlides: [
      'PORTADA: Nuestra Visión 2027–2030 para La Brea–Negritos (Yasser Arámbulo • APP)',
      'LÁMINA 1: DIMENSIÓN SOCIAL — Agua potable, posta médica equipada, educación técnica y apoyo social.',
      'LÁMINA 2: DIMENSIÓN ECONÓMICA — Reactivación de la pesca artesanal, Casa del Pescador y Emprende Mujer.',
      'LÁMINA 3: DIMENSIÓN AMBIENTAL — Limpieza pública moderna, protección de playas y ordenamiento territorial.',
      'LÁMINA 4: DIMENSIÓN INSTITUCIONAL — Rendición de cuentas periódica, gobierno digital y cero corrupción.',
      'CIERRE: ¿Quieres leer el Plan completo? Comenta "PLAN" y te enviamos el PDF por DM.'
    ],
    question: '¿Cuál de las 4 dimensiones consideras más urgente para tu sector?',
    callToAction: 'Escribe "PLAN" en los comentarios y recibe el archivo digital en PDF de inmediato.',
    interactiveDetails: 'Configuración ManyChat: Al recibir el comentario "PLAN", enviar automáticamente el PDF del Plan de Gobierno al Messenger o Instagram Direct del usuario.',
    tags: ['Plan de Gobierno', 'Dimensiones', 'Carrusel', 'Propuestas', 'ManyChat'],
    platforms: ['Instagram', 'Facebook']
  },

  // SÁBADO 29
  {
    id: 'post-29',
    month: 'agosto',
    date: '2026-08-29',
    dayName: 'SÁBADO 29 DE AGOSTO',
    dayShort: 'Sáb 29',
    phase: 'fase1',
    title: 'El emprendimiento local es el motor de La Brea',
    format: 'Video Reel (En la calle)',
    pillar: 'Yasser 4: El Líder Territorial',
    productionStyle: 'Video dinámico con sonido ambiente, interacción espontánea con comerciantes y ritmo festivo',
    visualScript: 'Yasser recorriendo el mercado municipal y comercios de Negritos un sábado por la mañana. Saluda a las vendedoras de abarrotes, compra fruta, conversa con emprendedores locales y comparte un momento de risas con los vecinos.',
    hook: 'Detrás de cada bodega, puesto de mercado o negocio en Negritos, hay una familia valiente que saca adelante al distrito.',
    messageOrCopy: 'Yasser en un comercio local o mercado de Negritos. Comprando algo, saludando y mostrando el dinamismo comercial. Resalta que el emprendimiento es el verdadero motor económico.',
    contentCopy: `El emprendimiento de nuestra gente es el verdadero motor de La Brea–Negritos 🛒💪

Hoy estuvimos en el mercado y en los comercios locales conversando con nuestros vecinos emprendedores. Hombres y mujeres que desde las 5 de la mañana levantan sus negocios con puro esfuerzo y sacrificio.

Desde la municipalidad seremos sus principales aliados: facilitando licencias, capacitaciones, ferias productivas y el programa "Emprende Mujer Negriteña".

Cuando el comercio local crece, todo Negritos progresa. ¡Consume local, apoya a tu vecino!

#EmprendimientoLocal #MercadoNegritos #ConsumeLocal #YasserArámbulo #SiempreConLaGente`,
    question: '¿Tienes un emprendimiento en Negritos? Déjalo en los comentarios para etiquetarte y apoyarte.',
    callToAction: 'Menciona el nombre de tu negocio o el de tu vecino emprendedor favorito.',
    interactiveDetails: 'El equipo de community managers responderá y compartirá en stories a los emprendimientos locales mencionados.',
    tags: ['Mercado', 'Emprendedores', 'Economía Local', 'Cercanía', 'Yasser 4'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // DOMINGO 30
  {
    id: 'post-30',
    month: 'agosto',
    date: '2026-08-30',
    dayName: 'DOMINGO 30 DE AGOSTO',
    dayShort: 'Dom 30',
    phase: 'fase1',
    title: 'Historias: ¿De qué tema del Plan quieres que hablemos primero?',
    format: 'Historias Interactivas',
    pillar: 'Interacción',
    productionStyle: 'Secuencia de stories enérgicas con caja de votación múltiple y cuenta regresiva hacia el 1 de septiembre',
    visualScript: 'Yasser en video vertical breve anunciando con entusiasmo que mañana inicia la Fase de Propuestas de Setiembre. Inserta sticker de encuesta de 4 opciones: Agua, Salud, Seguridad, Turismo.',
    hook: 'Mañana arrancamos septiembre con todo. ¡Tú decides con qué propuesta empezamos!',
    messageOrCopy: '"Mañana arrancamos septiembre con todo. ¿De qué tema del Plan de Gobierno quieres que hablemos primero?" (Opciones: Agua, Salud, Seguridad, Turismo).',
    contentCopy: `📱 SECUENCIA DE STORIES (DOMINGO 30 DE AGOSTO - EXPECTATIVA SETIEMBRE):

👉 Story 1: Video de Yasser: "¡Amigos de La Brea! Cerramos un agosto increíble recorriendo el distrito. A partir de mañana primero de septiembre iniciamos la fase de PROPUESTAS CONCRETAS."
👉 Story 2 (Sticker de votación de 4 opciones):
   ¿De qué tema del Plan de Gobierno quieres que hablemos primero este 1 de septiembre?
   🔘 1. Agua y Saneamiento continuo
   🔘 2. Posta médica y Salud 24/7
   🔘 3. Seguridad ciudadana y serenazgo
   🔘 4. Turismo, pesca y empleo juvenil
👉 Story 3: Cuenta regresiva para el lanzamiento de la serie de propuestas.`,
    question: '¿De qué tema del Plan de Gobierno quieres que hablemos primero este 1 de septiembre?',
    callToAction: 'Vota en nuestras historias para definir el tema del video de apertura de septiembre.',
    interactiveDetails: 'La opción ganadora determinará el tema exacto del video reel del 1 de septiembre.',
    tags: ['Expectativa', 'Septiembre', 'Votación', 'Democracia Digital', 'Interacción'],
    platforms: ['Instagram Stories', 'Facebook Stories']
  },

  // LUNES 31
  {
    id: 'post-31',
    month: 'agosto',
    date: '2026-08-31',
    dayName: 'LUNES 31 DE AGOSTO',
    dayShort: 'Lun 31',
    phase: 'fase1',
    title: 'Llegó la hora de las propuestas',
    format: 'Video Reel (Expectativa)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Edición cinematográfica de alto impacto • Subtítulos estilo Hormozi • B-roll de proyectos y música épica',
    visualScript: 'Yasser en locación icónica mirando a cámara con determinación y energía. Anuncia que a partir de mañana primero de septiembre, se acabaron los diagnósticos: se presentará CÓMO se resolverán los problemas con expedientes, financiamiento y sustento técnico.',
    hook: 'Ya escuchamos, ya caminamos cada calle. Ahora llegó la hora de decirte con papeles en mano CÓMO lo vamos a solucionar.',
    messageOrCopy: 'Yasser anunciando enérgicamente que a partir de mañana, detallará CÓMO van a solucionar los problemas de La Brea, con expedientes y sustento. Cierra la Fase 1 y abre con fuerza la Fase 2.',
    contentCopy: `Llegó la hora de las propuestas: se acabaron las promesas al aire 🚀🇵🇪

Durante estos 15 días de agosto recorrimos La Brea, escuchamos a cada vecino y confirmamos lo que ya sabíamos: nuestro distrito no aguanta más improvisaciones.

A partir de mañana, 1 de septiembre, iniciamos la etapa más importante de esta campaña:
👉 Te explicaremos CÓMO solucionaremos el problema del agua.
👉 CÓMO modernizaremos la atención de salud.
👉 CÓMO generaremos empleo para las mujeres y pescadores con la Casa del Pescador.

Con expedientes técnicos, con sustento financiero y con la experiencia de saber gestionar.

¡Acompáñanos en este camino hacia el cambio real de La Brea–Negritos!

#LlegóLaHoraDeLasPropuestas #SeptiembreDeSoluciones #YasserArámbulo #SiempreConLaGente #AlianzaParaElProgreso`,
    question: '¿Estás listo para conocer las propuestas técnicas que transformarán Negritos?',
    callToAction: 'Comparte este video y prepárate para el inicio de nuestra serie técnica desde mañana.',
    interactiveDetails: 'Notificar por canal de difusión de WhatsApp a simpatizantes sobre el cronograma de videos de septiembre.',
    tags: ['Llegó La Hora', 'Septiembre', 'Propuestas', 'Expectativa', 'Yasser 2'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // ==========================================
  // PARRILLA DE SETIEMBRE (1 AL 30 DE SETIEMBRE)
  // FASE 2: EL GESTOR Y SUS PROPUESTAS
  // ==========================================

  // --- SEMANA 1: Lo más urgente (Agua, Saneamiento y Salud) ---
  // MARTES 1 DE SETIEMBRE
  {
    id: 'post-sep-01',
    month: 'setiembre',
    date: '2026-09-01',
    dayName: 'MARTES 1 DE SETIEMBRE',
    dayShort: 'Mar 1',
    weekNumber: 1,
    weekTitle: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
    phase: 'fase2',
    title: 'Episodio 1: La salud no espera',
    format: 'Video Reel (Serie)',
    pillar: 'Yasser y la Salud',
    productionStyle: 'Pantalla verde / Motion graphics con documentos oficiales • Subtítulos estilo Hormozi',
    visualScript: 'Yasser explicando con capturas de documentos de fondo (pantalla verde/motion graphics) cómo hizo seguimiento al Centro de Salud Talara. "Sé cómo presionar, sé qué puertas tocar."',
    hook: 'En La Brea la salud no puede seguir siendo una promesa que se posterga cada 4 años. Yo sé qué puertas tocar y cómo exigir resultados.',
    messageOrCopy: 'Yasser demostrando su capacidad de gestión en salud con antecedentes reales de fiscalización y seguimiento a expedientes de salud en Talara.',
    contentCopy: `Episodio 1: La salud no espera 🏥📋

Cuando se trata de la salud de nuestras familias en La Brea–Negritos, no hay espacio para la improvisación ni para aprender en el camino.

En este primer episodio de nuestra serie de gestión, te muestro con documentos en mano el seguimiento riguroso que realizamos al Centro de Salud:
✅ Sabemos cómo destrabar trámites en el Ministerio de Salud y la DIRESA.
✅ Sabemos cómo exigir equipamiento básico y médicos de turno permanente.
✅ Sabemos qué puertas tocar para que nuestro centro de salud atienda con dignidad.

La experiencia no se improvisa: se demuestra con gestión y fiscalización real.

¿Qué atención médica de emergencia crees que urge implementar primero en Negritos? Déjamelo en los comentarios 👇

#LaSaludNoEspera #YasserGestor #PlanLaBrea2030 #LaBreaNegritos #SiempreConLaGente #AlianzaParaElProgreso`,
    question: '¿Qué atención médica de emergencia crees que urge implementar primero en Negritos?',
    callToAction: 'Comenta tu opinión y comparte este primer episodio de la serie de propuestas.',
    interactiveDetails: 'Configurar respuesta automática ManyChat al comentar "SALUD" con la ficha técnica de la propuesta de salud 2027-2030.',
    tags: ['Salud', 'Serie Experiencia', 'Episodio 1', 'Yasser 2', 'Documentos'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MIÉRCOLES 2 DE SETIEMBRE
  {
    id: 'post-sep-02',
    month: 'setiembre',
    date: '2026-09-02',
    dayName: 'MIÉRCOLES 2 DE SETIEMBRE',
    dayShort: 'Mié 2',
    weekNumber: 1,
    weekTitle: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
    phase: 'fase2',
    title: 'Plan Integral: Agua y Saneamiento',
    format: 'Flyer (Carrusel IG/FB)',
    pillar: 'Propuesta',
    productionStyle: 'Carrusel de 5 láminas en alta definición con infografía limpia, mapas de sectores y colores institucionales APP',
    visualScript: 'Desglose visual y didáctico de la propuesta para mejorar la cobertura en sectores desatendidos. Gráficos limpios, renders y mapas con sectores priorizados.',
    hook: '¿Por qué en pleno siglo XXI tantas familias de Negritos siguen sufriendo por agua por horas? Aquí te presentamos el Plan Integral con sustento.',
    messageOrCopy: 'Desglose técnico y didáctico de la propuesta para resolver el desabastecimiento de agua y colapso de desagües en sectores vulnerables.',
    contentCopy: `Plan Integral: Agua y Saneamiento para La Brea–Negritos 💧🚰

Tener agua continua y un sistema de desagüe eficiente no es un lujo: es un derecho humano fundamental que durante décadas ha sido descuidado.

Nuestro Plan de Gobierno 2027–2030 contempla 3 ejes técnicos inmediatos:
1️⃣ Renovación de redes matrices de agua potable en sectores con tuberías obsoletas.
2️⃣ Ampliación de reservorios y sectorización para garantizar presión uniforme y más horas de servicio.
3️⃣ Mantenimiento preventivo integral y modernización de estaciones de bombeo para evitar colapsos de desagües.

Financiamiento proyectado mediante convenios con el Ministerio de Vivienda, Construcción y Saneamiento (MVCS) y Canon Petrolero.

Desliza para ver el mapa de intervención por sectores 👉

#AguaParaTodos #SaneamientoDigno #PropuestaTecnica #YasserArámbulo #Plan2030 #LaBreaNegritos`,
    question: '¿En tu barrio a qué hora y cuántos días a la semana llega el agua?',
    callToAction: 'Desliza las láminas y guárdalas para conocer el cronograma de intervención técnica.',
    carouselSlides: [
      'Lámina 1: Portada - Plan Integral: Agua y Saneamiento para Negritos',
      'Lámina 2: Diagnóstico técnico y sectores críticos de desabastecimiento',
      'Lámina 3: Proyecto de ampliación de reservorios y sectorización de presión',
      'Lámina 4: Renovación de colectores y alcantarillado sin más aniegos',
      'Lámina 5: Financiamiento seguro: Convenio MVCS + Canon distrital'
    ],
    tags: ['Agua', 'Saneamiento', 'Propuesta', 'Carrusel', 'Plan 2030'],
    platforms: ['Instagram', 'Facebook']
  },

  // JUEVES 3 DE SETIEMBRE
  {
    id: 'post-sep-03',
    month: 'setiembre',
    date: '2026-09-03',
    dayName: 'JUEVES 3 DE SETIEMBRE',
    dayShort: 'Jue 3',
    weekNumber: 1,
    weekTitle: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
    phase: 'fase2',
    title: '¿Por qué colapsan los desagües en Negritos?',
    format: 'Video Educativo',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Pizarra explicativa / Diagrama digital animado • Tono didáctico y técnico pero fácil de entender',
    visualScript: 'Yasser frente a una pizarra o usando recursos gráficos explicando el problema técnico y, sobre todo, la solución que proponen al 2030.',
    hook: 'Te has preguntado: ¿Por qué cada verano o cada temporada de bombeo colapsan los desagües en nuestras esquinas? Te lo explico en 60 segundos.',
    messageOrCopy: 'Explicación didáctica del origen técnico del problema y la solución estructural de ingeniería que se ejecutará en la gestión 2027-2030.',
    contentCopy: `¿Por qué colapsan los desagües en Negritos y cómo lo vamos a solucionar? 🛠️📉

El problema del alcantarillado en nuestro distrito tiene causas claras:
❌ Tuberías con más de 30 años que ya cumplieron su vida útil.
❌ Falta de pendientes hidráulicas y sedimentación por arenas.
❌ Estaciones de bombeo sin mantenimiento electromecánico periódico.

La solución que ejecutaremos no son parches temporales:
✅ Reemplazo de colectores principales por tubería de polietileno de alta densidad (HDPE).
✅ Plan de mantenimiento preventivo con hidrojet semestral.
✅ Gestión directa ante EPS Grau y OTASS para supervisión técnica constante.

¡Las soluciones técnicas bien explicadas generan confianza!

#ElGestor #DesagüesNegritos #SolucionesReales #YasserArámbulo #InfraestructuraDigna #SiempreConLaGente`,
    question: '¿Qué calle o esquina de tu sector sufre más por aniegos en Negritos?',
    callToAction: 'Etiqueta a tu vecino para que conozca la explicación técnica y nuestra propuesta.',
    tags: ['Video Educativo', 'Desagües', 'Infraestructura', 'Yasser 2', 'Explicación'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // VIERNES 4 DE SETIEMBRE
  {
    id: 'post-sep-04',
    month: 'setiembre',
    date: '2026-09-04',
    dayName: 'VIERNES 4 DE SETIEMBRE',
    dayShort: 'Vie 4',
    weekNumber: 1,
    weekTitle: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
    phase: 'fase2',
    title: 'Encuesta en Historias: Presión y horas de agua por sector',
    format: 'Historias Interactivas',
    pillar: 'Interacción',
    productionStyle: 'Stickers interactivos de encuesta (Por horas / Todo el día / Cisterna) + Cajita de reporte vecinal',
    visualScript: 'Encuestas rápidas: "¿En tu sector la presión del agua es constante o por horas?". Recopilación de datos y geolocalización de quejas.',
    hook: 'Queremos mapear en tiempo real la situación del agua en cada manzana de Negritos. ¡Vota aquí!',
    messageOrCopy: 'Historias de Instagram y Facebook para medir la percepción y data comunitaria sobre el servicio de agua potable.',
    contentCopy: `ENCUESTAS INTERACTIVAS: DIAGNÓSTICO COMUNITARIO DEL AGUA 📊💧

Historia 1: Sticker de encuesta: ¿En tu sector cómo recibes el agua?
🔘 Opción A: Solo 2 a 4 horas por día
🔘 Opción B: Día por medio o menos
🔘 Opción C: Compramos a cisterna

Historia 2: Cajita de preguntas: "Escribe tu barrio y la presión de agua que tienes hoy".
Historia 3: "Gracias por participar. Con esta data seguimos ajustando nuestro plan de contingencia inmediata para los primeros 100 días de gestión."

#HistoriasLaBrea #EncuestaVecinal #AguaParaNegritos #YasserArámbulo`,
    question: '¿Cuántas horas de agua tienes hoy en tu sector?',
    callToAction: 'Toca el sticker de encuesta en nuestras Stories y déjanos tu reporte.',
    interactiveDetails: 'Almacenar respuestas en una hoja de mapeo de necesidades prioritarias por sector de La Brea.',
    tags: ['Historias', 'Encuesta', 'Agua', 'Interacción', 'ManyChat'],
    platforms: ['Instagram Stories', 'Facebook Stories']
  },

  // SÁBADO 5 DE SETIEMBRE
  {
    id: 'post-sep-05',
    month: 'setiembre',
    date: '2026-09-05',
    dayName: 'SÁBADO 5 DE SETIEMBRE',
    dayShort: 'Sáb 5',
    weekNumber: 1,
    weekTitle: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
    phase: 'fase2',
    title: 'El problema lo vemos todos los días, la solución empieza en enero',
    format: 'Video Reel (Cámara en mano)',
    pillar: 'Yasser 4: El Líder Territorial',
    productionStyle: 'Cámara en mano, tomas dinámicas en exteriores, audio limpio con micrófono inalámbrico de solapa',
    visualScript: 'Caminata por un sector afectado por problemas de saneamiento. Conversación real con los vecinos. "El problema lo vemos todos los días, la solución empieza en enero."',
    hook: 'Nadie me tiene que contar cómo huele un desagüe colapsado o la angustia de esperar la cisterna. Lo camino con ustedes todos los días.',
    messageOrCopy: 'Caminata territorial en zona crítica de saneamiento dialogando francamente con vecinos sobre compromisos con plazos claros.',
    contentCopy: `El problema lo vemos todos los días, la solución empieza en enero 🚶‍♂️🤝

Caminando por los sectores que llevan años esperando atención municipal. Las familias me dicen: "Yasser, estamos cansados de promesas de campaña que se olvidan cuando llegan al sillón municipal".

Y tienen toda la razón del mundo. Por eso nosotros no venimos a prometer imposibles; venimos con proyectos técnicos listos y con la firmeza de iniciar gestiones desde el primer día:
📌 Diagnóstico situacional de redes críticas.
📌 Adquisición de motobombas e insumos de emergencia.
📌 Mesa de trabajo permanente con la población organizada.

¡El cambio no vendrá de quienes tuvieron su oportunidad y no hicieron nada; vendrá de la gente que ama a Negritos!

#CaminataVecinal #SaneamientoYa #YasserLíder #LaBreaNegritos #SiempreConLaGente #APP`,
    question: '¿Confías en que unidos podemos transformar los servicios básicos de Negritos?',
    callToAction: 'Déjame tu mensaje de aliento y comparte este video con tu familia.',
    tags: ['Cámara En Mano', 'Caminata', 'Saneamiento', 'Yasser 4', 'Territorio'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // DOMINGO 6 DE SETIEMBRE
  {
    id: 'post-sep-06',
    month: 'setiembre',
    date: '2026-09-06',
    dayName: 'DOMINGO 6 DE SETIEMBRE',
    dayShort: 'Dom 6',
    weekNumber: 1,
    weekTitle: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
    phase: 'fase2',
    title: 'Servicios básicos de calidad: un derecho, no un favor',
    format: 'Foto / Post Estático',
    pillar: 'Resumen Semanal',
    productionStyle: 'Diseño minimalista premium, tipografía sobria de alto contraste, fotografía de Yasser con firma manuscrita y logo APP',
    visualScript: 'Cita textual potente de Yasser sobre el derecho a los servicios básicos de calidad. Firma: "Siempre con la gente."',
    hook: 'Tener agua limpia y salud oportuna no es un favor político: es un derecho fundamental que vamos a hacer respetar.',
    messageOrCopy: 'Cierre reflexivo de la primera semana técnica enfocado en la dignidad humana y los servicios básicos como base del desarrollo.',
    contentCopy: `"El acceso al agua potable, a un alcantarillado digno y a una atención médica de calidad no es una dádiva ni un favor político que una autoridad le regala al pueblo: es un derecho sagrado que jamás debió ser postergado."

— Yasser Arámbulo
Candidato a la Alcaldía Distrital de La Brea–Negritos
Alianza para el Progreso (APP)

Cerramos una semana productiva donde presentamos propuestas claras y medibles en Salud y Saneamiento. Mañana lunes arrancamos con el bloque de Empleo, Pesca y Emprendimiento. ¡Que tengan un bendecido domingo en familia!

#CitaDeLaSemana #DerechosBasicos #DignidadParaLaBrea #YasserArámbulo #SiempreConLaGente #APP`,
    question: '¿Qué te parecieron nuestras propuestas de Salud y Agua de esta semana?',
    callToAction: 'Guarda esta publicación y acompáñanos este lunes en la semana de reactivación económica.',
    tags: ['Cita Oficial', 'Resumen Semanal', 'Dignidad', 'Post Estático', 'Yasser'],
    platforms: ['Instagram', 'Facebook']
  },

  // --- SEMANA 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer) ---
  // LUNES 7 DE SETIEMBRE
  {
    id: 'post-sep-07',
    month: 'setiembre',
    date: '2026-09-07',
    dayName: 'LUNES 7 DE SETIEMBRE',
    dayShort: 'Lun 7',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'Episodio 2: Orden y Techo Seguro',
    format: 'Video Reel (Serie)',
    pillar: 'Yasser y la Vivienda',
    productionStyle: 'Motion graphics con recortes de prensa y actas de inspección 2021 • Subtítulos estilo Hormozi',
    visualScript: 'Recordando la inspección de terrenos de 2021. Conectándolo con la propuesta de saneamiento físico legal y titulación para familias de La Brea.',
    hook: '¿Sabías que miles de familias en Negritos viven con la incertidumbre de no tener su título de propiedad? Ya lo fiscalizamos en 2021 y ahora lo haremos realidad.',
    messageOrCopy: 'Evidencia documental de su trabajo previo de inspección territorial y la propuesta de titulación masiva y saneamiento físico legal.',
    contentCopy: `Episodio 2: Orden y Techo Seguro 🏠📜

En 2021 recorrimos e inspeccionamos diversos sectores de nuestro distrito para fiscalizar el estado de los terrenos y la necesidad urgente de titulación formal.

Tener un título de propiedad significa:
✅ Seguridad jurídica para dejarles un patrimonio seguro a tus hijos.
✅ Acceso a programas del Estado como Techo Propio y créditos de mejoramiento.
✅ Posibilidad de conectar servicios definitivos de agua, luz y gas natural.

En nuestro Plan 2027–2030 crearemos la Oficina Especial de Saneamiento Físico Legal para trabajar de la mano con COFOPRI y la Municipalidad Provincial de Talara.

¡La formalización de tu hogar es nuestro compromiso!

#TechoSeguro #TítulosDePropiedad #SaneamientoLegal #YasserGestor #Plan2030 #LaBreaNegritos`,
    question: '¿Tu sector cuenta actualmente con título de propiedad inscrito en Sunarp?',
    callToAction: 'Comenta el nombre de tu asentamiento o sector para revisar su estado legal.',
    tags: ['Vivienda', 'Títulos', 'Episodio 2', 'Serie Experiencia', 'COFOPRI'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 8 DE SETIEMBRE
  {
    id: 'post-sep-08',
    month: 'setiembre',
    date: '2026-09-08',
    dayName: 'MARTES 8 DE SETIEMBRE',
    dayShort: 'Mar 8',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'Lanzamiento: Emprende Mujer Negriteña',
    format: 'Flyer Interactivo',
    pillar: 'Propuesta (Mujer)',
    productionStyle: 'Infografía en tonos magenta y azul APP, iconos modernos, estructura clara en 4 pasos',
    visualScript: 'Explicar el programa de capacitación, formalización y apoyo para emprendedoras locales con capital semilla y ferias de venta.',
    hook: 'Las mujeres de Negritos son el verdadero motor de la economía de sus hogares. ¡Lanzamos el programa Emprende Mujer Negriteña!',
    messageOrCopy: 'Presentación formal del programa de fortalecimiento económico para madres, jóvenes y emprendedoras de La Brea.',
    contentCopy: `¡Lanzamiento: Programa "Emprende Mujer Negriteña"! 👩‍💼💼✨

La mujer de La Brea–Negritos es trabajadora, perseverante y creativa: desde la gastronomía y repostería hasta el comercio y la artesanía marina.

Por eso creamos una propuesta hecha a su medida:
1️⃣ Talleres de Capacitación Técnica y Gestión de Negocios Digitales.
2️⃣ Asesoría gratuita para formalización y acceso a RUC sin complicaciones.
3️⃣ Fondo Concursable de Capital Semilla municipal con equipamiento básico.
4️⃣ Ferias Gastronómicas y Comerciales quincenales en zonas turísticas de Negritos.

Cuando una mujer emprende y progresa, toda su familia avanza.

#EmprendeMujer #MujeresNegriteñas #DesarrolloEconomico #YasserArámbulo #OportunidadesParaEllas #APP`,
    question: '¿Qué emprendimiento tienes o sueñas con iniciar en Negritos?',
    callToAction: 'Comparte este flyer con tus amigas emprendedoras y coméntanos tu rubro.',
    tags: ['Mujer', 'Emprendimiento', 'Capacitación', 'Capital Semilla', 'Propuesta'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 9 DE SETIEMBRE
  {
    id: 'post-sep-09',
    month: 'setiembre',
    date: '2026-09-09',
    dayName: 'MIÉRCOLES 9 DE SETIEMBRE',
    dayShort: 'Mié 9',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'El futuro de nuestra pesca: Puerto Menor San Pablo y Casa del Pescador',
    format: 'Video Promo (IA Renders)',
    pillar: 'Propuesta (Pesca)',
    productionStyle: 'Video con renders arquitectónicos hiperrealistas generados con IA (Sora/Veo) • Música cinematográfica inspiradora',
    visualScript: 'Mostrar cómo se proyecta el Puerto Menor San Pablo y la Casa del Pescador. Apoyarse fuertemente en renders de alta calidad para que el pescador visualice el proyecto.',
    hook: 'Así lucirá el desembarcadero pesquero y la Casa del Pescador que nuestros hermanos del mar merecen. ¡Míralo con tus propios ojos!',
    messageOrCopy: 'Video de impacto con visualización arquitectónica del Puerto Menor San Pablo y la Casa del Pescador para modernizar la pesca artesanal.',
    contentCopy: `El futuro de nuestra pesca artesanal: Puerto Menor San Pablo y la Casa del Pescador 🌊⚓🐟

La pesca es el alma, el orgullo y el sustento histórico de La Brea. Pero nuestros pescadores siguen desembarcando en condiciones precarias y sin un espacio digno de descanso y capacitación.

Nuestro proyecto emblemático incluye:
⚓ Modernización de la infraestructura de desembarque y cadena de frío con energía solar.
🏠 "La Casa del Pescador": un centro integral con comedor, área de descanso, botiquín médico y asesoría legal/gremial.
📑 Gestión ante PRODUCE y Fondepes para el reconocimiento y financiamiento del Puerto Menor San Pablo.

¡La pesca de Negritos merece respeto, tecnología y futuro!

#PescaArtesanal #PuertoSanPablo #CasaDelPescador #RendersIA #YasserArámbulo #Plan2030`,
    question: '¿Qué equipamiento consideras más urgente para la faena de los pescadores artesanales?',
    callToAction: 'Pescador negriteño: este proyecto es tuyo. ¡Mira el video y danos tu opinión!',
    tags: ['Pesca', 'Puerto Menor', 'Renders IA', 'Casa Del Pescador', 'Propuesta'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 10 DE SETIEMBRE
  {
    id: 'post-sep-10',
    month: 'setiembre',
    date: '2026-09-10',
    dayName: 'JUEVES 10 DE SETIEMBRE',
    dayShort: 'Jue 10',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'PROCOMPITE: Tu negocio apoyado por la Muni',
    format: 'Carrusel (Infografía)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Infografía paso a paso con montos, requisitos simplificados y ejemplos prácticos locales',
    visualScript: 'Explicar de forma hiper-didáctica cómo la municipalidad financiará planes de negocio de emprendedores locales mediante la Ley PROCOMPITE.',
    hook: '¿Sabías que por ley la Municipalidad puede cofinanciar tu negocio con dinero no reembolsable? Te explico qué es PROCOMPITE.',
    messageOrCopy: 'Guía práctica para entender cómo se destinará hasta el 10% del presupuesto de inversiones a cofinanciar cadenas productivas locales.',
    contentCopy: `PROCOMPITE: La Muni financiará tu negocio sin que tengas que devolver el dinero 📈💰🏪

Muchas autoridades no lo aplican por desconocimiento o desinterés, pero la Ley PROCOMPITE permite a las municipalidades destinar presupuesto a apoyar a los emprendedores locales:

¿Cómo funciona en nuestra gestión?
1️⃣ Lanzamos fondos concursables anuales para cadenas de pesca, gastronomía, turismo y servicios.
2️⃣ La Muni financia maquinaria, equipos, tecnología e insumos (fondos no reembolsables).
3️⃣ Los beneficiarios son asociaciones de pescadores, comedores, talleres y pequeñas empresas locales.

¡Basta de trabas municipales! Seremos aliados del que trabaja y genera empleo en Negritos.

#PROCOMPITE #FinanciamientoMunicipal #EmprendedoresNegritos #YasserGestor #SiempreConLaGente`,
    question: '¿Tu rubro podría participar en un fondo concursable de PROCOMPITE?',
    callToAction: 'Guarda esta infografía para postular cuando activemos el primer concurso municipal.',
    carouselSlides: [
      'Lámina 1: ¿Qué es PROCOMPITE Municipal y a quién beneficia?',
      'Lámina 2: Cadenas productivas priorizadas: Pesca, Turismo y Gastronomía',
      'Lámina 3: Equipos y maquinarias que financiará la gestión 2027–2030',
      'Lámina 4: Requisitos sencillos para asociaciones y emprendedores de La Brea',
      'Lámina 5: Compromiso Yasser: Fondos anuales transparentes y auditados'
    ],
    tags: ['PROCOMPITE', 'Gestor', 'Financiamiento', 'Economía Local', 'Carrusel'],
    platforms: ['Instagram', 'Facebook']
  },

  // VIERNES 11 DE SETIEMBRE
  {
    id: 'post-sep-11',
    month: 'setiembre',
    date: '2026-09-11',
    dayName: 'VIERNES 11 DE SETIEMBRE',
    dayShort: 'Vie 11',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'Impulsando la economía local: La voz de nuestro equipo',
    format: 'Video Entrevista',
    pillar: 'El Equipo',
    productionStyle: 'Entrevista dinámica en 2 cámaras en una bodega o taller local • Subtítulos claros y B-roll del comercio de Negritos',
    visualScript: 'Un regidor enfocado en desarrollo económico hablando sobre el potencial de los pequeños negocios en Negritos.',
    hook: 'En nuestro equipo no hay improvisados: tenemos profesionales y vecinos que conocen el día a día del comerciante negriteño.',
    messageOrCopy: 'Presentación del perfil técnico de uno de los candidatos a regidores que liderará la comisión de desarrollo económico y comercial.',
    contentCopy: `El Equipo de APP: La voz del desarrollo económico local 🤝🎙️

Para transformar La Brea se necesita un alcalde con liderazgo y un concejo de regidores preparado, fiscalizador y comprometido con su gente.

Hoy te presentamos a parte de nuestro equipo de regidores, profesionales nacidos en esta tierra que entienden las dificultades de mantener una bodega, un puesto de mercado o una pequeña lancha:
"No seremos una municipalidad que clausure y persiga; seremos un gobierno local que formalice, capacite y promueva ferias para que el dinero circule en Negritos."

¡Un equipo listo para trabajar desde el primer día!

#EquipoAPP #RegidoresPreparados #EconomiaLocal #YasserAlcalde #LaBreaNegritos #SiempreConLaGente`,
    question: '¿Qué facilidades debería dar la municipalidad a las bodegas y pequeños negocios?',
    callToAction: 'Déjale un comentario de apoyo a nuestro equipo de regidores.',
    tags: ['Regidores', 'Equipo', 'Entrevista', 'Economía', 'Yasser 5'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // SÁBADO 12 DE SETIEMBRE
  {
    id: 'post-sep-12',
    month: 'setiembre',
    date: '2026-09-12',
    dayName: 'SÁBADO 12 DE SETIEMBRE',
    dayShort: 'Sáb 12',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'Sábado de trabajo y energía en el muelle pesquero',
    format: 'Reel (En el mercado/muelle)',
    pillar: 'Yasser 1: El Ciudadano',
    productionStyle: 'Tomas al amanecer, música costera enérgica, tomas naturales compartiendo con pescadores y comerciantes',
    visualScript: 'Yasser saludando temprano en el muelle pesquero o zonas comerciales. Dinamismo y energía de fin de semana.',
    hook: '5:30 AM en el muelle de Negritos. Aquí es donde se siente la verdadera fuerza y coraje de nuestra gente trabajadora.',
    messageOrCopy: 'Reel de cercanía humana en el muelle y mercado saludando a pescadores, fileteadores y vendedoras en su faena matutina.',
    contentCopy: `Sábado de trabajo temprano en el muelle pesquero de Negritos 🌅🐟💪

Mientras muchos duermen, nuestros pescadores artesanales ya están desembarcando el fruto de su esfuerzo en el mar. Y las comerciantes en el mercado ya tienen listos sus puestos para atender al pueblo.

Ver esta energía es lo que me motiva a seguir recorriendo cada rincón de La Brea:
Por ellos, por sus hijos y por un distrito que brinde oportunidades reales de crecimiento.

¡Buen fin de semana para todos los trabajadores de La Brea–Negritos!

#SábadoDeTrabajo #MuelleNegritos #GenteChambeadora #YasserCiudadano #SiempreConLaGente #APP`,
    question: '¿A qué hora empieza tu jornada de trabajo los fines de semana?',
    callToAction: 'Envía este video a ese amigo o familiar madrugador y chambeador de Negritos.',
    tags: ['Muelle', 'Amanecer', 'Pesca', 'Yasser 1', 'Cercanía'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // DOMINGO 13 DE SETIEMBRE
  {
    id: 'post-sep-13',
    month: 'setiembre',
    date: '2026-09-13',
    dayName: 'DOMINGO 13 DE SETIEMBRE',
    dayShort: 'Dom 13',
    weekNumber: 2,
    weekTitle: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Mujer)',
    phase: 'fase2',
    title: 'Descarga el Plan Económico y Productivo 2027–2030',
    format: 'Historias (Call to Action)',
    pillar: 'Interacción',
    productionStyle: 'Secuencia de 3 stories con enlaces de descarga directa en PDF y resumen en puntos clave',
    visualScript: 'Historias interactivas: "Descarga la sección económica de nuestro plan de gobierno" con enlace y preguntas.',
    hook: '¿Quieres leer con detalle cada cifra, proyecto y fuente de financiamiento de nuestro plan económico? Descárgalo aquí.',
    messageOrCopy: 'Llamado a la acción en stories para descargar el capítulo económico del Plan de Gobierno oficial de La Brea.',
    contentCopy: `DESCARGA GRATUITA: CAPÍTULO ECONÓMICO Y PRODUCTIVO 2027–2030 📱📥

Historia 1: "La transparencia es con hechos: aquí no hay secretos ni proyectos improvisados."
Historia 2: Sticker de Enlace directo: "Descargar PDF: Plan Económico (Pesca, PROCOMPITE, Turismo y Empleo)".
Historia 3: Cajita de preguntas: "¿Qué proyecto de nuestro plan económico te parece más urgente implementar?".

¡Comenta la palabra "PLAN" en cualquier publicación y te enviamos el PDF directo a tu WhatsApp o DM!

#PlanDeGobierno #DescargaGratis #PropuestasEconomicas #YasserArámbulo #LaBrea2030`,
    question: '¿Qué proyecto de nuestro plan económico te parece más urgente implementar?',
    callToAction: 'Desliza hacia arriba o pulsa el sticker de enlace en nuestras Stories para leer el PDF.',
    interactiveDetails: 'Flujo ManyChat activo: responder con PDF resumido al escribir "PLAN" por DM de Instagram o Facebook.',
    tags: ['Historias', 'Descarga', 'PDF', 'Plan Económico', 'Call to Action'],
    platforms: ['Instagram Stories', 'Facebook Stories']
  },

  // --- SEMANA 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente) ---
  // LUNES 14 DE SETIEMBRE
  {
    id: 'post-sep-14',
    month: 'setiembre',
    date: '2026-09-14',
    dayName: 'LUNES 14 DE SETIEMBRE',
    dayShort: 'Lun 14',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'Episodio 3: Nuestro mar es nuestro mayor tesoro',
    format: 'Video Reel (Serie)',
    pillar: 'Yasser y el Medio Ambiente',
    productionStyle: 'Tomas aéreas con dron del litoral y Punta Balcones • Archivo del Negritos Plástico Challenge • Subtítulos dinámicos',
    visualScript: 'Yasser en el mar. Rememorar el "Negritos Plástico Challenge". Hablar de la limpieza pública y gestión de residuos sólidos.',
    hook: 'Tenemos el punto más occidental de Sudamérica y un mar bendito, pero nuestras playas sufren por la falta de limpieza y cultura ambiental.',
    messageOrCopy: 'Yasser recordando iniciativas pasadas de voluntariado ambiental y detallando el plan municipal de gestión integral de residuos y protección costera.',
    contentCopy: `Episodio 3: Nuestro mar es nuestro mayor tesoro 🌊♻️🏖️

En años pasados lideramos con orgullo el "Negritos Plástico Challenge", convocando a decenas de jóvenes y vecinos para limpiar nuestras orillas y demostrar que el cambio empieza por uno mismo.

Ahora, desde la Municipalidad Distrital de La Brea, convertiremos esa iniciativa ciudadana en una política pública permanente:
✅ Modernización de la flota de recolección de basura con rutas y horarios fijos para todos los sectores.
✅ Instalación de puntos ecológicos y tachos diferenciados en todo el circuito de playas.
✅ Programa "Playas Limpias, Playas Seguras" con guardaparques y personal municipal capacitado.

¡Cuidar nuestro mar es cuidar la salud y el turismo de Negritos!

#MedioAmbiente #PlayasLimpias #NegritosSinPlastico #YasserGestor #Plan2030 #SiempreConLaGente`,
    question: '¿Te sumarías a nuestras jornadas de voluntariado ambiental en las playas de Negritos?',
    callToAction: 'Comenta "YO ME SUMO" para unirte a nuestra brigada ambiental de voluntarios.',
    tags: ['Medio Ambiente', 'Playas', 'Plástico Challenge', 'Episodio 3', 'Limpieza'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 15 DE SETIEMBRE
  {
    id: 'post-sep-15',
    month: 'setiembre',
    date: '2026-09-15',
    dayName: 'MARTES 15 DE SETIEMBRE',
    dayShort: 'Mar 15',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'Negritos es Chévere: Turismo que genera trabajo',
    format: 'Flyer / Carrusel',
    pillar: 'Propuesta (Turismo)',
    productionStyle: 'Fotografías de catálogo turístico de Punta Balcones, Salar y Bosque Petrificado con branding moderno de "Negritos es Chévere"',
    visualScript: 'Explicar la iniciativa de promoción turística. Poner en valor Punta Balcones, el Salar y el Bosque Petrificado.',
    hook: 'Negritos no tiene nada que envidiarle a ningún otro destino del norte. ¡Es momento de que el turismo traiga trabajo directo a nuestros vecinos!',
    messageOrCopy: 'Presentación del programa "Negritos es Chévere" para conectar los 3 grandes atractivos turísticos con circuitos gastronómicos y hoteleros.',
    contentCopy: `Iniciativa Turística: "Negritos es Chévere" 🌅🏖️🌵

La Brea–Negritos posee tesoros naturales únicos que el Perú y el mundo deben conocer:
📍 Punta Balcones: el punto más occidental de América del Sur y mirador de lobos marinos.
📍 El Bosque Petrificado: una joya geológica milenaria.
📍 El Salar de Negritos: un paisaje blanco impresionante ideal para el ecoturismo.

¿Cómo generaremos empleo con el turismo?
1️⃣ Creación del Circuito Turístico Municipal con señalización, miradores seguros e iluminación solar.
2️⃣ Ruta Gastronómica del Pescado Fresco articulando cevicherías y restaurantes locales.
3️⃣ Capacitación a mototaxistas y jóvenes como guías y anfitriones turísticos certificados.

¡Hagamos de Negritos un destino turístico de primer nivel!

#NegritosEsChévere #TurismoLaBrea #PuntaBalcones #BosquePetrificado #YasserPropone #APP`,
    question: '¿Cuál es tu rincón turístico favorito de Negritos para recomendar a los visitantes?',
    callToAction: 'Guarda y comparte este carrusel para promover el orgullo de nuestros atractivos turísticos.',
    carouselSlides: [
      'Lámina 1: Portada - Marca "Negritos es Chévere": Turismo y Empleo',
      'Lámina 2: Circuito Punta Balcones: Miradores, senderos y lobos marinos',
      'Lámina 3: Ruta del Bosque Petrificado y El Salar: Conservación y Ecoturismo',
      'Lámina 4: Corredor Gastronómico y Comercial para negocios de Negritos',
      'Lámina 5: Capacitación a transportistas y jóvenes anfitriones turísticos'
    ],
    tags: ['Turismo', 'Negritos Es Chévere', 'Punta Balcones', 'Salar', 'Carrusel'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 16 DE SETIEMBRE
  {
    id: 'post-sep-16',
    month: 'setiembre',
    date: '2026-09-16',
    dayName: 'MIÉRCOLES 16 DE SETIEMBRE',
    dayShort: 'Mié 16',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'La Muni que apuesta por ti: Oportunidades para la juventud',
    format: 'Video Dinámico (Trend)',
    pillar: 'Propuesta (Juventud)',
    productionStyle: 'Edición rápida, cortes al ritmo de música juvenil en tendencia, textos en pantalla estilo Hormozi, renders y tomas dinámicas',
    visualScript: 'Edición ágil. Enumerar rápido: Academia preuniversitaria, becas, formación técnica y Polideportivo Negritos.',
    hook: '¿Joven negriteño y sientes que para estudiar o hacer deporte tienes que irte de tu distrito? Eso se acabó.',
    messageOrCopy: 'Video de alta energía enfocado en los 4 compromisos de juventud: Academia Municipal Preuniversitaria, Becas de Excelencia, Carreras Técnicas y Polideportivo.',
    contentCopy: `La Muni que apuesta por ti: 4 Oportunidades Reales para los Jóvenes 🎓⚽⚡

Los jóvenes de La Brea–Negritos tienen talento de sobra, pero les han faltado oportunidades reales. Nuestro gobierno municipal será su principal aliado:

1️⃣ Academia Municipal Preuniversitaria 100% Gratuita (Ciclos Semestrales y de Verano).
2️⃣ Convenios con Senati, Sencico e institutos técnicos para certificar carreras cortas de rápida inserción laboral.
3️⃣ Programa de Becas Municipales al mérito académico y deportivo.
4️⃣ Construcción y modernización del Polideportivo Negritos con canchas de grass sintético, losas multideportivas e iluminación nocturna.

¡Porque el futuro de La Brea se construye invirtiendo hoy en su juventud!

#JuventudNegritos #AcademiaGratuita #PolideportivoNegritos #OportunidadesYa #YasserAlcalde #APP`,
    question: '¿Qué carrera técnica o taller te gustaría estudiar gratuitamente en Negritos?',
    callToAction: 'Etiqueta a tu amigo de promo para que conozca las oportunidades que traeremos.',
    tags: ['Juventud', 'Academia Pre', 'Deporte', 'Polideportivo', 'Trend'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 17 DE SETIEMBRE
  {
    id: 'post-sep-17',
    month: 'setiembre',
    date: '2026-09-17',
    dayName: 'JUEVES 17 DE SETIEMBRE',
    dayShort: 'Jue 17',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'Episodio 4: La Brea en el mapa del Perú',
    format: 'Video Reel (Serie)',
    pillar: 'Yasser y el Turismo',
    productionStyle: 'Motion graphics con acreditación del sello Safe Travels e imágenes del circuito turístico • Subtítulos destacados',
    visualScript: 'Mostrar su participación pasada relacionada con el sello Safe Travels. Conectar experiencia con visión de desarrollo turístico.',
    hook: 'Pocos recuerdan que logramos gestionar el reconocimiento de Safe Travels para el norte. Sabemos cómo posicionar a La Brea en el mapa turístico nacional.',
    messageOrCopy: 'Yasser mostrando su trayectoria en gestión turística y cómo aplicará esos estándares para atraer inversión y visitantes a La Brea.',
    contentCopy: `Episodio 4: La Brea en el mapa turístico del Perú 🗺️⭐🇵🇪

Para atraer turistas no basta con publicar fotos bonitas: se necesita gestión institucional, certificaciones oficiales de calidad y seguridad para los visitantes.

En mi trayectoria de servicio público gestionamos activamente iniciativas del sello internacional Safe Travels:
✅ Articulación con MINCETUR y DIRCETUR Piura.
✅ Protocolos de higiene y bioseguridad para hoteles y restaurantes.
✅ Inclusión de nuestros atractivos en los catálogos oficiales de PromPerú.

En 2027 pondremos a La Brea en el mapa turístico que merece, generando ingresos para transportistas, restaurantes, bodegas y guías locales.

¡Experiencia probada para poner a Negritos en lo más alto!

#SafeTravels #TurismoSostenible #Episodio4 #YasserGestor #LaBreaNegritos #Plan2030`,
    question: '¿Crees que el turismo puede convertirse en la segunda fuente de ingresos de La Brea?',
    callToAction: 'Comenta y comparte este capítulo para seguir difundiendo nuestra visión de desarrollo.',
    tags: ['Turismo', 'Safe Travels', 'Episodio 4', 'MINCETUR', 'Gestión'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // VIERNES 18 DE SETIEMBRE
  {
    id: 'post-sep-18',
    month: 'setiembre',
    date: '2026-09-18',
    dayName: 'VIERNES 18 DE SETIEMBRE',
    dayShort: 'Vie 18',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'Mi Negritos Limpio: Educación ambiental y reciclaje',
    format: 'Flyer Cuadrado',
    pillar: 'Educación Ambiental',
    productionStyle: 'Diseño educativo en formato 1:1, infografía clara con código de colores de reciclaje y consejos para el hogar',
    visualScript: '"Mi Negritos Limpio". Puntos clave sobre el reciclaje y protección del litoral que plantea la gestión.',
    hook: 'Un distrito limpio no es solo el que más se barre, sino el que más educamos y cuidamos entre todos. Conoce el plan "Mi Negritos Limpio".',
    messageOrCopy: 'Afiche educativo con los 4 pilares de segregación en la fuente, valorización de residuos y reciclaje con incentivos vecinales.',
    contentCopy: `Campaña Educativa: "Mi Negritos Limpio" ♻️🌱🧹

Mantener nuestras calles y playas limpias es un compromiso compartido entre la Municipalidad y la ciudadanía:

Nuestro plan distrital de limpieza pública contempla:
1️⃣ Rutas transparentes con horarios fijos de camiones compactadores por cada barrio.
2️⃣ Programa de Segregación en la Fuente: canje de material reciclable por incentivos y plantas ornamentales.
3️⃣ Talleres escolares de educación ambiental en todos los colegios de La Brea.
4️⃣ Sanciones severas y cámaras de fiscalización para quienes arrojen desmonte y basura en zonas protegidas.

¡La Brea limpia y ordenada es posible con orden y trabajo en equipo!

#MiNegritosLimpio #EducacionAmbiental #Reciclaje #CuidadoDelLitoral #YasserArámbulo #APP`,
    question: '¿Qué horario de recolección de basura te resultaría más cómodo en tu barrio?',
    callToAction: 'Guarda esta guía práctica y apliquemos el reciclaje en nuestros hogares.',
    tags: ['Medio Ambiente', 'Reciclaje', 'Limpieza', 'Educación', 'Flyer'],
    platforms: ['Instagram', 'Facebook']
  },

  // SÁBADO 19 DE SETIEMBRE
  {
    id: 'post-sep-19',
    month: 'setiembre',
    date: '2026-09-19',
    dayName: 'SÁBADO 19 DE SETIEMBRE',
    dayShort: 'Sáb 19',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'Yasser Responde: 3 preguntas directas sobre Turismo y Empleo',
    format: 'Live / Q&A Grabado',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Formato podcast / Q&A dinámico, pantalla dividida con el comentario del usuario y la respuesta técnica de Yasser',
    visualScript: 'Yasser respondiendo 3 preguntas directas de los ciudadanos sobre turismo y empleo joven recogidas de las redes sociales.',
    hook: 'Ustedes preguntan, nosotros respondemos sin libreto ni rodeos: Turismo, empleo juvenil y financiamiento municipal.',
    messageOrCopy: 'Video de respuestas directas y concretas a inquietudes reales de la población recogidas en comentarios y encuestas de la semana.',
    contentCopy: `YASSER RESPONDE: 3 Preguntas Clave sobre Turismo y Trabajo Joven 🎙️🗣️

En nuestras redes no borramos comentarios ni esquivamos temas difíciles. Hoy respondo 3 dudas de los vecinos:

1️⃣ Pregunta de Carlos M. (Sector Centro): "¿De dónde saldrá el presupuesto para el Polideportivo Negritos?"
👉 Respuesta: Vía canon de infraestructura deportiva y convenio cofinanciado con el IPD y Gobierno Regional.

2️⃣ Pregunta de Valeria S. (Barrio Alto): "¿Cómo nos garantizan que las becas municipales serán transparentes y no a dedo?"
👉 Respuesta: Concurso público con jurado autónomo y transmisión en vivo de los resultados.

3️⃣ Pregunta de Manuel P. (Caleta): "¿El circuito turístico llegará hasta la zona de pescadores?"
👉 Respuesta: Absolutamente sí, integrando el corredor gastronómico del pescado fresco.

¡Seguimos dialogando con transparencia!

#YasserResponde #TransparenciaTotal #PreguntasYRespuestas #Plan2030 #LaBreaNegritos #APP`,
    question: '¿Qué otra pregunta técnica te gustaría que responda Yasser en el próximo video?',
    callToAction: 'Déjame tu pregunta abajo y la responderé en la siguiente edición.',
    tags: ['Q&A', 'Respuestas', 'Transparencia', 'Turismo', 'Yasser 2'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // DOMINGO 20 DE SETIEMBRE
  {
    id: 'post-sep-20',
    month: 'setiembre',
    date: '2026-09-20',
    dayName: 'DOMINGO 20 DE SETIEMBRE',
    dayShort: 'Dom 20',
    weekNumber: 3,
    weekTitle: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
    phase: 'fase2',
    title: 'El legado que construiremos juntos para La Brea',
    format: 'Foto de Paisaje',
    pillar: 'Identidad',
    productionStyle: 'Fotografía profesional en hora dorada de un atardecer negriteño en Punta Balcones, colores cálidos, tipografía cuidada',
    visualScript: 'Foto espectacular de un atardecer en Negritos. Copy emocional sobre el legado que le dejaremos a las próximas generaciones.',
    hook: 'Cada puesta de sol en Negritos nos recuerda lo afortunados que somos de haber nacido en esta tierra única. Vale la pena luchar por su futuro.',
    messageOrCopy: 'Reflexión dominical emotiva sobre la identidad, el orgullo de pertenecer a La Brea y la responsabilidad de heredar un mejor distrito.',
    contentCopy: `El legado que construiremos juntos para las próximas generaciones 🌅🌊🕊️

Miren este atardecer en nuestro querido Negritos. No hay cielo más hermoso ni horizonte más inspirador en todo el Perú.

Esta tierra nos lo ha dado todo: aquí crecieron nuestros abuelos, aquí trabajan nuestros padres y aquí están soñando nuestros hijos. No podemos permitir que el desánimo o la resignación nos ganen.

La Brea no está condenada al olvido; está destinada a renacer con trabajo honesto, con orden y con gente que de verdad ame este suelo.

¡Feliz y bendecido domingo para toda la gran familia de La Brea–Negritos!

#OrgulloNegriteño #AtardecerNegritos #PuntaBalcones #IdentidadYFuturo #YasserArámbulo #SiempreConLaGente`,
    question: '¿Qué es lo que más te enorgullece de vivir en La Brea–Negritos?',
    callToAction: 'Dale like y comparte esta hermosa postal de nuestro distrito.',
    tags: ['Atardecer', 'Identidad', 'Punta Balcones', 'Orgullo', 'Domingo'],
    platforms: ['Instagram', 'Facebook']
  },

  // --- SEMANA 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna) ---
  // LUNES 21 DE SETIEMBRE
  {
    id: 'post-sep-21',
    month: 'setiembre',
    date: '2026-09-21',
    dayName: 'LUNES 21 DE SETIEMBRE',
    dayShort: 'Lun 21',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Episodio 5: Cuentas Claras y Fiscalización Firme',
    format: 'Video Reel (Serie)',
    pillar: 'Yasser y la Fiscalización',
    productionStyle: 'Motion graphics con actas de comisiones investigadoras 2022, tono firme y decidido • Subtítulos Hormozi',
    visualScript: 'Yasser hablando firme sobre su rol en comisiones investigadoras (2022). "La plata del pueblo se respeta, y yo sé cómo fiscalizarla".',
    hook: 'La plata del pueblo de Negritos es sagrada. Yo no vengo a aprender a cuidar los recursos: ya demostré cómo se fiscaliza con mano firme.',
    messageOrCopy: 'Yasser repasando con pruebas su historial de fiscalización y lucha contra la corrupción en comisiones investigadoras de la provincia.',
    contentCopy: `Episodio 5: Cuentas Claras y Fiscalización Firme ⚖️📂🛡️

Durante mi labor en comisiones investigadoras en 2022, demostramos que cuando hay voluntad y valentía no tiembla la mano para denunciar irregularidades y defender el dinero de los ciudadanos.

En nuestra gestión municipal 2027–2030 aplicaremos 3 principios innegociables:
1️⃣ Cero tolerancia a la corrupción: cada sol del canon y foncomun se invertirá en obras con calidad y sin sobrecostos.
2️⃣ Transmisión en vivo de todos los procesos de licitación pública de obras.
3️⃣ Puertas abiertas para la Contraloría General de la República y comités vecinales de vigilancia ciudadana.

¡Quien no la debe, nada teme! Gobernaremos con honestidad y transparencia total.

#CuentasClaras #FiscalizacionFirme #CeroCorrupcion #YasserGestor #Plan2030 #SiempreConLaGente`,
    question: '¿Consideras que todas las licitaciones municipales deberían transmitirse en vivo?',
    callToAction: 'Comenta y comparte si estás de acuerdo en que la plata de Negritos debe cuidarse con firmeza.',
    tags: ['Fiscalización', 'Cuentas Claras', 'Episodio 5', 'Transparencia', 'Yasser 3'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 22 DE SETIEMBRE
  {
    id: 'post-sep-22',
    month: 'setiembre',
    date: '2026-09-22',
    dayName: 'MARTES 22 DE SETIEMBRE',
    dayShort: 'Mar 22',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Un distrito donde caminemos en paz: Plan Seguridad 2030',
    format: 'Carrusel IG/FB',
    pillar: 'Propuesta (Seguridad)',
    productionStyle: 'Infografía táctica con mapa de patrullaje integrado, iconos de tecnología y cámaras de videovigilancia',
    visualScript: 'Prevención vecinal, serenazgo capacitado, Puestos de Auxilio Rápido (PAR) y tecnología con cámaras conectadas para la seguridad.',
    hook: 'Queremos que nuestros hijos jueguen en los parques y caminen de noche por Negritos sin miedo. Te presentamos el Plan de Seguridad Integral.',
    messageOrCopy: 'Desglose del plan preventivo y disuasivo de seguridad ciudadana articulado con la PNP, Serenazgo y Juntas Vecinales.',
    contentCopy: `Plan Integral de Seguridad Ciudadana: "Negritos Seguro y en Paz" 👮‍♂️🚨📹

La seguridad de nuestras familias no se logra con discursos, sino con equipamiento, patrullaje constante y trabajo coordinado con la Policía Nacional:

Nuestras 4 acciones de impacto:
1️⃣ Puestos de Auxilio Rápido (PAR) descentralizados en puntos estratégicos de ingreso y sectores altos.
2️⃣ Central de Monitoreo y Cámaras de Videovigilancia con fibra óptica e inteligencia artificial para detección de placas.
3️⃣ Patrullaje Integrado 24/7 entre Serenazgo y la Policía Nacional con camionetas y motos en óptimo estado.
4️⃣ Fortalecimiento y equipamiento con chalecos y radios a las Juntas Vecinales de Seguridad Ciudadana.

¡Recuperaremos la tranquilidad de nuestras calles!

#SeguridadCiudadana #NegritosSeguro #PlanDeSeguridad #SerenazgoPatrullaje #YasserArámbulo #APP`,
    question: '¿En qué zona o parque de Negritos consideras más urgente instalar una cámara de seguridad?',
    callToAction: 'Desliza las láminas y guárdalas para conocer el mapa de seguridad.',
    carouselSlides: [
      'Lámina 1: Portada - Plan "Negritos Seguro y en Paz" 2027–2030',
      'Lámina 2: Central de Videovigilancia y cámaras inteligentes',
      'Lámina 3: Puestos de Auxilio Rápido (PAR) en sectores priorizados',
      'Lámina 4: Patrullaje integrado PNP + Serenazgo 24 horas',
      'Lámina 5: Equipamiento y apoyo logístico a Juntas Vecinales'
    ],
    tags: ['Seguridad', 'Serenazgo', 'Cámaras', 'Juntas Vecinales', 'Carrusel'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 23 DE SETIEMBRE
  {
    id: 'post-sep-23',
    month: 'setiembre',
    date: '2026-09-23',
    dayName: 'MIÉRCOLES 23 DE SETIEMBRE',
    dayShort: 'Mié 23',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Adiós al papeleo infinito: Municipalidad Digital',
    format: 'Video Dinámico',
    pillar: 'Propuesta Institucional',
    productionStyle: 'Tomas en ventanillas de atención + demostración en smartphone de trámites en línea y mesa de partes digital',
    visualScript: 'Yasser explicando el plan de "Gobierno Digital" y la modernización de la atención municipal sin colas ni demoras.',
    hook: '¿Cansado de perder horas enteras haciendo colas o esperando meses por un sello en la municipalidad? Se acabó la burocracia.',
    messageOrCopy: 'Video explicativo de la transformación digital de la municipalidad: mesa de partes virtual, pagos por internet y atención célere al vecino.',
    contentCopy: `Adiós al papeleo infinito: Llega la Municipalidad Digital a La Brea 📱⚡🏛️

El vecino de Negritos no tiene por qué perder media mañana haciendo colas interminables o esperando semanas para saber en qué estado está su expediente.

Implementaremos la transformación digital del municipio:
✅ Mesa de partes virtual 24/7 para ingresar solicitudes desde tu celular o computadora.
✅ Sistema de seguimiento en línea con código QR para saber en tiempo real en qué oficina está tu trámite.
✅ Pagos de tributos municipales a través de Yape, Plin y banca móvil.
✅ Ventanilla única de atención preferencial para adultos mayores, personas con discapacidad y madres gestantes.

¡Una municipalidad moderna, ágil y al servicio de la gente!

#MunicipalidadDigital #CeroBurocracia #GobiernoModerno #TramitesFaciles #YasserGestor #APP`,
    question: '¿Qué trámite municipal te ha resultado más engorroso o demorado de realizar?',
    callToAction: 'Comenta y comparte este video para modernizar juntos la gestión de La Brea.',
    tags: ['Gobierno Digital', 'Modernización', 'Trámites', 'Tecnología', 'Propuesta'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 24 DE SETIEMBRE
  {
    id: 'post-sep-24',
    month: 'setiembre',
    date: '2026-09-24',
    dayName: 'JUEVES 24 DE SETIEMBRE',
    dayShort: 'Jue 24',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Una municipalidad que rinde cuentas al pueblo',
    format: 'Flyer',
    pillar: 'Transparencia',
    productionStyle: 'Diseño solemne y formal con sellos de garantía, calendario cívico y compromiso de audiencias públicas',
    visualScript: 'Promesa de audiencias públicas y publicación de resultados de gestión en plazas públicas.',
    hook: 'Las autoridades deben rendir cuentas de cara al pueblo, no encerradas entre cuatro paredes. Este es nuestro compromiso.',
    messageOrCopy: 'Compromiso público formal de realizar Audiencias Públicas de Rendición de Cuentas cada 6 meses de forma descentralizada.',
    contentCopy: `Una Municipalidad que rinde cuentas de cara a su pueblo 📢📊🏛️

El dinero de La Brea no le pertenece al alcalde ni a los funcionarios: le pertenece a cada padre y madre de familia que trabaja en este distrito.

Por eso firmamos este compromiso inquebrantable de transparencia:
📌 2 Audiencias Públicas de Rendición de Cuentas al año en plazas públicas abiertas, transmitidas en vivo por internet.
📌 Publicación mensual del portal de gastos y avance presupuestal en la web municipal.
📌 Presupuesto Participativo real donde los dirigentes vecinales decidan qué obras son prioritarias en sus sectores.

¡La confianza se gana con honestidad y cuentas claras!

#RendicionDeCuentas #Transparencia #PresupuestoParticipativo #YasserArámbulo #CompromisoFirme #APP`,
    question: '¿Alguna vez has participado en una audiencia de rendición de cuentas en Negritos?',
    callToAction: 'Guarda esta publicación como constancia de nuestro compromiso cívico de gestión.',
    tags: ['Transparencia', 'Rendición De Cuentas', 'Presupuesto', 'Compromiso', 'Flyer'],
    platforms: ['Instagram', 'Facebook']
  },

  // VIERNES 25 DE SETIEMBRE
  {
    id: 'post-sep-25',
    month: 'setiembre',
    date: '2026-09-25',
    dayName: 'VIERNES 25 DE SETIEMBRE',
    dayShort: 'Vie 25',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Un mes de propuestas reales: ¡El cambio ya empezó!',
    format: 'Reel Resumen',
    pillar: 'Yasser 5: El Candidato (Equipo)',
    productionStyle: 'Edición cinematográfica acelerada, mejores momentos de caminatas, renders, explicaciones técnicas y música de campaña de APP',
    visualScript: 'Compilatorio con los mejores momentos y propuestas del mes de septiembre. Energía alta, música de campaña de APP de fondo.',
    hook: 'Durante todo septiembre demostramos con documentos, cifras y proyectos que somos la opción más preparada para gobernar La Brea.',
    messageOrCopy: 'Video resumen de alto impacto de todas las propuestas técnicas expuestas en septiembre, preparando el terreno para la victoria en octubre.',
    contentCopy: `Septiembre de Propuestas y Soluciones: ¡El cambio ya empezó! 🚀🇵🇪✨

Cerramos un mes histórico donde pusimos sobre la mesa las soluciones que La Brea–Negritos necesita:
💧 Agua continua y saneamiento integral.
🏥 Salud digna y equipamiento para emergencias.
⚓ Puerto Menor San Pablo y Casa del Pescador.
👩‍💼 Emprende Mujer Negriteña y PROCOMPITE.
🎓 Academia Municipal y Polideportivo Negritos.
🛡️ Seguridad ciudadana y transparencia total.

No somos promesas vacías; somos un equipo preparado y con vocación de servicio.

¡Gracias La Brea por su confianza y respaldo en cada sector!

#SeptiembreDeSoluciones #PropuestasReales #YasserAlcalde #LaBreaNegritos #SiempreConLaGente #AlianzaParaElProgreso`,
    question: '¿Cuál de todas las propuestas de este mes es la más importante para tu familia?',
    callToAction: 'Comparte este video resumen con tus amigos y familiares en Negritos.',
    tags: ['Resumen', 'Septiembre', 'Mejores Momentos', 'Yasser 5', 'APP'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // SÁBADO 26 DE SETIEMBRE
  {
    id: 'post-sep-26',
    month: 'setiembre',
    date: '2026-09-26',
    dayName: 'SÁBADO 26 DE SETIEMBRE',
    dayShort: 'Sáb 26',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Gran Caminata Vecinal: El pueblo respalda a Yasser',
    format: 'Evento / Caminata',
    pillar: 'Movilización',
    productionStyle: 'Transmisión en vivo + historias en tiempo real + galería de fotos de la multitud con banderolas de APP',
    visualScript: 'Cobertura en tiempo real (Historias y fotos) de una caminata o asamblea vecinal masiva en algún sector clave de La Brea.',
    hook: '¡Qué impresionante respaldo se siente en las calles de Negritos! La marea del cambio crece día a día.',
    messageOrCopy: 'Cobertura en vivo de la gran caminata distrital con participación masiva de simpatizantes, familias y regidores de APP.',
    contentCopy: `¡Impresionante multitud en la Gran Caminata Vecinal por La Brea! 🚶‍♂️🇵🇪🎉

Hoy las calles de nuestro querido distrito vibraron con la esperanza y la alegría de miles de vecinos que quieren un cambio responsable.

Ver el abrazo de las madres, el saludo fraterno de los pescadores y el entusiasmo de los jóvenes nos llena de energía para afrontar la recta final:
"No los defraudaré; gobernaré con la misma sencillez y cercanía con la que hoy camino junto a ustedes."

¡Gracias La Brea–Negritos por tanto cariño y confianza!

#GranCaminata #RespaldoPopular #MareaDeEsperanza #YasserArámbulo #SiempreConLaGente #APP`,
    question: '¿Estuviste presente en la caminata de hoy o la viste en nuestra transmisión?',
    callToAction: 'Etiquétate en nuestras fotos de la caminata y comparte tu foto con la bandera de APP.',
    tags: ['Caminata', 'Evento', 'Movilización', 'Multitud', 'La Brea'],
    platforms: ['Facebook', 'Instagram', 'TikTok']
  },

  // DOMINGO 27 DE SETIEMBRE
  {
    id: 'post-sep-27',
    month: 'setiembre',
    date: '2026-09-27',
    dayName: 'DOMINGO 27 DE SETIEMBRE',
    dayShort: 'Dom 27',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Cajita de preguntas: Rumbo a la recta final de las elecciones',
    format: 'Historias',
    pillar: 'Interacción',
    productionStyle: 'Stickers de preguntas con fondos dinámicos y llamada a la participación ciudadana previa a los comicios',
    visualScript: 'Cajita de preguntas: "¿Qué tema te gustaría que toquemos la próxima semana antes de las elecciones?"',
    hook: 'Estamos a pocos días de la gran decisión democrática de La Brea. ¿Qué tema o duda final quieres que abordemos?',
    messageOrCopy: 'Stories interactivas para abrir el micrófono a la comunidad y responder las últimas dudas ciudadanas antes de la semana de cierre.',
    contentCopy: `CAJITA DE PREGUNTAS: RECTA FINAL DE CAMPAÑA 🗳️❓📱

Historia 1: "Entramos a los últimos días antes de la elección distrital."
Historia 2: Cajita de preguntas: "¿Qué tema o duda final te gustaría que aclaremos esta semana antes de votar?".
Historia 3: "Estaremos respondiendo en vivo y en video todas sus inquietudes. ¡Tu opinión es nuestra guía!"

#PreguntasFinales #Elecciones2026 #LaBreaDecide #YasserArámbulo #Interaccion`,
    question: '¿Qué duda o tema final quieres que toquemos antes de las elecciones?',
    callToAction: 'Escribe tu pregunta en el sticker de nuestras Stories.',
    interactiveDetails: 'Recopilar preguntas frecuentes para preparar los videos de cierre de campaña de octubre.',
    tags: ['Historias', 'Cajita De Preguntas', 'Elecciones', 'Interacción', 'ManyChat'],
    platforms: ['Instagram Stories', 'Facebook Stories']
  },

  // LUNES 28 DE SETIEMBRE
  {
    id: 'post-sep-28',
    month: 'setiembre',
    date: '2026-09-28',
    dayName: 'LUNES 28 DE SETIEMBRE',
    dayShort: 'Lun 28',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Estamos listos: La Brea merece un nuevo amanecer',
    format: 'Video Emocional',
    pillar: 'Yasser 1 y 4',
    productionStyle: 'Producción cinematográfica, voz en off emotiva de Yasser, tomas de familias, miradores y calles de Negritos',
    visualScript: 'Un recorrido visual por todo lo que significa La Brea. Yasser haciendo el balance del mes y marcando el paso hacia la recta final de octubre.',
    hook: 'Hemos recorrido cada callejón, cada caleta y cada barrio. Hoy puedo decirles con la frente en alto: ¡Estamos listos para gobernar!',
    messageOrCopy: 'Video de balance y transición hacia la Fase 3 de octubre, con un mensaje de profunda convicción y esperanza para La Brea.',
    contentCopy: `Estamos listos: La Brea–Negritos merece un nuevo amanecer 🌅🇵🇪🕊️

Durante estas semanas no solo hemos presentado un plan de gobierno sustentado; hemos renovado el pacto de confianza y respeto con cada familia negriteña.

Sé de dónde vengo, sé a quiénes represento y sé perfectamente la enorme responsabilidad que asumiremos:
No venimos a improvisar ni a servirnos del cargo; venimos a trabajar con honestidad, con orden y con entrega absoluta por esta tierra bendita.

Entramos a la recta final con la fuerza de un pueblo unido. ¡Vamos con todo!

#EstamosListos #NuevoAmanecer #YasserAlcalde #LaBreaNegritos #SiempreConLaGente #AlianzaParaElProgreso`,
    question: '¿Estás listo para marcar la A de APP este 4 de octubre?',
    callToAction: 'Mira el video completo y compártelo con orgullo con tus vecinos de Negritos.',
    tags: ['Video Emocional', 'Estamos Listos', 'Balance', 'Yasser 1 y 4', 'Esperanza'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 29 DE SETIEMBRE
  {
    id: 'post-sep-29',
    month: 'setiembre',
    date: '2026-09-29',
    dayName: 'MARTES 29 DE SETIEMBRE',
    dayShort: 'Mar 29',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Un equipo preparado y con vocación para gobernar',
    format: 'Flyer',
    pillar: 'Equipo',
    productionStyle: 'Fotografía oficial de la plancha completa de regidores y alcalde con camisa institucional APP sobre fondo limpio y moderno',
    visualScript: 'Todo el equipo de regidores en una gráfica limpia. "Un equipo preparado para gobernar".',
    hook: 'Detrás de un gran líder hay un equipo íntegro y preparado. Conoce a los hombres y mujeres que gobernarán junto a Yasser.',
    messageOrCopy: 'Presentación formal de la lista completa de candidatos a regidores que integran la propuesta de Alianza para el Progreso en La Brea.',
    contentCopy: `Un equipo preparado y con verdadera vocación de servicio 🏛️👥🇵🇪

Para transformar La Brea se necesita un equipo sólido, donde se combine la experiencia profesional, la juventud innovadora y la representación genuina de nuestros sectores:

Nuestra plancha de regidores representa a:
⚓ La pesca artesanal y los trabajadores del mar.
👩‍💼 Las mujeres emprendedoras y madres de familia.
🎓 Los jóvenes profesionales y deportistas.
🏪 Los comerciantes y juntas vecinales organizadas.

¡Un equipo honesto que no se esconderá y que fiscalizará cada centavo del presupuesto distrital!

#EquipoAPP #PlanchaDeRegidores #GobernarConCapacidad #YasserAlcalde #LaBreaNegritos #MarcaLaA`,
    question: '¿Conoces a los regidores de nuestro equipo que representan a tu sector?',
    callToAction: 'Comparte este afiche para que todos conozcan a los futuros regidores de La Brea.',
    tags: ['Regidores', 'Equipo', 'Plancha Oficial', 'Flyer', 'APP'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 30 DE SETIEMBRE
  {
    id: 'post-sep-30',
    month: 'setiembre',
    date: '2026-09-30',
    dayName: 'MIÉRCOLES 30 DE SETIEMBRE',
    dayShort: 'Mié 30',
    weekNumber: 4,
    weekTitle: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
    phase: 'fase2',
    title: 'Faltan 4 días para decidir el futuro de La Brea',
    format: 'Expectativa Octubre',
    pillar: 'Cierre de Mes',
    productionStyle: 'Gráfica de conteo regresivo de alto impacto visual, tonos rojo y azul APP con tipografía contundente',
    visualScript: 'Gráfica o minivideo corto: "Faltan 4 días para decidir el futuro de La Brea. Siempre con la gente."',
    hook: 'Faltan solo 4 días para que La Brea–Negritos elija entre el continuismo del atraso o un gobierno con capacidad y corazón.',
    messageOrCopy: 'Cierre oficial del mes de septiembre y apertura formal de la semana electoral decisiva de octubre 2026.',
    contentCopy: `¡FALTAN SOLO 4 DÍAS PARA DECIDIR EL FUTURO DE LA BREA! ⏳🗳️🇵🇪

Este domingo 4 de octubre tenemos en nuestras manos el poder más valioso: la oportunidad de elegir a una autoridad que de verdad conozca nuestra realidad y trabaje incansablemente por su gente.

No permitas que otros decidan por ti.
Vota con memoria, vota con esperanza, vota por un cambio con sustento y experiencia.

¡Este 4 de octubre marca la A de Alianza para el Progreso! 🅰️✨

#ConteoRegresivo #Faltan4Días #ElCambioEsAhora #MarcaLaA #YasserAlcalde #SiempreConLaGente`,
    question: '¿Ya sabes en qué colegio te toca votar este domingo 4 de octubre?',
    callToAction: 'Guarda esta publicación y pasa la voz a tus familiares y vecinos: ¡Marca la A de APP!',
    tags: ['Conteo Regresivo', 'Elecciones', 'Cierre De Mes', 'Octubre', 'Marca La A'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook', 'Instagram Stories']
  }
];

export const SEPTEMBER_STRATEGY_MODULE = {
  title: 'Fase 2: El Gestor y sus Propuestas (1 al 30 de Setiembre)',
  badge: 'Credibilidad y Visión',
  coreQuestion: '¿Qué sabe hacer Yasser y qué propone para La Brea?',
  seriesName: 'Serie: "YASSER Y SU EXPERIENCIA"',
  keyFeatures: [
    {
      title: 'Serie "YASSER Y SU EXPERIENCIA"',
      description: 'Capítulos cortos y didácticos donde Yasser explica cómo destrabar expedientes, financiar obras y fiscalizar el gasto.',
      format: 'Motion graphics y pantallas verdes con documentos oficiales y ordenanzas reales.'
    },
    {
      title: 'Desglose del Plan de Gobierno 2027–2030',
      description: '4 Dimensiones explicadas sector por sector con costos estimados y fuentes de financiamiento (Canon, Foncomun, Ministerios).',
      format: 'Carruseles explicativos e infografías descargables.'
    },
    {
      title: '4 Propuestas Potentes Emblemáticas',
      description: '1. Agua y Saneamiento Continuo • 2. Emprende Mujer Negriteña • 3. Turismo ("Negritos es Chévere") • 4. La Casa del Pescador.',
      format: 'Reels territoriales en las zonas de impacto de cada proyecto.'
    },
    {
      title: 'Renders Visuales Hiperrealistas con IA (Sora / Veo)',
      description: 'Proyecciones futuristas de alta fidelidad del Polideportivo Negritos y el mejoramiento integral del litoral costero.',
      format: 'Videos con visualizaciones arquitectónicas animadas con IA.'
    },
    {
      title: 'Estrategia de Viralización por WhatsApp',
      description: 'Paquetes de piezas sintéticas y audios breves para cadenas orgánicas de vecinos organizados.',
      format: 'Packs de tarjetas optimizadas para mensajería instantánea.'
    }
  ]
};

export const OCTOBER_STRATEGY_MODULE = {
  title: 'Fase 3: El Voto de Confianza (1 al 4 de Octubre)',
  badge: 'Cierre Emocional y Movilización',
  corePremisa: '"La Brea necesita una autoridad que conozca su realidad, escuche a su gente y trabaje con responsabilidad."',
  keyFeatures: [
    {
      title: 'Compilatorios de los Mejores Momentos',
      description: 'Resumen cinematográfico de la caminata por todos los barrios, miradores y caletas de La Brea.',
      format: 'Video emotivo de alta producción.'
    },
    {
      title: 'Testimonios Vecinales Reales',
      description: 'Pescadores, madres de familia, jóvenes estudiantes y comerciantes explicando por qué confían en Yasser.',
      format: 'Reels cruzados de respaldo popular.'
    },
    {
      title: 'Defensa y Protección del Voto',
      description: 'Capacitación a personeros, directivas de mesa y llamado masivo a marcar la A de Alianza para el Progreso.',
      format: 'Infografía instructiva de votación en cédula.'
    }
  ]
};
