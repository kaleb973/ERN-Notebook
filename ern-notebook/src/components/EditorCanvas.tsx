'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useNotebookStore } from '@/store/useNotebookStore';
import { useEffect } from 'react';

export default function EditorCanvas() {
  const { notes, activeNoteId, updateActiveNote } = useNotebookStore();
  
  // Find the content data for the note that is currently active
  const activeNote = notes.find((n) => n.id === activeNoteId) || notes[0];

  const editor = useEditor({
    extensions: [StarterKit],
    content: activeNote?.content || '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] text-slate-300 text-lg leading-relaxed selection:bg-emerald-500/30',
      },
    },
    // This function automatically updates your global application state every time you type a letter
    onUpdate: ({ editor }) => {
      updateActiveNote({ content: editor.getHTML() });
    },
  });

  // This forces TipTap to swap pages smoothly when you click a different log in your sidebar list
  useEffect(() => {
    if (editor && activeNote && editor.getHTML() !== activeNote.content) {
      editor.commands.setContent(activeNote.content);
    }
  }, [activeNoteId, editor]);

  if (!editor) return null;

  return (
    <div className="w-full border border-slate-900 bg-slate-950/40 rounded-xl p-6 min-h-[450px]">
      <EditorContent editor={editor} />
    </div>
  );
}