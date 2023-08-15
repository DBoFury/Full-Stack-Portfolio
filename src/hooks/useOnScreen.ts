import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  threshold: number = 1.0
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (!isIntersecting && entry.isIntersecting) setIsIntersecting(true);
        },
        { threshold: threshold }
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
