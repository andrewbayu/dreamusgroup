import { visuals } from '../content/visuals';

export function EditorialImage({ index, scene, alt, eager = false, sizes = '(min-width: 1280px) 1180px, (min-width: 960px) calc(100vw - 96px), calc(100vw - 44px)', className = '' }: { index: number; scene?: number; alt?: string; eager?: boolean; sizes?: string; className?: string }) {
  const visual = visuals[index];
  const sliced = scene !== undefined;
  const widths = sliced ? [320, 640] : [640, 1200, 1672];
  const base = `${import.meta.env.BASE_URL}assets/visuals/${visual.name}${sliced ? `-scene-${scene + 1}` : ''}`;
  const width = sliced ? Math.round(1672 / (index === 8 ? 5 : 3)) : 1672;
  return <img className={`editorial-image ${className}`} src={`${base}-${sliced ? 640 : 1200}.webp`} srcSet={widths.map(w => `${base}-${w}.webp ${w}w`).join(', ')} sizes={sizes} width={width} height={visual.height} alt={alt ?? visual.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'} />;
}

export function EditorialFigure({ index, className = '', caption }: { index: number; className?: string; caption?: string }) {
  return <figure className={`editorial-figure ${className}`}><EditorialImage index={index}/><figcaption>{caption ?? visuals[index].caption}</figcaption></figure>;
}
