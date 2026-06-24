"use client";

import { useState, useEffect } from "react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
      <div className="w-full max-w-lg space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <div className="text-xs font-mono text-emerald-400">// ERN CORE COMMAND SYSTEM</div>
        <input
          type="text"
          placeholder="Search notes, jump to telemetry, or run script..."
          className="w-full rounded-lg border border-slate-800 bg-slate-950 p-3 font-sans text-slate-200 focus:border-emerald-500 focus:outline-none"
          autoFocus
        />
        <div className="font-mono text-[10px] text-slate-500">PRESS ESC TO EXIT</div>
      </div>
    </div>
  );
}
