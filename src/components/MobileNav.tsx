import { useEffect, useState } from 'react';

interface Props {
  items: { label: string; href: string }[];
  path: string;
}

export default function MobileNav({ items, path }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (h: string) => (h === '/' ? path === '/' : path.startsWith(h));

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid h-11 w-11 place-items-center rounded-lg text-navy-950 hover:bg-slate-100"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-white px-5 pb-10 pt-6">
          <ul className="space-y-1">
            {items.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-xl font-bold ${isActive(n.href) ? 'bg-brand-50 text-brand-700' : 'text-navy-950'}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/#subscribe" onClick={() => setOpen(false)} className="btn btn-primary mt-6 w-full">Subscribe</a>
        </div>
      )}
    </div>
  );
}
