import Link from "next/link";

export default function Home() {
  return (
    <div className="home-background">
      <div className="container">

        {/* LOGO OUTSIDE CARD */}
        <a
          href="https://www.nailahnoorbellydance.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-wrapper"
        >
          <img
            src="/images/nnbd-logo.png"
            alt="Nailah Noor Belly Dance"
            className="logo"
          />
        </a>

        {/* CARD */}
        <div className="content-group">

          <h1>I AM A...</h1>

          <Link href="/new-student" className="button">
            new student
          </Link>

          <Link href="/returning-student" className="button">
            returning student
          </Link>

        </div>

      </div>
    </div>
  );
}