import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import "./Memories.css";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
];

const videos = [
  "/videos/0.mp4",
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
  "/videos/6.mp4",
  "/videos/7.mp4",
  "/videos/8.mp4",
  "/videos/9.mp4",
];


export default function Memories({ goToSurprise }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [vidIndex, setVidIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const i = setInterval(() => {
      setImgIndex((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(() => {
      setVidIndex((p) => (p + 1) % videos.length);
    }, 5000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="memories">

      <h2>📸 Your Moments</h2>

      {/* IMAGE SLIDER */}
      <div className="slider">
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          className="slide"
          onClick={() =>
            setSelected({ type: "image", src: images[imgIndex] })
          }
        />

        <button className="prev" onClick={(e) => {
          e.stopPropagation();
          setImgIndex((imgIndex - 1 + images.length) % images.length);
        }}>⟵</button>

        <button className="next" onClick={(e) => {
          e.stopPropagation();
          setImgIndex((imgIndex + 1) % images.length);
        }}>⟶</button>
      </div>

      {/* IMAGE VIEW */}
      {selected?.type === "image" && (
        <div className="inline-viewer">
          <img src={selected.src} />
        </div>
      )}

      {/* VIDEO SLIDER */}
      <h2>🎬 Our Videos</h2>

    <div className="slider">

  <div className="video-wrapper">
<video
  key={vidIndex}
  className="slide"
  muted
  playsInline
  autoPlay
  loop
  onClick={(e) => {
    e.stopPropagation();
    setSelected({ type: "video", src: videos[vidIndex] });
  }}
>
  <source src={videos[vidIndex]} type="video/mp4" />
</video>

  <div className="play-overlay">▶</div>
</div>
  <button
    className="prev"
    onClick={(e) => {
      e.stopPropagation();
      setVidIndex((vidIndex - 1 + videos.length) % videos.length);
    }}
  >
    ⟵
  </button>

  <button
    className="next"
    onClick={(e) => {
      e.stopPropagation();
      setVidIndex((vidIndex + 1) % videos.length);
    }}
  >
    ⟶
  </button>
</div>

      {/* VIDEO VIEW */}
      {selected?.type === "video" && (
        <div className="inline-viewer">
      <video src={selected.src} controls autoPlay playsInline />
        </div>
      )}

      <button className="final-btn" onClick={goToSurprise}>
        Final Surprise 🎁
      </button>
    </div>
  );
}