<section
  id="full-day"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
  }}
>
  <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>
    {t.fullDayTitle}
  </h2>

  <div
    style={{
      fontSize: "20px",
      fontStyle: "italic",
      opacity: 0.8,
      marginBottom: "20px",
    }}
  >
    {lang === "en"
      ? "Half day for fun. Full day for discovery."
      : "Yarım gün eğlence için. Tam gün keşif için."}
  </div>

  <p style={{ maxWidth: "520px", fontSize: "18px", opacity: 0.8 }}>
    {t.fullDayText}
  </p>

  <a
    href="/buggy-full-day"
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
    {t.bookFull}
  </a>
</section>
