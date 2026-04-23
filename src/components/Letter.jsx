
import "./Letter.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Letter({ goToMemories }) {
  const fullText = ` Sometimes I wonder how something that started so simply became something I carry with me every single day. You didn’t arrive in my life with noise or urgency—you came quietly, through conversations that felt easy, natural… and somehow, over time, essential. Now, when I think about my days, you’re woven into them in a way that feels both gentle and undeniable.

Since 2023, we’ve built something most people wouldn’t understand. We’ve learned each other without the usual shortcuts—no constant physical presence, no everyday routines side by side. Just words, voices, and consistency. And yet, somehow, it feels deeper than many things that are right in front of people. We chose to stay, to talk, to show up—every single day. That kind of effort means something to me. It always will.

And then there were those two moments in time—January 2024 and January 2025. I replay them more often than I admit. The way everything felt so real, so close, so right… like the distance never existed for those brief days. Being around you didn’t feel awkward or unfamiliar—it felt like stepping into something that had already been growing quietly for a long time. Those moments grounded everything we’ve built. They reminded me that this connection isn’t imagined—it’s real, it’s tangible, and it’s ours.

But I’d be lying if I said the distance doesn’t get to me sometimes. There are days when missing you feels heavier than usual—when I wish I could just sit next to you, share silence, or laugh over something small without a screen between us. It’s not always easy loving someone you can’t reach whenever you want. It takes patience… and a kind of strength I didn’t even know I had before you.

Still, even in the distance, you’ve become a place of comfort for me. Your voice, your words, your presence—even from miles away—have a way of settling something inside me. Talking to you feels like coming home in a way I can’t fully explain. And I think that’s what makes this so special… we found something real without needing everything to be perfect.

I think about us sometimes—not in a rushed or pressured way, but in a quiet, hopeful one. Wondering what time might do with this, where life might take us, whether all of this is leading somewhere we can’t fully see yet. There’s uncertainty, yes… but there’s also something beautiful in not forcing the outcome. In choosing to feel, to care, to love, without needing to control where it ends.

Because the truth is—I do love you. Not in a loud or overwhelming way, but in a steady, growing way. In the way I think about you when something good happens. In the way I notice your absence even when you’re just quiet for a moment. In the way I’ve learned your rhythms, your moods, your little details that most people wouldn’t even see.

So maybe we don’t have everything figured out. Maybe we’re still somewhere in between what is and what could be. But I’m okay with that… because what we have right now is real, and it matters.

Let’s keep showing up for each other. Let’s keep choosing this, one day at a time. And let’s trust—gently, patiently—that whatever is meant for us will find its way, in its own time.

Until then, I’ll be right here… loving you in the quiet, steady way that I do.
 ❤️❤️`;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const textRef = useRef(null);
  const speechRef = useRef(null);

  /* ✍️ TYPING EFFECT */
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 25);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  /* ⏳ AUTO SCROLL */
  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight;
    }
  }, [text]);

  /* 🎤 VOICE NARRATION */
 useEffect(() => {
  const synth = window.speechSynthesis;

  const speak = () => {
    const voices = synth.getVoices();

    // Try to find a female voice
    const femaleVoice =
      voices.find((voice) =>
        voice.name.toLowerCase().includes("female")
      ) ||
      voices.find((voice) =>
        voice.name.toLowerCase().includes("zira")
      ) || // Windows female voice
      voices.find((voice) =>
        voice.name.toLowerCase().includes("samantha")
      ) || // Mac female voice
      voices.find((voice) =>
        voice.name.toLowerCase().includes("google uk english female")
      ) ||
      voices.find((voice) =>
        voice.lang === "en-US"
      );

    const utterance = new SpeechSynthesisUtterance(fullText);

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 0.9;
    utterance.pitch = 1.1; // slightly softer tone
    utterance.volume = 1;

    synth.speak(utterance);
  };

  // Some browsers load voices late
  if (speechSynthesis.getVoices().length > 0) {
    speak();
  } else {
    speechSynthesis.onvoiceschanged = speak;
  }

  return () => synth.cancel();
}, []);
  return (
    <div className="letter-page">
      <motion.div
        className="letter-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>💖 My Love Letter</h2>

        <div className="text-container" ref={textRef}>
          <p className="typing-text">
            {text}
            <span className="cursor">|</span>
          </p>
        </div>

        <button onClick={goToMemories}>
          See Our Memories 📸
        </button>
      </motion.div>
    </div>
  );
}