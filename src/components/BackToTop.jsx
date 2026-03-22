import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full shadow-lg
        bg-black text-white
        transition-all duration-300
        hover:bg-gray-800 hover:-translate-y-1
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}