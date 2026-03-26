import { useState } from "react";
import api from "./api";

function App() {
  const [status, setStatus] = useState("");

  const sendTest = async () => {
    try {
      const response = await api.post("/contact/", {
        name: "React Test",
        email: "react@example.com",
        company: "YC Lobbying",
        phone: "999999999",
        message: "Sent from React",
      });

      setStatus("Success: " + response.data.id);
    } catch (error) {
      setStatus("Error sending request");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>yclobbying</h1>
      <button onClick={sendTest}>Send Test Contact</button>
      <p>{status}</p>
    </div>
  );
}

export default App;