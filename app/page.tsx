export default function HomePage() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #d9c3a3 0%, #f7f4ee 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <p
            style={{
              letterSpacing: "2px",
              fontSize: "14px",
              textTransform: "uppercase",
              color: "#5c4632",
              marginBottom: "16px",
            }}
          >
            Come and Drive Travel Agency
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 7vw, 72px)",
              lineHeight: 1.05,
              color: "#1f1a17",
              margin: "0 0 20px",
            }}
          >
            Fethiye’s Only
            <br />
            Buggy Safari Specialists
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#4b4037",
              maxWidth: "700px",
              margin: "0 auto 32px",
            }}
          >
            5-star guest satisfaction, unique off-road experiences, kids ATV fun
            and unforgettable adventure tours in Ölüdeniz.
          </p>
        </div>
      </section>
    </main>
  );
}
