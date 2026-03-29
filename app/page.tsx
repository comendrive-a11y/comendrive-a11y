"use client";

import React from "react";

export default function HomePage() {
  const [lang, setLang] = React.useState("en");

  const t = {
    halfGalleryTop: lang === "en" ? "Half Day Experience" : "Yarım Gün Deneyimi",

halfGalleryTitle:
  lang === "en"
    ? "Buggy Safari Half Day Adventure"
    : "Buggy Safari Yarım Gün Macerası",

halfGallerySubtitle:
  lang === "en"
    ? "35 km of real forest off-road driving + 1-hour swim stop at Gemiler Beach."
    : "35 km gerçek orman off-road sürüşü + Gemiler Beach’te 1 saat yüzme molası.",

halfGallerySlogan:
  lang === "en"
    ? "More than a tour. A real drive."
    : "Bir turdan fazlası. Gerçek bir sürüş deneyimi.",

halfDayDetailsTitle: lang === "en" ? "Tour Details" : "Tur Detayları",
halfDayDaysTitle: lang === "en" ? "Tour Days & Times" : "Tur Günleri ve Saatleri",
halfDayIncludedTitle: lang === "en" ? "Included in Price" : "Fiyata Dahil Olanlar",
halfDayExtraTitle: lang === "en" ? "Extra Charges" : "Ekstra Ücretli Olanlar",
halfDayRulesTitle: lang === "en" ? "Participation Rules" : "Katılım Şartları",
halfDayWhyTitle:
  lang === "en" ? "Why Choose This Tour?" : "Bu Turu Neden Seçmelisiniz?",

halfDayLocation:
  lang === "en" ? "Start point: Hisarönü – Fethiye" : "Başlangıç: Hisarönü – Fethiye",
halfDayDuration:
  lang === "en" ? "Duration: 3.5 hours" : "Süre: 3,5 saat",
halfDayDistance:
  lang === "en" ? "Total route: 35 km off-road" : "Toplam rota: 35 km off-road",
halfDaySwim:
  lang === "en"
    ? "Swim stop: Gemiler Beach (entry included)"
    : "Yüzme molası: Gemiler Beach (giriş dahil)",
halfDayVehicle:
  lang === "en"
    ? "Vehicle: 550cc automatic Mud Monster buggy"
    : "Araç: 550cc otomatik Mud Monster buggy",
halfDaySeats:
  lang === "en"
    ? "2 people can ride together in the same buggy"
    : "Aynı araçta 2 kişi birlikte sürüş yapabilir",

halfDayEasy:
  lang === "en"
    ? "Easy to drive. No previous experience needed."
    : "Sürmesi kolaydır. Önceden deneyim gerektirmez.",

halfDaySchedule1:
  lang === "en"
    ? "Monday – Friday (every weekday)"
    : "Pazartesi – Cuma (hafta içi her gün)",
halfDaySchedule2:
  lang === "en"
    ? "Morning tour: 09:00 – 12:30"
    : "Sabah turu: 09:00 – 12:30",
halfDaySchedule3:
  lang === "en"
    ? "Afternoon tour: 14:00 – 17:30"
    : "Öğleden sonra turu: 14:00 – 17:30",
halfDaySchedule4:
  lang === "en"
    ? "Weekend is reserved for Babadağ Exclusive Full Day."
    : "Hafta sonları Babadağ Exclusive Full Day turu yapılmaktadır.",

halfDayInc1:
  lang === "en" ? "550cc buggy vehicle" : "550cc buggy aracı",
halfDayInc2:
  lang === "en" ? "Guiding service" : "Rehberlik hizmeti",
halfDayInc3:
  lang === "en" ? "Activity insurance" : "Aktivite sigortası",
halfDayInc4:
  lang === "en" ? "Protective goggles" : "Koruyucu gözlük",
halfDayInc5:
  lang === "en" ? "1 bottle of water" : "1 şişe su",
halfDayInc6:
  lang === "en" ? "Gemiler Beach entrance fee" : "Gemiler Beach giriş ücreti",
halfDayInc7:
  lang === "en" ? "1-hour swim stop" : "1 saat yüzme molası",

halfDayEx1:
  lang === "en" ? "Bandana (optional)" : "Bandana (isteğe bağlı)",
halfDayEx2:
  lang === "en" ? "Personal beach expenses" : "Plaj harcamaları",
halfDayEx3:
  lang === "en" ? "Tour photos" : "Tur fotoğrafları",
halfDayEx4:
  lang === "en"
    ? "Around 80% of our guests choose the photo package."
    : "Misafirlerimizin yaklaşık %80’i tur fotoğraflarını tercih etmektedir.",

halfDayRule1:
  lang === "en" ? "Minimum driver age: 18" : "Minimum sürücü yaşı: 18",
halfDayRule2:
  lang === "en" ? "Driving licence required" : "Ehliyet zorunlu",
halfDayRule3:
  lang === "en"
    ? "Not suitable for children under 4"
    : "4 yaş altı çocuklar katılamaz",

halfDayWhy1:
  lang === "en"
    ? "35 km of real off-road route"
    : "35 km uzun gerçek off-road rota",
halfDayWhy2:
  lang === "en"
    ? "Forest driving experience"
    : "Orman içi sürüş deneyimi",
halfDayWhy3:
  lang === "en"
    ? "Swim break at Gemiler Beach"
    : "Gemiler Beach’te yüzme molası",
halfDayWhy4:
  lang === "en"
    ? "Side-by-side buggy vehicles"
    : "Side-by-side buggy araçlar",
halfDayWhy5:
  lang === "en"
    ? "Small group concept"
    : "Küçük grup konsepti",
halfDayWhy6:
  lang === "en"
    ? "Easy to drive for both women and men"
    : "Kadın ve erkek sürücüler için kolay kullanım",
    otherToursList:
  lang === "en"
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
    heroTop:
      lang === "en"
        ? "5-STAR GUEST SATISFACTION · ÖLÜDENİZ / FETHİYE"
        : "5 YILDIZLI MİSAFİR MEMNUNİYETİ · ÖLÜDENİZ / FETHİYE",

    heroTitle1: lang === "en" ? "Life Begins" : "Hayat Başlar",
    heroTitle2: lang === "en" ? "Where the Road" : "Yolun Bittiği",
    heroTitle3: lang === "en" ? "Ends" : "Yerde",

    heroText:
      lang === "en"
        ? "Real off-road fun, forest adventure and unforgettable holiday memories. From buggy safari to kids ATV, we turn dust into stories worth telling."
        : "Gerçek off-road eğlencesi, orman macerası ve unutulmaz tatil anıları. Buggy safari ve çocuk ATV deneyimiyle tozu hikâyeye dönüştürüyoruz.",

    viewMainTour: lang === "en" ? "View Main Tour" : "Ana Turu Gör",
    whatsappUs: lang === "en" ? "WhatsApp Us" : "WhatsApp Yaz",

    licence: lang === "en" ? "Driving licence required" : "Ehliyet gereklidir",
    forest: lang === "en" ? "Forest off-road route" : "Orman off-road rotası",
    swim: lang === "en" ? "1-hour beach swim stop" : "1 saat plaj yüzme molası",

    halfDayTitle: lang === "en" ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    halfDayText:
      lang === "en"
        ? "Forest off-road driving, dust, adrenaline and a refreshing swim stop. Perfect balance between adventure and comfort."
        : "Orman off-road sürüşü, toz, adrenalin ve ferahlatıcı bir yüzme molası. Macera ile konforun ideal dengesi.",
    bookHalf: lang === "en" ? "Book Half Day" : "Yarım Gün Rezervasyon",

    fullDayTitle: lang === "en" ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    fullDayText:
      lang === "en"
        ? "Mountains, hidden roads, Saklıkent canyon line and long adventure route. A real expedition day for explorers."
        : "Dağlar, gizli yollar, Saklıkent kanyon hattı ve uzun macera rotası. Keşfetmeyi sevenler için gerçek bir tam gün deneyimi.",
    bookFull: lang === "en" ? "Book Full Day" : "Tam Gün Rezervasyon",

    kidsTitle: lang === "en" ? "Kids Quad Bike" : "Çocuk Quad Bike",
    kidsText:
      lang === "en"
        ? "A safe and exciting first off-road experience for children. 50 minutes on a closed track, full of fun, smiles and real adventure feeling."
        : "Çocuklar için güvenli ve heyecan verici ilk off-road deneyimi. Kapalı parkurda 50 dakika; eğlence, gülümseme ve gerçek macera hissi dolu.",
    kidsTag1: lang === "en" ? "50 minutes" : "50 dakika",
    kidsTag2: lang === "en" ? "Closed track" : "Kapalı parkur",
    kidsTag3: lang === "en" ? "For children" : "Çocuklar için",
    kidsBook: lang === "en" ? "Book Kids Quad Bike" : "Çocuk Quad Rezervasyon",

    reservationTop: lang === "en" ? "Reservation" : "Rezervasyon",
    reservationTitle:
      lang === "en" ? "Check Availability & Reserve" : "Müsaitliği Kontrol Et ve Rezerve Et",
    reservationText:
      lang === "en"
        ? "Our online booking area will appear here soon. Until then, you can reserve your place directly via WhatsApp and get quick confirmation from our team."
        : "Online rezervasyon alanımız çok yakında burada olacak. O zamana kadar WhatsApp üzerinden yerinizi ayırtabilir ve ekibimizden hızlı onay alabilirsiniz.",
    reservationPlaceholder:
      lang === "en"
        ? "Bókun booking widget will be integrated here"
        : "Bókun rezervasyon bileşeni buraya entegre edilecek",
    askAvailability:
      lang === "en" ? "Ask Availability on WhatsApp" : "WhatsApp’tan Müsaitlik Sor",

    otherTop: lang === "en" ? "Other Tours" : "Diğer Turlar",
    otherTitle:
      lang === "en" ? "More Ways to Explore Fethiye" : "Fethiye’yi Keşfetmenin Daha Fazla Yolu",
    otherText:
      lang === "en"
        ? "Beyond buggy safari, we also help our guests enjoy the best of Fethiye and Ölüdeniz. Choose from our most popular extra experiences."
        : "Buggy safarinin yanında, misafirlerimizin Fethiye ve Ölüdeniz’in en güzel deneyimlerini yaşamasına da yardımcı oluyoruz. En popüler ek turlarımızı keşfedin.",
    askWhatsapp: lang === "en" ? "Ask on WhatsApp →" : "WhatsApp’tan Sor →",

    reviewsTop: lang === "en" ? "Guest Reviews" : "Misafir Yorumları",
    reviewsTitle:
      lang === "en" ? "Rated 5 Stars by Happy Guests" : "Mutlu Misafirlerden 5 Yıldız",
    reviewsText:
      lang === "en"
        ? "Real reviews. Real tours. Real dust. See why our guests love the Come and Drive experience."
        : "Gerçek yorumlar. Gerçek turlar. Gerçek toz. Misafirlerimizin Come and Drive deneyimini neden sevdiğini görün.",
    readReviews: lang === "en" ? "Read Reviews" : "Yorumları Oku",

    contactTitle: "COME & DRIVE",
    contactText:
      lang === "en"
        ? "Official travel agency in Fethiye / Ölüdeniz. Buggy safari, kids ATV and unforgettable off-road experiences."
        : "Fethiye / Ölüdeniz’de resmi seyahat acentası. Buggy safari, çocuk ATV ve unutulmaz off-road deneyimleri.",

    contact: lang === "en" ? "Contact" : "İletişim",
    followUs: lang === "en" ? "Follow Us" : "Bizi Takip Et",

    navHalf: lang === "en" ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    navFull: lang === "en" ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    navKids: lang === "en" ? "Kids Quad Bike" : "Çocuk Quad Bike",
    navReserve: lang === "en" ? "Reserve" : "Rezervasyon",
    navOther: lang === "en" ? "Other Tours" : "Diğer Turlar",
    navContact: lang === "en" ? "Contact" : "İletişim",
  };

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17" }}>
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, rgba(20,18,15,0.55) 0%, rgba(20,18,15,0.35) 60%, rgba(20,18,15,0.75) 100%), url('/hero.jpg') center/cover no-repeat",
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
              fontFamily: "system-ui, sans-serif",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
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

          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? "#fff" : "transparent",
                border: "1px solid rgba(255,255,255,0.45)",
                color: lang === "en" ? "#1f1a17" : "#fff",
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
                background: lang === "tr" ? "#fff" : "transparent",
                border: "1px solid rgba(255,255,255,0.45)",
                color: lang === "tr" ? "#1f1a17" : "#fff",
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
            <a href="#half-day" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              {t.navHalf}
            </a>

            <a href="#full-day" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              {t.navFull}
            </a>

            <a href="#kids-quad" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              {t.navKids}
            </a>

            <a href="#reservation" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              {t.navReserve}
            </a>

            <a href="#other-tours" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              {t.navOther}
            </a>

            <a href="#contact" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
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
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            WhatsApp
          </a>
        </header>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
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
  <div style={{ marginBottom: "30px" }}>
    <h2 style={{ fontSize: "42px", marginBottom: "10px" }}>
      {t.halfDayTitle}
    </h2>

    <div
      style={{
        fontSize: "20px",
        fontStyle: "italic",
        opacity: 0.8,
        marginBottom: "20px",
      }}
    >
      {t.halfGallerySlogan}
    </div>

    <p style={{ fontSize: "20px", maxWidth: "720px" }}>
      {t.halfGallerySubtitle}
    </p>

    <p
      style={{
        fontSize: "16px",
        opacity: 0.75,
        marginTop: "20px",
        maxWidth: "720px",
        lineHeight: "1.6",
      }}
    >
      {t.halfDayText}
    </p>
  </div>

  <div
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "40px",
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
          background: "#e9e4dd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          opacity: 0.6,
        }}
      >
        Half Day Photo {i}
      </div>
    ))}
  </div>

  <a
    href="/buggy-half-day"
    style={{
      display: "inline-block",
      background: "#1f1a17",
      color: "#fff",
      padding: "14px 26px",
      borderRadius: "999px",
      textDecoration: "none",
      fontSize: "16px",
    }}
  >
    {t.bookHalf}
  </a>
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "34px",
  }}
