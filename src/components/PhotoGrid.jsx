import "./PhotoGrid.css";

export default function PhotoGrid({ photos, onOpen }) {
  if (photos.length === 0) {
    return <p className="grid-empty">No frames filed under this category yet.</p>;
  }

  return (
    <div className="grid">
      {photos.map((photo, i) => (
        <button
          key={photo.id}
          className={`cell cell--${photo.orientation}`}
          onClick={() => onOpen(i)}
          aria-label={`Open photo: ${photo.alt}`}
        >
          <img src={photo.src} alt={photo.alt} loading={i < 4 ? "eager" : "lazy"} />
          <span className="cell__tag">
            <span className="cell__frame">No. {String(photo.id).padStart(3, "0")}</span>
            <span className="cell__category">{photo.category}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
