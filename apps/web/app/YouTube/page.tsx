"use client";

const channels = [
  { name: "Free Documentary", id: "UCqJ-Xo29CKyLTjn6z2XwYAw" },
  { name: "Gauchos del Mar", id: "UCxxxxxxxx" },
  { name: "Red Bull", id: "UCblfuW_4rakIf2dxLVXGn1A" }
];

export default function YouTubePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6 text-neon-green">YouTube Channels</h1>
      <div className="grid gap-4">
        {channels.map((c) => (
          <a
            key={c.name}
            href={`https://www.youtube.com/channel/${c.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neon-green p-4 rounded hover:bg-neon-green hover:text-black"
          >
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
}
