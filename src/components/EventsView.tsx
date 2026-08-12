import React, { useState } from 'react';
import { CampaignEvent, PostItem } from '../types';
import { CAMPAIGN_EVENTS, POSTS_DATA } from '../data/parrillaData';
import { Calendar, MapPin, Target, CheckCircle2, Video, Camera, Share2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface EventsViewProps {
  onSelectPost: (post: PostItem) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onSelectPost }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>(CAMPAIGN_EVENTS[0].id);

  const selectedEvent = CAMPAIGN_EVENTS.find(e => e.id === selectedEventId) || CAMPAIGN_EVENTS[0];
  const linkedPosts = POSTS_DATA.filter(p => p.eventId === selectedEvent.id);

  return (
    <div className="space-y-8">
      {/* Intro Banner: Rules of Promotion */}
      <div className="bg-gradient-to-r from-[#005596] to-blue-900 border border-blue-800 rounded-2xl p-6 shadow-md text-white space-y-4">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded uppercase tracking-wider shadow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estrategia de Cobertura 360°</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white font-brand uppercase tracking-tight">
            Los 7 Eventos que Organizan Agosto 2026
          </h2>
          <p className="text-xs text-blue-100 leading-relaxed">
            Cada actividad territorial es el motor principal de contenidos. Se sigue la <strong className="text-white font-extrabold">Regla de Promoción Tres Tiempos</strong> (Antes, Durante y Después) para transformar un solo evento en más de 8 publicaciones de alto valor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs font-semibold">
            <div className="bg-white/10 backdrop-blur p-3 rounded-xl border border-white/20 flex items-start space-x-2.5">
              <div className="w-6 h-6 rounded bg-[#E21F26] text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
              <div>
                <strong className="text-amber-300 block font-brand">ANTES: Expectativa</strong>
                <span className="text-blue-100 text-[11px]">Teaser, Flyer oficial, Video invitación, Cuenta regresiva.</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur p-3 rounded-xl border border-white/20 flex items-start space-x-2.5">
              <div className="w-6 h-6 rounded bg-[#005596] text-white flex items-center justify-center font-bold text-xs shrink-0 border border-white">2</div>
              <div>
                <strong className="text-blue-200 block font-brand">DURANTE: Cobertura</strong>
                <span className="text-blue-100 text-[11px]">Fotos HD, Historias en vivo, TikToks verticales, Tomas escuchando.</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur p-3 rounded-xl border border-white/20 flex items-start space-x-2.5">
              <div className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
              <div>
                <strong className="text-emerald-300 block font-brand">DESPUÉS: Resultados</strong>
                <span className="text-blue-100 text-[11px]">Reel resumen, Carrusel, Frases reales, Material derivado.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {CAMPAIGN_EVENTS.map((event) => {
          const isSelected = event.id === selectedEventId;
          return (
            <button
              key={event.id}
              onClick={() => setSelectedEventId(event.id)}
              className={`p-3 rounded-xl border text-left transition relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#005596] border-[#005596] text-white shadow-md font-bold scale-[1.02]'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider opacity-80 mb-0.5">
                  EVENTO #{event.eventNumber}
                </div>
                <div className="font-extrabold text-xs font-brand line-clamp-2 leading-snug">
                  {event.title}
                </div>
              </div>
              <div className="text-[10px] mt-2 pt-1 border-t border-slate-200 font-bold text-[#005596]">
                {event.dayText.split('DE')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Event Detailed View */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        {/* Header info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 bg-[#E21F26] text-white font-bold rounded-lg shadow">
                EVENTO #{selectedEvent.eventNumber} DE 7
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg font-bold flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#005596]" />
                <span>{selectedEvent.dayText}</span>
              </span>
              {selectedEvent.sector && (
                <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg font-bold flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Sector: {selectedEvent.sector}</span>
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-slate-900 font-brand uppercase tracking-tight">
              {selectedEvent.title}
            </h3>
            <p className="text-base font-bold text-[#005596]">
              {selectedEvent.subtitle}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-sm">
            <span className="text-[11px] text-slate-400 font-black uppercase tracking-wider block mb-1 flex items-center space-x-1">
              <Target className="w-3.5 h-3.5 text-[#E21F26]" />
              <span>Objetivo Estratégico</span>
            </span>
            <p className="text-xs text-slate-800 leading-relaxed font-semibold">
              {selectedEvent.objective}
            </p>
          </div>
        </div>

        {/* ANTES / DURANTE / DESPUÉS Checklist Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ANTES */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
              <div className="w-7 h-7 rounded-lg bg-[#005596] text-white flex items-center justify-center font-black text-xs">
                A
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#005596] uppercase tracking-wider font-brand">ANTES (Expectativa)</h4>
                <span className="text-[10px] text-slate-500 font-bold">Preparación y Convocatoria</span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-800">
              {selectedEvent.antesTasks.map((task, i) => (
                <li key={i} className="flex items-start space-x-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#005596] mt-0.5 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DURANTE */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
              <div className="w-7 h-7 rounded-lg bg-[#E21F26] text-white flex items-center justify-center font-black text-xs">
                D
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#E21F26] uppercase tracking-wider font-brand">DURANTE (Cobertura)</h4>
                <span className="text-[10px] text-slate-500 font-bold">Captura en Terreno</span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-800">
              {selectedEvent.duranteTasks.map((task, i) => (
                <li key={i} className="flex items-start space-x-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs font-medium">
                  <Camera className="w-4 h-4 text-[#E21F26] mt-0.5 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DESPUÉS */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                P
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-emerald-800 uppercase tracking-wider font-brand">DESPUÉS (Resultados)</h4>
                <span className="text-[10px] text-slate-500 font-bold">Derivados y Seguimiento</span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-slate-800">
              {selectedEvent.despuesTasks.map((task, i) => (
                <li key={i} className="flex items-start space-x-2 bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs font-medium">
                  <Video className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Linked Posts in Calendar */}
        <div className="pt-4 border-t border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center space-x-2 font-brand">
              <Share2 className="w-4 h-4 text-[#005596]" />
              <span>Publicaciones Programadas para este Evento ({linkedPosts.length})</span>
            </h4>
          </div>

          {linkedPosts.length === 0 ? (
            <p className="text-xs text-slate-500 italic">No hay publicaciones vinculadas directamente.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {linkedPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => onSelectPost(post)}
                  className="bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-[#005596] rounded-xl p-3.5 cursor-pointer transition flex items-start justify-between space-x-3 group shadow-2xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-[10px]">
                      <span className="font-extrabold text-[#005596]">{post.dayName}</span>
                      <span className="text-slate-500">• {post.timeOfDay}</span>
                    </div>
                    <h5 className="font-bold text-xs text-slate-900 group-hover:text-[#005596] transition line-clamp-1 font-brand">
                      {post.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      Format: {post.format} | Pilar: {post.pillar}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005596] mt-1 transition" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
