"use client";

import React from "react";

export default function HomePage() {
  const [lang, setLang] = React.useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isEn = lang === "en";

  const t = {
   heroTop: isEn
  ? "5-STAR OFF-ROAD EXPERIENCE · FETHİYE"
  : "5 YILDIZLI OFF-ROAD DENEYİMİ · FETHİYE",

    heroTitle1: isEn ? "Life Begins" : "Hayat Başlar",
    heroTitle2: isEn ? "Where the Road" : "Yolun Bittiği",
    heroTitle3: isEn ? "Ends" : "Yerde",

    heroText: isEn
      ? "Real off-road fun, forest adventure and unforgettable holiday memories. From buggy safari to kids ATV, we turn dust into stories worth telling."
      : "Gerçek off-road eğlencesi, orman macerası ve unutulmaz tatil anıları. Buggy safari ve çocuk ATV deneyimiyle tozu hikâyeye dönüştürüyoruz.",

    viewMainTour: isEn ? "Explore Buggy Safari" : "Buggy Safariyi Keşfet",
    whatsappUs: isEn ? "WhatsApp Us" : "WhatsApp Yaz",

    licence: isEn ? "Driving licence required" : "Ehliyet gereklidir",
    forest: isEn ? "Forest off-road route" : "Orman off-road rotası",
    swim: isEn ? "1-hour beach swim stop" : "1 saat plaj yüzme molası",

    navHalf: isEn ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    navFull: isEn ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    navKids: isEn ? "Kids Quad Bike" : "Çocuk Quad Bike",
    navReserve: isEn ? "Reserve" : "Rezervasyon",
    navOther: isEn ? "Other Tours" : "Diğer Turlar",
    navContact: isEn ? "Contact" : "İletişim",
    navMenu: isEn ? "Menu" : "Menü",
    navClose: isEn ? "Close" : "Kapat",

    halfTitle: isEn ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    halfSlogan: isEn
      ? "More than a tour. A real drive."
      : "Bir turdan fazlası. Gerçek bir sürüş deneyimi.",
    halfText: isEn
      ? "Forest off-road driving, dust, adrenaline and a refreshing swim stop. Perfect balance between adventure and comfort."
      : "Orman off-road sürüşü, toz, adrenalin ve ferahlatıcı bir yüzme molası. Macera ile konforun ideal dengesi.",
    halfButton: isEn ? "View Details" : "Detayları Gör",

    fullTitle: isEn ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    fullSlogan: isEn
      ? "Half day for fun. Full day for discovery."
      : "Yarım gün eğlence için. Tam gün keşif için.",
    fullText: isEn
      ? "Mountains, hidden roads, ancient history and a long adventure route. A real expedition day for explorers."
      : "Dağlar, gizli yollar, antik tarih ve uzun macera rotası. Keşfetmeyi sevenler için gerçek bir tam gün deneyimi.",
    fullButton: isEn ? "View Details" : "Detayları Gör",

    kidsTitle: isEn ? "Kids Quad Bike" : "Çocuk Quad Bike",
    kidsSlogan: isEn
      ? "Little riders. Big smiles."
      : "Küçük sürücüler. Büyük gülümsemeler.",
    kidsText: isEn
      ? "A safe and exciting first off-road experience for children. Closed track, fun atmosphere and real adventure feeling."
      : "Çocuklar için güvenli ve heyecan verici ilk off-road deneyimi. Kapalı parkur, eğlenceli atmosfer ve gerçek macera hissi.",
    kidsButton: isEn ? "View Details" : "Detayları Gör",

    reservationTop: isEn ? "Reservation" : "Rezervasyon",
    reservationTitle: isEn
      ? <>Check Availability<br />& Reserve</>
: <>Müsaitliği Kontrol Et<br />ve Rezerve Et</>,
    reservationText: isEn
      ? "Our online booking area will appear here soon. Until then, you can reserve your place directly via WhatsApp and get quick confirmation from our team."
      : "Online rezervasyon alanımız çok yakında burada olacak. O zamana kadar WhatsApp üzerinden yerinizi ayırtabilir ve ekibimizden hızlı onay alabilirsiniz.",
    reservationPlaceholder: isEn
      ? "Bókun booking widget will be integrated here"
      : "Bókun rezervasyon bileşeni buraya entegre edilecek",
    askAvailability: isEn
      ? "Ask Availability on WhatsApp"
      : "WhatsApp’tan Müsaitlik Sor",

    otherTop: isEn ? "Other Tours" : "Diğer Turlar",
    otherTitle: isEn
      ? "More Ways to Explore Fethiye"
      : "Fethiye’yi Keşfetmenin Daha Fazla Yolu",
    otherText: isEn
      ? "Beyond buggy safari, we also help our guests enjoy the best of Fethiye and Ölüdeniz."
      : "Buggy safarinin yanında, misafirlerimizin Fethiye ve Ölüdeniz’in en güzel deneyimlerini yaşamasına da yardımcı oluyoruz.",
    askWhatsapp: isEn ? "Ask on WhatsApp →" : "WhatsApp’tan Sor →",

    reviewsTop: isEn ? "Guest Reviews" : "Misafir Yorumları",
    reviewsTitle: isEn
      ? "Rated 5 Stars by Happy Guests"
      : "Mutlu Misafirlerden 5 Yıldız",
    reviewsText: isEn
      ? "Real reviews. Real tours. Real dust. See why our guests love the Come and Drive experience."
      : "Gerçek yorumlar. Gerçek turlar. Gerçek toz. Misafirlerimizin Come and Drive deneyimini neden sevdiğini görün.",
    readReviews: isEn ? "Read Reviews" : "Yorumları Oku",

    contactTitle: "COME & DRIVE",
    contactText: isEn
      ? "Official travel agency in Fethiye / Ölüdeniz. Buggy safari, kids ATV and unforgettable off-road experiences."
      : "Fethiye / Ölüdeniz’de resmi seyahat acentası. Buggy safari, çocuk ATV ve unutulmaz off-road deneyimleri.",
    contact: isEn ? "Contact" : "İletişim",
    followUs: isEn ? "Follow Us" : "Bizi Takip Et",

   otherToursList: isEn
  ? [
      "Airport Transfer",
      "Saklikent Canyon Safari",
      "Ölüdeniz Boat Trip",
      "Horse Riding",
      "Private Boat Tour",
      "Paragliding",
    "Quad Safari vs Buggy Safari",
     
    ]
  : [
      "Havalimanı Transferi",
      "Saklıkent Kanyon Safari",
      "Ölüdeniz Tekne Turu",
      "At Turu",
      "Özel Tekne Turu",
      "Yamaç Paraşütü",
    "ATV Turu ve Buggy Safari Farkları",
      
    ],
  };

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "clamp(24px, 5vw, 32px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  };

  const navLinkStyle: React.CSSProperties = {
    color: "#fff",
    textDecoration: "none",
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17" }}>
      <div id="top"></div>
      <section
        style={{
          minHeight: "min(100vh, 900px)",
          backgroundImage:
            "linear-gradient(180deg, rgba(20,18,15,0.55) 0%, rgba(20,18,15,0.35) 60%, rgba(20,18,15,0.75) 100%), url('/hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          padding: "24px 20px 60px",
          display: "flex",
flexDirection: "column",
justifyContent: "center",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: "8px",
            zIndex: 100,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "clamp(10px, 2vw, 14px) clamp(12px, 3vw, 18px)",
            borderRadius: "18px",
            background: "rgba(20,18,15,0.45)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto auto",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(18px, 4vw, 26px)",
                  fontWeight: 500,
                  letterSpacing: "2px",
                }}
              >
                COME & DRIVE
              </div>

              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "3px",
                  opacity: 0.85,
                  marginTop: "4px",
                }}
              >
                TRAVEL AGENCY
              </div>
            </div>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <button
                onClick={() => setLang("en")}
                style={{
                  background: isEn ? "#fff" : "transparent",
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: isEn ? "#1f1a17" : "#fff",
                  padding: "4px 10px",
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
                  padding: "4px 10px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                TR
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.navClose : t.navMenu}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                background: "transparent",
                color: "#fff",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {isMobileMenuOpen ? "×" : "☰"}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div
              style={{
                marginTop: "14px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <a href="#half-day" onClick={closeMobileMenu} style={navLinkStyle}>
                {t.navHalf}
              </a>
              <a href="#full-day" onClick={closeMobileMenu} style={navLinkStyle}>
                {t.navFull}
              </a>
              <a href="#kids-quad" onClick={closeMobileMenu} style={navLinkStyle}>
                {t.navKids}
              </a>
              <a href="#reservation" onClick={closeMobileMenu} style={navLinkStyle}>
                {t.navReserve}
              </a>
              <a href="#other-tours" onClick={closeMobileMenu} style={navLinkStyle}>
                {t.navOther}
              </a>
              <a href="#contact" onClick={closeMobileMenu} style={navLinkStyle}>
                {t.navContact}
              </a>

              <a
                href="https://wa.me/905446358280"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  textDecoration: "none",
                  alignSelf: "flex-start",
                }}
              >
                WhatsApp
              </a>
            </div>
          )}
        </header>

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", marginTop: "40px" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              opacity: 0.9,
              marginBottom: "14px",
            }}
          >
            {t.heroTop}
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 8vw, 64px)",
              lineHeight: 1.05,
              margin: "0 0 20px",
              fontWeight: 700,
            }}
          >
            {t.heroTitle1}
            <br />
            {t.heroTitle2}
            <br />
            {t.heroTitle3}
          </h1>

          <p
            style={{
              maxWidth: "520px",
              fontSize: "clamp(16px, 3.7vw, 18px)",
              lineHeight: 1.6,
              opacity: 0.95,
              marginBottom: "28px",
            }}
          >
            {t.heroText}
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#half-day"
              style={{
                background: "#fff",
                color: "#000",
                padding: "14px 26px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {t.viewMainTour}
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
              {t.whatsappUs}
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#ffffff",
          padding: "32px 20px",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "15px",
            fontWeight: 600,
            color: "#1f1a17",
            textAlign: "center",
          }}
        >
          <div style={{ flex: 1, minWidth: "220px" }}>🚗 {t.licence}</div>
          <div style={{ flex: 1, minWidth: "220px" }}>🌲 {t.forest}</div>
          <div style={{ flex: 1, minWidth: "220px" }}>🌊 {t.swim}</div>
        </div>
      </section>

      <section
        id="half-day"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ fontSize: "clamp(28px, 8vw, 36px)", marginBottom: "12px" }}>
            {t.halfTitle}
          </h2>

          <div
            style={{
              fontSize: "clamp(18px, 5vw, 20px)",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
            }}
          >
            {t.halfSlogan}
          </div>

          <p
            style={{
              maxWidth: "620px",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.7,
              opacity: 0.8,
            }}
          >
            {t.halfText}
          </p>

          <a
            href="/buggy-half-day"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#25D366",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            {t.halfButton}
          </a>
        </div>
      </section>

      <section
        id="full-day"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ fontSize: "clamp(28px, 8vw, 36px)", marginBottom: "12px" }}>
            {t.fullTitle}
          </h2>

          <div
            style={{
              fontSize: "clamp(18px, 5vw, 20px)",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
            }}
          >
            {t.fullSlogan}
          </div>

          <p
            style={{
              maxWidth: "620px",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.7,
              opacity: 0.8,
            }}
          >
            {t.fullText}
          </p>

          <a
            href="/buggy-full-day"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#25D366",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            {t.fullButton}
          </a>
        </div>
      </section>

      <section
        id="kids-quad"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px 80px",
        }}
      >
        <div style={cardStyle}>
          <h2
            style={{
              fontSize: "clamp(28px, 8vw, 36px)",
              marginBottom: "14px",
              color: "#1f1a17",
            }}
          >
            {t.kidsTitle}
          </h2>

          <div
            style={{
              fontSize: "clamp(18px, 5vw, 20px)",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
              color: "#5f554d",
            }}
          >
            {t.kidsSlogan}
          </div>

          <p
            style={{
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.7,
              color: "#5f554d",
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            {t.kidsText}
          </p>

          <a
            href="/kids-quad-bike"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {t.kidsButton}
          </a>
        </div>
      </section>

      <section
  id="reservation"
  style={{
    padding: "60px 20px 80px",
    background: "#ffffff",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <p
      style={{
        fontSize: "14px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#6b625b",
        marginBottom: "12px",
      }}
    >
      {t.reservationTop}
    </p>

    <h2
      style={{
        fontSize: "clamp(32px, 8vw, 40px)",
        marginBottom: "16px",
        color: "#1f1a17",
      }}
    >
      {isEn ? (
        <>
          Choose Your Tour
          <br />& Reserve Online
        </>
      ) : (
        <>
          Turunu Seç
          <br />ve Online Rezerve Et
        </>
      )}
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto 18px",
        fontSize: "clamp(16px, 4vw, 18px)",
        lineHeight: 1.7,
        color: "#5f554d",
      }}
    >
      {isEn
        ? "Select the experience that fits your holiday best and continue to the secure online booking page."
        : "Tatilinize en uygun deneyimi seçin ve güvenli online rezervasyon sayfasına devam edin."}
    </p>

    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 16px",
        borderRadius: "999px",
        background: "#f7f4ee",
        border: "1px solid #e6ddd2",
        marginBottom: "34px",
        color: "#6b625b",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      <span style={{ fontSize: "16px" }}>✓</span>
      <span>
        {isEn
          ? "Online booking powered by Bokun"
          : "Online rezervasyon Bokun altyapısıyla çalışır"}
      </span>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          background: "#f7f4ee",
          border: "1px solid #e6ddd2",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#8a7f74",
            marginBottom: "12px",
          }}
        >
          {isEn ? "Most Popular" : "En Popüler"}
        </div>

        <h3
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "24px",
            color: "#1f1a17",
          }}
        >
          {t.halfTitle}
        </h3>

        <p
          style={{
            margin: "0 0 18px",
            color: "#5f554d",
            lineHeight: 1.7,
            fontSize: "16px",
          }}
        >
          {t.halfText}
        </p>

        <a
          href="/buggy-half-day"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {isEn ? "Check Availability" : "Müsaitliği Kontrol Et"}
        </a>
      </div>

      <div
        style={{
          background: "#f7f4ee",
          border: "1px solid #e6ddd2",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#8a7f74",
            marginBottom: "12px",
          }}
        >
          {isEn ? "Weekend Experience" : "Hafta Sonu Deneyimi"}
        </div>

        <h3
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "24px",
            color: "#1f1a17",
          }}
        >
          {t.fullTitle}
        </h3>

        <p
          style={{
            margin: "0 0 18px",
            color: "#5f554d",
            lineHeight: 1.7,
            fontSize: "16px",
          }}
        >
          {t.fullText}
        </p>

        <a
          href="/buggy-full-day"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {isEn ? "Check Availability" : "Müsaitliği Kontrol Et"}
        </a>
      </div>

      <div
        style={{
          background: "#f7f4ee",
          border: "1px solid #e6ddd2",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#8a7f74",
            marginBottom: "12px",
          }}
        >
          {isEn ? "Family Favourite" : "Aile Favorisi"}
        </div>

        <h3
          style={{
            marginTop: 0,
            marginBottom: "10px",
            fontSize: "24px",
            color: "#1f1a17",
          }}
        >
          {t.kidsTitle}
        </h3>

        <p
          style={{
            margin: "0 0 18px",
            color: "#5f554d",
            lineHeight: 1.7,
            fontSize: "16px",
          }}
        >
          {t.kidsText}
        </p>

        <a
          href="/kids-quad-bike"
          style={{
            display: "inline-block",
            background: "#25D366",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          {isEn ? "Check Availability" : "Müsaitliği Kontrol Et"}
        </a>
      </div>
    </div>

    <p
      style={{
        marginTop: "28px",
        fontSize: "14px",
        color: "#7a6f65",
        lineHeight: 1.7,
      }}
    >
      {isEn
        ? "Each tour opens its own live Bokun booking calendar on the detail page."
        : "Her turun kendi canlı Bokun rezervasyon takvimi detay sayfasında açılır."}
    </p>
  </div>
</section>

      <section
        id="other-tours"
        style={{
          padding: "80px 20px",
          background: "#efe7dc",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#6b625b",
              marginBottom: "12px",
            }}
          >
            {t.otherTop}
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 8vw, 40px)",
              marginBottom: "16px",
              color: "#1f1a17",
            }}
          >
            {t.otherTitle}
          </h2>

          <p
            style={{
              maxWidth: "720px",
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.7,
              color: "#5f554d",
              marginBottom: "32px",
            }}
          >
            {t.otherText}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {t.otherToursList.map((tour) => (
              <div
                key={tour}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
                style={{
  background: "#fff",
  borderRadius: "20px",
  padding: "28px",
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
  transition: "all 0.25s ease",
  cursor: "pointer",
}}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "12px",
                    fontSize: "clamp(20px, 5vw, 22px)",
                    color: "#1f1a17",
                  }}
                >
                  {tour}
                </h3>

                <a
                  href={
                    tour === "Airport Transfer" || tour === "Havalimanı Transferi"
                      ? "/airport-transfer"
                      : tour === "Saklikent Canyon Safari" || tour === "Saklıkent Kanyon Safari"
                      ? "/saklikent-canyon-safari"
                      : tour === "Ölüdeniz Boat Trip" || tour === "Ölüdeniz Tekne Turu"
                      ? "/oludeniz-boat-trip"
                      : tour === "Horse Riding" || tour === "At Turu"
                      ? "/horse-riding"
                      : tour === "Private Boat Tour" || tour === "Özel Tekne Turu"
                      ? "/private-boat-tour"
                      : tour === "Paragliding" || tour === "Yamaç Paraşütü"
                      ? "/paragliding" 
                    : tour === "Quad Safari vs Buggy Safari" || tour === "ATV Turu ve Buggy Safari Farkları"
? "/quad-bike-fethiye"
                   
                      : `https://wa.me/905446358280?text=Hello%20I%20want%20to%20get%20information%20about%20${encodeURIComponent(
                          tour
                        )}`
                  }
                  style={{
                    display: "inline-block",
marginTop: "10px",
padding: "10px 14px",
borderRadius: "999px",
background: "#f3eee6",
color: "#1f1a17",
fontWeight: 600,
textDecoration: "none",
                  }}
                >
                  {tour === "Airport Transfer" ||
                  tour === "Havalimanı Transferi" ||
                  tour === "Saklikent Canyon Safari" ||
                  tour === "Saklıkent Kanyon Safari" ||
                  tour === "Ölüdeniz Boat Trip" ||
                  tour === "Ölüdeniz Tekne Turu" ||
                  tour === "Horse Riding" ||
                  tour === "At Turu" ||
                  tour === "Private Boat Tour" ||
                  tour === "Özel Tekne Turu" ||
                  tour === "Paragliding" ||
                  tour === "Yamaç Paraşütü" || 
                    tour === "Quad Safari vs Buggy Safari" ||
tour === "ATV Turu ve Buggy Safari Farkları"
                    ? isEn
                      ? "View Details"
                      : "Detayları Gör"
                    : t.askWhatsapp}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "60px 20px",
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#6b625b",
              marginBottom: "12px",
            }}
          >
            {t.reviewsTop}
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 8vw, 34px)",
              marginBottom: "14px",
              color: "#1f1a17",
            }}
          >
            {t.reviewsTitle}
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 1.7,
              color: "#5f554d",
              maxWidth: "720px",
              margin: "0 auto 26px",
            }}
          >
            {t.reviewsText}
          </p>

          <a
            href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#34E0A1",
              color: "#000",
              padding: "14px 22px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            {t.readReviews}
          </a>
        </div>
      </section>

      <section
        id="contact"
        style={{
          background: "#1f1a17",
          color: "#fff",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <h2 style={{ marginTop: 0 }}>{t.contactTitle}</h2>
            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{t.contactText}</p>
          </div>

          <div>
            <h3>{t.contact}</h3>
            <p>
              <a
                href="https://wa.me/905446358280"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                WhatsApp: +90 544 635 82 80
              </a>
            </p>
            <p>
        <a
  href="mailto:info@fethiyebuggy.com"
  style={{ color: "#fff", textDecoration: "none" }}
>
  info@fethiyebuggy.com
</a>
            </p>
            <p style={{ marginTop: "20px", opacity: 0.7 }}>
              TÜRSAB A-Group Travel Agency — License No: 11387
            </p>
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>

  <a href="/cancellation-policy" style={{ color: "#fff", textDecoration: "none", opacity: 0.85 }}>
    Cancellation Policy / İptal Politikası
  </a>

  <a href="/privacy-policy" style={{ color: "#fff", textDecoration: "none", opacity: 0.85 }}>
    Privacy Policy / Gizlilik Politikası
  </a>

  <a href="/terms" style={{ color: "#fff", textDecoration: "none", opacity: 0.85 }}>
    Terms & Conditions / Kullanım Şartları
  </a>

  <a href="/distance-sales-agreement" style={{ color: "#fff", textDecoration: "none", opacity: 0.85 }}>
    Distance Sales Agreement / Mesafeli Satış Sözleşmesi
  </a>
</div>
          </div>

          <div>
            <h3>{t.followUs}</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <a
                href="https://www.instagram.com/comeanddrive"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#E4405F",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/comendrivetravel"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#1877F2",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#34E0A1",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M32 20c-6.2 0-11.3 4.2-12.8 9.8-1.5-5.6-6.6-9.8-12.8-9.8C2.9 20 0 22.9 0 26.4c0 3.2 2.4 5.9 5.5 6.3C7 38.3 12.4 42 18.7 42c6.2 0 11.6-3.7 13.3-9 1.7 5.3 7.1 9 13.3 9 6.3 0 11.7-3.7 13.2-9.3 3.2-.4 5.5-3.1 5.5-6.3 0-3.5-2.9-6.4-6.4-6.4-6.2 0-11.3 4.2-12.8 9.8C43.3 24.2 38.2 20 32 20zm-13.3 16c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9zm26.6 0c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path>
                  <circle cx="18.7" cy="29.1" r="2.5" fill="#1f1a17"></circle>
                  <circle cx="45.3" cy="29.1" r="2.5" fill="#1f1a17"></circle>
                  <path d="M32 38c-3.6 0-6.5 2.4-7.4 5.7h14.8C38.5 40.4 35.6 38 32 38z"></path>
                </svg>
                <span>Tripadvisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <a
  href="#top"
  style={{
    position: "fixed",
    left: "12px",
    bottom: "12px",
    background: "#ffffff",
    color: "#1f1a17",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "999px",
    fontWeight: 700,
    fontSize: "13px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    zIndex: 50,
  }}
>
  {isEn ? "↑ Top" : "↑ Başa dön"}
</a>

      <a
        href="https://wa.me/905446358280"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "12px",
bottom: "12px",
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          padding: "10px 14px",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "13px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          zIndex: 50,
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
