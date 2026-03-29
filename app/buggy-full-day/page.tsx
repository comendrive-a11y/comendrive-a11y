"use client";

import React from "react";
import Link from "next/link";

export default function BuggyFullDayPage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");

  const t = {
    navBack: lang === "en" ? "← Back to Home" : "← Ana Sayfaya Dön",
    title: lang === "en" ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    slogan:
      lang === "en"
        ? "Half day for fun. Full day for discovery."
        : "Yarım gün eğlence için. Tam gün keşif için.",
    subtitle:
      lang === "en"
        ? "75 km of mountain adventure, hidden roads, ancient history, premium lunch and a beach swim stop."
        : "75 km dağ macerası, gizli yollar, antik tarih, premium öğle yemeği ve plaj yüzme molası.",
    text:
      lang === "en"
        ? "This exclusive full-day route starts from our truck and climbs up to 1500 metres on Babadağ with breathtaking views. The journey includes the ancient Lycian city of Pınara, a photo break above Hidden Canyon, an exclusive lunch with Butterfly Valley view and a 1-hour swim stop at Kıdrak Beach. This experience is designed for guests who want to explore off-road routes that almost nobody else drives."
        : "Bu özel tam günlük rota truck çıkışıyla başlar ve Babadağ’da 1500 metreye kadar muhteşem manzaralar eşliğinde yükselir. Yolculuk; antik Likya kenti Pınara, Hidden Canyon üzerinde fotoğraf molası, Butterfly Valley manzaralı özel öğle yemeği ve Kıdrak Beach’te 1 saatlik yüzme molasını içerir. Bu deneyim, neredeyse kimsenin sürmediği off-road yolları keşfetmek isteyen misafirler için tasarlanmıştır.",

    gallery: lang === "en" ? "Tour Gallery" : "Tur Galerisi",
    details: lang === "en" ? "Tour Details" : "Tur Detayları",
    included: lang === "en" ? "Included in Price" : "Fiyata Dahil Olanlar",
    bring: lang === "en" ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    rules: lang === "en" ? "Participation Rules" : "Katılım Şartları",
    why: lang === "en" ? "Why Choose This Tour?" : "Bu Turu Neden Seçmelisiniz?",
    book: lang === "en" ? "Book Full Day" : "Tam Gün Rezervasyon",

    detailItems:
      lang === "en"
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

    includedItems:
      lang === "en"
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

    bringItems:
      lang === "en"
        ? ["Driving licence", "Sunglasses", "Towel", "Swimwear"]
        : ["Ehliyet", "Güneş gözlüğü", "Havlu", "Swimwear"],

    ruleItems:
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
            "Ehliyet zorunlu",
            "Minimum yolcu yaşı: 6",
            "Deneyimli sürücüler için tavsiye edilir",
            "Yükseklik korkusu olanlar için uygun değildir",
          ],

    whyItems:
      lang === "en"
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

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "24px",
  };

  const listStyle: React.CSSProperties = {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: 1.8,
    color: "#5f554d",
  };

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17", minHeight: "100vh" }}>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#1f1a17",
              fontWeight: 600,
            }}
          >
            {t.navBack}
          </Link>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? "#1f1a17" : "transparent",
                color: lang === "en" ? "#fff" : "#1f1a17",
                border: "1px solid #cfc6bb",
                borderRadius: "999px",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              EN
            </button>

            <button
              onClick={() => setLang("tr")}
              style={{
                background: lang === "tr" ? "#1f1a17" : "transparent",
                color: lang === "tr" ? "#fff" : "#1f1a17",
                border: "1px solid #cfc6bb",
                borderRadius: "999px",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              TR
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>{t.title}</h1>

          <div
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
              color: "#5f554d",
            }}
          >
            {t.slogan}
          </div>

          <p style={{ fontSize: "20px", maxWidth: "760px" }}>{t.subtitle}</p>

          <p
            style={{
              fontSize: "16px",
              opacity: 0.8,
              marginTop: "20px",
              maxWidth: "780px",
              lineHeight: "1.7",
              color: "#5f554d",
            }}
          >
            {t.text}
          </p>
        </div>

        <div style={{ marginBottom: "12px", letterSpacing: "2px", fontSize: "13px", color: "#6b625b" }}>
          {t.gallery}
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          {["1", "2", "3", "4", "5"].map((i) => (
            <div
              key={i}
              style={{
                width: "180px",
                height: "140px",
                borderRadius: "18px",
                background: "#efe7dc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "#7a6f65",
                opacity: 0.8,
              }}
            >
              {lang === "en" ? `Full Day Photo ${i}` : `Tam Gün Fotoğraf ${i}`}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20book%20Full%20Day%20Buggy%20Safari"
          style={{
            display: "inline-block",
            background: "#1f1a17",
            color: "#fff",
            padding: "14px 26px",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 600,
            marginBottom: "34px",
          }}
        >
          {t.book}
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "34px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.details}</h3>
            <ul style={listStyle}>
              {t.detailItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.included}</h3>
            <ul style={listStyle}>
              {t.includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.bring}</h3>
            <ul style={listStyle}>
              {t.bringItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.rules}</h3>
            <ul style={listStyle}>
              {t.ruleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ ...cardStyle, gridColumn: "1 / -1" }}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.why}</h3>
            <ul style={listStyle}>
              {t.whyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
