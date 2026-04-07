"use client";

import React from "react";
import Link from "next/link";

export default function DistanceSalesAgreementPage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");
  const isEn = lang === "en";

  const t = {
    back: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",
    top: isEn ? "DISTANCE SALES AGREEMENT" : "MESAFELİ SATIŞ SÖZLEŞMESİ",
    title: isEn ? "Distance Sales Agreement" : "Mesafeli Satış Sözleşmesi",
    intro: isEn
      ? "This agreement sets out the terms and conditions for reservations and online payments made through our website."
      : "Bu sözleşme, web sitemiz üzerinden yapılan rezervasyon ve online ödemelere ilişkin şart ve koşulları düzenler.",

    items: isEn
      ? [
          "The customer accepts the selected tour details, participation conditions and cancellation policy during the booking process.",
          "All reservations made through the website are considered distance sales.",
          "The customer is responsible for providing accurate personal and contact information during booking.",
          "Payment is collected securely through authorised payment providers.",
          "In case of cancellation, refund and rescheduling requests, the Cancellation Policy published on this website shall apply.",
          "The company reserves the right to make changes to the route, timing or operation of the tour due to weather, safety or operational requirements.",
          "By completing the reservation, the customer confirms that they have read and accepted this agreement, the privacy policy and the terms and conditions published on this website.",
        ]
      : [
          "Müşteri, rezervasyon sürecinde seçtiği tur detaylarını, katılım şartlarını ve iptal politikasını kabul etmiş sayılır.",
          "Web sitesi üzerinden yapılan tüm rezervasyonlar mesafeli satış kapsamında değerlendirilir.",
          "Rezervasyon sırasında doğru kişisel bilgi ve iletişim bilgisi vermek müşterinin sorumluluğundadır.",
          "Ödeme, yetkili ödeme kuruluşları aracılığıyla güvenli şekilde tahsil edilir.",
          "İptal, iade ve yeniden planlama taleplerinde bu web sitesinde yayınlanan İptal Politikası geçerlidir.",
          "Şirket; hava şartları, güvenlik veya operasyonel gereklilikler nedeniyle tur rotasında, saatinde veya operasyonunda değişiklik yapma hakkını saklı tutar.",
          "Rezervasyonu tamamlayan müşteri, bu sözleşmeyi, gizlilik politikasını ve kullanım şartlarını okuyup kabul etmiş sayılır.",
        ],
  };

  return (
    <main style={{ background: "#f7f4ee", minHeight: "100vh", color: "#1f1a17" }}>
      <section style={{ padding: "32px 20px 80px", maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#1f1a17", fontWeight: 600 }}>
            {t.back}
          </Link>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setLang("en")}
              style={{
                background: isEn ? "#1f1a17" : "#fff",
                color: isEn ? "#fff" : "#1f1a17",
                border: "1px solid #d8cec1",
                padding: "8px 14px",
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("tr")}
              style={{
                background: !isEn ? "#1f1a17" : "#fff",
                color: !isEn ? "#fff" : "#1f1a17",
                border: "1px solid #d8cec1",
                padding: "8px 14px",
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              TR
            </button>
          </div>
        </div>

        <p style={{ fontSize: "13px", letterSpacing: "2px", color: "#6b625b", marginBottom: "10px" }}>
          {t.top}
        </p>

        <h1 style={{ fontSize: "clamp(32px, 6vw, 48px)", marginBottom: "16px" }}>
          {t.title}
        </h1>

        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#5f554d", marginBottom: "28px" }}>
          {t.intro}
        </p>

        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          }}
        >
          <ul style={{ margin: 0, paddingLeft: "22px", lineHeight: 2, color: "#5f554d", fontSize: "17px" }}>
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
