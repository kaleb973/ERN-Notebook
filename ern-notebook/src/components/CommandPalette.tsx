"use client";

import { useState, useEffect, useRef } from "react";
import { useNotebookStore } from "@/store/useNotebookStore";
import { Search, Plus, FileText } from "lucide-react";

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

  if (!isOpen) return null;

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset selection index when search query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleSelectNote = (id: string) => {
    setActiveNoteId(id);
    setIsOpen(false);
  };

  const handleCreateNote = () => {
    addNote(searchQuery || "Untitled Experiement");
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
        // Select existing note
        handleSelectNote(filteredNotes[selectedIndex].id);
      } else {
        handleCreateNote();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl flex flex-col">
        {/* Input Header */}
        <div className="flex items-center gap-3 p-4">
          <div className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
          <Search className="h-5 w-5 text-slate-500 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder="Search logs, run scripts, or create new trials..."
            className="w-full bg-transparent font-sans text-slate-200 focus:outline-none placeholder:text-slate-600 text-lg"
          />
        <div className="font-mono text-[10px] text-slate-500 bg-slate-800 px-2 py-1 rounded">ESC</div>
      </div>
        {/* Action & Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredNotes.length > 0 ? (
            <>
              <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Saved Logs
              </div>
              {filteredNotes.map((note, index) => (
                <button
                  key={note.id}
                  onClick={() => handleSelectNote(note.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-sm transition-colors cursor-pointer ${
                    selectedIndex === index 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400'
                  }`}
                >
                  <FileText className={`h-4 w-4 shrink-0 ${selectedIndex === index ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span className="truncate">{note.title}</span>
                  <span className="ml-auto text-[10px] font-mono text-slate-600">
                    {note.metadata?.status || note.status}
                  </span>
                </button>
              ))}
            </>
          ) : (
            <div className="px-3 py-8 text-center text-sm text-slate-500">
              No logs found matching "{searchQuery}"
            </div>
          )}

          <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-2 border-t border-slate-800/50 pt-4">
            System Commands
          </div>
          <button
            onClick={handleCreateNote}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-sm transition-colors cursor-pointer ${
              selectedIndex === filteredNotes.length 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400'
            }`}
          >
            <Plus className={`h-4 w-4 shrink-0 ${selectedIndex === filteredNotes.length ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span>Create new log {searchQuery ? `"${searchQuery}"` : ''}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
