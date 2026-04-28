import Link from "next/link";
import Container from "@/components/site/Container";

const flow = [
  ["0–10 dk", "Açılış çerçevesi", "İyi niyetin neden okuryazarlığa ihtiyaç duyduğu."],
  ["10–25 dk", "Farkındalık ve okuryazarlık", "Farkındalığın neyi yapıp neyi yapamadığı."],
  ["25–40 dk", "Zorlanma, bağlam ve stigma", "Psikolojik zorlanmanın neden nüans gerektirdiği."],
  ["40–60 dk", "CARE çerçevesi", "Context, Acknowledge, Role, Extend."],
  ["60–75 dk", "Pratik yanıt anları", "Ne söylenir, ne söylenmez, ne zaman durulur?"],
  ["75–85 dk", "Beş güvenlik kontrol listesi", "Katılımcıların araçları atölye sonrasında nasıl kullanabileceği."],
  ["85–90 dk", "Kapanış ve sonraki adımlar", "Sınırlar, destek yolları ve ileri öğrenme."],
];

export const metadata = {
  title: "Ruh Sağlığı Okuryazarlığı Atölyesi | Collectividual",
  description: "Klinisyen olmayanlar için ruh sağlığı okuryazarlığı, iletişim, sınırlar ve işe yarar destek üzerine 90 dakikalık giriş atölyesi.",
};

export default function TurkishSeminarPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">90 dakikalık atölye</p>
          <h1 className="poster-title poster-title--tr-wide">Klinisyen Olmayanlar İçin Ruh Sağlığı Okuryazarlığı</h1>
          <p className="poster-lede mt-9">Tanı koymadan, kurtarıcılığa düşmeden, küçümsemeden ve her şeyi tek başına taşımadan destek olmak isteyen kişiler için pratik ve dikkatli bir atölye.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/tr/join" className="poster-button">Bu atölyeyi talep et</Link>
            <Link href="/tr/workshops" className="poster-button poster-button--secondary">Tüm atölyeleri gör</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--tr-medium">“Ruh sağlığını önemsiyoruz” demek henüz bir pratik değildir.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Birçok grup ruh sağlığını önemser; ama zorlanma görünür hale geldiğinde ne yapılacağı belirsizleşebilir.</p>
            <p>İnsanlar ne söyleyeceğini bilemeyebilir. Fazla konuşabilir. Kişiden kaçınabilir. Etiketleri fazla hızlı kullanabilir. Tek destek kişisi haline gelebilir.</p>
            <p>Bu atölye ortak bir başlangıç noktası verir: dil, sınır, destek yolları ve pratik yanıt becerileri.</p>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <h2 className="poster-title poster-title--tr-medium mb-10">90 dakika, net bir çerçeve.</h2>
          <div className="space-y-4">
            {flow.map(([time, title, description]) => (
              <div key={time} className="grid gap-4 border-2 border-[var(--accent)] bg-[var(--surface)] p-5 md:grid-cols-[120px_0.8fr_1.2fr]">
                <p className="text-[12px] uppercase tracking-[0.1em] text-[var(--muted)]">{time}</p>
                <h3 className="text-2xl leading-tight text-[var(--accent)]">{title}</h3>
                <p className="text-[13px] leading-7 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
            <h2 className="text-4xl leading-tight text-[var(--accent)] md:text-5xl">Bu atölye</h2>
            <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[var(--muted)]">
              <li>Psiko-eğitimdir</li>
              <li>İletişim çalışmasıdır</li>
              <li>Ruh sağlığı okuryazarlığıdır</li>
              <li>Sınırları destekleyen bir öğrenme alanıdır</li>
              <li>Gruplar için ortak dil kurar</li>
            </ul>
          </div>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7">
            <h2 className="text-4xl leading-tight text-[var(--accent)] md:text-5xl">Bu atölye değildir</h2>
            <ul className="mt-6 space-y-3 text-[13px] leading-7 text-[var(--muted)]">
              <li>Terapi değildir</li>
              <li>Tanı koyma eğitimi değildir</li>
              <li>Kriz eğitimi değildir</li>
              <li>Klinik süpervizyon değildir</li>
              <li>Profesyonel bakımın yerine geçmez</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Grubunuza taşıyın</p>
            <h2 className="poster-title poster-title--tr-medium">Net bir taleple başlayın.</h2>
            <p className="poster-lede mt-8">Atölyenin kimler için olduğunu, hangi bağlamda çalıştığınızı ve tek oturum mu yoksa daha uzun bir eğitim yolu mu istediğinizi bize anlatın.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/tr/join" className="poster-button">İletişime geç</Link>
              <Link href="/tr/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">Katılımcı araçlarını incele</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
