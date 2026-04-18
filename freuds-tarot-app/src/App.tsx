import { useMemo, useState } from 'react';
import cardsData from './data/cards.json';
import noticesData from './data/notices.json';
import spreadsData from './data/spreads.json';
import { buildReadingBlocks, buildSpreadSummary } from './lib/readingEngine';
import type { Card, Lang, ReadingBlock, Spread } from './types';

type Screen = 'landing' | 'info' | 'spreads' | 'intention' | 'draw' | 'result' | 'notes';

type Notice = {
  id: string;
  title: { tr: string; en: string };
  body: { tr: string; en: string };
};

const cards = cardsData as Card[];
const spreads = spreadsData as Spread[];
const notices = noticesData as Notice[];

const copy = {
  tr: {
    appTitle: "Freud's Tarot",
    landingTitle: 'Bir durumla gel. Biraz daha netlikle ayrıl.',
    landingBody: 'Kehanet için değil; düşünmek, çağrışım kurmak ve bir durumu daha yapılandırılmış biçimde ele almak için tasarlanmış bir kart deneyimi.',
    start: 'Okumaya başla',
    whatIsThis: 'Bu nedir?',
    back: 'Geri',
    chooseSpread: 'Bir açılım seç',
    chooseSpreadBody: 'Her açılım farklı bir derinlikte çalışır. Kendine en uygun olan yerden başlayabilirsin.',
    continue: 'Devam et',
    intentionTitle: 'Bu açılıma ne getiriyorsun?',
    intentionBody: 'İstersen kısa bir not bırak. Zorunlu değil; yalnızca okumanın çevresini tutar.',
    intentionPlaceholder: 'Kısa bir durum, his ya da soru yaz…',
    skip: 'Atla',
    drawTitle: 'Kartlarını çek',
    drawBody: 'Açılımın için gereken kart sayısını seç. Burada amaç hız değil, açıklık.',
    shuffle: 'Karıştır',
    drawCard: 'Kart çek',
    allDrawn: 'Tüm kartlar seçildi.',
    reveal: 'Açılım sonucu',
    notes: 'Kendi notun',
    notesPlaceholder: 'Burada sende kalan şeyi yaz…',
    saveNote: 'Tamamla',
    newReading: 'Yeni açılım',
    restart: 'Başa dön',
    noCards: 'Henüz kart çekilmedi.',
    summary: 'Açılım özeti',
    reflection: 'Düşünmeye devam etmek için',
    cardMeaning: 'Kart anlamı',
    inPosition: 'Bu pozisyonda nasıl okunur?',
    positionAsks: 'Bu pozisyon neyi soruyor?',
    openInfoTitle: 'Bu nedir?',
    openInfoBody: 'Freud’s Tarot, psikanalitik kavramlarla çalışan yapılandırılmış bir yansıtma aracıdır. Kart kesinlik vermez; düşünmek için bir yön sunar.',
    noticesTitle: 'Başlamadan önce',
    deckReady: 'Desteyi karıştırabilir veya doğrudan kart çekebilirsin.'
  },
  en: {
    appTitle: "Freud's Tarot",
    landingTitle: 'Come with a situation. Leave with a little more clarity.',
    landingBody: 'A card-based reflective experience designed for thought, association, and a more structured encounter with a situation.',
    start: 'Start Reading',
    whatIsThis: 'What is this?',
    back: 'Back',
    chooseSpread: 'Choose a spread',
    chooseSpreadBody: 'Each spread works at a different depth. You can begin where it feels most workable.',
    continue: 'Continue',
    intentionTitle: 'What are you bringing into this reading?',
    intentionBody: 'You can leave a short note if you want. It is optional and simply helps hold the context.',
    intentionPlaceholder: 'Write a brief situation, feeling, or question…',
    skip: 'Skip',
    drawTitle: 'Draw your cards',
    drawBody: 'Draw the number of cards required for your spread. The aim here is not speed, but clarity.',
    shuffle: 'Shuffle',
    drawCard: 'Draw Card',
    allDrawn: 'All cards selected.',
    reveal: 'Reading result',
    notes: 'Your reflection note',
    notesPlaceholder: 'Write what stayed with you here…',
    saveNote: 'Finish',
    newReading: 'New Spread',
    restart: 'Start Over',
    noCards: 'No cards drawn yet.',
    summary: 'Spread summary',
    reflection: 'To continue thinking',
    cardMeaning: 'Card meaning',
    inPosition: 'How is it read in this position?',
    positionAsks: 'What does this position ask?',
    openInfoTitle: 'What is this?',
    openInfoBody: 'Freud’s Tarot is a structured reflective tool built on psychoanalytic concepts. A card does not offer certainty; it offers a direction for thought.',
    noticesTitle: 'Before you begin',
    deckReady: 'You can shuffle the deck or draw directly.'
  }
} as const;

