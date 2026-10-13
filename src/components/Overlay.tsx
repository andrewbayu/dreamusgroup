import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
export function Overlay({ title, children, onClose, wide = false }: { title: string; children: ReactNode; onClose: () => void; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    const bodyOverflow = document.body.style.overflow;
    ref.current?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = bodyOverflow; previous?.focus(); };
  }, []);
  return <dialog ref={ref} className={wide ? 'overlay wide' : 'overlay'} aria-label={title} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}><div className="overlay-head"><div><span className="eyebrow">Proposal detail</span><h2>{title}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close dialog"><X size={22} /></button></div><div className="overlay-body">{children}</div></dialog>;
}
