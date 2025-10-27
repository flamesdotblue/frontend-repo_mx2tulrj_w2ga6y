export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {year} Vibe Coding. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
