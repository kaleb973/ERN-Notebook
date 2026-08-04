"use client";

import { useState, useEffect, useRef } from "react";
import { useNotebookStore } from "@/store/useNotebookStore";
import { Plus, FileText, Terminal } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const { notes, setActiveNoteId, addNote } = useNotebookStore();

  // Toggle Modal
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen]);

  // Auto-focus and reset on open
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isOpen]);

  // Reset selection index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  if (!isOpen) return null;

  // ARMOR: Guarantee notes is an array to prevent crashes
  const safeNotes = Array.isArray(notes) ? notes : [];
  
  const filteredNotes = safeNotes.filter((note) =>
    (note?.title|| "Untitled Experiment").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectNote = (id: string) => {
    setActiveNoteId(id);
    setIsOpen(false);
  };

  const handleCreateNote = () => {
    addNote(searchQuery || "Untitled Experiment");
    setIsOpen(false);
  };

  // Handle Arrow Keys and Enter
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredNotes.length ? prev + 1 : prev));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex === filteredNotes.length) {
        handleCreateNote();
      } else if (filteredNotes[selectedIndex]) {
        handleSelectNote(filteredNotes[selectedIndex].id);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-zinc-950/90 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-cyan-900/20 flex flex-col font-mono">
        
        {/* Input Header */}
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <Terminal className="h-5 w-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Execute command or search..."
            className="w-full bg-transparent text-zinc-100 focus:outline-none placeholder:text-zinc-600 text-sm"
          />
          <div className="text-[10px] text-zinc-500 bg-zinc-950 border border-zinc-800 px-2 py-1 rounded">ESC</div>
        </div>
        
        {/* Action & Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredNotes.length > 0 ? (
            <>
              <div className="px-3 py-2 text-[10px] text-zinc-500 tracking-wider">
                SAVED_LOGS
              </div>
              {filteredNotes.map((note, index) => (
                <button
                  key={note.id}
                  onClick={() => handleSelectNote(note.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded text-left text-xs transition-colors cursor-pointer ${
                    selectedIndex === index 
                      ? 'bg-cyan-500/10 text-cyan-300 border-l-2 border-cyan-400' 
                      : 'text-zinc-400 hover:bg-zinc-800/50'
                  }`}
                >
                  <FileText className={`h-4 w-4 shrink-0 ${selectedIndex === index ? 'text-cyan-400' : 'text-zinc-600'}`} />
                  <span className="truncate">{note.title}</span>
                  <span className="ml-auto text-[10px] text-zinc-600">
                    {note.metadata?.status || note.status}
                  </span>
                </button>
              ))}
            </>
          ) : (
            <div className="px-3 py-8 text-center text-sm text-zinc-600">
              No logs found matching "{searchQuery}"
            </div>
          )}

          <div className="px-3 py-2 text-[10px] text-zinc-500 mt-2 border-t border-zinc-800/50 pt-4 tracking-wider">
            SYS_COMMANDS
          </div>
          <button
            onClick={handleCreateNote}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded text-left text-xs transition-colors cursor-pointer ${
              selectedIndex === filteredNotes.length 
                ? 'bg-fuchsia-500/10 text-fuchsia-400 border-l-2 border-fuchsia-400' 
                : 'text-zinc-400 hover:bg-zinc-800/50'
            }`}
          >
            <Plus className={`h-4 w-4 shrink-0 ${selectedIndex === filteredNotes.length ? 'text-fuchsia-400' : 'text-zinc-600'}`} />
            <span>[+] INIT NEW LOG {searchQuery ? `"${searchQuery}"` : ''}</span>
          </button>
        </div>

      </div>
    </div>
  );
}