'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useNotebookStore } from '@/store/useNotebookStore';
import { useEffect } from 'react';

export default function EditorCanvas() {
  const { notes, activeNoteId, updateActiveNote } = useNotebookStore();

  const currentNote = notes.find((note) => note.id === activeNoteId) || notes[0];

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Limit heading levels if you only want H1 and H2
        heading: {
          levels: [1, 2],
        },
      }),
    ],
    content: currentNote?.content || '<p>Start typing...</p>',
    editorProps: {
      attributes: {
        // We use Tailwind's child selectors [&_h1] to force styles onto the editor output
        class: [
          'focus:outline-none min-h-[400px] max-w-none',
          'text-slate-800 dark:text-slate-100 leading-relaxed',
          // Explicit H1 styles
          '[&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:mt-6 [&_h1]:mb-2 [&_h1]:text-slate-900 [&_h1]:dark:text-white',
          // Explicit H2 styles
          '[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:text-slate-800 [&_h2]:dark:text-slate-100',
        ].join(' '),
      },
    },
    onUpdate: ({ editor }) => {
      if (currentNote) {
        updateActiveNote({ content: editor.getHTML() });
      }
    },
  });

  // Keep content synchronized when swapping notes
  useEffect(() => {
    if (editor && currentNote && editor.getHTML() !== currentNote.content) {
      editor.commands.setContent(currentNote.content);
    }
  }, [currentNote?.id, currentNote?.content, editor]);

  if (!editor) return null;

  return (
  <div className="w-full border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-transparent">
    {/* Permanent Top Toolbar */}
    <div className="flex items-center gap-1 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-2">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1.5 px-3 text-xs rounded font-medium transition-colors ${
          editor.isActive('bold') ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
        }`}
      >
        Bold
      </button>
      
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1.5 px-3 text-xs rounded font-medium transition-colors ${
          editor.isActive('italic') ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
        }`}
      >
        Italic
      </button>

      <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-1" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-1.5 px-3 text-xs rounded font-medium transition-colors ${
          editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
        }`}
      >
        H1
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-1.5 px-3 text-xs rounded font-medium transition-colors ${
          editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
        }`}
      >
        H2
      </button>
    </div>

    {/* Padded Workspace Text Field */}
    <div className="p-4 flex flex-col gap-4">
      <input
        type="text"
        value={currentNote?.title || ''}
        onChange={(e) => updateActiveNote({ title: e.target.value })}
        placeholder="Untitled Experiment / Run..."
        className="w-full text-3xl font-black bg-transparent text-slate-900 dark:text-white focus:outline-none tracking-tight"
      />

      {/* Scientific Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-xs">
        <div>
          <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">Experiment ID</span>
          <input 
            type="text" 
            placeholder="e.g., BME-004"
            value={currentNote?.metadata?.experimentId || ''}
            onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, experimentId: e.target.value } })}
            className="w-full bg-transparent font-medium text-slate-700 dark:text-slate-200 focus:outline-none"
          />
        </div>
        <div>
          <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">Trial / Run No.</span>
          <input 
            type="text" 
            placeholder="e.g., 03"
            value={currentNote?.metadata?.trialNumber || ''}
            onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, trialNumber: e.target.value } })}
            className="w-full bg-transparent font-medium text-slate-700 dark:text-slate-200 focus:outline-none"
          />
        </div>
        <div>
          <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">Environment Temp</span>
          <input 
            type="text" 
            placeholder="e.g., 22.5 °C"
            value={currentNote?.metadata?.temperature || ''}
            onChange={(e) => updateActiveNote({ metadata: { ...currentNote?.metadata, temperature: e.target.value } })}
            className="w-full bg-transparent font-medium text-slate-700 dark:text-slate-200 focus:outline-none"
          />
        </div>
        <div>
  <span className="block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1">Status</span>
  <select
  value={
    // If status is missing, null, or empty string, force select to ""
    !currentNote?.metadata?.status 
      ? "" 
      : ['Active', 'Completed', 'Failed'].includes(currentNote.metadata.status)
        ? currentNote.metadata.status 
        : 'custom'
  }
  onChange={(e) => updateActiveNote({ 
    metadata: { ...currentNote?.metadata, status: e.target.value === 'custom' ? 'Custom Run' : e.target.value } 
  })}
  className="w-full -ml-1 rounded-md border bg-slate-100/80 px-2 py-1 font-medium text-slate-700 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200 focus:outline-none appearance-none cursor-pointer"
>
  {/* This MUST have value="" to match the fallback state above */}
  <option value="" disabled className="dark:bg-slate-900 text-slate-400">Select Status</option>
  
  <option value="Active" className="dark:bg-slate-900">🟢 Active</option>
  <option value="Completed" className="dark:bg-slate-900">🔵 Completed</option>
  <option value="Failed" className="dark:bg-slate-900">🔴 Failed</option>
  <option value="custom" className="dark:bg-slate-900">⚙️ Custom...</option>
</select>

  {/* Renders a text input field only when a custom status is active */}
  {currentNote?.metadata?.status !== 'Active' && 
   currentNote?.metadata?.status !== 'Completed' && 
   currentNote?.metadata?.status !== 'Failed' && (
    <input
      type="text"
      value={currentNote?.metadata?.status || ''}
      onChange={(e) => updateActiveNote({ 
        metadata: { ...currentNote?.metadata, status: e.target.value } 
      })}
      placeholder="Enter status..."
      className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-200 focus:outline-none mt-1 text-[11px]"
      autoFocus
    />
  )}
</div>
      </div>

      <EditorContent editor={editor} />
    </div>
  </div>
);
}