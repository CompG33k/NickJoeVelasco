import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [pulseOnce, setPulseOnce] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
        setPulseOnce(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!pulseOnce) return;

    const timer = setTimeout(() => {
      setPulseOnce(false);
    }, 1600); // matches animation duration

    return () => clearTimeout(timer);
  }, [pulseOnce]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className={`scroll-to-top ${pulseOnce ? "pulse-once" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M12 4l-7 7h4v9h6v-9h4z" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
