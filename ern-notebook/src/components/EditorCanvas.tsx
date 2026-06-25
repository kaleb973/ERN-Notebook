'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function EditorCanvas() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>Experiment Protocol: Active</h2>
      <p>Start logging your real-time observations, code snippets, or laboratory parameters here...</p>
    `,
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] text-slate-300 text-lg leading-relaxed selection:bg-emerald-500/30',
      },
    },
  });

  return (
    <div className="w-full border border-slate-900 bg-slate-950/40 rounded-xl p-6 min-h-[450px]">
      <EditorContent editor={editor} />
    </div>
  );
}