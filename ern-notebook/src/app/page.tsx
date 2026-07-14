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
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-50 font-sans select-none">
      <Sidebar
        notes={notes}
        activeNoteId={activeNoteId}
        isCollapsed={isLeftSidebarCollapsed}
        onToggleCollapse={() => setIsLeftSidebarCollapsed(v => !v)}
        onSelectNote={setActiveNoteId}
        onAddNote={() => addNote("Untitled Experiment")}
      />
      <main className="flex-1 h-full flex flex-col bg-slate-950 overflow-y-auto px-8 py-12">
        <div className="w-full max-w-3xl mx-auto space-y-6">
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