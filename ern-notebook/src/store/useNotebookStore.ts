import { create } from 'zustand';

export interface Note {
  id: string;
  title: string;
  content: string;
  status: 'IN_PROGRESS' | 'COMPLETED';
  createdAt: string;
}

interface NotebookState {
  notes: Note[];
  activeNoteId: string;
  addNote: (title: string) => void;
  updateActiveNote: (updates: Partial<Note>) => void;
  setActiveNoteId: (id: string) => void;
}

export const useNotebookStore = create<NotebookState>((set) => ({
  notes: [
    {
      id: '1',
      title: 'ECG Filter Calibration Test',
      content: '<h2>Protocol Status: Active</h2><p>Initial calibration readings look stable...</p>',
      status: 'IN_PROGRESS',
      createdAt: new Date().toLocaleDateString(),
    }
  ],
  activeNoteId: '1',
  addNote: (title) => set((state) => {
    const newNote: Note = {
      id: Math.random().toString(36).substring(7),
      title,
      content: '<p>Start typing new lab observations...</p>',
      status: 'IN_PROGRESS',
      createdAt: new Date().toLocaleDateString(),
    };
    return { notes: [...state.notes, newNote], activeNoteId: newNote.id };
  }),
  updateActiveNote: (updates) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === state.activeNoteId ? { ...note, ...updates } : note
    ),
  })),
  setActiveNoteId: (id) => set({ activeNoteId: id }),
}));