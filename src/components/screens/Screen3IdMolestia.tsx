import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Gauge, Brain, Check, HelpCircle } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Screen3IdMolestiaProps {
  initialDesc: string;
  initialNivel: number;
  initialPensamiento: string;
  onUpdate: (desc: string, nivel: number, pensamiento: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Screen3IdMolestia: React.FC<Screen3IdMolestiaProps> = ({
  initialDesc,
  initialNivel,
  initialPensamiento,
  onUpdate,
  onNext,
  onBack,
}) => {
  const [desc, setDesc] = useState(initialDesc);
  const [nivel, setNivel] = useState(initialNivel || 6);
  const [pensamiento, setPensamiento] = useState(initialPensamiento);

  const presets = [
    'Tráfico pesado o alguien me cerró el paso',
    'Una persona se retrasó o canceló un plan',
    'La tecnología, wifi o el sistema falló',
    'Tengo demasiados pendientes y poco tiempo',
    'Alguien hizo ruido o fue desconsiderado',
    'Un error imprevisto arruinó mi plan',
  ];

  const egoScripts = [
    '«Esto no debería estar pasando, es inaceptable.»',
    '«Me están faltando al respeto o me hacen perder tiempo.»',
    '«Si no controlo esto de prisa, algo saldrá muy mal.»',
    '«Tengo derecho a enfadarme para que aprendan.»',
  ];

  const handleNext = () => {
    onUpdate(desc, nivel, pensamiento);
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
      {/* Top Navigation */}
      <div className="flex items-center justify-between text-xs text-stone-500">
        <button
          onClick={onBack}
          className="flex items-center gap-1 hover:text-stone-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Volver al paso 2</span>
        </button>
        <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
          Ruta 1 • Pantalla 3 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Discernimiento Honesto
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Identifica tu molestia cotidiana
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Para entregar una ilusión al Espíritu Santo, primero debemos nombrarla con claridad sin disimular.
          </p>
        </div>

        {/* 1. Situation Trigger */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-stone-800 uppercase tracking-wide">
            1. ¿Qué suceso o detonante ocurrió?
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {presets.map((p) => {
              const selected = desc === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setDesc(p)}
                  className={`p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-xs ring-1 ring-amber-400/30'
                      : 'bg-stone-50/70 border-stone-200/70 text-stone-700 hover:bg-stone-100/80'
                  }`}
                >
                  <span>{p}</span>
                  {selected && <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
                </button>
              );
            })}
          </div>

          <textarea
            id="input-molestia-desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="O descríbelo en tus propias palabras con total sinceridad..."
            rows={2}
            className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all"
          />
        </div>

        {/* 2. Intensity Slider */}
        <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/70">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wide">
              <Gauge className="w-4 h-4 text-amber-700" />
              <span>2. Nivel de agitación o impaciencia percibida</span>
            </label>
            <span className="text-sm font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
              {nivel} / 10
            </span>
          </div>

          <input
            id="input-molestia-nivel"
            type="range"
            min={1}
            max={10}
            value={nivel}
            onChange={(e) => setNivel(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />

          <div className="flex justify-between text-[10px] text-stone-400">
            <span>1: Leve incomodidad</span>
            <span>5: Molestia moderada</span>
            <span>10: Fuerte irritación</span>
          </div>
        </div>

        {/* 3. Ego thought */}
        <div className="space-y-3">
          <label className="flex items-center gap-1.5 text-xs font-bold text-stone-800 uppercase tracking-wide">
            <Brain className="w-4 h-4 text-amber-700" />
            <span>3. ¿Qué pensamiento te repite el ego en este momento?</span>
          </label>

          <div className="space-y-2">
            {egoScripts.map((s) => {
              const selected = pensamiento === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setPensamiento(s)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-xs'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="italic">{s}</span>
                  {selected && <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          <input
            id="input-molestia-pensamiento"
            type="text"
            value={pensamiento}
            onChange={(e) => setPensamiento(e.target.value)}
            placeholder="O escribe el argumento que tu mente está defendiendo..."
            className="w-full text-xs sm:text-sm p-3 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all"
          />
        </div>

        {/* Next & Back */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs sm:text-sm font-medium transition-colors"
          >
            Atrás
          </button>

          <button
            id="btn-next-screen-4"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
          >
            <span>Realizar ejercicio adaptado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
