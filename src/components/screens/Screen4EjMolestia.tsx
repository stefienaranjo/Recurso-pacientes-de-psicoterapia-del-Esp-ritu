import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, Wind, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen4EjMolestiaProps {
  molestiaDesc: string;
  molestiaPensamiento: string;
  onNext: () => void;
  onBack: () => void;
}

export const Screen4EjMolestia: React.FC<Screen4EjMolestiaProps> = ({
  molestiaDesc,
  molestiaPensamiento,
  onNext,
  onBack,
}) => {
  const [breathPhase, setBreathPhase] = useState<'inhala' | 'sostén' | 'exhala'>('inhala');
  const [isDelivered, setIsDelivered] = useState(false);
  const [breathSeconds, setBreathSeconds] = useState(4);

  // Breathing loop
  useEffect(() => {
    const timer = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'inhala') {
          sound.playBreathGuide(true);
          return 'sostén';
        }
        if (prev === 'sostén') return 'exhala';
        sound.playBreathGuide(false);
        return 'inhala';
      });
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  const handleDeliver = () => {
    sound.playTibetanBowl(4.0, 256);
    setIsDelivered(true);
  };

  const situationText = molestiaDesc || 'esta circunstancia imprevista';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:text-stone-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Volver a identificar</span>
        </button>
        <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
          Ruta 1 • Pantalla 4 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Práctica Transformadora UCDM
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Ejercicio práctico adaptado: Molestia e Impaciencia
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Sigue estos 3 movimientos de la mente para desmantelar la queja y recordar tu verdadera morada.
          </p>
        </div>

        {/* Step 1: Desidentificación */}
        <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-amber-200/60 space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
            <span className="w-5 h-5 rounded-full bg-amber-200/80 flex items-center justify-center text-xs">
              1
            </span>
            <span>Desidentificación de la forma externa</span>
          </div>

          <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic">
            «No es <strong className="text-amber-900 font-semibold">{situationText}</strong> lo que me roba la paz; es mi propia decisión de creer que necesito que el mundo sea diferente para estar a salvo.»
          </p>

          {molestiaPensamiento && (
            <p className="text-xs text-stone-500 pt-1">
              Desarmas el pensamiento del ego: <em className="text-stone-600">"{molestiaPensamiento}"</em>.
            </p>
          )}
        </div>

        {/* Step 2: Breathing Circle */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-stone-50 to-amber-50/30 border border-stone-200/80 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-stone-700 text-xs font-bold uppercase tracking-wide">
            <Wind className="w-4 h-4 text-amber-700" />
            <span>2. Respiración Consciente del Instante Santo</span>
          </div>

          <div className="py-6 flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
                  breathPhase === 'inhala'
                    ? 'border-amber-400 bg-amber-100/40 scale-110 shadow-lg shadow-amber-200/50'
                    : breathPhase === 'sostén'
                    ? 'border-amber-500 bg-amber-200/50 scale-115'
                    : 'border-stone-300 bg-stone-100/40 scale-95'
                }`}
              />
              <div className="relative text-center z-10 space-y-0.5">
                <span className="text-xs font-bold uppercase text-amber-900 tracking-wider block">
                  {breathPhase === 'inhala' ? 'Inhala' : breathPhase === 'sostén' ? 'Reposa en Dios' : 'Exhala'}
                </span>
                <span className="text-[11px] text-stone-500 block">
                  {breathPhase === 'inhala' ? 'Recibe la Paz' : breathPhase === 'sostén' ? 'Sin juzgar' : 'Suelta la prisa'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-stone-500 italic max-w-sm mx-auto">
            Haz una pausa. Date permiso de no apresurar nada en este único segundo de gracia.
          </p>
        </div>

        {/* Step 3: Consagración y Entrega */}
        <div className="p-5 rounded-2xl bg-white border-2 border-dashed border-amber-300/80 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>3. Oración de Entrega al Espíritu Santo</span>
          </div>

          <blockquote className="font-serif text-base sm:text-lg text-stone-900 italic max-w-md mx-auto leading-relaxed">
            «Espíritu Santo, juzgué esta situación por mi cuenta y me equivoqué. Te entrego mi percepción errónea para que Tú la sanes y me muestres la faz de Cristo en todo lo que veo.»
          </blockquote>

          <AnimatePresence>
            {!isDelivered ? (
              <motion.button
                id="btn-deliver-molestia"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDeliver}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-sm font-bold shadow-md inline-flex items-center gap-2 transition-all"
              >
                <Heart className="w-4 h-4" />
                <span>Entregar mi molestia al Espíritu Santo</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>¡Entregado! Tu petición de corrección ha sido recibida.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation to Consolidación */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs sm:text-sm font-medium transition-colors"
          >
            Atrás
          </button>

          <button
            id="btn-next-screen-14-molestia"
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
