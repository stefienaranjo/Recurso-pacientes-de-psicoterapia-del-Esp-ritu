import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, Sun, CheckCircle2, HeartHandshake, Shield } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen7EjDolorProps {
  dolorEmociones: string[];
  dolorDesc: string;
  dolorCreencia: string;
  onNext: () => void;
  onBack: () => void;
}

export const Screen7EjDolor: React.FC<Screen7EjDolorProps> = ({
  dolorEmociones,
  dolorDesc,
  dolorCreencia,
  onNext,
  onBack,
}) => {
  const [isHealed, setIsHealed] = useState(false);
  const [stepActive, setStepActive] = useState<number>(1);

  const handleLightAltar = () => {
    sound.playTibetanBowl(4.5, 216);
    setIsHealed(true);
  };

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
          <span>Volver a identificar</span>
        </button>
        <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
          Ruta 2 • Pantalla 7 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Liberación Emocional Adaptada
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Entrega del dolor al Altar del Espíritu Santo
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            En la Presencia del Amor, ninguna ilusión de sufrimiento puede sostenerse.
          </p>
        </div>

        {/* Emotion Context Summary */}
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 flex items-start gap-3">
          <HeartHandshake className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-700 space-y-1">
            <span className="font-semibold text-blue-950">
              Traes a la luz: {dolorEmociones.join(', ') || 'este dolor profundo'}
            </span>
            {dolorDesc && <p className="italic text-stone-600">"{dolorDesc}"</p>}
            {dolorCreencia && (
              <p className="text-[11px] text-blue-800">
                Reconociendo la falsa creencia del ego: {dolorCreencia}
              </p>
            )}
          </div>
        </div>

        {/* 3 Guided Contemplative Movements */}
        <div className="space-y-4">
          {/* Movement 1 */}
          <div
            onClick={() => setStepActive(1)}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
              stepActive === 1
                ? 'bg-blue-50/80 border-blue-300 ring-1 ring-blue-300/40 shadow-xs'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/60'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-blue-200/80 text-blue-900 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900">
                La Mano en el Pecho: Contacto con el Sagrario
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              Lleva una mano suavemente al centro de tu pecho. Siente el latido de la vida que Dios sostiene. Di en silencio: <em>«No estoy solo(a). Dios mora en mí, y donde Él está, la angustia no tiene morada real.»</em>
            </p>
          </div>

          {/* Movement 2 */}
          <div
            onClick={() => setStepActive(2)}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
              stepActive === 2
                ? 'bg-blue-50/80 border-blue-300 ring-1 ring-blue-300/40 shadow-xs'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/60'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-blue-200/80 text-blue-900 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900">
                Disolver el Testigo Falso del Ego
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              Comprende que el dolor fue el intento del ego de probar que la separación ocurrió. Pero la separación nunca ocurrió. Tú sigues siendo el Santo Hijo de Dios, bendito, puro y a salvo.
            </p>
          </div>

          {/* Movement 3: Altar Ritual */}
          <div
            onClick={() => setStepActive(3)}
            className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
              stepActive === 3
                ? 'bg-blue-50/80 border-blue-300 ring-1 ring-blue-300/40 shadow-xs'
                : 'bg-stone-50/70 border-stone-200/70 hover:bg-stone-100/60'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-blue-200/80 text-blue-900 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900">
                Oración de Consagración de la Herida
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              «Espíritu Santo, te entrego este dolor. Deseo la paz de Dios en lugar de esto. Acepto la Expiación para mí mismo(a).»
            </p>
          </div>
        </div>

        {/* Sacred Altar Activation */}
        <div className={`p-6 rounded-2xl border-2 transition-all duration-700 text-center space-y-4 ${
          isHealed
            ? 'bg-gradient-to-b from-amber-50/80 via-white to-amber-50/50 border-amber-300 shadow-lg'
            : 'bg-stone-50/80 border-dashed border-stone-300'
        }`}>
          <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shadow-xs">
            <Sun className={`w-6 h-6 ${isHealed ? 'animate-spin-slow text-amber-600' : ''}`} />
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              {isHealed ? 'El Altar Interior está Iluminado' : 'Consagra tu dolor al Altar de la Paz'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed italic">
              {isHealed
                ? '«Descansa en Sus brazos. El dolor no puede cruzar el umbral del Amor Santo.»'
                : 'Presiona el botón para entregar tu carga y permitir que la Luz disuelva la pesadumbre.'}
            </p>
          </div>

          <AnimatePresence>
            {!isHealed ? (
              <motion.button
                id="btn-light-altar-dolor"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLightAltar}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-900 text-white text-sm font-bold shadow-md inline-flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Entregar mi sufrimiento al Altar Santo</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Consagrado: «Soy bendito por ser un Hijo de Dios.»</span>
              </motion.div>
            )}
          </AnimatePresence>
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
            id="btn-next-screen-14-dolor"
            onClick={() => {
              sound.playBellChime();
              onNext();
            }}
            className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>Consolidar la Paz (Paso final)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
