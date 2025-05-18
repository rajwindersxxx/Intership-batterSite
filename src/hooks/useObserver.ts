import { useEffect, useRef, useState } from "react";
interface Options {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}
function useObserver(options: Options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);
  return { ref, isVisible , setIsVisible};
}

export default useObserver;
