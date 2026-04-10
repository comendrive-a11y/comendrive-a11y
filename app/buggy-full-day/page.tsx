"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function BuggyFullDayPage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");
  const isEn = lang === "en";

  const t = {
    navBack: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "BUGGY SAFARI FULL DAY · BABADAĞ / FETHİYE"
      : "BUGGY SAFARI TAM GÜN · BABADAĞ / FETHİYE",

    title: isEn ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",

    slogan: isEn
      ? "Half day for fun. Full day for discovery."
      : "Yarım gün eğlence için. Tam gün keşif için.",

    subtitle: isEn
      ? "75 km of mountain adventure, hidden roads, ancient history, premium lunch and a beach swim stop."
      : "75 km dağ macerası, gizli yollar, antik tarih, premium öğle yemeği ve plaj yüzme molası.",

    text: isEn
      ? "This exclusive full-day route starts from our truck and climbs up to 1500 metres on Babadağ with breathtaking views. The journey includes the ancient Lycian city of Pınara, a photo break above Hidden Canyon, an exclusive lunch with Butterfly Valley view and a 1-hour swim stop at Kıdrak Beach. This experience is designed for guests who want to explore off-road routes that almost nobody else drives."
      : "Bu özel tam günlük rota truck çıkışıyla başlar ve Babadağ’da 1500 metreye kadar muhteşem manzaralar eşliğinde yükselir. Yolculuk; antik Likya kenti Pınara, Hidden Canyon üzerinde fotoğraf molası, Butterfly Valley manzaralı özel öğle yemeği ve Kıdrak Beach’te 1 saatlik yüzme molasını içerir. Bu deneyim, neredeyse kimsenin sürmediği off-road yolları keşfetmek isteyen misafirler için tasarlanmıştır.",

    heroNote: isEn
      ? "Weekend only. Driver minimum age 20. Recommended for experienced drivers."
      : "Sadece hafta sonu yapılır. Minimum sürücü yaşı 20’dir. Deneyimli sürücüler için tavsiye edilir.",

    gallery: isEn ? "Tour Gallery" : "Tur Galerisi",
    experienceTitle: isEn ? "The Experience" : "Deneyim",

    experienceText: isEn
      ? "A true exploration route for guests who want more than a standard safari: mountain ascent, remote off-road tracks, ancient history, premium lunch and a beach stop in one unforgettable day."
      : "Standart bir safari turundan daha fazlasını isteyen misafirler için gerçek bir keşif rotası: dağ çıkışı, uzak off-road yolları, antik tarih, premium öğle yemeği ve aynı gün içinde plaj molası.",

    details: isEn ? "Tour Details" : "Tur Detayları",
    included: isEn ? "Included in Price" : "Fiyata Dahil Olanlar",
    bring: isEn ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    rules: isEn ? "Participation Rules" : "Katılım Şartları",
    why: isEn ? "Why Choose This Tour?" : "Bu Turu Neden Seçmelisiniz?",

    book: isEn ? "Book Full Day" : "Tam Gün Rezervasyon",
    whatsappAsk: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    detailItems: isEn
      ? [
          "Saturday & Sunday only",
          "09:00 – 17:00",
          "Total route: 75 km",
          "Babadağ climb up to 1500 metres",
          "Visit to ancient city of Pınara",
          "Hidden Canyon photo break",
          "1-hour swim stop at Kıdrak Beach",
        ]
      : [
          "Sadece Cumartesi & Pazar",
          "09:00 – 17:00",
          "Toplam rota: 75 km",
          "Babadağ’da 1500 metreye kadar çıkış",
          "Pınara antik kenti ziyareti",
          "Hidden Canyon fotoğraf molası",
          "Kıdrak Beach’te 1 saat yüzme molası",
        ],

    includedItems: isEn
      ? [
          "Premium lunch",
          "All day water",
          "Beach entrance fee",
          "Photos included",
          "Guide service",
          "Activity insurance",
        ]
      : [
          "Premium öğle yemeği",
          "Gün boyu su",
          "Plaj giriş ücreti",
          "Fotoğraflar dahil",
          "Rehberlik hizmeti",
          "Aktivite sigortası",
        ],

    bringItems: isEn
      ? ["Driving licence", "Sunglasses", "Towel", "Swimwear"]
      : ["Ehliyet", "Güneş gözlüğü", "Havlu", "Yüzme kıyafeti"],

    ruleItems: isEn
      ? [
          "Minimum driver age: 20",
          "Driving licence required",
          "Minimum passenger age: 6",
          "Recommended for experienced drivers",
          "Not suitable for guests with fear of heights",
        ]
      : [
          "Minimum sürücü yaşı: 20",
          "Ehliyet zorunlu",
          "Minimum yolcu yaşı: 6",
          "Deneyimli sürücüler için tavsiye edilir",
          "Yükseklik korkusu olanlar için uygun değildir",
        ],

    whyItems: isEn
      ? [
          "75 km long exclusive off-road route",
          "Drive roads that almost nobody else uses",
          "Babadağ mountain views up to 1500 metres",
          "Ancient city of Pınara",
          "Hidden Canyon photo stop",
          "Butterfly Valley view lunch",
          "Kıdrak Beach swim break",
          "Photos included in price",
        ]
      : [
          "75 km uzun özel off-road rota",
          "Neredeyse kimsenin kullanmadığı yollar",
          "1500 metreye kadar Babadağ manzaraları",
          "Pınara antik kenti",
          "Hidden Canyon fotoğraf molası",
          "Butterfly Valley manzaralı öğle yemeği",
          "Kıdrak Beach yüzme molası",
          "Fotoğraflar fiyata dahil",
        ],
  };

  const galleryImages = [
    "/fullday-1.jpg",
    "/fullday-2.jpg",
    "/fullday-3.jpg",
    "/fullday-4.jpg",
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
            "linear-gradient(180deg, rgba(20,18,15,0.70) 0%, rgba(20,18,15,0.40) 45%, rgba(20,18,15,0.80) 100%), url('/fullday-hero.jpg')",
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
            <Link
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {t.navBack}
            </Link>

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

          <div style={{ maxWidth: "780px" }}>
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

            <h1
              style={{
                fontSize: "clamp(32px, 6vw, 56px)",
                marginBottom: "10px",
              }}
            >
              {t.title}
            </h1>

            <div
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                opacity: 0.92,
                marginBottom: "18px",
              }}
            >
              {t.slogan}
            </div>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                maxWidth: "760px",
                marginBottom: "14px",
                opacity: 0.98,
              }}
            >
              {t.subtitle}
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                maxWidth: "760px",
                marginBottom: "14px",
                opacity: 0.95,
              }}
            >
              {t.text}
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "760px",
                marginBottom: "28px",
                opacity: 0.85,
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
                {t.book}
              </a>

              <a
                href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Full%20Day%20Buggy%20Safari"
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
                maxWidth: "920px",
              }}
            >
              {t.experienceText}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>{t.gallery}</p>

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
                  alt={`Full Day Buggy ${index + 1}`}
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
                {t.details}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.detailItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.included}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.bring}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.bringItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.rules}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.ruleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={{ ...cardStyle, gridColumn: "1 / -1" }}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.why}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.whyItems.map((item) => (
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
            {t.book}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
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
              {t.book}
            </a>

            <a
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Full%20Day%20Buggy%20Safari"
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
  data-src="https://widgets.bokun.io/online-sales/fca6e52d-12e6-4208-a7b1-a9d40f366b36/experience-calendar/1190808"
  style={{ marginTop: "20px" }}
/>
</section>
    </main>
  );
}
