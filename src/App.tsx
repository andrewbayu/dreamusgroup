import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, BookOpen, Users, Ticket, CalendarDays, Building2, GraduationCap, Play, Menu, Maximize, X, Target, Check, ChevronDown, Layers, ScanLine, CreditCard, BarChart3, Printer } from 'lucide-react';
import { chapters, personas, activations, videos, stages, alignment, storyBridges, moves, type Storyboard } from './content/proposal';
import { sources, facts, type EvidenceStatus } from './content/sources';
import { Overlay } from './components/Overlay';
import { Tabs } from './components/Tabs';
import { EditorialImage, EditorialFigure } from './components/EditorialVisual';
import { activationSceneAlts } from './content/visuals';
import { StoryboardDetail, VideoCard } from './components/Storyboards';
import { SubscriptionSimulator } from './components/SubscriptionSimulator';

function Badge({ status = 'Strategic hypothesis' }: { status?: EvidenceStatus }) { return <span className={`badge ${status === 'Strategic hypothesis' ? 'hypothesis' : status === 'Illustrative model' ? 'model' : ''}`}>{({ "Verified public fact": "Public fact", "Company claim": "Company statement", "Strategic hypothesis": "Idea to test", "Illustrative model": "Example model" })[status]}</span>; }
function Chapter({ index, title, intro, children, dark = false }: { index: number; title: string; intro?: string; children: ReactNode; dark?: boolean }) {
  return <section id={chapters[index].id} className={`chapter ${dark ? 'dark-chapter' : ''}`} aria-labelledby={`heading-${index}`}><div className="chapter-inner"><div className="chapter-kicker"><span>{String(index + 1).padStart(2, '0')} / {chapters[index].stage}</span><span>SUPERPARK INDONESIA</span></div><div className="section-heading"><h2 id={`heading-${index}`} tabIndex={-1}>{title}</h2>{intro && <p className="lead">{intro}</p>}</div>{children}{storyBridges[index] && <div className="story-bridge"><span className="eyebrow">NEXT</span><p>{storyBridges[index]}</p><ArrowRight size={18}/></div>}</div></section>;
}

