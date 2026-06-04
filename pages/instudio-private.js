export default function InStudioPrivate() {
  return (
    <div className="red-background">
      <div className="container">
        <div className="content-group">

          <h1>IN-STUDIO PRIVATE LESSONS</h1>

          {/* 1 SESSION */}
          <a href="https://privatelessons.vercel.app/" className="button small-button">
            1 Private Lesson - $85
          </a>

          {/* 2–4 SESSIONS */}
          <a href="https://privatelessons.vercel.app/" className="button small-button">
            2–4 Private Lessons - $75 each
          </a>

          {/* 5+ SESSIONS */}
          <a href="https://privatelessons.vercel.app/" className="button small-button">
            5+ Private Lessons - $65 each
          </a>

        </div>
      </div>
    </div>
  );
}