function shuffleArray<T>(items: T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [lang, setLang] = useState<Lang>('tr');
  const [screen, setScreen] = useState<Screen>('landing');
  const [selectedSpreadId, setSelectedSpreadId] = useState<string>(spreads[0]?.id ?? '');
  const [intention, setIntention] = useState('');
  const [drawnIds, setDrawnIds] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [shuffleSeed, setShuffleSeed] = useState(0);

  const t = copy[lang];
  const selectedSpread = useMemo(
    () => spreads.find((spread) => spread.id === selectedSpreadId) ?? spreads[0],
    [selectedSpreadId]
  );

  const deck = useMemo(() => shuffleArray(cards), [shuffleSeed]);

  const drawnCards = useMemo(
    () => drawnIds.map((id) => cards.find((card) => card.id === id)).filter(Boolean) as Card[],
    [drawnIds]
  );

  const readingBlocks: ReadingBlock[] = useMemo(() => {
    if (!selectedSpread) return [];
    return buildReadingBlocks(lang, selectedSpread, drawnCards);
  }, [drawnCards, lang, selectedSpread]);

  const spreadSummary = useMemo(() => {
    if (!selectedSpread || !readingBlocks.length) return '';
    return buildSpreadSummary(lang, selectedSpread, readingBlocks);
  }, [lang, readingBlocks, selectedSpread]);

  const drawNextCard = () => {
    if (!selectedSpread) return;
    if (drawnIds.length >= selectedSpread.cardCount) return;
    const remaining = deck.find((card) => !drawnIds.includes(card.id));
    if (remaining) setDrawnIds((prev) => [...prev, remaining.id]);
  };

  const resetReading = (toLanding = false) => {
    setIntention('');
    setDrawnIds([]);
    setNote('');
    setShuffleSeed((prev) => prev + 1);
    setScreen(toLanding ? 'landing' : 'spreads');
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Collectividual / Creative LAB Project</p>
          <h1>{t.appTitle}</h1>
        </div>
        <div className="lang-switch">
          <button className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')}>TR</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      {screen === 'landing' && (
        <section className="panel hero-panel">
          <p className="eyebrow">Reflective card-reading tool</p>
          <h2>{t.landingTitle}</h2>
          <p>{t.landingBody}</p>
          <div className="actions">
            <button className="primary" onClick={() => setScreen('spreads')}>{t.start}</button>
            <button className="secondary" onClick={() => setScreen('info')}>{t.whatIsThis}</button>
          </div>
        </section>
      )}

      {screen === 'info' && (
        <section className="panel">
          <p className="eyebrow">Orientation</p>
          <h2>{t.openInfoTitle}</h2>
          <p>{t.openInfoBody}</p>
          <p className="subtle">{lang === 'tr' ? 'Bu bir kehanet aracı değil; düşünmek için yapılandırılmış bir alan.' : 'This is not a predictive tool; it is a structured space for thought.'}</p>
          <div className="summary-box" style={{ marginTop: '20px' }}>
            <strong>{t.noticesTitle}</strong>
            <ul>
              {notices.map((notice) => (
                <li key={notice.id}><strong>{notice.title[lang]}:</strong> {notice.body[lang]}</li>
              ))}
            </ul>
          </div>
          <div className="actions">
            <button className="primary" onClick={() => setScreen('spreads')}>{t.continue}</button>
            <button className="secondary" onClick={() => setScreen('landing')}>{t.back}</button>
          </div>
        </section>
      )}

      {screen === 'spreads' && selectedSpread && (
        <section className="panel">
          <p className="eyebrow">Spreads</p>
          <h2>{t.chooseSpread}</h2>
          <p>{t.chooseSpreadBody}</p>
          <div className="spread-grid">
            {spreads.map((spread) => (
              <button
                key={spread.id}
                className={`spread-card ${spread.id === selectedSpreadId ? 'selected' : ''}`}
                onClick={() => setSelectedSpreadId(spread.id)}
              >
                <span className="spread-depth">{spread.depth[lang]}</span>
                <strong>{spread.title[lang]}</strong>
                <span>{spread.whenToUse[lang]}</span>
                <span>{spread.cardCount} {lang === 'tr' ? 'kart' : 'cards'}</span>
              </button>
            ))}
          </div>
          <div className="actions">
            <button className="primary" onClick={() => setScreen('intention')}>{t.continue}</button>
            <button className="secondary" onClick={() => setScreen('landing')}>{t.back}</button>
          </div>
        </section>
      )}

      {screen === 'intention' && selectedSpread && (
        <section className="panel">
          <p className="eyebrow">Intent</p>
          <h2>{t.intentionTitle}</h2>
          <p>{t.intentionBody}</p>
          <textarea
            className="note-box"
            value={intention}
            onChange={(event) => setIntention(event.target.value)}
            placeholder={t.intentionPlaceholder}
          />
          <div className="actions">
            <button className="primary" onClick={() => setScreen('draw')}>{t.continue}</button>
            <button className="secondary" onClick={() => setScreen('draw')}>{t.skip}</button>
          </div>
        </section>
      )}

      {screen === 'draw' && selectedSpread && (
        <section className="panel">
          <p className="eyebrow">Draw</p>
          <h2>{t.drawTitle}</h2>
          <p>{t.drawBody}</p>
          <div className="deck-status">
            <span>{selectedSpread.title[lang]}</span>
            <span>{drawnIds.length} / {selectedSpread.cardCount}</span>
          </div>
          <p className="subtle">{t.deckReady}</p>
          <div className="deck-row">
            {Array.from({ length: selectedSpread.cardCount }).map((_, index) => {
              const card = drawnCards[index];
              return (
                <div key={index} className={`card-shell ${card ? 'revealed' : ''}`}>
                  {card ? (
                    <div className="card-face">
                      <strong>{card.title[lang]}</strong>
                      <span>{card.group}</span>
                    </div>
                  ) : (
                    <div className="card-back">Freud's Tarot</div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="actions">
            <button className="secondary" onClick={() => setShuffleSeed((prev) => prev + 1)}>{t.shuffle}</button>
            <button className="primary" onClick={drawNextCard} disabled={drawnIds.length >= selectedSpread.cardCount}>{t.drawCard}</button>
            {drawnIds.length >= selectedSpread.cardCount && (
              <button className="primary" onClick={() => setScreen('result')}>{t.continue}</button>
            )}
          </div>
          {drawnIds.length >= selectedSpread.cardCount && <p className="subtle">{t.allDrawn}</p>}
        </section>
      )}

      {screen === 'result' && selectedSpread && (
        <section className="panel result-panel">
          <p className="eyebrow">{t.reveal}</p>
          <h2>{selectedSpread.title[lang]}</h2>
          {intention && <p className="subtle">{intention}</p>}
          <div className="summary-box">
            <strong>{t.summary}</strong>
            <p>{spreadSummary || t.noCards}</p>
          </div>
          <div className="reading-stack">
            {readingBlocks.map((block) => (
              <article className="reading-card" key={`${block.position.id}-${block.card.id}`}>
                <div className="reading-card-head">
                  <span className="eyebrow">{block.position.label[lang]}</span>
                  <h3>{block.card.title[lang]}</h3>
                </div>
                <p><strong>{t.positionAsks}</strong> {block.position.question[lang]}</p>
                <p><strong>{t.cardMeaning}</strong> {block.card.meaning[lang]}</p>
                <p><strong>{t.inPosition}</strong> {block.interpretation}</p>
                <p className="subtle">{block.card.coreQuestion[lang]}</p>
              </article>
            ))}
          </div>
          <div className="summary-box">
            <strong>{t.reflection}</strong>
            <ul>
              {selectedSpread.reflectionQuestions[lang].map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
          <div className="actions">
            <button className="primary" onClick={() => setScreen('notes')}>{t.notes}</button>
            <button className="secondary" onClick={() => resetReading()}>{t.newReading}</button>
          </div>
        </section>
      )}

      {screen === 'notes' && (
        <section className="panel">
          <p className="eyebrow">Notes</p>
          <h2>{t.notes}</h2>
          <textarea
            className="note-box"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={t.notesPlaceholder}
          />
          <div className="actions">
            <button className="primary" onClick={() => setScreen('landing')}>{t.saveNote}</button>
            <button className="secondary" onClick={() => resetReading(true)}>{t.restart}</button>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
