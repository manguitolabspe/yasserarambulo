import React, { useState, useEffect } from 'react';
import { DERIVATIVE_FOLDERS } from '../data/parrillaData';
import { getStoredDerivativeStatuses, saveDerivativeStatus } from '../utils/storage';
import { Folder, Film, CheckCircle2, Circle, Database, Sparkles } from 'lucide-react';

export const DerivativesView: React.FC = () => {
  const [statuses, setStatuses] = useState<Record<string, 'pendiente' | 'guardado'>>({});

  useEffect(() => {
    setStatuses(getStoredDerivativeStatuses());
  }, []);

  const toggleItemStatus = (itemId: string) => {
    const current = statuses[itemId] || 'pendiente';
    const next = current === 'pendiente' ? 'guardado' : 'pendiente';
    saveDerivativeStatus(itemId, next);
    setStatuses(prev => ({ ...prev, [itemId]: next }));
  };

  const totalItems = DERIVATIVE_FOLDERS.reduce((acc, f) => acc + f.items.length, 0);
  const savedCount = Object.values(statuses).filter(s => s === 'guardado').length;
  const progressPercent = Math.round((savedCount / totalItems) * 100) || 0;

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#005596] to-blue-900 border border-blue-800 rounded-2xl p-6 shadow-md text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded uppercase tracking-wider">
            <Database className="w-3.5 h-3.5" />
            <span>Banco Audiovisual de Campaña</span>
          </div>
          <h2 className="text-2xl font-black text-white font-brand uppercase tracking-tight">
            Contenidos Derivados por Evento
          </h2>
          <p className="text-xs text-blue-100 leading-relaxed font-medium">
            "No debemos publicar todo inmediatamente. Cada evento genera una carpeta de material crudo y clips listos para alimentar septiembre."
          </p>
        </div>

        {/* Progress summary box */}
        <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20 min-w-[240px] space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-white">Material Guardado</span>
            <span className="font-black text-amber-300">{savedCount} de {totalItems} ({progressPercent}%)</span>
          </div>
          <div className="w-full h-2.5 bg-blue-950/60 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Folders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DERIVATIVE_FOLDERS.map((folder) => {
          const folderSaved = folder.items.filter(i => (statuses[i.id] || 'pendiente') === 'guardado').length;
          const folderTotal = folder.items.length;
          const folderPercent = Math.round((folderSaved / folderTotal) * 100);

          return (
            <div
              key={folder.id}
              className="bg-white border border-slate-200 border-l-4 border-l-[#005596] rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#005596] border border-blue-200 flex items-center justify-center font-bold shrink-0">
                      <Folder className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-[#005596] uppercase tracking-wider block">
                        EVENTO #{folder.eventNumber}
                      </span>
                      <h3 className="font-extrabold text-sm text-slate-900 font-brand">
                        {folder.eventName}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg border border-slate-200">
                    {folderSaved}/{folderTotal}
                  </span>
                </div>

                {/* Items checklist */}
                <div className="space-y-2">
                  {folder.items.map((item) => {
                    const isGuardado = (statuses[item.id] || 'pendiente') === 'guardado';
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggleItemStatus(item.id)}
                        className={`w-full text-left p-2.5 rounded-xl border transition flex items-start space-x-2.5 ${
                          isGuardado
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                            : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        {isGuardado ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        )}
                        <div>
                          <div className={`font-bold text-xs ${isGuardado ? 'line-through text-emerald-800' : 'text-slate-900'}`}>
                            {item.name}
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug font-medium">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Progress bar for folder */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center justify-between">
                <span>Avance de Carpeta:</span>
                <span className="font-bold text-[#005596]">{folderPercent}% listo</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
