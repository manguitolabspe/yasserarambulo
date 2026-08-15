import React, { useState } from 'react';
import { PostItem, PostStatus } from '../types';
import { 
  X, 
  Copy, 
  Check, 
  Video, 
  Image as ImageIcon, 
  MessageSquare, 
  Bot, 
  Sparkles, 
  Zap, 
  Layers, 
  HelpCircle, 
  Share2,
  Calendar
} from 'lucide-react';

interface PostDetailModalProps {
  post: PostItem;
  status: PostStatus;
  onStatusChange: (status: PostStatus) => void;
  onClose: () => void;
}

export const PostDetailModal: React.FC<PostDetailModalProps> = ({
  post,
  status,
  onStatusChange,
  onClose
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleCopyFullPost = () => {
    const full = `📱 PUBLICACIÓN: ${post.title}\n📅 FECHA: ${post.dayName} (${post.date})\n🎬 FORMATO: ${post.format}\n👤 ARQUETIPO: ${post.pillar}\n\n🎥 GUION VISUAL & LOCACIÓN:\n${post.visualScript || ''}\n\n⚡ ESTILO DE PRODUCCIÓN:\n${post.productionStyle || ''}\n\n📝 COPY PARA REDES:\n${post.contentCopy}\n\n🤖 AUTOMATIZACIÓN MANYCHAT / INTERACCIÓN:\n${post.interactiveDetails || ''}\n\n🏷️ HASHTAGS:\n${post.tags.map(t => `#${t.replace(/\s+/g, '')}`).join(' ')}`;
    handleCopy(full, 'full');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#005596] text-white p-5 flex items-start justify-between gap-4 shrink-0 border-b-2 border-[#E21F26]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-[#E21F26] text-white text-[10px] font-black rounded uppercase tracking-wider">
                {post.dayName}
              </span>
              <span className="text-xs text-blue-200 font-bold">
                {post.pillar}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-brand uppercase tracking-tight text-white leading-snug">
              {post.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          
          {/* Quick Actions & Status Control Bar */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-600">Estado:</span>
              <select
                value={status}
                onChange={(e) => onStatusChange(e.target.value as PostStatus)}
                className="text-xs font-black px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-[#005596] focus:outline-none focus:ring-2 focus:ring-[#005596]"
              >
                <option value="pendiente">⚪ Pendiente</option>
                <option value="en_proceso">🟡 En Edición / Grabación</option>
                <option value="programado">🔵 Programado</option>
                <option value="publicado">🟢 Publicado</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopyFullPost}
                className="px-3.5 py-1.5 bg-[#005596] hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1.5 shadow-sm"
              >
                {copiedSection === 'full' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSection === 'full' ? '¡Todo Copiado!' : 'Copiar Pauta Completa'}</span>
              </button>
            </div>
          </div>

          {/* Visual Script & Production Instructions */}
          {post.visualScript && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider font-brand flex items-center space-x-2">
                  <Video className="w-4 h-4 text-red-600" />
                  <span>Guion Visual, Locación & Cámara:</span>
                </h4>
                <button
                  onClick={() => handleCopy(post.visualScript || '', 'visual')}
                  className="text-[11px] text-[#005596] hover:underline font-bold flex items-center space-x-1"
                >
                  {copiedSection === 'visual' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>Copiar Guion</span>
                </button>
              </div>
              <div className="bg-red-50/60 border border-red-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {post.visualScript}
              </div>
            </div>
          )}

          {/* Production Style & Hormozi Subtitles */}
          {post.productionStyle && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start space-x-3 text-xs text-amber-950 font-semibold">
              <Zap className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <span className="font-bold block uppercase tracking-wider text-[10px] text-amber-800">Estilo de Edición Requerido:</span>
                <span>{post.productionStyle}</span>
              </div>
            </div>
          )}

          {/* Hook & Message */}
          {post.hook && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-black text-[#005596] uppercase tracking-wider block">
                Gancho de los Primeros 3 Segundos (Hook):
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900 italic">
                "{post.hook}"
              </p>
            </div>
          )}

          {/* Carousel Slides (if any) */}
          {post.carouselSlides && post.carouselSlides.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider font-brand flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#005596]" />
                <span>Estructura de Láminas del Carrusel:</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {post.carouselSlides.map((slide, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-semibold text-slate-800 flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-[#005596] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{slide}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Copy Text For Social Networks */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider font-brand flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Texto Oficial para el Post (Copywriting):</span>
              </h4>
              <button
                onClick={() => handleCopy(post.contentCopy, 'copy')}
                className="text-[11px] text-[#005596] hover:underline font-bold flex items-center space-x-1"
              >
                {copiedSection === 'copy' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>Copiar Copy</span>
              </button>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 whitespace-pre-line font-mono font-medium leading-relaxed select-all">
              {post.contentCopy}
            </div>
          </div>

          {/* Interactive Automation & ManyChat */}
          {post.interactiveDetails && (
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-1.5">
              <div className="flex items-center space-x-2 text-purple-900 font-bold text-xs">
                <Bot className="w-4 h-4 text-purple-600" />
                <span className="uppercase tracking-wider text-[10px]">Estrategia de Interacción & Automatización ManyChat:</span>
              </div>
              <p className="text-xs text-purple-950 font-semibold leading-relaxed">
                {post.interactiveDetails}
              </p>
            </div>
          )}

          {/* Tags & Platforms */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-200">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[11px] font-bold">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="text-slate-500 font-bold text-[11px]">
              Plataformas: {post.platforms.join(' • ')}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-500 font-medium">
            Campaña Yasser Arámbulo • Alianza para el Progreso
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs transition"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
