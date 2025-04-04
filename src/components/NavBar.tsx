import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-500">VALORANTES</Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-red-400">Home</Link>
          <Link href="/blog" className="hover:text-red-400">Blog</Link>
          <Link href="/ranking" className="hover:text-red-400">Ranking</Link>
          <Link href="/lfg" className="hover:text-red-400">LFG</Link>
        </div>
      </div>
    </nav>
  );
}