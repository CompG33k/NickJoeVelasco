import { useEffect, useLayoutEffect, useRef } from "react";

// Use layout effect in browser, effect on server (CRA is browser anyway)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function getScrollPosition({ element, target }) {
  // ✅ If target is missing or not mounted, don't crash
  const targetEl = target?.current ?? target ?? null;

  if (!targetEl || typeof targetEl.getBoundingClientRect !== "function") {
    return { x: 0, y: 0 };
  }

  const rect = targetEl.getBoundingClientRect();

  // element is typically window; keep it optional & safe
  const scrollX =
    element?.pageXOffset ?? window.pageXOffset ?? document.documentElement.scrollLeft ?? 0;
  const scrollY =
    element?.pageYOffset ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;

  return { x: rect.left + scrollX, y: rect.top + scrollY };
}

/**
 * useScrollPosition(effect, deps, targetRef, useWindow = true)
 * - effect: ({ prevPos, currPos }) => void
 * - deps: dependency array
 * - targetRef: optional ref/element to measure
 * - useWindow: scroll listener on window or not (default true)
 */
export function useScrollPosition(
  effect,
  deps = [],
  targetRef = null,
  useWindow = true
) {
  const position = useRef({ x: 0, y: 0 });

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({
      element: useWindow ? window : null,
      target: targetRef,
    });

    effect({ prevPos: position.current, currPos });
    position.current = currPos;

    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      // throttle to next tick
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(callBack, 16);
      }
    };

    if (!useWindow) return undefined;

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
