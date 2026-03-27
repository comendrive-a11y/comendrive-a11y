export default function HomePage() {
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
 <div
  style={{
    color: "#ffffff",
    fontFamily: "system-ui, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  }}
>
  <div
    style={{
      fontSize: "30px",
      fontWeight: 500,
      letterSpacing: "2px",
      textAlign: "center",
    }}
  >
    COME & DRIVE
  </div>

  <div
    style={{
      fontSize: "11px",
      letterSpacing: "3px",
      opacity: 0.85,
      marginTop: "5px",
      textAlign: "center",
    }}
  >
    TRAVEL AGENCY
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
    <a href="#tours" style={{ color: "#fff", textDecoration: "none" }}>
      Tours
    </a>

    <a href="#other-tours" style={{ color: "#fff", textDecoration: "none" }}>
      Other Tours
    </a>

    <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
      Contact
    </a>
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
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    WhatsApp
  </a>
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
              Real off-road fun, forest adventure and unforgettable holiday memories.
              From buggy safari to kids ATV, we turn dust into stories worth telling.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#buggy-tour"
                style={{
                  background: "#fff",
                  color: "#1f1a17",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                View Main Tour
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
        style={{
          background: "#ffffff",
          padding: "32px 20px",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "15px",
            fontWeight: 600,
            color: "#1f1a17",
            textAlign: "center",
          }}
        >
          <div style={{ flex: 1, minWidth: "220px" }}>
            🚗 Driving licence required
          </div>

          <div style={{ flex: 1, minWidth: "220px" }}>
            🌲 Forest off-road route
          </div>

          <div style={{ flex: 1, minWidth: "220px" }}>
            🌊 1-hour beach swim stop
          </div>
        </div>
      </section>

      <section
        id="buggy-tour"
        style={{
          padding: "80px 20px",
          background: "#f7f4ee",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            background: "#fff",
            borderRadius: "18px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>
            Buggy Safari Adventure
          </h2>

          <p style={{ opacity: 0.7, marginBottom: "25px", lineHeight: 1.7 }}>
            Forest off-road driving experience with a 1-hour beach swim stop.
            The perfect mix of adrenaline, nature and holiday fun.
          </p>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "30px",
            }}
          >
            ⏱ Duration: 3 hours | 🌊 Swim break included
          </div>

          <a
            href="https://wa.me/905446358280"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "16px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Book via WhatsApp
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "60px 20px",
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#6b625b",
              marginBottom: "12px",
            }}
          >
            Guest Reviews
          </p>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "14px",
              color: "#1f1a17",
            }}
          >
            Rated 5 Stars by Happy Guests
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#5f554d",
              maxWidth: "720px",
              margin: "0 auto 26px",
            }}
          >
            Real reviews. Real tours. Real dust. See why our guests love the
            Come and Drive experience.
          </p>

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
              Read Reviews
            </a>
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
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "13px",
            color: "#7a6858",
          }}
        >
          Main Experiences
        </p>

        <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", margin: "10px 0 18px" }}>
          Our Signature Tours
        </h2>

        <p
          style={{
            maxWidth: "700px",
            lineHeight: 1.7,
            color: "#5c4632",
            marginBottom: "32px",
          }}
        >
          We are known for doing buggy safari right. And yes, kids get their own
          adrenaline too.
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
              text: "A fun off-road experience for guests who want adrenaline, nature and a memorable holiday activity.",
            },
            {
              title: "Buggy Safari Full Day",
              text: "A longer adventure for guests who want more driving, more views and more of the real buggy safari feeling.",
            },
            {
              title: "Kids ATV Tour",
              text: "A 50-minute closed-track ride designed for children. Safe, fun and full of big smiles.",
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
              <h3 style={{ fontSize: "24px", marginTop: 0, marginBottom: "14px" }}>
                {tour.title}
              </h3>
              <p style={{ lineHeight: 1.7, color: "#5c4632", marginBottom: 0 }}>
                {tour.text}
              </p>
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
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "13px",
              color: "#7a6858",
            }}
          >
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
              <a
                href="https://wa.me/905446358280"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
              >
                WhatsApp: +90 544 635 82 80
              </a>
            </p>

            <p>
              <a href="mailto:comendrive@gmail.com" style={{ color: "#fff" }}>
                comendrive@gmail.com
              </a>
            </p>

            <p style={{ marginTop: "18px", opacity: 0.8 }}>
              Official TÜRSAB A-Group Travel Agency — License No: 11387
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
