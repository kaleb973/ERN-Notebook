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
    <div className="relative w-full border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-white dark:bg-slate-950">
      {/* Actual Editor Canvas */}
      <EditorContent editor={editor} />
    </div>
  );
}