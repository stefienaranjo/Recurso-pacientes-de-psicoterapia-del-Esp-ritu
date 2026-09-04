import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, HeartCrack, Sparkles, Check, Key } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen6IdDolorProps {
  initialEmociones: string[];
  initialDesc: string;
  initialCreencia: string;
  onUpdate: (emociones: string[], desc: string, creencia: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen6IdDolor: React.FC<Screen6IdDolorProps> = ({
  initialEmociones,
  initialDesc,
  initialCreencia,
  onUpdate,
  onNext,
  onBack,
}) => {
  const [emociones, setEmociones] = useState<string[]>(initialEmociones || ['Tristeza honda o duelo']);
  const [desc, setDesc] = useState(initialDesc);
  const [creencia, setCreencia] = useState(initialCreencia);

  const emotionChips = [
    'Tristeza honda o duelo',
    'Angustia y opresión en el pecho',
    'Miedo al futuro o a la pérdida',
    'Culpa y autorreproche',
    'Sensación de soledad o abandono',
    'Sentirme insuficiente o fracasado(a)',
    'Desesperanza o cansancio del mundo',
    'Vacío interior y confusión',
  ];

  const rootBeliefs = [
    '«Creo que estoy separado(a) de Dios y sin protección.»',
    '«Creo que perdí algo irremplazable que era mi fuente de paz.»',
    '«Creo que soy culpable y que merezco sufrir por mis errores.»',
    '«Creo que nadie me comprende verdaderamente y estoy solo(a).»',
  ];

  const toggleEmotion = (eName: string) => {
    sound.playBellChime();
    setEmociones((prev) =>
      prev.includes(eName) ? prev.filter((item) => item !== eName) : [...prev, eName]
    );
  };

  const handleNext = () => {
    onUpdate(emociones, desc, creencia);
    sound.playBellChime();
    onNext();
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
          <span>Volver al paso 5</span>
        </button>
        <span className="font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
          Ruta 2 • Pantalla 6 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Introspección Consciente
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Identifica tu dolor o emoción
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Reconocer la forma de la herida es el primer paso para permitir que la Verdad la desvanezca.
          </p>
        </div>

        {/* 1. Emotion chips */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <HeartCrack className="w-4 h-4 text-blue-600" />
            <span>1. ¿Qué emociones resuenan más en tu cuerpo ahora? (Puedes elegir varias)</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {emotionChips.map((chip) => {
              const selected = emociones.includes(chip);
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => toggleEmotion(chip)}
                  className={`p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-blue-50 border-blue-400 text-blue-950 shadow-xs ring-1 ring-blue-400/30'
                      : 'bg-stone-50/70 border-stone-200/70 text-stone-700 hover:bg-stone-100/80'
                  }`}
                >
                  <span>{chip}</span>
                  {selected && <Check className="w-4 h-4 text-blue-700 shrink-0 ml-1.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Personal description */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide">
            2. Nombra tu dolor en tus propias palabras
          </label>
          <textarea
            id="input-dolor-desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Escribe lo que sientes en el pecho, la garganta o el estómago; suéltalo sin juzgarte..."
            rows={3}
            className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
          />
        </div>

        {/* 3. The Root Ego Belief */}
        <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/70">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <Key className="w-4 h-4 text-amber-700" />
            <span>3. La raíz oculta según UCDM: ¿Qué creencia del ego está operando?</span>
          </div>

          <div className="space-y-2">
            {rootBeliefs.map((rb) => {
              const selected = creencia === rb;
              return (
                <button
                  key={rb}
                  type="button"
                  onClick={() => setCreencia(rb)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-amber-50 border-amber-400 text-amber-950 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="italic">{rb}</span>
                  {selected && <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          <input
            id="input-dolor-creencia"
            type="text"
            value={creencia}
            onChange={(e) => setCreencia(e.target.value)}
            placeholder="O escribe la creencia oculta que detectas en ti..."
            className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all"
          />
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
            id="btn-next-screen-7"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-blue-800 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>Realizar liberación emocional</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
