"use html";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const InlineEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // TipTap maps standard Markdown shortcuts out-of-the-box!
        // Typing '# ' automatically triggers a Heading 1 node inline.
        heading: {
          HTMLAttributes: {
            class: "text-2xl font-bold mt-6 mb-2 text-slate-100",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "text-slate-300 leading-relaxed my-2 outline-none",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc list-inside my-2 space-y-1 text-slate-300",
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: "bg-slate-900 rounded-md p-4 font-mono text-sm my-4 text-emerald-400 border border-slate-800",
          },
        },
      }),
    ],
    content: `
      <h2>ECG Sensor Calibration (Trial 1)</h2>
      <p>Type markdown commands directly. Use headers or write notes here inline...</p>
    `,
    editorProps: {
      attributes: {
        class: "prose prose-invert focus:outline-none min-h-[500px] text-lg cursor-text",
      },
    },
  });

  return <EditorContent editor={editor} className="w-full" />;
};

export default InlineEditor;