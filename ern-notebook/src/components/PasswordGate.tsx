'use client';

import React, { useState, useEffect } from 'react';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if they already unlocked it in this session
    const token = sessionStorage.getItem('ern_access_granted');
    if (token === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_WORKSPACE_PASSWORD;

    if (password === correctPassword) {
      sessionStorage.setItem('ern_access_granted', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-zinc-950 text-zinc-400">
        Initializing secure environment...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-zinc-950 px-4">
        <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-md">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
              🔒
            </div>
            <h2 className="text-xl font-bold text-zinc-100">ERN Locked</h2>
            <p className="text-sm text-zinc-400 mt-1">Authorized Research Personnel Only</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter Encryption Key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-200 placeholder-zinc-600 outline-none focus:border-zinc-700 transition"
              />
              {error && (
                <p className="text-xs text-red-400 mt-2 pl-1">❌ Invalid encryption token. Access denied.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-zinc-100 py-3 font-medium text-zinc-950 hover:bg-zinc-200 transition duration-200"
            >
              Decrypt Workspace
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If authenticated, render the notebook seamlessly
  return <>{children}</>;
}