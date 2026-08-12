import React from 'react';
import { PRODUCTION_GOALS, DOUBLE_POST_DAYS, POSTS_DATA, CAMPAIGN_INFO } from '../data/parrillaData';
import { BarChart3, CheckCircle2, TrendingUp, Sparkles, Layers, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';

export const MetricsView: React.FC = () => {
  // Calculate actual post format breakdown from POSTS_DATA
  const formatCounts: Record<string, number> = {};
  const pillarCounts: Record<string, number> = {};

  POSTS_DATA.forEach(p => {
    formatCounts[p.format] = (formatCounts[p.format] || 0) + 1;
    pillarCounts[p.pillar] = (pillarCounts[p.pillar] || 0) + 1;
  });

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-[#005596] to-blue-900 border border-blue-800 rounded-2xl p-6 shadow-md text-white space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-800/80 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#E21F26] text-white font-extrabold text-xs rounded uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Metas de Producción del Mes</span>
            </div>
            <h2 className="text-2xl font-black text-white font-brand uppercase tracking-tight">
              Objetivos de Agosto 2026: La Brea–Negritos
            </h2>
            <p className="text-xs text-blue-100 font-medium">
              Estrategia: <strong className="text-white font-bold">{CAMPAIGN_INFO.metaTitle}</strong>
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20 text-xs space-y-1">
            <span className="text-blue-100 block font-bold">Total de Publicaciones en Parrilla:</span>
            <span className="text-2xl font-black text-amber-300 font-brand">{POSTS_DATA.length} piezas</span>
          </div>
        </div>

        {/* Campaign Philosophy summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-xl space-y-1">
            <span className="text-amber-300 font-black uppercase tracking-wider block">
              AGOSTO 2026:
            </span>
            <p className="text-base font-black text-white font-brand uppercase">
              ESCUCHAMOS
            </p>
            <p className="text-blue-100 font-medium">
              Presencia en territorio, diálogo cercano con sectores y registro de necesidades.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-xl space-y-1">
            <span className="text-emerald-300 font-black uppercase tracking-wider block">
              SEPTIEMBRE 2026:
            </span>
            <p className="text-base font-black text-white font-brand uppercase">
              HABLAMOS DE SOLUCIONES
            </p>
            <p className="text-blue-100 font-medium">
              Presentación de propuestas concretas sustentadas en la información recogida.
            </p>
          </div>
        </div>
      </div>

      {/* Production Goals Progress */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900 font-brand uppercase tracking-tight flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-[#005596]" />
          <span>Meta de Producción al Terminar Agosto</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTION_GOALS.map((goal) => {
            const percent = Math.min(100, Math.round((goal.currentCount / goal.targetMax) * 100));

            return (
              <div
                key={goal.id}
                className="bg-white border border-slate-200 border-l-4 border-l-[#005596] rounded-xl p-5 shadow-sm space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 font-brand">
                      {goal.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {goal.description}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-50 text-[#005596] border border-blue-200 rounded-lg text-xs font-bold whitespace-nowrap">
                    {goal.targetMin} - {goal.targetMax} {goal.unit}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Publicado / Planificado:</span>
                    <span className="text-emerald-700 font-bold">{goal.currentCount} {goal.unit} ({percent}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-[#005596] to-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Breakdown by Pilar and Format */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Format distribution */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h4 className="font-black text-base text-slate-900 font-brand uppercase tracking-wider flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#005596]" />
            <span>Distribución por Formato</span>
          </h4>
          <div className="space-y-2.5">
            {Object.entries(formatCounts).map(([fmt, count]) => {
              const pct = Math.round((count / POSTS_DATA.length) * 100);
              return (
                <div key={fmt} className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-700 font-semibold">
                    <span>{fmt}</span>
                    <span className="font-bold text-[#005596]">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-[#005596] rounded-full"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pillar distribution */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <h4 className="font-black text-base text-slate-900 font-brand uppercase tracking-wider flex items-center space-x-2">
            <HeartHandshake className="w-4 h-4 text-[#E21F26]" />
            <span>Distribución por Pilar de Contenido</span>
          </h4>
          <div className="space-y-2.5">
            {Object.entries(pillarCounts).map(([pil, count]) => {
              const pct = Math.round((count / POSTS_DATA.length) * 100);
              return (
                <div key={pil} className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-700 font-semibold">
                    <span>{pil}</span>
                    <span className="font-bold text-[#E21F26]">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-[#E21F26] rounded-full"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Double Post Days List */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-black text-slate-900 font-brand uppercase tracking-tight">
            Resumen de Días con Dos Publicaciones (19 Días Clave)
          </h3>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Para garantizar alto impacto y secuencia lógica (Apertura/Previo por la mañana + Cobertura/Resultado por la noche).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {DOUBLE_POST_DAYS.map((dayText, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs flex items-center space-x-2 text-slate-800 font-semibold"
            >
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                2x
              </div>
              <span>{dayText}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
