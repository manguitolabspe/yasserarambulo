import React, { useState } from 'react';
import { Calendar, User, MessageCircle, Sparkles, Download, Copy, Check, Eye } from 'lucide-react';
import { CAMPAIGN_INFO } from '../data/parrillaData';

interface FlyerPreviewerProps {
  initialDateText?: string;
  initialHeaderTitle?: string;
  initialSubTitle?: string;
  initialQuestion?: string;
  initialBodyText?: string;
  initialPillar?: string;
  onClose?: () => void;
}

export const FlyerPreviewer: React.FC<FlyerPreviewerProps> = ({
  initialDateText = 'MIÉRCOLES 12 DE AGOSTO',
  initialHeaderTitle = 'DÍA INTERNACIONAL DE LA JUVENTUD',
  initialSubTitle = 'LA JUVENTUD NO SOLO ES EL FUTURO, TAMBIÉN ES EL PRESENTE',
  initialQuestion = '¿Qué necesita hoy un joven para poder desarrollarse en La Brea–Negritos?',
  initialBodyText = 'Escuchar sus ideas, preocupaciones y expectativas también es construir comunidad.',
  initialPillar = 'Juventud',
  onClose
}) => {
  const [dateText, setDateText] = useState(initialDateText);
  const [headerTitle, setHeaderTitle] = useState(initialHeaderTitle);
  const [subTitle, setSubTitle] = useState(initialSubTitle);
  const [bodyText, setBodyText] = useState(initialBodyText);
  const [question, setQuestion] = useState(initialQuestion);
  const [copied, setCopied] = useState(false);
  const [eventLocation, setEventLocation] = useState('');
  const [eventTime, setEventTime] = useState('');

  const handleCopySummary = () => {
    const flyerSummary = `
🎨 FLYER OFICIAL - CAMPAÑA YASSER ARÁMBULO
------------------------------------------------
FECHA: ${dateText}
TITULO: ${headerTitle}
SUBTÍTULO: ${subTitle}
CUERPO: ${bodyText}
PREGUNTA CIUDADANA: ${question}
${eventLocation ? `LUGAR: ${eventLocation}\n` : ''}${eventTime ? `HORA: ${eventTime}\n` : ''}
CANDIDATO: Yasser Arámbulo - Alcalde Distrital La Brea–Negritos
ORGANIZACIÓN: Alianza para el Progreso (A)
IDENTIDAD: "Siempre con la gente"
------------------------------------------------
`.trim();

    navigator.clipboard.writeText(flyerSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header bar */}
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#005596]">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900 font-brand uppercase tracking-tight">Generador Visual de Flyer Oficial</h3>
            <p className="text-xs text-slate-500 font-medium">Estilo Alianza para el Progreso - Yasser Arámbulo</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopySummary}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#005596] hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition shadow-2xs"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Copiado!' : 'Copiar Texto Flyer'}</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-bold transition"
            >
              Cerrar
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
        {/* Editor controls */}
        <div className="lg:col-span-5 space-y-4 text-xs">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-black text-slate-800 uppercase tracking-wider text-[11px] flex items-center space-x-1.5 font-brand">
              <Sparkles className="w-4 h-4 text-[#E21F26]" />
              <span>Personalizar Textos del Flyer</span>
            </h4>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Insignia de Fecha / Encabezado Superior</label>
              <input
                type="text"
                value={dateText}
                onChange={(e) => setDateText(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#005596] font-semibold"
                placeholder="Ej. SÁBADO 15 DE AGOSTO"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Título Principal (Banner Rojo)</label>
              <input
                type="text"
                value={headerTitle}
                onChange={(e) => setHeaderTitle(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#005596] font-extrabold font-brand"
                placeholder="Ej. NEGRITOS, QUEREMOS ESCUCHARTE"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Subtítulo / Bajada Impacto</label>
              <textarea
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                rows={2}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#005596] font-medium"
                placeholder="Ej. Encuentro Juvenil con Yasser Arámbulo"
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Texto Descriptivo / Mensaje Base</label>
              <textarea
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                rows={2}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#005596] font-medium"
                placeholder="Ej. Escuchar sus ideas y proyectos es nuestro compromiso."
              />
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1">Pregunta Ciudadana (Caja de Diálogo)</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={2}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-[#005596] font-semibold"
                placeholder="Ej. ¿Qué oportunidad hace más falta en tu sector?"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Hora (Opcional)</label>
                <input
                  type="text"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-900 focus:outline-none font-medium"
                  placeholder="Ej. 5:00 PM"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-bold mb-1">Lugar (Opcional)</label>
                <input
                  type="text"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-900 focus:outline-none font-medium"
                  placeholder="Ej. Local Comunal"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Canvas Mockup */}
        <div className="lg:col-span-7 flex justify-center items-center">
          <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-sky-100 via-blue-50 to-blue-200 text-slate-900 p-5 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between border-4 border-white selection:bg-red-500 selection:text-white">
            
            {/* Background geometric accents */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
            
            {/* Dots Grid Pattern */}
            <div className="absolute top-4 left-4 grid grid-cols-4 gap-1 opacity-25 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-blue-700 rounded-full"></div>
              ))}
            </div>

            {/* Top Date Badge */}
            <div className="relative z-10 text-center mb-2">
              <div className="inline-flex items-center space-x-2 bg-[#0B306E] text-white font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-md">
                <Calendar className="w-3.5 h-3.5 text-blue-300" />
                <span>{dateText || 'FECHA POR CONFIRMAR'}</span>
              </div>
            </div>

            {/* Main Header Banner */}
            <div className="relative z-10 mb-3 text-center space-y-1">
              <div className="bg-[#D31222] text-white font-extrabold text-base md:text-xl py-1.5 px-4 rounded-lg shadow-lg tracking-tight uppercase inline-block border-2 border-white font-brand">
                {headerTitle || 'TITULO OFICIAL'}
              </div>
              {subTitle && (
                <div className="bg-[#0B306E] text-white font-bold text-xs md:text-sm py-1 px-3 rounded-md inline-block shadow-sm font-brand max-w-full">
                  {subTitle}
                </div>
              )}
            </div>

            {/* Content Area & Candidate Split */}
            <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-auto">
              
              {/* Left Content Card */}
              <div className="col-span-7 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-blue-200 shadow-md flex flex-col justify-between space-y-2.5">
                
                {bodyText && (
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-bold text-xs shadow-sm">
                      i
                    </div>
                    <p className="text-[11px] leading-snug text-slate-700 font-medium">
                      {bodyText}
                    </p>
                  </div>
                )}

                {/* Speech Bubble Question Box */}
                {question && (
                  <div className="relative bg-blue-50 border-2 border-blue-400 p-2.5 rounded-xl shadow-inner text-slate-900">
                    <div className="flex items-start space-x-2">
                      <div className="w-7 h-7 rounded-full bg-[#0B306E] text-white flex-shrink-0 flex items-center justify-center font-bold text-sm shadow">
                        ?
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0B306E] leading-tight font-brand">
                          {question}
                        </p>
                      </div>
                    </div>
                    {/* Speech bubble tail */}
                    <div className="absolute -bottom-2 left-6 w-3 h-3 bg-blue-50 border-r-2 border-b-2 border-blue-400 rotate-45"></div>
                  </div>
                )}

                {(eventTime || eventLocation) && (
                  <div className="pt-1 border-t border-slate-200 flex flex-wrap gap-2 text-[10px] text-slate-600 font-semibold">
                    {eventTime && <span>🕒 {eventTime}</span>}
                    {eventLocation && <span>📍 {eventLocation}</span>}
                  </div>
                )}
              </div>

              {/* Right Candidate Visual */}
              <div className="col-span-5 flex flex-col items-center text-center">
                
                {/* Simulated Avatar / Candidate portrait */}
                <div className="relative mb-1">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-blue-400 to-[#0B306E] p-1 shadow-lg overflow-hidden flex items-center justify-center relative">
                    <div className="w-full h-full rounded-full bg-slate-100 flex flex-col items-center justify-end overflow-hidden pt-2">
                      {/* Stylized Candidate Silhouette / Illustration */}
                      <div className="w-10 h-10 rounded-full bg-amber-200 border-2 border-slate-300 mb-1 flex items-center justify-center text-slate-700 font-bold text-xs">
                        YA
                      </div>
                      <div className="w-20 h-14 bg-white border-t border-slate-300 rounded-t-2xl flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-[#D31222] text-white font-extrabold text-[9px] flex items-center justify-center border border-white">
                          A
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circle 'A' Party Logo on Candidate */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-[#D31222] flex items-center justify-center shadow-md">
                    <span className="font-extrabold text-[#0B306E] text-xs font-brand">A</span>
                  </div>
                </div>

                {/* Candidate Name Banner */}
                <div className="bg-[#0B306E] text-white font-black text-xs px-3 py-1 rounded-md shadow-md tracking-wide uppercase font-brand w-full text-center border border-blue-400/30">
                  {CAMPAIGN_INFO.candidate}
                </div>
                
                {/* Role Banners */}
                <div className="mt-0.5 space-y-0.5 w-full">
                  <div className="bg-[#D31222] text-white font-bold text-[9px] py-0.5 px-2 rounded-xs uppercase tracking-wider">
                    ALCALDE DISTRITAL DE
                  </div>
                  <div className="bg-[#0B306E] text-white font-extrabold text-[10px] py-0.5 px-2 rounded-xs uppercase tracking-wider font-brand">
                    LA BREA–NEGRITOS
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Branding */}
            <div className="relative z-10 pt-2 border-t border-blue-200/80 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-[#D31222] flex items-center justify-center shadow">
                  <span className="font-extrabold text-[#0B306E] text-xs font-brand">A</span>
                </div>
                <div>
                  <span className="font-handwriting text-xl font-bold text-[#0B306E] tracking-wide block leading-none">
                    Siempre con la gente
                  </span>
                  <div className="w-16 h-0.5 bg-[#D31222] rounded-full mt-0.5"></div>
                </div>
              </div>

              <div className="text-[9px] font-bold text-[#0B306E] text-right uppercase tracking-wider">
                Alianza para el Progreso
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
