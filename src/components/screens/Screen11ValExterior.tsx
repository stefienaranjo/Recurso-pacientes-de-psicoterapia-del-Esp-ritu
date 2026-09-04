import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Sparkles, Globe, Compass, Lock } from 'lucide-react';
import { SERENE_IMAGES } from '../../data/ucdmContent';
import { sound } from '../../utils/audio';

interface Screen11ValExteriorProps {
  onNext: () => void;
  onBack: () => void;
}

export const Screen11ValExterior: React.FC<Screen11ValExteriorProps> = ({ onNext, onBack }) => {
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
        <span className="font-semibold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60">
          Ruta 4 • Pantalla 11 de 16
        </span>
      </div>

      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-md overflow-hidden">
        {/* Banner with Mountain Mist Image */}
        <div className="h-44 sm:h-56 w-full relative overflow-hidden">
          <img
            src={SERENE_IMAGES.mountainMist}
            alt="Montañas y bruma serena"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-200">
              Desapego y Libertad
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm">
              Validación ante la expectativa del mundo exterior
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-stone-900">
              ¿Sientes ansiedad porque necesitas desesperadamente que <strong>algo allá afuera se resuelva</strong> (dinero, salud, un trámite, la política, una respuesta ajena) para poder respirar en paz?
            </p>
            <p>
              El ego te dice: <em>«Cuando el banco responda, cuando el médico dé el alta, cuando el país mejore... entonces tendrás paz»</em>. Esto es hacer de la paz un rehén del mundo. <em>Un Curso de Milagros</em> nos recuerda que el mundo no es la causa de tu paz ni de tu zozobra; el mundo es solo la pantalla donde se proyecta el estado de tu propia mente.
            </p>
          </div>

          {/* UCDM Principle Box */}
          <div className="bg-purple-50/60 border border-purple-200/70 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-purple-800 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Principio Maestro de UCDM (Cap. 21)</span>
            </div>
            <p className="font-serif text-lg sm:text-xl text-stone-900 italic leading-snug">
              «No intentes cambiar el mundo; elige más bien cambiar de mentalidad acerca de él.»
            </p>
            <p className="text-xs text-stone-500">
              La paz precede a las circunstancias. Quien busca primero la paz de Dios ve cómo todo lo demás encuentra su perfecto orden celestial.
            </p>
          </div>

          {/* 3 Pillars of World Surrender */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Lock className="w-4 h-4 text-purple-600" />
              <div className="font-semibold text-xs text-stone-900">1. Romper el ídolo</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Ningún resultado terrenal tiene la capacidad de salvarte ni de condenarte.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Globe className="w-4 h-4 text-purple-600" />
              <div className="font-semibold text-xs text-stone-900">2. Es un efecto, no la causa</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                Las circunstancias reflejan pensamientos; cambia la causa interior y el efecto sanará.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-left space-y-1">
              <Compass className="w-4 h-4 text-purple-600" />
              <div className="font-semibold text-xs text-stone-900">3. Providencia real</div>
              <p className="text-[11px] text-stone-500 leading-tight">
                El Espíritu Santo conoce el plan para tu felicidad mucho mejor que tus cálculos de control.
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
              id="btn-next-screen-12"
              onClick={() => {
                sound.playBellChime();
                onNext();
              }}
              className="px-6 py-2.5 rounded-xl bg-purple-800 hover:bg-purple-900 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <span>Identificar circunstancia que me ata</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
