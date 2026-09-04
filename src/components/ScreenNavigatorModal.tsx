import React from 'react';
import { X, Layers, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { ScreenId, RouteCategory } from '../types';
import { SCREEN_METAS } from '../data/ucdmContent';
import { sound } from '../utils/audio';

interface ScreenNavigatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentScreen: ScreenId;
  onSelectScreen: (screenId: ScreenId) => void;
}

export const ScreenNavigatorModal: React.FC<ScreenNavigatorModalProps> = ({
  isOpen,
  onClose,
  currentScreen,
  onSelectScreen,
}) => {
  if (!isOpen) return null;

  const categoryBadges: Record<RouteCategory | 'general', { label: string; color: string }> = {
    general: { label: 'General / Cierre', color: 'bg-stone-100 text-stone-700 border-stone-200' },
    molestia: { label: 'Ruta 1: Molestia Cotidiana', color: 'bg-amber-50 text-amber-800 border-amber-200' },
    dolor: { label: 'Ruta 2: Dolor o Sufrimiento', color: 'bg-blue-50 text-blue-800 border-blue-200' },
    conducta: { label: 'Ruta 3: Fricción con Otros', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    exterior: { label: 'Ruta 4: Apego al Mundo', color: 'bg-purple-50 text-purple-800 border-purple-200' },
    sos: { label: 'Botiquín SOS', color: 'bg-rose-50 text-rose-800 border-rose-200' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-2xl max-h-[88vh] rounded-2xl shadow-2xl border border-stone-200/80 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200/80 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100/70 border border-amber-200/70 flex items-center justify-center text-amber-800">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Mapa de las 16 Pantallas del Guardián
              </h2>
              <p className="text-xs text-stone-500">
                Explora el camino completo de transformación de la tentación a la paz.
              </p>
            </div>
          </div>
          <button
            id="close-navigator-button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of 16 screens */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 divide-y divide-stone-100">
          {SCREEN_METAS.map((meta) => {
            const isCurrent = currentScreen === meta.id;
            const badge = categoryBadges[meta.category];

            return (
              <button
                key={meta.id}
                id={`navigator-item-${meta.index}`}
                onClick={() => {
                  sound.playBellChime();
                  onSelectScreen(meta.id);
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 group pt-3.5 ${
                  isCurrent
                    ? 'bg-amber-50/90 border-amber-300/80 shadow-xs ring-1 ring-amber-400/30'
                    : 'bg-white hover:bg-stone-50/80 border-stone-200/60 hover:border-stone-300'
                }`}
              >
                <div
                  className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-semibold ${
                    isCurrent
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-800'
                  }`}
                >
                  {meta.index}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-serif text-sm sm:text-base font-bold text-stone-900 truncate">
                      {meta.title}
                    </span>
                    <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                <div className="shrink-0 self-center pl-2">
                  {isCurrent ? (
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200/80 bg-stone-50/70 flex items-center justify-between text-xs text-stone-500">
          <span>16 Pantallas completas diseñadas para Un Curso de Milagros</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-md font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
