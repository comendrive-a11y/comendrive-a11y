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
              gap: "18px",
              flexWrap: "wrap",
              fontSize: "14px",
              alignItems: "center",
            }}
          >
            <a href="#half-day" style={{ color: "#fff", textDecoration: "none" }}>
              Buggy Safari Half Day
            </a>

            <a href="#full-day" style={{ color: "#fff", textDecoration: "none" }}>
              Buggy Safari Full Day
            </a>

            <a href="#kids-quad" style={{ color: "#fff", textDecoration: "none" }}>
              Kids Quad Bike
            </a>

            <a href="#other-tours" style={{ color: "#fff", textDecoration: "none" }}>
              Other Tours
            </a>

            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/"
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
              href="https://wa.me/"
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
    href="https://wa.me/"
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
      href="https://wa.me/"
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
    </main>
  );
}
