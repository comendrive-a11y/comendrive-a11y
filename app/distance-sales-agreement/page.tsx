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
      ? "Please read this agreement carefully before making a reservation or payment through our website."
      : "Lütfen web sitemiz üzerinden rezervasyon veya ödeme yapmadan önce bu sözleşmeyi dikkatlice okuyunuz.",

    sections: isEn
      ? [
          {
            title: "1. Parties",
            text: "This agreement is concluded between Tralleis Tourism Travel Transportation Construction Real Estate Industry and Trade Limited Company and the customer making a reservation through the website.",
          },
          {
            title: "2. Seller Information",
            text: "Tralleis Tourism Travel Transportation Construction Real Estate Industry and Trade Limited Company. TÜRSAB Agency Name: Come and Drive Travel Agency. License No: 11387. Address: Foça Mahallesi 953 Sokak No:57 Fethiye / Muğla, Türkiye. Phone: +90 544 635 82 80. Email: info@fethiyebuggy.com. Tax Office: Fethiye Tax Office. Tax Number: 8591015952. MERSIS Number: 0859101595200001.",
          },
          {
            title: "3. Subject of the Agreement",
            text: "This agreement regulates the sale and delivery conditions of tours, activities, transfers and related tourism services purchased through www.buggyfethiye.com.",
          },
          {
            title: "4. Scope of Services",
            text: "Services may include Buggy Safari, Kids Quad Bike, Jeep Safari, boat trips, paragliding organisations, transfer services and private tour activities. Details are stated on the relevant booking page.",
          },
          {
            title: "5. Payment",
            text: "Payments are collected securely via authorised online payment systems using credit or debit card. A reservation is considered valid only after payment confirmation.",
          },
          {
            title: "6. Service Delivery",
            text: "The purchased service is delivered physically at the meeting point on the selected date and time stated in the reservation. The customer is responsible for arriving on time.",
          },
          {
            title: "7. Cancellation and Refund",
            text: "Free cancellation is available up to 24 hours before the activity start time. Cancellations made less than 24 hours before departure are non-refundable. If the activity cannot operate due to weather, safety or operational reasons, the reservation may be rescheduled or fully refunded.",
          },
          {
            title: "8. Right of Withdrawal",
            text: "According to the applicable distance contracts regulation, tourism and leisure services scheduled for a specific date or period are exempt from the right of withdrawal.",
          },
          {
            title: "9. Force Majeure",
            text: "Tours may be cancelled, postponed or modified due to severe weather conditions, safety risks, official restrictions, road closures, technical failures or other force majeure reasons.",
          },
          {
            title: "10. Liability",
            text: "Participants must follow all safety instructions given by guides or staff. The seller is not responsible for issues arising from late arrival, incorrect personal information or failure to comply with safety rules.",
          },
          {
            title: "11. Dispute Resolution",
            text: "In case of any dispute arising from this agreement, Fethiye Consumer Arbitration Committees and Fethiye Courts shall have jurisdiction.",
          },
          {
            title: "12. Acceptance",
            text: "By completing the reservation or payment, the customer declares that they have read, understood and accepted this agreement together with the Cancellation Policy, Privacy Policy and Terms & Conditions published on this website.",
          },
        ]
      : [
          {
            title: "1. Taraflar",
            text: "İşbu sözleşme, Tralleis Turizm Seyahat Taşımacılık İnşaat Emlak Sanayi ve Ticaret Limited Şirketi ile internet sitesi üzerinden rezervasyon yapan müşteri arasında düzenlenmiştir.",
          },
          {
            title: "2. Satıcı Bilgileri",
            text: "Tralleis Turizm Seyahat Taşımacılık İnşaat Emlak Sanayi ve Ticaret Limited Şirketi. TÜRSAB Acenta Adı: Come and Drive Travel Agency. Belge No: 11387. Adres: Foça Mahallesi 953 Sokak No:57 Fethiye / Muğla. Telefon: +90 544 635 82 80. E-posta: info@fethiyebuggy.com. Vergi Dairesi: Fethiye V.D. Vergi No: 8591015952. MERSİS No: 0859101595200001.",
          },
          {
            title: "3. Sözleşmenin Konusu",
            text: "Bu sözleşme, www.buggyfethiye.com üzerinden satın alınan tur, aktivite, transfer ve ilgili turizm hizmetlerinin satış ve ifa koşullarını düzenler.",
          },
          {
            title: "4. Hizmetin Kapsamı",
            text: "Hizmetler; Buggy Safari, Kids Quad Bike, Jeep Safari, tekne turları, yamaç paraşütü organizasyonları, transfer hizmetleri ve özel tur faaliyetlerini kapsayabilir. Detaylar ilgili rezervasyon sayfasında belirtilir.",
          },
          {
            title: "5. Ödeme",
            text: "Ödemeler kredi kartı veya banka kartı ile yetkili online ödeme sistemleri üzerinden güvenli şekilde tahsil edilir. Rezervasyon ancak ödeme onayından sonra geçerli sayılır.",
          },
          {
            title: "6. Hizmetin İfası",
            text: "Satın alınan hizmet, rezervasyonda belirtilen tarih ve saatte ilgili buluşma noktasında fiziki olarak sunulur. Müşterinin zamanında hazır bulunması kendi sorumluluğundadır.",
          },
          {
            title: "7. İptal ve İade",
            text: "Tur başlangıç saatinden 24 saat öncesine kadar ücretsiz iptal yapılabilir. Tur başlangıcına 24 saatten az süre kala yapılan iptallerde ücret iadesi yapılmaz. Hava koşulları, güvenlik veya operasyonel nedenlerle aktivite gerçekleştirilemezse rezervasyon yeniden planlanabilir veya ücret iadesi yapılabilir.",
          },
          {
            title: "8. Cayma Hakkı",
            text: "İlgili mesafeli sözleşmeler mevzuatı uyarınca belirli bir tarih veya dönem için planlanan turizm ve boş zaman hizmetlerinde cayma hakkı uygulanmaz.",
          },
          {
            title: "9. Mücbir Sebepler",
            text: "Şiddetli hava koşulları, güvenlik riskleri, resmi kısıtlamalar, yol kapanmaları, teknik arızalar veya benzeri mücbir sebepler nedeniyle turlar iptal edilebilir, ertelenebilir veya değiştirilebilir.",
          },
          {
            title: "10. Sorumluluk",
            text: "Katılımcılar rehber veya görevli ekip tarafından verilen tüm güvenlik talimatlarına uymakla yükümlüdür. Geç kalma, yanlış bilgi verilmesi veya güvenlik kurallarına uyulmaması nedeniyle oluşan sorunlardan satıcı sorumlu değildir.",
          },
          {
            title: "11. Uyuşmazlıkların Çözümü",
            text: "Bu sözleşmeden doğabilecek uyuşmazlıklarda Fethiye Tüketici Hakem Heyetleri ve Fethiye Mahkemeleri yetkilidir.",
          },
          {
            title: "12. Kabul",
            text: "Rezervasyonu veya ödemeyi tamamlayan müşteri, bu sözleşmeyi ve web sitesinde yayınlanan İptal Politikası, Gizlilik Politikası ve Kullanım Şartları metinlerini okuyup anladığını ve kabul ettiğini beyan eder.",
          },
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
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {t.sections.map((section) => (
              <div key={section.title}>
                <h2
                  style={{
                    fontSize: "20px",
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#1f1a17",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.9,
                    color: "#5f554d",
                    fontSize: "17px",
                  }}
                >
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
