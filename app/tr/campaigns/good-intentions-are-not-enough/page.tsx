import Link from "next/link";
import Container from "@/components/site/Container";

const care = [
  ["Context", "Bu durumu anlaşılır kılan bağlam ne olabilir?"],
  ["Acknowledge", "Öneri vermeden önce deneyimi kabul edebiliyor muyum?"],
  ["Role", "Benim rolüm ne, ne değil?"],
  ["Extend", "Bu durum benim sunabileceğimden daha fazla destek gerektiriyor mu?"],
];

const tools = [
  "Bunu Tek Başıma mı Taşımalıyım?",
  "Yeşil / Sarı / Kırmızı Destek Kontrol Listesi",
  "Yanıt Vermeden Önce Kontrol Listesi",
  "Güvenlik Hakkında Sormalı mıyım?",
  "Sınır ve Güvenlik Kontrol Listesi",
];

export const metadata = {
  title: "İyi Niyet Yetmez | Collectividual",
  description: "Klinisyen olmayanlar için ruh sağlığı okuryazarlığı: dikkatli iletişim, daha net sınırlar ve daha işe yarar destek.",
};

export default function TurkishProjectPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Collectividual kamusal proje</p>
          <h1 className="poster-title poster-title--tr-wide">İyi Niyet Yetmez</h1>
          <p className="poster-lede mt-9">Klinisyen olmayanlar için ruh sağlığı okuryazarlığı: biri zorlandığında daha dikkatli dil, daha net sınırlar ve daha işe yarar destek.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/tr/workshops" className="poster-button">Atölyeleri incele</Link>
            <Link href="/tr/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">Ücretsiz araçları indir</Link>
            <Link href="/tr/assessment/mental-health-literacy" className="poster-button poster-button--secondary">Kurumunuzu değerlendirin</Link>
          </div>
          <p className="mt-8 max-w-2xl text-[12px] leading-6 text-[var(--muted)]">Klinisyen olmayanlar için psiko-eğitim ve iletişim çalışması. Terapi, tanı koyma, kriz eğitimi veya klinik süpervizyon değildir.</p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--tr-medium">Farkındalık kapıyı açar. Okuryazarlık içeri nasıl dikkatle gireceğimizi öğretir.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Zorlanma gündelik hayatın içinde görünür hale gelir: işte, üniversitede, arkadaşlıkta, topluluklarda, grup sohbetlerinde ve küçük organizasyonlarda.</p>
            <p>İyi niyet yardımcı olabilir. Ama okuryazarlık olmadan baskıya, sessizliğe, kurtarıcılığa, hızlı etiketlemeye veya fazla erken gelen tavsiyeye dönüşebilir.</p>
            <p>Bu proje, farkındalıktan okuryazarlığa; stigmadan onura; düzeltmekten dinlemeye; etiketlemekten anlamaya; kurtarıcılıktan sınırlı ve sürdürülebilir desteğe geçişi destekler.</p>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-8">CARE çerçevesi</p>
          <h2 className="poster-title poster-title--tr-medium">Zor anlar için sade bir düşünme yapısı.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {care.map(([title, question]) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6">
                <h3 className="text-3xl leading-tight text-[var(--accent)] md:text-4xl">{title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{question}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="poster-kicker mb-6 bg-[var(--bg)]">Ücretsiz araçlar</p>
            <h2 className="poster-title poster-title--tr-medium">Dikkatli destek için beş kontrol listesi.</h2>
            <p className="mt-6 text-[15px] leading-8 text-[var(--muted)]">Klinisyen olmayanlar için duraklama araçları. Eğitim amaçlı kaynaklardır; klinik değerlendirme aracı değildir.</p>
          </div>
          <div className="grid gap-3">
            {tools.map((tool) => (
              <div key={tool} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-4 text-[13px] font-semibold leading-7">{tool}</div>
            ))}
            <Link href="/tr/tools/mental-health-literacy-checklists" className="mt-3 text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">Araçları e-posta ile al →</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Buradan başla</p>
            <h2 className="poster-title poster-title--tr-medium">Nereden başlayacağınızdan emin değil misiniz?</h2>
            <p className="poster-lede mt-8">Grubunuzu anlatın; atölye, araçlar, değerlendirme veya daha uzun eğitim formatından hangisinin doğru sonraki adım olduğunu birlikte netleştirelim.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/tr/join" className="poster-button">İletişime geç</Link>
              <Link href="/tr/workshops" className="poster-button poster-button--secondary">Atölyeleri incele</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
