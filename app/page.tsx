"use client";

import React from "react";

export default function HomePage() {
  const [lang, setLang] = React.useState("en");

  const isEn = lang === "en";

  const t = {
    heroTop: isEn
      ? "5-STAR GUEST SATISFACTION · ÖLÜDENİZ / FETHİYE"
      : "5 YILDIZLI MİSAFİR MEMNUNİYETİ · ÖLÜDENİZ / FETHİYE",

    heroTitle1: isEn ? "Life Begins" : "Hayat Başlar",
    heroTitle2: isEn ? "Where the Road" : "Yolun Bittiği",
    heroTitle3: isEn ? "Ends" : "Yerde",

    heroText: isEn
      ? "Real off-road fun, forest adventure and unforgettable holiday memories. From buggy safari to kids ATV, we turn dust into stories worth telling."
      : "Gerçek off-road eğlencesi, orman macerası ve unutulmaz tatil anıları. Buggy safari ve çocuk ATV deneyimiyle tozu hikâyeye dönüştürüyoruz.",

    viewMainTour: isEn ? "View Main Tour" : "Ana Turu Gör",
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
    kidsTag1: isEn ? "50 minutes" : "50 dakika",
    kidsTag2: isEn ? "Closed track" : "Kapalı parkur",
    kidsTag3: isEn ? "For children" : "Çocuklar için",
    kidsButton: isEn ? "View Details" : "Detayları Gör",

    reservationTop: isEn ? "Reservation" : "Rezervasyon",
    reservationTitle: isEn
      ? "Check Availability & Reserve"
      : "Müsaitliği Kontrol Et ve Rezerve Et",
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
        ]
      : [
          "Havalimanı Transferi",
          "Saklıkent Kanyon Safari",
          "Ölüdeniz Tekne Turu",
          "At Turu",
          "Özel Tekne Turu",
          "Yamaç Paraşütü",
        ],
  };

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
  };

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17" }}>
      <section
        style={{
          minHeight: "100vh",
    backgroundImage:
  "linear-gradient(180deg, rgba(20,18,15,0.55) 0%, rgba(20,18,15,0.35) 60%, rgba(20,18,15,0.75) 100%), url('/hero.jpg')",
backgroundPosition: "center",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
          color: "#fff",
          padding: "24px 20px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: "12px",
            zIndex: 100,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            padding: "14px 18px",
            borderRadius: "18px",
            background: "rgba(20,18,15,0.45)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <div
              style={{
                fontSize: "26px",
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

          <nav
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              fontSize: "13px",
              alignItems: "center",
            }}
          >
            <a href="#half-day" style={{ color: "#fff", textDecoration: "none" }}>
              {t.navHalf}
            </a>
            <a href="#full-day" style={{ color: "#fff", textDecoration: "none" }}>
              {t.navFull}
            </a>
            <a href="#kids-quad" style={{ color: "#fff", textDecoration: "none" }}>
              {t.navKids}
            </a>
            <a href="#reservation" style={{ color: "#fff", textDecoration: "none" }}>
              {t.navReserve}
            </a>
            <a href="#other-tours" style={{ color: "#fff", textDecoration: "none" }}>
              {t.navOther}
            </a>
            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
              {t.navContact}
            </a>
          </nav>

          <a
            href="https://wa.me/905446358280"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            WhatsApp
          </a>
        </header>

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              fontSize: "64px",
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
              fontSize: "18px",
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
                padding: "12px 22px",
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
                padding: "12px 22px",
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
          <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>{t.halfTitle}</h2>

          <div
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
            }}
          >
            {t.halfSlogan}
          </div>

          <p style={{ maxWidth: "620px", fontSize: "18px", opacity: 0.8 }}>
            {t.halfText}
          </p>

          <a
            href="/buggy-half-day"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#1f1a17",
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
          <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>{t.fullTitle}</h2>

          <div
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
            }}
          >
            {t.fullSlogan}
          </div>

          <p style={{ maxWidth: "620px", fontSize: "18px", opacity: 0.8 }}>
            {t.fullText}
          </p>

          <a
            href="/buggy-full-day"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#1f1a17",
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
          <h2 style={{ fontSize: "36px", marginBottom: "14px", color: "#1f1a17" }}>
            {t.kidsTitle}
          </h2>

          <div
            style={{
              fontSize: "20px",
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
              fontSize: "18px",
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
          padding: "80px 20px",
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

          <h2 style={{ fontSize: "40px", marginBottom: "16px", color: "#1f1a17" }}>
            {t.reservationTitle}
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 30px",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#5f554d",
            }}
          >
            {t.reservationText}
          </p>

          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "36px 24px",
              border: "2px dashed #d8d0c6",
              borderRadius: "24px",
              background: "#f7f4ee",
            }}
          >
            <p style={{ margin: "0 0 18px", fontSize: "18px", color: "#7a6f65" }}>
              {t.reservationPlaceholder}
            </p>

            <a
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20check%20availability%20for%20a%20tour"
              target="_blank"
              rel="noreferrer"
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
              {t.askAvailability}
            </a>
          </div>
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

          <h2 style={{ fontSize: "40px", marginBottom: "16px", color: "#1f1a17" }}>
            {t.otherTitle}
          </h2>

          <p
            style={{
              maxWidth: "720px",
              fontSize: "18px",
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
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "12px",
                    fontSize: "22px",
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
      : `https://wa.me/905446358280?text=Hello%20I%20want%20to%20get%20information%20about%20${encodeURIComponent(
          tour
        )}`
  }
  style={{
    display: "inline-block",
    marginTop: "8px",
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
  tour === "Ölüdeniz Tekne Turu"
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

          <h2 style={{ fontSize: "34px", marginBottom: "14px", color: "#1f1a17" }}>
            {t.reviewsTitle}
          </h2>

          <p
            style={{
              fontSize: "18px",
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
                href="mailto:comendrive@gmail.com"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                comendrive@gmail.com
              </a>
            </p>
            <p style={{ marginTop: "20px", opacity: 0.7 }}>
              TÜRSAB A-Group Travel Agency — License No: 11387
            </p>
          </div>

          <div>
            <h3>{t.followUs}</h3>
            <p>
              <a
                href="https://www.instagram.com/comeanddrive"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#E4405F", textDecoration: "none", fontWeight: 600 }}
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/comendrivetravel"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1877F2", textDecoration: "none", fontWeight: 600 }}
              >
                Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#34E0A1", textDecoration: "none", fontWeight: 600 }}
              >
                Tripadvisor
              </a>
            </p>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/905446358280"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          background: "#25D366",
          color: "#fff",
          textDecoration: "none",
          padding: "14px 18px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          zIndex: 50,
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
