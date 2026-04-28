import Container from "@/components/site/Container";

const defaultFormBase = "https://docs.google.com/forms/d/1TRBd8dX-XhLamkzQeb8n-mJlG0wFleGRGJQCmw8hcrw/viewform";
const defaultEmbedUrl = `${defaultFormBase}?embedded=true`;

const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || defaultEmbedUrl;
const formOpenUrl = formUrl.replace("?embedded=true", "");

export const metadata = {
  title: "İletişim | Collectividual",
  description: "Collectividual ile atölye, proje, araç, değerlendirme veya işbirliği için iletişime geçin.",
};

export default function TurkishJoinPage() {
  return (
    <main>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">İletişim</p>
          <h1 className="poster-title poster-title--tr-wide">Neyi şekillendirmek istediğinizi anlatın.</h1>
          <p className="poster-lede mt-9">Atölye, proje, araç, değerlendirme veya işbirliği talepleriniz için bu formu kullanabilirsiniz.</p>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Container>
          <p className="poster-kicker mb-8 bg-[var(--bg)]">Ne yazmalı?</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Formatın kimler için olduğunu ve hangi bağlamda kullanılacağını.",
              "Hangi proje, atölye, araç veya değerlendirme ile ilgilendiğinizi.",
              "Grubunuz için ne tür bir sonraki adımın işe yarayacağını.",
            ].map((item) => (
              <div key={item} className="border-2 border-[var(--accent)] bg-[var(--surface)] p-6 text-[15px] font-semibold leading-8 transition hover:-translate-y-1 hover:shadow-[0_10px_0_var(--accent)]">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[0_14px_0_var(--accent)] md:p-8">
            <p className="poster-kicker mb-6">Form</p>
            <h2 className="poster-title poster-title--tr-medium">Buradan başlayın.</h2>
            <p className="mt-6 max-w-2xl text-[15px] font-semibold leading-8 text-[var(--muted)]">
              Gömülü form cihazınızda yüklenmezse formu yeni sekmede açabilirsiniz.
            </p>
            <a href={formOpenUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex poster-button">
              Formu aç
            </a>
            <div className="mt-8 overflow-hidden border-2 border-[var(--accent)] bg-[var(--bg)]">
              <iframe title="Collectividual iletişim formu" src={formUrl} className="h-[900px] w-full" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
