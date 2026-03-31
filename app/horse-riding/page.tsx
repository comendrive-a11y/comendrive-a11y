"use client";

import React from "react";

export default function HorseRidingPage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "NATURE EXPERIENCE · HISARONU"
      : "DOĞA DENEYİMİ · HİSARÖNÜ",

    heroTitle: isEn ? "Horse Riding" : "At Biniciliği",

    heroSlogan: isEn
      ? "Calm horses. Forest views. A different side of Fethiye."
      : "Sakin atlar. Orman manzaraları. Fethiye’nin farklı bir yüzü.",

    heroText: isEn
      ? "A peaceful horse riding experience through the pine forest of Hisaronu, with panoramic views of Babadağ, Mendos Mountain and Kayaköy."
      : "Hisarönü çam ormanında, Babadağ, Mendos Dağı ve Kayaköy manzaraları eşliğinde huzurlu bir at binme deneyimi.",

    heroNote: isEn
      ? "Suitable for beginners, families and children. No previous riding experience required."
      : "Yeni başlayanlar, aileler ve çocuklar için uygundur. Önceden binicilik deneyimi gerekmez.",

    askWhatsapp: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "Our horse riding tours take place in Hisaronu and usually last between 45 minutes and 1 hour. Guests ride through the pine forest while enjoying beautiful panoramic views of Hisaronu, Babadağ, Mendos Mountain and Kayaköy along the route. The activity is usually organized as a group tour, but private tours can also be arranged on request. Our horses are calm, friendly and suitable for guests with no previous experience. During each tour, at least two professional riding guides accompany the group. Safety and guest comfort are always our priority."
      : "At binme turlarımız Hisarönü bölgesinde yapılır ve genellikle 45 dakika ile 1 saat arasında sürer. Misafirler rota boyunca Hisarönü, Babadağ, Mendos Dağı ve Kayaköy manzaralarının keyfini çıkararak çam ormanı içinde sürüş yapar. Aktivite genellikle grup turu olarak düzenlenir, ancak talep üzerine özel turlar da ayarlanabilir. Atlarımız sakin, uyumlu ve daha önce deneyimi olmayan misafirler için uygundur. Her tur sırasında gruba en az iki profesyonel rehber eşlik eder. Güvenlik ve misafir konforu her zaman önceliğimizdir.",

    imageTitle: isEn ? "Tour Preview" : "Tur Görseli",

    detailsTitle: isEn ? "Tour Details" : "Tur Bilgileri",
    detailsList: isEn
      ? [
          "Location: Hisaronu",
          "Duration: 45 minutes to 1 hour",
          "Type: Group tour / Private tour on request",
          "Views: Hisaronu, Babadağ, Mendos Mountain, Kayaköy",
          "Suitable for beginners and families",
        ]
      : [
          "Konum: Hisarönü",
          "Süre: 45 dakika ile 1 saat",
          "Tur tipi: Grup turu / Talep üzerine özel tur",
          "Manzaralar: Hisarönü, Babadağ, Mendos Dağı, Kayaköy",
          "Yeni başlayanlar ve aileler için uygundur",
        ],

    includedTitle: isEn ? "Included in Tour" : "Tura Dahil Olanlar",
    includedList: isEn
      ? ["Transfer", "Helmet", "Guided horse riding experience"]
      : ["Transfer", "Kask", "Rehberli at binme deneyimi"],

    extrasTitle: isEn ? "Extra Services" : "Ekstra Hizmetler",
    extrasList: isEn
      ? [
          "Photo",
          "Video",
          "No obligation to purchase any extra media services",
        ]
      : [
          "Fotoğraf",
          "Video",
          "Ekstra medya hizmetlerini satın alma zorunluluğu yoktur",
        ],

    notesTitle: isEn ? "Important Notes" : "Önemli Notlar",
    notesList: isEn
      ? [
          "Suitable for children",
          "Guests over 90 kg cannot join the ride",
          "Children under 20 kg and aged 4+ may ride together with a parent",
          "Comfortable café and waiting area available at the ranch",
          "Transfer is provided with comfortable air-conditioned vehicles",
        ]
      : [
          "Çocuklar için uygundur",
          "90 kg üzerindeki misafirler sürüşe katılamaz",
          "20 kg altındaki ve 4 yaş üzeri çocuklar ebeveyn ile birlikte binebilir",
          "Tesiste konforlu kafe ve bekleme alanı vardır",
          "Transfer konforlu klimalı araçlarla sağlanır",
        ],

    timesTitle: isEn ? "Tour Times" : "Tur Saatleri",
    tourTimes: ["09:00", "11:00", "14:00", "16:00", "18:00"],

    bottomTitle: isEn
      ? "Ready for a peaceful ride in nature?"
      : "Doğada huzurlu bir sürüşe hazır mısınız?",
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
          backgroundImage:
            "linear-gradient(180deg, rgba(20,18,15,0.78) 0%, rgba(20,18,15,0.48) 45%, rgba(20,18,15,0.80) 100%), url('/horse-riding-hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Horse%20Riding"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "#fff",
                padding: "14px 26px",
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
              borderRadius: "24px",
              overflow: "hidden",
              minHeight: "360px",
              boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
              background: "#e9e1d6",
            }}
          >
            <img
              src="/horse-riding-preview.jpg"
              alt="Horse Riding Preview"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "360px",
                objectFit: "cover",
                display: "block",
              }}
            />
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

      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>{t.timesTitle}</p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {t.tourTimes.map((item) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  borderRadius: "999px",
                  padding: "12px 20px",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
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
            href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Horse%20Riding"
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
