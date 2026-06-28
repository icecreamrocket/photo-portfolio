import { useEffect, useRef } from "react";
import "./Lightbox.css";

export default function Lightbox({ photos, index, onClose, onNavigate }) {
  const photo = photos[index];
  const touchStartX = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNavigate]);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) onNavigate((index + 1) % photos.length);
      else onNavigate((index - 1 + photos.length) % photos.length);
    }
    touchStartX.current = null;
  }

  if (!photo) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close viewer">
        Close
      </button>

      <button
        className="lightbox__arrow lightbox__arrow--left"
        onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <figure className="lightbox__figure">
        <img src={photo.src} alt={photo.alt} />
        <figcaption>
          <span className="lightbox__meta-mono">No. {String(photo.id).padStart(3, "0")}</span>
          <span className="lightbox__meta-mono">{photo.category}</span>
          <span className="lightbox__meta-mono">{photo.location}</span>
          <span className="lightbox__meta-mono">{photo.date}</span>
        </figcaption>
      </figure>

      <button
        className="lightbox__arrow lightbox__arrow--right"
        onClick={() => onNavigate((index + 1) % photos.length)}
        aria-label="Next photo"
      >
        ›
      </button>

      {/* Contact-sheet filmstrip: the site's signature navigation device */}
      <div className="filmstrip" role="tablist" aria-label="All photos">
        {photos.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={i === index}
            className={`filmstrip__frame ${i === index ? "filmstrip__frame--active" : ""}`}
            onClick={() => onNavigate(i)}
            aria-label={`Go to photo ${i + 1}`}
          >
            <img src={p.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
