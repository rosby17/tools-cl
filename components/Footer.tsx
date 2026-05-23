import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-6 px-8 bg-[rgba(6,6,15,0.5)] backdrop-blur-md flex flex-col items-center text-[#f0efff] text-sm">
      <div className="footer-brand font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400">
        Tools-CL
      </div>
      <div className="footer-copy mt-2">
        © 2025 Tools-CL · Développé par{' '}
        <Link href="https://www.youtube.com/@rooseveltmogo/" className="underline hover:text-purple-400">
          Roosevelt Mogo
        </Link>
      </div>
      <div className="footer-copy mt-1 text-[rgba(255,255,255,0.1)]">v1.0</div>
    </footer>
  );
}
