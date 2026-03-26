import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api.get("/health/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage("Could not connect to backend");
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>yclobbying</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;