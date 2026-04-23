
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import Letter from "./components/Letter";
import Memories from "./components/Memories";
import Surprise from "./components/Surprise";

function App() {
  const [page, setPage] = useState("home");

  return (
    <AnimatePresence mode="wait">
      {page === "home" && (
        <Home key="home" goToLetter={() => setPage("letter")} />
      )}

      {page === "letter" && (
        <Letter key="letter" goToMemories={() => setPage("memories")} />
      )}

      {page === "memories" && (
        <Memories key="memories" goToSurprise={() => setPage("surprise")} />
      )}

    
      {page === "surprise" && <Surprise goToHome={() => setPage("home")} />}
    </AnimatePresence>
  );
}

export default App;