'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import { useNotebookStore } from '@/store/useNotebookStore';
import { useEffect } from 'react';

export default function EditorCanvas() {
  const { currentNote, updateNoteContent } = useNotebookStore();

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
        updateNoteContent(currentNote.id, editor.getHTML());
      }
    },
  });

  // Keep content synchronized when swapping notes
  useEffect(() => {
    if (editor && currentNote && editor.getHTML() !== currentNote.content) {
      editor.commands.setContent(currentNote.content);
    }
  }, [currentNote?.id, editor]);

  if (!editor) return null;

  return (
    <div className="relative w-full border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-white dark:bg-slate-950">
      {/* Selection Bubble Menu */}
      <BubbleMenu 
        editor={editor} 
        tippyOptions={{ 
          duration: 100,
          // This keeps the bubble menu pinned safely during the block-size shift
          moveTransition: 'transform 0.1s ease-out' 
        }}
      >
        <div className="flex items-center gap-1 bg-slate-900 dark:bg-slate-800 px-2 py-1 rounded-md shadow-xl border border-slate-700">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-1 px-2 text-xs rounded font-medium ${editor.isActive('bold') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            Bold
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-1 px-2 text-xs rounded font-medium ${editor.isActive('italic') ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            Italic
          </button>

          <div className="w-[1px] h-4 bg-slate-700 mx-1" />

          {/* H1 Toggle Button */}
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-1 px-2 text-xs rounded font-medium ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            H1
          </button>

          {/* H2 Toggle Button */}
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-1 px-2 text-xs rounded font-medium ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            H2
          </button>
        </div>
      </BubbleMenu>

      {/* Actual Editor Canvas */}
      <EditorContent editor={editor} />
    </div>
  );
}