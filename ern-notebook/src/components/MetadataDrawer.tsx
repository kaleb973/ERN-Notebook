'use client';

import { Layers } from 'lucide-react';
import type { Note } from '@/store/useNotebookStore';

interface MetadataDrawerProps {
  note?: Note;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function MetadataDrawer({ note, isCollapsed, onToggleCollapse }: MetadataDrawerProps) {
  return (
    <section className={`${isCollapsed ? 'w-17' : 'w-[300px]'} h-full bg-slate-900 border-l border-slate-800 flex flex-col p-4 transition-all duration-800 ease-out`}>
      <div className="flex items-center justify-between gap-2 px-2 pb-4 border-b border-slate-800">
        {!isCollapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <Layers className="h-4 w-4 text-emerald-400 shrink-0" />
            <span className="text-sm font-medium tracking-wide text-slate-300 truncate">Experiment Parameters</span>
          </div>
        )}
        <button type="button" onClick={onToggleCollapse}
          className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-700">
          {isCollapsed ? '<' : '>'}
        </button>
      </div>
      {!isCollapsed && (
        <div className="flex-1 py-4 text-xs text-slate-400 px-2 font-mono space-y-2">
          <div>ID: {note?.id}</div>
          <div>STATUS: <span className="text-emerald-400">{note?.status}</span></div>
          <div>TIMESTAMP: {note?.createdAt}</div>
          <div>CHAR_COUNT: {note?.content.replace(/<[^>]*>/g, '').length || 0}</div>
        </div>
      )}
    </section>
  );
}