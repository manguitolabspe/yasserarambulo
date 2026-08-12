import React, { useState } from 'react';
import { X, Calendar, Clock, Tag, Copy, Check, Share2, Eye, AlertCircle, FileText, Sparkles } from 'lucide-react';
import { PostItem, PostStatus } from '../types';
import { FlyerPreviewer } from './FlyerPreviewer';
import { CAMPAIGN_INFO } from '../data/parrillaData';

interface PostDetailModalProps {
  post: PostItem;
  currentStatus: PostStatus;
  onStatusChange: (status: PostStatus) => void;
  onClose: () => void;
}

export const PostDetailModal: React.FC<PostDetailModalProps> = ({
  post,
  currentStatus,
  onStatusChange,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'flyer'>('details');
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedQuestion, setCopiedQuestion] = useState(false);

  const fullHashtags = `#YasserArámbulo #LaBreaNegritos #SiempreConLaGente #AlianzaParaElProgreso #Agosto2026 #${post.pillar.replace(/\s+/g, '')}`;

  const handleCopyCaption = () => {
    const textToCopy = `
${post.title}

${post.contentCopy}

${post.question ? `💬 ${post.question}\n` : ''}${post.callToAction ? `👉 ${post.callToAction}\n` : ''}
${fullHashtags}
`.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleCopyQuestion = () => {
    if (!post.question) return;
    navigator.clipboard.writeText(post.question);
    setCopiedQuestion(true);
    setTimeout(() => setCopiedQuestion(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col my-auto text-slate-800">
        
        {/* Modal Top Header */}
        <div className="bg-slate-50 p-5 border-b border-slate-200 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 bg-[#E21F26] text-white rounded text-xs font-black uppercase tracking-wider">
              {post.postNumberText}
            </span>
            <span className="text-slate-600 text-xs font-bold flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-[#005596]" />
              <span>{post.dayName}</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Tab switchers */}
            <div className="bg-slate-200 p-1 rounded-xl flex text-xs font-bold">
              <button
                onClick={() => setActiveTab('details')}
                className={`px-3 py-1.5 rounded-lg transition flex items-center space-x-1.5 ${
                  activeTab === 'details' ? 'bg-[#005596] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Detalles y Copy</span>
              </button>
              <button
                onClick={() => setActiveTab('flyer')}
                className={`px-3 py-1.5 rounded-lg transition flex items-center space-x-1.5 ${
                  activeTab === 'flyer' ? 'bg-[#005596] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Previa Flyer</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition font-bold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {activeTab === 'flyer' ? (
            <FlyerPreviewer
              initialDateText={post.dayName}
              initialHeaderTitle={post.title}
              initialSubTitle={post.pitch || post.pillar}
              initialQuestion={post.question || post.contentCopy.slice(0, 100)}
              initialBodyText={post.contentCopy.slice(0, 160)}
              initialPillar={post.pillar}
              onClose={() => setActiveTab('details')}
            />
          ) : (
            <>
              {/* Title & Metadata Header */}
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 font-brand uppercase tracking-tight leading-snug mb-3">
                  {post.title}
                </h2>

                <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#005596] border border-blue-200 uppercase">
                    {post.format}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Pilar: {post.pillar}
                  </span>
                  {post.isDoublePostDay && (
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      ⚡ Día de Doble Publicación
                    </span>
                  )}
                </div>
              </div>

              {/* Status Control Panel */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Estado de la Publicación</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {(['pendiente', 'en_proceso', 'programado', 'publicado'] as PostStatus[]).map((status) => {
                      const isActive = currentStatus === status;
                      const statusLabels: Record<PostStatus, string> = {
                        pendiente: 'Pendiente',
                        en_proceso: 'En Producción',
                        programado: 'Programado',
                        publicado: 'Publicado'
                      };
                      const activeColors: Record<PostStatus, string> = {
                        pendiente: 'bg-slate-700 text-white border-slate-700',
                        en_proceso: 'bg-amber-600 text-white border-amber-600',
                        programado: 'bg-[#005596] text-white border-[#005596]',
                        publicado: 'bg-emerald-600 text-white border-emerald-600'
                      };

                      return (
                        <button
                          key={status}
                          onClick={() => onStatusChange(status)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition ${
                            isActive
                              ? activeColors[status]
                              : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {statusLabels[status]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={handleCopyCaption}
                  className="w-full md:w-auto px-4 py-2.5 bg-[#005596] hover:bg-blue-800 text-white rounded-xl text-xs font-extrabold transition flex items-center justify-center space-x-2 shadow-sm uppercase tracking-wider"
                >
                  {copiedCaption ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCaption ? '¡Caption Copiado!' : 'Copiar Texto Completo'}</span>
                </button>
              </div>

              {/* Hook / Pitch */}
              {(post.hook || post.pitch) && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-1">
                  <span className="text-[11px] font-black text-[#005596] uppercase tracking-wider block">
                    💡 Concepto / Pitch Base
                  </span>
                  <p className="text-sm text-slate-800 font-semibold italic">
                    "{post.hook || post.pitch}"
                  </p>
                </div>
              )}

              {/* Main Copy Body */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs font-black text-slate-600 uppercase tracking-wider">
                    📝 Copy Oficial para Redes Sociales
                  </span>
                  <button
                    onClick={handleCopyCaption}
                    className="text-xs font-bold text-[#005596] hover:underline flex items-center space-x-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </button>
                </div>
                
                <p className="text-sm text-slate-800 whitespace-pre-line leading-relaxed font-medium">
                  {post.contentCopy}
                </p>
              </div>

              {/* Question & Call to Action */}
              {post.question && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>Pregunta Final para Comentarios</span>
                    </span>
                    <button
                      onClick={handleCopyQuestion}
                      className="text-xs font-bold text-amber-900 hover:underline flex items-center space-x-1"
                    >
                      {copiedQuestion ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedQuestion ? '¡Copiado!' : 'Copiar Pregunta'}</span>
                    </button>
                  </div>
                  <p className="text-sm font-bold text-amber-950">
                    "{post.question}"
                  </p>
                </div>
              )}

              {/* Options for Stories */}
              {post.optionsForStories && post.optionsForStories.length > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-black text-purple-900 uppercase tracking-wider block">
                    📊 Opciones para Encuesta en Historias
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {post.optionsForStories.map((opt, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-purple-200 text-purple-900 rounded-lg text-xs font-bold shadow-2xs">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Details / Story Notes / Pending Data */}
              {((post.details && post.details.length > 0) || post.storiesNotes || (post.pendingData && post.pendingData.length > 0)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  
                  {post.details && post.details.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                      <span className="font-extrabold text-slate-800 block uppercase tracking-wider">🎬 Elementos a Mostrar en Video:</span>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                        {post.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {post.storiesNotes && (
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                      <span className="font-extrabold text-slate-800 block uppercase tracking-wider">📱 Estrategia para Historias:</span>
                      <p className="text-slate-700 font-medium italic">{post.storiesNotes}</p>
                    </div>
                  )}

                  {post.pendingData && post.pendingData.length > 0 && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl space-y-2 col-span-full">
                      <span className="font-black text-red-700 uppercase tracking-wider flex items-center space-x-1.5">
                        <AlertCircle className="w-4 h-4" />
                        <span>Datos Pendientes por Confirmar:</span>
                      </span>
                      <ul className="list-disc list-inside text-red-800 font-bold">
                        {post.pendingData.map((pd, i) => (
                          <li key={i}>{pd}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}

              {/* Hashtags section */}
              <div className="pt-2 border-t border-slate-200 text-xs text-slate-500 font-medium">
                <span className="block font-bold mb-1 uppercase tracking-wider">Hashtags Oficiales:</span>
                <p className="text-[#005596] font-mono text-[11px] select-all font-bold">{fullHashtags}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
