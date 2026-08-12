import React, { useState, useEffect } from 'react';
import { PostItem, CalendarFilter, PostStatus } from '../types';
import { POSTS_DATA } from '../data/parrillaData';
import { getStoredPostStatuses, savePostStatus } from '../utils/storage';
import { Search, Filter, Calendar as CalendarIcon, List, Copy, Check, Eye, Clock, Sparkles, AlertCircle, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

interface CalendarViewProps {
  onSelectPost: (post: PostItem) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ onSelectPost }) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [statuses, setStatuses] = useState<Record<string, PostStatus>>({});
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const [filters, setFilters] = useState<CalendarFilter>({
    search: '',
    pillar: 'todos',
    format: 'todos',
    status: 'todos',
    eventId: 'todos',
    onlyDoublePostDays: false,
    timeOfDay: 'todos'
  });

  useEffect(() => {
    setStatuses(getStoredPostStatuses());
  }, []);

  const handleStatusChange = (postId: string, newStatus: PostStatus, e: React.MouseEvent) => {
    e.stopPropagation();
    savePostStatus(postId, newStatus);
    setStatuses(prev => ({ ...prev, [postId]: newStatus }));
  };

  const handleCopyPost = (post: PostItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `${post.title}\n\n${post.contentCopy}\n\n${post.question ? `💬 ${post.question}\n` : ''}#YasserArámbulo #LaBreaNegritos #SiempreConLaGente`;
    navigator.clipboard.writeText(text);
    setCopiedPostId(post.id);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  // Filter posts
  const filteredPosts = POSTS_DATA.filter((post) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        post.title.toLowerCase().includes(q) ||
        post.contentCopy.toLowerCase().includes(q) ||
        (post.question && post.question.toLowerCase().includes(q)) ||
        post.dayName.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q));
      if (!match) return false;
    }

    if (filters.pillar !== 'todos' && post.pillar !== filters.pillar) return false;
    if (filters.format !== 'todos' && post.format !== filters.format) return false;
    if (filters.timeOfDay !== 'todos' && post.timeOfDay !== filters.timeOfDay) return false;
    if (filters.eventId !== 'todos' && post.eventId !== filters.eventId) return false;
    if (filters.onlyDoublePostDays && !post.isDoublePostDay) return false;

    const currentStatus = statuses[post.id] || 'pendiente';
    if (filters.status !== 'todos' && currentStatus !== filters.status) return false;

    return true;
  });

  // Group by date for list view
  const groupedPostsByDate: Record<string, PostItem[]> = {};
  filteredPosts.forEach(post => {
    if (!groupedPostsByDate[post.dayName]) {
      groupedPostsByDate[post.dayName] = [];
    }
    groupedPostsByDate[post.dayName].push(post);
  });

  return (
    <div className="space-y-6">
      
      {/* Search and Filter Controls */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              placeholder="Buscar tema, palabra clave o fecha..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#005596]"
            />
          </div>

          {/* View Toggles & Double Post Check */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            
            <label className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition">
              <input
                type="checkbox"
                checked={filters.onlyDoublePostDays}
                onChange={(e) => setFilters(prev => ({ ...prev, onlyDoublePostDays: e.target.checked }))}
                className="rounded text-[#005596] focus:ring-[#005596] bg-white border-slate-300"
              />
              <span>⚡ Días de Doble Publicación</span>
            </label>

            <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex text-xs">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  viewMode === 'list' ? 'bg-[#005596] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Lista Diaria</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  viewMode === 'grid' ? 'bg-[#005596] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CalendarIcon className="w-3.5 h-3.5" />
                <span>Matriz Mensual</span>
              </button>
            </div>

          </div>
        </div>

        {/* Dropdown filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-3 border-t border-slate-200">
          <div>
            <label className="block text-slate-500 mb-1 font-bold text-[11px] uppercase tracking-wider">Pilar de Contenido</label>
            <select
              value={filters.pillar}
              onChange={(e) => setFilters(prev => ({ ...prev, pillar: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#005596]"
            >
              <option value="todos">Todos los Pilares</option>
              <option value="Persona y Candidato">Persona y Candidato</option>
              <option value="Juventud">Juventud</option>
              <option value="Educación Ciudadana">Educación Ciudadana</option>
              <option value="Trabajo y Emprendimiento">Trabajo y Emprendimiento</option>
              <option value="Adultos Mayores">Adultos Mayores</option>
              <option value="Deporte y Comunidad">Deporte y Comunidad</option>
              <option value="Escucha Territorial">Escucha Territorial</option>
              <option value="Efeméride">Efeméride</option>
              <option value="Cierre y Resumen">Cierre y Resumen</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-bold text-[11px] uppercase tracking-wider">Formato</label>
            <select
              value={filters.format}
              onChange={(e) => setFilters(prev => ({ ...prev, format: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#005596]"
            >
              <option value="todos">Todos los Formatos</option>
              <option value="Reel">Reel</option>
              <option value="Flyer">Flyer</option>
              <option value="Video">Video</option>
              <option value="Carrusel">Carrusel</option>
              <option value="TikTok/Reel">TikTok / Reel</option>
              <option value="Flyer + Reel">Flyer + Reel</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-bold text-[11px] uppercase tracking-wider">Horario</label>
            <select
              value={filters.timeOfDay}
              onChange={(e) => setFilters(prev => ({ ...prev, timeOfDay: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#005596]"
            >
              <option value="todos">Mañana y Noche</option>
              <option value="mañana">Publicación Mañana</option>
              <option value="noche">Publicación Noche</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-500 mb-1 font-bold text-[11px] uppercase tracking-wider">Estado</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#005596]"
            >
              <option value="todos">Todos los Estados</option>
              <option value="pendiente">Pendiente</option>
              <option value="en_proceso">En Producción</option>
              <option value="programado">Programado</option>
              <option value="publicado">Publicado</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Mostrando <strong>{filteredPosts.length}</strong> de {POSTS_DATA.length} publicaciones de agosto</span>
        {(filters.search || filters.pillar !== 'todos' || filters.format !== 'todos' || filters.status !== 'todos' || filters.onlyDoublePostDays) && (
          <button
            onClick={() => setFilters({
              search: '',
              pillar: 'todos',
              format: 'todos',
              status: 'todos',
              eventId: 'todos',
              onlyDoublePostDays: false,
              timeOfDay: 'todos'
            })}
            className="text-[#005596] hover:underline font-bold"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* LIST VIEW (Grouped by Day) */}
      {viewMode === 'list' && (
        <div className="space-y-6">
          {Object.keys(groupedPostsByDate).length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 space-y-3 shadow-sm">
              <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <p className="font-semibold text-slate-800">No se encontraron publicaciones con los filtros seleccionados.</p>
              <button
                onClick={() => setFilters({ search: '', pillar: 'todos', format: 'todos', status: 'todos', eventId: 'todos', onlyDoublePostDays: false, timeOfDay: 'todos' })}
                className="px-4 py-2 bg-[#005596] text-white font-bold text-xs rounded-xl hover:bg-blue-800 transition"
              >
                Restablecer Filtros
              </button>
            </div>
          ) : (
            Object.entries(groupedPostsByDate).map(([dayName, posts]) => (
              <div key={dayName} className="space-y-3">
                {/* Day Sticky Header */}
                <div className="flex items-center space-x-3 bg-white/95 backdrop-blur border-l-4 border-[#005596] px-4 py-2.5 rounded-r-xl border-y border-r border-slate-200 sticky top-16 z-10 shadow-xs">
                  <h3 className="font-brand font-black text-sm text-[#005596] uppercase tracking-wide">
                    {dayName}
                  </h3>
                  {posts.length > 1 && (
                    <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold rounded-full uppercase">
                      ⚡ 2 Publicaciones
                    </span>
                  )}
                </div>

                {/* Posts Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {posts.map((post) => {
                    const currentStatus = statuses[post.id] || 'pendiente';

                    return (
                      <div
                        key={post.id}
                        onClick={() => onSelectPost(post)}
                        className="bg-white border border-slate-200 border-l-4 border-l-[#005596] hover:border-[#005596] rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer group space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          
                          {/* Top Badges */}
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-extrabold text-[#005596] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-lg text-[10px] uppercase">
                              {post.postNumberText}
                            </span>

                            <div className="flex items-center space-x-2">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 uppercase">
                                {post.format}
                              </span>
                            </div>
                          </div>

                          {/* Post Title */}
                          <h4 className="font-brand font-extrabold text-base text-slate-900 group-hover:text-[#005596] transition line-clamp-2 leading-snug">
                            {post.title}
                          </h4>

                          {/* Hook or pitch preview */}
                          {post.pitch && (
                            <p className="text-xs text-slate-600 line-clamp-2 italic bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                              "{post.pitch}"
                            </p>
                          )}

                          {/* Question preview */}
                          {post.question && (
                            <div className="text-[11px] font-semibold text-amber-900 bg-amber-50 border border-amber-200 p-2 rounded-lg line-clamp-1">
                              💬 {post.question}
                            </div>
                          )}
                        </div>

                        {/* Card Bottom Controls */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                          {/* Status Badge Toggle */}
                          <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={currentStatus}
                              onChange={(e) => handleStatusChange(post.id, e.target.value as PostStatus, e as any)}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none transition ${
                                currentStatus === 'publicado'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                  : currentStatus === 'programado'
                                  ? 'bg-blue-50 text-blue-800 border-blue-300'
                                  : currentStatus === 'en_proceso'
                                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                                  : 'bg-slate-100 text-slate-700 border-slate-300'
                              }`}
                            >
                              <option value="pendiente">Pendiente</option>
                              <option value="en_proceso">En Producción</option>
                              <option value="programado">Programado</option>
                              <option value="publicado">Publicado</option>
                            </select>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={(e) => handleCopyPost(post, e)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition flex items-center space-x-1 border border-slate-200"
                              title="Copiar texto completo"
                            >
                              {copiedPostId === post.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copiedPostId === post.id ? '¡Copiado!' : 'Copiar'}</span>
                            </button>

                            <span className="text-[#005596] font-bold flex items-center space-x-0.5 group-hover:translate-x-0.5 transition">
                              <span>Ver</span>
                              <ChevronRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* GRID VIEW (Month Matrix) */}
      {viewMode === 'grid' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm overflow-x-auto">
          <div className="min-w-[800px] space-y-3">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200 font-brand">
              <div>Lun</div>
              <div>Mar</div>
              <div>Mié</div>
              <div>Jue</div>
              <div>Vie</div>
              <div>Sáb</div>
              <div>Dom</div>
            </div>

            {/* Calendar grid items for Aug 10 - Aug 31 */}
            <div className="grid grid-cols-7 gap-2">
              {POSTS_DATA.map((post) => {
                const currentStatus = statuses[post.id] || 'pendiente';
                return (
                  <div
                    key={post.id}
                    onClick={() => onSelectPost(post)}
                    className="bg-slate-50 border border-slate-200 hover:border-[#005596] hover:bg-white rounded-xl p-2.5 transition cursor-pointer space-y-1.5 h-32 flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-extrabold text-[#005596]">{post.date.split('-')[2]} Ago</span>
                        <span className={`w-2 h-2 rounded-full ${
                          currentStatus === 'publicado' ? 'bg-emerald-500' : currentStatus === 'programado' ? 'bg-blue-500' : currentStatus === 'en_proceso' ? 'bg-amber-500' : 'bg-slate-400'
                        }`}></span>
                      </div>
                      <div className="font-bold text-xs text-slate-900 line-clamp-2 leading-tight font-brand mt-1">
                        {post.title}
                      </div>
                    </div>

                    <div className="text-[9px] text-slate-500 flex justify-between items-center pt-1 border-t border-slate-200">
                      <span className="truncate max-w-[65px] font-semibold">{post.format}</span>
                      <span className="font-bold text-[#005596]">{post.timeOfDay === 'mañana' ? 'AM' : 'PM'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
