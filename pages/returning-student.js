import { useState } from "react";
import { useRouter } from "next/router";

export default function ReturningStudent() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setNotFound(false);

    try {
      const res = await fetch("/api/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      setLoading(false);

      // ✅ EXISTS → GO TO PURCHASE FLOW
      if (data.allowed) {
        window.location.href = "/returning-options";
      } 
      // ❌ NOT FOUND → SHOW REGISTER CARD
      else {
        setNotFound(true);
      }

    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="red-background">
      <div className="container">
        <div className="content-group">

          {/* TITLE */}
          <h1>ENTER YOUR EMAIL</h1>

          {/* FORM */}
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>

            <input
              type="email"
              placeholder="start typing here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="button"
              disabled={loading || notFound}
              style={{
                opacity: loading || notFound ? 0.5 : 1,
                cursor: loading || notFound ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "CHECKING..." : "CONTINUE"}
            </button>

          </form>

          {/* ERROR */}
          {error && (
            <div className="social-text" style={{ color: "#00bbff" }}>
              {error}
            </div>
          )}

          {/* ❌ NOT FOUND STATE (THIS IS WHAT YOU WANTED) */}
          {notFound && (
  <div
    style={{
      width: "100%",
      marginTop: "18px",
      padding: "16px",
      borderRadius: "14px",
      border: "2px solid #00bbff",
      background: "rgba(255,255,255,0.6)",
    }}
  >
    <p className="social-text" style={{ marginBottom: "12px" }}>
      you have not registered previously with this email. please click the button below to complete your registration.
    </p>

    <button
      onClick={() => window.location.href = "https://tally.so/r/mDbxRp"}
      className="button"
    >
      CONTINUE TO REGISTER
    </button>
  </div>
)}

        </div>
      </div>
    </div>
  );
}