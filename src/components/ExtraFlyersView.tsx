import React, { useState } from 'react';
import { ExtraFlyer } from '../types';
import { EXTRA_FLYERS } from '../data/parrillaData';
import { FlyerPreviewer } from './FlyerPreviewer';
import { Copy, Check, Eye, Layers, Sparkles } from 'lucide-react';

export const ExtraFlyersView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedFlyerForPreview, setSelectedFlyerForPreview] = useState<ExtraFlyer | null>(null);

  const handleCopy = (flyer: ExtraFlyer) => {
    const text = `
FLYER EXTRA #${flyer.id} - ${flyer.title}
Tipo: ${flyer.type}
${flyer.subtitle ? `Subtítulo: ${flyer.subtitle}\n` : ''}${flyer.text ? `Texto: ${flyer.text}\n` : ''}${flyer.question ? `Pregunta: ${flyer.question}\n` : ''}
Campaña: Yasser Arámbulo - "Siempre con la gente"
`.trim();

    navigator.clipboard.writeText(text);
    setCopiedId(flyer.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-[#005596] to-blue-900 border border-blue-800 rounded-2xl p-6 shadow-md text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Banco de Gráficos Comodín</span>
          </div>
          <h2 className="text-2xl font-black text-white font-brand uppercase tracking-tight">
            12 Flyers Adicionales para Espacios Libres
          </h2>
          <p className="text-xs text-blue-100 leading-relaxed">
            Diseños estratégicos sin fecha fija para reforzar los pilares del mes o cubrir huecos en la agenda de publicación según la coyuntura del distrito.
          </p>
        </div>

        <div className="text-right text-xs text-white bg-white/10 backdrop-blur p-3.5 rounded-xl border border-white/20">
          <span className="font-extrabold block text-sm font-brand">12 Plantillas Listas</span>
          <span className="text-blue-100 text-[11px]">Disponibles en cualquier momento</span>
        </div>
      </div>

      {/* Preview Modal if selected */}
      {selectedFlyerForPreview && (
        <FlyerPreviewer
          initialDateText="ESPACIO LIBRE / HOY"
          initialHeaderTitle={selectedFlyerForPreview.title}
          initialSubTitle={selectedFlyerForPreview.subtitle || selectedFlyerForPreview.type}
          initialQuestion={selectedFlyerForPreview.question || ''}
          initialBodyText={selectedFlyerForPreview.text || ''}
          initialPillar={selectedFlyerForPreview.type}
          onClose={() => setSelectedFlyerForPreview(null)}
        />
      )}

      {/* Grid of 12 Extra Flyers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {EXTRA_FLYERS.map((flyer) => (
          <div
            key={flyer.id}
            className="bg-white border border-slate-200 border-l-4 border-l-[#005596] hover:border-[#005596] rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#E21F26] text-white rounded text-[10px] font-black uppercase">
                  FLYER EXTRA #{flyer.id}
                </span>
                <span className="text-[10px] font-extrabold text-[#005596] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full uppercase">
                  {flyer.type}
                </span>
              </div>

              <div>
                <h3 className="text-base font-black text-slate-900 font-brand group-hover:text-[#005596] transition line-clamp-2">
                  {flyer.title}
                </h3>
                {flyer.subtitle && (
                  <p className="text-xs text-[#005596] font-extrabold mt-1">
                    {flyer.subtitle}
                  </p>
                )}
              </div>

              {flyer.text && (
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                  {flyer.text}
                </p>
              )}

              {flyer.question && (
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl">
                  <span className="text-[10px] font-black text-amber-900 uppercase block mb-1">
                    ❓ Pregunta Interactiva:
                  </span>
                  <p className="text-xs font-bold text-amber-900 italic">
                    "{flyer.question}"
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => setSelectedFlyerForPreview(flyer)}
                className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#005596] border border-blue-200 rounded-lg font-bold transition flex items-center space-x-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Previa</span>
              </button>

              <button
                onClick={() => handleCopy(flyer)}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold transition flex items-center space-x-1.5 border border-slate-200"
              >
                {copiedId === flyer.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === flyer.id ? 'Copiado' : 'Copiar Texto'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
