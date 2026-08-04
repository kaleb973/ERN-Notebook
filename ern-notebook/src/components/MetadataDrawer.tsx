'use client';

import { Layers, Timer, Play, Square } from 'lucide-react';
import type { Note } from '@/store/useNotebookStore';
import { useState, useEffect } from 'react';

interface MetadataDrawerProps {
  note?: Note;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export default function MetadataDrawer({ note, isCollapsed, onToggleCollapse }: MetadataDrawerProps) {
  // NEW FEATURE: Built-in Protocol Timer
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins default
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const toggleTimer = () => setIsTimerRunning(!isTimerRunning);
  const resetTimer = () => { setIsTimerRunning(false); setTimeLeft(300); };
  
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className={`${isCollapsed ? 'w-17' : 'w-[300px]'} h-full bg-zinc-950/80 backdrop-blur-md border-l border-zinc-800/80 flex flex-col p-4 transition-all duration-300 ease-out z-20`}>
      <div className="flex items-center justify-between gap-2 px-2 pb-4 border-b border-zinc-800/80">
        {!isCollapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <Layers className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase">SYS_DATA</span>
          </div>
        )}
        <button type="button" onClick={onToggleCollapse} className="rounded border border-zinc-700 bg-zinc-900 px-2 py-1 text-[10px] text-zinc-400 hover:text-cyan-400">
          {isCollapsed ? '<' : '>'}
        </button>
      </div>

      {!isCollapsed && (
        <div className="flex flex-col flex-1 gap-6 pt-6 px-2">
          {/* Note Metadata */}
          <div className="text-[10px] text-zinc-500 font-mono space-y-3 uppercase">
            <div className="flex justify-between"><span>UUID:</span> <span className="text-zinc-300">{note?.id}</span></div>
            <div className="flex justify-between"><span>STATE:</span> <span className="text-fuchsia-400">{note?.metadata?.status || note?.status}</span></div>
            <div className="flex justify-between"><span>BYTES:</span> <span className="text-cyan-400">{note?.content.replace(/<[^>]*>/g, '').length || 0} b</span></div>
          </div>

          <div className="w-full h-[1px] bg-zinc-800/80" />

          {/* Lab Timer Tool */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 font-mono">
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
              <Timer className="w-3 h-3 text-cyan-400" />
              <span>PROTOCOL_TIMER</span>
            </div>
            <div className={`text-4xl font-black mb-4 tracking-tighter ${timeLeft === 0 ? 'text-fuchsia-500 animate-pulse' : 'text-zinc-100'}`}>
              {formatTime(timeLeft)}
            </div>
            <div className="flex gap-2">
              <button onClick={toggleTimer} className="flex-1 flex justify-center items-center py-2 bg-cyan-950 text-cyan-400 border border-cyan-900 hover:bg-cyan-900 rounded transition-colors">
                {isTimerRunning ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4 ml-1" />}
              </button>
              <button onClick={resetTimer} className="flex-1 py-2 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded text-xs font-bold transition-colors">
                RST
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}