>
  <div
    style={{
      background: "#ffffff",
      borderRadius: "24px",
      padding: "24px",
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
      {t.halfDayDetailsTitle}
    </h3>
    <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, color: "#5f554d" }}>
      <li>{t.halfDayLocation}</li>
      <li>{t.halfDayDuration}</li>
      <li>{t.halfDayDistance}</li>
      <li>{t.halfDaySwim}</li>
      <li>{t.halfDayVehicle}</li>
      <li>{t.halfDaySeats}</li>
      <li>{t.halfDayEasy}</li>
    </ul>
  </div>

  <div
    style={{
      background: "#ffffff",
      borderRadius: "24px",
      padding: "24px",
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
      {t.halfDayDaysTitle}
    </h3>
    <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, color: "#5f554d" }}>
      <li>{t.halfDaySchedule1}</li>
      <li>{t.halfDaySchedule2}</li>
      <li>{t.halfDaySchedule3}</li>
      <li>{t.halfDaySchedule4}</li>
    </ul>
  </div>

  <div
    style={{
      background: "#ffffff",
      borderRadius: "24px",
      padding: "24px",
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
      {t.halfDayIncludedTitle}
    </h3>
    <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, color: "#5f554d" }}>
      <li>{t.halfDayInc1}</li>
      <li>{t.halfDayInc2}</li>
      <li>{t.halfDayInc3}</li>
      <li>{t.halfDayInc4}</li>
      <li>{t.halfDayInc5}</li>
      <li>{t.halfDayInc6}</li>
      <li>{t.halfDayInc7}</li>
    </ul>
  </div>

  <div
    style={{
      background: "#ffffff",
      borderRadius: "24px",
      padding: "24px",
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
      {t.halfDayExtraTitle}
    </h3>
    <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, color: "#5f554d" }}>
      <li>{t.halfDayEx1}</li>
      <li>{t.halfDayEx2}</li>
      <li>{t.halfDayEx3}</li>
      <li>{t.halfDayEx4}</li>
    </ul>
  </div>

  <div
    style={{
      background: "#ffffff",
      borderRadius: "24px",
      padding: "24px",
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
      {t.halfDayRulesTitle}
    </h3>
    <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, color: "#5f554d" }}>
      <li>{t.halfDayRule1}</li>
      <li>{t.halfDayRule2}</li>
      <li>{t.halfDayRule3}</li>
    </ul>
  </div>

  <div
    style={{
      background: "#ffffff",
      borderRadius: "24px",
      padding: "24px",
    }}
  >
    <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
      {t.halfDayWhyTitle}
    </h3>
    <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8, color: "#5f554d" }}>
      <li>{t.halfDayWhy1}</li>
      <li>{t.halfDayWhy2}</li>
      <li>{t.halfDayWhy3}</li>
      <li>{t.halfDayWhy4}</li>
      <li>{t.halfDayWhy5}</li>
      <li>{t.halfDayWhy6}</li>
    </ul>
  </div>
