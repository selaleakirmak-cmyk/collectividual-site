import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    id: "think-lab",
    title: "Think Lab",
    description: "Fikirlerin ürüne dönüşmeden önce forma ihtiyaç duyduğu yerde editoryal düşünme, deneme, kavram, çerçeve ve kamusal dil üretimi.",
    outputs: ["Denemeler", "Kavram haritaları", "Editoryal rehberler", "Kamusal öğrenme formatları"],
  },
  {
    id: "creative-lab",
    title: "Creative Lab",
    description: "Kart desteleri, çıktı alınabilir araçlar, prompt kitleri, görsel formatlar ve somut psiko-sosyal kaynaklar için üretim odası.",
    outputs: ["Kart desteleri", "Çıktı alınabilir araçlar", "Prompt kitleri", "Görsel sistemler"],
  },
  {
    id: "community-lab",
    title: "Community Lab",
    description: "Atölyeler, küçük gruplar, kolektif düşünme ve birlikte öğrenmeyi destekleyen paylaşımlı pratikler için katılımcı formatlar.",
    outputs: ["Atölyeler", "Grup formatları", "Refleksiyon oturumları", "Topluluk araçları"],
  },
  {
    id: "kapital-zero-lab",
    title: "Kapital Zero Lab",
    description: "Neredeyse sıfır sermayeyi küçük, test edilebilir ve anlamlı girişimlere dönüştürmek için düşük bütçeli deneyler ve pratik sistemler.",
    outputs: ["Sıfır bütçe deneyleri", "Mikro-ürünler", "Girişim oyunları", "Başlangıç sistemleri"],
  },
];

export const metadata = {
  title: "Lab’ler | Collectividual",
  description: "Düşünmek, üretmek, bir araya gelmek ve pratik psiko-sosyal araçlar kurmak için Collectividual lab’leri.",
};

export default function TurkishLabsPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Lab’ler</p>
          <h1 className="poster-title poster-title--tr-wide">Yapıya ihtiyaç duyan fikirler için çalışma odaları.</h1>
          <p className="poster-lede mt-9">Collectividual Lab’leri departman değil, çalışma kipleridir: fikirleri düşünmenin, üretmenin, bir araya getirmenin ve kullanılabilir forma dönüşene kadar test etmenin yolları.</p>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {labs.map((lab) => (
              <section id={lab.id} key={lab.id} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-9">
                <p className="poster-kicker mb-6">{lab.title}</p>
                <h2 className="text-4xl leading-none text-[var(--accent)] md:text-5xl">{lab.title}</h2>
                <p className="mt-5 text-[15px] leading-8 text-[var(--muted)]">{lab.description}</p>
                <div className="mt-7 grid gap-3">
                  {lab.outputs.map((output) => (
                    <div key={output} className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[13px] font-semibold leading-6 text-[var(--text)]">{output}</div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/tr/join" className="poster-button">Bir fikir getirin</Link>
            <Link href="/tr/workshops" className="poster-button poster-button--secondary">Atölyeleri incele</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
