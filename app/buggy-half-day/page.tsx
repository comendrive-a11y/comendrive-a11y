"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function BuggyHalfDayPage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");
  const isEn = lang === "en";

  const t = {
    navBack: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",

    heroTop: isEn
      ? "BUGGY SAFARI HALF DAY · HISARÖNÜ / FETHİYE"
      : "BUGGY SAFARI YARIM GÜN · HİSARÖNÜ / FETHİYE",

    title: isEn ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",

    slogan: isEn
      ? "More than a tour. A real drive."
      : "Bir turdan fazlası. Gerçek bir sürüş deneyimi.",

    subtitle: isEn
      ? "35 km of real forest off-road driving + 1-hour swim stop at Gemiler Beach."
      : "35 km gerçek orman off-road sürüşü + Gemiler Beach’te 1 saat yüzme molası.",

    text: isEn
      ? "This premium small-group experience starts from Hisarönü and runs on weekdays with two daily departures. You drive a 550cc automatic Mud Monster buggy through real off-road terrain. Each slot is limited to maximum 8 people, giving the tour a more private and comfortable feeling. We are the only company in the city combining buggy safari with a beach swim break."
      : "Bu premium küçük grup deneyimi Hisarönü çıkışlıdır ve hafta içi her gün iki farklı saatte yapılır. Gerçek off-road arazisinde 550cc otomatik Mud Monster buggy ile sürüş yaparsınız. Her slot maksimum 8 kisi ile sınırlıdır, bu da daha özel ve konforlu bir his verir. Şehirde buggy safariyi plaj yüzme molasıyla birleştiren tek firmayız.",

    heroNote: isEn
      ? "Weekdays only. Driver minimum age 18. Driving licence required."
      : "Sadece hafta içi yapılır. Minimum sürücü yaşı 18’dir. Ehliyet zorunludur.",

    gallery: isEn ? "Tour Gallery" : "Tur Galerisi",
    experienceTitle: isEn ? "The Experience" : "Deneyim",

    experienceText: isEn
      ? "A premium half-day route designed for guests who want real driving, forest scenery, dust, fun and a refreshing beach break in one experience."
      : "Gerçek sürüş, orman manzarası, toz, eğlence ve ferahlatıcı plaj molasını tek deneyimde yaşamak isteyen misafirler için tasarlanmış premium yarım gün rotası.",

    details: isEn ? "Tour Details" : "Tur Detayları",
    days: isEn ? "Tour Days & Times" : "Tur Günleri ve Saatleri",
    included: isEn ? "Included in Price" : "Fiyata Dahil Olanlar",
    extra: isEn ? "Extra Charges" : "Ekstra Ücretli Olanlar",
    rules: isEn ? "Participation Rules" : "Katılım Şartları",
    why: isEn ? "Why Choose This Tour?" : "Bu Turu Neden Seçmelisiniz?",

    book: isEn ? "Book Half Day" : "Yarım Gün Rezervasyon",
    whatsappAsk: isEn ? "Ask on WhatsApp" : "WhatsApp’tan Sor",

    detailItems: isEn
      ? [
          "Start point: Hisarönü – Fethiye",
          "Duration: 3.5 hours",
          "Total route: 35 km off-road",
          "Swim stop: Gemiler Beach (entry included)",
          "Vehicle: 550cc automatic Mud Monster buggy",
          "2 people can ride together in the same buggy",
          "Easy to drive. No previous experience needed.",
        ]
      : [
          "Başlangıç: Hisarönü – Fethiye",
          "Süre: 3,5 saat",
          "Toplam rota: 35 km off-road",
          "Yüzme molası: Gemiler Beach (giriş dahil)",
          "Araç: 550cc otomatik Mud Monster buggy",
          "Aynı araçta 2 kişi birlikte sürüş yapabilir",
          "Sürmesi kolaydır. Önceden deneyim gerekmez.",
        ],

    dayItems: isEn
      ? [
          "Monday – Friday (every weekday)",
          "Morning tour: 09:00 – 12:30",
          "Afternoon tour: 14:00 – 17:30",
          "Weekend is reserved for Babadağ Exclusive Full Day.",
        ]
      : [
          "Pazartesi – Cuma (hafta içi her gün)",
          "Sabah turu: 09:00 – 12:30",
          "Öğleden sonra turu: 14:00 – 17:30",
          "Hafta sonları Babadağ Exclusive Full Day turu yapılır.",
        ],

    includedItems: isEn
      ? [
          "550cc buggy vehicle",
          "Guiding service",
          "Activity insurance",
          "Protective goggles",
          "1 bottle of water",
          "Gemiler Beach entrance fee",
          "1-hour swim stop",
        ]
      : [
          "550cc buggy aracı",
          "Rehberlik hizmeti",
          "Aktivite sigortası",
          "Koruyucu gözlük",
          "1 şişe su",
          "Gemiler Beach giriş ücreti",
          "1 saat yüzme molası",
        ],

    extraItems: isEn
      ? [
          "Bandana (optional)",
          "Personal beach expenses",
          "Tour photos",
          "Around 80% of our guests choose the photo package.",
        ]
      : [
          "Bandana (isteğe bağlı)",
          "Plaj harcamaları",
          "Tur fotoğrafları",
          "Misafirlerimizin yaklaşık %80’i tur fotoğraflarını tercih eder.",
        ],

    ruleItems: isEn
      ? [
          "Minimum driver age: 18",
          "Driving licence required",
          "Not suitable for children under 4",
        ]
      : [
          "Minimum sürücü yaşı: 18",
          "Ehliyet zorunlu",
          "4 yaş altı çocuklar için uygun değildir",
        ],

    whyItems: isEn
      ? [
          "35 km real off-road route",
          "Forest driving experience",
          "Swim break at Gemiler Beach",
          "Side-by-side buggy vehicles",
          "Small group concept",
          "Easy to drive for both women and men",
        ]
      : [
          "35 km gerçek off-road rota",
          "Orman içi sürüş deneyimi",
          "Gemiler Beach’te yüzme molası",
          "Side-by-side buggy araçlar",
          "Küçük grup konsepti",
          "Kadın ve erkek sürücüler için kolay kullanım",
        ],
  };

  const galleryImages = [
    "/halfday-1.jpg",
    "/halfday-2.jpg",
    "/halfday-3.jpg",
    "/halfday-4.jpg",
  ];

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
          backgroundImage:
            "linear-gradient(180deg, rgba(20,18,15,0.72) 0%, rgba(20,18,15,0.42) 45%, rgba(20,18,15,0.78) 100%), url('/halfday-hero.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
              marginBottom: "clamp(30px, 6vw, 60px)",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {t.navBack}
            </Link>

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

          <div style={{ maxWidth: "780px" }}>
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
                marginBottom: "10px",
              }}
            >
              {t.title}
            </h1>

            <div
              style={{
                fontSize: "22px",
                fontStyle: "italic",
                opacity: 0.92,
                marginBottom: "18px",
              }}
            >
              {t.slogan}
            </div>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                maxWidth: "760px",
                marginBottom: "14px",
                opacity: 0.98,
              }}
            >
              {t.subtitle}
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                maxWidth: "760px",
                marginBottom: "14px",
                opacity: 0.95,
              }}
            >
              {t.text}
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "760px",
                marginBottom: "28px",
                opacity: 0.85,
              }}
            >
              {t.heroNote}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#booking"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {t.book}
              </a>

              <a
                href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Half%20Day%20Buggy%20Safari"
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
                {t.whatsappAsk}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ ...cardStyle, marginBottom: "28px" }}>
  <h2 style={{ fontSize: "clamp(24px, 5vw, 32px)", marginTop: 0 }}>
    {isEn
      ? "Looking for ATV Safari in Fethiye?"
      : "Fethiye’de ATV Safari mi Arıyorsunuz?"}
  </h2>

  <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d", marginBottom: 0 }}>
    {isEn ? (
      <>
        Most ATV tours in Fethiye, Ölüdeniz and Hisarönü are around <strong>1 hour</strong> and
        <strong> 10 km</strong>, none of them include a beach stop.
        <br />
        <br />
        Our Half Day Buggy Safari offers a <strong>35 km off-road route</strong>, around{" "}
        <strong>3.5 hours total experience</strong> and a <strong>1-hour swim break at Gemiler Beach</strong>.
        If you want more than a short ride, this is the better adventure.
      </>
    ) : (
      <>
        Fethiye, Ölüdeniz ve Hisarönü bölgesindeki ATV turları genelde yaklaşık{" "}
        <strong>1 saat</strong> ve <strong>10 km</strong> sürer, hiçbirinde plaj molası yoktur.
        <br />
        <br />
        Half Day Buggy Safari ise <strong>35 km off-road rota</strong>, toplam yaklaşık{" "}
        <strong>3,5 saat deneyim</strong> ve <strong>Gemiler Beach’te 1 saat yüzme molası</strong> sunar.
        Kısa bir turdan fazlasını istiyorsanız doğru seçenek budur.
      </>
    )}
  </p>
