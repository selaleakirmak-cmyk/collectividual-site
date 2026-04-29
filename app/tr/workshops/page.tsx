import Link from "next/link";
import Container from "@/components/site/Container";

const formats = [
  {
    title: "90 dakikalık interaktif atölye",
    subtitle: "İyi Niyet Yetmez",
    description:
      "Ruh sağlığı farkındalığından pratik okuryazarlığa geçmek isteyen kurumlar, ekipler, üniversiteler ve topluluklar için yoğun bir giriş oturumu.",
    items: [
      "Farkındalık ile okuryazarlık arasındaki fark",
      "Tanı koymadan psikolojik zorlanmayı anlamak",
      "Stigma, dil ve sosyal bağlam",
      "Validasyon, yansıtıcı dinleme ve öneri öncesi izin isteme",
      "Rol netliği, sınırlar ve kriz sinyalleri",
      "CARE çerçevesi: Context, Acknowledge, Role, Extend",
    ],
    href: "/tr/seminars/mental-health-literacy",
    cta: "Atölye detayını incele",
  },
  {
    title: "4 oturumluk uygulamalı program",
    subtitle: "Klinisyen Olmayanlar İçin Ruh Sağlığı Okuryazarlığı",
    description:
      "Daha fazla pratik, tekrar eden senaryolar, yapılandırılmış refleksiyon ve oturumlar sonrasında da kullanılabilecek araçlar içeren derinleşme programı.",
    items: [
      "1. Oturum: Zorlanma nasıl işler?",
      "2. Oturum: Stigma, yapı ve dil",
      "3. Oturum: Destekleyici iletişim becerileri",
      "4. Oturum: Sınırlar, güvenlik ve entegrasyon",
      "Kurgusal karakterlerle senaryo bazlı pratik",
      "Katılımcı çalışma kitabı ve pratik destek araçları",
    ],
    href: "/tr/join",
    cta: "Program için bilgi al",
  },
];

const principles = [
  "Bilgi aktarımından çok beceri pratiği",
  "Öneriden önce validasyon",
  "Sınırları geri çekilme değil, bakım olarak kurmak",
  "Yargıdan önce bağlamı görmek",
  "Profesyonel desteğe baskı kurmadan yönlendirmek",
  "Tek tip cümleler yerine kültürel alçakgönüllülük",
];

export const metadata = {
  title: "Atölyeler | Collectividual",
  description:
    "Klinisyen olmayanlar, kurumlar, ekipler ve topluluklar için ruh sağlığı okuryazarlığı atölyeleri ve programları.",
};

export default function TurkishWorkshopsPage() {
  return (
    <>
      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-7">Atölyeler</p>
          <h1 className="poster-title poster-title--tr-wide">
            Ruh sağlığı okuryazarlığı, pratik edilerek öğrenilir.
          </h1>
          <p className="poster-lede mt-9">
            Collectividual atölyeleri, klinisyen olmayan kişilerin biri zorlandığında daha dikkatli karşılık verebilmesine yardım eder. Katılımcılar terapiste dönüşmez. Neyi fark edeceklerini, ne söyleyeceklerini, ne söylemeyeceklerini, rollerinin nerede bittiğini ve ne zaman daha fazla destek gerektiğini öğrenirler.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/tr/join" className="poster-button">
              15 dakikalık görüşme planla
            </Link>
            <Link href="/tr/assessment/mental-health-literacy" className="poster-button poster-button--secondary">
              Kurumunuzu değerlendirin
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] poster-section">
        <Container className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="poster-kicker mb-6">Temel fikir</p>
            <h2 className="poster-title poster-title--tr-medium">
              İyi niyet tek başına yetmez.
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>
              Çoğumuz zaten önemseriz. Daha zor soru şudur: önemseme, birinin zorlanmasıyla karşılaştığında nasıl davranacağını bilir mi?
            </p>
            <p>
              Bu atölyeler yüzeysel farkındalığın ötesine geçerek kullanılabilir gündelik beceriler çalışır: validasyon, yansıtıcı dinleme, öneri vermeden önce izin isteme, utancı azaltan dil, net sınırlar ve güvenli yönlendirme.
            </p>
            <p>
              Amaç katılımcıları başkalarının ruh sağlığından klinik olarak sorumlu kılmak değildir. Amaç, gündelik destek anlarını daha az zarar verici, daha dürüst ve daha işe yarar hale getirmektir.
            </p>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-8">Formatlar</p>
          <div className="grid gap-6 md:grid-cols-2">
            {formats.map((format) => (
              <div key={format.title} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-9">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
                  {format.title}
                </p>
                <h2 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">
                  {format.subtitle}
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">
                  {format.description}
                </p>
                <div className="mt-7 grid gap-3">
                  {format.items.map((item) => (
                    <div key={item} className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[13px] font-semibold leading-6 text-[var(--text)]">
                      {item}
                    </div>
                  ))}
                </div>
                <Link href={format.href} className="mt-7 inline-flex text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">
                  {format.cta} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section bg-[var(--surface-soft)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="poster-kicker mb-6 bg-[var(--bg)]">Yöntem</p>
            <h2 className="poster-title poster-title--tr-medium">
              Farkındalık, ancak pratik edilince okuryazarlığa dönüşür.
            </h2>
          </div>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-[15px] font-semibold leading-8 text-[var(--text)]">
                {principle}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Ne değildir?</p>
            <h2 className="poster-title poster-title--tr-medium">
              Terapi değil. Klinik eğitim değil. Kriz sertifikasyonu değil.
            </h2>
            <p className="poster-lede mt-8">
              Bu atölyeler tanı koymayı, tedavi etmeyi veya bir başkasının iyileşmesinden sorumlu olmayı öğretmez. Daha dikkatli bir gündelik duruş öğretir: bağlamı görmek, harekete geçmeden önce kabul etmek, rolünü bilmek ve taşıyabildiğini uzatırken taşıyamadığını yönlendirmek.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/tr/join" className="poster-button">
                Bizimle konuş
              </Link>
              <Link href="/tr/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">
                Ücretsiz araçları indir
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
