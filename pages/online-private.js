export default function OnlinePrivate() {
  return (
    <div className="red-background">
      <div className="container">
        <div className="content-group">

          <h1>ONLINE PRIVATE LESSONS</h1>

          {/* 1 SESSION */}
          <a href="https://privatelessons.vercel.app/" className="button small-button">
            1 Private Lesson - $75
          </a>

          {/* 2–4 SESSIONS */}
          <a href="https://privatelessons.vercel.app/" className="button small-button">
            2–4 Private Lessons - $65 each
          </a>

          {/* 5+ SESSIONS */}
          <a href="https://privatelessons.vercel.app/" className="button small-button">
            5+ Private Lessons - $55 each
          </a>

        </div>
      </div>
    </div>
  );
}