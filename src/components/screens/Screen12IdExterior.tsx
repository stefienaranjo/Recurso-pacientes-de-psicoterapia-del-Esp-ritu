import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Landmark, Activity, Briefcase, FileText, Globe2, Check, AlertOctagon } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen12IdExteriorProps {
  initialCircunstancia: string;
  initialMiedo: string;
  initialControlSoltado: boolean;
  onUpdate: (circunstancia: string, miedo: string, controlSoltado: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen12IdExterior: React.FC<Screen12IdExteriorProps> = ({
  initialCircunstancia,
  initialMiedo,
  initialControlSoltado,
  onUpdate,
  onNext,
  onBack,
}) => {
  const [circunstancia, setCircunstancia] = useState(initialCircunstancia);
  const [miedo, setMiedo] = useState(initialMiedo);
  const [controlSoltado, setControlSoltado] = useState(initialControlSoltado || false);

  const circumstances = [
    { label: 'Finanzas, dinero, deudas o sustento', icon: Landmark },
    { label: 'Salud del cuerpo, síntomas o diagnóstico', icon: Activity },
    { label: 'Empleo, negocio, clientes o carrera', icon: Briefcase },
    { label: 'Trámite legal, mudanza, visado o contrato', icon: FileText },
    { label: 'Crisis social, política o del país', icon: Globe2 },
  ];

  const egoFears = [
    '«Si esto no sale como quiero, me quedaré en la ruina o sin salida.»',
    '«Si pierdo el control de esta situación, sobrevendrá el desastre.»',
    '«No puedo permitirme estar en paz mientras esto siga sin solución.»',
    '«Dios no se está ocupando de esto; tengo que forzarlo yo.»',
  ];

  const handleNext = () => {
    onUpdate(circunstancia, miedo, controlSoltado);
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
          <span>Volver al paso 11</span>
        </button>
        <span className="font-semibold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60">
          Ruta 4 • Pantalla 12 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Desmantelamiento del Ídolo
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Identifica qué circunstancia externa te ata
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Pon nombre al resultado terrenal que has convertido en condición para tu salvación.
          </p>
        </div>

        {/* 1. Category selector */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide">
            1. ¿En qué área sientes la mayor necesidad de control?
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {circumstances.map((c) => {
              const Icon = c.icon;
              const selected = circunstancia === c.label;
              return (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => setCircunstancia(c.label)}
                  className={`p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-purple-50 border-purple-400 text-purple-950 shadow-xs ring-1 ring-purple-400/30'
                      : 'bg-stone-50/70 border-stone-200/70 text-stone-700 hover:bg-stone-100/80'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>{c.label}</span>
                  </div>
                  {selected && <Check className="w-4 h-4 text-purple-700 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>

          <textarea
            id="input-exterior-circunstancia"
            value={circunstancia}
            onChange={(e) => setCircunstancia(e.target.value)}
            placeholder="O detalla exactamente cuál es el asunto que no puedes soltar de tu cabeza..."
            rows={2}
            className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
          />
        </div>

        {/* 2. Catastrophic Ego Script */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <AlertOctagon className="w-4 h-4 text-purple-700" />
            <span>2. ¿Qué catástrofe te dice el ego que ocurrirá si no sale como planeas?</span>
          </label>

          <div className="space-y-2">
            {egoFears.map((f) => {
              const selected = miedo === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setMiedo(f)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-purple-50 border-purple-400 text-purple-950 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="italic">{f}</span>
                  {selected && <Check className="w-3.5 h-3.5 text-purple-700 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          <input
            id="input-exterior-miedo"
            type="text"
            value={miedo}
            onChange={(e) => setMiedo(e.target.value)}
            placeholder="O escribe tu miedo específico al desenlace..."
            className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
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
            id="btn-next-screen-13"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-purple-800 hover:bg-purple-900 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>Realizar ejercicio de entrega del resultado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
