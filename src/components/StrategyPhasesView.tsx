import React, { useState } from 'react';
import { CAMPAIGN_PHASES, CAMPAIGN_INFO } from '../data/parrillaData';
import { CampaignPhaseId } from '../types';
import { Target, CheckCircle2, Sparkles, Video, Bot, ArrowRight, ShieldCheck, MessageSquare, Share2, Layers, Cpu } from 'lucide-react';

interface StrategyPhasesViewProps {
  onGoToAugustSprint: () => void;
  onGoToSeptemberSprint?: () => void;
}

export const StrategyPhasesView: React.FC<StrategyPhasesViewProps> = ({ 
  onGoToAugustSprint,
  onGoToSeptemberSprint 
}) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<CampaignPhaseId>('fase1');

  const activePhase = CAMPAIGN_PHASES.find(p => p.id === selectedPhaseId) || CAMPAIGN_PHASES[0];

  const handleGoToPhaseCalendar = () => {
    if (selectedPhaseId === 'fase2' && onGoToSeptemberSprint) {
      onGoToSeptemberSprint();
    } else {
      onGoToAugustSprint();
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Strategy Banner */}
      <div className="bg-gradient-to-r from-[#005596] via-blue-900 to-indigo-950 border border-blue-800 rounded-2xl p-6 sm:p-8 shadow-lg text-white space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded-lg uppercase tracking-wider shadow">
              <Target className="w-3.5 h-3.5" />
              <span>Estrategia General y Metas Mensuales (Agosto – Octubre 2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-brand uppercase tracking-tight">
              3 Fases Narrativas: Del Reconocimiento a la Convicción
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
              {CAMPAIGN_INFO.coreNarrative}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0 self-start md:self-auto">
            <button
              onClick={handleGoToPhaseCalendar}
              className="px-5 py-3 bg-[#E21F26] hover:bg-red-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition shadow-md flex items-center space-x-2"
            >
              <span>{selectedPhaseId === 'fase2' ? 'Ver Parrilla de Setiembre (30 Posts)' : 'Ver Parrilla de Agosto (15 Posts)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Step Timeline Indicator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
          {CAMPAIGN_PHASES.map((phase, idx) => {
            const isSelected = phase.id === selectedPhaseId;
            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhaseId(phase.id)}
                className={`p-4 rounded-xl border text-left transition relative overflow-hidden flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-white text-slate-900 border-white shadow-md font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#E21F26] text-white' : 'bg-white/20 text-amber-300'
                  }`}>
                    FASE {idx + 1} • {phase.periodText}
                  </span>
                  {isSelected && <span className="text-xs text-[#005596] font-bold">Activo</span>}
                </div>

                <div>
                  <h4 className="font-brand font-black text-sm uppercase leading-tight">
                    {phase.name.split(':')[1] || phase.name}
                  </h4>
                  <p className={`text-[11px] line-clamp-1 mt-0.5 font-medium ${isSelected ? 'text-slate-600' : 'text-blue-200'}`}>
                    {phase.slogan}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Phase Deep Dive Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        
        {/* Header of Active Phase */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-[#005596] text-white rounded-lg text-xs font-black uppercase tracking-wider">
                {activePhase.periodText}
              </span>
              <span className="text-xs font-extrabold text-[#E21F26] uppercase">
                {activePhase.id === 'fase1' ? 'Fase Activa en Redes' : 'Fase Programada'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand uppercase tracking-tight">
              {activePhase.name}
            </h3>
            <p className="text-sm font-bold text-[#005596] italic">
              "{activePhase.slogan}"
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs space-y-1 md:text-right shrink-0 min-w-[240px]">
            <span className="text-slate-500 font-bold block uppercase tracking-wider text-[10px]">Objetivo Central:</span>
            <p className="font-extrabold text-slate-900 text-xs leading-snug">
              {activePhase.objective}
            </p>
          </div>
        </div>

        {/* Strategy Narrative */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 space-y-2">
          <span className="text-xs font-black text-[#005596] uppercase tracking-wider block flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#E21F26]" />
            <span>Estrategia de Ejecución:</span>
          </span>
          <p className="text-sm text-slate-800 font-medium leading-relaxed">
            {activePhase.strategy}
          </p>
        </div>

        {/* Grid of Metas & Tactics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Metas Clave */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-600 uppercase tracking-wider font-brand flex items-center space-x-2">
              <Target className="w-4 h-4 text-[#005596]" />
              <span>Metas Mensuales de la Fase:</span>
            </h4>
            <div className="space-y-2.5">
              {activePhase.metas.map((meta, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-start space-x-3 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{meta}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tecnologías, Herramientas & Tácticas */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-slate-600 uppercase tracking-wider font-brand flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-[#E21F26]" />
              <span>Tecnologías y Tácticas Operativas:</span>
            </h4>
            <div className="space-y-2.5">
              {activePhase.techAndTactics.map((tactic, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-start space-x-3 text-xs text-slate-800 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#E21F26] mt-1.5 shrink-0"></span>
                  <span className="leading-relaxed">{tactic}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Phase Pillars Pill Badges */}
        <div className="pt-4 border-t border-slate-200 space-y-2">
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider block">
            Pilares y Enfoques Protagonistas:
          </span>
          <div className="flex flex-wrap gap-2">
            {activePhase.keyPillars.map((p, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-800 rounded-xl text-xs font-bold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
