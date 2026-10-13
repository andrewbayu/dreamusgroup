export function PlayGraphic({ variant = 0, small = false }: { variant?: number; small?: boolean }) {
  const accent = variant === 1 ? '#e77a30' : '#2447d8';
  return <svg className="play-graphic" viewBox="0 0 520 400" role="img" aria-label="Conceptual illustration of people sharing a playful group challenge, not an actual SuperPark venue">
    <defs><pattern id={`grid-${variant}-${small}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#cdd4db" strokeWidth=".6"/></pattern></defs>
    <rect width="520" height="400" fill="#eef1f5"/><rect width="520" height="400" fill={`url(#grid-${variant}-${small})`}/>
    <ellipse cx="270" cy="340" rx="205" ry="24" fill="#dce2ea"/>
    <path d="M54 285L250 190L471 281L267 379Z" fill="#e3e8ef" stroke="#cbd4de"/>
    <path d="M75 269L249 185L445 264" fill="none" stroke="white" strokeWidth="3"/>
    <path d="M250 191V375M75 269L267 351L445 264" fill="none" stroke="#cad3df" strokeWidth="1"/>
    <path d="M267 218C326 218 333 273 296 294C258 315 219 298 224 265" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="7 8"/>
    <circle cx="320" cy="133" r="28" fill="#e77a30"/><path d="M302 117L338 149M301 145L338 121" stroke="#c45a1b" fill="none" strokeWidth="2"/>
    <g stroke="#17212b" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none"><path d="M154 228L137 293L103 315M154 228L178 280L203 312"/><path d="M350 230L340 291L315 318M350 230L388 291L411 316"/></g>
    <path d="M135 159Q157 147 178 163L170 231L135 230Z" fill={accent}/><path d="M139 173L109 207L79 190M172 173L206 185L246 153" stroke={accent} strokeWidth="17" strokeLinecap="round" fill="none"/>
    <circle cx="157" cy="131" r="20" fill="#bd8c69"/><path d="M137 128Q133 103 162 108L174 117" stroke="#17212b" strokeWidth="10" fill="none" strokeLinecap="round"/>
    <path d="M336 159Q351 149 373 165L371 237L333 233Z" fill="#17212b"/><path d="M341 176L307 191L281 172M367 179L391 211L433 194" stroke="#17212b" strokeWidth="17" strokeLinecap="round" fill="none"/>
    <circle cx="352" cy="132" r="20" fill="#d4ae8f"/><path d="M333 125Q333 106 354 109L369 119" stroke="#17212b" strokeWidth="11" fill="none" strokeLinecap="round"/>
    <path d="M191 94L200 76M224 100L240 90M292 76L285 59" stroke={accent} strokeWidth="3" strokeLinecap="round"/>
    <circle cx="85" cy="111" r="7" fill={accent}/><circle cx="429" cy="140" r="5" fill="#e77a30"/>
    {!small && <><rect x="30" y="25" width="138" height="29" rx="3" fill="white"/><text x="44" y="44" fontSize="11" fill="#536170" fontFamily="sans-serif" letterSpacing="1.3">SHARED PLAY</text><text x="475" y="45" textAnchor="end" fontSize="12" fill="#536170" fontFamily="sans-serif">↗</text></>}
  </svg>;
}
