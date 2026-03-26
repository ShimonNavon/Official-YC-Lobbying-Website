import knessetImage from "../assets/knesset.jpg";

function Hero() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <img
        src={knessetImage}
        alt="Knesset"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          marginBottom: "2rem",
        }}
      />

      <h1
        style={{
          fontSize: "clamp(1.4rem, 4vw, 2.5rem)",
          lineHeight: 1.5,
          marginBottom: "1rem",
          direction: "rtl",
          wordBreak: "break-word",
        }}
      >
        חברת י.כ יחסי ממשל ולובינג הוקמה בשנת 1997 והיא חברת הלובינג הוותיקה והמובילה בישראל המתמחה במתן ייעוץ אסטרטגי בזירת הממשל
      </h1>

      <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
        מעל עשרים שנות ניסיון בתחום הלובינג
      </p>

      <button
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        ליצירת קשר
      </button>
    </section>
  );
}

export default Hero;