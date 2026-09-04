import React from 'react';
import { X, BookOpen, Trash2, Calendar, Sparkles, Heart } from 'lucide-react';
import { MiracleRecord } from '../types';
import { sound } from '../utils/audio';

interface MiracleJournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  records: MiracleRecord[];
  onDeleteRecord: (id: string) => void;
}

export const MiracleJournalModal: React.FC<MiracleJournalModalProps> = ({
  isOpen,
  onClose,
  records,
  onDeleteRecord,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl border border-stone-200/80 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200/80 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100/80 border border-amber-200/70 flex items-center justify-center text-amber-800">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">
                Diario de Milagros y Entregas
              </h2>
              <p className="text-xs text-stone-500">
                Tus cambios de percepción registrados: de la pequeñez del ego a la Paz de Dios.
              </p>
            </div>
          </div>
          <button
            id="close-journal-button"
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {records.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-amber-100/60 flex items-center justify-center text-amber-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-800 mb-1">
                Aún no has guardado milagros
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-sm mx-auto leading-relaxed">
                Cada vez que completes un ejercicio y alcances la pantalla de consolidación, podrás guardar tu instante santo en este diario.
              </p>
            </div>
          ) : (
            records.map((record) => (
              <div
                key={record.id}
                className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200/70 shadow-xs relative group transition-all hover:border-amber-200 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60 uppercase">
                      {record.routeCategory}
                    </span>
                    <h3 className="font-serif text-base font-bold text-stone-900 mt-1">
                      {record.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      sound.playBellChime();
                      onDeleteRecord(record.id);
                    }}
                    className="opacity-60 group-hover:opacity-100 text-stone-400 hover:text-rose-600 p-1 rounded-md transition-all"
                    title="Eliminar registro"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {record.description && (
                  <p className="text-xs sm:text-sm text-stone-600 mb-3 bg-stone-50/70 p-2.5 rounded-lg border border-stone-100 leading-relaxed italic">
                    "{record.description}"
                  </p>
                )}

                {/* Peace Shift Bar */}
                <div className="flex items-center gap-3 text-xs bg-amber-50/40 p-2 rounded-lg border border-amber-100/60 mb-2">
                  <span className="text-stone-500">Cambio de percepción:</span>
                  <span className="font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                    Paz inicial: {record.initialPeace}/10
                  </span>
                  <span className="text-stone-400">→</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Paz final: {record.finalPeace}/10
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-stone-100 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {record.date}
                  </span>
                  <span className="flex items-center gap-1 text-amber-700/80 font-medium">
                    <Heart className="w-3 h-3 text-amber-600 fill-amber-600" />
                    Milagro consumado
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200/80 bg-stone-50/70 flex items-center justify-between text-xs text-stone-500">
          <span>«Los milagros son naturales. Cuando no ocurren es que algo ha andado mal.»</span>
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
