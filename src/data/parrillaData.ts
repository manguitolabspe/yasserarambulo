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
  coreNarrative: 'Destruir la idea de improvisación: Posicionar la preparación técnica, la experiencia comprobada y un Plan de Gobierno estructurado 2027–2030.',
  videoRule: 'Cero aburrimiento: Formatos ágiles, subtítulos dinámicos en todos los videos (estilo Alex Hormozi), pantallas verdes con documentos probatorios y flyers de alto impacto.'
};

export const CAMPAIGN_PHASES: CampaignPhase[] = [
  {
    id: 'fase1',
    month: 'agosto',
    name: 'Fase 1: El Profesional y el Plan',
    periodText: '17 al 31 de Agosto',
    slogan: 'La Brea no está para improvisar: Experiencia y Plan Técnico 2027–2030',
    objective: 'Destruir la idea de improvisación. Posicionar a Yasser como la única opción con la preparación técnica, la experiencia en gestión pública y un Plan de Gobierno estructurado para La Brea.',
    strategy: 'Yasser se posiciona con autoridad ejecutiva y solvencia técnica. No viene a improvisar ni a dar discursos vacíos; presenta soluciones viables, antecedentes de fiscalización y gestión documentada, y lidera un equipo de regidores con sólidas competencias técnicas.',
    keyPillars: [
      'Yasser 2: El Gestor',
      'Yasser 3: El Fiscalizador',
      'Propuestas Técnicas y Viables',
      'Equipo Técnico de Regidores'
    ],
    metas: [
      'Posicionar a Yasser como la opción técnica superior frente a cualquier improvisación electoral.',
      'Instalar en la agenda pública los ejes prioritarios del Plan de Gobierno 2027–2030 (Agua, Saneamiento, Pesca, Turismo, Seguridad y Salud).',
      'Generar prospectos y simpatizantes calificados mediante flujos automatizados de ManyChat para descarga del Plan oficial.'
    ],
    techAndTactics: [
      'Edición estilo Alex Hormozi (subtítulos dinámicos con palabras clave de autoridad técnica).',
      'Motion graphics, pizarras explicativas y pantallas verdes con expedientes y actas oficiales.',
      'Flujos ManyChat conectados a comentarios ("PLAN", "GESTIÓN", "PROCOMPITE") para captura de base de datos.'
    ]
  },
  {
    id: 'fase2',
    month: 'setiembre',
    name: 'Fase 2: El Gestor y sus Propuestas',
    periodText: '1 al 30 de Setiembre',
    slogan: '¿Qué sabe hacer Yasser y qué propone para el distrito?',
    objective: 'Credibilidad y Visión. Desplegar la profundidad técnica del Plan de Gobierno 2027–2030 con sustento presupuestal y de ingeniería.',
    strategy: 'Lanzar la serie "YASSER Y SU EXPERIENCIA" y desglosar el Plan de Gobierno 2027–2030. Utilizaremos pantallas verdes o motion graphics para mostrar la evidencia (documentos oficiales, ordenanzas) mientras él explica de forma didáctica. Aquí metemos las propuestas potentes: Agua y Saneamiento, Emprende Mujer Negriteña, Turismo ("Negritos es Chévere") y la Casa del Pescador.',
    keyPillars: [
      'Yasser 2: El Gestor',
      'Yasser 3: El Fiscalizador',
      'Propuestas Centrales del Plan 2027–2030',
      'Renders de Proyectos Emblemáticos'
    ],
    metas: [
      'Consolidar la percepción de que Yasser es el único candidato con capacidad de ejecución presupuestal.',
      'Fomentar debates constructivos en comentarios de redes y generar contenido viralizable por WhatsApp.',
      'Usar herramientas de generación de video con IA (como Sora o Veo) para crear renders hiperrealistas del Polideportivo Negritos y el Puerto Menor San Pablo.'
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
    slogan: 'La Brea necesita una autoridad con capacidad técnica, honestidad y liderazgo.',
    objective: 'Cierre de campaña, consolidación del voto consciente y movilización ciudadana.',
    strategy: 'Mensajes directos, contundentes y de confianza. Compilatorios del respaldo popular, testimonios de vecinos y profesionales respaldando el Plan de Yasser, y defensa irrestricta del voto en mesa bajo el lema: "La Brea necesita una autoridad con preparación técnica comprobada y vocación de servicio."',
    keyPillars: [
      'Cierre y Respaldo Popular',
      'Llamado al Voto Responsable por APP',
      'Defensa y Protección del Voto'
    ],
    metas: [
      'Maximizar el alcance del mensaje de victoria y liderazgo responsable en todo el distrito.',
      'Saturación positiva del mensaje central: "Siempre con la gente - Marca la A de APP".',
      'Movilización y coordinación total de personeros de mesa.'
    ],
    techAndTactics: [
      'Videos testimoniales cruzados (pescadores, ingenieros, madres, jóvenes y comerciantes).',
      'Compilatorio cinematográfico del respaldo en cada sector.',
      'Guía visual rápida de cómo marcar por la A de APP en la cédula.'
    ]
  }
];

export const CANDIDATE_PILLARS: CandidatePillarInfo[] = [
  {
    key: 'Yasser 1: El Ciudadano',
    number: 1,
    name: 'El Ciudadano y su Tierra',
    roleDescription: 'El profesional nacido en esta tierra, con profundo amor por Negritos, arraigo familiar y solvencia moral para liderar el cambio.',
    tone: 'Seguro, reflexivo, con orgullo por su identidad negriteña y visión de futuro.',
    visualTone: 'Locaciones icónicas de La Brea, miradores, puerto y espacios comunitarios con encuadre cinematográfico.',
    exampleTopics: ['Orgullo y destino de Negritos', 'Valores éticos en la función pública', 'La Brea no está para improvisar']
  },
  {
    key: 'Yasser 2: El Gestor',
    number: 2,
    name: 'El Gestor Público',
    roleDescription: 'El profesional con experiencia pública que sabe cómo funciona el Estado, destraba presupuestos y ejecuta proyectos viables.',
    tone: 'Didáctico, seguro, técnico pero accesible, resolutivo y contundente.',
    visualTone: 'Explicaciones dinámicas, mapas, motion graphics, expedientes técnicos, pantallas verdes con ordenanzas y documentos.',
    exampleTopics: ['"La Brea no está para improvisar"', 'Ingeniería de Agua y Saneamiento', 'PROCOMPITE y Empleo']
  },
  {
    key: 'Yasser 3: El Fiscalizador',
    number: 3,
    name: 'El Fiscalizador',
    roleDescription: 'La autoridad honesta y valiente que ha fiscalizado la gestión pública y defendido los recursos de Talara y La Brea con documentos probatorios.',
    tone: 'Firme, documentado, transparente e incorruptible.',
    visualTone: 'Infografías, documentos oficiales sellados, actas de comisiones investigadoras y pruebas documentales.',
    exampleTopics: ['Comisión Investigadora 2022', 'Cuentas Claras en Obras', 'Defensa Ambiental del Litoral']
  },
  {
    key: 'Yasser 4: El Líder Territorial',
    number: 4,
    name: 'El Líder Territorial',
    roleDescription: 'El líder que recorre el territorio en constante inspección técnica, dialogando con los sectores productivos y verificando necesidades in situ.',
    tone: 'Enérgico, resolutivo, en terreno, sin rodeos protocolares.',
    visualTone: 'Inspecciones técnicas en la caleta de pescadores, salar, zonas de aniegos y centros productivos.',
    exampleTopics: ['Inspección técnica de saneamiento', 'Puerto Menor San Pablo', 'Circuito Turístico Negritos es Chévere']
  },
  {
    key: 'Yasser 5: El Candidato (Equipo)',
    number: 5,
    name: 'El Equipo Técnico y Plancha',
    roleDescription: 'Un equipo de regidores profesionales con sólidas competencias técnicas, experiencia laboral y representación genuina de La Brea.',
    tone: 'Solvente, profesional, entusiasta y de alta capacidad ejecutiva.',
    visualTone: 'Presentaciones dinámicas, credenciales académicas, vocería técnica de regidores y propuestas sectoriales.',
    exampleTopics: ['Perfil técnico de nuestros regidores', 'Las 4 dimensiones del Plan de Gobierno', 'Gobernar desde el Día 1']
  },
  {
    key: 'Interacción',
    number: 6,
    name: 'Interacción y Transparencia',
    roleDescription: 'Canal directo de comunicación digital para responder dudas técnicas, publicar el Plan de Gobierno y recolectar propuestas.',
    tone: 'Transparente, directo, pedagógico y de alto valor informativo.',
    visualTone: 'Stickers de preguntas técnicas, enlaces de descarga directa de PDF, infografías descargables.',
    exampleTopics: ['Descarga el Plan de Gobierno 2027–2030', 'Preguntas técnicas a Yasser', 'Transparencia de propuestas']
  }
];

export const POSTS_DATA: PostItem[] = [
  // ==========================================
  // PARRILLA DE AGOSTO (17 AL 31 DE AGOSTO)
  // FASE 1: EL PROFESIONAL Y EL PLAN
  // Objetivo: Destruir la idea de improvisación y posicionar a Yasser con preparación técnica y Plan 2027–2030
  // ==========================================

  // LUNES 17 DE AGOSTO
  {
    id: 'post-17',
    month: 'agosto',
    date: '2026-08-17',
    dayName: 'LUNES 17 DE AGOSTO',
    dayShort: 'Lun 17',
    phase: 'fase1',
    title: 'La Brea no está para improvisar',
    format: 'Video Reel (Autoridad)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Entorno sobrio y profesional • Subtítulos estilo Hormozi • B-roll de gestiones y documentos sellados',
    visualScript: 'Yasser en un entorno profesional (oficina o locación sobria). Hablando a cámara con seguridad. B-roll de sus gestiones documentadas como Consejero Regional.',
    hook: 'Gobernar no es un juego de ensayo y error. La Brea no está para improvisar con el futuro de nuestras familias.',
    messageOrCopy: 'Presentación directa de su experiencia como Consejero Regional y su conocimiento técnico de la gestión pública. Se marca el tono firme de la campaña.',
    contentCopy: `La Brea no está para improvisar 🏛️📜⚖️

Durante años nuestro distrito ha sufrido las consecuencias de autoridades que llegaron a aprender en el camino, sin preparación técnica y sin un plan estructurado.

Soy Yasser Arámbulo. En mi trayectoria como Consejero Regional aprendí cómo funciona el Estado por dentro:
✅ Cómo se gestionan los presupuestos ante los ministerios.
✅ Cómo se destraban expedientes técnicos paralizados.
✅ Cómo se fiscaliza cada sol del pueblo para que no se pierda en la corrupción.

No vengo a experimentar con La Brea; vengo con un Plan de Gobierno 2027–2030 listo para ejecutarse desde el primer día.

¡La capacidad y la honestidad se demuestran con hechos!

#LaBreaNoImprovisa #YasserGestor #ExperienciaComprobada #Plan2030 #SiempreConLaGente #APP`,
    question: '¿Qué cualidad consideras más importante en quien lidere la alcaldía de La Brea?',
    callToAction: 'Comenta la palabra "GESTIÓN" y te enviamos la síntesis de nuestras credenciales por interno.',
    interactiveDetails: 'Flujo ManyChat activo: responder al comentario "GESTIÓN" enviando la hoja de vida resumida y credenciales de fiscalización.',
    tags: ['Autoridad', 'No Improvisar', 'Gestor', 'Consejero Regional', 'Lanzamiento'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 18 DE AGOSTO
  {
    id: 'post-18',
    month: 'agosto',
    date: '2026-08-18',
    dayName: 'MARTES 18 DE AGOSTO',
    dayShort: 'Mar 18',
    phase: 'fase1',
    title: 'Experiencia Pública Comprobada',
    format: 'Flyer (Infografía)',
    pillar: 'Credenciales',
    productionStyle: 'Diseño corporativo en azul APP y blanco, viñetas limpias con iconos de acreditación oficial',
    visualScript: 'Infografía con viñetas claras y corporativas con los hitos documentados de Yasser: seguimiento en salud, comisiones de fiscalización y gestión ambiental.',
    hook: 'Las credenciales públicas no se inventan con discursos: se demuestran con resultados y documentos oficiales.',
    messageOrCopy: 'Resumen gráfico de alta credibilidad con los 3 grandes hitos del candidato en la gestión pública regional y provincial.',
    contentCopy: `Experiencia Pública Comprobada al Servicio de La Brea 📊🏛️🇵🇪

Para transformar un distrito se necesita solvencia técnica y antecedentes intachables:

📌 1. SEGUIMIENTO RIGUROSO EN SALUD: Fiscalización y destrabe de expedientes para la infraestructura médica en la provincia de Talara.
📌 2. COMISIONES DE FISCALIZACIÓN: Liderazgo en comisiones investigadoras para proteger los fondos públicos de irregularidades.
📌 3. GESTIÓN Y DEFENSA AMBIENTAL: Impulso a iniciativas ecológicas como el Negritos Plástico Challenge y ordenanzas de preservación del litoral.

Un alcalde debe saber gestionar desde el primer minuto.

#ExperienciaComprobada #Credenciales #YasserArámbulo #SolvenciaTecnica #LaBreaNegritos #APP`,
    question: '¿Conocías estos antecedentes de gestión pública de Yasser Arámbulo?',
    callToAction: 'Guarda este post y compártelo para que más vecinos conozcan la experiencia del candidato.',
    tags: ['Infografía', 'Credenciales', 'Fiscalización', 'Salud', 'Medio Ambiente'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 19 DE AGOSTO
  {
    id: 'post-19',
    month: 'agosto',
    date: '2026-08-19',
    dayName: 'MIÉRCOLES 19 DE AGOSTO',
    dayShort: 'Mié 19',
    phase: 'fase1',
    title: 'El plan real para el Agua y Saneamiento',
    format: 'Video Pizarra / Motion Graphics',
    pillar: 'Propuesta Técnica',
    productionStyle: 'Pizarra explicativa digital • Animación 2D esquemática de presiones y reservorios • Cero política, 100% ingeniería',
    visualScript: 'Yasser usando un recurso gráfico (pantalla o animación) para explicar cómo, técnicamente, se ampliará la cobertura a sectores desatendidos.',
    hook: '¿Por qué el agua sigue llegando por horas a tantos sectores de Negritos? Te explico la ingeniería y la solución técnica en 60 segundos.',
    messageOrCopy: 'Explicación técnica y pedagógica: sectorización hidráulica, renovación de colectores principales y financiamiento con MVCS.',
    contentCopy: `El Plan Técnico para el Agua y Saneamiento en La Brea 💧🚰📉

El problema del agua en Negritos no se resuelve regalando bidones en campaña; se soluciona con ingeniería hidráulica y gestión presupuestal:

1️⃣ Sectorización de redes matrices para equilibrar presiones y evitar pérdidas en tuberías antiguas.
2️⃣ Renovación de colectores colapsados con tubería de alta densidad (HDPE) para terminar con los aniegos.
3️⃣ Convenio directo con el Ministerio de Vivienda y EPS Grau para supervisión de obras con plazos auditados.

Cero demagogia, 100% gestión técnica.

#AguaParaNegritos #SaneamientoTecnico #IngenieriaSanitaria #YasserGestor #Plan2030 #APP`,
    question: '¿Qué sector de Negritos sufre más por baja presión de agua?',
    callToAction: 'Etiqueta a tu vecino y comenta "AGUA" para enviarte el esquema técnico del proyecto.',
    interactiveDetails: 'ManyChat: al comentar "AGUA", enviar infografía técnica del plan de ampliación de cobertura.',
    tags: ['Agua', 'Saneamiento', 'Video Pizarra', 'Propuesta Técnica', 'Yasser 2'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 20 DE AGOSTO
  {
    id: 'post-20',
    month: 'agosto',
    date: '2026-08-20',
    dayName: 'JUEVES 20 DE AGOSTO',
    dayShort: 'Jue 20',
    phase: 'fase1',
    title: 'Plan de Desarrollo Económico: Turismo',
    format: 'Carrusel IG/FB',
    pillar: 'Propuesta (Turismo)',
    productionStyle: 'Infografía de alto impacto en carrusel de 5 láminas con imágenes de Punta Balcones, Salar y Bosque Petrificado',
    visualScript: 'Desglose del proyecto "Negritos es Chévere" y la formalización de atractivos turísticos para generar empleo directo.',
    hook: 'El turismo no es solo tomarse fotos bonitas: es empleo directo para mototaxistas, bodegas, restaurantes y artesanos negriteños.',
    messageOrCopy: 'Desglose estructurado de la marca distrital "Negritos es Chévere" y la formalización de circuitos turísticos con presupuesto asignado.',
    contentCopy: `Plan de Desarrollo Económico: Turismo que genera empleo real 🌅🏖️💼

La Brea tiene atractivos geográficos únicos en el Perú, pero necesitan puesta en valor y promoción formal:

📍 1. CIRCUITO PUNTA BALCONES: Señalización turística, miradores seguros y protección del santuario de lobos marinos.
📍 2. RUTA DEL BOSQUE PETRIFICADO Y EL SALAR: Corredor ecoturístico con guías locales certificados.
📍 3. RUTA GASTRONÓMICA DEL PESCADO FRESCO: Articulación de restaurantes, cevicherías y caleta.
📍 4. MARCA DISTRITAL "NEGRITOS ES CHÉVERE": Promoción en ferias de PromPerú y MINCETUR.

El turismo será un motor económico que deje dinero en los bolsillos de nuestra gente.

#NegritosEsChévere #TurismoYEmpleo #PuntaBalcones #DesarrolloEconomico #YasserPropone #APP`,
    carouselSlides: [
      'Lámina 1: Portada - Plan de Desarrollo Económico: Turismo y Empleo',
      'Lámina 2: Circuito Punta Balcones: Miradores, senderos y mirador de lobos',
      'Lámina 3: Ruta Bosque Petrificado y El Salar: Ecoturismo formalizado',
      'Lámina 4: Corredor Gastronómico y Comercial para negocios de Negritos',
      'Lámina 5: Capacitación a transportistas y jóvenes anfitriones turísticos'
    ],
    question: '¿Qué negocio o emprendimiento te gustaría abrir en el circuito turístico?',
    callToAction: 'Desliza las láminas y comparte esta visión de progreso para La Brea.',
    tags: ['Turismo', 'Negritos Es Chévere', 'Desarrollo Económico', 'Carrusel', 'Punta Balcones'],
    platforms: ['Instagram', 'Facebook']
  },

  // VIERNES 21 DE AGOSTO
  {
    id: 'post-21',
    month: 'agosto',
    date: '2026-08-21',
    dayName: 'VIERNES 21 DE AGOSTO',
    dayShort: 'Vie 21',
    phase: 'fase1',
    title: 'Gestión eficiente frente al mar',
    format: 'Video Reel (Inspección)',
    pillar: 'Yasser 3: El Fiscalizador',
    productionStyle: 'Tomas en exteriores con postura de inspección técnica, planos generales del litoral y archivo del Negritos Plástico Challenge',
    visualScript: 'Yasser en el litoral, en postura de inspección técnica, explicando el plan de limpieza pública, gestión de residuos y recordando su gestión ambiental previa.',
    hook: 'Estar en el litoral no es venir a mirar las olas; es fiscalizar cómo se gestionan los residuos y proteger nuestro mayor patrimonio natural.',
    messageOrCopy: 'Yasser mostrando experiencia previa en acción ecológica (Negritos Plástico Challenge) y detallando el plan municipal de gestión integral de residuos sólidos.',
    contentCopy: `Gestión Eficiente y Fiscalización Ambiental en Nuestro Litoral 🌊♻️🔍

Cuando organizamos el "Negritos Plástico Challenge" demostramos que la voluntad ciudadana puede mover montañas. Como alcalde, convertiremos esa iniciativa en una política pública obligatoria:

✅ Sistema de recolección diferenciada de residuos en todo el borde costero y caletas.
✅ Fiscalización estricta a empresas e industrias para que no contaminen nuestras playas.
✅ Convenios con organizaciones ambientales para reciclaje y valorización de plásticos marinos.

Un mar limpio es salud, pesca productiva y turismo sostenible.

#GestionAmbiental #FiscalizacionCostera #PlayasLimpias #NegritosPlasticoChallenge #YasserFiscalizador #APP`,
    question: '¿Apoyarías que se apliquen sanciones a quienes arrojen basura en nuestras playas?',
    callToAction: 'Comenta "PLAYAS" y súmate a nuestra red de brigadistas ambientales.',
    interactiveDetails: 'ManyChat: responder con formulario para unirse a la brigada ambiental distrital.',
    tags: ['Medio Ambiente', 'Inspección', 'Litoral', 'Fiscalizador', 'Yasser 3'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // SÁBADO 22 DE AGOSTO
  {
    id: 'post-22',
    month: 'agosto',
    date: '2026-08-22',
    dayName: 'SÁBADO 22 DE AGOSTO',
    dayShort: 'Sáb 22',
    phase: 'fase1',
    title: 'Visión 2027–2030: Gobierno Digital y Transparencia',
    format: 'Flyer (Cita de Autoridad)',
    pillar: 'Posicionamiento',
    productionStyle: 'Diseño minimalista de alto contraste, fotografía sobria de Yasser en tonos azul marino y tipografía de impacto con firma oficial',
    visualScript: 'Frase contundente sobre la necesidad de modernizar la administración municipal ("Gobierno Digital y Transparencia") firmada por Yasser Arámbulo.',
    hook: 'Una municipalidad que no se moderniza es una municipalidad que le roba tiempo y dignidad a sus ciudadanos.',
    messageOrCopy: 'Cita de autoridad sobre la modernización del Estado municipal, digitalización de trámites y cero burocracia.',
    contentCopy: `"Una municipalidad que no se moderniza es una municipalidad que le roba tiempo y dignidad a su gente. La Brea merece una gestión ágil, con trámites digitales, transparencia absoluta y cero burocracia."

— Yasser Arámbulo
Candidato a la Alcaldía Distrital de La Brea–Negritos
Alianza para el Progreso (APP)

En nuestra gestión 2027–2030 implementaremos la Mesa de Partes Virtual y el seguimiento de expedientes por QR para que ningún trámite quede encarpetado.

#Vision2030 #GobiernoDigital #TransparenciaMunicipal #CeroBurocracia #YasserAlcalde #APP`,
    question: '¿Qué trámite municipal consideras que debería ser 100% digital e inmediato?',
    callToAction: 'Guarda esta cita y compártela si exiges una municipalidad moderna.',
    tags: ['Cita Oficial', 'Visión 2030', 'Gobierno Digital', 'Transparencia', 'Flyer'],
    platforms: ['Instagram', 'Facebook']
  },

  // DOMINGO 23 DE AGOSTO
  {
    id: 'post-23',
    month: 'agosto',
    date: '2026-08-23',
    dayName: 'DOMINGO 23 DE AGOSTO',
    dayShort: 'Dom 23',
    phase: 'fase1',
    title: 'Un equipo de profesionales para La Brea',
    format: 'Video Dinámico',
    pillar: 'Equipo Técnico',
    productionStyle: 'Presentación ejecutiva dinámica, rótulos con grados académicos, profesiones y experiencia laboral de cada regidor',
    visualScript: 'Presentación de los regidores destacando exclusivamente sus competencias técnicas, académicas y trayectoria laboral comprobada.',
    hook: 'Detrás de un gran plan de gobierno no hay improvisados: hay ingenieros, educadores, administradores y líderes probados.',
    messageOrCopy: 'Demostración de fuerza técnica: cada candidato a regidor cuenta con un perfil profesional alineado a una comisión municipal clave.',
    contentCopy: `Un equipo técnico y profesional listo para gobernar La Brea 👥🏛️🇵🇪

El concejo municipal no es un adorno: es el órgano de fiscalización y normatividad distrital. Por eso nuestra lista está conformada por profesionales con experiencia:

🎓 Ingeniería y Proyectos: Para supervisar la calidad de las obras públicas.
💼 Economía y Administración: Para asegurar la eficiencia del gasto del canon.
📚 Educación y Desarrollo Social: Para liderar programas juveniles y culturales.
⚓ Sector Pesquero y Productivo: Voceros directos de la pesca artesanal y comercio.

Con este equipo, La Brea estará en manos preparadas desde el día uno.

#EquipoTecnico #RegidoresCapacitados #SinImprovisacion #YasserEquipo #LaBreaNegritos #APP`,
    question: '¿Qué perfil profesional consideras indispensable en un regidor fiscalizador?',
    callToAction: 'Comenta y deja tu respaldo a este equipo de profesionales negriteños.',
    tags: ['Equipo Técnico', 'Regidores', 'Competencias', 'Profesionales', 'Yasser 5'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // LUNES 24 DE AGOSTO
  {
    id: 'post-24',
    month: 'agosto',
    date: '2026-08-24',
    dayName: 'LUNES 24 DE AGOSTO',
    dayShort: 'Lun 24',
    phase: 'fase1',
    title: 'Cómo financiar los emprendimientos locales',
    format: 'Video Reel (Casos)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Pantalla dividida con casos de éxito de PROCOMPITE + gráficos explicativos de asignación presupuestal',
    visualScript: 'Explicación técnica y rápida de cómo se implementará la Ley PROCOMPITE y el programa "Emprende Mujer Negriteña" bajo su gestión.',
    hook: '¿Sabías que por ley la municipalidad puede otorgar capital semilla no reembolsable a emprendedores locales? Te explico cómo.',
    messageOrCopy: 'Yasser explicando la aplicación del 10% del presupuesto de inversiones para cofinanciar planes de negocio locales.',
    contentCopy: `Cómo reactivar la economía local con fondos de PROCOMPITE 📈🏪💰

Muchas autoridades no lo aplican por desconocimiento técnico, pero la Ley PROCOMPITE faculta a los gobiernos locales a destinar presupuesto directo para planes de negocio:

1️⃣ Fondo Concursable Anual Municipal para pesca, gastronomía, confección y turismo.
2️⃣ Financiamiento de maquinaria, equipos e insumos sin que tengas que devolver el dinero.
3️⃣ Programa especial "Emprende Mujer Negriteña" con asistencia técnica para formalización.

El dinero de La Brea debe circular y generar riqueza dentro de La Brea.

#PROCOMPITE #EmprendeMujer #EconomiaLocal #CapitalSemilla #YasserGestor #Plan2030`,
    question: '¿Qué tipo de maquinaria o equipamiento necesita tu emprendimiento para crecer?',
    callToAction: 'Comenta "PROCOMPITE" y entérate de las bases del programa que implementaremos.',
    interactiveDetails: 'ManyChat: enviar PDF informativo de cómo postular a fondos de cofinanciamiento municipal.',
    tags: ['PROCOMPITE', 'Emprendimiento', 'Economía', 'Emprende Mujer', 'Yasser 2'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // MARTES 25 DE AGOSTO
  {
    id: 'post-25',
    month: 'agosto',
    date: '2026-08-25',
    dayName: 'MARTES 25 DE AGOSTO',
    dayShort: 'Mar 25',
    phase: 'fase1',
    title: 'Seguridad Integral y Tecnológica',
    format: 'Flyer Cuadrado',
    pillar: 'Propuesta (Seguridad)',
    productionStyle: 'Gráfica táctica 1:1 con mapa distrital, iconos de Puestos de Auxilio Rápido (PAR) y cámaras inteligentes',
    visualScript: 'Puntos técnicos del plan: prevención vecinal, Puestos de Auxilio Rápido (PAR), videovigilancia con IA e infraestructura adecuada.',
    hook: 'La seguridad ciudadana no se improvisa con promesas: se garantiza con tecnología, patrullaje integrado y puestos descentralizados.',
    messageOrCopy: 'Detalle de los 4 ejes del Plan de Seguridad Integral y Tecnológica 2027–2030.',
    contentCopy: `Plan de Seguridad Integral y Tecnológica para La Brea–Negritos 🚨👮‍♂️📹

Vivir con tranquilidad y sin miedo es una condición básica para el desarrollo de nuestras familias:

📌 1. PUESTOS DE AUXILIO RÁPIDO (PAR): Módulos de respuesta inmediata en puntos críticos y accesos al distrito.
📌 2. CENTRAL DE VIDEOVIGILANCIA INTELIGENTE: Cámaras con detección de placas y conectadas por fibra óptica.
📌 3. PATRULLAJE INTEGRADO PNP + SERENAZGO: Turnos rotativos 24/7 con vehículos operativos.
📌 4. EQUIPAMIENTO A JUNTAS VECINALES: Radios, chalecos y alarmas comunitarias interconectadas.

Cuidaremos a cada familia con tecnología y rigor operativo.

#SeguridadCiudadana #NegritosSeguro #PlanDeSeguridad #PAR #YasserPropone #APP`,
    question: '¿En qué punto de Negritos consideras más urgente un Puesto de Auxilio Rápido (PAR)?',
    callToAction: 'Guarda esta infografía y coméntanos tu barrio para incluirlo en el mapa de monitoreo.',
    tags: ['Seguridad', 'Tecnología', 'PAR', 'Serenazgo', 'Flyer Cuadrado'],
    platforms: ['Instagram', 'Facebook']
  },

  // MIÉRCOLES 26 DE AGOSTO
  {
    id: 'post-26',
    month: 'agosto',
    date: '2026-08-26',
    dayName: 'MIÉRCOLES 26 DE AGOSTO',
    dayShort: 'Mié 26',
    phase: 'fase1',
    title: 'Así construiremos el futuro de la pesca',
    format: 'Video (IA Renders / Apoyo visual)',
    pillar: 'Infraestructura',
    productionStyle: 'Renders arquitectónicos hiperrealistas generados con IA (Sora / Veo) • Música cinematográfica de inspiración',
    visualScript: 'Yasser explicando el fortalecimiento de la pesca artesanal y la proyección de la Casa del Pescador y el Puerto Menor San Pablo, apoyado con imágenes de alta calidad generadas por IA.',
    hook: 'Así lucirá el desembarcadero pesquero y la Casa del Pescador que nuestros hermanos del mar merecen. ¡Míralo con tus propios ojos!',
    messageOrCopy: 'Visualización arquitectónica y sustentación técnica del Puerto Menor San Pablo y la Casa del Pescador.',
    contentCopy: `El Futuro de la Pesca Artesanal: Puerto Menor San Pablo y Casa del Pescador ⚓🌊🐟

La pesca es la columna vertebral de La Brea, pero nuestros pescadores llevan décadas trabajando sin infraestructura adecuada:

⚓ Proyecto de Puerto Menor San Pablo: Con muelle de desembarque seguro, cadena de frío y energía solar.
🏠 La Casa del Pescador: Un espacio integral con tópico médico, comedores, área de descanso y asesoría gremial.
📑 Gestión ante FONDEPES y PRODUCE para destrabar expedientes y financiamiento estatal.

Nuestros hombres de mar tendrán las condiciones dignas que por justicia les corresponden.

#PescaArtesanal #PuertoSanPablo #CasaDelPescador #RendersIA #InfraestructuraDigna #YasserGestor`,
    question: '¿Qué servicio consideras más urgente dentro de la Casa del Pescador?',
    callToAction: 'Pescador artesanal de Negritos: este proyecto es para ti. ¡Comparte el video!',
    tags: ['Pesca', 'Puerto Menor', 'Casa Del Pescador', 'Renders IA', 'Infraestructura'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // JUEVES 27 DE AGOSTO
  {
    id: 'post-27',
    month: 'agosto',
    date: '2026-08-27',
    dayName: 'JUEVES 27 DE AGOSTO',
    dayShort: 'Jue 27',
    phase: 'fase1',
    title: 'Salud: Posta Médica y Gestión 24/7',
    format: 'Flyer (Infografía)',
    pillar: 'Propuesta (Salud)',
    productionStyle: 'Infografía sobria en azul y rojo APP con diagrama de flujo de atención de urgencias y equipamiento',
    visualScript: 'Desglose técnico de la propuesta de salud: ambulancia municipal permanente, gestión de médicos especialistas y convenio con MINSA.',
    hook: 'Las emergencias médicas en Negritos no pueden esperar a que salga el sol o viajar de urgencia a Talara sin auxilio.',
    messageOrCopy: 'Propuesta técnica de salud: equipamiento de tópico, categorización de posta y ambulancia distrital permanente.',
    contentCopy: `Plan de Salud Distrital: Posta Médica y Gestión de Urgencias 24/7 🏥🚑🩺

La salud de nuestras familias es un derecho fundamental que no puede depender de horarios de oficina:

1️⃣ AMBULANCIA MUNICIPAL 24 HORAS: Unidad médica equipada con chofer y paramédico para traslados inmediatos.
2️⃣ CATEGORIZACIÓN ANTE DIRESAL: Gestión técnica para ampliar el horario de atención médica continúa.
3️⃣ BOTIQUÍN MUNICIPAL SOLIDARIO: Medicamentos esenciales a precio de costo para familias vulnerables.
4️⃣ CAMPAÑAS MÉDICAS CON ESPECIALISTAS: Cardiología, pediatría, oftalmología y geriatría cada 15 días.

La salud en La Brea se defiende con gestión y presupuesto.

#SaludParaNegritos #AmbulanciaMunicipal #Atencion24Horas #YasserGestor #PropuestaSalud #APP`,
    question: '¿Qué especialidad médica consideras más urgente traer a las campañas de salud?',
    callToAction: 'Guarda esta infografía y compártela con tus familiares en Negritos.',
    tags: ['Salud', 'Posta Médica', 'Ambulancia', 'Propuesta Técnica', 'Infografía'],
    platforms: ['Instagram', 'Facebook']
  },

  // VIERNES 28 DE AGOSTO
  {
    id: 'post-28',
    month: 'agosto',
    date: '2026-08-28',
    dayName: 'VIERNES 28 DE AGOSTO',
    dayShort: 'Vie 28',
    phase: 'fase1',
    title: 'Desmintiendo la improvisación',
    format: 'Video Reel (Comparativa)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Edición dinámica, estilo Hormozi, pantalla dividida comparando improvisación vs. gestión técnica',
    visualScript: 'Yasser abordando mitos de la gestión pública. "Gobernar no es prometer obras faraónicas sin expediente; gobernar es tener el código SNIP y el financiamiento asegurado".',
    hook: '¿Te han prometido obras que nunca se construyen? Te explico por qué fracasan los improvisados y cómo lo haremos nosotros.',
    messageOrCopy: 'Yasser explicando la diferencia entre promesas al aire y proyectos viables con código de inversión pública (Invierte.pe).',
    contentCopy: `Desmintiendo la improvisación: la verdad detrás de las obras públicas 💡📐🏗️

En cada campaña electoral aparecen candidatos prometiendo estadios, bulevares y obras millonarias. ¿Por qué nunca se hacen realidad?

❌ Porque no tienen Código de Inversión (Invierte.pe).
❌ Porque no saben cómo elaborar un Expediente Técnico viable.
❌ Porque ignoran cómo gestionar el financiamiento ante los ministerios en Lima.

En nuestro equipo no venimos con ocurrencias de campaña. Nuestro Plan de Gobierno 2027–2030 cuenta con proyectos formulados con rigor técnico y sustento financiero real.

¡Menos demagogia, más capacidad comprobada!

#SinImprovisacion #GestionTecnica #InviertePe #YasserGestor #LaBreaNegritos #APP`,
    question: '¿Qué obra inconclusa o promesa rota en Negritos te indigna más?',
    callToAction: 'Comenta y comparte este reel con quienes exigen propuestas serias.',
    tags: ['Comparativa', 'Invierte.pe', 'Gestión Técnica', 'No Improvisar', 'Yasser 2'],
    platforms: ['TikTok', 'Instagram Reels', 'Facebook Reels']
  },

  // SÁBADO 29 DE AGOSTO
  {
    id: 'post-29',
    month: 'agosto',
    date: '2026-08-29',
    dayName: 'SÁBADO 29 DE AGOSTO',
    dayShort: 'Sáb 29',
    phase: 'fase1',
    title: 'Juventud, Deporte y Oportunidades',
    format: 'Flyer Carrusel',
    pillar: 'Propuesta (Educación y Deporte)',
    productionStyle: 'Carrusel moderno en 4 láminas con fotografías de academias deportivas y convenios universitarios',
    visualScript: 'Presentación del programa de becas técnicas, academia preuniversitaria municipal y modernización de complejos deportivos.',
    hook: 'Nuestros jóvenes no tienen que irse de Negritos para salir adelante. Crearemos oportunidades reales en su propia tierra.',
    messageOrCopy: 'Desglose del programa de becas municipales, academia preuniversitaria gratuita y centros de alto rendimiento deportivo.',
    contentCopy: `Oportunidades reales para la Juventud de La Brea–Negritos ⚽📚🎯

El futuro de nuestro distrito depende de lo que hagamos hoy por nuestros niños y jóvenes:

1️⃣ ACADEMIA PREUNIVERSITARIA MUNICIPAL GRATUITA: Con docentes calificados para el ingreso a UNP, SENCICO y SENATI.
2️⃣ CONVENIOS PARA BECAS TÉCNICAS Y UNIVERSITARIAS: Articulación con institutos y empresas de la zona.
3️⃣ RECUPERACIÓN DE COMPLEJOS DEPORTIVOS: Con iluminación LED, césped sintético y escuelas formativas de fútbol, vóley y surf.
4️⃣ CENTRO DE INNOVACIÓN Y ROBÓTICA JUVENIL: Acceso a internet de alta velocidad y talleres digitales.

Juventud con oportunidades es desarrollo para La Brea.

#JuventudNegriteña #DeporteYEducacion #AcademiaMunicipal #BecasTecnicas #YasserPropone`,
    carouselSlides: [
      'Lámina 1: Portada - Plan de Juventud, Deporte y Oportunidades 2027–2030',
      'Lámina 2: Academia Preuniversitaria Municipal Gratuita y Becas de Estudio',
      'Lámina 3: Modernización integral de complejos deportivos barriales',
      'Lámina 4: Centro de Innovación y Talleres Digitales para el empleo joven'
    ],
    question: '¿Qué carrera técnica o taller te gustaría que ofrezca la academia municipal?',
    callToAction: 'Desliza las láminas y etiqueta a los jóvenes talentos de Negritos.',
    tags: ['Juventud', 'Deporte', 'Educación', 'Becas', 'Carrusel'],
    platforms: ['Instagram', 'Facebook']
  },

  // DOMINGO 30 DE AGOSTO
  {
    id: 'post-30',
    month: 'agosto',
    date: '2026-08-30',
    dayName: 'DOMINGO 30 DE AGOSTO',
    dayShort: 'Dom 30',
    phase: 'fase1',
    title: 'Un mensaje a las familias de La Brea',
    format: 'Video Sobrio / Fotografía',
    pillar: 'Yasser 1: El Ciudadano',
    productionStyle: 'Fotografía en alta resolución de Yasser con vecinos en el atardecer negriteño • Tono reflexivo y sereno',
    visualScript: 'Yasser en un momento reflexivo, compartiendo su visión humana de por qué servir a La Brea con honestidad y preparación.',
    hook: 'La política adquiere verdadero valor cuando se pone al servicio de la dignidad de las familias.',
    messageOrCopy: 'Mensaje de convicción moral y técnica de cara al inicio de la fase decisiva de septiembre.',
    contentCopy: `Un mensaje de corazón y compromiso a cada familia de La Brea 🌅🤝🇵🇪

Cuando miro a los ojos a los padres y madres de familia de Negritos, veo el mismo anhelo que tengo yo: ver crecer a nuestros hijos en un distrito seguro, con agua en sus casas, con salud digna y con oportunidades de progreso.

No entré a este camino para buscar aplausos fáciles ni cargos decorativos. Entré porque me preparé en la gestión pública para resolver de verdad los problemas históricos de nuestra tierra.

Cerramos agosto con la certeza de que La Brea está lista para dar el salto hacia el desarrollo técnico y honesto.

¡Que tengan un bendecido domingo!

#FamiliaNegriteña #CompromisoYHonestidad #YasserCiudadano #SiempreConLaGente #APP`,
    question: '¿Cuál es el mayor anhelo que tienes para tu familia en Negritos?',
    callToAction: 'Comenta y recibe un afectuoso saludo dominical de parte de todo el equipo.',
    tags: ['Familia', 'Mensaje', 'Reflexión', 'Yasser 1', 'Domingo'],
    platforms: ['Facebook', 'Instagram']
  },

  // LUNES 31 DE AGOSTO
  {
    id: 'post-31',
    month: 'agosto',
    date: '2026-08-31',
    dayName: 'LUNES 31 DE AGOSTO',
    dayShort: 'Lun 31',
    phase: 'fase1',
    title: 'Septiembre: El Gestor y sus Propuestas',
    format: 'Video Reel (Expectativa / Autoridad)',
    pillar: 'Yasser 2: El Gestor',
    productionStyle: 'Edición de ritmo alto, música en crescendo, gráficos 3D y presentación de la Fase 2',
    visualScript: 'Yasser en locación icónica mirando a cámara con firmeza: "Agosto demostró que estamos preparados. Mañana iniciamos septiembre con el desglose técnico y presupuestal de cada propuesta".',
    hook: 'Se acabó el tiempo de las dudas. A partir de mañana te mostraremos el CÓMO, el CUÁNDO y el CON QUÉ de nuestro Plan 2027–2030.',
    messageOrCopy: 'Video de apertura que sella el posicionamiento del candidato técnico y da inicio formal a la Fase 2: "El Gestor y sus Propuestas".',
    contentCopy: `Septiembre: El Gestor y sus Propuestas al descubierto 🚀📊🏛️

En agosto destruimos la improvisación y dejamos en claro que La Brea necesita capacidad y experiencia comprobada.

A partir de mañana, 1 de septiembre, arranca la etapa más contundente de nuestra campaña:
📌 Propuestas técnicas con números, códigos de proyecto y plazos claros.
📌 Solución definitiva al agua, saneamiento y salud.
📌 Reactivación de la pesca y el turismo para generar empleo real.

El cambio no se improvisa: se planifica y se ejecuta con rigor.

¡Acompáñanos este mes a construir el futuro de La Brea–Negritos!

#SeptiembreDePropuestas #ElGestorEnAccion #YasserAlcalde #Plan2030 #SiempreConLaGente #APP`,
    question: '¿Estás listo para conocer los proyectos técnicos que transformarán Negritos?',
    callToAction: 'Comparte este video y prepárate para el inicio de nuestra serie técnica.',
    interactiveDetails: 'ManyChat: enviar recordatorio por WhatsApp con el cronograma de propuestas de septiembre.',
    tags: ['Lanzamiento', 'Septiembre', 'Fase 2', 'Propuestas', 'Yasser 2'],
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
