'use client';

import CommandPalette from "@/components/CommandPalette";
import EditorCanvas from "@/components/EditorCanvas";
import Sidebar from "@/components/Sidebar";
import MetadataDrawer from "@/components/MetadataDrawer";
import { useNotebookStore } from "@/store/useNotebookStore";
import { useState } from "react";

export default function WorkspacePage() {
  const { notes, activeNoteId, setActiveNoteId, addNote, updateActiveNote } = useNotebookStore();
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false);
  const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);
  const activeNote = notes.find(n => n.id === activeNoteId) || notes[0];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-zinc-950 bg-lab-grid text-zinc-50 font-sans select-none relative">
      
      <Sidebar
        notes={notes}
        activeNoteId={activeNoteId}
        isCollapsed={isLeftSidebarCollapsed}
        onToggleCollapse={() => setIsLeftSidebarCollapsed(v => !v)}
        onSelectNote={setActiveNoteId}
        onAddNote={() => addNote("Untitled Experiment")}
      />
      <main className="flex-1 h-full flex flex-col overflow-y-auto px-8 py-12 z-10">
        <div className="w-full max-w-3xl mx-auto space-y-6">
          <div className="space-y-2 border-b border-cyan-900/30 pb-4">
            <input
              type="text"
              value={activeNote?.title || ""}
              onChange={(e) => updateActiveNote({ title: e.target.value })}
              className="w-full bg-transparent text-4xl font-black outline-none text-zinc-100 placeholder:text-zinc-800 tracking-tight"
            />
            <div className="flex items-center gap-4 text-xs font-mono tracking-tightt">
              <span className="text-zinc-500">SYS_TIME: {activeNote?.createdAt}</span>
              <span className="text-cyan-500/50">///</span>
              <span className="text-fuchsia-400">LOCAL</span>
            </div>
          </div>
          <EditorCanvas />
        </div>
      </main>
      <MetadataDrawer
        note={activeNote}
        isCollapsed={isRightSidebarCollapsed}
        onToggleCollapse={() => setIsRightSidebarCollapsed(v => !v)}
      />
      <CommandPalette />
    </div>
  );
}