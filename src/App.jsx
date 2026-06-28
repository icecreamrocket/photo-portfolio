import { useMemo, useState } from "react";
import { photos, profile } from "./data/photos";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import Lightbox from "./components/Lightbox";
import Footer from "./components/Footer";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = useMemo(
    () => [...new Set(photos.map((p) => p.category))],
    []
  );

  const filtered = useMemo(
    () =>
      activeCategory === "ALL"
        ? photos
        : photos.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Header
        profile={profile}
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setOpenIndex(null);
        }}
      />

      <PhotoGrid photos={filtered} onOpen={(i) => setOpenIndex(i)} />

      <Footer profile={profile} count={filtered.length} />

      {openIndex !== null && (
        <Lightbox
          photos={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(i) => setOpenIndex(i)}
        />
      )}
    </>
  );
}
