import { Layers, Beaker, Terminal } from "lucide-react";
import CommandPalette from "@/components/CommandPalette";
import EditorCanvas from "@/components/EditorCanvas"; // Import your new editor

export default function WorkspacePage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-50 font-sans select-none">
      
      {/* 1. Left Sidebar Panel */}
      <aside className="w-[260px] h-full bg-slate-900 border-r border-slate-800 flex flex-col p-4">
        <div className="flex items-center gap-2 px-2 pb-4 border-b border-slate-800">
          <Beaker className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold tracking-wide text-slate-200">ERN Workspace</span>
        </div>
        <div className="flex-1 py-4 text-sm text-slate-500 px-2 italic">
          [Sidebar: Project Explorer Loading...]
        </div>
        <div className="text-xs text-slate-600 px-2 flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5" />
          <span>Press <kbd className="bg-slate-800 px-1 rounded text-slate-400">⌘K</kbd> for commands</span>
        </div>
      </aside>

      {/* 2. Center Lab Journal Canvas */}
      <main className="flex-1 h-full flex flex-col bg-slate-950 overflow-y-auto px-8 py-12">
        <div className="w-full max-w-3xl mx-auto space-y-6">
          {/* Note Document Header */}
          <div className="space-y-2 border-b border-slate-900 pb-4">
            <input 
              type="text" 
              defaultValue="ECG Filter Calibration Test" 
              className="w-full bg-transparent text-4xl font-bold outline-none text-slate-100 placeholder:text-slate-800"
            />
            <div className="text-xs text-slate-500 font-mono tracking-tight">
              CREATED: {new Date().toLocaleDateString()} // STATUS: IN_PROGRESS
            </div>
          </div>
          
          {/* Real Inline Editor Canvas */}
          <EditorCanvas />
        </div>
      </main>

      {/* 3. Right Scientific Metadata Drawer */}
      <section className="w-[300px] h-full bg-slate-900 border-l border-slate-800 flex flex-col p-4">
        <div className="flex items-center gap-2 px-2 pb-4 border-b border-slate-800">
          <Layers className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium tracking-wide text-slate-300">Experiment Parameters</span>
        </div>
        <div className="flex-1 py-4 text-xs text-slate-500 px-2 font-mono space-y-2">
          <div>// Live telemetry & environment variables will align here.</div>
        </div>
      </section>
      
      <CommandPalette />
    </div>
  );
}