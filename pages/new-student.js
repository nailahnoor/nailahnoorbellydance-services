import { useState } from "react";
import { useRouter } from "next/router";

export default function NewStudent() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [exists, setExists] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setExists(false);

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

      if (data.allowed) {
        window.location.href = "https://tally.so/r/mDbxRp";
      } else {
        setExists(true);
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
              disabled={loading || exists}
              style={{
                opacity: loading || exists ? 0.5 : 1,
                cursor: loading || exists ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "CHECKING..." : "SUBMIT"}
            </button>

          </form>

          {/* ERROR */}
          {error && (
            <div className="social-text" style={{ color: "#00bbff" }}>
              {error}
            </div>
          )}

          {/* EXISTS STATE (MODERN CARD FEEL) */}
          {exists && (
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
                you have registered previously. if you would like to purchase classes, click the button below.
              </p>

              <button
                onClick={() => router.push("/returning-options")}
                className="button"
              >
                CONTINUE TO SHOP
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}