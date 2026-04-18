export type Lang = 'tr' | 'en';

export type Localized = {
  tr: string;
  en: string;
};

export type Card = {
  id: string;
  title: Localized;
  freudianName: Localized;
  group: 'major' | 'arzu' | 'kaygi' | 'fantezi' | 'gerceklik';
  image?: string;
  classicName: string;
  meaning: Localized;
  psychoanalyticFrame: Localized;
  coreQuestion: Localized;
  bridge: Localized;
};

export type SpreadPosition = {
  index: number;
  id: string;
  label: Localized;
  question: Localized;
  functionText: Localized;
  hint: Localized;
};

export type Spread = {
  id: string;
  title: Localized;
  depth: Localized;
  cardCount: number;
  concept: Localized;
  whenToUse: Localized;
  intro: Localized;
  closing: Localized;
  positions: SpreadPosition[];
  reflectionQuestions: {
    tr: string[];
    en: string[];
  };
};

export type ReadingBlock = {
  position: SpreadPosition;
  card: Card;
  interpretation: string;
};
