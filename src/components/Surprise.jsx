import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import "./Surprise.css";

export default function Surprise({ goToHome }) {

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
    });
  }, []);

  return (
    <motion.div
      className="surprise"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h1>🎉 SURPRISE 🎉</h1>
      <p>
        Thank you for being my safe space, always. It may just be a small cake for now, but it comes with so much love until the day I can give you something even bigger. Have the most beautiful birthday.
      </p>

      <button className="home-btn" onClick={goToHome}>
        Back to Home 🏠
      </button>
    </motion.div>
  );
}
