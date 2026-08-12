import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { CalendarView } from './components/CalendarView';
import { EventsView } from './components/EventsView';
import { FlyerPreviewer } from './components/FlyerPreviewer';
import { ExtraFlyersView } from './components/ExtraFlyersView';
import { DerivativesView } from './components/DerivativesView';
import { MetricsView } from './components/MetricsView';
import { PostDetailModal } from './components/PostDetailModal';
import { PostItem, PostStatus } from './types';
import { getStoredPostStatuses, savePostStatus } from './utils/storage';
import { CAMPAIGN_INFO } from './data/parrillaData';
import { Sparkles, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('calendar');
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [postStatuses, setPostStatuses] = useState<Record<string, PostStatus>>(() => getStoredPostStatuses());

  const handleSelectPost = (post: PostItem) => {
    setSelectedPost(post);
  };

  const handleStatusChange = (postId: string, status: PostStatus) => {
    savePostStatus(postId, status);
    setPostStatuses(prev => ({ ...prev, [postId]: status }));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col selection:bg-[#E21F26] selection:text-white">
      {/* Top Header Navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Render view according to activeTab */}
        {activeTab === 'calendar' && (
          <CalendarView onSelectPost={handleSelectPost} />
        )}

        {activeTab === 'events' && (
          <EventsView onSelectPost={handleSelectPost} />
        )}

        {activeTab === 'flyer_generator' && (
          <FlyerPreviewer />
        )}

        {activeTab === 'extra_flyers' && (
          <ExtraFlyersView />
        )}

        {activeTab === 'derivatives' && (
          <DerivativesView />
        )}

        {activeTab === 'metrics' && (
          <MetricsView />
        )}

      </main>

      {/* Detail Modal Overlay */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          currentStatus={postStatuses[selectedPost.id] || 'pendiente'}
          onStatusChange={(newStatus) => handleStatusChange(selectedPost.id, newStatus)}
          onClose={() => setSelectedPost(null)}
        />
      )}

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
                Yasser Arámbulo – La Brea–Negritos
              </span>
              <span className="text-slate-400">
                Alianza para el Progreso • <strong className="font-handwriting text-amber-400 text-base font-bold italic">"Siempre con la gente"</strong>
              </span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="inline-block px-2.5 py-0.5 bg-[#E21F26] text-white text-[10px] font-bold rounded uppercase tracking-widest mb-1">
              Parrilla Maestra Reprogramada
            </div>
            <p className="font-semibold text-slate-300">
              Estrategia Agosto 2026: Escuchar + Explicar + Construir Confianza
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
