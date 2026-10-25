"use client";

import { useState, useEffect } from "react";

export default function AdultPage() {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("adult-history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const unlock = () => {
    if (pin === "1234") setUnlocked(true); // change PIN
  };

  const addToHistory = (title: string) => {
    const updated = [title, ...history].slice(0, 20);
    setHistory(updated);
    localStorage.setItem("adult-history", JSON.stringify(updated));
  };

  if (!unlocked) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl mb-4 text-neon-pink">Adult Section</h1>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="bg-black border border-neon-green text-neon-green p-2 mb-4"
          placeholder="PIN"
        />
        <button
          onClick={unlock}
          className="border border-neon-green px-6 py-2 hover:bg-neon-green hover:text-black"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6 text-neon-pink">Adult</h1>
      <p className="mb-4 text-neon-green">
        Open external adult sites in a private browser. Titles you mark appear below.
      </p>
      <button
        onClick={() => addToHistory("Example Adult Title " + Date.now())}
        className="border border-neon-pink px-4 py-2 mb-6"
      >
        Add current title to history
      </button>
      <ul className="space-y-2">
        {history.map((item, i) => (
          <li key={i} className="watched">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
