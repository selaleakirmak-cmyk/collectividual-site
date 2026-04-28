import Link from "next/link";
import Container from "@/components/site/Container";

const domains = [
  "Farkındalık ve okuryazarlık",
  "Stigma ve dil",
  "Sınırlar ve rol netliği",
  "Yönlendirme yolları",
  "Psikolojik güvenlik",
  "İletişim normları",
  "Hazırlıklılık",
  "Kapsayıcılık ve bağlam",
];

const questions = [
  "Ruh sağlığı okuryazarlığını olumlu mesajlardan ve farkındalıktan daha geniş bir beceri alanı olarak görüyoruz.",
  "Zorlanma hakkında insanları etiketlere indirgemeden konuşmak için ortak bir dilimiz var.",
  "Dinleme, destekleme, tavsiye verme, yönlendirme ve tedavi etme arasındaki farkı biliyoruz.",
  "Kimse örtük biçimde grubun terapisti olmaya itilmiş hissetmiyor.",
  "Bir kişinin tek başına taşıyabileceğinden fazla destek gerektiğinde ne yapılacağını biliyoruz.",
  "Farklı kaygı düzeyleri için görünür ve gerçekçi destek yollarımız var.",
  "İnsanlar dedikodu, küçümseme veya daha fazla açılma baskısı olmadan zorlandıklarını ifade edebiliyor.",
  "Psikolojik güvenliği sınırsız duygusal erişilebilirlikle karıştırmıyoruz.",
  "Tavsiye vermeden önce deneyimi kabul etmeye ve anlamaya çalışıyoruz.",
  "Kaygı verici mesajlara, duygusal paylaşımlara, devamsızlıklara veya çatışmalara yanıt vermek için normlarımız var.",
  "Zorlanmanın sosyal, ekonomik, kültürel, kurumsal ve ilişkisel koşullardan etkilendiğini hesaba katıyoruz.",
  "Destek kültürümüz birkaç kişinin kişisel duyarlılığına değil, paylaşılan yapılara dayanıyor.",
];

export const metadata = {
  title: "Ruh Sağlığı Okuryazarlığı Değerlendirmesi | Collectividual",
  description: "Kurumlar ve topluluklar için ruh sağlığı okuryazarlığı, sınırlar, dil ve destek yolları üzerine yansıtıcı değerlendirme.",
};

export default function TurkishAssessmentPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Yansıtıcı değerlendirme</p>
          <h1 className="poster-title poster-title--tr-wide">Kurumunuzun Ruh Sağlığı Okuryazarlığını Değerlendirin</h1>
          <p className="poster-lede mt-9">Ekiplerin, kurumların ve toplulukların zorlanma anlarında gerekli dili, sınırları ve destek yollarını ne kadar kurabildiğini düşünmesi için yapılandırılmış bir ayna.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#questions" className="poster-button">Soruları incele</a>
            <Link href="/tr/workshops" className="poster-button poster-button--secondary">Atölyeleri incele</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <h2 className="poster-title poster-title--tr-medium mb-10">Neye bakar?</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {domains.map((domain) => (
              <div key={domain} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-5 text-[12px] font-semibold leading-6 text-[var(--text)]">{domain}</div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <h2 className="poster-title poster-title--tr-medium">Sahte bir test değil. Konuşma başlatıcı.</h2>
          <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-[17px] md:leading-9">
            <p>Bu değerlendirme kurumunuzu iyi ya da kötü diye etiketlemez.</p>
            <p>Amacı, desteğin nerede fazla belirsiz, fazla informel, fazla kişilere bağlı veya fazla sessiz kaldığını görünür kılmaktır.</p>
            <p>En iyi sonucu, ideal cevaplarla değil; dürüst cevaplarla verir.</p>
          </div>
        </Container>
      </section>

      <section id="questions" className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <h2 className="poster-title poster-title--tr-medium">1–5 arası düşünün.</h2>
          <p className="mt-6 max-w-2xl text-[13px] leading-7 text-[var(--muted)]">1 = Henüz doğru değil. 2 = Biraz doğru. 3 = Çoğunlukla doğru. 4 = Güçlü biçimde doğru. 5 = Pratikte yerleşmiş durumda.</p>
          <div className="mt-10 space-y-4">
            {questions.map((question, index) => (
              <div key={question} className="grid gap-4 border-2 border-[var(--accent)] bg-[var(--bg)] p-5 md:grid-cols-[60px_1fr] md:items-start">
                <p className="font-serif text-3xl text-[var(--accent)]">{index + 1}</p>
                <p className="text-[13px] leading-7 text-[var(--text)]">{question}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">Sonraki adım</p>
            <h2 className="poster-title poster-title--tr-medium">Sonucu bir plana dönüştürün.</h2>
            <p className="poster-lede mt-8">Faydalı soru yalnızca kurumunuzun bu konuyu önemseyip önemsemediği değildir. Asıl soru, bu önemin dili, sınırları ve yolları olup olmadığıdır.</p>
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
