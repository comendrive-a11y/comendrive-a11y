"use client";

import React from "react";

export default function PrivateBoatTourPage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "PRIVATE SEA EXPERIENCE · FETHIYE"
      : "ÖZEL DENİZ DENEYİMİ · FETHİYE",

    heroTitle: isEn ? "Private Boat Tour" : "Özel Tekne Turu",

    heroSlogan: isEn
      ? "Your boat. Your route. Your day at sea."
      : "Tekne sizin. Rota sizin. Gün sizin.",

    heroText: isEn
      ? "A private family boat experience from Fethiye for guests who want a more relaxed, personal and comfortable day on the water."
      : "Denizde daha rahat, kişisel ve konforlu bir gün geçirmek isteyen misafirler için Fethiye çıkışlı özel aile teknesi deneyimi.",

    heroNote: isEn
      ? "Private tour for up to 12 guests. Day tour 10:00–17:00, sunset option 18:00–21:00."
      : "Maksimum 12 kişilik özel tur. Gündüz turu 10:00–17:00, sunset seçeneği 18:00–21:00.",

    askWhatsapp: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "Our private boat departs from Fethiye Harbour and welcomes up to 12 guests. It is ideal for families and small groups looking for a more personal and relaxed day at sea. The boat features sunbathing areas, shaded seating spaces and a flybridge for panoramic views. During the trip, guests enjoy swimming breaks in some of the most beautiful bays around the Fethiye Peninsula, including Rüzgarlı Bay, Hillside Bay, Tarzan Bay and Aquarium Bay. Lunch is freshly prepared on board with grilled chicken or meatballs, served together with 5–6 varieties of homemade mezes and salads, followed by fruit and cake. This is a family-operated boat, creating a warm, friendly and welcoming atmosphere throughout the day."
      : "Özel teknemiz Fethiye Limanı’ndan hareket eder ve maksimum 12 kişiye kadar misafir ağırlayabilir. Denizde daha kişisel ve rahat bir gün geçirmek isteyen aileler ve küçük gruplar için idealdir. Teknede güneşlenme alanları, gölgede oturma bölümleri ve panoramik manzara sunan flybridge bulunmaktadır. Tur boyunca Fethiye Yarımadası çevresindeki en güzel koylarda yüzme molaları verilir; bunlar arasında Rüzgarlı Koyu, Hillside Koyu, Tarzan Koyu ve Akvaryum Koyu yer alır. Öğle yemeği teknede taze hazırlanır; tavuk veya köfte mangal, yanında 5–6 çeşit ev yapımı meze ve salata ile servis edilir, ardından meyve ve kek sunulur. Teknemiz aile işletmesidir ve gün boyunca samimi, sıcak ve misafir odaklı bir atmosfer sunar.",

    imageTitle: isEn ? "Tour Preview" : "Tur Görseli",
    imagePlaceholder: isEn ? "Private Boat Photo" : "Özel Tekne Fotoğrafı",

    detailsTitle: isEn ? "Tour Details" : "Tur Bilgileri",
    detailsList: isEn
      ? [
          "Departure: Fethiye Harbour",
          "Type: Private boat tour",
          "Capacity: Up to 12 guests",
          "Day tour: 10:00 – 17:00",
          "Sunset option: 18:00 – 21:00",
        ]
      : [
          "Kalkış noktası: Fethiye Limanı",
          "Tur tipi: Özel tekne turu",
          "Kapasite: Maksimum 12 kişi",
          "Gündüz turu: 10:00 – 17:00",
          "Sunset seçeneği: 18:00 – 21:00",
        ],

    includedTitle: isEn ? "Included in Tour" : "Tura Dahil Olanlar",
    includedList: isEn
      ? [
          "Private boat experience",
          "Lunch",
          "Homemade mezes and salads",
          "Fruit and cake service",
          "Swimming breaks in multiple bays",
        ]
      : [
          "Özel tekne deneyimi",
          "Öğle yemeği",
          "Ev yapımı meze ve salatalar",
          "Meyve ve kek servisi",
          "Birden fazla koyda yüzme molası",
        ],

    extrasTitle: isEn ? "Extra Services" : "Ekstra Hizmetler",
    extrasList: isEn
      ? [
          "Drinks",
          "Transfer on request",
          "Outside drinks are not allowed on board",
        ]
      : [
          "İçecekler",
          "Talep üzerine transfer",
          "Tekneye dışarıdan içecek getirilmesine izin verilmez",
        ],

    notesTitle: isEn ? "Why Guests Love It" : "Misafirler Neden Seviyor?",
    notesList: isEn
      ? [
          "Family-operated and guest-focused atmosphere",
          "Comfortable for families and small groups",
          "Sunbathing areas, shaded seating and flybridge",
          "Freshly prepared food on board",
          "Relaxed and personal full-day sea experience",
        ]
      : [
          "Aile işletmesi ve misafir odaklı samimi atmosfer",
          "Aileler ve küçük gruplar için konforlu yapı",
          "Güneşlenme alanları, gölgeli oturma bölümleri ve flybridge",
          "Teknede taze hazırlanan yemekler",
          "Rahat ve kişisel tam günlük deniz deneyimi",
        ],

    bottomTitle: isEn
      ? "Ready for your own private day at sea?"
      : "Denizde size ait özel bir güne hazır mısınız?",
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
          minHeight: "70vh",
          background:
            "linear-gradient(180deg, rgba(20,18,15,0.85) 0%, rgba(20,18,15,0.75) 100%)",
          color: "#fff",
          padding: "24px 20px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
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
               fontSize: "clamp(32px, 6vw, 56px)",
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
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Private%20Boat%20Tour"
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
                {t.extrasTitle}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.extrasList.map((item) => (
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
            href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Private%20Boat%20Tour"
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
