"use client";

import React from "react";

export default function OludenizBoatTripPage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "SEA EXPERIENCE · OLUDENIZ"
      : "DENİZ DENEYİMİ · ÖLÜDENİZ",

    heroTitle: isEn ? "Oludeniz Boat Trip" : "Ölüdeniz Tekne Turu",

    heroSlogan: isEn
      ? "Six hours. Five bays. One perfect day."
      : "Altı saat. Beş koy. Tek bir mükemmel gün.",

    heroText: isEn
      ? "A relaxing full-day boat trip around the most beautiful bays and islands of Oludeniz, with swimming stops, lunch and optional water sports."
      : "Ölüdeniz’in en güzel koyları ve adaları etrafında, yüzme molaları, öğle yemeği ve isteğe bağlı su sporları ile geçen rahatlatıcı tam günlük bir tekne turu.",

    heroNote: isEn
      ? "Guests should be on board by 10:00 at the latest. Return to shore is around 17:00 at the latest."
      : "Misafirlerin en geç 10:00’da teknede olmaları gerekir. Kıyıya dönüş en geç 17:00 civarındadır.",

    askWhatsapp: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "This boat trip lasts approximately 6 hours and includes lunch. During the day, guests visit some of the most popular stops around Oludeniz, including Butterfly Valley, Cold Water Bay, St Nicholas Island, Aquarium Bay and Camel Beach. Each stop usually includes a swimming and relaxation break of around 30 to 60 minutes. At one of the stops, guests may also join water sports such as Ringo, Banana and Parasailing for an extra charge. Route, stops and duration may vary depending on weather and sea conditions."
      : "Bu tekne turu yaklaşık 6 saat sürer ve öğle yemeği dahildir. Gün boyunca misafirler Ölüdeniz çevresindeki en sevilen duraklardan bazılarını ziyaret eder; bunlar arasında Kelebekler Vadisi, Soğuk Su, St Nicholas Adası, Akvaryum Koyu ve Deve Plajı yer alır. Her durakta genellikle 30 ile 60 dakika arasında yüzme ve dinlenme molası verilir. Duraklardan birinde isteyen misafirler ekstra ücret karşılığında Ringo, Banana ve Parasailing gibi su sporlarına katılabilir. Rota, duraklar ve süreler hava ve deniz şartlarına göre değişebilir.",

    imageTitle: isEn ? "Tour Preview" : "Tur Görseli",
    imagePlaceholder: isEn ? "Boat Trip Photo" : "Tekne Turu Fotoğrafı",

    detailsTitle: isEn ? "Tour Details" : "Tur Bilgileri",
    detailsList: isEn
      ? [
          "Type: Full-day boat trip",
          "Duration: Approx. 6 hours",
          "Boarding time: By 10:00 at the latest",
          "Return: Around 17:00 at the latest",
          "Stops: Butterfly Valley, Cold Water, St Nicholas Island, Aquarium Bay, Camel Beach",
        ]
      : [
          "Tur tipi: Tam günlük tekne turu",
          "Süre: Yaklaşık 6 saat",
          "Tekneye biniş: En geç 10:00",
          "Dönüş: En geç 17:00 civarı",
          "Duraklar: Kelebekler Vadisi, Soğuk Su, St Nicholas Adası, Akvaryum Koyu, Deve Plajı",
        ],

    includedTitle: isEn ? "Included in Tour" : "Tura Dahil Olanlar",
    includedList: isEn
      ? [
          "Boat trip",
          "Lunch",
        ]
      : [
          "Tekne turu",
          "Öğle yemeği",
        ],

    extrasTitle: isEn ? "Extra Activities & Charges" : "Ekstra Aktiviteler ve Ücretler",
    extrasList: isEn
      ? [
          "Drinks",
          "Cocktails",
          "Ringo",
          "Banana",
          "Parasailing",
          "No obligation to purchase any extras",
        ]
      : [
          "İçecekler",
          "Kokteyller",
          "Ringo",
          "Banana",
          "Parasailing",
          "Ekstra hizmetleri satın alma zorunluluğu yoktur",
        ],

    notesTitle: isEn ? "Why Guests Love It" : "Misafirler Neden Seviyor?",
    notesList: isEn
      ? [
          "Relaxing and enjoyable day at sea",
          "Comfortable atmosphere for families and friends",
          "Timing planned to avoid the busiest crowds when possible",
          "Chill-out music that adds to the experience",
          "Focus on guest satisfaction, safety and hygiene",
        ]
      : [
          "Denizde rahatlatıcı ve keyifli bir gün sunar",
          "Aileler ve arkadaş grupları için konforlu ortam",
          "Mümkün olduğunca kalabalığın az olduğu saatlere göre planlama yapılır",
          "Deneyimi güzelleştiren sakin ve keyifli müzikler",
          "Misafir memnuniyeti, güvenlik ve hijyen odaklı hizmet anlayışı",
        ],

    bottomTitle: isEn
      ? "Ready for a perfect day at sea?"
      : "Denizde mükemmel bir güne hazır mısınız?",
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
                maxWidth: "min(720px, 100%)",
                marginBottom: "28px",
                opacity: 0.88,
              }}
            >
              {t.heroNote}
            </p>

            <a
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Oludeniz%20Boat%20Trip"
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
            href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Oludeniz%20Boat%20Trip"
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
