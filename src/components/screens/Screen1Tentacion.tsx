import React from 'react';
import { motion } from 'motion/react';
import { Clock, HeartHandshake, Users, Globe2, ShieldAlert, Sparkles, ArrowRight, Quote } from 'lucide-react';
import { RouteCategory } from '../../types';
import { SERENE_IMAGES, UCDM_QUOTES } from '../../data/ucdmContent';
import { sound } from '../../utils/audio';

interface Screen1TentacionProps {
  onSelectRoute: (category: RouteCategory) => void;
  onOpenSOS: () => void;
  onOpenNavigator: () => void;
}

export const Screen1Tentacion: React.FC<Screen1TentacionProps> = ({
  onSelectRoute,
  onOpenSOS,
  onOpenNavigator,
}) => {
  const routes = [
    {
      category: 'molestia' as RouteCategory,
      title: 'Molestia o Impaciencia Cotidiana',
      subtitle: 'Prisas, retrasos, tráfico, frustración o pequeñas contrariedades',
      quote: '«Nunca estoy disgustado por la razón que creo.» (Lección 5)',
      icon: Clock,
      image: SERENE_IMAGES.calmWater,
      accent: 'amber',
      borderClass: 'hover:border-amber-400 group-hover:bg-amber-500/10',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-200',
    },
    {
      category: 'dolor' as RouteCategory,
      title: 'Dolor o Sufrimiento Emocional',
      subtitle: 'Tristeza profunda, angustia, miedo, culpa, duelo o vacío',
      quote: '«El dolor es un testigo falso. Deseo la paz de Dios.» (Texto)',
      icon: HeartHandshake,
      image: SERENE_IMAGES.warmSunbeam,
      accent: 'blue',
      borderClass: 'hover:border-blue-400 group-hover:bg-blue-500/10',
      badgeClass: 'bg-blue-100 text-blue-900 border-blue-200',
    },
    {
      category: 'conducta' as RouteCategory,
      title: 'Fricción con los Demás',
      subtitle: 'Juicios, quejas, ofensas percibidas, ataque o resentimiento',
      quote: '«¿Prefieres tener razón o ser feliz?» (Manual)',
      icon: Users,
      image: SERENE_IMAGES.oliveSanctuary,
      accent: 'emerald',
      borderClass: 'hover:border-emerald-400 group-hover:bg-emerald-500/10',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    },
    {
      category: 'exterior' as RouteCategory,
      title: 'Expectativa del Mundo Exterior',
      subtitle: 'Apego a resultados, economía, salud, política o necesidad de control',
      quote: '«No busques cambiar el mundo, sino tu mente acerca de él.» (Cap. 21)',
      icon: Globe2,
      image: SERENE_IMAGES.mountainMist,
      accent: 'purple',
      borderClass: 'hover:border-purple-400 group-hover:bg-purple-500/10',
      badgeClass: 'bg-purple-100 text-purple-900 border-purple-200',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Hero Card with Peaceful Imagery */}
      <div className="relative rounded-3xl overflow-hidden border border-stone-200/80 shadow-md bg-stone-900 text-white min-h-[320px] flex items-end p-6 sm:p-10">
        <img
          src={SERENE_IMAGES.dawnLight}
          alt="Luz del amanecer sereno"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/50 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-medium backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Discernimiento espiritual no dual</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-50 leading-tight">
            ¿Estás en medio de una tentación?
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Para <em>Un Curso de Milagros</em>, la tentación no es un pecado; es simplemente la invitación a elegir entre el ego y el Espíritu Santo. Reconoce dónde se fue tu paz y entrégala para recibir el milagro.
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <button
              id="hero-sos-call"
              onClick={() => {
                sound.playTibetanBowl(3.0, 160);
                onOpenSOS();
              }}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2 transition-transform active:scale-95"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Siento que voy a explotar (SOS)</span>
            </button>

            <button
              id="hero-navigator-call"
              onClick={onOpenNavigator}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 text-xs sm:text-sm font-medium border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2"
            >
              <span>Ver las 16 Pantallas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Portals Header */}
      <div className="text-center space-y-1 pt-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
          Selecciona la forma en que se presenta tu pérdida de paz
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 max-w-lg mx-auto">
          Cualquiera que sea la forma, el remedio siempre es el mismo: un cambio de percepción obrado por el amor.
        </p>
      </div>

      {/* 4 Gateway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {routes.map((route, i) => {
          const Icon = route.icon;
          return (
            <button
              key={route.category}
              id={`route-card-${route.category}`}
              onClick={() => {
                sound.playBellChime();
                onSelectRoute(route.category);
              }}
              className={`group text-left rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative ${route.borderClass}`}
            >
              {/* Subtle top image strip */}
              <div className="h-28 w-full -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-4 overflow-hidden relative">
                <img
                  src={route.image}
                  alt={route.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-2.5 left-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-800 text-xs font-bold shadow-xs">
                    0{i + 1}
                  </span>
                  <span className="text-white text-xs font-semibold drop-shadow-sm tracking-wide">
                    Ruta {i + 1}
                  </span>
                </div>
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    {route.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {route.subtitle}
                </p>

                <div className="pt-2">
                  <p className="text-[11px] sm:text-xs text-stone-500 italic bg-stone-50 p-2 rounded-lg border border-stone-100">
                    {route.quote}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-700">
                <span>Comenzar discernimiento</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Daily Spiritual Grounding Quote */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs">
        <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
          <Quote className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
            Principio Sagrado de UCDM
          </span>
          <p className="font-serif text-base sm:text-lg text-stone-800 italic">
            "{UCDM_QUOTES[1].text}"
          </p>
          <p className="text-xs text-stone-500">
            {UCDM_QUOTES[1].source} • Recuerda que tu única función aquí es perdonar las ilusiones para retornar a la dicha.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
