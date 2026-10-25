"use client";

import Link from "next/link";

const sections = [
  { title: "Continue Watching", href: "/continue", className: "resume" },
  { title: "Movies", href: "/movies" },
  { title: "Series", href: "/series" },
  { title: "Sports", href: "/sports" },
  { title: "Antarctica Documentaries", href: "/antarctica" },
  { title: "Documented Conspiracies", href: "/conspiracies" },
  { title: "YouTube Channels", href: "/youtube" },
  { title: "Music Stations", href: "/radio" },
  { title: "Adult", href: "/adult" }
];

export default function Home() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-neon-green">
        MyMedia
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className={`block p-6 border border-neon-green rounded-lg hover:bg-neon-green hover:text-black transition ${s.className || ""}`}
          >
            {s.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
