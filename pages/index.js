// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="description-box">
        <h1>SELECT YOUR INTEREST</h1>

        <Link href="/dance-classes" className="button small-button">
          DANCE CLASSES
        </Link>

        <Link href="/event-entertainment" className="button small-button">
          EVENT ENTERTAINMENT
        </Link>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/nailahnoorbellydance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/instagram.png" alt="Instagram" className="social-icon" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61554206453366"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/facebook.png" alt="Facebook" className="social-icon" />
          </a>

          <a
            href="https://www.youtube.com/@nailahnoorbellydance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/youtube.png" alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}