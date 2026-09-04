import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, BookOpen, Heart, Check, Sun, ShieldCheck } from 'lucide-react';
import { RouteCategory } from '../../types';
import { sound } from '../../utils/audio';

interface Screen14ConsolidacionProps {
  category: RouteCategory | null;
  initialPeace: number;
  onSaveToJournal: (finalPeace: number, note: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen14Consolidacion: React.FC<Screen14ConsolidacionProps> = ({
  category,
  initialPeace,
  onSaveToJournal,
  onNext,
  onBack,
}) => {
  const [finalPeace, setFinalPeace] = useState<number>(9);
  const [note, setNote] = useState('');
  const [acceptedHolyInstant, setAcceptedHolyInstant] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const peaceDelta = Math.max(0, finalPeace - (initialPeace || 4));

  const handleSaveAndAdvance = () => {
    onSaveToJournal(finalPeace, note);
    setIsSaved(true);
    sound.playTibetanBowl(3.5, 256);
    setTimeout(() => {
      onNext();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {/* Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:text-stone-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Volver al ejercicio</span>
        </button>
        <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
          Consolidación • Pantalla 14 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-lg p-6 sm:p-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shadow-xs">
            <Sun className="w-6 h-6 text-amber-600 animate-pulse" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Atestiguamiento del Milagro
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
            Consolidación de la paz y cierre de la entrega
          </h1>
          <p className="text-xs sm:text-sm text-stone-600">
            Un milagro es simplemente un cambio de percepción: has retirado tu fe del miedo y se la has devuelto al Amor.
          </p>
        </div>

        {/* Peace Shift Comparison */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/60 via-stone-50/80 to-emerald-50/60 border border-stone-200/80 space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
              ¿Cómo experimentas tu paz interior ahora?
            </span>
            <span className="text-sm font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
              Paz actual: {finalPeace} / 10
            </span>
          </div>

          <input
            id="input-final-peace-slider"
            type="range"
            min={1}
            max={10}
            value={finalPeace}
            onChange={(e) => setFinalPeace(Number(e.target.value))}
            className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />

          <div className="flex items-center justify-between text-xs pt-1">
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Paz al comenzar:</span>
              <span className="font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                {initialPeace || 4}/10
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>+{peaceDelta} puntos de claridad</span>
            </div>
          </div>
        </div>

        {/* The Holy Instant Declaration */}
        <div
          onClick={() => setAcceptedHolyInstant(!acceptedHolyInstant)}
          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
            acceptedHolyInstant
              ? 'bg-amber-50/60 border-amber-300 ring-1 ring-amber-300/40'
              : 'bg-stone-50 border-stone-200'
          }`}
        >
          <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border ${
            acceptedHolyInstant ? 'bg-amber-700 border-amber-700 text-white' : 'border-stone-300 bg-white'
          }`}>
            {acceptedHolyInstant && <Check className="w-3.5 h-3.5" />}
          </div>
          <div className="space-y-1">
            <div className="font-bold text-xs uppercase tracking-wider text-amber-900">
              Consagración del Instante Santo
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-900 italic leading-snug">
              «En este instante santo descanso en los brazos de Dios. No hay nada que temer, nada que forzar y nada que defender.»
            </p>
          </div>
        </div>

        {/* Optional Note for the Miracle Journal */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Palabra o aprendizaje clave para tu Diario de Milagros (Opcional)</span>
          </label>
          <input
            id="input-consolidation-note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ejemplo: «Recordé que mi hermano es inocente», «Solté la prisa y respiré en Dios»..."
            className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all"
          />
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs sm:text-sm font-medium transition-colors"
          >
            Atrás
          </button>

          <button
            id="btn-save-and-celebrate"
            onClick={handleSaveAndAdvance}
            className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-stone-900 hover:from-amber-800 hover:to-black text-white text-xs sm:text-sm font-bold shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>Guardar y pasar a la Celebración Final</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
