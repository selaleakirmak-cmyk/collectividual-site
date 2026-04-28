import Link from "next/link";
import Container from "@/components/site/Container";

const resources = [
  ["Bunu Tek Başıma mı Taşımalıyım?", "Bir destek anının tek bir kişinin taşıyabileceğinden fazlasını gerektirip gerektirmediğini düşünmek için duraklama aracı."],
  ["Yeşil / Sarı / Kırmızı Destek Kontrol Listesi", "Gündelik destek, artan kaygı ve acil yönlendirme ihtiyacını ayırt etmek için sade bir çerçeve."],
  ["Yanıt Vermeden Önce Kontrol Listesi", "Tavsiye, güvence verme veya çözüm üretme otomatiği devreye girmeden önce kısa bir refleksiyon."],
  ["Güvenlik Hakkında Sormalı mıyım?", "Kaygı verici ifadeleri sakin ve doğrudan biçimde ele almak için rehber."],
  ["Sınır ve Güvenlik Kontrol Listesi", "Desteği geri çekmeden sınırları adlandırmak için pratik bir araç."],
];

export const metadata = {
  title: "Ücretsiz Ruh Sağlığı Okuryazarlığı Araçları | Collectividual",
  description: "Ruh sağlığı okuryazarlığı, dikkatli iletişim ve sürdürülebilir destek için Collectividual kaynakları.",
};

export default function TurkishResourcesPage() {
  return (
    <>
      <section className="poster-section border-b border-[var(--border)]">
        <Container>
          <p className="poster-kicker mb-7">Ücretsiz araçlar</p>
          <h1 className="poster-title poster-title--tr-wide">Ruh Sağlığı Okuryazarlığı Kontrol Listeleri</h1>
          <p className="poster-lede mt-9">Daha net iletişim, daha iyi sınırlar ve daha düşünceli destek isteyen kişi ve gruplar için beş pratik kaynak.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#download" className="poster-button">Araçları e-posta ile al</a>
            <Link href="/tr/workshops" className="poster-button poster-button--secondary">Atölyeleri incele</Link>
          </div>
        </Container>
      </section>

      <section className="poster-section border-b border-[var(--border)] bg-[var(--surface)]">
        <Container>
          <h2 className="poster-title poster-title--tr-medium">Kullanacak kadar sade. Anı basitleştirmeyecek kadar ciddi.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {resources.map(([title, description], index) => (
              <div key={title} className="border-2 border-[var(--accent)] bg-[var(--bg)] p-6">
                <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Araç 0{index + 1}</p>
                <h3 className="text-3xl leading-tight text-[var(--accent)] md:text-4xl">{title}</h3>
                <p className="mt-4 text-[13px] leading-7 text-[var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="download" className="poster-section">
        <Container>
          <div className="border-2 border-[var(--accent)] bg-[var(--surface)] p-7 md:p-12">
            <p className="poster-kicker mb-6">İndir</p>
            <h2 className="poster-title poster-title--tr-medium">Araçları bana gönder.</h2>
            <p className="poster-lede mt-8">E-postanızı yazın; kaynakları gönderelim. Zaman zaman Collectividual güncellemeleri de gönderebiliriz. Dilediğiniz zaman abonelikten çıkabilirsiniz.</p>
            <form className="mt-8 grid gap-4 md:grid-cols-[1fr_auto]" action="#">
              <input aria-label="E-posta adresi" name="email" type="email" placeholder="siz@example.com" className="border-2 border-[var(--accent)] bg-[var(--bg)] px-4 py-3 text-[14px] outline-none" />
              <button type="submit" className="poster-button">Araçları gönder</button>
              <label className="md:col-span-2 flex gap-3 text-[12px] leading-6 text-[var(--muted)]"><input type="checkbox" required className="mt-1" /><span>Bu kaynakları ve Collectividual’dan zaman zaman ilgili e-postalar almayı kabul ediyorum. İstediğim zaman abonelikten çıkabileceğimi biliyorum.</span></label>
            </form>
            <p className="mt-6 text-[12px] leading-6 text-[var(--muted)]">Bu form şimdilik görsel olarak yerleştirildi. Yayın öncesinde seçtiğiniz e-posta servisine bağlanmalıdır.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/tr/assessment/mental-health-literacy" className="text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">Kurumunuzu değerlendirin →</Link>
            <Link href="/tr/join" className="text-[13px] font-bold tracking-[0.02em] text-[var(--accent)]">İletişime geçin →</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
