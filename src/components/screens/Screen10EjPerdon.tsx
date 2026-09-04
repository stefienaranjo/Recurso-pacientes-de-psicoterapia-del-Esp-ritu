import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, CheckCircle2, Shield, Heart, Eye } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen10EjPerdonProps {
  conductaPersona: string;
  conductaHecho: string;
  conductaJuicio: string;
  onNext: () => void;
  onBack: () => void;
}

export const Screen10EjPerdon: React.FC<Screen10EjPerdonProps> = ({
  conductaPersona,
  conductaHecho,
  conductaJuicio,
  onNext,
  onBack,
}) => {
  const [isForgiven, setIsForgiven] = useState(false);
  const targetBrother = conductaPersona || 'este hermano(a)';

  const handleForgive = () => {
    sound.playTibetanBowl(4.0, 216);
    setIsForgiven(true);
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
        <span className="font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
          Ruta 3 • Pantalla 10 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Perdón No Dual de UCDM
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Ejercicio de perdón y visión de inocencia
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            El perdón de Dios no perdona pecados reales; reconoce que lo que parecía un ataque nunca ocurrió en la Verdad.
          </p>
        </div>

        {/* Context badge */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
            <span>Enfocando el perdón hacia: {targetBrother}</span>
          </div>
          {conductaHecho && (
            <p className="text-xs text-stone-600 italic">
              Hecho recordado: "{conductaHecho}"
            </p>
          )}
          {conductaJuicio && (
            <p className="text-[11px] text-emerald-800">
              Juicio a disolver: {conductaJuicio}
            </p>
          )}
        </div>

        {/* The 3 Protocol Steps */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-emerald-200/90 text-emerald-950 flex items-center justify-center text-xs">
                1
              </span>
              <span>Reconocer la Proyección</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 italic leading-relaxed pl-7">
              «Lo que juzgo en ti, <strong className="text-emerald-950 font-semibold">{targetBrother}</strong>, es en verdad mi propio miedo y culpa proyectados al exterior. Tú no eres la causa de mi desdicha.»
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-emerald-200/90 text-emerald-950 flex items-center justify-center text-xs">
                2
              </span>
              <span>Retirar el Ataque y la Sentencia</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 italic leading-relaxed pl-7">
              «Renuncio a hacerte culpable. No eres un cuerpo que me hiere ni un enemigo a castigar. Eres un Hijo de Dios que ha pedido amor en la única forma que sabía.»
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-emerald-200/90 text-emerald-950 flex items-center justify-center text-xs">
                3
              </span>
              <span>La Bendición de la Visión Crística</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 italic leading-relaxed pl-7">
              «Miro más allá de tus errores. Reconozco tu luz inmaculada. Al verte libre a ti, me libero a mí mismo(a).»
            </p>
          </div>
        </div>

        {/* Sacred Interactive Release Ritual */}
        <div className={`p-6 rounded-2xl border-2 transition-all duration-700 text-center space-y-4 ${
          isForgiven
            ? 'bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/50 border-emerald-300 shadow-lg'
            : 'bg-stone-50/80 border-dashed border-stone-300'
        }`}>
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-xs">
            <Eye className="w-6 h-6 text-emerald-800" />
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              {isForgiven ? 'El Lazo del Rencor ha sido Disuelto' : 'Consagrar el Perdón a tu Hermano'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed italic">
              {isForgiven
                ? '«Que la paz sea contigo, hermano mío, quien eres la paz misma.»'
                : 'Presiona para retirar el juicio y sellar la visión de inocencia con el Espíritu Santo.'}
            </p>
          </div>

          <AnimatePresence>
            {!isForgiven ? (
              <motion.button
                id="btn-forgive-brother"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleForgive}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white text-sm font-bold shadow-md inline-flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Liberar a mi hermano y recibir mi paz</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Perdón consumado: «Te contemplo como el Santo Hijo de Dios.»</span>
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
            id="btn-next-screen-14-conducta"
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
