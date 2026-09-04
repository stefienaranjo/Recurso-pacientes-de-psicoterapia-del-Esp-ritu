import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, BookOpen, Share2, RefreshCw, Heart, Check, Sun, Copy, Flame } from 'lucide-react';
import { SERENE_IMAGES, UCDM_QUOTES, DAILY_AFFIRMATIONS } from '../../data/ucdmContent';
import { sound } from '../../utils/audio';

interface ScreenFinalCelebracionProps {
  onOpenJournal: () => void;
  onRestart: () => void;
  miracleCount: number;
}

export const ScreenFinalCelebracion: React.FC<ScreenFinalCelebracionProps> = ({
  onOpenJournal,
  onRestart,
  miracleCount,
}) => {
  const [copied, setCopied] = useState(false);
  const [randomQuote] = useState(() => UCDM_QUOTES[Math.floor(Math.random() * UCDM_QUOTES.length)]);
  const [randomAffirmation] = useState(() => DAILY_AFFIRMATIONS[Math.floor(Math.random() * DAILY_AFFIRMATIONS.length)]);

  useEffect(() => {
    // Elegant warm gold confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D97706', '#F59E0B', '#FDE68A', '#10B981'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }
    sound.playTibetanBowl(4.0, 256);
  }, []);

  const handleCopyAffirmation = () => {
    sound.playBellChime();
    navigator.clipboard.writeText(`«${randomAffirmation}» - Guardián de Paz UCDM`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      {/* Banner Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden">
        <div className="h-48 sm:h-64 w-full relative overflow-hidden">
          <img
            src={SERENE_IMAGES.goldenHorizon}
            alt="Horizonte dorado y sereno"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Milagro Consumado</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight drop-shadow-sm">
              La Paz de Dios reina en tu mente
            </h1>
            <p className="text-xs sm:text-sm text-stone-200 line-clamp-1">
              Has elegido al Amor sobre el miedo. Tu cambio de percepción bendice al mundo entero.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Blessing */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/50 border border-amber-200 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-100/90 flex items-center justify-center text-amber-700 shadow-xs">
              <Heart className="w-6 h-6 fill-amber-600 text-amber-600" />
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              «Descansa en Dios y deja que Su Paz te envuelva»
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
              Cada vez que perdonas una ofensa, entregas una queja o liberas un dolor, el mundo entero se acerca un paso más a la Realidad celestial.
            </p>
          </div>

          {/* UCDM Lesson of the Day */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase tracking-wider">
              <span>Lección para Profundizar Hoy</span>
              <span className="bg-amber-100 px-2 py-0.5 rounded text-amber-800 font-semibold">
                {randomQuote.lesson}
              </span>
            </div>

            <p className="font-serif text-lg sm:text-xl text-stone-900 italic leading-snug">
              "{randomQuote.text}"
            </p>

            <p className="text-xs text-stone-500">
              {randomQuote.source} • Recuerda mantener esta verdad como escudo de paz durante todo tu día.
            </p>
          </div>

          {/* Daily Affirmation Card */}
          <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 space-y-3 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Afirmación Sagrada para Llevar Contigo</span>
              </div>

              <button
                id="btn-copy-final-affirmation"
                onClick={handleCopyAffirmation}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 text-xs transition-colors"
                title="Copiar afirmación"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">¡Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <p className="font-serif text-lg sm:text-xl text-white italic">
              «{randomAffirmation}»
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              id="btn-open-journal-final"
              onClick={() => {
                sound.playBellChime();
                onOpenJournal();
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-800 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Ver mi Diario de Milagros ({miracleCount})</span>
            </button>

            <button
              id="btn-restart-peace-flow"
              onClick={() => {
                sound.playTibetanBowl(3.0, 216);
                onRestart();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-stone-900 hover:from-amber-800 hover:to-black text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Nuevo Discernimiento de Paz</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
