import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    // SSR errors check to avoid server-side rendering issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    // refresh state while first component mount
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // f-listener for media query changes
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // sub to media query changes
    media.addEventListener("change", listener);

    // remove sub on unmount
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}
