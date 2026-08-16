import React, { useEffect, useState } from "react";

const THEME_EVENT = "bp-theme-change";

// Shared across every rendered instance (desktop floating + mobile inline) —
// each reads the DOM as the source of truth on mount, and a custom event
// keeps them in sync if you toggle one and then resize past the breakpoint
// without a reload.
function useTheme() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    const sync = () =>
      setIsLight(document.documentElement.classList.contains("light"));
    window.addEventListener(THEME_EVENT, sync);
    return () => window.removeEventListener(THEME_EVENT, sync);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {
      // localStorage unavailable (private browsing, etc.) — toggle still
      // works for the current page load, it just won't persist.
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return [isLight, toggle];
}

// Same lantern silhouette either way — only the interior "glow" cells change
// color, with a CSS transition, so flipping the toggle reads as the light
// actually igniting rather than one icon getting swapped for another.
const GLOW_LIT = "#f2b25c";
const GLOW_UNLIT = "#3a4258";

const Lantern = ({ isLight, className }) => {
  const glowFill = isLight ? GLOW_LIT : GLOW_UNLIT;
  return (
    <svg
      className={className}
      viewBox="0 0 72 88"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* frame — inherits the button's current text color */}
      <rect x="32" y="0" width="8" height="8" fill="currentColor" />
      <rect x="32" y="8" width="8" height="8" fill="currentColor" />
      <rect x="24" y="16" width="8" height="8" fill="currentColor" />
      <rect x="32" y="16" width="8" height="8" fill="currentColor" />
      <rect x="40" y="16" width="8" height="8" fill="currentColor" />
      <rect x="16" y="24" width="8" height="8" fill="currentColor" />
      <rect x="24" y="24" width="8" height="8" fill="currentColor" />
      <rect x="32" y="24" width="8" height="8" fill="currentColor" />
      <rect x="40" y="24" width="8" height="8" fill="currentColor" />
      <rect x="48" y="24" width="8" height="8" fill="currentColor" />
      <rect x="8" y="32" width="8" height="8" fill="currentColor" />
      <rect x="56" y="32" width="8" height="8" fill="currentColor" />
      <rect x="8" y="40" width="8" height="8" fill="currentColor" />
      <rect x="56" y="40" width="8" height="8" fill="currentColor" />
      <rect x="8" y="48" width="8" height="8" fill="currentColor" />
      <rect x="56" y="48" width="8" height="8" fill="currentColor" />
      <rect x="16" y="56" width="8" height="8" fill="currentColor" />
      <rect x="24" y="56" width="8" height="8" fill="currentColor" />
      <rect x="32" y="56" width="8" height="8" fill="currentColor" />
      <rect x="40" y="56" width="8" height="8" fill="currentColor" />
      <rect x="48" y="56" width="8" height="8" fill="currentColor" />
      <rect x="24" y="64" width="8" height="8" fill="currentColor" />
      <rect x="32" y="64" width="8" height="8" fill="currentColor" />
      <rect x="40" y="64" width="8" height="8" fill="currentColor" />
      <rect x="16" y="72" width="8" height="8" fill="currentColor" />
      <rect x="24" y="72" width="8" height="8" fill="currentColor" />
      <rect x="32" y="72" width="8" height="8" fill="currentColor" />
      <rect x="40" y="72" width="8" height="8" fill="currentColor" />
      <rect x="48" y="72" width="8" height="8" fill="currentColor" />
      <rect x="8" y="80" width="8" height="8" fill="currentColor" />
      <rect x="56" y="80" width="8" height="8" fill="currentColor" />
      {/* glow interior — animates between dim and lit */}
      <rect
        x="24"
        y="32"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="32"
        y="32"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="40"
        y="32"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="24"
        y="40"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="32"
        y="40"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="40"
        y="40"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="24"
        y="48"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="32"
        y="48"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
      <rect
        x="40"
        y="48"
        width="8"
        height="8"
        fill={glowFill}
        className="lantern-glow-cell"
      />
    </svg>
  );
};

function ToggleButton({ className }) {
  const [isLight, toggle] = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`theme-toggle-btn flex items-center justify-center rounded border border-bp-line bg-bp-surface text-bp-accent transition-colors duration-300 hover:border-bp-accent ${isLight ? "is-lit" : ""} ${className}`}
    >
      <Lantern isLight={isLight} className="h-5 w-4" />
    </button>
  );
}

// Desktop: fixed floating button, top-right (hidden on mobile — the navbar
// has its own inline instance instead, see MobileThemeToggle below).
export function ThemeToggle() {
  return (
    <ToggleButton className="fixed right-4 top-4 z-50 hidden h-10 w-10 lg:flex lg:right-6 lg:top-6" />
  );
}

// Mobile/tablet: sits inline in the navbar's top bar next to the hamburger,
// rather than floating — avoids colliding with it.
export function MobileThemeToggle() {
  return <ToggleButton className="flex h-9 w-9 lg:hidden" />;
}

export default ThemeToggle;
