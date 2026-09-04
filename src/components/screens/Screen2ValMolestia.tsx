import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, Heart, AlertCircle, ShieldCheck } from 'lucide-react';
import { SERENE_IMAGES } from '../../data/ucdmContent';
import { sound } from '../../utils/audio';

interface Screen2ValMolestiaProps {
  onNext: () => void;
  onBack: () => void;
}

export const Screen2ValMolestia: React.FC<Screen2ValMolestiaProps> = ({ onNext, onBack }) => {
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
        <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
          Ruta 1 • Pantalla 2 de 16
        </span>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md overflow-hidden">
        {/* Banner with Image */}
        <div className="h-44 sm:h-52 w-full relative overflow-hidden">
          <img
            src={SERENE_IMAGES.calmWater}
            alt="Agua tranquila"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Validación y Compasión
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
              Validación de la molestia cotidiana
            </h1>
          </div>
        </div>

        {/* Text and Principles */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-stone-900">
              Antes de querer corregir tu mente, <strong>reconoce honestamente</strong> lo que sientes sin juzgarte ni sentirte culpable por "no ser lo bastante espiritual".
            </p>
            <p>
              El ego intentará decirte: <em>«Tienes toda la razón para estar molesto(a); mira lo que han hecho, mira este retraso, mira cómo te tratan»</em>. Sin embargo, en el fondo, esta molestia no es causada por el suceso exterior, sino por tu deseo inconsciente de que el mundo se adapte a tu propio guion.
            </p>
          </div>

          {/* UCDM Principle Box */}
          <div className="bg-[#FAF8F5] border border-amber-200/70 rounded-2xl p-5 space-y-2 relative">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Principio Central de UCDM</span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-stone-900 italic leading-snug">
              «Nunca estoy disgustado por la razón que creo.»
            </p>
            <p className="text-xs text-stone-500">
              Lección 5 del Libro de Ejercicios. Toda pequeña irritación esconde el dolor de creernos separados de la Fuente de Paz.
            </p>
          </div>

          {/* Three Compassionate Keys */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Heart className="w-4 h-4 text-amber-600" />
              <div className="font-semibold text-xs text-stone-900">1. No te culpes</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Sentir fastidio no te hace culpable; es solo una oportunidad para perdonar.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <div className="font-semibold text-xs text-stone-900">2. Es una ilusión</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                El tráfico o la demora no tienen poder sobre la paz que Dios puso en ti.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <div className="font-semibold text-xs text-stone-900">3. Puedes elegir</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                En este mismo segundo puedes elegir ver paz en vez de impaciencia.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs sm:text-sm font-medium transition-colors"
            >
              Atrás
            </button>

            <button
              id="btn-next-screen-3"
              onClick={() => {
                sound.playBellChime();
                onNext();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Identificar mi molestia</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
