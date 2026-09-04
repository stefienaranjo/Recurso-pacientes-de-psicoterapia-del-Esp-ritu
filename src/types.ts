export type ScreenId =
  | 'screen_1_tentacion'
  | 'screen_2_val_molestia'
  | 'screen_3_id_molestia'
  | 'screen_4_ej_molestia'
  | 'screen_5_val_dolor'
  | 'screen_6_id_dolor'
  | 'screen_7_ej_dolor'
  | 'screen_8_val_conducta'
  | 'screen_9_id_conducta'
  | 'screen_10_ej_perdon'
  | 'screen_11_val_exterior'
  | 'screen_12_id_exterior'
  | 'screen_13_ej_exterior'
  | 'screen_14_consolidacion'
  | 'screen_15_botiquin_sos'
  | 'screen_final_celebracion';

export type RouteCategory = 'molestia' | 'dolor' | 'conducta' | 'exterior' | 'sos';

export interface UserSessionState {
  currentScreen: ScreenId;
  routeCategory: RouteCategory | null;
  
  // Molestia
  molestiaDesc: string;
  molestiaNivel: number;
  molestiaPensamientoEgo: string;

  // Dolor
  dolorEmociones: string[];
  dolorDesc: string;
  dolorCreenciaOculta: string;

  // Conducta / Friccion
  conductaPersona: string;
  conductaHecho: string;
  conductaJuicio: string;
  conductaDeseoPerdon: boolean;

  // Exterior
  exteriorCircunstancia: string;
  exteriorMiedoResultado: string;
  exteriorControlSoltado: boolean;

  // Consolidacion
  pazInicial: number; // 1-10
  pazFinal: number; // 1-10
  notaConsolidacion: string;
  instanteSantoAceptado: boolean;
}

export interface MiracleRecord {
  id: string;
  date: string;
  routeCategory: RouteCategory;
  title: string;
  description: string;
  initialPeace: number;
  finalPeace: number;
  affirmation: string;
  lessonQuote: string;
}

export interface ScreenMeta {
  id: ScreenId;
  index: number;
  title: string;
  shortTitle: string;
  category: RouteCategory | 'general';
  description: string;
}
