import { ArrowUpRight, Play, Users, Target, HeartHandshake, Building2, CreditCard } from 'lucide-react';
import { PlayGraphic } from './PlayGraphic';
import type { Storyboard } from '../content/proposal';
export function StoryboardDetail({ item }: { item: Storyboard }) {
  return <><span className="badge hypothesis">Proposed concept</span><p className="lead">{item.message}</p><p className="muted">Audience: {item.audience}</p><div className="story-frames">{item.frames.map((frame, i) => <figure key={frame}><PlayGraphic variant={i % 2} small /><figcaption><span className="eyebrow">Frame {i + 1}</span><p>{frame}</p></figcaption></figure>)}</div><div className="detail-pair"><div><h3>Invitation</h3><p>{item.cta}</p></div><div><h3>What to measure</h3><p>{item.measurement}</p></div></div><p className="fine">Conceptual drawings; not existing posts or venue evidence. Film real, consenting participants with venue approval and activity-safety guidance. Minors require appropriate permissions.</p></>;
}
export function VideoCard({ item, index, onOpen }: { item: Storyboard; index: number; onOpen: () => void }) {
  const Icon = [Users, Target, HeartHandshake, Building2, CreditCard][index];
  return <button className="video-card" onClick={onOpen} aria-label={`Open storyboard: ${item.title}`}><div className={`phone-art art-${index}`}><span className="phone-top">CONCEPT {String(index + 1).padStart(2, '0')}</span><div className="phone-visual"><Icon size={52} strokeWidth={1.2}/><span className="play-circle"><Play size={18}/></span></div><span className="phone-title">{item.title}</span><span className="phone-caption">Illustrative storyboard</span></div><div className="video-meta"><span>{item.audience}</span><ArrowUpRight size={18}/></div></button>;
}
