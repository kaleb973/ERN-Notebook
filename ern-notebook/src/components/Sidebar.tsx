'use client';

import { Beaker, Terminal } from 'lucide-react';
import type { Note } from '@/store/useNotebookStore';

interface SidebarProps {
  notes: Note[];
  activeNoteId: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onSelectNote: (id: string) => void;
  onAddNote: () => void;
}

export default function Sidebar({ notes, activeNoteId, isCollapsed, onToggleCollapse, onSelectNote, onAddNote }: SidebarProps) {
  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-[260px]'} h-full bg-zinc-950/80 backdrop-blur-md border-r border-zinc-800/80 flex flex-col p-4 transition-all duration-300 ease-out z-20`}>
      <div className="flex items-center justify-between gap-2 px-2 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2 min-w-0">
          <img src="/glass.png" alt="Logo" className="h-6 w-6 shrink-0 invert" />
          {!isCollapsed && <span className="font-bold tracking-widest text-zinc-200 truncate uppercase text-sm">BenchNode</span>}
        </div>
        <button type="button" onClick={onToggleCollapse} className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-[10px] text-zinc-400 hover:text-cyan-400">
          {isCollapsed ? '>' : '<'}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <div className="flex-1 py-6 text-sm px-1 space-y-1 overflow-y-auto select-none">
            <div className="flex justify-between items-center mb-4 px-2">
              <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">Local Records</span>
              <button onClick={onAddNote} className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono cursor-pointer">
                [+] INIT
              </button>
            </div>
            {notes.map((note) => (
              <button key={note.id} onClick={() => onSelectNote(note.id)}
                className={`w-full text-left px-3 py-2 rounded text-xs transition-all truncate block cursor-pointer font-mono ${
                  note.id === activeNoteId
                    ? 'bg-cyan-500/10 text-cyan-300 border-l-2 border-cyan-400'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 border-l-2 border-transparent'
                }`}>
                {'>'} {note.title}
              </button>
            ))}
          </div>
          <div className="text-[10px] font-mono text-zinc-500 px-2 flex items-center gap-2 bg-zinc-900/50 p-2 rounded border border-zinc-800">
            <Terminal className="h-3 w-3 text-cyan-500" />
            <span>CMD: <kbd className="text-zinc-300">Ctrl+K</kbd></span>
          </div>
        </>
      )}
    </aside>
  );
}