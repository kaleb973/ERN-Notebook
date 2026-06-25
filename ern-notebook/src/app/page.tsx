'use client'; // At the very top so React knows it's an interactive page

import { Layers, Beaker, Terminal } from "lucide-react";
import CommandPalette from "@/components/CommandPalette";
import EditorCanvas from "@/components/EditorCanvas"; 
// Import matches user store file path:
import { useNotebookStore } from "@/store/useNotebookStore";

export default function WorkspacePage() {
  // This hooks user UI up to the Zustand memory engine
  const { notes, activeNoteId, setActiveNoteId, addNote, updateActiveNote } = useNotebookStore();

  // Finds the specific note user are currently looking at
  const activeNote = notes.find(n => n.id === activeNoteId) || notes[0];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-50 font-sans select-none">
      
      {/* 1. Left Sidebar Panel */}
      <aside className="w-[260px] h-full bg-slate-900 border-r border-slate-800 flex flex-col p-4">
        <div className="flex items-center gap-2 px-2 pb-4 border-b border-slate-800">
          <Beaker className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold tracking-wide text-slate-200">ERN Workspace</span>
        </div>
        
        {/* Dynamic List Loop */}
        <div className="flex-1 py-4 text-sm px-2 space-y-1 overflow-y-auto select-none">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Saved Logs</span>
            <button 
              onClick={() => addNote("Untitled Experiment")} 
              className="text-xs text-emerald-400 hover:text-emerald-300 transition underline cursor-pointer"
            >
              + New Log
            </button>
          </div>
          {notes.map((note) => (
            <button
              key={note.id}
              onClick={() => setActiveNoteId(note.id)}
              className={`w-full text-left px-2 py-1.5 rounded text-xs transition truncate block cursor-pointer ${
                note.id === activeNoteId 
                  ? 'bg-slate-800 text-emerald-400 font-medium border-l-2 border-emerald-400 pl-1.5' 
                  : 'text-slate-400 hover:bg-slate-800/50'
              }`}
            >
              📄 {note.title}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-600 px-2 flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5" />
          <span>Press <kbd className="bg-slate-800 px-1 rounded text-slate-400">⌘K</kbd> for commands</span>
        </div>
      </aside>

      {/* 2. Center Lab Journal Canvas */}
      <main className="flex-1 h-full flex flex-col bg-slate-950 overflow-y-auto px-8 py-12">
        <div className="w-full max-w-3xl mx-auto space-y-6">
          
          {/* Note Document Header Input */}
          <div className="space-y-2 border-b border-slate-900 pb-4">
            <input 
              type="text" 
              value={activeNote?.title || ""} 
              onChange={(e) => updateActiveNote({ title: e.target.value })}
              className="w-full bg-transparent text-4xl font-bold outline-none text-slate-100 placeholder:text-slate-800"
            />
            <div className="text-xs text-slate-500 font-mono tracking-tight">
              CREATED: {activeNote?.createdAt} // STATUS: IN_PROGRESS
            </div>
          </div>
          
          {/* Real Inline Editor Canvas Component */}
          <EditorCanvas />
        </div>
      </main>

      {/* 3. Right Scientific Metadata Drawer */}
      <section className="w-[300px] h-full bg-slate-900 border-l border-slate-800 flex flex-col p-4">
        <div className="flex items-center gap-2 px-2 pb-4 border-b border-slate-800">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium tracking-wide text-slate-300">Experiment Parameters</span>
        </div>
        <div className="flex-1 py-4 text-xs text-slate-400 px-2 font-mono space-y-2">
          <div>ID: {activeNote?.id}</div>
          <div>STATUS: <span className="text-emerald-400">{activeNote?.status}</span></div>
          <div>TIMESTAMP: {activeNote?.createdAt}</div>
          <div>CHAR_COUNT: {activeNote?.content.replace(/<[^>]*>/g, '').length || 0}</div>
        </div>
      </section>
      
      <CommandPalette />
    </div>
  );
}