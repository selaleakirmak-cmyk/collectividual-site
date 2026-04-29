import Container from "@/components/site/Container";

const defaultFormBase = "https://docs.google.com/forms/d/e/1FAIpQLSf6FplfzpOPTaelmNrnJf28a0Z8_GW9NkRd23PP01nupW38_Q/viewform";
const defaultEmbedUrl = `${defaultFormBase}?embedded=true`;

const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || defaultEmbedUrl;
const formOpenUrl = formUrl.replace("?embedded=true", "");

const joinOptions = [
  {
    title: "Uygulayıcı Olarak Katıl",
    label: "Join as a Practitioner",
    description:
      "Psikolog, terapist, kolaylaştırıcı, koç, eğitimci veya insan bilimleri alanında çalışan ve Collectividual ile işbirliği yapmak, katkı sunmak ya da araç geliştirmek isteyen kişiler için.",
    cta: "Uygulayıcı olarak devam et",
  },
  {
    title: "Kurum Olarak Katıl",
    label: "Join as an Institution",
    description:
      "Atölye, değerlendirme, proje, eğitim veya ortaklık formatlarıyla ilgilenen kurumlar, üniversiteler, topluluklar, ekipler, STK’lar ve şirketler için.",
    cta: "Kurum olarak devam et",
  },
  {
    title: "Bireysel Temsilci Olarak Katıl",
    label: "Join as an Individual Representative",
    description:
      "Bir grup, kolektif, öğrenci kulübü, işyeri ekibi, informal topluluk veya yeni gelişen bir inisiyatif adına ulaşan kişiler için.",
    cta: "Temsilci olarak devam et",
  },
];

export const metadata = {
  title: "Katıl | Collectividual",
  description: "Collectividual’a uygulayıcı, kurum veya bireysel temsilci olarak katılın ya da iletişime geçin.",
};

export default function TurkishJoinPage() {
  return (
    <main>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Collectividual’a Katıl</p>
          <h1 className="poster-title poster-title--tr-wide">Nereden geldiğinizi söyleyin.</h1>
          <p className="poster-lede mt-9">
            Bu sayfayı atölye, değerlendirme, proje, araç, işbirliği veya topluluk talepleri için kullanabilirsiniz. Önce bağlamınızı en iyi tarif eden yolu seçin.
          </p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container>
          <p className="poster-kicker mb-8 bg-[var(--bg)]">Bir yol seçin</p>
          <div className="grid gap-6 md:grid-cols-3">
            {joinOptions.map((option) => (
              <a
                key={option.title}
                href="#form"
                className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]"
              >
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--muted)]">{option.label}</p>
                <h2 className="text-3xl leading-tight text-[var(--accent)] md:text-4xl">{option.title}</h2>
                <p className="mt-5 text-[13px] leading-7 text-[var(--muted)]">{option.description}</p>
                <p className="mt-6 text-[12px] font-black uppercase tracking-[0.1em] text-[var(--accent)]">{option.cta} →</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-8">Formda ne belirtmeli?</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Formda rolünüzü seçin: uygulayıcı, kurum veya bireysel temsilci.",
              "Hangi proje, atölye, araç, değerlendirme veya işbirliği ile ilgilendiğinizi yazın.",
              "Sizin için nasıl bir sonraki adımın işe yarayacağını söyleyin: görüşme, teklif, atölye veya birlikte tasarım.",
            ].map((item) => (
              <div key={item} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[15px] font-semibold leading-8 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="form" className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[0_14px_0_var(--accent)] md:p-8">
            <p className="poster-kicker mb-6">Başvuru / iletişim formu</p>
            <h2 className="poster-title poster-title--tr-medium">Buradan başlayın.</h2>
            <p className="mt-6 max-w-2xl text-[15px] font-semibold leading-8 text-[var(--muted)]">
              Gömülü form cihazınızda yüklenmezse formu yeni sekmede açabilirsiniz. Formda uygulayıcı, kurum veya bireysel temsilci olarak katıldığınızı seçin.
            </p>
            <a href={formOpenUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex poster-button">
              Formu aç
            </a>
            <div className="mt-8 overflow-hidden border-2 border-[var(--accent)] bg-[var(--bg)]">
              <iframe title="Collectividual başvuru ve iletişim formu" src={formUrl} className="h-[900px] w-full" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
