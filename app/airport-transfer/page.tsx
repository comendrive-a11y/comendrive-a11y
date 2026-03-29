"use client";

import React from "react";

export default function AirportTransferPage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "PRIVATE AIRPORT TRANSFER · DALAMAN / FETHİYE"
      : "ÖZEL HAVALİMANI TRANSFERİ · DALAMAN / FETHİYE",

    heroTitle: isEn ? "Airport Transfer" : "Havalimanı Transferi",

    heroSlogan: isEn
      ? "We meet you on time, every time."
      : "Sizi her zaman zamanında karşılarız.",

    heroText: isEn
      ? "Private airport transfers between Dalaman Airport and Fethiye, Hisarönü, Ölüdeniz, Çalış and Ovacık for both arrival and departure journeys."
      : "Dalaman Havalimanı ile Fethiye, Hisarönü, Ölüdeniz, Çalış ve Ovacık bölgeleri arasında, hem geliş hem dönüş yönünde özel havalimanı transferi hizmeti sunuyoruz.",

    heroNote: isEn
      ? "VIP-designed Mercedes Vito and Mercedes Sprinter vehicles. Private service for one family or group only."
      : "VIP tasarımlı Mercedes Vito ve Mercedes Sprinter araçlar. Sadece tek bir aile ya da gruba özel hizmet.",

    askWhatsapp: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "Our private airport transfer service is designed for guests who want a smooth, comfortable and stress-free start to their holiday. We operate between Dalaman Airport and the Fethiye area using VIP-designed Mercedes Vito (up to 9 passengers) and Mercedes Sprinter (up to 11 passengers) vehicles, ideal for families and small groups."
      : "Özel havalimanı transfer hizmetimiz, tatiline rahat, konforlu ve sorunsuz başlamak isteyen misafirler için tasarlanmıştır. Dalaman Havalimanı ile Fethiye bölgesi arasında, aileler ve küçük gruplar için ideal olan VIP tasarımlı Mercedes Vito (9 kişiye kadar) ve Mercedes Sprinter (11 kişiye kadar) araçlarla hizmet veriyoruz.",

    imageTitle: isEn ? "Vehicle Preview" : "Araç Görseli",
    imagePlaceholder: isEn ? "Transfer Vehicle Photo" : "Transfer Araç Fotoğrafı",

    detailsTitle: isEn ? "Transfer Details" : "Transfer Bilgileri",
    detailsList: isEn
      ? [
          "Route: Dalaman Airport ↔ Fethiye / Hisarönü / Ölüdeniz / Çalış / Ovacık",
          "Service type: Private arrival & departure transfer",
          "Vehicle options: VIP Mercedes Vito / VIP Mercedes Sprinter",
          "Capacity: Up to 9 or 11 passengers",
        ]
      : [
          "Güzergâh: Dalaman Havalimanı ↔ Fethiye / Hisarönü / Ölüdeniz / Çalış / Ovacık",
          "Hizmet tipi: Özel geliş ve dönüş transferi",
          "Araç seçenekleri: VIP Mercedes Vito / VIP Mercedes Sprinter",
          "Kapasite: 9 veya 11 kişiye kadar",
        ],

    includedTitle: isEn ? "Included in Service" : "Hizmete Dahil Olanlar",
    includedList: isEn
      ? [
          "Bottled water",
          "Internet connection",
          "Baby seat on request",
          "Private transfer for one family or group",
        ]
      : [
          "Şişe su",
          "İnternet bağlantısı",
          "Talep üzerine bebek koltuğu",
          "Tek aile veya gruba özel transfer",
        ],

    comfortTitle: isEn ? "Vehicle & Comfort" : "Araç ve Konfor",
    comfortList: isEn
      ? [
          "VIP-designed interior",
          "Comfortable for families and small groups",
          "Private atmosphere throughout the journey",
          "Baby seat included in price if requested",
        ]
      : [
          "VIP tasarımlı iç mekan",
          "Aileler ve küçük gruplar için konforlu",
          "Yolculuk boyunca özel ve rahat ortam",
          "Bebek koltuğu istenirse ücrete dahildir",
        ],

    notesTitle: isEn ? "Important Notes" : "Önemli Notlar",
    notesList: isEn
      ? [
          "Vehicles have insurance and transport responsibility documents",
          "Flight and accommodation details should be shared in advance",
          "Transfer planning is made according to guest schedule",
        ]
      : [
          "Araçlarda sigorta ve taşıma sorumluluk belgeleri mevcuttur",
          "Uçuş ve konaklama bilgilerinin önceden paylaşılması gerekir",
          "Transfer planlaması misafir saatine göre yapılır",
        ],

    bottomTitle: isEn
      ? "Need a private transfer?"
      : "Özel transfer mi gerekiyor?",
  };

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
          background:
  "linear-gradient(180deg, rgba(20,18,15,0.85) 0%, rgba(20,18,15,0.75) 100%)",
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
              marginBottom: "60px",
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

            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1.05,
                margin: "0 0 14px",
                fontWeight: 700,
              }}
            >
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
                maxWidth: "720px",
                marginBottom: "28px",
                opacity: 0.88,
              }}
            >
              {t.heroNote}
            </p>

            <a
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20airport%20transfer"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {t.askWhatsapp}
            </a>
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
          <p style={sectionTitleStyle}>{t.imageTitle}</p>

          <div
            style={{
              background: "#e9e1d6",
              borderRadius: "24px",
              minHeight: "360px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#7a6f65",
              fontWeight: 600,
              fontSize: "20px",
              textAlign: "center",
              padding: "20px",
            }}
          >
            {t.imagePlaceholder}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                {t.comfortTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.comfortList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.notesTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.notesList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 20px 90px" }}>
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
          <h2 style={{ fontSize: "34px", marginTop: 0, marginBottom: "16px" }}>
            {t.bottomTitle}
          </h2>

          <a
            href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20airport%20transfer"
            target="_blank"
            rel="noreferrer"
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
            {t.askWhatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}
