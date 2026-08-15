import React, { useState } from 'react';
import { SEPTEMBER_STRATEGY_MODULE, OCTOBER_STRATEGY_MODULE, POSTS_DATA } from '../data/parrillaData';
import { PostItem, PostStatus } from '../types';
import { PostDetailModal } from './PostDetailModal';
import { getStoredPostStatuses, savePostStatus } from '../utils/storage';
import { 
  Rocket, 
  Video, 
  Sparkles, 
  Cpu, 
  Share2, 
  ShieldCheck, 
  FolderCheck, 
  Droplets, 
  HeartHandshake, 
  Compass, 
  Anchor,
  Clock,
  ArrowRight,
  Layers,
  Calendar,
  Copy,
  Check,
  Bot,
  FileText,
  Image as ImageIcon
} from 'lucide-react';

interface FuturePhasesViewProps {
  onBackToAugust: () => void;
  onGoToSeptemberCalendar?: () => void;
}

export const SeptemberPreviewView: React.FC<FuturePhasesViewProps> = ({ 
  onBackToAugust,
  onGoToSeptemberCalendar 
}) => {
  const [selectedSubTab, setSelectedSubTab] = useState<'setiembre' | 'octubre'>('setiembre');
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [postStatuses, setPostStatuses] = useState<Record<string, PostStatus>>(() => getStoredPostStatuses());
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const septemberPosts = POSTS_DATA.filter(p => p.month === 'setiembre');

  const handleStatusChange = (postId: string, newStatus: PostStatus, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...postStatuses, [postId]: newStatus };
    setPostStatuses(updated);
    savePostStatus(postId, newStatus);
  };

  const handleCopyPost = (post: PostItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `TITULO: ${post.title}\nFECHA: ${post.dayName} (${post.date})\nFORMATO: ${post.format}\nPILAR: ${post.pillar}\n\nVISUAL / GUION:\n${post.visualScript || post.messageOrCopy}\n\nCOPY REDES:\n${post.contentCopy}`;
    navigator.clipboard.writeText(text);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const weeks = [
    {
      num: 1,
      title: 'Semana 1: Lo más urgente (Agua, Saneamiento y Salud)',
      dates: '1 al 6 de Setiembre',
      theme: 'Ataque frontal a los dolores históricos del distrito con sustento de gestiones previas de Yasser.',
      posts: septemberPosts.filter(p => p.weekNumber === 1)
    },
    {
      num: 2,
      title: 'Semana 2: Reactivación y Bolsillo (Pesca, Emprendimiento y Apoyo a la Mujer)',
      dates: '7 al 13 de Setiembre',
      theme: 'Propuestas de impacto económico directo: desembarcadero San Pablo, Emprende Mujer y microcréditos.',
      posts: septemberPosts.filter(p => p.weekNumber === 2)
    },
    {
      num: 3,
      title: 'Semana 3: Identidad y Futuro (Turismo, Juventud y Medio Ambiente)',
      dates: '14 al 20 de Setiembre',
      theme: 'Visión turística ("Negritos es Chévere"), juventud, polideportivo con render IA y sostenibilidad.',
      posts: septemberPosts.filter(p => p.weekNumber === 3)
    },
    {
      num: 4,
      title: 'Semana 4: Confianza y Cierre (Seguridad, Fiscalización y Muni Moderna)',
      dates: '21 al 30 de Setiembre',
      theme: 'Seguridad ciudadana, transparencia institucional, presentación de regidores y cuenta regresiva final.',
      posts: septemberPosts.filter(p => p.weekNumber === 4)
    }
  ];

  const displayedWeeks = selectedWeek === 'all' ? weeks : weeks.filter(w => w.num === selectedWeek);

  return (
    <div className="space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#005596] via-blue-900 to-indigo-950 border border-blue-800 rounded-2xl p-6 sm:p-8 shadow-md text-white space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded-lg uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5" />
              <span>Hojas de Ruta Estratégicas 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-brand uppercase tracking-tight">
              Fases 2 y 3: Setiembre y Octubre 2026
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
              La transición estratégica de la cercanía territorial (Agosto) hacia la solvencia técnica y planes de gobierno sectoriales (Setiembre), culminando en la movilización masiva del voto (Octubre).
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0 self-start md:self-auto">
            {onGoToSeptemberCalendar && (
              <button
                onClick={onGoToSeptemberCalendar}
                className="px-4 py-2.5 bg-[#E21F26] hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm flex items-center space-x-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Ver en Calendario (30 Posts)</span>
              </button>
            )}
            <button
              onClick={onBackToAugust}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm"
            >
              ← Ir a Agosto (15 Posts)
            </button>
          </div>
        </div>

        {/* Subtab selector */}
        <div className="flex space-x-2 pt-2">
          <button
            onClick={() => setSelectedSubTab('setiembre')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition flex items-center space-x-2 ${
              selectedSubTab === 'setiembre'
                ? 'bg-white text-[#005596] shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span>Fase 2: Setiembre (30 Contenidos Técnicos)</span>
          </button>
          <button
            onClick={() => setSelectedSubTab('octubre')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition flex items-center space-x-2 ${
              selectedSubTab === 'octubre'
                ? 'bg-white text-[#005596] shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span>Fase 3: Octubre (El Voto de Confianza)</span>
          </button>
        </div>
      </div>

      {/* Content for September (Fase 2) */}
      {selectedSubTab === 'setiembre' && (
        <div className="space-y-8">
          
          {/* Main Strategy Summary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="px-3 py-1 bg-[#005596] text-white rounded-lg text-xs font-black uppercase tracking-wider">
                  1 al 30 de Setiembre 2026 • 30 Publicaciones Planificadas
                </span>
                <h3 className="text-2xl font-black text-slate-900 font-brand uppercase tracking-tight mt-2">
                  Fase 2: El Gestor y sus Propuestas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
                  Objetivo: Credibilidad y Visión — Responder a la pregunta: ¿Qué sabe hacer Yasser y qué propone para transformar La Brea?
                </p>
              </div>

              {onGoToSeptemberCalendar && (
                <button
                  onClick={onGoToSeptemberCalendar}
                  className="px-4 py-2 bg-[#005596] hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow transition flex items-center space-x-2 shrink-0 self-start md:self-auto"
                >
                  <span>Abrir Modo Calendario Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Grid of Planned Pillars and Innovations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Feature 1: Serie de Experiencia */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-[#005596]">
                  <Video className="w-5 h-5 text-red-600" />
                  <h4 className="font-brand font-black text-sm uppercase">
                    Serie: "YASSER Y SU EXPERIENCIA"
                  </h4>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Videos dinámicos usando pantallas verdes y motion graphics para mostrar la evidencia (documentos oficiales, actas de fiscalización y proyectos gestionados durante su labor como Consejero Regional por Talara).
                </p>
                <div className="pt-2 text-[11px] font-bold text-[#005596]">
                  ⚡ Formato didáctico, sin poses, con soporte documental.
                </div>
              </div>

              {/* Feature 2: 4 Propuestas Potentes */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-[#005596]">
                  <FolderCheck className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-brand font-black text-sm uppercase">
                    4 Propuestas Potentes Emblemáticas
                  </h4>
                </div>
                <ul className="text-xs text-slate-700 font-medium space-y-1">
                  <li className="flex items-center space-x-1.5">
                    <Droplets className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span><strong>Agua y Saneamiento:</strong> Presión continua y destrabe de proyectos.</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span><strong>Emprende Mujer Negriteña:</strong> Capital semilla y ferias productivas.</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span><strong>Turismo:</strong> Campaña "Negritos es Chévere" y puesta en valor del Salar.</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Anchor className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span><strong>La Casa del Pescador:</strong> Espacio de soporte técnico y social al pescador.</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3: Renders con IA (Sora / Veo) */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-[#005596]">
                  <Cpu className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-brand font-black text-sm uppercase">
                    Renders Hiperrealistas con IA (Sora / Veo)
                  </h4>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Apoyos visuales generados con inteligencia artificial para proyectar cómo se verá el <strong>Polideportivo Negritos</strong>, el mejoramiento integral del litoral y los nuevos miradores turísticos.
                </p>
                <div className="pt-2 text-[11px] font-bold text-indigo-700">
                  ✨ Impacto visual futurista para conectar con el electorado joven y familias.
                </div>
              </div>

              {/* Feature 4: Paquetes de WhatsApp */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                <div className="flex items-center space-x-2 text-[#005596]">
                  <Share2 className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-brand font-black text-sm uppercase">
                    Viralización Orgánica por WhatsApp
                  </h4>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Piezas ultralivianas, infografías directas y audios cortos para cadenas de difusión vecinales y líderes de barrio en Negritos y Talara.
                </p>
                <div className="pt-2 text-[11px] font-bold text-emerald-700">
                  📲 Distribución capilar directa a los celulares de los electores.
                </div>
              </div>

            </div>
          </div>

          {/* Week Tabs Filter */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-slate-900 font-brand uppercase tracking-tight">
                  Estructura Semanal de Setiembre (1 al 30)
                </h3>
                <p className="text-xs text-slate-600 font-semibold">
                  Explora las 4 semanas temáticas y los 30 guiones detallados listos para producción.
                </p>
              </div>

              {/* Week Pill Filter */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedWeek('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                    selectedWeek === 'all'
                      ? 'bg-[#005596] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Todas (4 Semanas)
                </button>
                {[1, 2, 3, 4].map(num => (
                  <button
                    key={num}
                    onClick={() => setSelectedWeek(num)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                      selectedWeek === num
                        ? 'bg-[#005596] text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Semana {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Weeks Accordion / List */}
            <div className="space-y-6">
              {displayedWeeks.map((week) => (
                <div key={week.num} className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  
                  {/* Week Header */}
                  <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 bg-[#E21F26] text-white text-[10px] font-black rounded uppercase tracking-wider">
                          {week.dates}
                        </span>
                        <span className="text-xs font-black text-[#005596]">
                          {week.posts.length} Publicaciones
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 font-brand uppercase tracking-tight">
                        {week.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {week.theme}
                      </p>
                    </div>
                  </div>

                  {/* Week Posts Grid */}
                  <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {week.posts.map((post) => {
                      const status = postStatuses[post.id] || 'pendiente';
                      return (
                        <div
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="bg-slate-50 hover:bg-blue-50/40 border border-slate-200 hover:border-[#005596] rounded-xl p-4 transition cursor-pointer flex flex-col justify-between space-y-3 group"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="px-2 py-0.5 bg-[#005596] text-white text-[10px] font-black rounded uppercase">
                                {post.dayShort}
                              </span>
                              <span className="text-[10px] font-bold text-slate-500">
                                {post.format}
                              </span>
                            </div>

                            <h5 className="font-brand font-black text-sm text-slate-900 leading-snug group-hover:text-[#005596] transition">
                              {post.title}
                            </h5>

                            <div className="text-xs text-slate-600 line-clamp-2">
                              <strong className="text-slate-800 font-semibold">Visual: </strong>
                              {post.visualScript || post.messageOrCopy}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                            <span className="text-[10px] font-extrabold text-[#005596]">
                              {post.pillar}
                            </span>

                            <div className="flex items-center space-x-1">
                              <button
                                onClick={(e) => handleCopyPost(post, e)}
                                className="p-1 rounded bg-white hover:bg-slate-200 text-slate-600 transition"
                                title="Copiar Copy"
                              >
                                {copiedId === post.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              </button>
                              <span className="text-[10px] font-bold text-[#005596] group-hover:underline">
                                Ver →
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Content for October (Fase 3) */}
      {selectedSubTab === 'octubre' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="px-3 py-1 bg-[#E21F26] text-white rounded-lg text-xs font-black uppercase tracking-wider">
                1 al 4 de Octubre 2026 (Día Central de Elección)
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-brand uppercase tracking-tight mt-2">
                Fase 3: El Voto de Confianza
              </h3>
              <p className="text-sm text-slate-600 font-bold mt-1">
                Objetivo: Cierre emocional, llamado urgente al voto responsable y movilización.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs font-bold text-red-900 leading-relaxed">
              Premisa Central: "La Brea necesita una autoridad que conozca su realidad, escuche a su gente y trabaje con responsabilidad."
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {OCTOBER_STRATEGY_MODULE.keyFeatures.map((feat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-[#005596]">
                    <ShieldCheck className="w-5 h-5 text-[#E21F26]" />
                    <h4 className="font-brand font-black text-sm uppercase">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {feat.description}
                  </p>
                  <div className="pt-2 text-[10px] font-bold text-slate-500 uppercase">
                    Formato: {feat.format}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          status={postStatuses[selectedPost.id] || 'pendiente'}
          onStatusChange={(status) => handleStatusChange(selectedPost.id, status, { stopPropagation: () => {} } as any)}
          onClose={() => setSelectedPost(null)}
        />
      )}

    </div>
  );
};
