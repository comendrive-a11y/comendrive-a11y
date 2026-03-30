"use client";

import React from "react";

export default function ParaglidingPage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "SKY EXPERIENCE · BABADAG / OLUDENIZ"
      : "GÖKYÜZÜ DENEYİMİ · BABADAĞ / ÖLÜDENİZ",

    heroTitle: isEn ? "Paragliding" : "Yamaç Paraşütü",

    heroSlogan: isEn
      ? "Fly above Ölüdeniz. Land next to the sea. Remember it forever."
      : "Ölüdeniz’in üzerinde uçun. Denizin yanına inin. Hayat boyu hatırlayın.",

    heroText: isEn
      ? "A tandem paragliding experience from Babadağ with breathtaking views, professional local pilots and landing directly next to Ölüdeniz Beach."
      : "Babadağ’dan, büyüleyici manzaralar eşliğinde, deneyimli yerel pilotlarla ve Ölüdeniz plajı yanındaki iniş alanına yapılan tandem yamaç paraşütü deneyimi.",

    heroNote: isEn
      ? "Guests should allow around 2–3 hours in total. Flight duration is approximately 30–45 minutes depending on wind conditions."
      : "Misafirlerin toplamda yaklaşık 2–3 saat ayırması önerilir. Uçuş süresi rüzgar durumuna göre yaklaşık 30–45 dakikadır.",

    askWhatsapp: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "Paragliding takes place from Babadağ, one of the world’s most famous flight locations. Depending on wind conditions, take-off is made from 1200 m, 1700 m or preferably 1900 m runways. Flights land at the Ölüdeniz Beach landing area, right next to our office, which offers extra comfort after the experience. All flights are operated by experienced local professional pilots. If weather conditions are not suitable for flying, the flight may be moved to another time of the same day or another day. If rescheduling is not possible for the guest, a full refund is provided."
      : "Yamaç paraşütü deneyimi dünyanın en ünlü uçuş noktalarından biri olan Babadağ’dan yapılmaktadır. Rüzgar durumuna göre kalkış 1200 m, 1700 m veya öncelikli olarak 1900 m pistlerinden gerçekleştirilir. İniş, Ölüdeniz plajı iniş alanına yani ofisimizin hemen yanına yapılır; bu da uçuş sonrası misafirler için ekstra konfor sağlar. Tüm uçuşlar deneyimli yerel profesyonel pilotlar eşliğinde yapılır. Hava şartları uçuş için uygun değilse uçuş aynı günün başka bir saatine veya başka bir güne alınabilir. Misafirin zamanı uygun değilse ve hava şartları nedeniyle uçuş yapılamazsa tam ücret iadesi yapılır.",

    imageTitle: isEn ? "Tour Preview" : "Tur Görseli",
    imagePlaceholder: isEn ? "Paragliding Photo" : "Yamaç Paraşütü Fotoğrafı",

    detailsTitle: isEn ? "Flight Details" : "Uçuş Bilgileri",
    detailsList: isEn
      ? [
          "Flight times: 08:30 / 10:30 / 13:00 / 15:00 / 17:00",
          "Take-off runways: 1200 m / 1700 m / 1900 m",
          "Landing: Ölüdeniz Beach landing area",
          "Flight duration: approx. 30–45 minutes",
          "Guests should allow around 2–3 hours total",
        ]
      : [
          "Uçuş saatleri: 08:30 / 10:30 / 13:00 / 15:00 / 17:00",
          "Kalkış pistleri: 1200 m / 1700 m / 1900 m",
          "İniş: Ölüdeniz plajı iniş alanı",
          "Uçuş süresi: yaklaşık 30–45 dakika",
          "Toplamda yaklaşık 2–3 saat ayrılması önerilir",
        ],

    includedTitle: isEn ? "Included in Price" : "Fiyata Dahil Olanlar",
    includedList: isEn
      ? [
          "Transfer",
          "Tandem pilot service",
          "Insurance",
          "Runway usage fee",
          "Photo & video package",
        ]
      : [
          "Transfer",
          "Tandem pilotaj hizmeti",
          "Sigorta",
          "Pist kullanım ücreti",
          "Fotoğraf ve video paketi",
        ],

    extrasTitle: isEn ? "Extra Services" : "Ekstra Hizmetler",
    extrasList: isEn
      ? [
          "360° photo & video shooting",
        ]
      : [
          "360° fotoğraf ve video çekimi",
        ],

    notesTitle: isEn ? "Important Notes" : "Önemli Notlar",
    notesList: isEn
      ? [
          "Flights depend on weather conditions",
          "If needed, flight time or day may be changed",
          "If rescheduling is not possible, full refund is provided",
          "Maximum weight: Men 100 kg / Women 85 kg",
          "Higher weights may fly with extra charge",
        ]
      : [
          "Uçuşlar hava şartlarına bağlıdır",
          "Gerekirse uçuş saati veya günü değiştirilebilir",
          "Değişiklik mümkün değilse tam ücret iadesi yapılır",
          "Maksimum kilo: Erkek 100 kg / Kadın 85 kg",
          "Bu limitlerin üzeri ek ücrete tabidir",
        ],

    bringTitle: isEn ? "What to Bring" : "Yanınızda Bulundurmanız Gerekenler",
    bringList: isEn
      ? [
          "Sports shoes",
          "Sunglasses",
          "Mobile phone",
        ]
      : [
          "Spor ayakkabı",
          "Güneş gözlüğü",
          "Telefon",
        ],

    bottomTitle: isEn
      ? "Ready to fly over Ölüdeniz?"
      : "Ölüdeniz’in üzerinde uçmaya hazır mısınız?",
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
                maxWidth: "min(720px, 100%)",
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
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Paragliding"
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

      <section style={{ padding: "0 20px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>{t.bringTitle}</p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {t.bringList.map((item) => (
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
            href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Paragliding"
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
