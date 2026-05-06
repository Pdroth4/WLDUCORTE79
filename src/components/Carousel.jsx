import { useEffect, useMemo, useState, useRef } from "react";
import { Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { galleryImages } from "../data/siteData.js";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const total = galleryImages.length;
  const carouselRef = useRef(null);

  const currentImage = useMemo(
    () => galleryImages[currentIndex],
    [currentIndex]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % total);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [total]);

  function goToPrevious() {
    setCurrentIndex((index) => (index - 1 + total) % total);
  }

  function goToNext() {
    setCurrentIndex((index) => (index + 1) % total);
  }

  function handleDragStart(e) {
    setIsDragging(true);
    setDragStart(e.type.includes("mouse") ? e.clientX : e.touches[0].clientX);
  }

  function handleDragEnd(e) {
    if (!isDragging) return;
    setIsDragging(false);

    const dragEnd = e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX;
    const dragDistance = dragStart - dragEnd;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  }

  return (
    <section id="galeria" className="section-padding bg-barber-dark">
      <div className="container-site">
        <div className="mb-7 text-center">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-barber-blue">
            Galeria
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
            Veja o estilo da casa
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-0 rounded-[2rem] bg-barberGradient opacity-20 blur-3xl" />

          <div className="glass-card relative overflow-hidden">
            <div
              ref={carouselRef}
              className="relative aspect-[4/5] min-[430px]:aspect-[16/11] md:aspect-[16/8] cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              {currentImage.src ? (
                <motion.img
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55 }}
                />
              ) : (
                <motion.div
                  key={currentIndex}
                  className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_top_left,rgba(17,123,255,.32),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(227,27,61,.32),transparent_36%),linear-gradient(135deg,#08080B,#15151B)] p-6"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="text-center">
                    <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-3xl border border-white/15 bg-white/5">
                      <ImageIcon className="h-9 w-9 text-white/70" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
                      {currentImage.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/65 sm:text-base">
                      {currentImage.text}
                    </p>
                  </div>
                </motion.div>
              )}
              

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-4 pt-24 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                  WLDUCORTE79
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-black/40 px-4 py-4">
              {galleryImages.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Ir para ${item.title}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-9 bg-barberGradient"
                      : "w-3 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
