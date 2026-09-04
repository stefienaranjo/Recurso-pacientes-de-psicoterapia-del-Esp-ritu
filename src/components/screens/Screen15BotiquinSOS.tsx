import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Wind, Sparkles, CheckCircle2, ChevronRight, RefreshCw, Heart, Home } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen15BotiquinSOSProps {
  onGoToConsolidation: () => void;
  onGoHome: () => void;
}

export const Screen15BotiquinSOS: React.FC<Screen15BotiquinSOSProps> = ({
  onGoToConsolidation,
  onGoHome,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [repetitionCount, setRepetitionCount] = useState<number>(0);
  const [breathePhase, setBreathePhase] = useState<'inhala' | 'sostén' | 'exhala'>('inhala');
  const [timerSeconds, setTimerSeconds] = useState<number>(4);

  // Breathing cycle
  useEffect(() => {
    if (activeStep !== 2) return;
    const interval = setInterval(() => {
      setBreathePhase((prev) => {
        if (prev === 'inhala') {
          sound.playBreathGuide(true);
          return 'sostén';
        }
        if (prev === 'sostén') return 'exhala';
        sound.playBreathGuide(false);
        return 'inhala';
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [activeStep]);

  const handleNextStep = (next: number) => {
    sound.playBellChime();
    setActiveStep(next);
  };

  const handleRepeatPhrase = () => {
    sound.playBellChime();
    const next = repetitionCount + 1;
    setRepetitionCount(next);
    if (next >= 3) {
      sound.playTibetanBowl(3.0, 256);
      setTimeout(() => setActiveStep(4), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Red Alert Card Header */}
      <div className="bg-rose-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-rose-700/40 rounded-full blur-2xl" />

        <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-800/80 border border-rose-700 flex items-center justify-center text-rose-200">
              <ShieldAlert className="w-5 h-5 animate-pulse text-rose-300" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300 block">
                Protocolo de Emergencia Espiritual
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold">
                Botiquín SOS • Paso a Paso
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-rose-950/70 px-3 py-1.5 rounded-full border border-rose-800/80 text-xs font-semibold text-rose-200">
            <span>Paso {activeStep} de 5</span>
          </div>
        </div>

        <p className="relative z-10 text-rose-200 text-xs sm:text-sm mt-3 leading-relaxed">
          Usa esta secuencia cuando sientas que vas a explotar, atacar, entrar en pánico o cuando la mente esté secuestrada por el torbellino del ego.
        </p>
      </div>

      {/* Interactive Step Content Container */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md p-6 sm:p-8 min-h-[380px] flex flex-col justify-between">
        
        {/* Step 1: STOP */}
        {activeStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center py-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-700 text-2xl font-bold shadow-inner">
              ✋
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                Paso 1: Detén la Reacción Automática
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                ¡ALTO! No tomes ninguna decisión ahora
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                El ego te urge a contestar con ira, enviar ese mensaje, renunciar, acusar o entrar en pánico. <strong>Detente.</strong> No hagas nada desde este estado mental.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/80 text-xs text-rose-900 max-w-md mx-auto italic">
              «Cualquier decisión tomada con miedo o rabia solo perpetuará el conflicto. Date 2 minutos de tregua con Dios.»
            </div>

            <button
              id="sos-step1-next"
              onClick={() => handleNextStep(2)}
              className="px-8 py-3 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span>Acepto parar: Ir a Respirar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Step 2: Breathing Anchor */}
        {activeStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center py-2"
          >
            <div className="space-y-1 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Paso 2: Anclaje de Respiración UCDM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Respira conmigo en el Instante Presente
              </h2>
              <p className="text-xs text-stone-500">
                Baja los hombros, relaja la mandíbula y sigue el ritmo del círculo sagrado.
              </p>
            </div>

            {/* Visual breathing circle */}
            <div className="py-4 flex items-center justify-center">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
                    breathePhase === 'inhala'
                      ? 'border-amber-400 bg-amber-100/50 scale-110 shadow-lg'
                      : breathePhase === 'sostén'
                      ? 'border-amber-500 bg-amber-200/60 scale-115'
                      : 'border-stone-300 bg-stone-100/50 scale-95'
                  }`}
                />
                <div className="relative text-center z-10 space-y-1">
                  <Wind className="w-6 h-6 mx-auto text-amber-800" />
                  <span className="text-xs font-bold uppercase text-stone-900 tracking-wider block">
                    {breathePhase === 'inhala' ? 'Inhala Luz' : breathePhase === 'sostén' ? 'Estoy a Salvo' : 'Exhala la Furia'}
                  </span>
                  <span className="text-[10px] text-stone-500 block">
                    {breathePhase === 'inhala' ? '4 segundos' : breathePhase === 'sostén' ? 'Paz de Dios' : 'Suelto el ataque'}
                  </span>
                </div>
              </div>
            </div>

            <button
              id="sos-step2-next"
              onClick={() => handleNextStep(3)}
              className="px-8 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span>Mi cuerpo se relaja: Siguiente paso</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Step 3: Rescue Phrase 3 times */}
        {activeStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center py-4"
          >
            <div className="space-y-1 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Paso 3: La Frase de Rescate (Lección 34 UCDM)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Repite conscientemente 3 veces:
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 max-w-lg mx-auto shadow-xs">
              <p className="font-serif text-xl sm:text-2xl font-bold text-amber-950 italic">
                «Puedo elegir la paz en lugar de esto.»
              </p>
            </div>

            <div className="space-y-3 max-w-xs mx-auto">
              <button
                id="btn-repeat-sos-phrase"
                onClick={handleRepeatPhrase}
                className="w-full px-6 py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Lo repito ({repetitionCount}/3)</span>
              </button>

              <div className="flex justify-center gap-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-3 h-3 rounded-full transition-all ${
                      repetitionCount >= num ? 'bg-amber-600 scale-110' : 'bg-stone-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Holy Spirit Invocation */}
        {activeStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 text-center py-4"
          >
            <div className="space-y-1 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Paso 4: Invocación al Espíritu Santo
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Entrega el volante de la mente
              </h2>
            </div>

            <blockquote className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 max-w-lg mx-auto font-serif text-base sm:text-lg text-stone-900 italic leading-relaxed">
              «Espíritu Santo, no sé qué significa nada de esto ni cómo solucionarlo. Dejo de juzgar. Te entrego este instante por completo. Hazte cargo Tú de mi mente y de esta situación.»
            </blockquote>

            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Siente cómo la carga se desprende de tus hombros. La salvación del mundo no depende de tu pequeña fuerza, sino del Amor infinito.
            </p>

            <button
              id="sos-step4-next"
              onClick={() => handleNextStep(5)}
              className="px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span>Aceptar la Expiación</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Step 5: Acceptance & Resolution */}
        {activeStep === 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 text-center py-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-xs">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Paso 5: Rescate Completado
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                La tormenta del ego se ha disipado
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Has evitado el ataque del ego. La paz ha vuelto a su trono en tu corazón.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 max-w-md mx-auto space-y-1">
              <p className="font-serif text-sm font-bold text-stone-800 italic">
                «Soy tal como Dios me creó. Su Hijo no puede sufrir.»
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="btn-sos-to-consolidation"
                onClick={() => {
                  sound.playTibetanBowl(3.5, 256);
                  onGoToConsolidation();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Consolidar esta Paz en mi Diario</span>
              </button>

              <button
                id="btn-sos-to-home"
                onClick={onGoHome}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Bottom indicator */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
          <span>Botiquín SOS UCDM</span>
          <span>Instante Santo de Rescate</span>
        </div>

      </div>
    </motion.div>
  );
};
