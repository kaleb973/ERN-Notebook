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

export default function Sidebar({
  notes,
  activeNoteId,
  isCollapsed,
  onToggleCollapse,
  onSelectNote,
  onAddNote,
}: SidebarProps) {
  return (
    <aside className={`${isCollapsed ? 'w-25' : 'w-[260px]'} h-full bg-slate-900 border-r border-slate-800 flex flex-col p-4 transition-all duration-800 ease-out`}>
      <div className="flex items-center justify-between gap-2 px-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2 min-w-0">
          <Beaker className="h-5 w-5 text-emerald-400 shrink-0" />
          {!isCollapsed && <span className="font-semibold tracking-wide text-slate-200 truncate">ERN Workspace</span>}
        </div>
        <button type="button" onClick={onToggleCollapse}
          className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-700">
          {isCollapsed ? '>' : '<'}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <div className="flex-1 py-4 text-sm px-2 space-y-1 overflow-y-auto select-none">
            <div className="flex justify-between items-center mb-2 px-1">
              <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Saved Logs</span>
              <button onClick={onAddNote} className="text-xs text-emerald-400 hover:text-emerald-300 transition underline cursor-pointer">
                + New Log
              </button>
            </div>
            {notes.map((note) => (
              <button key={note.id} onClick={() => onSelectNote(note.id)}
                className={`w-full text-left px-2 py-1.5 rounded text-xs transition truncate block cursor-pointer ${
                  note.id === activeNoteId
                    ? 'bg-slate-800 text-emerald-400 font-medium border-l-2 border-emerald-400 pl-1.5'
                    : 'text-slate-400 hover:bg-slate-800/50'
                }`}>
                📄 {note.title}
              </button>
            ))}
          </div>
          <div className="text-xs text-slate-600 px-2 flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>Press <kbd className="bg-slate-800 px-1 rounded text-slate-400">Ctrl/⌘ K</kbd> for commands</span>
          </div>
        </>
      )}
    </aside>
  );
}