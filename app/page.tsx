export default function HomePage() {
  return (
    <main style={{ background: "#f7f4ee", color: "#1f1a17" }}>
      <section
        style={{
          minHeight: "100vh",
          background:
          background:
  "url('https://raw.githubusercontent.com/comendrive-a11y/comendrive-a11y/main/public/hero.jpg') center/cover",,
          color: "#fff",
          padding: "24px 20px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", opacity: 0.9 }}>
              Come and Drive Travel Agency
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              fontSize: "14px",
            }}
          >
            <a href="#tours" style={{ color: "#fff", textDecoration: "none" }}>Tours</a>
            <a href="#other-tours" style={{ color: "#fff", textDecoration: "none" }}>Other Tours</a>
            <a href="#reviews" style={{ color: "#fff", textDecoration: "none" }}>Reviews</a>
            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
          </nav>
        </header>

        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "80px 0 40px",
          }}
        >
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontSize: "14px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
                opacity: 0.9,
              }}
            >
              5-Star Guest Satisfaction • Ölüdeniz / Fethiye
            </p>

            <h1
              style={{
                fontSize: "clamp(40px, 8vw, 82px)",
                lineHeight: 1.02,
                margin: "0 0 18px",
              }}
            >
        Life Begins
<br />
Where the Road Ends
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "680px",
                marginBottom: "30px",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              Real off-road fun, family-friendly adventure and unforgettable tours.
              From buggy safari to kids ATV, we create the kind of holiday memories
              that stay dusty in the best way.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#tours"
                style={{
                  background: "#fff",
                  color: "#1f1a17",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                View Main Tours
              </a>

              <a
                href="https://wa.me/905446358280"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "transparent",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tours"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", color: "#7a6858" }}>
          Main Experiences
        </p>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", margin: "10px 0 18px" }}>
          Our Signature Tours
        </h2>
        <p style={{ maxWidth: "700px", lineHeight: 1.7, color: "#5c4632", marginBottom: "32px" }}>
          We are not trying to do everything. We are known for doing buggy safari right.
          And yes, kids get their own adrenaline too.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {[
            {
              title: "Buggy Safari Half Day",
              text: "A perfect mix of dirt, fun and scenery for guests who want a shorter but exciting off-road experience.",
            },
            {
              title: "Buggy Safari Full Day",
              text: "A bigger adventure for guests who want more driving, more views and more of the real Come and Drive feeling.",
            },
            {
              title: "Kids ATV Tour",
              text: "A 50-minute closed-track ride designed for children. Safe, fun and guaranteed to create big smiles.",
            },
          ].map((tour) => (
            <div
              key={tour.title}
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ fontSize: "24px", marginTop: 0, marginBottom: "14px" }}>{tour.title}</h3>
              <p style={{ lineHeight: 1.7, color: "#5c4632", marginBottom: 0 }}>{tour.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="other-tours"
        style={{
          background: "#efe7dc",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", color: "#7a6858" }}>
            Other Tours
          </p>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 46px)", margin: "10px 0 24px" }}>
            More Ways to Explore Fethiye
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "Airport Transfer",
              "Private Tours",
              "Jeep Safari",
              "Ölüdeniz Boat Trip",
              "Horse Riding",
              "Fethiye Private Boat Tour",
              "Paragliding",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "18px 20px",
                  fontWeight: 600,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <p style={{ textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", color: "#7a6858" }}>
          Social Proof
        </p>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 46px)", margin: "10px 0 18px" }}>
          5-Star Guest Love
        </h2>
        <p style={{ maxWidth: "760px", lineHeight: 1.7, color: "#5c4632", marginBottom: "28px" }}>
          Your reputation is one of your strongest sales tools. Not magic, just earned dust.
        </p>

        <a
          href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#1f1a17",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          View Tripadvisor Reviews
        </a>
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
            gap: "30px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "36px", marginTop: 0 }}>Come and Drive</h2>
            <p style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
              Official travel agency in Fethiye / Ölüdeniz, focused on buggy safari,
              kids ATV and unforgettable adventure tours.
            </p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>
              <a href="https://wa.me/905446358280" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                WhatsApp: +90 544 635 82 80
              </a>
            </p>
            <p>
              <a href="mailto:comendrive@gmail.com" style={{ color: "#fff" }}>
                comendrive@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3>Follow Us</h3>
            <p>
              <a
                href="https://www.instagram.com/comeanddrive?igsh=MW55d2dvbmx4Zzg0NA=="
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="http://www.facebook.com/comendrivetravel/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
              >
                Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
              >
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          zIndex: 50,
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
