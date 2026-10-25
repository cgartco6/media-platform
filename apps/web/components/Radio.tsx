"use client";

const stations = [
  { name: "Bok Radio", url: "http://radiostream.co.za:9104/;" },
  { name: "5FM", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/5FM.mp3" },
  { name: "Jacaranda FM", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/JACARANDA.mp3" },
  { name: "KFM 94.5", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KFM.mp3" },
  { name: "Good Hope FM", url: "https://playerservices.streamtheworld.com/api/livestream-redirect/GOODHOPEFM.mp3" }
];

export default function Radio() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6 text-neon-green">Music Stations</h1>
      <div className="space-y-4">
        {stations.map((s) => (
          <div key={s.name} className="border border-neon-green p-4 rounded">
            <p className="font-bold mb-2">{s.name}</p>
            <audio controls className="w-full">
              <source src={s.url} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
