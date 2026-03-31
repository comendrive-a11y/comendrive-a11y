"use client";

import React from "react";

export default function SaklikentCanyonSafariPage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  const t = {
    backHome: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "GROUP SAFARI EXPERIENCE · FETHIYE"
      : "GRUP SAFARİ DENEYİMİ · FETHİYE",

    heroTitle: isEn ? "Saklikent Canyon Safari" : "Saklıkent Kanyon Safari",

   heroSlogan: isEn
  ? "Not just a tour. A water battle."
  : "Sadece bir tur değil. Bir su savaşı.",

    heroText: isEn
      ? "A full-day group safari with waterfall, canyon walk, mud bath and the famous water fight along the route."
      : "Şelale, kanyon yürüyüşü, çamur banyosu ve yol boyunca meşhur su savaşıyla dolu tam günlük bir grup safari deneyimi.",

    heroNote: isEn
      ? "Suitable for guests aged 3 and above. Not recommended for those who do not enjoy getting wet."
      : "3 yaş ve üzeri misafirler için uygundur. Islanmaktan hoşlanmayanlar için tavsiye edilmez.",

    askWhatsapp: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    experienceTitle: isEn ? "The Experience" : "Deneyim",
    experienceText: isEn
      ? "The tour begins with morning hotel pick-up and continues with an open-top safari experience in either a Land Rover Defender or an open-top Mercedes Sprinter. After meeting at the gathering point, the first stop is Gizlikent Waterfall for a short walk and photo break. Guests who wish can join the zipline activity for an extra charge. Lunch is then served with a choice of chicken or fish, together with pasta and salad. After lunch, guests enjoy around one hour at Saklikent Canyon, with the option to join rafting for an additional fee. The day continues with a fun mud bath stop before returning. Outside the highway sections, safari vehicles travel in convoy and guests enjoy the famous water fight throughout the journey."
      : "Tur sabah otelden alınışla başlar ve üstü açık Land Rover Defender veya üstü açık Mercedes Sprinter ile safari deneyimiyle devam eder. Toplanma noktasında buluşmanın ardından ilk durak Gizlikent Şelalesi’dir; burada kısa bir yürüyüş ve fotoğraf molası verilir. Dileyen misafirler ekstra ücretle zipline aktivitesine katılabilir. Ardından tavuk veya balık seçeneğiyle, yanında makarna ve salatadan oluşan öğle yemeği servis edilir. Yemekten sonra Saklıkent Kanyonu’nda yaklaşık bir saatlik serbest zaman ve yürüyüş molası verilir. Dileyenler ekstra ücret karşılığında rafting yapabilir. Gün, eğlenceli çamur banyosu molasıyla devam eder ve ardından dönüşe geçilir. Otoyol dışındaki bölümlerde araçlar konvoy halinde ilerler ve misafirler yol boyunca meşhur su savaşının tadını çıkarır.",

    imageTitle: isEn ? "Tour Preview" : "Tur Görseli",

    detailsTitle: isEn ? "Tour Details" : "Tur Bilgileri",
    detailsList: isEn
      ? [
          "Pick-up: Morning hotel pick-up",
          "Type: Full-day group safari",
          "Approx. hours: 08:30 – 17:00",
          "Vehicles: Open-top Land Rover Defender / Open-top Mercedes Sprinter",
          "Suitable for ages 3+",
        ]
      : [
          "Alınış: Sabah otelden alınış",
          "Tur tipi: Tam günlük grup safari",
          "Yaklaşık saatler: 08:30 – 17:00",
          "Araçlar: Üstü açık Land Rover Defender / Üstü açık Mercedes Sprinter",
          "3 yaş ve üzeri için uygundur",
        ],

    includedTitle: isEn ? "Included in Tour" : "Tura Dahil Olanlar",
    includedList: isEn
      ? ["Hotel pick-up and drop-off", "Safari tour", "Lunch"]
      : ["Otelden alma ve bırakma", "Safari turu", "Öğle yemeği"],

    extrasTitle: isEn ? "Extra Activities & Charges" : "Ekstra Aktiviteler ve Ücretler",
    extrasList: isEn
      ? [
          "Zipline",
          "Rafting",
          "Saklikent Canyon entrance fee",
          "Drinks at lunch",
          "Water gun rental",
          "Photos",
          "No obligation to purchase any extras",
        ]
      : [
          "Zipline",
          "Rafting",
          "Saklıkent Kanyonu giriş ücreti",
          "Öğle yemeğindeki içecekler",
          "Su tabancası kiralama",
          "Fotoğraflar",
          "Ekstra hizmetleri satın alma zorunluluğu yoktur",
        ],

    notesTitle: isEn ? "What to Bring & Important Notes" : "Yanınıza Alınacaklar ve Önemli Notlar",
    notesList: isEn
      ? [
          "Spare clothes",
          "Swimsuit",
          "Towel",
          "Sandals or beach shoes",
          "Plastic bag or waterproof phone case",
          "Guests may bring their own water guns",
          "Not recommended for guests who dislike water fights",
        ]
      : [
          "Yedek kıyafet",
          "Mayo",
          "Havlu",
          "Sandalet tipi terlik veya plaj ayakkabısı",
          "Telefon için plastik poşet veya su koruyucu kılıf",
          "Misafirler kendi su tabancasını getirebilir",
          "Su savaşını sevmeyen misafirler için tavsiye edilmez",
        ],

    bottomTitle: isEn
      ? "Not just a tour. A water battle."
  : "Sadece bir tur değil. Bir su savaşı.",
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
            "linear-gradient(180deg, rgba(20,18,15,0.78) 0%, rgba(20,18,15,0.48) 45%, rgba(20,18,15,0.80) 100%), url('/saklikent-hero.jpg')",
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
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Saklikent%20Canyon%20Safari"
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
              src="/saklikent-preview.jpg"
              alt="Saklikent Canyon Safari Preview"
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
            href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Saklikent%20Canyon%20Safari"
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
