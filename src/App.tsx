import React, { useState, useEffect } from 'react';
import { ScreenId, RouteCategory, UserSessionState, MiracleRecord } from './types';
import { Navbar } from './components/Navbar';
import { ScreenNavigatorModal } from './components/ScreenNavigatorModal';
import { MiracleJournalModal } from './components/MiracleJournalModal';

// Screens
import { Screen1Tentacion } from './components/screens/Screen1Tentacion';
import { Screen2ValMolestia } from './components/screens/Screen2ValMolestia';
import { Screen3IdMolestia } from './components/screens/Screen3IdMolestia';
import { Screen4EjMolestia } from './components/screens/Screen4EjMolestia';
import { Screen5ValDolor } from './components/screens/Screen5ValDolor';
import { Screen6IdDolor } from './components/screens/Screen6IdDolor';
import { Screen7EjDolor } from './components/screens/Screen7EjDolor';
import { Screen8ValConducta } from './components/screens/Screen8ValConducta';
import { Screen9IdConducta } from './components/screens/Screen9IdConducta';
import { Screen10EjPerdon } from './components/screens/Screen10EjPerdon';
import { Screen11ValExterior } from './components/screens/Screen11ValExterior';
import { Screen12IdExterior } from './components/screens/Screen12IdExterior';
import { Screen13EjExterior } from './components/screens/Screen13EjExterior';
import { Screen14Consolidacion } from './components/screens/Screen14Consolidacion';
import { Screen15BotiquinSOS } from './components/screens/Screen15BotiquinSOS';
import { ScreenFinalCelebracion } from './components/screens/ScreenFinalCelebracion';

const INITIAL_SESSION: UserSessionState = {
  currentScreen: 'screen_1_tentacion',
  routeCategory: null,
  molestiaDesc: '',
  molestiaNivel: 6,
  molestiaPensamientoEgo: '',
  dolorEmociones: ['Tristeza honda o duelo'],
  dolorDesc: '',
  dolorCreenciaOculta: '',
  conductaPersona: '',
  conductaHecho: '',
  conductaJuicio: '',
  conductaDeseoPerdon: true,
  exteriorCircunstancia: '',
  exteriorMiedoResultado: '',
  exteriorControlSoltado: false,
  pazInicial: 4,
  pazFinal: 9,
  notaConsolidacion: '',
  instanteSantoAceptado: true,
};

const STORAGE_KEY = 'guardian_paz_miracles_v1';

