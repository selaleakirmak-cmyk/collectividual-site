import type { Card, Lang, ReadingBlock, Spread } from '../types';

export function buildInterpretation(lang: Lang, spread: Spread, card: Card, positionIndex: number): string {
  const position = spread.positions[positionIndex];
  const positionLabel = position.label[lang];
  const baseMeaning = card.meaning[lang];
  const frame = card.psychoanalyticFrame[lang];
  const positionHint = position.hint[lang];
  const cardBridge = card.bridge[lang];
  const cardQuestion = card.coreQuestion[lang];

  return `${positionLabel} bu açılımda ${position.functionText[lang].toLowerCase()} ${baseMeaning} ${frame} ${positionHint} ${cardBridge} ${cardQuestion}`;
}

export function buildReadingBlocks(lang: Lang, spread: Spread, drawnCards: Card[]): ReadingBlock[] {
  return drawnCards.map((card, index) => ({
    position: spread.positions[index],
    card,
    interpretation: buildInterpretation(lang, spread, card, index)
  }));
}

export function buildSpreadSummary(lang: Lang, spread: Spread, readingBlocks: ReadingBlock[]): string {
  if (!readingBlocks.length) return '';
  const intro = spread.intro[lang];
  const labels = readingBlocks.map((block) => `${block.position.label[lang]}: ${block.card.title[lang]}`).join(' · ');
  const closing = spread.closing[lang];

  return `${intro} ${labels}. ${closing}`;
}
