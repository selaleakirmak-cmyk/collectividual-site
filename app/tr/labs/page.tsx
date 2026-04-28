import Link from "next/link";
import Container from "@/components/site/Container";

const labs = [
  {
    id: "creative-lab",
    title: "Creative Lab",
    description:
      "Editoryal düşünme ile somut üretimi birleştiren çalışma odası: denemeler, kavramlar, kart desteleri, çıktı alınabilir araçlar, prompt kitleri, görsel formatlar ve psiko-sosyal kaynaklar.",
    outputs: ["Denemeler", "Kavram haritaları", "Kart desteleri", "Çıktı alınabilir araçlar", "Prompt kitleri", "Görsel sistemler"],
  },
  {
    id: "community-lab",
    title: "Community Lab",
    description:
      "Atölyeler, küçük gruplar, kolektif düşünme ve birlikte öğrenmeyi destekleyen paylaşımlı pratikler için katılımcı formatlar.",
    outputs: ["Atölyeler", "Grup formatları", "Refleksiyon oturumları", "Topluluk araçları"],
  },
];

export const metadata = {
  title: "Lab’ler | Collectividual",
  description: "Fikirleri kullanılabilir hale getirmek ve birlikte öğrenmek için Collectividual lab’leri.",
};

export default function TurkishLabsPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Lab’ler</p>
          <h1 className="poster-title poster-title--tr-wide">Forma ihtiyaç duyan fikirler için iki çalışma odası.</h1>
          <p className="poster-lede mt-9">Collectividual Lab’leri departman değildir. Biri fikirleri kullanılabilir formlara dönüştürmek, diğeri birlikte öğrenmek, bir araya gelmek ve pratik etmek için çalışan iki üretim kipidir.</p>
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
