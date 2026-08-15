export type CampaignMonth = 'agosto' | 'setiembre' | 'octubre';

export type PostStatus = 'pendiente' | 'en_proceso' | 'programado' | 'publicado';

export type CampaignPhaseId = 'fase1' | 'fase2' | 'fase3';

export interface CampaignPhase {
  id: CampaignPhaseId;
  month: CampaignMonth;
  name: string;
  periodText: string;
  slogan: string;
  objective: string;
  strategy: string;
  keyPillars: string[];
  metas: string[];
  techAndTactics: string[];
}

export type PostPillarKey = 
  | 'Yasser 1: El Ciudadano'
  | 'Yasser 2: El Gestor'
  | 'Yasser 3: El Fiscalizador'
  | 'Yasser 4: El Líder Territorial'
  | 'Yasser 5: El Candidato (Equipo)'
  | 'Interacción'
  | 'Yasser y la Salud'
  | 'Propuesta'
  | 'Resumen Semanal'
  | 'Yasser y la Vivienda'
  | 'Propuesta (Mujer)'
  | 'Propuesta (Pesca)'
  | 'El Equipo'
  | 'Yasser y el Medio Ambiente'
  | 'Propuesta (Turismo)'
  | 'Propuesta (Juventud)'
  | 'Yasser y el Turismo'
  | 'Educación Ambiental'
  | 'Identidad'
  | 'Yasser y la Fiscalización'
  | 'Propuesta (Seguridad)'
  | 'Propuesta Institucional'
  | 'Transparencia'
  | 'Movilización'
  | 'Yasser 1 y 4'
  | 'Equipo'
  | 'Cierre de Mes'
  | string;

export interface PostItem {
  id: string;
  month: CampaignMonth;
  date: string; // YYYY-MM-DD (e.g. 2026-08-17, 2026-09-01)
  dayName: string; // "LUNES 17 DE AGOSTO", "MARTES 1 DE SETIEMBRE"
  dayShort: string; // "Lun 17", "Mar 1"
  weekNumber?: number; // 1, 2, 3, 4
  weekTitle?: string; // "Semana 1: Lo más urgente (Agua, Saneamiento y Salud)"
  phase: CampaignPhaseId;
  title: string;
  format: string; // "Video Reel (Serie)", "Flyer (Carrusel IG/FB)", etc.
  pillar: PostPillarKey;
  visualScript?: string;
  messageOrCopy: string;
  contentCopy: string;
  interactiveDetails?: string;
  hook?: string;
  question?: string;
  callToAction?: string;
  carouselSlides?: string[];
  productionStyle?: string;
  tags: string[];
  platforms: string[];
}

export interface CandidatePillarInfo {
  key: PostPillarKey;
  number: number;
  name: string;
  roleDescription: string;
  tone: string;
  visualTone: string;
  exampleTopics: string[];
}

export interface CalendarFilter {
  search: string;
  pillar: string;
  format: string;
  status: string;
  month: string;
}
