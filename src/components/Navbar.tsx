import React, { useState } from 'react';
import { Sparkles, ShieldAlert, Volume2, VolumeX, BookOpen, Layers, Home, ChevronLeft } from 'lucide-react';
import { ScreenId } from '../types';
import { sound } from '../utils/audio';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenNavigator: () => void;
  onOpenJournal: () => void;
  onOpenSOS: () => void;
  miracleCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenNavigator,
  onOpenJournal,
  onOpenSOS,
  miracleCount,
}) => {
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const toggleSound = () => {
    sound.isMuted = !sound.isMuted;
    setIsMuted(sound.isMuted);
    if (!sound.isMuted) {
      sound.playBellChime();
    }
  };

  const isHome = currentScreen === 'screen_1_tentacion';

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand & Back */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              id="nav-back-button"
              onClick={() => onNavigate('screen_1_tentacion')}
              className="p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              title="Volver al inicio"
              aria-label="Volver al inicio"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <button
            id="nav-brand-button"
            onClick={() => {
              sound.playTibetanBowl(2.5, 216);
              onNavigate('screen_1_tentacion');
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600/20 via-amber-500/30 to-amber-200/40 border border-amber-300/60 flex items-center justify-center text-amber-800 shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-stone-900 block leading-tight">
                Guardián de Paz
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 tracking-wider uppercase font-medium">
                Un Curso de Milagros
              </span>
            </div>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Audio Chime Toggle */}
          <button
            id="nav-sound-toggle"
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-all ${
              isMuted
                ? 'border-stone-200 text-stone-400 hover:text-stone-600 bg-stone-100/50'
                : 'border-amber-200 text-amber-700 bg-amber-50 hover:bg-amber-100/80 shadow-xs'
            }`}
            title={isMuted ? 'Activar cuenco y campanas sonoras' : 'Silenciar sonido'}
            aria-label="Alternar sonido"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* 16 Screens Selector */}
          <button
            id="nav-screens-explorer"
            onClick={() => {
              sound.playBellChime();
              onOpenNavigator();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white border border-stone-200/80 text-stone-700 hover:bg-stone-50 hover:border-stone-300 shadow-xs transition-all"
            title="Explorador de las 16 pantallas"
          >
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden sm:inline">16 Pantallas</span>
          </button>

          {/* Miracle Journal */}
          <button
            id="nav-journal-button"
            onClick={() => {
              sound.playBellChime();
              onOpenJournal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white border border-stone-200/80 text-stone-700 hover:bg-stone-50 hover:border-stone-300 shadow-xs transition-all relative"
            title="Ver Diario de Milagros"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span className="hidden md:inline">Diario</span>
            {miracleCount > 0 && (
              <span className="bg-amber-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {miracleCount}
              </span>
            )}
          </button>

          {/* SOS Emergency Button */}
          <button
            id="nav-sos-button"
            onClick={() => {
              sound.playTibetanBowl(3.0, 160);
              onOpenSOS();
            }}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow transition-all"
            title="Botiquín SOS para colapso de ego o ataque"
          >
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
            <span>SOS</span>
          </button>
        </div>

      </div>
    </header>
  );
};
