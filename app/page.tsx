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
    position: "sticky",
    top: "12px",
    zIndex: 100,
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    padding: "14px 18px",
    borderRadius: "18px",
    background: "rgba(20,18,15,0.45)",
    backdropFilter: "blur(8px)",
  }}
>
          <div
            style={{
              color: "#ffffff",
              fontFamily: "system-ui, sans-serif",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            <div
              style={{
                fontSize: "26px",
                fontWeight: 500,
                letterSpacing: "2px",
              }}
            >
              COME & DRIVE
            </div>

            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                opacity: 0.85,
                marginTop: "4px",
              }}
            >
              TRAVEL AGENCY
            </div>
          </div>
          <nav
  style={{
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    fontSize: "13px",
    alignItems: "center",
  }}
>
            <a href="#half-day" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              Buggy Safari Half Day
            </a>

            <a href="#full-day" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              Buggy Safari Full Day
            </a>

            <a href="#kids-quad" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              Kids Quad Bike
            </a>

            <a href="#other-tours" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              Other Tours
            </a>

            <a href="#contact" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/905446358280"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            WhatsApp
          </a>
        </header>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "2px",
              opacity: 0.9,
              marginBottom: "14px",
            }}
          >
            5-STAR GUEST SATISFACTION · ÖLÜDENİZ / FETHİYE
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.05,
              margin: "0 0 20px",
              fontWeight: 700,
            }}
          >
            Life Begins
            <br />
            Where the Road
            <br />
            Ends
          </h1>

          <p
            style={{
              maxWidth: "520px",
              fontSize: "18px",
              opacity: 0.95,
              marginBottom: "28px",
            }}
          >
            Real off-road fun, forest adventure and unforgettable holiday memories.
            From buggy safari to kids ATV, we turn dust into stories worth telling.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#half-day"
              style={{
                background: "#fff",
                color: "#000",
                padding: "12px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              View Main Tour
            </a>

            <a
              href="https://wa.me/905446358280"
              style={{
                border: "1px solid #fff",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              WhatsApp Us
            </a>
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
  id="half-day"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
  }}
>
  <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>
    Buggy Safari Half Day
  </h2>

  <p style={{ maxWidth: "520px", fontSize: "18px", opacity: 0.8 }}>
    Forest off-road driving, dust, adrenaline and a refreshing swim stop.
    Perfect balance between adventure and comfort.
  </p>

  <a
    href="https://wa.me/905446358280"
    style={{
      display: "inline-block",
      marginTop: "20px",
      background: "#1f1a17",
      color: "#fff",
      padding: "12px 22px",
      borderRadius: "999px",
      textDecoration: "none",
    }}
  >
    Book Half Day
  </a>
</section>


<section
  id="full-day"
  style={{
    background: "#fff",
    padding: "80px 20px",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>
      Buggy Safari Full Day
    </h2>

    <p style={{ maxWidth: "520px", fontSize: "18px", opacity: 0.8 }}>
      Mountains, hidden roads, Saklıkent canyon line and long adventure route.
      A real expedition day for explorers.
    </p>

    <a
      href="https://wa.me/905446358280"
      style={{
        display: "inline-block",
        marginTop: "20px",
        background: "#1f1a17",
        color: "#fff",
        padding: "12px 22px",
        borderRadius: "999px",
        textDecoration: "none",
      }}
    >
      Book Full Day
    </a>
  </div>
</section>
      <section
  id="kids-quad"
  style={{
    padding: "80px 20px",
    background: "#f7f4ee",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      background: "#fff",
      borderRadius: "24px",
      padding: "40px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
    }}
  >
    <h2
      style={{
        fontSize: "36px",
        marginBottom: "14px",
        color: "#1f1a17",
      }}
    >
      Kids Quad Bike
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: 1.7,
        color: "#5f554d",
        maxWidth: "700px",
        marginBottom: "24px",
      }}
    >
      A safe and exciting first off-road experience for children.
      50 minutes on a closed track, full of fun, smiles and real adventure feeling.
    </p>

    <div
      style={{
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      <span
        style={{
          background: "#efe7dc",
          padding: "10px 16px",
          borderRadius: "999px",
          fontWeight: 500,
        }}
      >
        50 minutes
      </span>

      <span
        style={{
          background: "#efe7dc",
          padding: "10px 16px",
          borderRadius: "999px",
          fontWeight: 500,
        }}
      >
        Closed track
      </span>

      <span
        style={{
          background: "#efe7dc",
          padding: "10px 16px",
          borderRadius: "999px",
          fontWeight: 500,
        }}
      >
        For children
      </span>
    </div>

    <a
      href="https://wa.me/905446358280"
      style={{
        display: "inline-block",
        background: "#25D366",
        color: "#fff",
        padding: "14px 24px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: 600,
      }}
    >
      Book Kids Quad Bike
    </a>
  </div>
</section>
      <section
  id="other-tours"
  style={{
    padding: "80px 20px",
    background: "#efe7dc",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <p
      style={{
        fontSize: "14px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#6b625b",
        marginBottom: "12px",
      }}
    >
      Other Tours
    </p>

    <h2
      style={{
        fontSize: "40px",
        marginBottom: "16px",
        color: "#1f1a17",
      }}
    >
      More Ways to Explore Fethiye
    </h2>

    <p
      style={{
        maxWidth: "720px",
        fontSize: "18px",
        lineHeight: 1.7,
        color: "#5f554d",
        marginBottom: "32px",
      }}
    >
      Beyond buggy safari, we also help our guests enjoy the best of Fethiye and Ölüdeniz.
      Choose from our most popular extra experiences.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
      }}
    >
      {[
        "Airport Transfer",
        "Saklikent Canyon Safari",
        "Ölüdeniz Boat Trip",
        "Horse Riding",
        "Private Boat Tour",
        "Paragliding",
      ].map((tour) => (
        <div
          key={tour}
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: "22px",
              color: "#1f1a17",
            }}
          >
            {tour}
          </h3>

          <a
            href={`https://wa.me/905446358280?text=Hello%20I%20want%20to%20get%20information%20about%20${encodeURIComponent(
              tour
            )}`}
            style={{
              display: "inline-block",
              marginTop: "8px",
              color: "#1f1a17",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Ask on WhatsApp →
          </a>
        </div>
      ))}
    </div>
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
      Real reviews. Real tours. Real dust. See why our guests love the Come and Drive experience.
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
      gap: "40px",
    }}
  >
    <div>
      <h2 style={{ marginTop: 0 }}>COME & DRIVE</h2>
      <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
        Official travel agency in Fethiye / Ölüdeniz.
        Buggy safari, kids ATV and unforgettable off-road experiences.
      </p>
    </div>

    <div>
      <h3>Contact</h3>

      <p>
        <a
          href="https://wa.me/905446358280"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          WhatsApp: +90 544 635 82 80
        </a>
      </p>

      <p>
        <a
          href="mailto:comendrive@gmail.com"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          comendrive@gmail.com
        </a>
      </p>

      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        TÜRSAB A-Group Travel Agency — License No: 11387
      </p>
    </div>

    <div>
      <h3>Follow Us</h3>

<p>
  <a
    href="https://www.instagram.com/comeanddrive"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "#E4405F",
      textDecoration: "none",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <img
      src="https://cdn.simpleicons.org/instagram/E4405F"
      alt="Instagram"
      style={{ width: "20px", height: "20px" }}
    />
    Instagram
  </a>
</p>

<p>
  <a
    href="https://www.facebook.com/comendrivetravel"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "#1877F2",
      textDecoration: "none",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <img
      src="https://cdn.simpleicons.org/facebook/1877F2"
      alt="Facebook"
      style={{ width: "20px", height: "20px" }}
    />
    Facebook
  </a>
</p>

<p>
  <a
    href="https://www.tripadvisor.com/Attraction_Review-g298031-d17689087-Reviews-COME_DRIVE-Fethiye_Mugla_Province_Turkish_Aegean_Coast.html"
    target="_blank"
    rel="noreferrer"
    style={{
      color: "#34E0A1",
      textDecoration: "none",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <img
      src="https://cdn.simpleicons.org/tripadvisor/34E0A1"
      alt="Tripadvisor"
      style={{ width: "20px", height: "20px" }}
    />
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
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    zIndex: 50,
  }}
>
  WhatsApp
</a>
     </main>
  );
}
