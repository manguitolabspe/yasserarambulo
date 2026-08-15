import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { CalendarView } from './components/CalendarView';
import { StrategyPhasesView } from './components/StrategyPhasesView';
import { PillarsGuideView } from './components/PillarsGuideView';
import { SeptemberPreviewView } from './components/SeptemberPreviewView';
import { FlyerPreviewer } from './components/FlyerPreviewer';
import { CampaignMonth } from './types';
import { CAMPAIGN_INFO } from './data/parrillaData';

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState<CampaignMonth>('agosto');
  const [activeTab, setActiveTab] = useState<TabType>('calendar');

  const handleMonthChange = (month: CampaignMonth) => {
    setSelectedMonth(month);
    if (month === 'agosto') {
      setActiveTab('calendar');
    } else {
      setActiveTab('future');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col selection:bg-[#E21F26] selection:text-white">
      {/* Top Header Navbar */}
      <Navbar
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Tab 1: Parrilla Diaria de Contenidos (Agosto & Setiembre) */}
        {activeTab === 'calendar' && (
          <CalendarView 
            initialMonth={selectedMonth}
            onMonthChange={setSelectedMonth}
          />
        )}

        {/* Tab 2: Estrategia 3 Fases (Agosto a Octubre) */}
        {activeTab === 'strategy' && (
          <StrategyPhasesView 
            onGoToAugustSprint={() => {
              setSelectedMonth('agosto');
              setActiveTab('calendar');
            }} 
            onGoToSeptemberSprint={() => {
              setSelectedMonth('setiembre');
              setActiveTab('calendar');
            }}
          />
        )}

        {/* Tab 3: Los 5 Arquetipos / Pilares de Yasser */}
        {activeTab === 'pillars' && (
          <PillarsGuideView />
        )}

        {/* Tab 4: Fases Setiembre y Octubre (Serie, Renders IA Sora/Veo, WhatsApp, Voto) */}
        {activeTab === 'future' && (
          <SeptemberPreviewView 
            onBackToAugust={() => {
              setSelectedMonth('agosto');
              setActiveTab('calendar');
            }}
            onGoToSeptemberCalendar={() => {
              setSelectedMonth('setiembre');
              setActiveTab('calendar');
            }}
          />
        )}

        {/* Tab 5: Generador / Diseñador de Flyers Oficiales APP */}
        {activeTab === 'flyer' && (
          <FlyerPreviewer />
        )}

      </main>

      {/* Campaign Footer */}
      <footer className="bg-slate-900 text-white border-t-4 border-[#E21F26] py-6 px-4 sm:px-6 lg:px-8 mt-12 text-xs shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shadow">
              <div className="w-full h-full rounded border border-[#005596] flex items-center justify-center font-brand font-black text-[#005596] text-sm">
                APP
              </div>
            </div>
            <div>
              <span className="font-brand font-black tracking-tight text-white block text-sm uppercase">
                {CAMPAIGN_INFO.candidate} – {CAMPAIGN_INFO.district}
              </span>
              <span className="text-slate-400">
                {CAMPAIGN_INFO.party} • <strong className="font-handwriting text-amber-400 text-base font-bold italic">"{CAMPAIGN_INFO.motto}"</strong>
              </span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="inline-block px-2.5 py-0.5 bg-[#E21F26] text-white text-[10px] font-bold rounded uppercase tracking-widest mb-1">
              Sprint Actualizado: 17 al 31 de Agosto
            </div>
            <p className="font-semibold text-slate-300">
              Estrategia 3 Fases (Ago–Oct) • {CAMPAIGN_INFO.district}, Talara, Piura
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
