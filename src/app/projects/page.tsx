'use client';

import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
        <ul className="space-y-6">
          <li className="bg-white/10 hover:bg-white/20 transition p-6 rounded-lg shadow-md">
            <Link href="/projects/favorite-foods" className="text-xl font-semibold text-blue-400 hover:underline">
              🍽️ Favorite Foods Project
            </Link>
            <p className="text-sm text-gray-300 mt-2">A fun Bulma-styled page about my favorite foods from different cultures.</p>
          </li>
          <li className="bg-white/10 hover:bg-white/20 transition p-6 rounded-lg shadow-md">
           <Link href="/projects/foundation-career" className="text-xl font-semibold text-blue-400 hover:underline">
  Foundation Career
</Link>

            <p className="text-sm text-gray-300 mt-2">A foundation-themed project describing my future career aspirations.</p>
          </li>
          <li className="bg-white/10 hover:bg-white/20 transition p-6 rounded-lg shadow-md">
           <Link href="/projects/game1" className="text-xl font-semibold text-blue-400 hover:underline">
  Playable Space Shooter Game
</Link>

            <p className="text-sm text-gray-300 mt-2">An interactive JavaScript browser game.</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
