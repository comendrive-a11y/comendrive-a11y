"use client";

import React from "react";
import Link from "next/link";

export default function BuggyHalfDayPage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");

  const t = {
    navBack: lang === "en" ? "← Back to Home" : "← Ana Sayfaya Dön",
    title: lang === "en" ? "Buggy Safari Half Day" : "Buggy Safari Yarım Gün",
    slogan:
      lang === "en"
        ? "More than a tour. A real drive."
        : "Bir turdan fazlası. Gerçek bir sürüş deneyimi.",
    subtitle:
      lang === "en"
        ? "35 km of real forest off-road driving + 1-hour swim stop at Gemiler Beach."
        : "35 km gerçek orman off-road sürüşü + Gemiler Beach’te 1 saat yüzme molası.",
    text:
      lang === "en"
        ? "This premium small-group experience starts from Hisarönü and runs on weekdays with two daily departures. You drive a 550cc automatic Mud Monster buggy through real off-road terrain. Each slot is limited to maximum 8 buggies, giving the tour a more private and comfortable feeling. We are the only company in the city combining buggy safari with a beach swim break."
        : "Bu premium küçük grup deneyimi Hisarönü çıkışlıdır ve hafta içi her gün iki farklı saatte yapılır. Gerçek off-road arazisinde 550cc otomatik Mud Monster buggy ile sürüş yaparsınız. Her slot maksimum 8 buggy ile sınırlıdır, bu da daha özel ve konforlu bir his verir. Şehirde buggy safariyi plaj yüzme molasıyla birleştiren tek firmayız.",

    gallery: lang === "en" ? "Tour Gallery" : "Tur Galerisi",
    details: lang === "en" ? "Tour Details" : "Tur Detayları",
    days: lang === "en" ? "Tour Days & Times" : "Tur Günleri ve Saatleri",
    included: lang === "en" ? "Included in Price" : "Fiyata Dahil Olanlar",
    extra: lang === "en" ? "Extra Charges" : "Ekstra Ücretli Olanlar",
    rules: lang === "en" ? "Participation Rules" : "Katılım Şartları",
    why: lang === "en" ? "Why Choose This Tour?" : "Bu Turu Neden Seçmelisiniz?",
    book: lang === "en" ? "Book Half Day" : "Yarım Gün Rezervasyon",

    detailItems:
      lang === "en"
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

    dayItems:
      lang === "en"
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

    includedItems:
      lang === "en"
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

    extraItems:
      lang === "en"
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

    ruleItems:
      lang === "en"
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

    whyItems:
      lang === "en"
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

  const cardStyle: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "24px",
  };

  const listStyle: React.CSSProperties = {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: 1.8,
    color: "#5f554d",
  };

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17", minHeight: "100vh" }}>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "14px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#1f1a17",
              fontWeight: 600,
            }}
          >
            {t.navBack}
          </Link>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? "#1f1a17" : "transparent",
                color: lang === "en" ? "#fff" : "#1f1a17",
                border: "1px solid #cfc6bb",
                borderRadius: "999px",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              EN
            </button>

            <button
              onClick={() => setLang("tr")}
              style={{
                background: lang === "tr" ? "#1f1a17" : "transparent",
                color: lang === "tr" ? "#fff" : "#1f1a17",
                border: "1px solid #cfc6bb",
                borderRadius: "999px",
                padding: "8px 14px",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              TR
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", marginBottom: "10px" }}>
  {t.title}
</h1>

          <div
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              opacity: 0.8,
              marginBottom: "20px",
              color: "#5f554d",
            }}
          >
            {t.slogan}
          </div>

          <p style={{ fontSize: "20px", maxWidth: "760px" }}>{t.subtitle}</p>

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
            {t.text}
          </p>
        </div>

        <div style={{ marginBottom: "12px", letterSpacing: "2px", fontSize: "13px", color: "#6b625b" }}>
          {t.gallery}
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
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
              {lang === "en" ? `Half Day Photo ${i}` : `Yarım Gün Fotoğraf ${i}`}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/905446358280?text=Hello%20I%20want%20to%20book%20Half%20Day%20Buggy%20Safari"
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
          {t.book}
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "34px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.details}</h3>
            <ul style={listStyle}>
              {t.detailItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.days}</h3>
            <ul style={listStyle}>
              {t.dayItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.included}</h3>
            <ul style={listStyle}>
              {t.includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.extra}</h3>
            <ul style={listStyle}>
              {t.extraItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.rules}</h3>
            <ul style={listStyle}>
              {t.ruleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "14px", fontSize: "24px" }}>{t.why}</h3>
            <ul style={listStyle}>
              {t.whyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
