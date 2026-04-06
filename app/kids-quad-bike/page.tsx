"use client";

import React from "react";
import Script from "next/script";

export default function KidsQuadBikePage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "KIDS OFF-ROAD EXPERIENCE · HISARÖNÜ / FETHİYE"
      : "ÇOCUK OFF-ROAD DENEYİMİ · HİSARÖNÜ / FETHİYE",

    heroTitle: isEn ? "Kids Quad Bike" : "Çocuk Quad Bike",

    heroSlogan: isEn
      ? "Little riders. Big smiles."
      : "Küçük sürücüler. Büyük gülümsemeler.",

    heroText: isEn
      ? "A safe first off-road adventure for children on the biggest traffic-free kids ATV track in the Hisarönü / Fethiye area."
      : "Hisarönü / Fethiye bölgesindeki trafiğe kapalı en büyük çocuk ATV parkurunda, çocuklar için güvenli bir ilk off-road macerası.",

    heroNote: isEn
      ? "Designed for children aged 6–14 (max 60 kg). No experience required."
      : "6–14 yaş arası çocuklar için uygundur (maksimum 60 kg). Deneyim gerektirmez.",

    bookNow: isEn ? "Book Kids Quad Bike" : "Çocuk Quad Bike Rezervasyonu",
    whatsappAsk: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "Children ride specially designed Yamaha 50cc ATVs on a 1.2 km closed off-road track under guide supervision. Each session lasts 50 minutes and is designed to offer fun, confidence and a safe introduction to riding."
      : "Çocuklar, rehber gözetiminde 1.2 km uzunluğundaki kapalı off-road parkurunda çocuklara özel tasarlanmış Yamaha 50cc ATV’lerle sürüş yapar. Her seans 50 dakika sürer ve eğlenceli, güvenli ve özgüven kazandıran bir ilk sürüş deneyimi sunar.",

    galleryTitle: isEn ? "Tour Gallery" : "Tur Galerisi",

    detailsTitle: isEn ? "Tour Details" : "Tur Bilgileri",
    detailsList: isEn
      ? [
          "Location: Hisarönü / Fethiye",
          "Track: 1.2 km closed circuit",
          "Duration: 50 minutes",
          "Age range: 6–14",
          "Weight limit: max 60 kg",
          "Tour times: 10:00 / 11:30 / 15:00 / 18:00",
        ]
      : [
          "Konum: Hisarönü / Fethiye",
          "Parkur: 1.2 km kapalı pist",
          "Süre: 50 dakika",
          "Yaş aralığı: 6–14",
          "Kilo sınırı: maksimum 60 kg",
          "Tur saatleri: 10:00 / 11:30 / 15:00 / 18:00",
        ],

    includedTitle: isEn ? "Included in Price" : "Fiyata Dahil Olanlar",
    includedList: isEn
      ? [
          "Helmet",
          "Bottled water",
          "Guide supervision",
          "Yamaha 50cc ATV designed for children",
        ]
      : [
          "Kask",
          "Şişe su",
          "Rehber gözetimi",
          "Çocuklara özel Yamaha 50cc ATV",
        ],

    familyTitle: isEn ? "Family Comfort" : "Aile Konforu",
    familyList: isEn
      ? [
          "Comfortable area for parents to sit and watch",
          "Children ride in a closed track environment",
          "Relaxed atmosphere for families",
        ]
      : [
          "Ailelerin oturup izleyebileceği rahat alan",
          "Çocuklar kapalı parkur ortamında sürüş yapar",
          "Aileler için konforlu ve rahat bir atmosfer",
        ],

    rulesTitle: isEn ? "Participation Rules" : "Katılım Kuralları",
    rulesList: isEn
      ? [
          "No previous experience required",
          "Children ride under guide supervision",
          "Rear safety lock system available on the ATVs",
          "Participation requires parent or guardian approval",
          "Parents or guardians are responsible for deciding whether the activity is suitable for their child",
        ]
      : [
          "Önceden deneyim gerektirmez",
          "Çocuklar rehber gözetiminde sürüş yapar",
          "ATV’lerde arka emniyet kilidi sistemi bulunur",
          "Katılım için ebeveyn veya veli onayı gereklidir",
          "Aktivitenin çocuk için uygunluğuna karar verme sorumluluğu ebeveyn veya veliye aittir",
        ],
  };

  const galleryImages = [
  "/kids1.jpg",
  "/kids2.jpg",
  "/kids3.jpg",
  "/kids4.jpg",
];

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#6b625b",
    marginBottom: "12px",
  };

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  };

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17", minHeight: "100vh" }}>
      <section
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(20,18,15,0.78) 0%, rgba(20,18,15,0.52) 45%, rgba(20,18,15,0.78) 100%), url('/kids-hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          padding: "24px 20px 80px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "clamp(30px, 6vw, 60px)",
            }}
          >
            <a
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {t.backHome}
            </a>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                onClick={() => setLang("en")}
                style={{
                  background: isEn ? "#fff" : "transparent",
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: isEn ? "#1f1a17" : "#fff",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                EN
              </button>

              <button
                onClick={() => setLang("tr")}
                style={{
                  background: !isEn ? "#fff" : "transparent",
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: !isEn ? "#1f1a17" : "#fff",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                TR
              </button>
            </div>
          </div>

          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                opacity: 0.9,
                marginBottom: "14px",
              }}
            >
              {t.heroTop}
            </p>

            <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", marginBottom: "10px" }}>
              {t.heroTitle}
            </h1>

            <div
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                opacity: 0.9,
                marginBottom: "18px",
              }}
            >
              {t.heroSlogan}
            </div>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "720px",
                marginBottom: "14px",
                opacity: 0.96,
              }}
            >
              {t.heroText}
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "min(720px, 100%)",
                marginBottom: "28px",
                opacity: 0.88,
              }}
            >
              {t.heroNote}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
             <a
  href="#booking"
  style={{
    background: "#25D366",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 600,
  }}
