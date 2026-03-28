// trigger deploy
"use client";
// commit test
// test commit 1

import React from "react";

export default function HomePage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");

  const t = {
    pageBg: "#f5f1eb",
    cardBg: "#ffffff",
    softBg: "#f8f6f2",
    text: "#1f1a17",
    muted: "#6b625c",
    border: "#ddd4ca",
    dark: "#1f1a17",
    green: "#25D366",

    switchLang: lang === "en" ? "EN" : "TR",

    halfTitle: lang === "en" ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    halfSlogan:
      lang === "en"
        ? "More than a tour. A real drive."
        : "Bir turdan fazlası. Gerçek bir sürüş deneyimi.",
    halfSubtitle:
      lang === "en"
        ? "35 km of real off-road driving, forest trails and a 1-hour swim break at Gemiler Beach."
        : "35 km gerçek off-road sürüş, orman parkurları ve Gemiler Beach’te 1 saat yüzme molası.",
    halfText:
      lang === "en"
        ? "This premium small-group experience starts from Hisarönü and runs on weekdays with two daily departures. You drive a 550 cc automatic Mud Monster buggy through real off-road terrain. Each slot is limited to maximum 8 buggies, giving the tour a more private and comfortable feeling. We are the only company in the city combining buggy safari with a beach swim break."
        : "Bu premium küçük grup deneyimi Hisarönü çıkışlıdır ve hafta içi her gün iki farklı saatte yapılır. Gerçek off-road arazisinde 550 cc otomatik Mud Monster buggy ile sürüş yaparsınız. Her slot maksimum 8 buggy ile sınırlıdır, bu da daha özel ve konforlu bir his verir. Şehirde buggy safariyi plaj yüzme molasıyla birleştiren tek firmayız.",

    halfGallery: lang === "en" ? "Tour Gallery" : "Tur Galerisi",
    halfButton: lang === "en" ? "Book Half Day" : "Yarım Gün Rezervasyon",
    halfDetails: lang === "en" ? "Tour Details" : "Tur Detayları",
    halfIncluded: lang === "en" ? "Included" : "Dahil Olanlar",
    halfExtra: lang === "en" ? "Extra / Optional" : "Ekstra / Opsiyonel",
    halfBring: lang === "en" ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    halfRules: lang === "en" ? "Driver Rules" : "Sürücü Kuralları",

    halfDetailsItems:
      lang === "en"
        ? [
            "Location: Hisarönü, Fethiye",
            "Weekdays only",
            "Two departures daily: 09:00–12:30 / 14:00–17:30",
            "35 km off-road driving",
            "1-hour swim break at Gemiler Beach",
            "550 cc automatic Mud Monster buggy",
            "Maximum 8 buggies per slot",
          ]
        : [
            "Lokasyon: Hisarönü, Fethiye",
            "Sadece hafta içi",
            "Günde 2 çıkış: 09:00–12:30 / 14:00–17:30",
            "35 km off-road sürüş",
            "Gemiler Beach’te 1 saat yüzme molası",
            "550 cc otomatik Mud Monster buggy",
            "Her slotta maksimum 8 buggy",
          ],

    halfIncludedItems:
      lang === "en"
        ? [
            "Protective goggles",
            "1 bottle of water",
            "Holiday activity insurance",
            "Professional guide service",
            "Transfer",
            "Gemiler Beach entrance",
          ]
        : [
            "Koruyucu gözlük",
            "1 şişe su",
            "Tatil aktivite sigortası",
            "Rehberlik hizmeti",
            "Transfer",
            "Gemiler Beach giriş ücreti",
          ],

    halfExtraItems:
      lang === "en" ? ["Photos", "Drinks at the beach"] : ["Fotoğraflar", "Plajdaki içecekler"],

    halfBringItems:
      lang === "en"
        ? ["Driving licence", "Sunglasses", "Towel", "Swimwear", "Some money for drinks"]
        : ["Ehliyet", "Güneş gözlüğü", "Havlu", "Swimwear", "İçecekler için bir miktar para"],

    halfRulesItems:
      lang === "en"
        ? ["Minimum driving age: 18", "Not suitable for children under 4", "Driving licence required"]
        : ["Minimum sürüş yaşı: 18", "4 yaş altı çocuklar için uygun değildir", "Ehliyet zorunludur"],

    fullTitle: lang === "en" ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    fullSlogan:
      lang === "en"
        ? "Half day for fun. Full day for discovery."
        : "Yarım gün eğlence için. Tam gün keşif için.",
    fullSubtitle:
      lang === "en"
        ? "75 km of mountain adventure, hidden roads, ancient history, premium lunch and a beach swim stop."
        : "75 km dağ macerası, gizli yollar, antik tarih, premium öğle yemeği ve plaj yüzme molası.",
    fullText:
      lang === "en"
        ? "This full-day experience begins from our truck and climbs up to 1500 metres on Babadağ. The route includes the ancient city of Pınara, a photo stop at Hidden Canyon, an exclusive lunch with Butterfly Valley view and a 1-hour swim break at Kıdrak Beach. It is recommended for experienced drivers and guests without fear of heights. The biggest difference of this tour is discovering off-road routes that almost nobody else drives."
        : "Bu tam günlük deneyim truck çıkışıyla başlar ve Babadağ’da 1500 metreye kadar çıkar. Rota; Pınara antik kenti, Hidden Canyon’da fotoğraf molası, Butterfly Valley manzaralı özel öğle yemeği ve Kıdrak Beach’te 1 saat yüzme molasını içerir. Deneyimli sürücüler ve yükseklik korkusu olmayan misafirler için tavsiye edilir. Bu turun en büyük farkı, neredeyse kimsenin sürmediği off-road yolları keşfetmektir.",

    fullGallery: lang === "en" ? "Tour Gallery" : "Tur Galerisi",
    fullButton: lang === "en" ? "Book Full Day" : "Tam Gün Rezervasyon",
    fullDetails: lang === "en" ? "Tour Details" : "Tur Detayları",
    fullIncluded: lang === "en" ? "Included" : "Dahil Olanlar",
    fullBring: lang === "en" ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    fullRules: lang === "en" ? "Driver & Passenger Rules" : "Sürücü & Yolcu Kuralları",

    fullDetailsItems:
      lang === "en"
        ? [
            "Saturday & Sunday only",
            "09:00–17:00",
            "75 km total route",
            "Babadağ climb up to 1500 metres",
            "Visit to ancient city of Pınara",
            "Photo break at Hidden Canyon",
            "Premium lunch with Butterfly Valley view",
            "1-hour swim stop at Kıdrak Beach",
          ]
        : [
            "Sadece Cumartesi & Pazar",
            "09:00–17:00",
            "Toplam 75 km rota",
            "Babadağ’da 1500 metreye kadar çıkış",
            "Pınara antik kenti ziyareti",
            "Hidden Canyon’da fotoğraf molası",
            "Butterfly Valley manzaralı premium öğle yemeği",
            "Kıdrak Beach’te 1 saat yüzme molası",
          ],

    fullIncludedItems:
      lang === "en"
        ? ["All day water", "Premium lunch", "Beach entrance fee", "Photos included", "Guide service", "Insurance"]
        : ["Gün boyu su", "Premium öğle yemeği", "Plaj giriş ücreti", "Fotoğraflar dahil", "Rehberlik hizmeti", "Sigorta"],

    fullBringItems:
      lang === "en"
        ? ["Driving licence", "Sunglasses", "Towel", "Swimwear"]
        : ["Ehliyet", "Güneş gözlüğü", "Havlu", "Swimwear"],

    fullRulesItems:
      lang === "en"
        ? [
            "Minimum driver age: 20",
            "Driving licence required",
            "Minimum passenger age: 6",
            "Recommended for experienced drivers",
            "Not suitable for guests with fear of heights",
          ]
        : [
            "Minimum sürücü yaşı: 20",
            "Ehliyet zorunludur",
            "Minimum yolcu yaşı: 6",
            "Deneyimli sürücüler için tavsiye edilir",
            "Yükseklik korkusu olanlar için uygun değildir",
          ],

    kidsTitle: lang === "en" ? "Kids Quad Bike" : "Kids Quad Bike",
    kidsSlogan:
      lang === "en"
        ? "Little riders. Big smiles."
        : "Küçük sürücüler. Büyük gülümsemeler.",
    kidsSubtitle:
      lang === "en"
        ? "A safe first off-road adventure for children on the city’s biggest closed track."
        : "Çocuklar için şehrin en büyük kapalı parkurunda güvenli ilk off-road macerası.",
    kidsText:
      lang === "en"
        ? "Children ride brand-new Yamaha 50 cc ATVs on a 1.2 km closed track under guide supervision. The activity lasts 50 minutes and is designed for children aged 6 to 14 with a maximum weight of 60 kg. Helmets are included, rear safety limiters are installed and parents can relax in the chilling zone while children enjoy a fun activity that also builds confidence and coordination."
        : "Çocuklar, rehber eşliğinde 1.2 km kapalı parkurda yepyeni Yamaha 50 cc ATV’lerle sürüş yapar. Aktivite 50 dakika sürer ve 6–14 yaş arası, maksimum 60 kg çocuklar için tasarlanmıştır. Kask dahildir, arka emniyet kilitleri vardır ve aileler chilling zone alanında dinlenirken çocuklar hem eğlenir hem de özgüven ve koordinasyon kazanır.",

    kidsGallery: lang === "en" ? "Activity Gallery" : "Aktivite Galerisi",
    kidsButton: lang === "en" ? "Book Kids Quad" : "Kids Quad Rezervasyon",
    kidsDetails: lang === "en" ? "Activity Details" : "Aktivite Detayları",
    kidsSchedule: lang === "en" ? "Daily Hours" : "Günlük Saatler",
    kidsRules: lang === "en" ? "Requirements" : "Kurallar",

    kidsDetailsItems:
      lang === "en"
        ? [
            "Brand-new Yamaha 50 cc ATVs",
            "1.2 km closed track",
            "Guided riding",
            "50-minute activity",
            "City’s biggest kids track",
            "Parent chilling zone",
            "Helmet included",
          ]
        : [
            "Yepyeni Yamaha 50 cc ATV’ler",
            "1.2 km kapalı parkur",
            "Rehberli sürüş",
            "50 dakikalık aktivite",
            "Şehrin en büyük çocuk parkuru",
            "Aileler için chilling zone",
            "Kask dahil",
          ],

    kidsScheduleItems: ["10:00", "11:30", "15:00", "18:00"],

    kidsRulesItems:
      lang === "en"
        ? ["Age: 6–14", "Maximum weight: 60 kg", "Designed only for children"]
        : ["Yaş: 6–14", "Maksimum kilo: 60 kg", "Sadece çocuklar için tasarlanmıştır"],

    reserveNote:
      lang === "en"
        ? "Booking infrastructure will later be connected to Bokun.io and virtual POS."
        : "Rezervasyon altyapısı daha sonra Bokun.io ve sanal POS ile bağlanacaktır.",
  };

  const styles = {
    page: {
      backgroundColor: t.pageBg,
      color: t.text,
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    } as React.CSSProperties,
    wrap: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "24px",
    } as React.CSSProperties,
    topBar: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "20px",
    } as React.CSSProperties,
    langBtn: {
      border: `1px solid ${t.border}`,
      backgroundColor: "#fff",
      color: t.text,
      borderRadius: "999px",
      padding: "10px 16px",
      cursor: "pointer",
      fontWeight: 700,
    } as React.CSSProperties,
    section: {
      backgroundColor: "transparent",
      padding: "48px 0",
      borderBottom: `1px solid ${t.border}`,
    } as React.CSSProperties,
    softSection: {
      backgroundColor: t.softBg,
      padding: "48px 24px",
      borderRadius: "28px",
      margin: "24px 0",
    } as React.CSSProperties,
    title: {
      fontSize: "52px",
      lineHeight: 1.1,
      margin: "0 0 12px 0",
      fontWeight: 800,
    } as React.CSSProperties,
    slogan: {
      fontSize: "22px",
      color: t.muted,
      fontStyle: "italic",
      margin: "0 0 16px 0",
      fontWeight: 600,
    } as React.CSSProperties,
    subtitle: {
      fontSize: "28px",
      lineHeight: 1.35,
      margin: "0 0 18px 0",
      fontWeight: 500,
    } as React.CSSProperties,
    text: {
      fontSize: "18px",
      lineHeight: 1.7,
      color: t.muted,
      marginBottom: "28px",
      maxWidth: "980px",
    } as React.CSSProperties,
    label: {
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase" as const,
      color: t.muted,
      fontWeight: 700,
      marginBottom: "14px",
    } as React.CSSProperties,
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "16px",
      marginBottom: "28px",
    } as React.CSSProperties,
    photoBox: {
      aspectRatio: "4 / 5",
      borderRadius: "22px",
      border: `1px solid ${t.border}`,
      backgroundColor: "#efe9e1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center" as const,
      padding: "12px",
      color: t.muted,
      fontWeight: 600,
      fontSize: "15px",
    } as React.CSSProperties,
    button: {
      display: "inline-block",
      backgroundColor: t.dark,
      color: "#fff",
      borderRadius: "999px",
      padding: "16px 24px",
      textDecoration: "none",
      fontWeight: 700,
      marginBottom: "28px",
    } as React.CSSProperties,
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "18px",
      marginTop: "12px",
    } as React.CSSProperties,
    card: {
      backgroundColor: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: "24px",
      padding: "22px",
    } as React.CSSProperties,
    cardTitle: {
      margin: "0 0 14px 0",
      fontSize: "22px",
      fontWeight: 800,
    } as React.CSSProperties,
    ul: {
      margin: 0,
      paddingLeft: "20px",
      color: t.muted,
      lineHeight: 1.8,
      fontSize: "17px",
    } as React.CSSProperties,
    note: {
      backgroundColor: "#fff",
      border: `1px solid ${t.border}`,
      borderRadius: "24px",
      padding: "24px",
      marginTop: "24px",
      color: t.muted,
      fontSize: "17px",
    } as React.CSSProperties,
    whatsapp: {
      position: "fixed" as const,
      right: "20px",
      bottom: "20px",
      backgroundColor: t.green,
      color: "#fff",
      textDecoration: "none",
      padding: "16px 22px",
      borderRadius: "999px",
      fontWeight: 800,
      boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
    } as React.CSSProperties,
  };

  return (
    <main style={styles.page}>
      <div style={styles.wrap}>
        <div style={styles.topBar}>
          <button style={styles.langBtn} onClick={() => setLang(lang === "en" ? "tr" : "en")}>
            {t.switchLang}
          </button>
        </div>

        <section style={styles.section}>
          <h1 style={styles.title}>{t.halfTitle}</h1>
          <p style={styles.slogan}>{t.halfSlogan}</p>
          <p style={styles.subtitle}>{t.halfSubtitle}</p>
          <p style={styles.text}>{t.halfText}</p>

          <p style={styles.label}>{t.halfGallery}</p>
          <div style={styles.gallery}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} style={styles.photoBox}>
                {lang === "en" ? `Half Day Photo ${n}` : `Yarım Gün Fotoğraf ${n}`}
              </div>
            ))}
          </div>

          <a href="#booking-half-day" style={styles.button}>
            {t.halfButton}
          </a>

          <div style={styles.grid}>
            <InfoCard title={t.halfDetails} items={t.halfDetailsItems} styles={styles} />
            <InfoCard title={t.halfIncluded} items={t.halfIncludedItems} styles={styles} />
            <InfoCard title={t.halfExtra} items={t.halfExtraItems} styles={styles} />
            <InfoCard title={t.halfBring} items={t.halfBringItems} styles={styles} />
          </div>

          <div style={{ marginTop: "18px", maxWidth: "580px" }}>
            <InfoCard title={t.halfRules} items={t.halfRulesItems} styles={styles} />
          </div>
        </section>

        <section style={styles.section}>
          <h1 style={styles.title}>{t.fullTitle}</h1>
          <p style={styles.slogan}>{t.fullSlogan}</p>
          <p style={styles.subtitle}>{t.fullSubtitle}</p>
          <p style={styles.text}>{t.fullText}</p>

          <p style={styles.label}>{t.fullGallery}</p>
          <div style={styles.gallery}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} style={styles.photoBox}>
                {lang === "en" ? `Full Day Photo ${n}` : `Tam Gün Fotoğraf ${n}`}
              </div>
            ))}
          </div>

          <a href="#booking-full-day" style={styles.button}>
            {t.fullButton}
          </a>

          <div style={styles.grid}>
            <InfoCard title={t.fullDetails} items={t.fullDetailsItems} styles={styles} />
            <InfoCard title={t.fullIncluded} items={t.fullIncludedItems} styles={styles} />
            <InfoCard title={t.fullBring} items={t.fullBringItems} styles={styles} />
            <InfoCard title={t.fullRules} items={t.fullRulesItems} styles={styles} />
          </div>
        </section>

        <section style={styles.softSection}>
          <h1 style={styles.title}>{t.kidsTitle}</h1>
          <p style={styles.slogan}>{t.kidsSlogan}</p>
          <p style={styles.subtitle}>{t.kidsSubtitle}</p>
          <p style={styles.text}>{t.kidsText}</p>

          <p style={styles.label}>{t.kidsGallery}</p>
          <div style={styles.gallery}>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} style={styles.photoBox}>
                {lang === "en" ? `Kids Quad Photo ${n}` : `Kids Quad Fotoğraf ${n}`}
              </div>
            ))}
          </div>

          <a href="#booking-kids-quad" style={styles.button}>
            {t.kidsButton}
          </a>

          <div style={styles.grid}>
            <InfoCard title={t.kidsDetails} items={t.kidsDetailsItems} styles={styles} />
            <InfoCard title={t.kidsSchedule} items={t.kidsScheduleItems} styles={styles} />
          </div>

          <div style={{ marginTop: "18px", maxWidth: "580px" }}>
            <InfoCard title={t.kidsRules} items={t.kidsRulesItems} styles={styles} />
          </div>
        </section>

        <div style={styles.note}>{t.reserveNote}</div>
      </div>

      <a href="https://wa.me/" target="_blank" rel="noreferrer" style={styles.whatsapp}>
        WhatsApp
      </a>
    </main>
  );
}

function InfoCard({
  title,
  items,
  styles,
}: {
  title: string;
  items: string[];
  styles: any;
}) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <ul style={styles.ul}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
