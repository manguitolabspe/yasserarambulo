import React from 'react';
import { CAMPAIGN_INFO } from '../data/parrillaData';
import { CampaignMonth } from '../types';
import { Calendar, Target, Users, Image as ImageIcon, Sparkles, Shield, Rocket } from 'lucide-react';

export type TabType = 'calendar' | 'strategy' | 'pillars' | 'future' | 'flyer';

interface NavbarProps {
  selectedMonth: CampaignMonth;
  onMonthChange: (month: CampaignMonth) => void;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedMonth,
  onMonthChange,
  activeTab,
  onTabChange
}) => {
  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'calendar', label: 'Parrilla de Contenidos Diaria', icon: <Calendar className="w-4 h-4" />, badge: selectedMonth === 'agosto' ? '15 Posts (Ago)' : selectedMonth === 'setiembre' ? '30 Posts (Set)' : '45 Posts' },
    { id: 'strategy', label: 'Estrategia 3 Fases (Ago-Oct)', icon: <Target className="w-4 h-4" /> },
    { id: 'pillars', label: 'Los 5 Pilares de Yasser', icon: <Users className="w-4 h-4" />, badge: 'Arquetipos' },
    { id: 'future', label: 'Planes Setiembre & Octubre', icon: <Rocket className="w-4 h-4" />, badge: 'Hojas de Ruta' },
    { id: 'flyer', label: 'Diseñador de Flyers APP', icon: <ImageIcon className="w-4 h-4" /> }
  ];

  return (
    <header className="bg-[#005596] text-white border-b-4 border-[#E21F26] sticky top-0 z-40 shadow-xl">
      {/* Primary Brand Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Candidate & Party Identity */}
          <div className="flex items-center space-x-3.5">
            {/* APP Logo Square Box */}
            <div className="bg-white p-1.5 rounded-xl shadow-md shrink-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-lg bg-white border-2 border-[#005596] flex flex-col items-center justify-center text-[#005596] font-black text-xs leading-none">
                <span className="text-[13px] font-black tracking-tighter text-[#005596]">APP</span>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-brand font-black text-white tracking-tight uppercase">
                  {CAMPAIGN_INFO.candidate}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 bg-red-600/90 text-white text-[10px] font-bold rounded uppercase tracking-wider">
                  {CAMPAIGN_INFO.district}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-blue-100">
                <span className="font-semibold">{CAMPAIGN_INFO.role}</span>
                <span>•</span>
                <span className="font-handwriting text-amber-300 text-base leading-none italic font-bold">
                  "{CAMPAIGN_INFO.motto}"
                </span>
              </div>
            </div>
          </div>

          {/* Month & Phase Quick Selector */}
          <div className="flex items-center space-x-2 self-start md:self-auto overflow-x-auto">
            <div className="bg-white/10 backdrop-blur p-1 rounded-2xl border border-white/20 flex items-center space-x-1">
              <button
                onClick={() => {
                  onMonthChange('agosto');
                  onTabChange('calendar');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                  selectedMonth === 'agosto' && activeTab === 'calendar'
                    ? 'bg-[#E21F26] text-white shadow-md'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Fase 1: Ago (17–31)</span>
                <span className="text-[9px] bg-white/20 px-1 py-0.5 rounded font-mono">Activo</span>
              </button>

              <button
                onClick={() => {
                  onMonthChange('setiembre');
                  onTabChange('future');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                  selectedMonth === 'setiembre' || (activeTab === 'future' && selectedMonth === 'setiembre')
                    ? 'bg-[#E21F26] text-white shadow-md'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Fase 2: Setiembre</span>
              </button>

              <button
                onClick={() => {
                  onMonthChange('octubre');
                  onTabChange('future');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                  selectedMonth === 'octubre'
                    ? 'bg-[#E21F26] text-white shadow-md'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>Fase 3: Octubre</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Strategy Rule Ribbon */}
      <div className="bg-white text-slate-800 border-b border-slate-200 px-4 sm:px-8 py-2 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs">
          
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 bg-[#E21F26] text-white rounded text-[10px] font-black uppercase tracking-wider">
              REGLA DE PRODUCCIÓN
            </span>
            <span className="text-xs font-semibold text-slate-700">
              ⚡ <strong>Cero aburrimiento:</strong> Textos cortos, subtítulos dinámicos en todos los videos (estilo Alex Hormozi) y jerarquía visual clara.
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-slate-500 font-medium">
            <span>🔴 Azul y Rojo APP</span>
            <span>•</span>
            <span>📱 ManyChat en Comentarios</span>
            <span>•</span>
            <span>📍 Punta Balcones, Salar y Caleta</span>
          </div>

        </div>
      </div>

      {/* Navigation Tabs Bar */}
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
                {tab.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-black ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-[#005596] border border-blue-200'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
