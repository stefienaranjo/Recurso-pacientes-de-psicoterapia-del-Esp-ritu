import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, Heart, Sun, Feather } from 'lucide-react';
import { SERENE_IMAGES } from '../../data/ucdmContent';
import { sound } from '../../utils/audio';

interface Screen5ValDolorProps {
  onNext: () => void;
  onBack: () => void;
}

export const Screen5ValDolor: React.FC<Screen5ValDolorProps> = ({ onNext, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:text-stone-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>
        <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
          Ruta 2 • Pantalla 5 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md overflow-hidden">
        {/* Banner with Warm Sunbeam Image */}
        <div className="h-44 sm:h-56 w-full relative overflow-hidden">
          <img
            src={SERENE_IMAGES.warmSunbeam}
            alt="Rayo de sol cálido y sanador"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
              Sanación Profunda
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
              Validación del dolor o sufrimiento emocional
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-stone-900">
              Si en este instante sientes tristeza, angustia punzante, miedo o un nudo en el pecho, <strong>recibe un abrazo incondicional</strong>.
            </p>
            <p>
              <em>Un Curso de Milagros</em> nunca te pide que reprimas tus sentimientos ni que te fuerces a sonreír con una falsa espiritualidad. El ego usa el dolor para convencerte de que estás roto(a), desamparado(a) o que Dios te ha olvidado. Sin embargo, el dolor es solo un grito que pide Amor.
            </p>
          </div>

          {/* UCDM Anchor Box */}
          <div className="bg-blue-50/50 border border-blue-200/70 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>La Voz del Consolador (UCDM)</span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-stone-900 italic leading-snug">
              «No intentes ocultar tu dolor en la sombra. Tráelo a la luz del Espíritu Santo. En Su Presencia, la ilusión de la soledad se desvanece por completo.»
            </p>
            <p className="text-xs text-stone-500">
              No estás solo(a) en este instante. La Presencia consoladora camina a tu lado.
            </p>
          </div>

          {/* Emotional Validation Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Heart className="w-4 h-4 text-blue-600" />
              <div className="font-semibold text-xs text-stone-900">1. Siente sin huir</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Permítete estar presente con la emoción, respirando suavemente sin juzgarla.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Feather className="w-4 h-4 text-blue-600" />
              <div className="font-semibold text-xs text-stone-900">2. No te define</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                El dolor es una nube que pasa por el cielo de tu conciencia; tú eres el cielo intacto.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Sun className="w-4 h-4 text-blue-600" />
              <div className="font-semibold text-xs text-stone-900">3. Puedes ser sanado</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                La Expiación deshace la causa oculta del dolor: la falsa creencia en la separación.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs sm:text-sm font-medium transition-colors"
            >
              Atrás
            </button>

            <button
              id="btn-next-screen-6"
              onClick={() => {
                sound.playBellChime();
                onNext();
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Identificar mi dolor o emoción</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
