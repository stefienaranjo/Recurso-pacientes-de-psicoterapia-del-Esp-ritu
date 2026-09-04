import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, Heart, Users, Eye } from 'lucide-react';
import { SERENE_IMAGES } from '../../data/ucdmContent';
import { sound } from '../../utils/audio';

interface Screen8ValConductaProps {
  onNext: () => void;
  onBack: () => void;
}

export const Screen8ValConducta: React.FC<Screen8ValConductaProps> = ({ onNext, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {/* Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:text-stone-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>
        <span className="font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
          Ruta 3 • Pantalla 8 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md overflow-hidden">
        {/* Banner with Olive Sanctuary Image */}
        <div className="h-44 sm:h-56 w-full relative overflow-hidden">
          <img
            src={SERENE_IMAGES.oliveSanctuary}
            alt="Santuario de olivos en paz"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              Relaciones Sagradas
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
              Validación ante la conducta de los demás
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-stone-900">
              Sentir dolor o indignación ante lo que alguien dijo, hizo o dejó de hacer es <strong>la experiencia más común del ego humano</strong>.
            </p>
            <p>
              El ego prospera culpando a otros: <em>«Él/Ella me arruinó el día, me faltó al respeto, fue injusto(a)»</em>. Sin embargo, <em>Un Curso de Milagros</em> nos revela el secreto de la libertad: <strong>nadie tiene el poder de arrebatarte la paz de Dios salvo tu propia decisión de atacar o juzgar</strong>.
            </p>
          </div>

          {/* UCDM Principle Box */}
          <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Visión de UCDM sobre las Relaciones</span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-stone-900 italic leading-snug">
              «Todo lo que cualquier hermano hace es o bien una extensión de amor, o bien una petición de amor. No existe una tercera opción.»
            </p>
            <p className="text-xs text-stone-500">
              Cuando alguien actúa desde el ego, está profundamente asustado y pidiendo ayuda, no atacándote en la Realidad de Dios.
            </p>
          </div>

          {/* 3 Keys to Understand Friction */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Heart className="w-4 h-4 text-emerald-600" />
              <div className="font-semibold text-xs text-stone-900">1. Tu hermano es tu espejo</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Lo que más te irrita en él es una culpa no perdonada proyectada hacia afuera.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Eye className="w-4 h-4 text-emerald-600" />
              <div className="font-semibold text-xs text-stone-900">2. Mira más allá del cuerpo</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Su conducta errónea es un sueño; su ser eterno es tan impecable como el tuyo.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Users className="w-4 h-4 text-emerald-600" />
              <div className="font-semibold text-xs text-stone-900">3. Tu salvador</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Al perdonarlo a él, te liberas tú de la prisión del rencor.
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
              id="btn-next-screen-9"
              onClick={() => {
                sound.playBellChime();
                onNext();
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Identificar la fricción con los demás</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
