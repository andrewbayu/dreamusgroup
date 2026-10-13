import { useId, useRef, type ReactNode } from 'react';
export function Tabs({ labels, selected, onSelect, children, label }: { labels: string[]; selected: number; onSelect: (i: number) => void; children: ReactNode; label: string }) {
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  return <><div className="tabs" role="tablist" aria-label={label}>{labels.map((text, i) => <button key={text} ref={node => { refs.current[i] = node; }} id={`${id}-${i}`} role="tab" aria-selected={i === selected} aria-controls={`${id}-panel`} tabIndex={i === selected ? 0 : -1} onClick={() => onSelect(i)} onKeyDown={e => {
    let next: number | undefined;
    if (e.key === 'ArrowRight') next = (i + 1) % labels.length;
    if (e.key === 'ArrowLeft') next = (i + labels.length - 1) % labels.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = labels.length - 1;
    if (next !== undefined) { e.preventDefault(); e.stopPropagation(); onSelect(next); refs.current[next]?.focus(); }
  }}>{text}</button>)}</div><div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-${selected}`} tabIndex={0}>{children}</div></>;
}
