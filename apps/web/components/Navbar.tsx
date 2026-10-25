"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 border-b border-neon-green mb-6">
      <Link href="/" className="hover:text-neon-pink">
        Home
      </Link>
      <Link href="/radio" className="hover:text-neon-pink">
        Radio
      </Link>
      <Link href="/youtube" className="hover:text-neon-pink">
        YouTube
      </Link>
      <Link href="/adult" className="hover:text-neon-pink">
        Adult
      </Link>
    </nav>
  );
}
