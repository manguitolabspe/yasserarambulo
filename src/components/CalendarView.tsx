import React, { useState, useMemo } from 'react';
import { POSTS_DATA } from '../data/parrillaData';
import { PostItem, PostStatus, PostPillarKey, CampaignMonth } from '../types';
import { PostDetailModal } from './PostDetailModal';
import { 
  Search, 
  Filter, 
  Calendar as CalendarIcon, 
  Video, 
  Image as ImageIcon, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  Layers, 
  MessageSquare,
  Bot,
  Zap,
  HelpCircle
} from 'lucide-react';
import { getStoredPostStatuses, savePostStatus } from '../utils/storage';

interface CalendarViewProps {
  initialMonth?: CampaignMonth | 'todos';
  onMonthChange?: (month: CampaignMonth) => void;
  onSelectPost?: (post: PostItem) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  initialMonth = 'agosto',
  onMonthChange,
  onSelectPost
}) => {
  const [selectedMonth, setSelectedMonth] = useState<CampaignMonth | 'todos'>(initialMonth);
  const [selectedWeek, setSelectedWeek] = useState<number | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<string>('todos');
  const [selectedFormat, setSelectedFormat] = useState<string>('todos');
  const [selectedStatus, setSelectedStatus] = useState<string>('todos');
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [postStatuses, setPostStatuses] = useState<Record<string, PostStatus>>(() => getStoredPostStatuses());
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  // Sync external initialMonth if changed
  React.useEffect(() => {
    if (initialMonth) {
      setSelectedMonth(initialMonth);
    }
  }, [initialMonth]);

  const handleMonthSelect = (m: CampaignMonth | 'todos') => {
    setSelectedMonth(m);
    setSelectedWeek('todos');
    if (m !== 'todos' && onMonthChange) {
      onMonthChange(m);
    }
  };

  const handleStatusChange = (postId: string, newStatus: PostStatus, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...postStatuses, [postId]: newStatus };
    setPostStatuses(updated);
    savePostStatus(postId, newStatus);
  };

  const handleCopyPost = (post: PostItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const fullText = `TITULO: ${post.title}\nFECHA: ${post.dayName} (${post.date})\nFORMATO: ${post.format}\nPILAR: ${post.pillar}\n\nGUION VISUAL / LOCACIÓN:\n${post.visualScript || ''}\n\nCOPY PARA REDES:\n${post.contentCopy}`;
    navigator.clipboard.writeText(fullText);
    setCopiedPostId(post.id);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  // Filter posts
  const filteredPosts = useMemo(() => {
    return POSTS_DATA.filter(post => {
      const status = postStatuses[post.id] || 'pendiente';
      
      // Month match
      if (selectedMonth !== 'todos' && post.month !== selectedMonth) {
        return false;
      }

      // Week match (if filtering by week in September or August)
      if (selectedWeek !== 'todos') {
        if (post.month === 'setiembre' && post.weekNumber !== selectedWeek) {
          return false;
        }
        if (post.month === 'agosto') {
          const dayNum = parseInt(post.date.split('-')[2], 10);
          const isWeek1 = dayNum <= 23;
          if (selectedWeek === 1 && !isWeek1) return false;
          if (selectedWeek === 2 && isWeek1) return false;
          if (selectedWeek > 2) return false;
        }
      }

      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.contentCopy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.pillar.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.dayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesPillar = selectedPillar === 'todos' || post.pillar.toLowerCase().includes(selectedPillar.toLowerCase());
      const matchesFormat = selectedFormat === 'todos' || post.format.toLowerCase().includes(selectedFormat.toLowerCase());
      const matchesStatus = selectedStatus === 'todos' || status === selectedStatus;

      return matchesSearch && matchesPillar && matchesFormat && matchesStatus;
    });
  }, [selectedMonth, selectedWeek, searchQuery, selectedPillar, selectedFormat, selectedStatus, postStatuses]);

  // Pillar badge color helpers
  const getPillarBadge = (pillar: PostPillarKey) => {
    const p = pillar.toLowerCase();
    if (p.includes('yasser 1') || p.includes('ciudadano')) {
      return { bg: 'bg-blue-100 text-blue-800 border-blue-200', label: 'Yasser 1: El Ciudadano' };
    }
    if (p.includes('yasser 2') || p.includes('gestor')) {
      return { bg: 'bg-emerald-100 text-emerald-800 border-emerald-200', label: 'Yasser 2: El Gestor' };
    }
    if (p.includes('yasser 3') || p.includes('fiscaliz')) {
      return { bg: 'bg-red-100 text-red-800 border-red-200', label: 'Yasser 3: El Fiscalizador' };
    }
    if (p.includes('yasser 4') || p.includes('líder') || p.includes('lider')) {
      return { bg: 'bg-amber-100 text-amber-800 border-amber-200', label: 'Yasser 4: Líder Territorial' };
    }
    if (p.includes('yasser 5') || p.includes('equipo') || p.includes('candidato')) {
      return { bg: 'bg-purple-100 text-purple-800 border-purple-200', label: 'El Equipo / APP' };
    }
    if (p.includes('salud')) {
      return { bg: 'bg-rose-100 text-rose-800 border-rose-200', label: 'Salud' };
    }
    if (p.includes('pesca')) {
      return { bg: 'bg-cyan-100 text-cyan-800 border-cyan-200', label: 'Pesca y Puerto' };
    }
    if (p.includes('mujer')) {
      return { bg: 'bg-pink-100 text-pink-800 border-pink-200', label: 'Emprende Mujer' };
    }
    if (p.includes('turismo')) {
      return { bg: 'bg-orange-100 text-orange-800 border-orange-200', label: 'Turismo' };
    }
    if (p.includes('medio ambiente') || p.includes('ambiental')) {
      return { bg: 'bg-teal-100 text-teal-800 border-teal-200', label: 'Medio Ambiente' };
    }
    if (p.includes('juventud')) {
      return { bg: 'bg-indigo-100 text-indigo-800 border-indigo-200', label: 'Juventud y Deporte' };
    }
    if (p.includes('seguridad')) {
      return { bg: 'bg-slate-800 text-white border-slate-700', label: 'Seguridad' };
    }
    if (p.includes('transparencia') || p.includes('institucional')) {
      return { bg: 'bg-violet-100 text-violet-800 border-violet-200', label: 'Transparencia' };
    }
    if (p.includes('propuesta')) {
      return { bg: 'bg-emerald-100 text-emerald-800 border-emerald-200', label: 'Propuesta Técnica' };
    }
    if (p.includes('interacci') || p.includes('historias')) {
      return { bg: 'bg-sky-100 text-sky-800 border-sky-200', label: 'Interacción' };
    }
    if (p.includes('cierre')) {
      return { bg: 'bg-red-600 text-white border-red-700', label: 'Cierre de Mes' };
    }
    return { bg: 'bg-slate-100 text-slate-800 border-slate-200', label: pillar };
  };

  const getFormatIcon = (format: string) => {
    const f = format.toLowerCase();
    if (f.includes('reel') || f.includes('video') || f.includes('tiktok') || f.includes('promo') || f.includes('trend')) {
      return <Video className="w-3.5 h-3.5 text-red-600 shrink-0" />;
    }
    if (f.includes('flyer') || f.includes('carrusel') || f.includes('infografía') || f.includes('foto')) {
      return <ImageIcon className="w-3.5 h-3.5 text-blue-600 shrink-0" />;
    }
    if (f.includes('historias') || f.includes('story') || f.includes('encuesta')) {
      return <MessageSquare className="w-3.5 h-3.5 text-amber-600 shrink-0" />;
    }
    return <FileText className="w-3.5 h-3.5 text-slate-600 shrink-0" />;
  };

  const getStatusBadge = (status: PostStatus) => {
    switch (status) {
      case 'publicado':
        return { bg: 'bg-emerald-600 text-white', icon: <CheckCircle2 className="w-3 h-3" />, label: 'Publicado' };
      case 'programado':
        return { bg: 'bg-blue-600 text-white', icon: <Clock className="w-3 h-3" />, label: 'Programado' };
      case 'en_proceso':
        return { bg: 'bg-amber-500 text-white', icon: <Zap className="w-3 h-3" />, label: 'En Edición' };
      default:
        return { bg: 'bg-slate-200 text-slate-700', icon: <Clock className="w-3 h-3" />, label: 'Pendiente' };
    }
  };

  const getMonthAbbr = (dateStr: string) => {
    const m = dateStr.split('-')[1];
    if (m === '08') return 'AGO';
    if (m === '09') return 'SET';
    if (m === '10') return 'OCT';
    return '';
  };

  const augustCount = POSTS_DATA.filter(p => p.month === 'agosto').length;
  const septemberCount = POSTS_DATA.filter(p => p.month === 'setiembre').length;

  return (
    <div className="space-y-6">
      
      {/* Top Banner with Month Toggle & Phase Info */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-[#E21F26] text-white text-[10px] font-black rounded uppercase tracking-wider">
                {selectedMonth === 'agosto' ? 'FASE 1: 17 AL 31 DE AGOSTO' : selectedMonth === 'setiembre' ? 'FASE 2: 1 AL 30 DE SETIEMBRE' : 'PARRILLA GENERAL'}
              </span>
              <span className="text-xs font-bold text-[#005596]">
                {selectedMonth === 'agosto' ? '"El Ciudadano y el Territorio"' : selectedMonth === 'setiembre' ? '"El Gestor y sus Propuestas"' : 'Agosto & Setiembre 2026'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-brand uppercase tracking-tight">
              {selectedMonth === 'agosto' && 'Parrilla de Agosto — 15 Contenidos Estratégicos'}
              {selectedMonth === 'setiembre' && 'Parrilla de Setiembre — 30 Contenidos Técnicos'}
              {selectedMonth === 'todos' && `Parrilla Completa — ${POSTS_DATA.length} Publicaciones Planificadas`}
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              {selectedMonth === 'agosto' && 'Cero aburrimiento • Subtítulos estilo Alex Hormozi • Vlogger territorial en Punta Balcones y Negritos'}
              {selectedMonth === 'setiembre' && 'Serie "Yasser y su Experiencia" • Renders IA (Sora/Veo) • Desglose técnico de Agua, Salud, Pesca, Empleo y Seguridad'}
              {selectedMonth === 'todos' && 'Visualización global del plan de comunicación digital para la campaña La Brea–Negritos'}
            </p>
          </div>

          {/* Month Switcher Tabs */}
          <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => handleMonthSelect('agosto')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                selectedMonth === 'agosto'
                  ? 'bg-[#005596] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <span>Agosto (17–31)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${selectedMonth === 'agosto' ? 'bg-white/20' : 'bg-slate-200'}`}>
                {augustCount}
              </span>
            </button>

            <button
              onClick={() => handleMonthSelect('setiembre')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center space-x-1.5 ${
                selectedMonth === 'setiembre'
                  ? 'bg-[#005596] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <span>Setiembre (1–30)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${selectedMonth === 'setiembre' ? 'bg-white/20' : 'bg-slate-200'}`}>
                {septemberCount}
              </span>
            </button>

            <button
              onClick={() => handleMonthSelect('todos')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                selectedMonth === 'todos'
                  ? 'bg-[#005596] text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Todos ({POSTS_DATA.length})
            </button>
          </div>
        </div>

        {/* Dynamic Week Filter for September or August */}
        {selectedMonth === 'setiembre' && (
          <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 font-bold shrink-0">Semanas de Setiembre:</span>
            <button
              onClick={() => setSelectedWeek('todos')}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 'todos'
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todo Setiembre (30)
            </button>
            <button
              onClick={() => setSelectedWeek(1)}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 1
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semana 1: Agua & Salud (1–6)
            </button>
            <button
              onClick={() => setSelectedWeek(2)}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 2
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semana 2: Pesca, Empleo & Mujer (7–13)
            </button>
            <button
              onClick={() => setSelectedWeek(3)}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 3
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semana 3: Turismo & Juventud (14–20)
            </button>
            <button
              onClick={() => setSelectedWeek(4)}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 4
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semana 4: Seguridad & Cierre (21–30)
            </button>
          </div>
        )}

        {selectedMonth === 'agosto' && (
          <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-500 font-bold shrink-0">Etapas de Agosto:</span>
            <button
              onClick={() => setSelectedWeek('todos')}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 'todos'
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todo Agosto (15 posts)
            </button>
            <button
              onClick={() => setSelectedWeek(1)}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 1
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semana 1: Conocemos y Escuchamos (17–23 Ago)
            </button>
            <button
              onClick={() => setSelectedWeek(2)}
              className={`px-2.5 py-1 rounded-lg font-bold transition shrink-0 ${
                selectedWeek === 2
                  ? 'bg-[#E21F26] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semana 2: Proponemos y Explicamos (24–31 Ago)
            </button>
          </div>
        )}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por título, tema o tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005596]"
            />
          </div>

          {/* Pillar Filter */}
          <div>
            <select
              value={selectedPillar}
              onChange={(e) => setSelectedPillar(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#005596]"
            >
              <option value="todos">Todos los Pilares / Temas</option>
              <option value="Yasser 1">Yasser 1: El Ciudadano</option>
              <option value="Yasser 2">Yasser 2: El Gestor</option>
              <option value="Yasser 3">Yasser 3: El Fiscalizador</option>
              <option value="Yasser 4">Yasser 4: El Líder Territorial</option>
              <option value="Equipo">El Equipo / Regidores APP</option>
              <option value="Salud">Salud</option>
              <option value="Agua">Agua & Saneamiento</option>
              <option value="Pesca">Pesca & Puerto San Pablo</option>
              <option value="Mujer">Emprende Mujer</option>
              <option value="Turismo">Turismo ("Negritos es Chévere")</option>
              <option value="Juventud">Juventud & Deporte</option>
              <option value="Seguridad">Seguridad Ciudadana</option>
              <option value="Interacción">Interacción / Encuestas</option>
            </select>
          </div>

          {/* Format Filter */}
          <div>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#005596]"
            >
              <option value="todos">Todos los Formatos</option>
              <option value="reel">Reels / Video TikTok / Serie</option>
              <option value="flyer">Flyers & Carruseles</option>
              <option value="historias">Historias & Encuestas</option>
              <option value="promo">Videos Promo / Renders IA</option>
              <option value="foto">Fotos de Paisaje / Citas</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#005596]"
            >
              <option value="todos">Todos los Estados ({filteredPosts.length})</option>
              <option value="pendiente">Pendiente</option>
              <option value="en_proceso">En Edición / Grabación</option>
              <option value="programado">Programado</option>
              <option value="publicado">Publicado</option>
            </select>
          </div>

        </div>
      </div>

      {/* Post Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => {
          const status = postStatuses[post.id] || 'pendiente';
          const pillarBadge = getPillarBadge(post.pillar);
          const statusBadge = getStatusBadge(status);
          const dayNumber = post.date.split('-')[2];
          const monthAbbr = getMonthAbbr(post.date);

          return (
            <div
              key={post.id}
              onClick={() => {
                setSelectedPost(post);
                if (onSelectPost) onSelectPost(post);
              }}
              className="bg-white border border-slate-200 hover:border-[#005596] rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              {/* Card Header: Day & Status */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 bg-[#005596] text-white text-[11px] font-black rounded-lg uppercase tracking-wider">
                      {post.dayShort}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      {dayNumber} {monthAbbr}
                    </span>
                    {post.weekNumber && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                        Semana {post.weekNumber}
                      </span>
                    )}
                  </div>

                  {/* Status Dropdown/Badge */}
                  <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={status}
                      onChange={(e) => handleStatusChange(post.id, e.target.value as PostStatus, e as any)}
                      className={`text-[10px] font-black px-2 py-1 rounded-lg border-0 cursor-pointer ${statusBadge.bg}`}
                    >
                      <option value="pendiente" className="bg-white text-slate-800">Pendiente</option>
                      <option value="en_proceso" className="bg-white text-slate-800">En Edición</option>
                      <option value="programado" className="bg-white text-slate-800">Programado</option>
                      <option value="publicado" className="bg-white text-slate-800">Publicado</option>
                    </select>
                  </div>
                </div>

                {/* Pillar Tag & Format Tag */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border ${pillarBadge.bg}`}>
                    {pillarBadge.label}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex items-center space-x-1">
                    {getFormatIcon(post.format)}
                    <span className="truncate max-w-[130px]">{post.format}</span>
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="font-brand font-black text-base text-slate-900 leading-snug group-hover:text-[#005596] transition pt-1">
                  {post.title}
                </h3>

                {/* Visual script or hook */}
                <div className="bg-slate-50 p-2.5 rounded-xl text-xs text-slate-600 font-medium line-clamp-2 border border-slate-100">
                  <strong className="text-slate-900 font-bold">Visual: </strong>
                  {post.visualScript || post.messageOrCopy}
                </div>
              </div>

              {/* Card Footer: ManyChat indicator, Platform icons & Quick Copy */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  {post.interactiveDetails?.includes('ManyChat') && (
                    <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[9px] font-black rounded border border-purple-200 flex items-center space-x-1" title="Flujo ManyChat configurado">
                      <Bot className="w-2.5 h-2.5" />
                      <span>ManyChat</span>
                    </span>
                  )}
                  {post.productionStyle?.includes('IA') && (
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-black rounded border border-amber-200 flex items-center space-x-1" title="Renders con IA (Sora/Veo)">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Render IA</span>
                    </span>
                  )}
                  <span className="text-[11px] text-slate-400 font-semibold">
                    {post.platforms.join(' • ')}
                  </span>
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={(e) => handleCopyPost(post, e)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#005596] transition"
                    title="Copiar Guion y Copy"
                  >
                    {copiedPostId === post.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] text-[#005596] font-extrabold group-hover:underline">
                    Ver Detalle →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No se encontraron publicaciones con esos filtros</h3>
          <p className="text-xs text-slate-500">Prueba cambiando los filtros de mes, semana, arquetipo o formato.</p>
          <button
            onClick={() => {
              setSelectedMonth('todos');
              setSelectedWeek('todos');
              setSearchQuery('');
              setSelectedPillar('todos');
              setSelectedFormat('todos');
              setSelectedStatus('todos');
            }}
            className="px-4 py-2 bg-[#005596] text-white rounded-xl text-xs font-bold shadow"
          >
            Restablecer Filtros
          </button>
        </div>
      )}

      {/* Modal Detail */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          status={postStatuses[selectedPost.id] || 'pendiente'}
          onStatusChange={(status) => handleStatusChange(selectedPost.id, status, { stopPropagation: () => {} } as any)}
          onClose={() => setSelectedPost(null)}
        />
      )}

    </div>
  );
};

