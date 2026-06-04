import { useState } from "react";

export default function ReturningOptions() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    setError("");

    if (!location || !type) {
      setError("please select both options before continuing.");
      return;
    }

    window.location.href = `/${location}-${type}`;
  };

  const isActive = (value, current) => value === current;

  const rowStyle = {
    display: "flex",
    width: "100%",
    border: "2px solid #00bbff",
    borderRadius: "14px",
    overflow: "hidden",
    marginBottom: "6px", // 🔥 tighter spacing (was 12px)
    backgroundColor: "#ffffff"
  };

  const optionStyle = (active) => ({
    flex: 1,
    padding: "14px",
    border: "none",
    backgroundColor: active ? "#7fdcff" : "#ffffff",
    color: "#0b5394",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    textTransform: "lowercase",
    cursor: "pointer",
    transition: "0.2s ease"
  });

  const dividerStyle = () => ({
    width: "2px",
    backgroundColor: "#00bbff"
  });

  return (
    <div className="red-background">
      <div className="container">
        <div className="content-group">

          <h1>SELECT YOUR LEARNING FORMAT</h1>

          <div className="social-text">
            select one in each row
          </div>

          {/* ROW 1 */}
          <div style={rowStyle}>
            <button
              style={optionStyle(isActive("online", location))}
              onClick={() =>
                setLocation(location === "online" ? "" : "online")
              }
            >
              online
            </button>

            <div style={dividerStyle()} />

            <button
              style={optionStyle(isActive("instudio", location))}
              onClick={() =>
                setLocation(location === "instudio" ? "" : "instudio")
              }
            >
              in-studio
            </button>
          </div>

          {/* ROW 2 */}
          <div style={rowStyle}>
            <button
              style={optionStyle(isActive("group", type))}
              onClick={() =>
                setType(type === "group" ? "" : "group")
              }
            >
              group classes
            </button>

            <div style={dividerStyle()} />

            <button
              style={optionStyle(isActive("private", type))}
              onClick={() =>
                setType(type === "private" ? "" : "private")
              }
            >
              private lessons
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="social-text" style={{ color: "#00bbff" }}>
              {error}
            </div>
          )}

          {/* CONTINUE */}
          {location && type && (
            <button className="button" onClick={handleContinue}>
              continue to purchase
            </button>
          )}

        </div>
      </div>
    </div>
  );
}