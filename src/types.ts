export type PostStatus = 'pendiente' | 'en_proceso' | 'programado' | 'publicado';

export type TimeOfDay = 'mañana' | 'noche' | 'única';

export type PostFormat = 
  | 'Reel' 
  | 'Flyer' 
  | 'Video' 
  | 'Carrusel' 
  | 'TikTok/Reel' 
  | 'Historias' 
  | 'Flyer + Reel'
  | 'Flyer + Video';

export type ContentPillar = 
  | 'Persona y Candidato' 
  | 'Juventud' 
  | 'Educación Ciudadana' 
  | 'Trabajo y Emprendimiento' 
  | 'Adultos Mayores' 
  | 'Deporte y Comunidad' 
  | 'Escucha Territorial' 
  | 'Efeméride' 
  | 'Cierre y Resumen';

export interface PostItem {
  id: string;
  date: string; // YYYY-MM-DD format (2026-08-10)
  dayName: string; // "LUNES 10 DE AGOSTO"
  timeOfDay: TimeOfDay;
  postNumberText: string; // "PUBLICACIÓN 1 – MAÑANA"
  title: string; // "AGOSTO: VAMOS A ESCUCHAR MUCHO MÁS A NEGRITOS"
  format: PostFormat;
  pillar: ContentPillar;
  eventId?: string; // e.g. "evento-1"
  pitch?: string;
  hook?: string;
  contentCopy: string;
  question?: string;
  callToAction?: string;
  optionsForStories?: string[];
  details?: string[];
  pendingData?: string[];
  storiesNotes?: string;
  isDoublePostDay?: boolean;
  tags: string[];
}

export interface CampaignEvent {
  id: string;
  eventNumber: number; // 1 to 7
  date: string; // YYYY-MM-DD
  dayText: string; // "SÁBADO 15 DE AGOSTO"
  title: string; // "NEGRITOS, QUEREMOS ESCUCHARTE"
  subtitle: string; // "Encuentro Juvenil con Yasser Arámbulo"
  objective: string;
  sector?: string; // "[POR CONFIRMAR]"
  specialNote?: string;
  antesTasks: string[];
  duranteTasks: string[];
  despuesTasks: string[];
}

export interface DerivativeItem {
  id: string;
  name: string;
  description: string;
  status: 'pendiente' | 'guardado';
}

export interface DerivativeFolder {
  id: string;
  eventName: string;
  eventNumber: number;
  items: DerivativeItem[];
}

export interface ExtraFlyer {
  id: number;
  title: string;
  subtitle?: string;
  text?: string;
  question?: string;
  type: string;
}

export interface ProductionGoal {
  id: string;
  name: string;
  targetMin: number;
  targetMax: number;
  currentCount: number;
  unit: string;
  description: string;
}

export interface CalendarFilter {
  search: string;
  pillar: string;
  format: string;
  status: string;
  eventId: string;
  onlyDoublePostDays: boolean;
  timeOfDay: string;
}