>
  {t.bookNow}
</a>

              <a
                href="https://wa.me/905446358280"
                target="_blank"
                rel="noreferrer"
                style={{
                  border: "1px solid #fff",
                  color: "#fff",
                  padding: "14px 26px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {t.whatsappAsk}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>{t.experienceTitle}</p>
          <div style={cardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#5f554d",
                maxWidth: "900px",
              }}
            >
              {t.experienceText}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>{t.galleryTitle}</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  minHeight: "220px",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                  background: "#e9e1d6",
                }}
              >
                <img
                  src={src}
                  alt={`Kids Quad Bike ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "220px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.detailsTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.detailsList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.includedTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.includedList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.familyTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.familyList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.rulesTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.rulesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 20px 90px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            background: "#ffffff",
            borderRadius: "28px",
            padding: "40px 24px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ fontSize: "34px", marginTop: 0, marginBottom: "20px" }}>
            {t.bookNow}
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a
  href="#booking"
  style={{
    display: "inline-block",
    background: "#25D366",
    color: "#fff",
    padding: "14px 24px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
  }}
>
  {t.bookNow}
</a>

            <a
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Kids%20Quad%20Bike"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #1f1a17",
                color: "#1f1a17",
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {t.whatsappAsk}
            </a>
          </div>
        </div>
      </section>
      <section
  id="booking"
  style={{
    padding: "40px 16px 90px",
    maxWidth: "1100px",
    margin: "0 auto",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "18px",
      fontSize: "14px",
      color: "#6b625b",
      fontWeight: 500,
      lineHeight: 1.6,
    }}
  >
    Free cancellation up to 24 hours before departure
    <br />
    Turdan 24 saat öncesine kadar ücretsiz iptal
  </div>

  <Script
    src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=fca6e52d-12e6-4208-a7b1-a9d40f366b36"
    strategy="afterInteractive"
  />

  <div
    className="bokunWidget"
    data-src="https://widgets.bokun.io/online-sales/fca6e52d-12e6-4208-a7b1-a9d40f366b36/experience-calendar/1190899"
    style={{ marginTop: "20px" }}
  />
</section>
    </main>
  );
}
