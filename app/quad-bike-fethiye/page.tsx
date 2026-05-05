"use client";

import React from "react";

export default function QuadBikeFethiyePage() {
  const [lang, setLang] = React.useState("en");
  const isEn = lang === "en";

  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17", minHeight: "100vh" }}>
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,15,0.55), rgba(20,18,15,0.75)), url('/hero.jpg') center/cover no-repeat",
          color: "#fff",
          padding: "32px 20px 80px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "46px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 700 }}>
              COME & DRIVE
            </a>

            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => setLang("en")}>EN</button>
              <button onClick={() => setLang("tr")}>TR</button>
            </div>
          </div>

          <p style={{ fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }}>
            {isEn
              ? "ATV SAFARI FETHIYE · OLUDENIZ · HISARONU"
              : "ATV TURU FETHİYE · ÖLÜDENİZ · HİSARÖNÜ"}
          </p>

          <h1 style={{ fontSize: "clamp(34px, 7vw, 58px)", lineHeight: 1.08, maxWidth: "900px" }}>
            {isEn
              ? "ATV Safari Fethiye | Quad Bike Ölüdeniz & Hisarönü"
              : "Fethiye ATV Turu | Ölüdeniz ve Hisarönü Quad Bike"}
          </h1>

          <p style={{ maxWidth: "780px", fontSize: "18px", lineHeight: 1.8 }}>
            {isEn
              ? "Looking for ATV safari in Fethiye, Ölüdeniz or Hisarönü? Most ATV tours offer around 10 km driving and about 1 hour of riding with no beach stop. Our buggy safari offers a longer and more complete off-road experience with real stops, comfort and adventure."
              : "Fethiye, Ölüdeniz veya Hisarönü’nde ATV turu mu arıyorsunuz? Bölgede ATV turları genelde yaklaşık 10 km ve 1 saat sürüş sunar, plaj molası yoktur. Buggy safari ise daha uzun, daha konforlu ve daha dolu bir off-road deneyimi sunar."}
          </p>
        </div>
      </section>

      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: "24px", padding: "32px", marginBottom: "26px" }}>
            <h2>{isEn ? "ATV Safari or Buggy Safari?" : "ATV Turu mu Buggy Safari mi?"}</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn
                ? "ATV is a good choice if you want a short ride. But if you want real off-road driving, a beach stop and a stronger holiday memory, buggy safari is usually the better option."
                : "Kısa bir sürüş istiyorsanız ATV iyi bir seçenektir. Ama gerçek off-road sürüşü, plaj molası ve daha güçlü bir tatil deneyimi istiyorsanız buggy safari genellikle daha iyi seçimdir."}
            </p>
          </div>

          <div style={{ background: "#fff", borderRadius: "24px", padding: "32px", marginBottom: "26px" }}>
            <h2>{isEn ? "Buggy Safari Options" : "Buggy Safari Seçenekleri"}</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn ? (
                <>
                  <strong>Half Day Buggy Safari:</strong> 35 km route, 3.5 hours total and beach swimming break.
                  <br />
                  <br />
                  <strong>Full Day Buggy Safari:</strong> 7.5 hours, ancient city visit, beach stop, premium lunch,
                  drinks, photo and video included.
                  <br />
                  <br />
                  <strong>Kids ATV:</strong> Yamaha 50cc kids quad bike experience for young riders.
                </>
              ) : (
                <>
                  <strong>Yarım Gün Buggy Safari:</strong> 35 km rota, toplam 3,5 saat ve plaj yüzme molası.
                  <br />
                  <br />
                  <strong>Tam Gün Buggy Safari:</strong> 7,5 saat, antik kent ziyareti, plaj molası, premium yemek,
                  içecek, fotoğraf ve video dahil.
                  <br />
                  <br />
                  <strong>Çocuk ATV:</strong> Yamaha 50cc çocuk quad bike deneyimi.
                </>
              )}
            </p>
          </div>

          <div style={{ textAlign: "center", background: "#fff", borderRadius: "24px", padding: "36px 28px" }}>
            <h2>{isEn ? "Want more than a short ATV ride?" : "Kısa bir ATV turundan fazlasını mı istiyorsunuz?"}</h2>

            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
              <a href="/buggy-half-day" style={buttonGreen}>
                {isEn ? "Explore Half Day Buggy" : "Yarım Gün Buggy Turunu İncele"}
              </a>
              <a href="/buggy-full-day" style={buttonDark}>
                {isEn ? "Explore Full Day Buggy" : "Tam Gün Buggy Turunu İncele"}
              </a>
              <a href="/kids-quad-bike" style={buttonLight}>
                {isEn ? "Kids ATV Yamaha 50cc" : "Çocuk ATV Yamaha 50cc"}
              </a>
            </div>
          </div>

          <div style={{ marginTop: "34px", textAlign: "center", fontSize: "14px", color: "#5f554d" }}>
            <p>
              {isEn
                ? "Useful links for your Fethiye off-road experience:"
                : "Fethiye off-road deneyiminiz için faydalı bağlantılar:"}
            </p>

            <a href="/buggy-half-day" style={seoLink}>Buggy Safari Half Day</a>{" · "}
            <a href="/buggy-full-day" style={seoLink}>Buggy Safari Full Day</a>{" · "}
            <a href="/kids-quad-bike" style={seoLink}>Kids Quad Bike</a>{" · "}
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
              target="_blank"
              rel="noreferrer"
              style={seoLink}
            >
              Tripadvisor Reviews
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const buttonGreen: React.CSSProperties = {
  background: "#25D366",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
};

const buttonDark: React.CSSProperties = {
  background: "#1f1a17",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
};

const buttonLight: React.CSSProperties = {
  background: "#f3eee6",
  color: "#1f1a17",
  padding: "14px 22px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: 700,
};

const seoLink: React.CSSProperties = {
  color: "#1f1a17",
  fontWeight: 600,
  textDecoration: "underline",
};
