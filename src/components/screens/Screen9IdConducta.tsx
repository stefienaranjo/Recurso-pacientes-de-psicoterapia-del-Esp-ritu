import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, User, MessageSquare, Scale, Check } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen9IdConductaProps {
  initialPersona: string;
  initialHecho: string;
  initialJuicio: string;
  initialDeseoPerdon: boolean;
  onUpdate: (persona: string, hecho: string, juicio: string, deseoPerdon: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen9IdConducta: React.FC<Screen9IdConductaProps> = ({
  initialPersona,
  initialHecho,
  initialJuicio,
  initialDeseoPerdon,
  onUpdate,
  onNext,
  onBack,
}) => {
  const [persona, setPersona] = useState(initialPersona);
  const [hecho, setHecho] = useState(initialHecho);
  const [juicio, setJuicio] = useState(initialJuicio);
  const [deseoPerdon, setDeseoPerdon] = useState(initialDeseoPerdon !== false);

  const relationshipTypes = [
    'Mi pareja o expareja',
    'Un familiar (padre, madre, hermano/a, hijo/a)',
    'Un compañero(a) de trabajo o jefe',
    'Un amigo(a) cercano(a)',
    'Un desconocido o vecino',
    'Una figura pública o colectiva',
  ];

  const egoJudgments = [
    '«Es un(a) egoísta que solo piensa en sí mismo(a).»',
    '«Fue completamente injusto(a) y me faltó al respeto.»',
    '«No me valora ni reconoce todo lo que hago.»',
    '«Debería disculparse y cambiar antes de que yo esté en paz.»',
  ];

  const handleNext = () => {
    onUpdate(persona, hecho, juicio, deseoPerdon);
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
          <span>Volver al paso 8</span>
        </button>
        <span className="font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
          Ruta 3 • Pantalla 9 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Identificación de la Proyección
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Identifica la fricción con los demás
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Pon sobre la mesa el juicio del ego hacia tu hermano para entregárselo al Espíritu Santo.
          </p>
        </div>

        {/* 1. Person involved */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <User className="w-4 h-4 text-emerald-700" />
            <span>1. ¿Hacia quién se dirige tu molestia o resentimiento?</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {relationshipTypes.map((r) => {
              const selected = persona === r;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setPersona(r)}
                  className={`p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs ring-1 ring-emerald-400/30'
                      : 'bg-stone-50/70 border-stone-200/70 text-stone-700 hover:bg-stone-100/80'
                  }`}
                >
                  <span>{r}</span>
                  {selected && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
                </button>
              );
            })}
          </div>

          <input
            id="input-conducta-persona"
            type="text"
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            placeholder="O escribe su nombre o relación específica..."
            className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
          />
        </div>

        {/* 2. Specific behavior */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>2. ¿Qué conducta o palabras de su parte te molestaron?</span>
          </label>
          <textarea
            id="input-conducta-hecho"
            value={hecho}
            onChange={(e) => setHecho(e.target.value)}
            placeholder="Describe brevemente lo que sucedió sin adornos..."
            rows={2}
            className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
          />
        </div>

        {/* 3. The Judgment of the Ego */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide">
            3. ¿Qué juicio categórico emitió tu ego sobre esa persona?
          </label>

          <div className="space-y-2">
            {egoJudgments.map((j) => {
              const selected = juicio === j;
              return (
                <button
                  key={j}
                  type="button"
                  onClick={() => setJuicio(j)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="italic">{j}</span>
                  {selected && <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          <input
            id="input-conducta-juicio"
            type="text"
            value={juicio}
            onChange={(e) => setJuicio(e.target.value)}
            placeholder="O escribe tu propio veredicto o queja..."
            className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
          />
        </div>

        {/* 4. The UCDM Dilemma: ¿Tener razón o ser feliz? */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
            <Scale className="w-4 h-4 text-amber-700" />
            <span>La Pregunta de Oro de UCDM</span>
          </div>

          <p className="font-serif text-lg font-bold text-stone-900 leading-snug">
            «¿Prefieres tener la razón o ser feliz? No puedes ser ambas cosas a la vez.»
          </p>

          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => setDeseoPerdon(true)}
              className={`flex-1 p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                deseoPerdon
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-sm'
                  : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              Elijo la Felicidad y el Perdón
            </button>

            <button
              type="button"
              onClick={() => setDeseoPerdon(false)}
              className={`flex-1 p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                !deseoPerdon
                  ? 'bg-rose-700 text-white border-rose-800 shadow-sm'
                  : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              Aún me apego a tener la razón
            </button>
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
            id="btn-next-screen-10"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>Realizar ejercicio de perdón</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
