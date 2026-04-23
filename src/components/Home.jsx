import "./Home.css";
import { motion } from "framer-motion";

export default function Home({ goToLetter }) {
  return (
    <div className="home">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday My Love 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Today is all about you ✨
      </motion.p>

      <motion.button
        onClick={goToLetter}
        whileHover={{ scale: 1.1 }}
        className="btn"
      >
        Open Your Message 💌
      </motion.button>
    </div>
  );
}