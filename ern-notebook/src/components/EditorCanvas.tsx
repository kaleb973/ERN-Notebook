'use client';

// 1. Import the BubbleMenu React Component from @tiptap/react
import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import BubbleMenuExtension from '@tiptap/extension-bubble-menu';
import StarterKit from '@tiptap/starter-kit';
import { useNotebookStore } from '@/store/useNotebookStore';
import { useEffect } from 'react';
import { Bold, Italic, Strikethrough, Heading1, Heading2 } from 'lucide-react';

export default function EditorCanvas() {
  const { notes, activeNoteId, updateActiveNote } = useNotebookStore();
  
  const activeNote = notes.find((n) => n.id === activeNoteId) || notes[0];

  const editor = useEditor({
    // 3. Pass the Extension logic into the extensions array
    extensions: [
      StarterKit, 
      BubbleMenuExtension,
    ],
    content: activeNote?.content || '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] text-slate-300 text-lg leading-relaxed selection:bg-emerald-500/30 p-2',
      },
    },
    onUpdate: ({ editor }) => {
      updateActiveNote({ content: editor.getHTML() });
    },
  });

  useEffect(() => {
    if (editor && activeNote && editor.getHTML() !== activeNote.content) {
      editor.commands.setContent(activeNote.content);
    }
  }, [activeNoteId, editor]);

  if (!editor) return null;

  return (
    <div className="w-full border border-slate-900 bg-slate-950/40 rounded-xl p-6 min-h-[450px] relative">
      
      {/* 4. Use the React Component here in your JSX */}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1.5 shadow-xl backdrop-blur-sm animate-in fade-in zoom-in-95 duration-100"
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-1.5 rounded hover:bg-slate-800 transition text-slate-300 ${editor.isActive('bold') ? 'text-emerald-400 bg-slate-800' : ''}`}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-1.5 rounded hover:bg-slate-800 transition text-slate-300 ${editor.isActive('italic') ? 'text-emerald-400 bg-slate-800' : ''}`}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-1.5 rounded hover:bg-slate-800 transition text-slate-300 ${editor.isActive('strike') ? 'text-emerald-400 bg-slate-800' : ''}`}
            title="Strike"
          >
            <Strikethrough className="h-4 w-4" />
          </button>

          <div className="w-[1px] h-4 bg-slate-800 mx-1" />

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-1.5 rounded hover:bg-slate-800 transition text-slate-300 ${editor.isActive('heading', { level: 1 }) ? 'text-emerald-400 bg-slate-800' : ''}`}
            title="Heading 1"
          >
            <Heading1 className="h-4 w-4" />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-1.5 rounded hover:bg-slate-800 transition text-slate-300 ${editor.isActive('heading', { level: 2 }) ? 'text-emerald-400 bg-slate-800' : ''}`}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </button>
        </BubbleMenu>
      )}

      {/* The core canvas drawing the editable text */}
      <EditorContent editor={editor} />
    </div>
  );
}