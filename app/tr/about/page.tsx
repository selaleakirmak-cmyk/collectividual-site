import Link from "next/link";
import Container from "@/components/site/Container";

const principles = [
  "Psikolojik bilgi kullanılabilir hale gelmeli; ama basitleşerek sığlaşmamalı.",
  "Bakım yalnızca iyi niyetle değil; dil, sınır ve form ile taşınır.",
  "Araçlar, karmaşık fikirleri gündelik hayata çoğu zaman derslerden daha nazik biçimde taşıyabilir.",
  "İnsanlar durmak, konuşmak ve yanıt vermek için ortak yapılara sahip olduğunda kolektif yaşam güçlenir.",
];

export const metadata = {
  title: "Hakkında | Collectividual",
  description: "Collectividual hakkında: dikkatli iletişim ve ruh sağlığı okuryazarlığı için psiko-sosyal araçlar, atölyeler ve kamusal projeler.",
};

export default function TurkishAboutPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Hakkında</p>
          <h1 className="poster-title poster-title--tr-wide">Bir kişi bütün bir ekibe dönüşebilir.</h1>
          <p className="poster-lede mt-9">Collectividual; psikolojik, kültürel ve kolektif soruları araçlara, atölyelere, projelere ve kamusal öğrenme formatlarına dönüştüren psiko-sosyal bir üretim alanıdır.</p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--tr-medium">Ürettiğimiz şey yalnızca içerik değil. Yapı.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Collectividual çoğu zaman soyut kalan fikirler için kullanılabilir formlar üretir: ruh sağlığı okuryazarlığı, destek, sınırlar, stigma, kolektif bakım, reflektif pratik ve anlam kurma.</p>
            <p>Bazen çıktı bir atölyedir. Bazen değerlendirme aracı, çıktı alınabilir rehber, kart destesi, ses formatı veya kamusal projedir. Ortak amaç, karmaşık insan bilgisini basitleştirmeden kullanılabilir hale getirmektir.</p>
            <p>Tonumuz ciddi ama erişilebilir; kanıta dayalı ama soğuk değil; yaratıcı ama dekoratif değil.</p>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-8">İlkeler</p>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[15px] font-semibold leading-8 text-[var(--text)]">
                {principle}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Bizimle çalışın</p>
            <h2 className="poster-title poster-title--tr-medium">Bir soru, bir grup veya bir fikir getirin.</h2>
            <p className="poster-lede mt-8">Bunu insanların gerçekten kullanabileceği bir atölyeye, araca, kamusal projeye veya pratik formata dönüştürmeye yardımcı olabiliriz.</p>
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
