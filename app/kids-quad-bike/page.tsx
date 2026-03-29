"use client";

import React from "react";
import Link from "next/link";

export default function KidsQuadBikePage() {
  const [lang, setLang] = React.useState<"en" | "tr">("en");

  const t = {
    navBack: lang === "en" ? "← Back to Home" : "← Ana Sayfaya Dön",
    title: lang === "en" ? "Kids Quad Bike" : "Çocuk Quad Bike",
    slogan:
      lang === "en"
        ? "Little riders. Big smiles."
        : "Küçük sürücüler. Büyük gülümsemeler.",
    subtitle:
      lang === "en"
        ? "A safe first off-road adventure for children on the city’s biggest closed kids track."
        : "Şehrin en büyük kapalı çocuk parkurunda güvenli ilk off-road macerası.",
    text:
      lang === "en"
        ? "Children ride brand-new Yamaha 50cc ATVs on a 1.2 km closed track under guide supervision."
        : "Çocuklar rehber eşliğinde 1.2 km kapalı parkurda yepyeni Yamaha 50cc ATV’lerle sürüş yapar.",
    book: lang === "en" ? "Book Kids Quad Bike" : "Çocuk Quad Rezervasyon",
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
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>{t.title}</h1>

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
          }}
        >
          {t.book}
        </a>
      </section>
    </main>
  );
}
