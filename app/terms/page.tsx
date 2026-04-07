"use client";

import React from "react";
import Link from "next/link";

export default function TermsPage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");
  const isEn = lang === "en";

  const t = {
    back: isEn ? "← Back to Home" : "← Ana Sayfaya Dön",
    top: isEn ? "TERMS & CONDITIONS" : "KULLANIM ŞARTLARI",
    title: isEn ? "Terms & Conditions" : "Kullanım Şartları",
    intro: isEn
      ? "By making a reservation, guests agree to the participation and service conditions below."
      : "Rezervasyon yapan misafirler aşağıdaki katılım ve hizmet koşullarını kabul etmiş sayılır.",

    items: isEn
      ? [
          "By making a reservation, guests confirm that they meet the participation requirements of the selected activity.",
          "Drivers must hold a valid driving licence where required.",
          "Guests participate at their own responsibility within safety guidelines provided by the tour leader.",
          "The company reserves the right to modify routes or schedules for safety or operational reasons.",
        ]
      : [
          "Rezervasyon yapan misafirler seçtikleri aktivitenin katılım şartlarını kabul etmiş sayılır.",
          "Gerekli olan aktivitelerde sürücüler geçerli bir ehliyete sahip olmalıdır.",
          "Misafirler rehber tarafından belirtilen güvenlik kurallarına uymakla yükümlüdür.",
          "Şirket güvenlik veya operasyonel nedenlerle rota ve programda değişiklik yapma hakkını saklı tutar.",
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