export default function App() {
  const [session, setSession] = useState<UserSessionState>(INITIAL_SESSION);
  const [miracles, setMiracles] = useState<MiracleRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(miracles));
    } catch {
      // ignore
    }
  }, [miracles]);

  const navigateTo = (screen: ScreenId) => {
    setSession((prev) => ({ ...prev, currentScreen: screen }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoute = (category: RouteCategory) => {
    setSession((prev) => ({
      ...prev,
      routeCategory: category,
      pazInicial: 4,
    }));

    if (category === 'molestia') {
      navigateTo('screen_2_val_molestia');
    } else if (category === 'dolor') {
      navigateTo('screen_5_val_dolor');
    } else if (category === 'conducta') {
      navigateTo('screen_8_val_conducta');
    } else if (category === 'exterior') {
      navigateTo('screen_11_val_exterior');
    } else if (category === 'sos') {
      navigateTo('screen_15_botiquin_sos');
    }
  };

  const handleSaveToJournal = (finalPeace: number, note: string) => {
    const category = session.routeCategory || 'molestia';
    let title = 'Entrega de molestia cotidiana';
    let description = session.molestiaDesc || 'Momento de impaciencia entregado a la Paz';

    if (category === 'dolor') {
      title = 'Sanación de dolor emocional';
      description = session.dolorDesc || session.dolorEmociones.join(', ');
    } else if (category === 'conducta') {
      title = `Perdón concedido a ${session.conductaPersona || 'mi hermano'}`;
      description = session.conductaHecho || 'Visión de inocencia restablecida';
    } else if (category === 'exterior') {
      title = 'Entrega de resultado y control del mundo';
      description = session.exteriorCircunstancia || 'Providencia divina aceptada';
    } else if (category === 'sos') {
      title = 'Rescate de paz con Botiquín SOS';
      description = 'Torbellino del ego disipado con la verdad de Dios';
    }

    const newRecord: MiracleRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      routeCategory: category,
      title,
      description: note ? `${description} • Nota: "${note}"` : description,
      initialPeace: session.pazInicial,
      finalPeace,
      affirmation: 'Puedo elegir la paz de Dios en lugar de esto.',
      lessonQuote: '«Deseo la paz de Dios por encima de todas las cosas.»',
    };

    setMiracles((prev) => [newRecord, ...prev]);
  };

  const handleDeleteMiracle = (id: string) => {
    setMiracles((prev) => prev.filter((m) => m.id !== id));
  };

  const handleRestart = () => {
    setSession(INITIAL_SESSION);
    navigateTo('screen_1_tentacion');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800">
      {/* Navbar */}
      <Navbar
        currentScreen={session.currentScreen}
        onNavigate={navigateTo}
        onOpenNavigator={() => setIsNavigatorOpen(true)}
        onOpenJournal={() => setIsJournalOpen(true)}
        onOpenSOS={() => navigateTo('screen_15_botiquin_sos')}
        miracleCount={miracles.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        
        {/* Screen 1: Triaje de Tentación */}
        {session.currentScreen === 'screen_1_tentacion' && (
          <Screen1Tentacion
            onSelectRoute={handleSelectRoute}
            onOpenSOS={() => navigateTo('screen_15_botiquin_sos')}
            onOpenNavigator={() => setIsNavigatorOpen(true)}
          />
        )}

        {/* Ruta 1: Molestia Cotidiana (Screens 2, 3, 4) */}
        {session.currentScreen === 'screen_2_val_molestia' && (
          <Screen2ValMolestia
            onNext={() => navigateTo('screen_3_id_molestia')}
            onBack={() => navigateTo('screen_1_tentacion')}
          />
        )}
        {session.currentScreen === 'screen_3_id_molestia' && (
          <Screen3IdMolestia
            initialDesc={session.molestiaDesc}
            initialNivel={session.molestiaNivel}
            initialPensamiento={session.molestiaPensamientoEgo}
            onUpdate={(desc, nivel, pensamiento) =>
              setSession((prev) => ({
                ...prev,
                molestiaDesc: desc,
                molestiaNivel: nivel,
                molestiaPensamientoEgo: pensamiento,
                pazInicial: Math.max(1, 11 - nivel),
              }))
            }
            onNext={() => navigateTo('screen_4_ej_molestia')}
            onBack={() => navigateTo('screen_2_val_molestia')}
          />
        )}
        {session.currentScreen === 'screen_4_ej_molestia' && (
          <Screen4EjMolestia
            molestiaDesc={session.molestiaDesc}
            molestiaPensamiento={session.molestiaPensamientoEgo}
            onNext={() => navigateTo('screen_14_consolidacion')}
            onBack={() => navigateTo('screen_3_id_molestia')}
          />
        )}

        {/* Ruta 2: Dolor o Sufrimiento Emocional (Screens 5, 6, 7) */}
        {session.currentScreen === 'screen_5_val_dolor' && (
          <Screen5ValDolor
            onNext={() => navigateTo('screen_6_id_dolor')}
            onBack={() => navigateTo('screen_1_tentacion')}
          />
        )}
        {session.currentScreen === 'screen_6_id_dolor' && (
          <Screen6IdDolor
            initialEmociones={session.dolorEmociones}
            initialDesc={session.dolorDesc}
            initialCreencia={session.dolorCreenciaOculta}
            onUpdate={(emociones, desc, creencia) =>
              setSession((prev) => ({
                ...prev,
                dolorEmociones: emociones,
                dolorDesc: desc,
                dolorCreenciaOculta: creencia,
                pazInicial: 3,
              }))
            }
            onNext={() => navigateTo('screen_7_ej_dolor')}
            onBack={() => navigateTo('screen_5_val_dolor')}
          />
        )}
        {session.currentScreen === 'screen_7_ej_dolor' && (
          <Screen7EjDolor
            dolorEmociones={session.dolorEmociones}
            dolorDesc={session.dolorDesc}
            dolorCreencia={session.dolorCreenciaOculta}
            onNext={() => navigateTo('screen_14_consolidacion')}
            onBack={() => navigateTo('screen_6_id_dolor')}
          />
        )}

        {/* Ruta 3: Fricción con los Demás (Screens 8, 9, 10) */}
        {session.currentScreen === 'screen_8_val_conducta' && (
          <Screen8ValConducta
            onNext={() => navigateTo('screen_9_id_conducta')}
            onBack={() => navigateTo('screen_1_tentacion')}
          />
        )}
        {session.currentScreen === 'screen_9_id_conducta' && (
          <Screen9IdConducta
            initialPersona={session.conductaPersona}
            initialHecho={session.conductaHecho}
            initialJuicio={session.conductaJuicio}
            initialDeseoPerdon={session.conductaDeseoPerdon}
            onUpdate={(persona, hecho, juicio, deseoPerdon) =>
              setSession((prev) => ({
                ...prev,
                conductaPersona: persona,
                conductaHecho: hecho,
                conductaJuicio: juicio,
                conductaDeseoPerdon: deseoPerdon,
                pazInicial: 4,
              }))
            }
            onNext={() => navigateTo('screen_10_ej_perdon')}
            onBack={() => navigateTo('screen_8_val_conducta')}
          />
        )}
        {session.currentScreen === 'screen_10_ej_perdon' && (
          <Screen10EjPerdon
            conductaPersona={session.conductaPersona}
            conductaHecho={session.conductaHecho}
            conductaJuicio={session.conductaJuicio}
            onNext={() => navigateTo('screen_14_consolidacion')}
            onBack={() => navigateTo('screen_9_id_conducta')}
          />
        )}

        {/* Ruta 4: Apego al Mundo Exterior (Screens 11, 12, 13) */}
        {session.currentScreen === 'screen_11_val_exterior' && (
          <Screen11ValExterior
            onNext={() => navigateTo('screen_12_id_exterior')}
            onBack={() => navigateTo('screen_1_tentacion')}
          />
        )}
        {session.currentScreen === 'screen_12_id_exterior' && (
          <Screen12IdExterior
            initialCircunstancia={session.exteriorCircunstancia}
            initialMiedo={session.exteriorMiedoResultado}
            initialControlSoltado={session.exteriorControlSoltado}
            onUpdate={(circunstancia, miedo, controlSoltado) =>
              setSession((prev) => ({
                ...prev,
                exteriorCircunstancia: circunstancia,
                exteriorMiedoResultado: miedo,
                exteriorControlSoltado: controlSoltado,
                pazInicial: 4,
              }))
            }
            onNext={() => navigateTo('screen_13_ej_exterior')}
            onBack={() => navigateTo('screen_11_val_exterior')}
          />
        )}
        {session.currentScreen === 'screen_13_ej_exterior' && (
          <Screen13EjExterior
            exteriorCircunstancia={session.exteriorCircunstancia}
            exteriorMiedo={session.exteriorMiedoResultado}
            onNext={() => navigateTo('screen_14_consolidacion')}
            onBack={() => navigateTo('screen_12_id_exterior')}
          />
        )}

        {/* Screen 14: Consolidación de la Paz */}
        {session.currentScreen === 'screen_14_consolidacion' && (
          <Screen14Consolidacion
            category={session.routeCategory}
            initialPeace={session.pazInicial}
            onSaveToJournal={handleSaveToJournal}
            onNext={() => navigateTo('screen_final_celebracion')}
            onBack={() => {
              if (session.routeCategory === 'molestia') navigateTo('screen_4_ej_molestia');
              else if (session.routeCategory === 'dolor') navigateTo('screen_7_ej_dolor');
              else if (session.routeCategory === 'conducta') navigateTo('screen_10_ej_perdon');
              else if (session.routeCategory === 'exterior') navigateTo('screen_13_ej_exterior');
              else navigateTo('screen_15_botiquin_sos');
            }}
          />
        )}

        {/* Screen 15: Botiquín SOS */}
        {session.currentScreen === 'screen_15_botiquin_sos' && (
          <Screen15BotiquinSOS
            onGoToConsolidation={() => {
              setSession((prev) => ({ ...prev, routeCategory: 'sos', pazInicial: 2 }));
              navigateTo('screen_14_consolidacion');
            }}
            onGoHome={() => navigateTo('screen_1_tentacion')}
          />
        )}

        {/* Screen Final: Celebración, Profundización y Cierre */}
        {session.currentScreen === 'screen_final_celebracion' && (
          <ScreenFinalCelebracion
            onOpenJournal={() => setIsJournalOpen(true)}
            onRestart={handleRestart}
            miracleCount={miracles.length}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200/80 bg-white/60 py-6 text-center text-xs text-stone-500">
        <div className="max-w-5xl mx-auto px-4 space-y-1">
          <p className="font-medium text-stone-700">
            Guardián de Paz UCDM • Práctica espiritual de perdón no dual
          </p>
          <p className="text-[11px] text-stone-400">
            Inspirado en los principios de <em>Un Curso de Milagros</em> (Foundation for Inner Peace). Dedicado a recordar la Paz que nunca hemos perdido.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <ScreenNavigatorModal
        isOpen={isNavigatorOpen}
        onClose={() => setIsNavigatorOpen(false)}
        currentScreen={session.currentScreen}
        onSelectScreen={navigateTo}
      />

      <MiracleJournalModal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
        records={miracles}
        onDeleteRecord={handleDeleteMiracle}
      />
    </div>
  );
}
