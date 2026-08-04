'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useNotebookStore } from '@/store/useNotebookStore';
import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';

export default function EditorCanvas() {
  const { notes, activeNoteId, updateActiveNote } = useNotebookStore();
  const currentNote = notes.find((note) => note.id === activeNoteId) || notes[0];
  const [isSimulating, setIsSimulating] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: { levels: [1, 2] } })],
    content: currentNote?.content || '<p>Start typing...</p>',
    editorProps: {
      attributes: {
        class: [
          'focus:outline-none min-h-[400px] max-w-none',
          'text-zinc-300 leading-relaxed font-mono text-sm',
          '[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-cyan-400 [&_h1]:tracking-tighter [&_h1]:mt-6 [&_h1]:mb-2',
          '[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-100 [&_h2]:mt-5 [&_h2]:mb-2',
        ].join(' '),
      },
    },
    onUpdate: ({ editor }) => {
      if (currentNote) updateActiveNote({ content: editor.getHTML() });
    },
  });

  useEffect(() => {
    if (editor && currentNote && editor.getHTML() !== currentNote.content) {
      editor.commands.setContent(currentNote.content);
    }
  }, [currentNote?.id, currentNote?.content, editor]);

  // NEW FEATURE: Simulated DAQ Stream
  const runTelemetrySimulation = () => {
    if (!editor || isSimulating) return;
    setIsSimulating(true);
    let count = 0;
    
    editor.chain().focus().insertContent(`\n\n> [SYS] INITIATING BIO-SENSOR HANDSHAKE...\n> [SYS] CONNECTED TO COM3\n`).run();

    const interval = setInterval(() => {
      const hr = 72 + Math.floor(Math.random() * 8) - 4; // Fake Heart Rate
      const spo2 = 97 + Math.floor(Math.random() * 3); // Fake SpO2
      const time = new Date().toLocaleTimeString([], { hour12: false });
      
      editor.chain().focus().insertContent(`[${time}] TELEMETRY_READ: HR=${hr}bpm | SpO2=${spo2}% | SIGNAL=STABLE\n`).run();
      
      count++;
      if (count > 5) {
        clearInterval(interval);
        editor.chain().focus().insertContent(`> [SYS] DATA STREAM TERMINATED.\n\n`).run();
        setIsSimulating(false);
      }
    }, 600);
  };

  if (!editor) return null;

  return (
    <div className="w-full border border-cyan-900/30 rounded-lg overflow-hidden bg-zinc-950/50 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.05)]">
      
      {/* Editor Toolbar */}
      <div className="flex items-center gap-1 border-b border-cyan-900/30 bg-zinc-900/80 p-2 font-mono text-xs">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`px-3 py-1 rounded transition-colors ${editor.isActive('bold') ? 'bg-cyan-500/20 text-cyan-300' : 'text-zinc-400 hover:text-cyan-400'}`}>B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`px-3 py-1 rounded transition-colors ${editor.isActive('italic') ? 'bg-cyan-500/20 text-cyan-300' : 'text-zinc-400 hover:text-cyan-400'}`}>I</button>
        <div className="w-[1px] h-4 bg-zinc-700 mx-1" />
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`px-3 py-1 rounded transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-cyan-500/20 text-cyan-300' : 'text-zinc-400 hover:text-cyan-400'}`}>H1</button>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Scientific Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-900/40 p-4 rounded border border-zinc-800/80 text-xs font-mono">
          <div>
            <span className="block text-zinc-500 mb-1">EXP_ID</span>
            <input type="text" placeholder="BME-004" value={currentNote?.metadata?.experimentId || ''} onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, experimentId: e.target.value } })} className="w-full bg-transparent text-cyan-300 focus:outline-none" />
          </div>
          <div>
            <span className="block text-zinc-500 mb-1">TRIAL_NO</span>
            <input type="text" placeholder="01" value={currentNote?.metadata?.trialNumber || ''} onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, trialNumber: e.target.value } })} className="w-full bg-transparent text-cyan-300 focus:outline-none" />
          </div>
          <div>
            <span className="block text-zinc-500 mb-1">ENV_TEMP</span>
            <input type="text" placeholder="22.5 C" value={currentNote?.metadata?.temperature || ''} onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, temperature: e.target.value } })} className="w-full bg-transparent text-cyan-300 focus:outline-none" />
          </div>
          <div>
            <span className="block text-zinc-500 mb-1">STATUS</span>
            <select value={!currentNote?.metadata?.status ? "" : ['Active', 'Completed', 'Failed'].includes(currentNote.metadata.status) ? currentNote.metadata.status : 'custom'} onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, status: e.target.value === 'custom' ? 'Custom Run' : e.target.value } })} className="w-full bg-transparent text-fuchsia-400 focus:outline-none appearance-none cursor-pointer">
              <option value="" disabled className="bg-zinc-900">Select...</option>
              <option value="Active" className="bg-zinc-900">[🟢] Active</option>
              <option value="Completed" className="bg-zinc-900">[🔵] Completed</option>
              <option value="Failed" className="bg-zinc-900">[🔴] Failed</option>
              <option value="custom" className="bg-zinc-900">[⚙️] Custom...</option>
            </select>
            {currentNote?.metadata?.status && !['Active', 'Completed', 'Failed'].includes(currentNote.metadata.status) && (
              <input type="text" value={currentNote?.metadata?.status || ''} onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, status: e.target.value } })} className="w-full bg-transparent border-b border-zinc-700 text-cyan-300 focus:outline-none mt-1 text-[11px]" autoFocus />
            )}
          </div>
        </div>

        <div className="min-h-[400px]">
          <EditorContent editor={editor} />
        </div>

        {/* Execution Tray */}
        <div className="flex items-center justify-between border-t border-cyan-900/30 pt-4 mt-4 font-mono">
          <div className="flex gap-2">
            <button onClick={() => { const time = new Date().toLocaleTimeString(); editor.chain().focus().insertContent(`\n[${time}] `).run(); }} className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 rounded text-xs transition-colors">
              [+] Timestamp
            </button>
            <button onClick={runTelemetrySimulation} disabled={isSimulating} className={`px-3 py-1.5 border rounded text-xs transition-colors flex items-center gap-2 ${isSimulating ? 'bg-cyan-950 border-cyan-800 text-cyan-500' : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-fuchsia-400 hover:text-fuchsia-300'}`}>
              <Activity className="w-3 h-3" />
              {isSimulating ? 'STREAMING...' : 'RUN DAQ SIMULATION'}
            </button>
          </div>
          <button onClick={() => { const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentNote, null, 2)); const a = document.createElement('a'); a.href = dataStr; a.download = `ERN-${currentNote.id}.json`; a.click(); }} className="px-4 py-1.5 bg-cyan-950 text-cyan-400 border border-cyan-800 hover:bg-cyan-900 rounded text-xs transition-colors">
            EXPORT .JSON
          </button>
        </div>
      </div>
    </div>
  );
}