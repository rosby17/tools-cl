import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-between px-8 bg-[rgba(6,6,15,0.7)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]">
      <Link href="/" className="flex items-center gap-3 text-[#f0efff] no-underline">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
        </div>
        <span className="font-bold text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">Tools</span>-CL
        </span>
      </Link>
      <nav className="flex gap-6 text-sm text-[#f0efff]">
        <Link href="/about" className="hover:text-purple-400 transition-colors">À propos</Link>
        <Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link>
        <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
