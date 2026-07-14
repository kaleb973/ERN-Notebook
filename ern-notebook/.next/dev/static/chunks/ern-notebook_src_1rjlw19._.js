(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ern-notebook/src/components/CommandPalette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CommandPalette() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            const handleKeyDown = {
                "CommandPalette.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        setIsOpen({
                            "CommandPalette.useEffect.handleKeyDown": (prev)=>!prev
                        }["CommandPalette.useEffect.handleKeyDown"]);
                    }
                    if (e.key === "Escape") {
                        setIsOpen(false);
                    }
                }
            }["CommandPalette.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "CommandPalette.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], []);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-lg space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs font-mono text-emerald-400",
                    children: "// ERN CORE COMMAND SYSTEM"
                }, void 0, false, {
                    fileName: "[project]/ern-notebook/src/components/CommandPalette.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search notes, jump to telemetry, or run script...",
                    className: "w-full rounded-lg border border-slate-800 bg-slate-950 p-3 font-sans text-slate-200 focus:border-emerald-500 focus:outline-none",
                    autoFocus: true
                }, void 0, false, {
                    fileName: "[project]/ern-notebook/src/components/CommandPalette.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-mono text-[10px] text-slate-500",
                    children: "PRESS ESC TO EXIT"
                }, void 0, false, {
                    fileName: "[project]/ern-notebook/src/components/CommandPalette.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ern-notebook/src/components/CommandPalette.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ern-notebook/src/components/CommandPalette.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(CommandPalette, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = CommandPalette;
var _c;
__turbopack_context__.k.register(_c, "CommandPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ern-notebook/src/store/useNotebookStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotebookStore",
    ()=>useNotebookStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useNotebookStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        notes: [
            {
                id: '1',
                title: 'ECG Filter Calibration Test',
                content: '<h2>Protocol Status: Active</h2><p>Initial calibration readings look stable...</p>',
                status: 'IN_PROGRESS',
                createdAt: new Date().toLocaleDateString()
            }
        ],
        activeNoteId: '1',
        addNote: (title)=>set((state)=>{
                const newNote = {
                    id: Math.random().toString(36).substring(7),
                    title,
                    content: '<p>Start typing new lab observations...</p>',
                    status: 'IN_PROGRESS',
                    createdAt: new Date().toLocaleDateString()
                };
                return {
                    notes: [
                        ...state.notes,
                        newNote
                    ],
                    activeNoteId: newNote.id
                };
            }),
        updateActiveNote: (updates)=>set((state)=>({
                    notes: state.notes.map((note)=>note.id === state.activeNoteId ? {
                            ...note,
                            ...updates
                        } : note)
                })),
        setActiveNoteId: (id)=>set({
                activeNoteId: id
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ern-notebook/src/components/EditorCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$store$2f$useNotebookStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/src/store/useNotebookStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function EditorCanvas() {
    _s();
    const { notes, activeNoteId, updateActiveNote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$store$2f$useNotebookStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotebookStore"])();
    const currentNote = notes.find((note)=>note.id === activeNoteId) || notes[0];
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                heading: {
                    levels: [
                        1,
                        2
                    ]
                }
            })
        ],
        content: currentNote?.content || '<p>Start typing...</p>',
        editorProps: {
            attributes: {
                class: [
                    'focus:outline-none min-h-[400px] max-w-none',
                    'text-slate-800 dark:text-slate-100 leading-relaxed',
                    '[&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:mt-6 [&_h1]:mb-2 [&_h1]:text-slate-900 [&_h1]:dark:text-white',
                    '[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-5 [&_h2]:mb-2 [&_h2]:text-slate-800 [&_h2]:dark:text-slate-100'
                ].join(' ')
            }
        },
        onUpdate: {
            "EditorCanvas.useEditor[editor]": ({ editor })=>{
                if (currentNote) {
                    updateActiveNote({
                        content: editor.getHTML()
                    });
                }
            }
        }["EditorCanvas.useEditor[editor]"]
    });
    // Keep content synchronized when swapping notes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorCanvas.useEffect": ()=>{
            if (editor && currentNote && editor.getHTML() !== currentNote.content) {
                editor.commands.setContent(currentNote.content);
            }
        }
    }["EditorCanvas.useEffect"], [
        currentNote?.id,
        currentNote?.content,
        editor
    ]);
    if (!editor) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        className: `p-1.5 px-3 text-xs rounded font-medium transition-colors ${editor.isActive('bold') ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'}`,
                        children: "Bold"
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        className: `p-1.5 px-3 text-xs rounded font-medium transition-colors ${editor.isActive('italic') ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'}`,
                        children: "Italic"
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 1
                            }).run(),
                        className: `p-1.5 px-3 text-xs rounded font-medium transition-colors ${editor.isActive('heading', {
                            level: 1
                        }) ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'}`,
                        children: "H1"
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 2
                            }).run(),
                        className: `p-1.5 px-3 text-xs rounded font-medium transition-colors ${editor.isActive('heading', {
                            level: 2
                        }) ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'}`,
                        children: "H2"
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: currentNote?.title || '',
                        onChange: (e)=>updateActiveNote({
                                title: e.target.value
                            }),
                        placeholder: "Untitled Experiment / Run...",
                        className: "w-full text-3xl font-black bg-transparent text-slate-900 dark:text-white focus:outline-none tracking-tight"
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg border border-slate-200/60 dark:border-slate-800/60 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1",
                                        children: "Experiment ID"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g., BME-004",
                                        value: currentNote?.metadata?.experimentId || '',
                                        onChange: (e)=>updateActiveNote({
                                                metadata: {
                                                    ...currentNote?.metadata,
                                                    experimentId: e.target.value
                                                }
                                            }),
                                        className: "w-full bg-transparent font-medium text-slate-700 dark:text-slate-200 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1",
                                        children: "Trial / Run No."
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g., 03",
                                        value: currentNote?.metadata?.trialNumber || '',
                                        onChange: (e)=>updateActiveNote({
                                                metadata: {
                                                    ...currentNote?.metadata,
                                                    trialNumber: e.target.value
                                                }
                                            }),
                                        className: "w-full bg-transparent font-medium text-slate-700 dark:text-slate-200 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1",
                                        children: "Environment Temp"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g., 22.5 °C",
                                        value: currentNote?.metadata?.temperature || '',
                                        onChange: (e)=>updateActiveNote({
                                                metadata: {
                                                    ...currentNote?.metadata,
                                                    temperature: e.target.value
                                                }
                                            }),
                                        className: "w-full bg-transparent font-medium text-slate-700 dark:text-slate-200 focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider mb-1",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: !currentNote?.metadata?.status ? "" : [
                                            'Active',
                                            'Completed',
                                            'Failed'
                                        ].includes(currentNote.metadata.status) ? currentNote.metadata.status : 'custom',
                                        onChange: (e)=>updateActiveNote({
                                                metadata: {
                                                    ...currentNote?.metadata,
                                                    status: e.target.value === 'custom' ? 'Custom Run' : e.target.value
                                                }
                                            }),
                                        className: "w-full -ml-1 rounded-md border bg-slate-100/80 px-2 py-1 font-medium text-slate-700 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200 focus:outline-none appearance-none cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                className: "dark:bg-slate-900 text-slate-400",
                                                children: "Select Status"
                                            }, void 0, false, {
                                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Active",
                                                className: "dark:bg-slate-900",
                                                children: "🟢 Active"
                                            }, void 0, false, {
                                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Completed",
                                                className: "dark:bg-slate-900",
                                                children: "🔵 Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Failed",
                                                className: "dark:bg-slate-900",
                                                children: "🔴 Failed"
                                            }, void 0, false, {
                                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "custom",
                                                className: "dark:bg-slate-900",
                                                children: "⚙️ Custom..."
                                            }, void 0, false, {
                                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    currentNote?.metadata?.status && currentNote?.metadata?.status !== 'Active' && currentNote?.metadata?.status !== 'Completed' && currentNote?.metadata?.status !== 'Failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: currentNote?.metadata?.status || '',
                                        onChange: (e)=>updateActiveNote({
                                                metadata: {
                                                    ...currentNote?.metadata,
                                                    status: e.target.value
                                                }
                                            }),
                                        placeholder: "Enter status...",
                                        className: "w-full bg-transparent border-b border-slate-200 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-200 focus:outline-none mt-1 text-[11px]",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[400px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                            editor: editor
                        }, void 0, false, {
                            fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800/60 pt-3 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (!editor) return;
                                        const time = new Date().toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit'
                                        });
                                        editor.chain().focus().insertContent(`\n[${time}] `).run();
                                    },
                                    className: "px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-semibold transition-colors flex items-center gap-1.5",
                                    children: "⏱️ Insert Timestamp"
                                }, void 0, false, {
                                    fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    if (!currentNote) return;
                                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentNote, null, 2));
                                    const downloadAnchor = document.createElement('a');
                                    downloadAnchor.setAttribute("href", dataStr);
                                    downloadAnchor.setAttribute("download", `ERN-${currentNote.metadata?.experimentId || 'export'}-${Date.now()}.json`);
                                    document.body.appendChild(downloadAnchor);
                                    downloadAnchor.click();
                                    downloadAnchor.remove();
                                },
                                className: "px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition-colors flex items-center gap-1.5",
                                children: "💾 Export Run Data (JSON)"
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ern-notebook/src/components/EditorCanvas.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(EditorCanvas, "1j8+ABVT5nIPm9kmxGEMj+3YGU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$store$2f$useNotebookStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotebookStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = EditorCanvas;
var _c;
__turbopack_context__.k.register(_c, "EditorCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ern-notebook/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/lucide-react/dist/esm/icons/beaker.mjs [app-client] (ecmascript) <export default as Beaker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
'use client';
;
;
function Sidebar({ notes, activeNoteId, isCollapsed, onToggleCollapse, onSelectNote, onAddNote }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${isCollapsed ? 'w-25' : 'w-[260px]'} h-full bg-slate-900 border-r border-slate-800 flex flex-col p-4 transition-all duration-800 ease-out`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 px-2 pb-4 border-b border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$beaker$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Beaker$3e$__["Beaker"], {
                                className: "h-5 w-5 text-emerald-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold tracking-wide text-slate-200 truncate",
                                children: "ERN Workspace"
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                lineNumber: 28,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggleCollapse,
                        className: "rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-700",
                        children: isCollapsed ? '>' : '<'
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 py-4 text-sm px-2 space-y-1 overflow-y-auto select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase text-slate-500 tracking-wider",
                                        children: "Saved Logs"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onAddNote,
                                        className: "text-xs text-emerald-400 hover:text-emerald-300 transition underline cursor-pointer",
                                        children: "+ New Log"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelectNote(note.id),
                                    className: `w-full text-left px-2 py-1.5 rounded text-xs transition truncate block cursor-pointer ${note.id === activeNoteId ? 'bg-slate-800 text-emerald-400 font-medium border-l-2 border-emerald-400 pl-1.5' : 'text-slate-400 hover:bg-slate-800/50'}`,
                                    children: [
                                        "📄 ",
                                        note.title
                                    ]
                                }, note.id, true, {
                                    fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-600 px-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Press ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "bg-slate-800 px-1 rounded text-slate-400",
                                        children: "Ctrl/⌘ K"
                                    }, void 0, false, {
                                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, this),
                                    " for commands"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/ern-notebook/src/components/Sidebar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ern-notebook/src/components/MetadataDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MetadataDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
'use client';
;
;
function MetadataDrawer({ note, isCollapsed, onToggleCollapse }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `${isCollapsed ? 'w-17' : 'w-[300px]'} h-full bg-slate-900 border-l border-slate-800 flex flex-col p-4 transition-all duration-800 ease-out`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 px-2 pb-4 border-b border-slate-800",
                children: [
                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "h-4 w-4 text-emerald-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium tracking-wide text-slate-300 truncate",
                                children: "Experiment Parameters"
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onToggleCollapse,
                        className: "rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] text-slate-300 hover:bg-slate-700",
                        children: isCollapsed ? '<' : '>'
                    }, void 0, false, {
                        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 py-4 text-xs text-slate-400 px-2 font-mono space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "ID: ",
                            note?.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "STATUS: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400",
                                children: note?.status
                            }, void 0, false, {
                                fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                                lineNumber: 30,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "TIMESTAMP: ",
                            note?.createdAt
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "CHAR_COUNT: ",
                            note?.content.replace(/<[^>]*>/g, '').length || 0
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ern-notebook/src/components/MetadataDrawer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = MetadataDrawer;
var _c;
__turbopack_context__.k.register(_c, "MetadataDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ern-notebook/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/src/components/CommandPalette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$EditorCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/src/components/EditorCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/src/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$MetadataDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/src/components/MetadataDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$store$2f$useNotebookStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/src/store/useNotebookStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ern-notebook/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function WorkspacePage() {
    _s();
    const { notes, activeNoteId, setActiveNoteId, addNote, updateActiveNote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$store$2f$useNotebookStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotebookStore"])();
    const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeNote = notes.find((n)=>n.id === activeNoteId) || notes[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-50 font-sans select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                notes: notes,
                activeNoteId: activeNoteId,
                isCollapsed: isLeftSidebarCollapsed,
                onToggleCollapse: ()=>setIsLeftSidebarCollapsed((v)=>!v),
                onSelectNote: setActiveNoteId,
                onAddNote: ()=>addNote("Untitled Experiment")
            }, void 0, false, {
                fileName: "[project]/ern-notebook/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 h-full flex flex-col bg-slate-950 overflow-y-auto px-8 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl mx-auto space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 border-b border-slate-900 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: activeNote?.title || "",
                                    onChange: (e)=>updateActiveNote({
                                            title: e.target.value
                                        }),
                                    className: "w-full bg-transparent text-4xl font-bold outline-none text-slate-100 placeholder:text-slate-800"
                                }, void 0, false, {
                                    fileName: "[project]/ern-notebook/src/app/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500 font-mono tracking-tight",
                                    children: [
                                        "CREATED: ",
                                        activeNote?.createdAt,
                                        " // STATUS: IN_PROGRESS"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ern-notebook/src/app/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ern-notebook/src/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$EditorCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/ern-notebook/src/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ern-notebook/src/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ern-notebook/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$MetadataDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                note: activeNote,
                isCollapsed: isRightSidebarCollapsed,
                onToggleCollapse: ()=>setIsRightSidebarCollapsed((v)=>!v)
            }, void 0, false, {
                fileName: "[project]/ern-notebook/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/ern-notebook/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ern-notebook/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(WorkspacePage, "+RwFCxjCevTunhsrkeQa0mwhOeg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ern$2d$notebook$2f$src$2f$store$2f$useNotebookStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotebookStore"]
    ];
});
_c = WorkspacePage;
var _c;
__turbopack_context__.k.register(_c, "WorkspacePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ern-notebook_src_1rjlw19._.js.map