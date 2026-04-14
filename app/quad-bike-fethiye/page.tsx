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
            "linear-gradient(180deg, rgba(20,18,15,0.55) 0%, rgba(20,18,15,0.35) 60%, rgba(20,18,15,0.75) 100%), url('/hero.jpg') center/cover no-repeat",
          color: "#fff",
          padding: "32px 20px 70px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "50px",
            }}
          >
            <a
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              COME & DRIVE
            </a>

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

          <p
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              opacity: 0.9,
              marginBottom: "14px",
            }}
          >
            {isEn
  ? "QUAD SAFARI FETHIYE · HISARONU · OLUDENIZ"
  : "ATV TURU FETHİYE · HİSARÖNÜ · ÖLÜDENİZ"}
          </p>

          <h1
            style={{
              fontSize: "clamp(32px, 7vw, 58px)",
              lineHeight: 1.08,
              margin: "0 0 18px",
              maxWidth: "900px",
            }}
          >
            {isEn
             ? "Quad Safari Fethiye / Hisarönü / Ölüdeniz – Quad Safari or Buggy Safari: Which One Is Better?"
: "Fethiye ATV Turu – Hisarönü & Ölüdeniz’de Quad Safari mi Buggy Safari mi Daha İyi?"}
          </h1>

          <p
            style={{
              maxWidth: "760px",
              fontSize: "clamp(16px, 3.5vw, 18px)",
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            {isEn
              ? "Many holidaymakers searching for quad safari in Fethiye, Hisarönü and Ölüdeniz eventually choose buggy safari for longer driving time, more comfort and a more complete off-road experience."
              : "Fethiye, Hisarönü ve Ölüdeniz’de ATV turu arayan birçok tatilci, daha uzun sürüş süresi, daha fazla konfor ve daha dolu bir off-road deneyimi için sonunda buggy safariyi tercih ediyor."}
          </p>
        </div>
      </section>

      <section style={{ padding: "70px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
              marginBottom: "28px",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", marginTop: 0 }}>
              {isEn ? "Driving Distance and Time" : "Sürüş Mesafesi ve Süresi"}
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn ? (
                <>
                  Most quad safari tours in the region offer around <strong>10 km of driving</strong> and
                  about <strong>1 hour of active riding</strong>.
                  <br />
                  <br />
                  Our buggy safari tours offer much more:
                  <br />
                  <br />
                  <strong>Half Day Tour</strong>: 35 km route with <strong>2 to 2.5 hours</strong> of active driving
                  <br />
                  <strong>Full Day Tour</strong>: 75 km route with <strong>4.5 to 5 hours</strong> of active driving
                </>
              ) : (
                <>
                  Bölgedeki ATV turları genelde yaklaşık <strong>10 km sürüş</strong> ve yaklaşık{" "}
                  <strong>1 saat aktif araç kullanımı</strong> sunar.
                  <br />
                  <br />
                  Buggy safari turlarımız ise çok daha fazlasını sunar:
                  <br />
                  <br />
                  <strong>Yarım Gün Tur</strong>: 35 km rota ve <strong>2 – 2,5 saat</strong> aktif sürüş
                  <br />
                  <strong>Tam Gün Tur</strong>: 75 km rota ve <strong>4,5 – 5 saat</strong> aktif sürüş
                </>
              )}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
              marginBottom: "28px",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", marginTop: 0 }}>
              {isEn ? "Real Stops, Real Experience" : "Gerçek Duraklar, Gerçek Deneyim"}
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn ? (
                <>
                  Many quad safari tours do not lead to a real destination.
                  <br />
                  <br />
                  Our buggy safari tours include meaningful stops:
                  <br />
                  <br />
                  <strong>Half Day</strong>: beach swimming break at the midpoint
                  <br />
                  <strong>Full Day</strong>: ancient Lycian city of <strong>Pınara</strong>, lunch with{" "}
                  <strong>Butterfly Valley view</strong>, and a beach swimming break
                </>
              ) : (
                <>
                  Birçok ATV turu gerçek bir hedefe ulaşmadan kısa parkurlarda ilerler.
                  <br />
                  <br />
                  Buggy safari turlarımızda ise anlamlı duraklar vardır:
                  <br />
                  <br />
                  <strong>Yarım Gün</strong>: rota ortasında plaj yüzme molası
                  <br />
                  <strong>Tam Gün</strong>: antik Likya kenti <strong>Pınara</strong>,{" "}
                  <strong>Kelebekler Vadisi manzaralı</strong> öğle yemeği ve plaj yüzme molası
                </>
              )}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
              marginBottom: "28px",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", marginTop: 0 }}>
              {isEn ? "Small Groups, Better Quality" : "Küçük Gruplar, Daha Kaliteli Deneyim"}
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn ? (
                <>
                  Quad tours often run in long convoys of around <strong>15 vehicles</strong>.
                  <br />
                  <br />
                  We operate with a maximum of <strong>4 buggies and 8 guests</strong>, creating an experience
                  that feels almost private.
                </>
              ) : (
                <>
                  ATV turları genelde yaklaşık <strong>15 araçlık</strong> uzun konvoylarla yapılır.
                  <br />
                  <br />
                  Biz ise en fazla <strong>4 buggy ve 8 kişi</strong> ile çalışırız. Bu da deneyimi neredeyse özel
                  tur seviyesine getirir.
                </>
              )}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
              marginBottom: "28px",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", marginTop: 0 }}>
              {isEn ? "Comfort and Safety" : "Konfor ve Güvenlik"}
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn ? (
                <>
                  Our buggies are designed for a safer and more comfortable off-road ride.
                  <br />
                  <br />
                  They include:
                  <br />- seat belts
                  <br />- protective roll bars
                  <br />- sunshade roof
                  <br />- side-by-side seating like a car
                  <br />
                  <br />
                  This makes it easy to ride next to your partner or child, talk comfortably and enjoy the scenery.
                </>
              ) : (
                <>
                  Buggy araçlarımız daha güvenli ve daha konforlu bir off-road deneyimi için tasarlanmıştır.
                  <br />
                  <br />
                  Araçlarımızda:
                  <br />- emniyet kemeri
                  <br />- koruyucu roll-bar
                  <br />- güneşlik tavan
                  <br />- araba gibi yan yana oturma düzeni
                  <br />
                  <br />
                  bulunur. Böylece eşinizle ya da çocuğunuzla rahatça sohbet ederek manzaranın keyfini çıkarabilirsiniz.
                </>
              )}
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
              marginBottom: "28px",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", marginTop: 0 }}>
              {isEn ? "Driving Flow and Vehicle Quality" : "Sürüş Akışı ve Araç Kalitesi"}
            </h2>

            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#5f554d" }}>
              {isEn ? (
                <>
                  Because our groups are small and our drivers are licensed, the route moves more smoothly and
                  naturally.
                  <br />
                  <br />
                  In many quad tours, first-time riders slow down the whole convoy.
                  <br />
                  <br />
                  Our buggies are also maintained carefully with original parts, offering a more reliable experience.
                </>
              ) : (
                <>
                  Gruplarımız küçük olduğu ve sürücülerimiz ehliyetli olduğu için rota daha akıcı ilerler.
                  <br />
                  <br />
                  ATV turlarında ise birçok kişi ilk kez araç kullandığı için konvoyun temposu daha yavaş olabilir.
                  <br />
                  <br />
                  Ayrıca buggy araçlarımız bakımlı durumdadır ve bakımları orijinal parçalarla yapılır.
                </>
              )}
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              background: "#fff",
              borderRadius: "24px",
              padding: "36px 28px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px, 5vw, 34px)", marginTop: 0 }}>
              {isEn
                ? "Looking for Quad Safari in Fethiye?"
                : "Fethiye’de ATV Turu mu Arıyorsunuz?"}
            </h2>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto 24px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#5f554d",
              }}
            >
              {isEn
                ? "If you are staying in Fethiye, Hisarönü or Ölüdeniz and searching for quad safari, our buggy safari tours offer a longer route, better comfort and a more complete off-road day."
                : "Fethiye, Hisarönü veya Ölüdeniz’de kalıyor ve ATV turu arıyorsanız, buggy safari turlarımız size daha uzun rota, daha fazla konfor ve daha dolu bir off-road günü sunar."}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="/buggy-half-day"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {isEn ? "Explore Half Day Tour" : "Yarım Gün Turu İncele"}
              </a>

              <a
                href="/buggy-full-day"
                style={{
                  background: "#1f1a17",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {isEn ? "Explore Full Day Tour" : "Tam Gün Turu İncele"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