export default function App() {
  const [active, setActive] = useState(() => Math.max(0, chapters.findIndex(c => `#${c.id}` === location.hash)));
  const [presentation, setPresentation] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drawer, setDrawer] = useState<'sources' | 'chapters' | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string[]>([]);
  const [story, setStory] = useState<Storyboard | null>(null);
  const [persona, setPersona] = useState(0);
  const [activation, setActivation] = useState(0);
  const [stage, setStage] = useState(0);
  const [notes, setNotes] = useState(false);
  const [fullScreenMessage, setFullScreenMessage] = useState('');

  const go = (index: number) => {
    const next = Math.max(0, Math.min(chapters.length - 1, index));
    setActive(next);
    history.pushState(null, '', `#${chapters[next].id}`);
    requestAnimationFrame(() => { document.getElementById(chapters[next].id)?.scrollIntoView({ behavior: 'instant', block: 'start' }); if (presentation) document.getElementById(`heading-${next}`)?.focus({ preventScroll: true }); });
  };
  const openSources = (ids: string[] = []) => { setSourceFilter(ids); setDrawer('sources'); };
  const sourceLinks = (ids: string[]) => <div className="source-links"><BookOpen size={14}/>{ids.map(id => <button key={id} onClick={() => openSources([id])}>{id}</button>)}<button onClick={() => openSources(ids)}>Sources & notes <ArrowUpRight size={13}/></button></div>;
  const exit = () => { setPresentation(false); setFullScreenMessage(''); if (document.fullscreenElement) void document.exitFullscreen().catch(() => {}); requestAnimationFrame(() => document.getElementById(chapters[active].id)?.scrollIntoView({ behavior: 'instant' })); };

  useEffect(() => {
    let previouslyClosed: HTMLDetailsElement[] = [];
    const beforePrint = () => { previouslyClosed = [...document.querySelectorAll<HTMLDetailsElement>('details:not([open])')]; previouslyClosed.forEach(detail => { detail.open = true; }); };
    const afterPrint = () => { previouslyClosed.forEach(detail => { detail.open = false; }); previouslyClosed = []; };
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
    return () => { window.removeEventListener('beforeprint', beforePrint); window.removeEventListener('afterprint', afterPrint); };
  }, []);
  useEffect(() => {
    const syncHash = () => { const i = chapters.findIndex(c => `#${c.id}` === location.hash); if (i >= 0) { setActive(i); requestAnimationFrame(() => document.getElementById(chapters[i].id)?.scrollIntoView({ behavior: 'instant' })); } };
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    syncHash();
    return () => { window.removeEventListener('hashchange', syncHash); window.removeEventListener('popstate', syncHash); };
  }, []);
  useEffect(() => {
    const scroll = () => {
      setProgress(document.documentElement.scrollTop / Math.max(1, document.documentElement.scrollHeight - innerHeight));
      if (!presentation) { let current = 0; chapters.forEach((c, i) => { if ((document.getElementById(c.id)?.getBoundingClientRect().top ?? Infinity) <= 200) current = i; }); setActive(current); }
    };
    scroll(); window.addEventListener('scroll', scroll, { passive: true }); window.addEventListener('resize', scroll);
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, [presentation]);
  useEffect(() => {
    const keyboard = (e: KeyboardEvent) => {
      if (!presentation || drawer || story || document.querySelector('dialog[open]')) return;
      const target = e.target as HTMLElement;
      if (target.closest('input,textarea,select,[contenteditable="true"],[role="tablist"]')) return;
      if (e.key === 'Escape') { e.preventDefault(); exit(); }
      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); go(active + 1); }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); go(active - 1); }
    };
    window.addEventListener('keydown', keyboard); return () => window.removeEventListener('keydown', keyboard);
  });

  const start = () => { setPresentation(true); setActive(0); history.pushState(null, '', '#discovery'); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const p = personas[persona];
  return <div className={presentation ? 'app presentation' : 'app'} data-active={chapters[active].id}>
    <a className="skip-link" href="#main">Skip to proposal</a>
    <header className="header"><a href="#discovery" className="wordmark" onClick={e => { e.preventDefault(); go(0); }} aria-label="DreamUs Group proposal home"><img className="dreamus-logo" src={`${import.meta.env.BASE_URL}assets/dreamus-logo.webp`} width="600" height="163" alt="DreamUs Group"/><span className="logo-context">SUPERPARK PROPOSAL</span></a><div className="header-right"><span className="header-meta">PREPARED FOR LEADERSHIP <span>OCT 2026</span></span><button className="text-button source-header" onClick={() => openSources()}><BookOpen size={16}/> Sources</button><button className="present-button" onClick={presentation ? exit : start}>{presentation ? <X size={16}/> : <Play size={14}/>}<span>{presentation ? 'Exit presentation' : 'Present'}</span></button></div></header>
    {!presentation && <nav className="chapter-nav" aria-label="Proposal chapters"><span className="mobile-chapter-title">{chapters[active].title}</span><div className="nav-groups">{[{ label: 'Start', i: 0 }, { label: 'What we know', i: 1 }, { label: 'The question', i: 3 }, { label: 'Three moves', i: 5 }, { label: 'The plan', i: 9 }, { label: 'Next step', i: 11 }].map(({ label, i }) => <button key={label} className={chapters[active].stage === label ? 'current' : ''} onClick={() => go(i)}>{label}</button>)}</div><button className="chapter-menu" onClick={() => setDrawer('chapters')} aria-label="Open all chapters"><Menu size={17}/><span>{String(active + 1).padStart(2, '0')} / 12</span><ChevronDown size={14}/></button><div className="scroll-progress" style={{ width: `${Math.min(1, progress) * 100}%` }}/></nav>}
    {presentation && <div className="presentation-label"><span>{chapters[active].title}</span><span>{String(active + 1).padStart(2, '0')} / 12</span></div>}
    <main id="main">
      <section id="discovery" className="chapter hero" aria-labelledby="heading-0">
        <div className="chapter-inner">
          <div className="hero-topline"><span className="eyebrow"><span className="blue-dot"/> A REASON TO RETURN</span><span className="eyebrow">SUPERPARK INDONESIA / 01</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="heading-0" tabIndex={-1}>From “let’s try it”<span>to “let’s go again”.</span></h1>
              <p className="hero-description">Three ways to bring groups in—and give them a reason to return.</p>
              <div className="hero-actions"><button className="primary-button" onClick={() => go(1)}>See the plan <ArrowRight size={18}/></button><button className="text-button" onClick={start}><Play size={15}/> Start presentation</button></div>
              <div className="byline"><span className="byline-mark">AB</span><div><strong>Aditya Indra Bayu</strong><span>Public research + ideas to test · October 2026</span></div></div>
            </div>
            <figure className="hero-figure"><EditorialImage index={0} eager sizes="(min-width: 960px) 45vw, calc(100vw - 44px)"/><figcaption><span>PLAY TOGETHER. COME BACK.</span><span>Conceptual AI illustration</span></figcaption><div className="hero-visual-footer"><div><Ticket size={20}/><span>First visit</span></div><ArrowRight size={22}/><div><CalendarDays size={20}/><span>Next visit</span></div></div></figure>
          </div>
          <div className="hero-bottom"><span>A simple growth plan for SuperPark Indonesia</span><span>12 CHAPTERS <span className="divider">/</span> THREE ACTIONS <ArrowRight size={16}/></span></div>
        </div>
      </section>

      <Chapter index={1} title="SuperPark is built for playing together." intro="Friends, families, schools and teams. The core idea is shared play.">
        <div className="concept-layout"><div className="concept-statement concept-with-art"><EditorialImage index={1} sizes="(min-width: 960px) 55vw, calc(100vw - 44px)"/><div className="concept-art-caption"><Badge status="Company claim"/><p>Move. Play. <span>Connect.</span></p><small>An indoor activity park for all ages · Conceptual illustration</small></div></div>
          <div className="segment-map">{[{ name: 'Family', Icon: Users, text: 'Parents join the play.', context: 'Global concept · S1' }, { name: 'Friends', Icon: Play, text: 'Games to enjoy together.', context: 'Global concept · S1' }, { name: 'School', Icon: GraduationCap, text: 'Guided sessions with learning goals.', context: 'Singapore offer · S2' }, { name: 'Corporate', Icon: Building2, text: 'Hosted team events and family days.', context: 'Singapore offer · S3' }].map(s => <div className="segment" key={s.name}><s.Icon size={26} strokeWidth={1.5}/><h3>{s.name}</h3><p>{s.text}</p><span>{s.context}</span></div>)}</div>
        </div>
        <div className="insight-strip"><span className="eyebrow">START WITH THE PRODUCT</span><p>Make the shared experience easy to understand.</p></div>
        <details><summary>What is already offered?</summary><p>Indonesia lists corporate, school, birthday and membership offers. Singapore shows how the same brand packages guided group sessions. That is a useful reference, not proof of demand in Jakarta. Check activities and age/height rules at each venue.</p>{sourceLinks(['S1', 'S2', 'S3', 'S4'])}</details>
      </Chapter>

      <Chapter index={2} title="People already make time for experiences." intro="Spending on experiences, meeting friends and exercise are relevant habits to build on.">
        <EditorialFigure index={2} className="evidence-infographic"/>
        <div className="evidence-grid">{facts.map((f, i) => <article className="evidence-card" key={f.title}><div className="evidence-top"><span className="eyebrow">0{i + 1} / {f.title}</span><Badge status={f.status}/></div><span className="metric">{f.metric}<small>%</small></span><p>{f.body}</p><div className="metric-bar"><span style={{ width: f.metric + '%' }}/></div><small>{f.sampleContext}</small>{sourceLinks(f.sourceIds)}</article>)}</div>
        <div className="evidence-conclusion"><Target size={27} strokeWidth={1.5}/><p>The habits matter. Demand for a SuperPark pass still needs testing.</p><Badge/></div>
        <details><summary>More context from the surveys</summary><p>Jakpat’s 2024 survey of 4,477 Gen Z/Millennials reports stress reduction (47%) and better mood (36%) as exercise motivations. Home (54%) and sports fields (53%) are familiar places to exercise.</p><p>The 2025 leisure survey also reports social scrolling (63%). People can choose several activities; these are not shares of time. Different surveys stay separate. None proves what customers would pay for SuperPark or how often they would return.</p>{sourceLinks(['S8', 'S9'])}</details>
      </Chapter>

      <Chapter index={3} title="Give each group a reason to visit." intro="Test one group first. Friends is a starting idea.">
        <Badge/><Tabs labels={personas.map(p => p.name)} selected={persona} onSelect={setPersona} label="Who might book">
          <div className="persona-panel"><div className="persona-main"><EditorialImage index={3} className="persona-illustration" sizes="(min-width: 960px) 50vw, calc(100vw - 44px)"/><span className="eyebrow">THE OUTING</span><h3>{p.occasion}</h3><blockquote>“{p.message}”</blockquote><span className="fine">Message to test</span></div>
            <div className="persona-details"><div><span className="eyebrow">WHO BOOKS</span><p>{p.buyer}</p></div><div><span className="eyebrow">WHY CHOOSE IT</span><p>{p.value}</p></div><div><span className="eyebrow">WHAT MUST WORK</span><p>{p.proof}</p></div><div><span className="eyebrow">HOW TO TEST IT</span><p>{p.test}</p></div></div>
          </div>
        </Tabs>
        <details><summary>What to ask customers</summary><p>Can they picture what they would do? Can the whole group join? Is the price clear? What would make them return?</p><p>These are questions, not findings. Check nearby customers, travel time, preferred slots and alternatives. Do not assume Friends is the largest or most profitable group.</p></details>
      </Chapter>

      <Chapter index={4} title="A good visit needs a clear offer." intro="Build on what exists. Check the full catalogue before adding a new pass.">
        <EditorialFigure index={4} className="benchmark-illustration"/>
        <div className="benchmark-table">
          <div className="benchmark-row"><span className="eyebrow">INDONESIA / TODAY</span><div><h3>Membership gives discounts and perks.</h3><p>The public page describes a twelve-month membership. It does not explain included monthly visits or automatic billing.</p><Badge status="Verified public fact"/>{sourceLinks(['S4', 'S5'])}</div></div>
          <div className="benchmark-row"><span className="eyebrow">SINGAPORE / REFERENCE</span><div><h3>Groups can book a guided programme.</h3><p>School and team offers include a clear purpose and a plan for the visit.</p><Badge status="Verified public fact"/>{sourceLinks(['S2', 'S3'])}</div></div>
          <div className="benchmark-row"><span className="eyebrow">INDONESIA / IDEA TO TEST</span><div><h3>A clear outing, then a reason to return.</h3><p>Try a group session and a repeat-access offer that fits real demand. Other pass products may already exist in other channels.</p><Badge/></div></div>
        </div>
        <aside className="counter-evidence"><span className="award-mark">↗</span><div><Badge status="Company claim"/><h3>Build on the Gen Z work already done.</h3><p>SuperPark reports Indonesia’s 2025 Youth Choice Award for its integrated Gen Z campaign. The award does not tell us sales or repeat visits.</p>{sourceLinks(['S6'])}</div></aside>
        <div className="needs-summary"><span className="eyebrow">WHAT TO TEST NEXT</span><div><p><strong>Easy to choose.</strong> A group outing people can picture.</p><p><strong>Worth repeating.</strong> A pass with clear value.</p><p><strong>Easy to share.</strong> The experience shown in action.</p></div></div>
      </Chapter>

      <Chapter index={5} title="That leads to three actions." intro="Help people choose the outing, come back, and bring others." dark>
        <div className="move-grid">{moves.map((m, i) => { const Icon = [Users, Ticket, Play][i]; return <button className="move-card" onClick={() => go(m.section)} key={m.tag}><div className="move-art"><EditorialImage index={5} scene={i} alt={["Concept illustration of a shared outing.", "Concept illustration of a pass and calendar.", "Concept illustration of content showing the outing."][i]} sizes="(min-width: 960px) 360px, calc(100vw - 96px)"/></div><div className="move-number">0{i + 1}<Icon size={25} strokeWidth={1.5}/></div><span className="eyebrow">{m.tag}</span><p className="move-why">{m.why}</p><h3>{m.title}</h3><p>{m.body}</p><span className="move-link">See the action <ArrowUpRight size={19}/></span></button>; })}</div>
        <div className="dark-note"><Badge/><p>Three connected actions. Start with one offer the venue can deliver well.</p></div>
      </Chapter>

      <Chapter index={6} title="1. Make the outing real." intro="SuperPark Play Sessions: simple group formats to test using suitable existing activities.">
        <Tabs labels={['Friends', 'Family', 'Corporate']} selected={activation} onSelect={setActivation} label="Session ideas"><div className="activation-layout"><div><Badge/><h3 className="activation-message">{activations[activation].message}</h3><p>{activations[activation].title}: {activations[activation].frames[1]}</p><button className="primary-button" onClick={() => setStory(activations[activation])}>See the session idea <ArrowUpRight size={17}/></button></div><figure className="activation-art"><EditorialImage index={6} scene={activation} alt={activationSceneAlts[activation]} sizes="(min-width: 960px) 480px, calc(100vw - 44px)"/><figcaption>Conceptual AI illustration · {activations[activation].title}</figcaption></figure></div></Tabs>
        <div className="activation-channel-grid"><div><span className="eyebrow">MALLS & COMMUNITIES</span><p>Use one approved challenge to invite people in. Give group organisers a specific session and booking code.</p></div><div><span className="eyebrow">COMPANIES & PARTNERS</span><p>Give HR an agenda and a quote. Approach relevant partners for a useful participant experience.</p></div></div>
        <details><summary>Check the visit before changing the venue</summary><p>Walk the visit with adults, families and a group organiser. Check price clarity, arrival, instructions, shared play, rest and the next-visit offer.</p><p>Record what causes confusion. Give each change an owner and an effort estimate. Try better guidance or hosted introductions before proposing layout changes.</p><p>Track bookings, attendance, sales, direct costs and return visits. Separate partner funding from customer sales. Booking codes help; matched sessions or a comparison group can test whether the activity adds sales.</p></details>
      </Chapter>

      <Chapter index={7} title="2. Make coming back worthwhile." intro="Choose how long a pass lasts and which visits it covers.">
        <EditorialFigure index={7} className="access-infographic"/>
        <div className="product-grid">{[{ name: 'Single Visit', duration: 'One booking', access: 'One stated session', purpose: 'A simple starting point', Icon: Ticket }, { name: 'Play Monthly', duration: 'One month', access: 'A set of visits or allowed off-peak access', purpose: 'For people ready to return', Icon: CalendarDays }, { name: 'Play Annual', duration: 'Twelve months', access: 'Clear access over a longer period', purpose: 'Show full payment and monthly equivalent', Icon: Layers }, { name: 'Unlimited Play', duration: 'Monthly or annual', access: 'No visit-count cap in allowed time slots', purpose: 'Clear booking and session rules', Icon: Users }].map(product => <article className="product" key={product.name}><product.Icon size={22} strokeWidth={1.5}/><span className="badge hypothesis">Plan idea</span><h3>{product.name}</h3><span className="product-duration">{product.duration}</span><p>{product.access}</p><small>{product.purpose}</small></article>)}</div>
        <p className="fine">Example plans, not approved offers or prices. Unlimited must mean no visit-count cap; state time slots, session length and booking rules. A capped plan is a visit pack.</p>
        <SubscriptionSimulator/>
        <div className="technical-grid"><div><h3>Offer an upgrade that fits.</h3><p>Explain when a pass makes sense. If approved, credit the first ticket towards a pass within a stated window. Do not count the same sale twice.</p><p>Give members a reason to return: a session calendar, new challenges or family missions. Use reminders only with permission.</p></div><div><h3>Make the pass easy to use.</h3><details><summary><CreditCard size={17}/> Payment & renewal</summary><p>Check payment, receipts, refunds, expiry and support. Start with a prepaid month if needed. Automatic renewal needs a working payment system and customer consent.</p></details><details><summary><ScanLine size={17}/> Booking & check-in</summary><p>Check member ID, QR lookup, available visits, allowed slots and duplicate scans. Set cancellation and no-show rules. Confirm what the current system supports.</p></details><details><summary><BarChart3 size={17}/> Capacity & results</summary><p>Set venue access, busy-slot rules, family add-ons and support ownership. Track use, fees, visit costs, return visits, renewals and cancellations. Check whether pass users displace regular ticket buyers.</p></details></div></div>
      </Chapter>

      <Chapter index={8} title="3. Show the play on TikTok." intro="Show an outing people want to join. Then make it easy to book.">
        <Badge/><div className="video-grid">{videos.map((v, i) => <VideoCard key={v.id} item={v} index={i} onOpen={() => setStory(v)}/>)}</div>
        <div className="tiktok-bottom"><div><span className="eyebrow">START SMALL</span><h3>One shoot.<br/>Around 12 video ideas.</h3><p>Capture real play, useful tips and honest reactions. Choose creators whose audience fits the venue.</p></div><div><span className="eyebrow">FROM CONTENT TO BOOKING</span><p>Test posts first. Use approved creator content and paid ads to reach more nearby customers.</p><div className="conversion-path"><span>See the play</span><ArrowRight size={14}/><span>Choose the outing</span><ArrowRight size={14}/><span>Book & attend</span></div><p className="fine">Check ticket records for bookings, attendance, sales and costs. Views and shares show interest; sales show the business result.</p></div></div>
        <details><summary>What the shoot needs</summary><p>Clear activity rules, participant consent, creator disclosure, brand approval, content rights and a working booking link. Get the right permission before filming children.</p><p>TikTok’s Samsung Watch6 case is a reference for showing participation. Its results are not a forecast for SuperPark. Current SuperPark TikTok activity and paid results still need a review.</p>{sourceLinks(['S12'])}</details>
      </Chapter>

      <Chapter index={9} title="Test one offer. Learn what works." intro="Understand. Design. Launch. Evaluate. Timing follows the agreed scope.">
        <EditorialFigure index={9} className="workflow-infographic"/>
        <Tabs labels={stages.map(s => s.name)} selected={stage} onSelect={setStage} label="The test plan"><div className="stage-panel"><div className="stage-title"><span className="stage-number">0{stage + 1}</span><h3>{stages[stage].work}</h3></div><div className="stage-details"><span className="eyebrow">WHAT WE MAKE</span><ul className="check-list">{stages[stage].outputs.map(output => <li key={output}><Check size={17}/>{output}</li>)}</ul><div className="decision-gate"><span className="eyebrow">DECISION</span><p>{stages[stage].gate}</p></div><details><summary>Owners & inputs</summary><p>{stages[stage].owners}</p><p>We need current offers, sales and visit data, venue limits, system access and approved assets.</p></details></div></div></Tabs>
        <details><summary>What to agree before starting</summary><ol className="alignment-list">{alignment.map(item => <li key={item}>{item}</li>)}</ol></details>
      </Chapter>

      <Chapter index={10} title="One lead. Clear roles." intro="Aditya leads the plan. DreamUs teams help shape and deliver it.">
        <div className="mandate-layout"><div className="mandate-statement"><EditorialFigure index={10} className="mandate-illustration"/><span className="eyebrow">ADITYA’S PROPOSED ROLE</span><h3>Connect the customer,<br/><span>the offer and the team.</span></h3><p>Choose priorities. Build offers with finance and operations. Guide content and events. Read the results and recommend the next move.</p><a className="text-button" href="https://www.adityabayu.com/" target="_blank" rel="noopener noreferrer">About Aditya <ArrowUpRight size={16}/></a></div><div className="ownership-list"><div><h4>DreamUs leadership</h4><p>Approves the plan, prices, budget, terms and major changes.</p></div><div><h4>Venue operations</h4><p>Runs safe sessions, staffing, activities and check-in.</p></div><div><h4>Finance</h4><p>Checks costs, tax, payments and when revenue is earned.</p></div><div><h4>Staff & agreed agency support</h4><p>Make the content and run the campaign with existing teams.</p></div></div></div>
        <div className="mandate-options"><div><span className="eyebrow">OPTION 01</span><h3>Fractional CMO</h3><p>Lead the plan with the current team and vendors.</p></div><div><span className="eyebrow">OPTION 02</span><h3>Fractional CMO + agency support</h3><p>Add agreed content and campaign resources.</p></div></div>
        <p className="fine">Agree scope, resources and fees separately. Start with what the first test needs.</p>
      </Chapter>

      <Chapter index={11} title="Choose one offer. Test it well." dark>
        <EditorialFigure index={11} className="closing-illustration"/><p className="closing-copy">Pick the first customer group. Check the offer and venue capacity. Agree who leads the test and how to judge it.</p>
        <div className="closing-decisions">{[{ number: '01', title: 'Choose the group', text: 'Who are we inviting, and why would they come?' }, { number: '02', title: 'Check the offer', text: 'What is included, what does it cost, and can we deliver it?' }, { number: '03', title: 'Agree the test', text: 'Name the owner, resources and next decision.' }].map(item => <div key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
        <a className="primary-button light-button" href="https://www.adityabayu.com/" target="_blank" rel="noopener noreferrer">Talk with Aditya <ArrowUpRight size={18}/></a><div className="closing-footer"><span>Prepared by Aditya Indra Bayu</span><span>DreamUs Group · SuperPark Indonesia · October 2026</span></div>
      </Chapter>
    </main>
    <footer className="site-footer"><span>SuperPark Indonesia: A Reason to Return</span><button className="text-button" onClick={() => openSources()}><BookOpen size={15}/> Sources</button></footer>
    <section className="print-sources"><h2>Sources</h2><p>Sources checked 13 October 2026. Ideas and example calculations are not DreamUs actual results.</p>{sources.map(s => <div key={s.id}><h3>{s.id} · {s.publisher} — {s.title}</h3><p>{s.publicationPeriod} · {s.evidenceType}</p><a href={s.url}>{s.url}</a><p>{s.caveat}</p></div>)}</section>
    {presentation && <><nav className="presentation-controls" aria-label="Presentation controls"><button className="icon-button" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous chapter"><ArrowLeft size={20}/></button><div><span>{String(active + 1).padStart(2, '0')} <span className="muted">/ 12</span></span><div className="slide-progress"><span style={{ width: `${(active + 1) / 12 * 100}%` }}/></div></div><button className="icon-button" onClick={() => go(active + 1)} disabled={active === 11} aria-label="Next chapter"><ArrowRight size={20}/></button><span className="control-divider"/><button className="icon-button" onClick={() => setDrawer('chapters')} aria-label="Choose chapter"><Menu size={19}/></button><button className="icon-button fullscreen-button" aria-label="Toggle browser fullscreen" onClick={async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); setFullScreenMessage(''); } catch { setFullScreenMessage('Browser fullscreen is unavailable. Presentation mode remains active.'); } }}><Maximize size={18}/></button><button className={`icon-button ${notes ? 'selected' : ''}`} onClick={() => setNotes(!notes)} aria-label="Toggle speaker notes" aria-pressed={notes}><BookOpen size={18}/></button><button className="icon-button" onClick={exit} aria-label="Exit presentation mode"><X size={19}/></button></nav>{fullScreenMessage && <p className="fullscreen-message" role="status">{fullScreenMessage}</p>}{notes && <aside className="speaker-notes"><span className="eyebrow">SPEAKER NOTES</span><p>{active === 0 ? 'The goal is to earn the next visit. Start with the product, then the customer, then the offer. The three actions follow from that story.' : `Discuss ${chapters[active].title.toLowerCase()}. Explain what we know, what we want to test, and who owns the next step.`}</p></aside>}</>}
    {drawer === 'chapters' && <Overlay title="The plan, slide by slide." onClose={() => setDrawer(null)}><nav className="chapter-list" aria-label="All chapters">{chapters.map((c, i) => <button key={c.id} className={i === active ? 'selected' : ''} onClick={() => { setDrawer(null); go(i); }}><span>{String(i + 1).padStart(2, '0')}</span><span>{c.title}<small>{c.stage}</small></span><ArrowUpRight size={17}/></button>)}</nav><div className="menu-utilities"><button className="text-button" onClick={() => openSources()}><BookOpen size={16}/> Sources</button><button className="text-button" onClick={() => { setDrawer(null); setTimeout(() => window.print(), 100); }}><Printer size={16}/> Print report</button></div></Overlay>}
    {drawer === 'sources' && <Overlay title="Sources behind the plan." onClose={() => setDrawer(null)}><p className="muted">Checked 13 October 2026. Pages can change. Each source explains what it supports.</p><div className="evidence-legend">{(['Verified public fact', 'Company claim', 'Strategic hypothesis', 'Illustrative model'] as EvidenceStatus[]).map(status => <Badge key={status} status={status}/>)}</div>{sourceFilter.length > 0 && <button className="text-button" onClick={() => setSourceFilter([])}>Show all 12 sources <ArrowRight size={16}/></button>}<div className="source-register">{sources.filter(s => !sourceFilter.length || sourceFilter.includes(s.id)).map(s => <article key={s.id}><div className="source-register-top"><span className="source-id">{s.id}</span><span className="eyebrow">{s.evidenceType.replaceAll('-', ' ')}</span></div><h3>{s.title}</h3><span className="fine">{s.publisher} · {s.publicationPeriod}</span><p>{s.caveat}</p><a href={s.url} target="_blank" rel="noopener noreferrer">Open source <ArrowUpRight size={15}/></a></article>)}</div></Overlay>}
    {story && <Overlay title={story.title} onClose={() => setStory(null)} wide><StoryboardDetail item={story}/></Overlay>}
  </div>;
}