</div>
</section>
 <section
  id="full-day"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
  }}
>
  <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>
    {t.fullDayTitle}
  </h2>

  <div
    style={{
      fontSize: "20px",
      fontStyle: "italic",
      opacity: 0.8,
      marginBottom: "20px",
    }}
  >
    {t.fullDaySlogan}
  </div>

  <p style={{ maxWidth: "520px", fontSize: "18px", opacity: 0.8 }}>
    {t.fullDayText}
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
    {t.bookFull}
  </a>
</section>

      <section
  id="kids-quad"
  style={{
    background: "#f8f5ef",
    padding: "80px 20px",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "42px", marginBottom: "10px", color: "#1f1a17" }}>
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
        {lang === "en"
          ? "Little riders. Big smiles."
          : "Küçük sürücüler. Büyük gülümsemeler."}
      </div>

      <p style={{ fontSize: "20px", maxWidth: "760px", color: "#1f1a17" }}>
        {lang === "en"
          ? "A safe first off-road adventure for children on the biggest closed kids ATV track in the city."
          : "Şehrin en büyük kapalı çocuk ATV parkurunda güvenli ilk off-road macerası."}
      </p>

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
        {lang === "en"
          ? "Children ride brand-new Yamaha 50cc ATVs on a 1.2 km closed track under guide supervision. The activity lasts 50 minutes and is designed for kids aged 6–14 with a maximum weight of 60 kg. Helmets are included, rear safety limiters are installed and parents can relax in the chilling zone while children enjoy a fun experience that also builds coordination and confidence."
          : "Çocuklar rehber eşliğinde 1.2 km kapalı parkurda yepyeni Yamaha 50cc ATV’lerle sürüş yapar. Aktivite 50 dakika sürer ve 6–14 yaş arası, maksimum 60 kg çocuklar için tasarlanmıştır. Kask dahildir, arka emniyet kilitleri vardır ve aileler chilling zone alanında dinlenirken çocuklar hem eğlenir hem de koordinasyon ve özgüven kazanır."}
      </p>
    </div>

    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "40px",
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
          {lang === "en"
            ? `Kids Quad Photo ${i}`
            : `Kids Quad Fotoğraf ${i}`}
        </div>
      ))}
    </div>

    <a
      href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20book%20Kids%20Quad%20Bike"
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
      {t.kidsBook}
    </a>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "24px",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
          {lang === "en" ? "Activity Details" : "Aktivite Detayları"}
        </h3>
        <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8 }}>
          <li>Yamaha 50cc ATVs</li>
          <li>{lang === "en" ? "Closed 1.2 km track" : "Kapalı 1.2 km parkur"}</li>
          <li>{lang === "en" ? "Guided ride" : "Rehberli sürüş"}</li>
          <li>{lang === "en" ? "50 minutes duration" : "50 dakika sürüş süresi"}</li>
          <li>{lang === "en" ? "Helmet included" : "Kask dahil"}</li>
        </ul>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "24px",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
          {lang === "en" ? "Daily Hours" : "Günlük Saatler"}
        </h3>
        <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8 }}>
          <li>10:00</li>
          <li>11:30</li>
          <li>15:00</li>
          <li>18:00</li>
        </ul>
      </div>

      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "24px",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>
          {lang === "en" ? "Participation Rules" : "Katılım Şartları"}
        </h3>
        <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.8 }}>
          <li>{lang === "en" ? "Age: 6–14" : "Yaş: 6–14"}</li>
          <li>{lang === "en" ? "Max weight: 60 kg" : "Maksimum kilo: 60 kg"}</li>
          <li>{lang === "en" ? "Designed only for children" : "Sadece çocuklar için tasarlanmıştır"}</li>
        </ul>
      </div>
    </div>
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

          <h2
            style={{
              fontSize: "40px",
              marginBottom: "16px",
              color: "#1f1a17",
            }}
          >
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
            <p
              style={{
                margin: "0 0 18px",
                fontSize: "18px",
                color: "#7a6f65",
              }}
            >
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

          <h2
            style={{
              fontSize: "40px",
              marginBottom: "16px",
              color: "#1f1a17",
            }}
          >
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
                  href={`https://wa.me/905446358280?text=Hello%20I%20want%20to%20get%20information%20about%20${encodeURIComponent(
                    tour
                  )}`}
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    color: "#1f1a17",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t.askWhatsapp}
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
              fontSize: "34px",
              marginBottom: "14px",
              color: "#1f1a17",
            }}
          >
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

          <div style={{ marginTop: "20px" }}>
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
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="Tripadvisor"
                style={{ height: "20px" }}
              />
              {t.readReviews}
            </a>
          </div>
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
                style={{
                  color: "#E4405F",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="https://cdn.simpleicons.org/instagram/E4405F"
                  alt="Instagram"
                  style={{ width: "20px", height: "20px" }}
                />
                Instagram
              </a>
            </p>

            <p>
              <a
                href="https://www.facebook.com/comendrivetravel"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#1877F2",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="https://cdn.simpleicons.org/facebook/1877F2"
                  alt="Facebook"
                  style={{ width: "20px", height: "20px" }}
                />
                Facebook
              </a>
            </p>

            <p>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#34E0A1",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="https://cdn.simpleicons.org/tripadvisor/34E0A1"
                  alt="Tripadvisor"
                  style={{ width: "20px", height: "20px" }}
                />
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
