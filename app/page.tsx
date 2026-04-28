import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    title: "Think Lab",
    description:
      "Kavramları, denemeleri, rehberleri ve düşünceyi ortak dile dönüştüren editoryal deneyleri barındırır.",
    href: "/labs#think-lab",
  },
  {
    title: "Creative Lab",
    description:
      "Kart desteleri, printable araçlar, prompt setleri ve fikirlerin forma dönüşmesini sağlayan görsel formatlar.",
    href: "/labs#creative-lab",
  },
  {
    title: "Community Lab",
    description:
      "Katılım, atölye, kolektif düşünme ve küçük grup çalışmaları için formatlar.",
    href: "/labs#community-lab",
  },
  {
    title: "Kapital Zero Lab",
    description:
      "Düşük bütçeli denemeler, yaratıcı girişimcilik ve neredeyse sıfırdan üretme sistemleri.",
    href: "/labs#kapital-zero-lab",
  },
];

const tools = [
  "Klinisyen olmayanlar için ruh sağlığı okuryazarlığı seminerleri",
  "İndirilebilir checklistler ve reflektif araçlar",
  "Kurumlar ve topluluklar için assessment formatları",
  "Kart desteleri, prompt kitleri ve printable psiko-sosyal kaynaklar",
];

const spotifyUrl = "https://open.spotify.com/show/3gT7ckVNmUhjfaDjIIJpUX?si=ec02353c530f483a";

export default function HomePage() {
  return (
    <>
      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-7">Collectividual</p>
          <h1 className="poster-title poster-title--wide">
            Ruh sağlığı için bir misyonumuz var.
          </h1>
          <p className="poster-lede mt-9">
            Collectividual; ruh sağlığı okuryazarlığı, dikkatli iletişim, daha net sınırlar ve daha işe yarar destek pratikleri için psiko-sosyal araçlar, kampanyalar, seminerler ve printable kaynaklar üretir.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/campaigns/good-intentions-are-not-enough" className="poster-button">
              Kampanyayı incele
            </Link>
            <Link href="/tools/mental-health-literacy-checklists" className="poster-button poster-button--secondary">
              Araçları indir
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] poster-section">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="poster-kicker mb-6">Güncel kampanya</p>
            <h2 className="poster-title poster-title--medium">
              İyi Niyet Yetmez
            </h2>
          </div>
          <div>
            <p className="text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
              Ruh sağlığı farkındalığı önemli konuşmaları açtı. Ama farkındalık tek başına, biri gerçekten zorlandığında nasıl karşılık vereceğimizi öğretmez.
            </p>
            <p className="mt-4 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
              Bu kampanya, klinisyen olmayanların iyi niyetten dikkatli desteğe geçmesine yardım eder: daha net dil, daha iyi sınırlar, daha az stigma ve daha işe yarar sonraki adımlar.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/campaigns/good-intentions-are-not-enough" className="poster-button">
                Kampanyaya git
              </Link>
              <Link href="/assessment/mental-health-literacy" className="poster-button poster-button--secondary">
                Assessment yap
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <p className="poster-kicker mb-8">Bu nedir?</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Farkındalıktan okuryazarlığa geçiş için kamusal bir kampanya.",
              "Araçlar, seminerler, assessmentlar, kampanyalar ve printable formatlar için bir üretim alanı.",
              "Psikolojik bilgiyi gündelik hayatta daha dikkatli pratiklere dönüştürmenin bir yolu.",
            ].map((item) => (
              <div key={item} className="border-2 border-[var(--accent)] p-6 text-[15px] font-semibold leading-8 text-[var(--text)] md:text-[17px]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section bg-[var(--surface-soft)]">
        <Container>
          <p className="poster-kicker mb-6 bg-[var(--bg)]">Lab’ler</p>
          <h2 className="poster-title poster-title--medium">
            Düşünmek, üretmek, bir araya gelmek ve sıfırdan kurmak için dört çalışma odası.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {labs.map((lab) => (
              <Link
                key={lab.title}
                href={lab.href}
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                <h3 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">{lab.title}</h3>
                <p className="mt-4 text-[14px] leading-7 text-[var(--muted)] md:text-[15px]">{lab.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="poster-kicker mb-6">Araçlar & Kaynaklar</p>
            <h2 className="poster-title poster-title--medium">Generic içerik değil, kullanılabilir formlar.</h2>
          </div>
          <div className="grid gap-4">
            {tools.map((tool) => (
              <div key={tool} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 text-[15px] font-semibold leading-8 text-[var(--text)]">
                {tool}
              </div>
            ))}
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
            >
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">
                Ses Kütüphanesi / Bilgiye Erişim
              </p>
              <h3 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">
                Psikanalizin 30 Günü
              </h3>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[var(--muted)] md:text-[15px]">
                Psikanalitik düşünceyi daha erişilebilir, dinlenebilir ve kamusal hale getiren bir Collectividual ses serisi.
              </p>
              <p className="mt-5 text-[13px] font-bold text-[var(--accent)]">
                Spotify’da dinle →
              </p>
            </a>
            <Link href="/seminars/mental-health-literacy" className="mt-3 inline-flex text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">
              Ruh sağlığı okuryazarlığı seminerini incele →
            </Link>
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Buradan başla</p>
            <h2 className="poster-title poster-title--medium">
              Ruh sağlığı okuryazarlığını yaymak istiyoruz.
            </h2>
            <p className="poster-lede mt-8">
              Yüzeysel farkındalığın ötesine geçip daha dikkatli iletişim, daha net sınırlar ve daha işe yarar destek pratikleri kurmak için.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/campaigns/good-intentions-are-not-enough" className="poster-button">
                Kampanyayı incele
              </Link>
              <Link href="/join" className="poster-button poster-button--secondary">
                İletişime geç
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
