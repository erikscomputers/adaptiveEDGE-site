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
    flex items-center gap-2
    px-4 py-2 rounded-full shadow-lg
    text-white text-sm font-medium
    transition-all duration-300
    hover:-translate-y-1
    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
  `}
  style={{ backgroundColor: "#1E6F78" }}
>
  <span>↑</span>
  Back to the top
</button>
  );
}