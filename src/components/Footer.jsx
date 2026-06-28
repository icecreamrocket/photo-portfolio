import "./Footer.css";

export default function Footer({ profile, count }) {
  return (
    <footer className="footer">
      <span>
        {count} frame{count !== 1 ? "s" : ""} indexed
      </span>
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
    </footer>
  );
}