</div>
         
         <p style={sectionTitleStyle}>{t.experienceTitle}</p>
          <div style={cardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#5f554d",
                maxWidth: "920px",
              }}
            >
              {t.experienceText}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={sectionTitleStyle}>{t.gallery}</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {galleryImages.map((src, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  minHeight: "220px",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                  background: "#e9e1d6",
                }}
              >
                <img
                  src={src}
                  alt={`Half Day Buggy ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "220px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
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
                {t.details}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.detailItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.days}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.dayItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.included}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.extra}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.extraItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.rules}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.ruleItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "18px", fontSize: "24px" }}>
                {t.why}
              </h3>
              <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.9, color: "#5f554d" }}>
                {t.whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 20px 90px",
        }}
      >
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
          <h2 style={{ fontSize: "34px", marginTop: 0, marginBottom: "20px" }}>
            {t.book}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#booking"
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
              {t.book}
            </a>

            <a
              href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20ask%20about%20Half%20Day%20Buggy%20Safari"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                border: "1px solid #1f1a17",
                color: "#1f1a17",
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              {t.whatsappAsk}
            </a>
          </div>
        </div>
      </section>

      <section
        id="booking"
        style={{
          padding: "40px 16px 90px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "18px",
            fontSize: "14px",
            color: "#6b625b",
            fontWeight: 500,
            lineHeight: 1.6,
          }}
             >
          Free cancellation up to 24 hours before departure
          <br />
          Turdan 24 saat öncesine kadar ücretsiz iptal
        </div>

        <Script
          src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=fca6e52d-12e6-4208-a7b1-a9d40f366b36"
          strategy="afterInteractive"
        />

        <div
          className="bokunWidget"
          data-src="https://widgets.bokun.io/online-sales/fca6e52d-12e6-4208-a7b1-a9d40f366b36/experience-calendar/1190618"
          style={{ marginTop: "20px" }}
        />
      </section>
    </main>
  );
}
