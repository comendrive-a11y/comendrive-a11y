"use client";

import React from "react";

export default function HomePage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");

  const t = {
    heroTop:
      lang === "en"
        ? "5-STAR GUEST SATISFACTION · ÖLÜDENİZ / FETHIYE"
        : "5 YILDIZLI MİSAFİR MEMNUNİYETİ · ÖLÜDENİZ / FETHİYE",

    heroTitle1: lang === "en" ? "Life Begins" : "Hayat Başlar",
    heroTitle2: lang === "en" ? "Where the Road" : "Yolun Bittiği",
    heroTitle3: lang === "en" ? "Ends" : "Yerde",

    heroText:
      lang === "en"
        ? "Real off-road fun, forest adventure and unforgettable holiday memories. From buggy safari to kids quad bike, we turn dust into stories worth telling."
        : "Gerçek off-road eğlencesi, orman macerası ve unutulmaz tatil anıları. Buggy safari ve çocuk quad bike deneyimiyle tozu hikâyeye dönüştürüyoruz.",

    viewMainTour: lang === "en" ? "View Main Tour" : "Ana Turu Gör",
    whatsappUs: lang === "en" ? "WhatsApp Us" : "WhatsApp Yaz",

    navHalf: lang === "en" ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    navFull: lang === "en" ? "Buggy Safari Full Day" : "Buggy Safari Tam Gün",
    navKids: lang === "en" ? "Kids Quad Bike" : "Çocuk Quad Bike",
    navReserve: lang === "en" ? "Reserve" : "Rezervasyon",
    navOther: lang === "en" ? "Other Tours" : "Diğer Turlar",
    navContact: lang === "en" ? "Contact" : "İletişim",

    licence: lang === "en" ? "Driving licence required" : "Ehliyet gereklidir",
    forest: lang === "en" ? "Forest off-road route" : "Orman off-road rotası",
    swim: lang === "en" ? "1-hour beach swim stop" : "1 saat plaj yüzme molası",

    bringTitle: lang === "en" ? "What to Bring" : "Yanınızda Getirmeniz Gerekenler",
    bring1: lang === "en" ? "Driving licence" : "Ehliyet",
    bring2: lang === "en" ? "Sun glasses" : "Güneş gözlüğü",
    bring3: lang === "en" ? "Swim suit" : "Mayo / bikini",
    bring4: lang === "en" ? "Towel" : "Havlu",
    bring5:
      lang === "en"
        ? "Some money for drinks"
        : "İçecekler için bir miktar para",

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
    halfDayDuration: lang === "en" ? "Duration: 3.5 hours" : "Süre: 3,5 saat",
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
      lang === "en" ? "Monday – Friday (every weekday)" : "Pazartesi – Cuma (hafta içi her gün)",
    halfDaySchedule2:
      lang === "en" ? "Morning tour: 09:00 – 12:30" : "Sabah turu: 09:00 – 12:30",
    halfDaySchedule3:
      lang === "en"
        ? "Afternoon tour: 14:00 – 17:30"
        : "Öğleden sonra turu: 14:00 – 17:30",
    halfDaySchedule4:
      lang === "en"
        ? "Weekend is reserved for Babadağ Exclusive Full Day."
        : "Hafta sonları Babadağ Exclusive Full Day turu yapılmaktadır.",

    halfDayInc1: lang === "en" ? "550cc buggy vehicle" : "550cc buggy aracı",
    halfDayInc2: lang === "en" ? "Guiding service" : "Rehberlik hizmeti",
    halfDayInc3: lang === "en" ? "Activity insurance" : "Aktivite sigortası",
    halfDayInc4: lang === "en" ? "Protective goggles" : "Koruyucu gözlük",
    halfDayInc5: lang === "en" ? "1 bottle of water" : "1 şişe su",
    halfDayInc6:
      lang === "en" ? "Gemiler Beach entrance fee" : "Gemiler Beach giriş ücreti",
    halfDayInc7: lang === "en" ? "1-hour swim stop" : "1 saat yüzme molası",

    halfDayEx1: lang === "en" ? "Bandana (optional)" : "Bandana (isteğe bağlı)",
    halfDayEx2:
      lang === "en" ? "Personal beach expenses" : "Plaj harcamaları",
    halfDayEx3: lang === "en" ? "Tour photos" : "Tur fotoğrafları",
    halfDayEx4:
      lang === "en"
        ? "Around 80% of our guests choose the photo package."
        : "Misafirlerimizin yaklaşık %80’i tur fotoğraflarını tercih etmektedir.",

    halfDayRule1:
      lang === "en" ? "Minimum driver age: 18" : "Minimum sürücü yaşı: 18",
    halfDayRule2: lang === "en" ? "Driving licence required" : "Ehliyet zorunlu",
    halfDayRule3:
      lang === "en"
        ? "Not suitable for children under 4"
        : "4 yaş altı çocuklar katılamaz",

    halfDayWhy1:
      lang === "en" ? "35 km of real off-road route" : "35 km uzun gerçek off-road rota",
    halfDayWhy2:
      lang === "en" ? "Forest driving experience" : "Orman içi sürüş deneyimi",
    halfDayWhy3:
      lang === "en" ? "Swim break at Gemiler Beach" : "Gemiler Beach’te yüzme molası",
    halfDayWhy4:
      lang === "en" ? "Side-by-side buggy vehicles" : "Side-by-side buggy araçlar",
    halfDayWhy5:
      lang === "en" ? "Small group concept" : "Küçük grup konsepti",
    halfDayWhy6:
      lang === "en"
        ? "Easy to drive for both women and men"
        : "Kadın ve erkek sürücüler için kolay kullanım",

    fullDayTop: lang === "en" ? "Full Day Experience" : "Tam Gün Deneyimi",
    fullDayTitle:
      lang === "en"
        ? "Babadağ Exclusive Trip (Full Day)"
        : "Babadağ Exclusive Trip (Tam Gün)",
    fullDaySubtitle:
      lang === "en"
        ? "75 km exclusive mountain route, ancient city, hidden canyon views, premium lunch and beach swim stop."
        : "75 km özel dağ rotası, antik kent, hidden canyon manzarası, premium öğle yemeği ve plaj yüzme molası.",
    fullDaySlogan:
      lang === "en"
        ? "More distance. More views. More adventure."
        : "Daha uzun rota. Daha çok manzara. Daha fazla macera.",

    fullDayDetailsTitle: lang === "en" ? "Tour Details" : "Tur Detayları",
    fullDayDaysTitle: lang === "en" ? "Tour Days" : "Tur Günleri",
    fullDayIncludedTitle: lang === "en" ? "Included in Price" : "Fiyata Dahil Olanlar",
    fullDayExtraTitle: lang === "en" ? "Extra Charges" : "Ekstra Ücretli Olanlar",
    fullDayRulesTitle: lang === "en" ? "Participation Rules" : "Katılım Şartları",
    fullDayWhyTitle:
      lang === "en" ? "Why Choose This Tour?" : "Bu Turu Neden Seçmelisiniz?",

    fullDayLocation:
      lang === "en" ? "Start point: Hisarönü – Fethiye" : "Başlangıç: Hisarönü – Fethiye",
    fullDayDuration:
      lang === "en" ? "Full day experience" : "Tam gün deneyim",
    fullDayDistance:
      lang === "en" ? "Total route: 75 km" : "Toplam rota: 75 km",
    fullDayMountain:
      lang === "en"
        ? "Drive up to 1500 metres on Babadağ"
        : "Babadağ’da 1500 metreye kadar sürüş",
    fullDayStops:
      lang === "en"
        ? "Stops: Pınara Ancient City, Hidden Canyon, Butterfly Valley lunch, Kıdrak Beach swim stop"
        : "Duraklar: Pınara Antik Kenti, Hidden Canyon, Butterfly Valley öğle yemeği, Kıdrak Beach yüzme molası",
    fullDayDays1:
      lang === "en" ? "Saturday & Sunday only" : "Sadece Cumartesi & Pazar",

    fullDayInc1: lang === "en" ? "550cc buggy vehicle" : "550cc buggy aracı",
    fullDayInc2: lang === "en" ? "Guiding service" : "Rehberlik hizmeti",
    fullDayInc3: lang === "en" ? "Activity insurance" : "Aktivite sigortası",
    fullDayInc4: lang === "en" ? "Protective goggles" : "Koruyucu gözlük",
    fullDayInc5: lang === "en" ? "Unlimited water during the day" : "Gün boyu su",
    fullDayInc6:
      lang === "en" ? "Premium lunch (menu choice)" : "Premium öğle yemeği (menü seçmeli)",
    fullDayInc7:
      lang === "en" ? "Drinks during lunch" : "Yemek sırasında içecekler",
    fullDayInc8: lang === "en" ? "Beach entrance fee" : "Plaj giriş ücreti",
    fullDayInc9: lang === "en" ? "Tour photos" : "Tur fotoğrafları",

    fullDayEx1: lang === "en" ? "Bandana (optional)" : "Bandana (isteğe bağlı)",
    fullDayEx2:
      lang === "en" ? "Personal beach expenses" : "Plajdaki kişisel harcamalar",

    fullDayRule1:
      lang === "en" ? "Minimum driver age: 20" : "Minimum sürücü yaşı: 20",
    fullDayRule2:
      lang === "en" ? "Minimum passenger age: 6" : "Minimum yolcu yaşı: 6",
    fullDayRule3:
      lang === "en" ? "Driving licence required" : "Ehliyet zorunlu",
    fullDayRule4:
      lang === "en"
        ? "Recommended for experienced drivers"
        : "Deneyimli sürücüler için önerilir",
    fullDayRule5:
      lang === "en"
        ? "Not recommended for drivers with fear of heights"
        : "Yükseklik korkusu olan sürücüler için önerilmez",

    fullDayWhy1:
      lang === "en" ? "75 km exclusive off-road route" : "75 km özel off-road rota",
    fullDayWhy2:
      lang === "en"
        ? "Babadağ mountain drive up to 1500 m"
        : "Babadağ’da 1500 metreye kadar sürüş",
    fullDayWhy3:
      lang === "en" ? "Visit to Pınara Ancient City" : "Pınara Antik Kenti ziyareti",
    fullDayWhy4:
      lang === "en" ? "Photo break at Hidden Canyon" : "Hidden Canyon’da fotoğraf molası",
    fullDayWhy5:
      lang === "en"
        ? "Premium lunch with Butterfly Valley view"
        : "Butterfly Valley manzaralı premium öğle yemeği",
    fullDayWhy6:
      lang === "en"
        ? "1-hour swim stop at Kıdrak Beach"
        : "Kıdrak Beach’te 1 saat yüzme molası",
    fullDayWhy7:
      lang === "en"
        ? "Routes that ordinary tours do not use"
        : "Standart turların kullanmadığı özel yollar",

    kidsTitle: lang === "en" ? "Kids Quad Bike" : "Çocuk Quad Bike",
    kidsText:
      lang === "en"
        ? "A safe and exciting first off-road experience for children. 50 minutes on a closed track, full of fun, smiles and real adventure feeling."
        : "Çocuklar için güvenli parkurda 50 dakikalık eğlenceli bir off-road deneyimi. Tatilin en mutlu anları burada başlıyor.",
    kidsTag1: lang === "en" ? "50 minutes" : "50 dakika",
    kidsTag2: lang === "en" ? "Closed track" : "Kapalı parkur",
    kidsTag3: lang === "en" ? "For children" : "Çocuklar için",
    kidsBook:
      lang === "en" ? "Book Kids Quad Bike" : "Çocuk Quad Rezervasyon",

    reservationTop: lang === "en" ? "Reservation" : "Rezervasyon",
    reservationTitle:
      lang === "en"
        ? "Check Availability & Reserve"
        : "Müsaitliği Kontrol Et ve Rezerve Et",
    reservationText:
      lang === "en"
        ? "Our online booking area will appear here soon. Until then, you can reserve your place directly via WhatsApp and get quick confirmation from our team."
        : "Online rezervasyon sistemi yakında aktif olacak. Şimdilik WhatsApp üzerinden hızlıca yerini ayırtabilirsin.",
    reservationPlaceholder:
      lang === "en"
        ? "Bókun booking widget will be integrated here"
        : "Bókun rezervasyon bileşeni buraya entegre edilecek",
    askAvailability:
      lang === "en" ? "Ask Availability on WhatsApp" : "WhatsApp’tan Müsaitlik Sor",

    otherTop: lang === "en" ? "Other Tours" : "Diğer Turlar",
    otherTitle:
      lang === "en"
        ? "More Ways to Explore Fethiye"
        : "Fethiye’yi Keşfetmenin Daha Fazla Yolu",
    otherText:
      lang === "en"
        ? "Beyond buggy safari, we also help our guests enjoy the best of Fethiye and Ölüdeniz. Choose from our most popular extra experiences."
        : "Buggy safarinin yanında, misafirlerimizin Fethiye ve Ölüdeniz’in en güzel deneyimlerini yaşamasına da yardımcı oluyoruz. En popüler ek turlarımızı keşfedin.",
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
    askWhatsapp:
      lang === "en" ? "Ask on WhatsApp →" : "WhatsApp’tan Sor →",

    reviewsTop: lang === "en" ? "Guest Reviews" : "Misafir Yorumları",
    reviewsTitle:
      lang === "en"
        ? "Rated 5 Stars by Happy Guests"
        : "Mutlu Misafirlerden 5 Yıldız",
    reviewsText:
      lang === "en"
        ? "Real reviews. Real tours. Real dust. See why our guests love the Come and Drive experience."
        : "Gerçek misafir yorumlarını incele ve Come & Drive deneyimini neden herkesin önerdiğini keşfet.",
    readReviews: lang === "en" ? "Read Reviews" : "Yorumları Oku",

    contactTitle: "COME & DRIVE",
    contactText:
      lang === "en"
        ? "Official travel agency in Fethiye / Ölüdeniz. Buggy safari, kids quad bike and unforgettable off-road experiences."
        : "Fethiye / Ölüdeniz’de resmi seyahat acentası. Buggy safari, çocuk quad bike ve unutulmaz off-road deneyimleri.",
    contact: lang === "en" ? "Contact" : "İletişim",
    followUs: lang === "en" ? "Follow Us" : "Bizi Takip Et",
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
          <div style={{ color: "#fff", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ fontSize: "26px", fontWeight: 500, letterSpacing: "2px" }}>
              COME & DRIVE
            </div>
            <div style={{ fontSize: "11px", letterSpacing: "3px", opacity: 0.85, marginTop: "4px" }}>
              TRAVEL AGENCY
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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

          <nav style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontSize: "13px" }}>
            <a href="#half-day" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{t.navHalf}</a>
            <a href="#full-day" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{t.navFull}</a>
            <a href="#kids-quad" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{t.navKids}</a>
            <a href="#reservation" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{t.navReserve}</a>
            <a href="#other-tours" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{t.navOther}</a>
            <a href="#contact" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>{t.navContact}</a>
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
          <div style={{ fontSize: "13px", letterSpacing: "2px", opacity: 0.9, marginBottom: "14px" }}>
            {t.heroTop}
          </div>

          <h1 style={{ fontSize: "64px", lineHeight: 1.05, margin: "0 0 20px", fontWeight: 700 }}>
            {t.heroTitle1}
            <br />
            {t.heroTitle2}
            <br />
            {t.heroTitle3}
          </h1>

          <p style={{ maxWidth: "520px", fontSize: "18px", opacity: 0.95, marginBottom: "28px" }}>
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

      <section style={{ background: "#ffffff", padding: "32px 20px", display: "flex", justifyContent: "center", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: "1100px", width: "100%", display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", fontSize: "15px", fontWeight: 600, color: "#1f1a17", textAlign: "center" }}>
          <div style={{ flex: 1, minWidth: "220px" }}>🚗 {t.licence}</div>
          <div style={{ flex: 1, minWidth: "220px" }}>🌲 {t.forest}</div>
          <div style={{ flex: 1, minWidth: "220px" }}>🌊 {t.swim}</div>
        </div>
      </section>

      <section id="half-day" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        <p style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#6b625b", marginBottom: "12px" }}>{t.halfGalleryTop}</p>
        <h2 style={{ fontSize: "42px", marginBottom: "14px", color: "#1f1a17" }}>{t.halfGalleryTitle}</h2>
        <p style={{ maxWidth: "760px", fontSize: "19px", lineHeight: 1.7, color: "#5f554d", marginBottom: "16px" }}>{t.halfGallerySubtitle}</p>
        <p style={{ fontSize: "18px", fontWeight: 600, color: "#1f1a17", marginBottom: "34px" }}>{t.halfGallerySlogan}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {["Half Day Photo 1", "Half Day Photo 2", "Half Day Photo 3", "Half Day Photo 4", "Half Day Photo 5"].map((item) => (
            <div key={item} style={{ aspectRatio: "4 / 3", background: "#e9e0d5", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "#7a6f65", fontWeight: 600, fontSize: "15px", textAlign: "center", padding: "12px" }}>
              {item}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "26px" }}>
          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.halfDayDetailsTitle}</h3>
            <p>{t.halfDayLocation}</p><p>{t.halfDayDuration}</p><p>{t.halfDayDistance}</p><p>{t.halfDaySwim}</p><p>{t.halfDayVehicle}</p><p>{t.halfDaySeats}</p><p style={{ marginBottom: 0 }}>{t.halfDayEasy}</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.halfDayDaysTitle}</h3>
            <p>{t.halfDaySchedule1}</p><p>{t.halfDaySchedule2}</p><p>{t.halfDaySchedule3}</p><p style={{ marginBottom: 0 }}>{t.halfDaySchedule4}</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.halfDayIncludedTitle}</h3>
            <p>✔ {t.halfDayInc1}</p><p>✔ {t.halfDayInc2}</p><p>✔ {t.halfDayInc3}</p><p>✔ {t.halfDayInc4}</p><p>✔ {t.halfDayInc5}</p><p>✔ {t.halfDayInc6}</p><p style={{ marginBottom: 0 }}>✔ {t.halfDayInc7}</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.halfDayExtraTitle}</h3>
            <p>– {t.halfDayEx1}</p><p>– {t.halfDayEx2}</p><p>– {t.halfDayEx3}</p><p style={{ marginBottom: 0 }}>📸 {t.halfDayEx4}</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.halfDayRulesTitle}</h3>
            <p>✔ {t.halfDayRule1}</p><p>✔ {t.halfDayRule2}</p><p style={{ marginBottom: 0 }}>✔ {t.halfDayRule3}</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.halfDayWhyTitle}</h3>
            <p>✔ {t.halfDayWhy1}</p><p>✔ {t.halfDayWhy2}</p><p>✔ {t.halfDayWhy3}</p><p>✔ {t.halfDayWhy4}</p><p>✔ {t.halfDayWhy5}</p><p style={{ marginBottom: 0 }}>✔ {t.halfDayWhy6}</p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "28px", boxShadow: "0 10px 24px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginTop: 0 }}>{t.bringTitle}</h3>
            <p>✔ {t.bring1}</p><p>✔ {t.bring2}</p><p>✔ {t.bring3}</p><p>✔ {t.bring4}</p><p style={{ marginBottom: 0 }}>✔ {t.bring5}</p>
          </div>
        </div>

        <div style={{ marginTop: "34px" }}>
          <a href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20book%20Half%20Day%20Buggy%20Safari" style={{ display: "inline-block", background: "#1f1a17", color: "#fff", padding: "14px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: 600 }}>
            {lang === "en" ? "Book Half Day" : "Yarım Gün Rezervasyon"}
          </a>
        </div>
      </section>

      <section id="full-day" style={{ background: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#6b625b", marginBottom: "12px" }}>{t.fullDayTop}</p>
          <h2 style={{ fontSize: "42px", marginBottom: "14px", color: "#1f1a17" }}>{t.fullDayTitle}</h2>
          <p style={{ maxWidth: "760px", fontSize: "19px", lineHeight: 1.7, color: "#5f554d", marginBottom: "16px" }}>{t.fullDaySubtitle}</p>
          <p style={{ fontSize: "18px", fontWeight: 600, color: "#1f1a17", marginBottom: "34px" }}>{t.fullDaySlogan}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {["Full Day Photo 1", "Full Day Photo 2", "Full Day Photo 3", "Full Day Photo 4", "Full Day Photo 5"].map((item) => (
              <div key={item} style={{ aspectRatio: "4 / 3", background: "#e9e0d5", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: "#7a6f65", fontWeight: 600, fontSize: "15px", textAlign: "center", padding: "12px" }}>
                {item}
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "26px" }}>
            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.fullDayDetailsTitle}</h3>
              <p>{t.fullDayLocation}</p><p>{t.fullDayDuration}</p><p>{t.fullDayDistance}</p><p>{t.fullDayMountain}</p><p style={{ marginBottom: 0 }}>{t.fullDayStops}</p>
            </div>

            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.fullDayDaysTitle}</h3>
              <p style={{ marginBottom: 0 }}>{t.fullDayDays1}</p>
            </div>

            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.fullDayIncludedTitle}</h3>
              <p>✔ {t.fullDayInc1}</p><p>✔ {t.fullDayInc2}</p><p>✔ {t.fullDayInc3}</p><p>✔ {t.fullDayInc4}</p><p>✔ {t.fullDayInc5}</p><p>✔ {t.fullDayInc6}</p><p>✔ {t.fullDayInc7}</p><p>✔ {t.fullDayInc8}</p><p style={{ marginBottom: 0 }}>✔ {t.fullDayInc9}</p>
            </div>

            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.fullDayExtraTitle}</h3>
              <p>– {t.fullDayEx1}</p><p style={{ marginBottom: 0 }}>– {t.fullDayEx2}</p>
            </div>

            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.fullDayRulesTitle}</h3>
              <p>✔ {t.fullDayRule1}</p><p>✔ {t.fullDayRule2}</p><p>✔ {t.fullDayRule3}</p><p>✔ {t.fullDayRule4}</p><p style={{ marginBottom: 0 }}>⚠ {t.fullDayRule5}</p>
            </div>

            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.bringTitle}</h3>
              <p>✔ {t.bring1}</p><p>✔ {t.bring2}</p><p>✔ {t.bring3}</p><p>✔ {t.bring4}</p><p style={{ marginBottom: 0 }}>✔ {t.bring5}</p>
            </div>

            <div style={{ background: "#f7f4ee", borderRadius: "24px", padding: "28px" }}>
              <h3 style={{ marginTop: 0 }}>{t.fullDayWhyTitle}</h3>
              <p>✔ {t.fullDayWhy1}</p><p>✔ {t.fullDayWhy2}</p><p>✔ {t.fullDayWhy3}</p><p>✔ {t.fullDayWhy4}</p><p>✔ {t.fullDayWhy5}</p><p>✔ {t.fullDayWhy6}</p><p style={{ marginBottom: 0 }}>✔ {t.fullDayWhy7}</p>
            </div>
          </div>

          <div style={{ marginTop: "34px" }}>
            <a href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20book%20Babadağ%20Exclusive%20Full%20Day" style={{ display: "inline-block", background: "#1f1a17", color: "#fff", padding: "14px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: 600 }}>
              {lang === "en" ? "Book Full Day" : "Tam Gün Rezervasyon"}
            </a>
          </div>
        </div>
      </section>

      <section id="kids-quad" style={{ padding: "80px 20px", background: "#f7f4ee" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", background: "#fff", borderRadius: "24px", padding: "40px", boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "14px", color: "#1f1a17" }}>{t.kidsTitle}</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#5f554d", maxWidth: "700px", marginBottom: "24px" }}>{t.kidsText}</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "20px" }}>
            <span style={{ background: "#efe7dc", padding: "10px 16px", borderRadius: "999px", fontWeight: 500 }}>{t.kidsTag1}</span>
            <span style={{ background: "#efe7dc", padding: "10px 16px", borderRadius: "999px", fontWeight: 500 }}>{t.kidsTag2}</span>
            <span style={{ background: "#efe7dc", padding: "10px 16px", borderRadius: "999px", fontWeight: 500 }}>{t.kidsTag3}</span>
          </div>
          <a href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20book%20Kids%20Quad%20Bike" style={{ display: "inline-block", background: "#25D366", color: "#fff", padding: "14px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: 600 }}>
            {t.kidsBook}
          </a>
        </div>
      </section>

      <section id="reservation" style={{ padding: "80px 20px", background: "#ffffff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#6b625b", marginBottom: "12px" }}>{t.reservationTop}</p>
          <h2 style={{ fontSize: "40px", marginBottom: "16px", color: "#1f1a17" }}>{t.reservationTitle}</h2>
          <p style={{ maxWidth: "760px", margin: "0 auto 30px", fontSize: "18px", lineHeight: 1.7, color: "#5f554d" }}>{t.reservationText}</p>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "36px 24px", border: "2px dashed #d8d0c6", borderRadius: "24px", background: "#f7f4ee" }}>
            <p style={{ margin: "0 0 18px", fontSize: "18px", color: "#7a6f65" }}>{t.reservationPlaceholder}</p>
            <a href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20check%20availability%20for%20a%20tour" target="_blank" rel="noreferrer" style={{ display: "inline-block", background: "#25D366", color: "#fff", padding: "14px 24px", borderRadius: "999px", textDecoration: "none", fontWeight: 600 }}>
              {t.askAvailability}
            </a>
          </div>
        </div>
      </section>

      <section id="other-tours" style={{ padding: "80px 20px", background: "#efe7dc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#6b625b", marginBottom: "12px" }}>{t.otherTop}</p>
          <h2 style={{ fontSize: "40px", marginBottom: "16px", color: "#1f1a17" }}>{t.otherTitle}</h2>
          <p style={{ maxWidth: "720px", fontSize: "18px", lineHeight: 1.7, color: "#5f554d", marginBottom: "32px" }}>{t.otherText}</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {t.otherToursList.map((tour) => (
              <div key={tour} style={{ background: "#fff", borderRadius: "20px", padding: "24px", boxShadow: "0 10px 24px rgba(0,0,0,0.06)" }}>
                <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "22px", color: "#1f1a17" }}>{tour}</h3>
                <a
                  href={`https://wa.me/905446358280?text=${encodeURIComponent(
                    lang === "en" ? `Hello I want to get information about ${tour}` : `${tour} hakkında bilgi almak istiyorum`
                  )}`}
                  style={{ display: "inline-block", marginTop: "8px", color: "#1f1a17", fontWeight: 600, textDecoration: "none" }}
                >
                  {t.askWhatsapp}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", background: "#ffffff", display: "flex", justifyContent: "center", borderTop: "1px solid #eee" }}>
        <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", color: "#6b625b", marginBottom: "12px" }}>{t.reviewsTop}</p>
          <h2 style={{ fontSize: "34px", marginBottom: "14px", color: "#1f1a17" }}>{t.reviewsTitle}</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#5f554d", maxWidth: "720px", margin: "0 auto 26px" }}>{t.reviewsText}</p>

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

      <section id="contact" style={{ background: "#1f1a17", color: "#fff", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
          <div>
            <h2 style={{ marginTop: 0 }}>{t.contactTitle}</h2>
            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{t.contactText}</p>
          </div>

          <div>
            <h3>{t.contact}</h3>
            <p><a href="https://wa.me/905446358280" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecoration: "none" }}>WhatsApp: +90 544 635 82 80</a></p>
            <p><a href="mailto:comendrive@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>comendrive@gmail.com</a></p>
            <p style={{ marginTop: "20px", opacity: 0.7 }}>TÜRSAB A-Group Travel Agency — License No: 11387</p>
          </div>

          <div>
            <h3>{t.followUs}</h3>
            <p>
              <a href="https://www.instagram.com/comeanddrive" target="_blank" rel="noreferrer" style={{ color: "#E4405F", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" style={{ width: "20px", height: "20px" }} />
                Instagram
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/comendrivetravel" target="_blank" rel="noreferrer" style={{ color: "#1877F2", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" style={{ width: "20px", height: "20px" }} />
                Facebook
              </a>
            </p>
            <p>
              <a href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html" target="_blank" rel="noreferrer" style={{ color: "#34E0A1", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "10px" }}>
                <img src="https://cdn.simpleicons.org/tripadvisor/34E0A1" alt="Tripadvisor" style={{ width: "20px", height: "20px" }} />
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
