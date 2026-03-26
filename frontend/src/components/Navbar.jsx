function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      borderBottom: "1px solid #eee"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        yclobbying
      </div>
    </nav>
  );
}

export default Navbar;