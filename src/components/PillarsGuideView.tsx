import React, { useState } from 'react';
import { CANDIDATE_PILLARS } from '../data/parrillaData';
import { CandidatePillarInfo, PostPillarKey } from '../types';
import { UserCheck, Briefcase, ShieldAlert, Compass, Users, MessageSquare, Sparkles, Check, Copy } from 'lucide-react';

export const PillarsGuideView: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<PostPillarKey>('Yasser 1: El Ciudadano');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activePillar = CANDIDATE_PILLARS.find(p => p.key === selectedKey) || CANDIDATE_PILLARS[0];

  const getPillarIcon = (number: number) => {
    switch (number) {
      case 1:
        return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case 4:
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 5:
        return <Users className="w-5 h-5 text-purple-600" />;
      case 6:
        return <MessageSquare className="w-5 h-5 text-cyan-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#005596]" />;
    }
  };

  const handleCopyGuide = (pillar: CandidatePillarInfo) => {
    const text = `GUÍA DE COMUNICACIÓN: ${pillar.key}\nRol: ${pillar.roleDescription}\nTono: ${pillar.tone}\nEstilo Visual: ${pillar.visualTone}\nTemas Ejemplo:\n${pillar.exampleTopics.map(t => `• ${t}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedKey(pillar.key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#005596] to-blue-900 border border-blue-800 rounded-2xl p-6 sm:p-8 shadow-md text-white space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded-lg uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Matriz de Comunicación y Arquetipos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white font-brand uppercase tracking-tight">
          Los 5 Arquetipos de Yasser Arámbulo
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 font-medium max-w-3xl leading-relaxed">
          Para evitar discursos monótonos o acartonados, cada pieza de contenido activa un perfil específico del candidato, equilibrando la cercanía barrial con la solvencia técnica de gestión.
        </p>
      </div>

      {/* Grid of 6 Pillars / Archetypes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CANDIDATE_PILLARS.map((pillar) => {
          const isSelected = pillar.key === selectedKey;
          return (
            <button
              key={pillar.key}
              onClick={() => setSelectedKey(pillar.key)}
              className={`p-5 rounded-2xl border text-left transition flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'bg-[#005596] border-[#005596] text-white shadow-md scale-[1.02]'
                  : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-amber-300' : 'bg-slate-100 text-[#005596]'
                  }`}>
                    {pillar.number <= 5 ? `ARQUETIPO #${pillar.number}` : 'DINÁMICA'}
                  </span>
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100'}`}>
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                <h3 className="font-brand font-black text-lg leading-snug">
                  {pillar.key}
                </h3>

                <p className={`text-xs line-clamp-2 ${isSelected ? 'text-blue-100' : 'text-slate-500 font-medium'}`}>
                  {pillar.roleDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold">
                <span className={isSelected ? 'text-amber-300' : 'text-[#005596]'}>
                  Ver Guía de Guion & Tono →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Card for Selected Pillar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-[#E21F26] text-white rounded-lg text-xs font-black uppercase tracking-wider">
                {activePillar.number <= 5 ? `Arquetipo #${activePillar.number}` : 'Interacción'}
              </span>
              <span className="text-xs font-extrabold text-[#005596] uppercase">
                {activePillar.name}
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-brand uppercase tracking-tight">
              {activePillar.key}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
              {activePillar.roleDescription}
            </p>
          </div>

          <button
            onClick={() => handleCopyGuide(activePillar)}
            className="px-4 py-2 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#005596] border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-bold transition flex items-center space-x-2 shrink-0 self-start md:self-auto"
          >
            {copiedKey === activePillar.key ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copiedKey === activePillar.key ? '¡Guía Copiada!' : 'Copiar Pauta del Arquetipo'}</span>
          </button>
        </div>

        {/* Tone, Visual Style and Example Topics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="text-[11px] font-black text-[#005596] uppercase tracking-wider block">
              🗣️ Tono de Voz y Narrativa:
            </span>
            <p className="text-xs text-slate-800 font-semibold leading-relaxed">
              {activePillar.tone}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="text-[11px] font-black text-[#E21F26] uppercase tracking-wider block">
              🎬 Encuadres y Estilo Visual:
            </span>
            <p className="text-xs text-slate-800 font-semibold leading-relaxed">
              {activePillar.visualTone}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="text-[11px] font-black text-amber-900 uppercase tracking-wider block">
              💡 Ejemplos de Temas & Disparadores:
            </span>
            <ul className="space-y-1 text-xs text-slate-700 font-medium">
              {activePillar.exampleTopics.map((topic, i) => (
                <li key={i} className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
