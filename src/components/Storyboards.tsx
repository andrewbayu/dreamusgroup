import { ArrowUpRight, Play } from 'lucide-react';
import { EditorialImage } from './EditorialVisual';
import { activationSceneAlts, videoSceneAlts } from '../content/visuals';
import { activations, videos, type Storyboard } from '../content/proposal';
export function StoryboardDetail({ item }: { item: Storyboard }) {
  const activation = activations.findIndex(a => a.id === item.id);
  const scene = activation >= 0 ? activation : videos.findIndex(v => v.id === item.id);
  return <><span className="badge hypothesis">Idea to test</span><p className="lead">{item.message}</p><p className="muted">Audience: {item.audience}</p><div className="storyboard-layout"><figure className="storyboard-art"><EditorialImage index={activation >= 0 ? 6 : 8} scene={scene} alt={activation >= 0 ? activationSceneAlts[scene] : videoSceneAlts[scene]} sizes="(min-width: 600px) 320px, calc(100vw - 44px)"/><figcaption>Conceptual AI illustration · {item.title}</figcaption></figure><div className="story-frames">{item.frames.map((frame, i) => <figure key={frame}><figcaption><span className="eyebrow">Scene {String(i + 1).padStart(2, '0')}</span><p>{frame}</p></figcaption></figure>)}</div></div><div className="detail-pair"><div><h3>Invitation</h3><p>{item.cta}</p></div><div><h3>Check the results</h3><p>{item.measurement}</p></div></div><p className="fine">Concept illustrations, not existing posts. Film with venue approval and participant consent. Follow activity safety rules and get the required permission for children.</p></>;
}
export function VideoCard({ item, index, onOpen }: { item: Storyboard; index: number; onOpen: () => void }) {
  return <button className="video-card" onClick={onOpen} aria-label={`Open storyboard: ${item.title}`}><div className={`phone-art illustrated-phone art-${index}`}><EditorialImage index={8} scene={index} alt={videoSceneAlts[index]} sizes="(min-width: 960px) 220px, (min-width: 600px) 30vw, 45vw"/><span className="phone-top">CONCEPT {String(index + 1).padStart(2, '0')}</span><div className="phone-visual"><span className="play-circle"><Play size={18}/></span></div><span className="phone-title">{item.title}</span><span className="phone-caption">Video idea</span></div><div className="video-meta"><span>{item.audience}</span><ArrowUpRight size={18}/></div></button>;
}
