import "./Header.css";

export default function Header({ profile, categories, activeCategory, onSelectCategory }) {
  return (
    <header className="header">
      <div className="header__top">
        <h1 className="header__name">{profile.name}</h1>
        <nav className="header__links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
      </div>

      <p className="header__bio">{profile.bio}</p>

      <div className="header__filters" role="tablist" aria-label="Filter by category">
        <button
          role="tab"
          aria-selected={activeCategory === "ALL"}
          className={`filter ${activeCategory === "ALL" ? "filter--active" : ""}`}
          onClick={() => onSelectCategory("ALL")}
        >
          ALL
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`filter ${activeCategory === cat ? "filter--active" : ""}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
