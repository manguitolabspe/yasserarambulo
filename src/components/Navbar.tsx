import React from 'react';
import { CAMPAIGN_INFO } from '../data/parrillaData';
import { Calendar, Sparkles, Layers, Database, BarChart3, Image as ImageIcon, Flame } from 'lucide-react';

export type TabType = 'calendar' | 'events' | 'flyer_generator' | 'extra_flyers' | 'derivatives' | 'metrics';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'calendar', label: 'Parrilla Diaria', icon: <Calendar className="w-4 h-4" /> },
    { id: 'events', label: '7 Eventos Clave', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'flyer_generator', label: 'Generador Flyer', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'extra_flyers', label: '12 Flyers Extras', icon: <Layers className="w-4 h-4" /> },
    { id: 'derivatives', label: 'Banco Derivado', icon: <Database className="w-4 h-4" /> },
    { id: 'metrics', label: 'Metas y Métricas', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <header className="bg-[#005596] text-white border-b-4 border-[#E21F26] sticky top-0 z-40 shadow-xl">
      {/* Primary Brand Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Candidate & Party Identity */}
          <div className="flex items-center space-x-3.5">
            {/* APP Logo Square Box */}
            <div className="bg-white p-1.5 rounded-lg shadow-md shrink-0">
              <div className="w-10 h-10 flex flex-col items-center justify-center text-[#005596] font-black text-xs leading-none border border-blue-100 rounded">
                <span>A</span><span>P</span><span>P</span>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-brand font-black text-white tracking-tight uppercase">
                  {CAMPAIGN_INFO.candidate}
                </h1>
              </div>

              <div className="flex items-center space-x-2 text-xs text-blue-100">
                <span className="font-semibold uppercase tracking-wider">{CAMPAIGN_INFO.role}</span>
                <span>•</span>
                <span className="font-handwriting text-amber-300 text-base leading-none italic font-bold">
                  "{CAMPAIGN_INFO.motto}"
                </span>
              </div>
            </div>
          </div>

          {/* Header Right Date & Campaign Status Badge */}
          <div className="text-left md:text-right flex flex-col items-start md:items-end justify-center">
            <div className="text-xl sm:text-2xl font-black uppercase italic tracking-wide text-white">
              Agosto 2026
            </div>
            <div className="text-[10px] font-bold tracking-widest bg-[#E21F26] text-white px-2.5 py-1 mt-0.5 rounded shadow uppercase">
              PARRILLA MAESTRA REPROGRAMADA
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Header Strategy Ribbon */}
      <div className="bg-white text-slate-800 border-b border-slate-200 px-4 sm:px-8 py-2.5 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0"></div>
            <span className="text-xs font-black uppercase text-slate-400 tracking-wider">Meta del Mes:</span>
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
              Escuchar + Explicar + Construir Confianza
            </span>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="px-3 py-0.5 bg-blue-50 text-blue-800 text-[10px] font-bold rounded-full border border-blue-200 uppercase">
              Humanizar al Candidato
            </span>
            <span className="px-3 py-0.5 bg-red-50 text-red-800 text-[10px] font-bold rounded-full border border-red-200 uppercase">
              Presencia Territorial
            </span>
            <span className="px-3 py-0.5 bg-green-50 text-green-800 text-[10px] font-bold rounded-full border border-green-200 uppercase">
              Información Ciudadana
            </span>
          </div>

        </div>
      </div>

      {/* View Navigation Tabs Bar */}
      <div className="bg-slate-100 border-b border-slate-200 px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center overflow-x-auto no-scrollbar space-x-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3.5 py-2 rounded-xl font-bold text-xs transition flex items-center space-x-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#005596] text-white shadow-md font-extrabold scale-[1.02]'
                    : 'bg-white hover:bg-slate-200 text-slate-700 font-semibold border border-slate-200 shadow-xs'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
