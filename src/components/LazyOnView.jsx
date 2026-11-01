"use client";

import { useEffect, useRef, useState } from "react";

// Mounts its children only when the placeholder gets close to the viewport,
// so heavy widgets (and their images) are not loaded or hydrated up front.
export default function LazyOnView({ children, rootMargin = "500px", style, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={{ width: "100%", height: "100%", ...style }}>
      {visible ? children : null}
    </div>
  );
}
