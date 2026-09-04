import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, CheckCircle2, ShieldAlert, Compass, Globe } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen13EjExteriorProps {
  exteriorCircunstancia: string;
  exteriorMiedo: string;
  onNext: () => void;
  onBack: () => void;
}

export const Screen13EjExterior: React.FC<Screen13EjExteriorProps> = ({
  exteriorCircunstancia,
  exteriorMiedo,
  onNext,
  onBack,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const targetCircumstance = exteriorCircunstancia || 'esta circunstancia incierta';

  const handleCollapse = () => {
    sound.playTibetanBowl(4.0, 192);
    setIsCollapsed(true);
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
        <span className="font-semibold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60">
          Ruta 4 • Pantalla 13 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Protocolos Colapsados de UCDM
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Ejercicio de entrega del resultado externo
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Colapsa la tiranía del tiempo y del control exterior para reposar en la Providencia del Padre.
          </p>
        </div>

        {/* Circumstance banner */}
        <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/70 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-purple-950">
            <span>Entregando el control de: {targetCircumstance}</span>
          </div>
          {exteriorMiedo && (
            <p className="text-xs text-stone-600 italic">
              Miedo desarmado: "{exteriorMiedo}"
            </p>
          )}
        </div>

        {/* The 3 Collapsing Protocols */}
        <div className="space-y-4">
          {/* Protocol 1 */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-purple-200/90 text-purple-950 flex items-center justify-center text-xs">
                1
              </span>
              <span>Colapso del Tiempo Lineal</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 italic leading-relaxed pl-7">
              «No tengo que esperar a que el futuro resuelva <strong className="text-purple-950 font-semibold">{targetCircumstance}</strong> para tener paz. En este instante presente, nada me falta porque Dios está conmigo.»
            </p>
          </div>

          {/* Protocol 2 */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-purple-200/90 text-purple-950 flex items-center justify-center text-xs">
                2
              </span>
              <span>Colapso de la Exigencia del Ego</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 italic leading-relaxed pl-7">
              «Renuncio a dictarle al Universo cómo debe desenvolverse esta situación. No sé qué es lo más conveniente para todos, pero el Espíritu Santo sí lo sabe.»
            </p>
          </div>

          {/* Protocol 3 */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-purple-200/90 text-purple-950 flex items-center justify-center text-xs">
                3
              </span>
              <span>Consagración a la Providencia Divina</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 italic leading-relaxed pl-7">
              «Espíritu Santo, te entrego el desenlace completo. Guía mis pasos, habla a través de mí y dispón de este asunto para la salvación de mi mente y la de todos mis hermanos.»
            </p>
          </div>
        </div>

        {/* Collapsing Ceremony */}
        <div className={`p-6 rounded-2xl border-2 transition-all duration-700 text-center space-y-4 ${
          isCollapsed
            ? 'bg-gradient-to-b from-purple-50/80 via-white to-purple-50/50 border-purple-300 shadow-lg'
            : 'bg-stone-50/80 border-dashed border-stone-300'
        }`}>
          <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shadow-xs">
            <Globe className="w-6 h-6 text-purple-800" />
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              {isCollapsed ? 'El Ídolo del Control ha Colapsado' : 'Soltar la necesidad de controlar el mundo'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed italic">
              {isCollapsed
                ? '«Descanso en Dios. El mundo está en Sus manos y yo estoy a salvo en Su Amor.»'
                : 'Presiona para entregar el resultado terrenal y devolverle el mando al Amor Divino.'}
            </p>
          </div>

          <AnimatePresence>
            {!isCollapsed ? (
              <motion.button
                id="btn-collapse-external"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCollapse}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-900 text-white text-sm font-bold shadow-md inline-flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Colapsar la exigencia de control y entregar a Dios</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Entrega consumada: «No tengo que preocuparme por nada.»</span>
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
            id="btn-next-screen-14-exterior"
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
