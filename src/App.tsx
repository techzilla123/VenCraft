import { useState, useRef, useEffect } from "react";
import svgPaths from "../src/imports/DigitalMarketingAgency/svg-swobmmaix0";
import { imgRectangle2, imgRectangle3, imgRectangle23804, imgImage61 } from "../src/imports/DigitalMarketingAgency/svg-fwr5h";
import imgHeroPhoto from "../src/imports/DigitalMarketingAgency/fcf2279665e23b3946c9c6fe67a4fbc9dc7d7618.png";
import imgTeamPhoto from "../src/imports/DigitalMarketingAgency/6b463a707529cf38dc17862f0c190f9a7386a3d4.png";
import imgAvatar1 from "../src/imports/DigitalMarketingAgency/c53b009da68910012c6184849d60db9ccbd2596d.png";
import imgAvatar2 from "../src/imports/DigitalMarketingAgency/6616b71b5eaa0d45d2b33754bd3f756fd0d11ddf.png";
// Portfolio screenshots served as static public assets (avoids Git LFS issues in production)
const imgTechzilla    = "/portfolio-techzilla.png";
const imgMaserTravel  = "/portfolio-maser.png";
const imgMaleteHostels = "/portfolio-malete.png";

// ── Unsplash image URLs (external CDN — no Vite import needed) ────────────────
const U = {
  founderMan1:   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  founderWoman1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&q=80",
  founderMan2:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  founderWoman2: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=120&q=80",
  amaraAvatar:   "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
  sorenAvatar:   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  keikoAvatar:   "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
  teamLaptops:   "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
  pitchMeeting:  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=80",
  boardMeeting:  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
  fintechApp:    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
  analytics:     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  mobileApp:     "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=600&q=80",
  screenMonitor: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&q=80",
  presentation:  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
  threeFounders: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  collab:        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
  blogTeam:      "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=600&q=80",
};

// ── font helpers ──────────────────────────────────────────────
const pjsBold   = { fontFamily: "'Plus Jakarta Sans:Bold', sans-serif",     fontWeight: 700 };
const pjsMed    = { fontFamily: "'Plus Jakarta Sans:Medium', sans-serif",   fontWeight: 500 };
const pjsSemi   = { fontFamily: "'Plus Jakarta Sans:SemiBold', sans-serif", fontWeight: 600 };
const manBold   = { fontFamily: "'Manrope:Bold', sans-serif",               fontWeight: 700 };
const robReg    = { fontFamily: "'Roboto:Regular', sans-serif",             fontWeight: 400, fontVariationSettings: '"wdth" 100' as const };
const robSemi   = { fontFamily: "'Roboto:SemiBold', sans-serif",            fontWeight: 600, fontVariationSettings: '"wdth" 100' as const };

// ── Logo ──────────────────────────────────────────────────────
function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const sq = size === "lg" ? 51 : 33;
  const inner = size === "lg" ? 21.6 : 14;

  // Because the logo is rotated 180deg,
  // decreasing top moves the black shape visually downward.
  const innerOff = size === "lg" ? 12 : 7;

  const txtSize = size === "lg" ? "text-[37px]" : "text-[24px]";
  const gap = size === "lg" ? "gap-[12px]" : "gap-[8px]";
  const mask = size === "lg" ? imgRectangle3 : imgRectangle2;

  return (
    <div className={`flex ${gap} items-center shrink-0`}>
      <div
        className="relative"
        style={{
          width: sq,
          height: sq,
          transform: "rotate(180deg)",
        }}
      >
        {/* Green outer shape */}
        <div
          className="absolute inset-0 bg-[#99ea48] rounded-bl-[3px] rounded-br-[53px] rounded-tl-[3px] rounded-tr-[3px]"
          style={{
            maskImage: `url("${mask}")`,
            maskSize: `${sq}px ${sq}px`,
          }}
        />

        {/* Black inner shape moved visually downward */}
        <div
          className="absolute bg-[#191f33] rounded-bl-[3px] rounded-br-[53px] rounded-tl-[3px] rounded-tr-[3px]"
          style={{
            width: inner,
            height: inner,
            left: innerOff,
            top: innerOff,
            maskImage: `url("${mask}")`,
            maskSize: `${sq}px ${sq}px`,
            maskPosition: `-${innerOff}px -${innerOff}px`,
          }}
        />
      </div>

      <p
        className={`${txtSize} tracking-[-1.2px] text-[#020407]`}
        style={manBold}
      >
        VenCraft
      </p>
    </div>
  );
}
// ── Spinner ───────────────────────────────────────────────────
function Spinner({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="animate-spin">
      <circle cx="12" cy="12" r="10" stroke="#99ea48" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M22 12a10 10 0 00-10-10" stroke="#99ea48" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// ── Waitlist Modal ────────────────────────────────────────────
async function submitToWeb3Forms(fields: Record<string, string>): Promise<boolean> {
  const fd = new FormData();
  fd.append("access_key", "86ca0e9d-0983-410e-b976-117eed203994");
  fd.append("botcheck", "");
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  try {
    const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

function WaitlistModal({ mode, onClose, onSubmitted }: { mode: "founder" | "investor"; onClose: () => void; onSubmitted?: () => void }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    await submitToWeb3Forms({
      subject: `VenCraft waitlist — ${mode}`,
      email,
      message: `New ${mode} joined the waitlist.`,
    });
    setLoading(false);
    setSubmitted(true);
    onSubmitted?.();
  };
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(1,2,5,0.82)", backdropFilter: "blur(8px)" }} onClick={onClose}>
      <div className="relative w-full max-w-[480px] bg-[#010205] rounded-[28px] overflow-hidden p-8 sm:p-10" onClick={(e) => e.stopPropagation()}>
        {/* Background texture */}
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          <img src={imgHeroPhoto} alt="" className="w-full h-full object-cover scale-[1.4] rotate-[25deg]" />
        </div>
        <button onClick={onClose} className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <p className="text-[#99ea48] text-[11px] uppercase tracking-[0.3em] mb-3" style={pjsBold}>Early Access</p>
            <h2 className="text-white text-[36px] sm:text-[42px] leading-[1.1] tracking-[-1.2px]" style={pjsSemi}>
              Stop dreaming.<br />Start building.
            </h2>
          </div>
          <p className="text-white/50 text-[13px] uppercase tracking-widest" style={pjsSemi}>
            {mode === "founder" ? "1,420 founders already on the list" : "42 active investors in current cohort"}
          </p>
          {submitted ? (
            <div className="bg-[#99ea48] rounded-2xl flex items-center gap-3 px-6 py-5 text-[15px] text-[#010205]" style={pjsBold}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#010205" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              You're on the list — we'll be in touch!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={mode === "founder" ? "Enter your founder email" : "Enter your investor email"}
                className="bg-white/10 rounded-2xl px-5 py-4 text-[15px] text-white placeholder-white/35 border border-white/15 focus:outline-none focus:border-[#99ea48] transition-colors w-full"
                style={pjsMed}
                autoFocus
                disabled={loading}
              />
              <button type="submit" disabled={loading} className="bg-white rounded-2xl flex items-center justify-center px-6 py-4 text-[15px] text-[#010205] hover:bg-[#99ea48] transition-colors disabled:opacity-80" style={pjsBold}>
                {loading ? <Spinner size={22} /> : (
                  <span className="flex items-center justify-between w-full">
                    {mode === "founder" ? "Join Waitlist" : "Request Memo"}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                )}
              </button>
            </form>
          )}
          <p className="text-white/25 text-[11px] text-center" style={pjsMed}>No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}

// ── Contact Modal ─────────────────────────────────────────────
function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(1,2,5,0.82)", backdropFilter: "blur(8px)" }} onClick={onClose}>
      <div className="relative w-full max-w-[520px] bg-white rounded-[28px] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Top accent */}
        <div className="h-1.5 bg-[#99ea48] w-full" />
        <div className="p-8 sm:p-10">
          <button onClick={onClose} className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#010205" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          <p className="text-[#99ea48] text-[11px] uppercase tracking-[0.3em] mb-3" style={pjsBold}>Get in touch</p>
          <h2 className="text-[#010205] text-[32px] leading-[1.2] tracking-[-1px] mb-2" style={pjsSemi}>Contact Us</h2>
          <p className="text-[#878c91] text-[14px] leading-[1.7] mb-8" style={pjsMed}>Our team responds within one business day. We'd love to hear from you.</p>
          <div className="flex flex-col gap-3">
            {[
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p3972a900} fill="white" /></svg>, label: "Phone", value: "+234 704 634 6780", href: "tel:+2347046346780" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p126a9080} fill="white" /></svg>, label: "Email", value: "vencraft.io@gmail.com", href: "mailto:vencraft.io@gmail.com" },
              { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p239f000} fill="white" /></svg>, label: "Location", value: "Worldwide", href: "#" },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-start gap-4 p-4 rounded-2xl bg-[#fafafa] hover:bg-[#010205]/5 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#010205] flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[#9b9b9c] text-[11px] uppercase tracking-widest mb-0.5" style={pjsBold}>{label}</p>
                  <p className="text-[#010205] text-[14px] leading-[1.6]" style={pjsSemi}>{value}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-[#9b9b9c] text-[12px] uppercase tracking-widest mb-4" style={pjsBold}>Follow us</p>
            <div className="flex gap-3">
              {[
                { label: "X",         href: "https://x.com/vencraft_io",                                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h5l11 16h-5L4 4z" fill="#192031" /><path d="M4 20L20 4" stroke="#192031" strokeWidth="2" strokeLinecap="round" /></svg> },
                { label: "TikTok",    href: "https://www.tiktok.com/@vencraft.io",                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#192031"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg> },
                { label: "Instagram", href: "https://www.instagram.com/vencraft.io/",                         icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#192031" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61594411436008",         icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#192031"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { label: "LinkedIn",  href: "#",                                                               icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#192031"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                { label: "GitHub",    href: "#",                                                               icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#192031"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} target={href === "#" ? undefined : "_blank"} rel="noopener noreferrer" title={label} className="bg-[#f3f3f3] rounded-full w-[36px] h-[36px] flex items-center justify-center hover:bg-[#99ea48] transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Nav dropdown data ─────────────────────────────────────────
const navDropdowns: Record<string, { title: string; desc: string; tag?: string }[]> = {
  Platform: [
    { title: "MVP Builder", desc: "Production-ready prototype in 7 days", tag: "Core" },
    { title: "Pitch Engine", desc: "Auto-generated decks, models & market analysis" },
    { title: "Investor Broadcast", desc: "One-click outreach to 200+ seed investors" },
    { title: "Cohort Dashboard", desc: "Track your build & fundraise in real time" },
  ],
  Pipeline: [
    { title: "The Consultation", desc: "90-min strategy session to scope your MVP", tag: "Step 1" },
    { title: "Instant Prototype", desc: "Engineers ship in 7 days, you ship to users", tag: "Step 2" },
    { title: "The Pitch Engine", desc: "Deck, model, market analysis — investor-ready", tag: "Step 3" },
    { title: "Launch & Scale", desc: "Live product, funded & growing", tag: "Step 4" },
  ],
  "Case Studies": [
    { title: "Techzilla Inc.", desc: "Full-stack digital product studio — Full Build" },
    { title: "Maser Global Travels", desc: "Travel platform — MVP launched end-to-end" },
    { title: "Loopcast — $3.5M", desc: "Podcast growth platform seed round" },
    { title: "Nexos — $4.2M", desc: "Cross-border payments infrastructure" },
  ],
  Resources: [
    { title: "Founder Blog", desc: "Playbooks for building and fundraising faster" },
    { title: "Pitch Deck Templates", desc: "Investor-tested slide frameworks" },
    { title: "Financial Model Kit", desc: "Pre-built models for seed-stage startups" },
    { title: "Investor Database", desc: "200+ vetted seed investors & their theses" },
  ],
};

// ── Navbar ────────────────────────────────────────────────────
function Navbar({ onJoin, onContact, bellDone }: { onJoin: () => void; onContact: () => void; bellDone: boolean }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navItems = ["Platform", "Pipeline", "Case Studies", "Resources"];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100" onMouseLeave={() => setActiveMenu(null)}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between gap-6">
        <Logo />
        <div className="hidden lg:flex items-center gap-7" style={pjsSemi}>
          {navItems.map((l) => (
            <button
              key={l}
              className={`flex items-center gap-1 text-[14px] transition-colors ${activeMenu === l ? "text-[#99ea48]" : "text-[#020407] hover:text-[#99ea48]"}`}
              onMouseEnter={() => setActiveMenu(l)}
            >
              {l}
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-200 ${activeMenu === l ? "rotate-180" : ""}`}>
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
          <button onClick={onContact} className="text-[#020407] text-[14px] hover:text-[#99ea48] transition-colors" onMouseEnter={() => setActiveMenu(null)}>Contact</button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onJoin} className="hidden sm:flex border border-[#010205] rounded-full px-5 py-3 text-[14px] text-[#010205] hover:bg-[#99ea48] hover:border-[#99ea48] transition-colors" style={manBold}>
            Join Waitlist
          </button>
          <button
            onClick={onJoin}
            className={`rounded-full w-[46px] h-[46px] flex items-center justify-center transition-colors ${bellDone ? "bg-[#99ea48]" : "bg-[#010205] hover:bg-[#99ea48]"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d={svgPaths.p1e4b7b80} stroke={bellDone ? "#010205" : "white"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p146fda80} stroke={bellDone ? "#010205" : "white"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-width drop-down panel */}
      {activeMenu && navDropdowns[activeMenu] && (
        <div className="absolute left-0 right-0 bg-white border-t border-gray-100 shadow-[0_16px_48px_-8px_rgba(1,2,5,0.13)]" onMouseEnter={() => setActiveMenu(activeMenu)}>
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-6">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#99ea48]" />
              <p className="text-[#9b9b9c] text-[11px] uppercase tracking-[0.25em]" style={pjsBold}>{activeMenu}</p>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {navDropdowns[activeMenu].map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => setActiveMenu(null)}
                  className="text-left p-4 rounded-[16px] border border-transparent hover:border-[#99ea48]/25 hover:bg-[#f6fef0] transition-all group flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-8 h-8 rounded-[10px] bg-[#f3f3f3] group-hover:bg-[#99ea48] transition-colors flex items-center justify-center">
                      <span className="text-[11px] text-[#010205]" style={pjsBold}>{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                    {item.tag && (
                      <span className="text-[9px] bg-[#99ea48] text-[#010205] rounded-full px-2 py-0.5" style={pjsBold}>{item.tag}</span>
                    )}
                  </div>
                  <p className="text-[#010205] text-[13px] leading-snug" style={pjsSemi}>{item.title}</p>
                  <p className="text-[#9b9b9c] text-[11px] leading-[1.6]" style={pjsMed}>{item.desc}</p>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto pt-1">
                    <span className="text-[#99ea48] text-[10px]" style={pjsBold}>Learn more</span>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M12 5l7 7-7 7" stroke="#99ea48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── VideoLogo: correct logo rendered on dark backgrounds ──────────────────────
function VideoLogo({ size = 46 }: { size?: number }) {
  const inner = size * (21.6 / 51);
  const off   = size * (12 / 51);
  return (
    <div style={{ display:"flex", alignItems:"center", gap: size * 0.2 }}>
      <div style={{ width:size, height:size, transform:"rotate(180deg)", position:"relative", flexShrink:0 }}>
        <div style={{ position:"absolute", inset:0, background:"#99ea48", borderRadius:"3px 3px 53px 3px",
          maskImage:`url("${imgRectangle3}")`, maskSize:`${size}px ${size}px` }} />
        <div style={{ position:"absolute", width:inner, height:inner, left:off, top:off,
          background:"#191f33", borderRadius:"3px 3px 53px 3px",
          maskImage:`url("${imgRectangle3}")`, maskSize:`${size}px ${size}px`,
          maskPosition:`-${off}px -${off}px` }} />
      </div>
      <span style={{ ...manBold, color:"white", fontSize:size*0.73, letterSpacing:"-1.2px", lineHeight:1 }}>VenCraft</span>
    </div>
  );
}

// ── Shared video-player hook logic ────────────────────────────────────────────
// ── Shared animation utilities ────────────────────────────────────────────────

function useCounter(target: number, duration = 1700, start = false) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(0);
  useEffect(() => {
    if (!start) return;
    cancelAnimationFrame(rafRef.current);
    setVal(0);
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);
  return val;
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, y = 28, x = 0 }: { children: React.ReactNode; delay?: number; y?: number; x?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : `translate(${x}px, ${y}px)`,
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ── Logo preloader ────────────────────────────────────────────────────────────
function Preloader({ onFadeStart, onDone }: { onFadeStart: () => void; onDone: () => void }) {
  const [fading, setFading] = useState(false);
  const onFadeStartRef = useRef(onFadeStart);
  const onDoneRef      = useRef(onDone);
  const sz = typeof window !== "undefined" && window.innerWidth < 480 ? 54 : 80;

  useEffect(() => {
    // CSS animations handle the logo entrance; JS only manages the exit timing
    const t1 = setTimeout(() => { setFading(true); onFadeStartRef.current(); }, 2800);
    const t2 = setTimeout(() => onDoneRef.current(), 3580);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const inner = sz * (21.6 / 51);
  const off   = sz * (12 / 51);
  const chars = "VenCraft".split("");

  return (
    <div style={{
      position:"fixed", inset:0, zIndex:1000,
      background:"#010205",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      transform: fading ? "translateY(-100%)" : "translateY(0)",
      transition: fading ? "transform 0.72s cubic-bezier(0.76,0,0.24,1)" : "none",
      pointerEvents: fading ? "none" : "all",
    }}>
      {/* Subtle grid */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.03, pointerEvents:"none" }}>
        <defs><pattern id="plg" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#plg)" />
      </svg>
      {/* Radial glow */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 40% 30% at 50% 50%, rgba(153,234,72,0.07) 0%, transparent 70%)",
        animation:"pl-glow-in 0.9s ease 0.6s both",
      }} />

      {/* Logo mark + wordmark — CSS animations drive the entrance */}
      <div style={{ display:"flex", alignItems:"center", gap: sz * 0.22 }}>
        {/* Icon mark — rotate(180deg) matches the real Logo component */}
        <div style={{ position:"relative", width:sz, height:sz, transform:"rotate(180deg)", flexShrink:0 }}>
          <div style={{
            position:"absolute", inset:0,
            background:"#99ea48",
            borderRadius:"3px 3px 53px 3px",
            maskImage:`url("${imgRectangle3}")`, maskSize:`${sz}px ${sz}px`,
            animation:"pl-icon-in 0.65s cubic-bezier(0.34,1.56,0.64,1) 0.12s both",
          }} />
          <div style={{
            position:"absolute", width:inner, height:inner, left:off, top:off,
            background:"#191f33",
            borderRadius:"3px 3px 53px 3px",
            maskImage:`url("${imgRectangle3}")`, maskSize:`${sz}px ${sz}px`, maskPosition:`-${off}px -${off}px`,
            animation:"pl-inner-in 0.52s cubic-bezier(0.34,1.4,0.64,1) 0.55s both",
          }} />
        </div>

        {/* "VenCraft" — each letter slides up sequentially via CSS animation delay */}
        <div style={{ display:"flex" }}>
          {chars.map((ch, i) => (
            <span key={i} style={{
              ...manBold, color:"white",
              fontSize: sz * 0.78, letterSpacing:"-1.5px", lineHeight:1,
              display:"inline-block",
              animation:`pl-char-in 0.4s ease ${0.95 + i * 0.06}s both`,
            }}>{ch}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function useVideoPlayer(totalMs: number) {
  const [elapsed, setElapsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const startRef  = useRef(0);
  const pausedRef = useRef(0);
  const rafRef    = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    startRef.current = Date.now() - pausedRef.current;
    if (!isPlaying) return;
    const tick = () => {
      const ms = Math.min(Date.now() - startRef.current, totalMs);
      setElapsed(ms);
      if (ms < totalMs) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, resetKey, totalMs]);

  const togglePlay = () => { pausedRef.current = elapsed; setIsPlaying(v => !v); };
  const restart    = () => { pausedRef.current = 0; setIsPlaying(true); setResetKey(k => k+1); };
  const jumpTo     = (ms: number) => { pausedRef.current = ms; setElapsed(ms); setIsPlaying(true); setResetKey(k => k+1); };

  return { elapsed, isPlaying, togglePlay, restart, jumpTo };
}

// ── Video Modal — animated motion graphics demo ───────────────
function VideoModal({ onClose }: { onClose: () => void }) {
  const TOTAL_MS = 38000;
  const SCENE_TIMES = [0, 4, 8, 13, 19, 24, 30, 34, 38];
  const SCENE_LABELS = ["Intro","The Problem","47 Days","MVP Builder","Pitch Engine","Results","Testimonial","Get Started"];

  const { elapsed, isPlaying, togglePlay, restart, jumpTo } = useVideoPlayer(TOTAL_MS);

  // Mobile scaling: scenes are authored at 860px wide; scale them to fit the container
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(860);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => setContainerW(entries[0].contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const vscale = Math.min(1, containerW / 860);

  const t      = elapsed / 1000;
  const progress = elapsed / TOTAL_MS;
  const scene  = SCENE_TIMES.slice(0,-1).reduce((acc,s,i) => t >= s && t < SCENE_TIMES[i+1] ? i : acc, 0);
  const sceneT = t - SCENE_TIMES[scene];

  const ea = (d: number, dur = 0.5) => {
    const r = Math.min(Math.max((sceneT-d)/dur,0),1);
    return r<0.5 ? 2*r*r : 1-Math.pow(-2*r+2,2)/2;
  };
  const rise  = (d:number,dist=18,dur=0.5) => ({ opacity:ea(d,dur), transform:`translateY(${(1-ea(d,dur))*dist}px)` });
  const drop  = (d:number,dist=18,dur=0.5) => ({ opacity:ea(d,dur), transform:`translateY(${-(1-ea(d,dur))*dist}px)` });
  const grow  = (d:number,from=0.85,dur=0.5) => ({ opacity:ea(d,dur), transform:`scale(${from+ea(d,dur)*(1-from)})` });

  // ── Scenes — called as functions (not JSX components) so React never unmounts/remounts ──

  function renderScene() {
    const idx = Math.min(scene, 7);

    // ── S0: Intro ──────────────────────────────────────────────────────────────
    if (idx === 0) return (
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        {/* Subtle grid */}
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.04, pointerEvents:"none" }}>
          <defs><pattern id="vg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#vg)" />
        </svg>
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse 55% 45% at 50% 50%, rgba(153,234,72,${ea(0,2)*0.08}) 0%, transparent 70%)`, pointerEvents:"none" }} />
        {/* Logo */}
        <div style={{ ...grow(0.3,0.78,0.9) }}>
          <VideoLogo size={56} />
        </div>
        {/* Divider line animates outward */}
        <div style={{ display:"flex", alignItems:"center", gap:12, margin:"28px 0 20px", opacity:ea(1.5,0.6) }}>
          <div style={{ width:`${ea(1.5,0.7)*80}px`, height:1, background:"rgba(153,234,72,0.35)" }} />
          <div style={{ width:4, height:4, borderRadius:"50%", background:"#99ea48", opacity:0.6 }} />
          <div style={{ width:`${ea(1.5,0.7)*80}px`, height:1, background:"rgba(153,234,72,0.35)" }} />
        </div>
        <div style={{ ...rise(2,14,0.7), textAlign:"center" }}>
          <p style={{ ...pjsBold, color:"rgba(255,255,255,0.35)", fontSize:11, letterSpacing:"0.38em", textTransform:"uppercase" }}>
            Build fast &nbsp;·&nbsp; Pitch perfect &nbsp;·&nbsp; Fund faster
          </p>
        </div>
        <div style={{ ...rise(2.8,10,0.6), textAlign:"center", marginTop:10 }}>
          <p style={{ ...pjsMed, color:"rgba(255,255,255,0.12)", fontSize:11 }}>From raw idea to funded startup — watch how it works</p>
        </div>
      </div>
    );

    // ── S1: The Problem ────────────────────────────────────────────────────────
    if (idx === 1) return (
      <div style={{ position:"absolute", inset:0, display:"flex" }}>
        {/* Left — the brutal truth */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 0 0 64px", borderRight:"1px solid rgba(255,255,255,0.07)" }}>
          <div style={rise(0,20,0.6)}>
            <p style={{ ...pjsBold, color:"rgba(255,255,255,0.1)", fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", marginBottom:16 }}>Without VenCraft</p>
          </div>
          {[
            { n:"12+", u:"months", d:"cold-pitching VCs", delay:0.3 },
            { n:"$100K", u:"minimum", d:"to build an MVP", delay:0.8 },
            { n:"98%", u:"of startups", d:"never get funded", delay:1.3 },
          ].map((item,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom:14, opacity:ea(item.delay,0.5), transform:`translateX(${(1-ea(item.delay,0.5))*-20}px)` }}>
              <p style={{ ...pjsBold, color:"rgba(239,68,68,0.7)", fontSize:28, letterSpacing:"-1px", lineHeight:1 }}>{item.n}</p>
              <p style={{ ...pjsMed, color:"rgba(255,255,255,0.25)", fontSize:13 }}>{item.u} {item.d}</p>
            </div>
          ))}
        </div>
        {/* Right — VenCraft answer */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", padding:"0 64px 0 40px" }}>
          <div style={rise(0,20,0.6)}>
            <p style={{ ...pjsBold, color:"#99ea48", fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", marginBottom:16 }}>With VenCraft</p>
          </div>
          {[
            { n:"47", u:"days", d:"idea to funded", delay:0.5 },
            { n:"$0", u:"extra cost", d:"MVP included", delay:1.0 },
            { n:"200+", u:"investors", d:"one click away", delay:1.5 },
          ].map((item,i)=>(
            <div key={i} style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom:14, opacity:ea(item.delay,0.5), transform:`translateX(${(1-ea(item.delay,0.5))*20}px)` }}>
              <p style={{ ...pjsBold, color:"#99ea48", fontSize:28, letterSpacing:"-1px", lineHeight:1 }}>{item.n}</p>
              <p style={{ ...pjsMed, color:"rgba(255,255,255,0.5)", fontSize:13 }}>{item.u} {item.d}</p>
            </div>
          ))}
          <div style={{ marginTop:12, opacity:ea(2.3,0.6) }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(153,234,72,0.1)", border:"1px solid rgba(153,234,72,0.25)", borderRadius:8, padding:"7px 14px" }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"#99ea48" }} />
              <p style={{ ...pjsBold, color:"#99ea48", fontSize:11 }}>VenCraft changes everything</p>
            </div>
          </div>
        </div>
      </div>
    );

    // ── S2: 47 Days ────────────────────────────────────────────────────────────
    if (idx === 2) return (
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <div style={{ ...rise(0,20,0.7), display:"flex", alignItems:"flex-end", gap:14, marginBottom:8 }}>
          <p style={{ ...pjsBold, color:"white", fontSize:120, lineHeight:0.9, letterSpacing:"-6px" }}>47</p>
          <div style={{ paddingBottom:16 }}>
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.2)", fontSize:22, letterSpacing:"-0.5px" }}>days.</p>
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.14)", fontSize:13, marginTop:4 }}>idea → funded</p>
          </div>
        </div>
        {/* Timeline */}
        <div style={{ width:"100%", maxWidth:560, marginTop:28, padding:"0 40px" }}>
          <div style={{ position:"relative", height:2, background:"rgba(255,255,255,0.07)", borderRadius:2, overflow:"hidden" }}>
            <div style={{ position:"absolute", left:0, top:0, height:"100%", width:`${ea(1.4,1.2)*100}%`, background:"linear-gradient(90deg, rgba(153,234,72,0.4), #99ea48)", borderRadius:2, transition:"none" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", marginTop:14 }}>
            {[
              { n:"01", label:"Consult", day:"Day 1" },
              { n:"02", label:"Prototype", day:"Day 7" },
              { n:"03", label:"Pitch Engine", day:"Day 14" },
              { n:"04", label:"Launch", day:"Day 47" },
            ].map((s,i)=>(
              <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4, opacity:ea(1.4+i*0.25,0.5) }}>
                <div style={{ width:28, height:28, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", background:ea(1.4+i*0.25,0.5)>0.5?"rgba(153,234,72,0.15)":"rgba(255,255,255,0.05)", border:`1px solid ${ea(1.4+i*0.25,0.5)>0.5?"rgba(153,234,72,0.35)":"rgba(255,255,255,0.1)"}` }}>
                  <p style={{ ...pjsBold, color:ea(1.4+i*0.25,0.5)>0.5?"#99ea48":"rgba(255,255,255,0.3)", fontSize:9 }}>{s.n}</p>
                </div>
                <p style={{ ...pjsSemi, color:"rgba(255,255,255,0.55)", fontSize:10 }}>{s.label}</p>
                <p style={{ ...pjsMed, color:"rgba(255,255,255,0.2)", fontSize:9 }}>{s.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    // ── S3: MVP Builder ────────────────────────────────────────────────────────
    if (idx === 3) {
      const items = ["Screens & user flows","Database schemas","API endpoints","Hi-fi prototype","Deployed to prod"];
      const day = Math.min(Math.floor(ea(0.2,4.2)*7),7);
      return (
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", gap:32, padding:"0 40px" }}>
          {/* Browser */}
          <div style={{ opacity:ea(0,0.6), flexShrink:0 }}>
            <div style={{ width:260, border:"1px solid rgba(255,255,255,0.1)", borderRadius:12, background:"#060e1d", overflow:"hidden", boxShadow:"0 24px 64px rgba(0,0,0,0.6)" }}>
              {/* Chrome bar */}
              <div style={{ height:32, background:"#0c1628", display:"flex", alignItems:"center", padding:"0 10px", gap:5, borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
                {["#f87171","#fbbf24","#34d399"].map((c,i)=><div key={i} style={{ width:9,height:9,borderRadius:"50%",background:c,opacity:0.6 }} />)}
                <div style={{ flex:1, margin:"0 8px", height:17, borderRadius:3, background:"rgba(255,255,255,0.04)", display:"flex", alignItems:"center", padding:"0 8px" }}>
                  <span style={{ ...pjsMed, color:"rgba(255,255,255,0.18)", fontSize:7 }}>app.vencraft.io/dashboard</span>
                </div>
              </div>
              {/* App content */}
              <div style={{ padding:"10px 10px 10px" }}>
                {/* Nav */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8, opacity:ea(0.4,0.5) }}>
                  <div style={{ width:44, height:10, borderRadius:3, background:"rgba(153,234,72,0.7)" }} />
                  <div style={{ display:"flex", gap:6 }}>{[32,22,28].map((w,i)=><div key={i} style={{ width:w, height:7, borderRadius:2, background:"rgba(255,255,255,0.1)" }} />)}</div>
                </div>
                {/* Hero card */}
                <div style={{ borderRadius:8, padding:10, background:"rgba(153,234,72,0.06)", border:"1px solid rgba(153,234,72,0.12)", marginBottom:7, opacity:ea(0.8,0.5) }}>
                  <div style={{ width:"60%", height:9, borderRadius:3, background:"rgba(255,255,255,0.28)", marginBottom:5 }} />
                  <div style={{ width:"40%", height:7, borderRadius:3, background:"rgba(255,255,255,0.12)", marginBottom:8 }} />
                  <div style={{ width:70, height:20, borderRadius:20, background:"rgba(153,234,72,0.75)" }} />
                </div>
                {/* 3 stat cards */}
                <div style={{ display:"flex", gap:5, marginBottom:7, opacity:ea(1.2,0.5) }}>
                  {[["$1.2M","raised"],["6","weeks"],["200+","investors"]].map(([v,l],i)=>(
                    <div key={i} style={{ flex:1, borderRadius:6, padding:"6px 5px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", textAlign:"center" }}>
                      <p style={{ ...pjsBold, color:"rgba(255,255,255,0.8)", fontSize:9 }}>{v}</p>
                      <p style={{ ...pjsMed, color:"rgba(255,255,255,0.3)", fontSize:7 }}>{l}</p>
                    </div>
                  ))}
                </div>
                {/* Chart */}
                <div style={{ borderRadius:6, height:38, display:"flex", alignItems:"flex-end", gap:3, padding:"6px 6px 6px", background:"rgba(255,255,255,0.02)", opacity:ea(1.8,0.5) }}>
                  {[22,40,30,65,48,80,62].map((h,i)=>(
                    <div key={i} style={{ flex:1, borderRadius:"2px 2px 0 0", height:`${ea(1.8+i*0.08,0.35)*h}%`, background:`rgba(153,234,72,${0.3+i*0.1})` }} />
                  ))}
                </div>
              </div>
            </div>
            {/* Monitor stand */}
            <div style={{ width:35,height:3,background:"rgba(255,255,255,0.06)",margin:"0 auto",borderRadius:"0 0 3px 3px" }} />
            <div style={{ width:75,height:2,background:"rgba(255,255,255,0.04)",margin:"0 auto",borderRadius:2 }} />
          </div>
          {/* Right side */}
          <div style={{ maxWidth:220 }}>
            <div style={{ ...drop(0.2,14,0.5), marginBottom:8 }}>
              <p style={{ ...pjsBold, color:"#99ea48", fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase" }}>MVP Builder</p>
            </div>
            <div style={{ ...rise(0.4,18,0.6), marginBottom:16 }}>
              <p style={{ ...pjsSemi, color:"white", fontSize:26, lineHeight:1.2, letterSpacing:"-0.6px" }}>
                Your product,<br />live in <span style={{ color:"#99ea48" }}>{day === 0 ? "—" : day} days</span>.
              </p>
            </div>
            {items.map((item,i)=>{
              const v = ea(0.8+i*0.48,0.35);
              const done = v > 0.65;
              return (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:9, opacity:v }}>
                  <div style={{ width:16,height:16,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:done?"#99ea48":"transparent",border:done?"none":"1px solid rgba(255,255,255,0.2)" }}>
                    {done && <svg width="8" height="8" viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#010205" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>}
                  </div>
                  <p style={{ ...pjsMed, color:done?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.35)", fontSize:11 }}>{item}</p>
                </div>
              );
            })}
            {/* Progress bar */}
            <div style={{ marginTop:12, opacity:ea(3.5,0.6) }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                <p style={{ ...pjsMed, color:"rgba(255,255,255,0.25)", fontSize:9 }}>Build progress</p>
                <p style={{ ...pjsBold, color:"#99ea48", fontSize:9 }}>{Math.round((day/7)*100)}%</p>
              </div>
              <div style={{ height:4, background:"rgba(255,255,255,0.06)", borderRadius:4, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${(day/7)*100}%`, background:"#99ea48", borderRadius:4, transition:"none" }} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ── S4: Pitch Engine ───────────────────────────────────────────────────────
    if (idx === 4) {
      const cnt = Math.floor(ea(0.5,3)*200);
      const slides = [
        { title:"Problem & Solution", sub:"Fintech founders wait 12+ months for funding", icon:"💡" },
        { title:"Market Size", sub:"$4.2B TAM · $890M serviceable", icon:"📊" },
        { title:"Business Model", sub:"15% success fee + $299/mo SaaS", icon:"💰" },
        { title:"Projections", sub:"$2.4M ARR by Year 2", icon:"📈" },
        { title:"Team & Traction", sub:"1,420 waitlist · 3 ex-YC advisors", icon:"🚀" },
      ];
      return (
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", gap:28, padding:"0 36px" }}>
          {/* Deck */}
          <div style={{ display:"flex", flexDirection:"column", gap:6, opacity:ea(0,0.5), flexShrink:0 }}>
            <p style={{ ...pjsBold, color:"rgba(255,255,255,0.22)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:6 }}>Pitch deck — auto-generated</p>
            {slides.map((s,i)=>(
              <div key={i} style={{ width:210, height:36, borderRadius:8, display:"flex", alignItems:"center", padding:"0 10px", gap:8, opacity:ea(0.3+i*0.3,0.35), transform:`translateX(${(1-ea(0.3+i*0.3,0.35))*-18}px)`, background:i===0?"rgba(153,234,72,0.09)":"rgba(255,255,255,0.03)", border:`1px solid ${i===0?"rgba(153,234,72,0.3)":"rgba(255,255,255,0.07)"}` }}>
                <span style={{ fontSize:13 }}>{s.icon}</span>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ ...pjsSemi, color:"rgba(255,255,255,0.8)", fontSize:10 }}>{s.title}</p>
                  <p style={{ ...pjsMed, color:"rgba(255,255,255,0.28)", fontSize:8, marginTop:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.sub}</p>
                </div>
                {ea(0.5+i*0.3,0.2)>0.7 && <svg width="9" height="9" viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#99ea48" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>}
              </div>
            ))}
          </div>
          {/* Divider */}
          <div style={{ width:1, height:140, background:"rgba(255,255,255,0.07)", flexShrink:0, opacity:ea(1.5,0.5) }} />
          {/* Counter + grid */}
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
            <div style={drop(1.5,12,0.4)}>
              <p style={{ ...pjsBold, color:"rgba(255,255,255,0.22)", fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase" }}>Pitch Engine</p>
            </div>
            <div style={{ ...grow(1.8,0.85,0.8), textAlign:"center", lineHeight:1 }}>
              <p style={{ ...pjsBold, color:"white", fontSize:80, letterSpacing:"-4px" }}>{cnt}</p>
            </div>
            <div style={rise(2.2,10,0.5)}>
              <p style={{ ...pjsSemi, color:"rgba(255,255,255,0.38)", fontSize:13, letterSpacing:"-0.2px" }}>investors notified in one click</p>
            </div>
            {/* Investor avatar grid */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(8,1fr)", gap:5, marginTop:8, opacity:ea(2.4,0.6) }}>
              {Array.from({length:24}).map((_,i)=>(
                <div key={i} style={{ width:16,height:16,borderRadius:"50%",background:`rgba(153,234,72,${0.2+Math.sin(i)*0.2})`,transform:`scale(${ea(2.4+i*0.04,0.25)})`,border:"1px solid rgba(153,234,72,0.25)" }} />
              ))}
            </div>
            <div style={{ opacity:ea(3.2,0.4), marginTop:2 }}>
              <p style={{ ...pjsMed, color:"rgba(255,255,255,0.2)", fontSize:9 }}>Sequoia · a16z · Y Combinator · Techstars…</p>
            </div>
          </div>
        </div>
      );
    }

    // ── S5: Results ────────────────────────────────────────────────────────────
    if (idx === 5) {
      const stats = [
        { val:`$${Math.floor(ea(0.3,2.5)*48)}M`, label:"Capital raised by alumni", color:"#99ea48" },
        { val:`${Math.floor(ea(0.9,2.2)*47)}`,   label:"Days avg. to term sheet", color:"white" },
        { val:`${Math.floor(ea(1.5,2.5)*1420).toLocaleString()}+`, label:"Founders on the waitlist", color:"white" },
      ];
      return (
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0 40px" }}>
          <div style={{ ...drop(0,14,0.4), marginBottom:28 }}>
            <p style={{ ...pjsBold, color:"rgba(255,255,255,0.25)", fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase" }}>The results speak for themselves</p>
          </div>
          <div style={{ display:"flex", gap:24, marginBottom:32 }}>
            {stats.map((s,i)=>(
              <div key={i} style={{ textAlign:"center", padding:"18px 24px", borderRadius:16, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", opacity:ea(0.3+i*0.6,0.7), transform:`translateY(${(1-ea(0.3+i*0.6,0.7))*20}px)` }}>
                <p style={{ ...pjsBold, color:s.color, fontSize:46, lineHeight:1, letterSpacing:"-2px" }}>{s.val}</p>
                <p style={{ ...pjsMed, color:"rgba(255,255,255,0.3)", fontSize:11, marginTop:8, maxWidth:110 }}>{s.label}</p>
              </div>
            ))}
          </div>
          {/* Bar chart — growth trajectory */}
          <div style={{ width:"100%", maxWidth:480, opacity:ea(2.8,0.6) }}>
            <div style={{ display:"flex", alignItems:"flex-end", gap:4, height:52 }}>
              {[18,28,22,42,32,55,44,68,58,80,70,100].map((h,i)=>(
                <div key={i} style={{ flex:1, borderRadius:"2px 2px 0 0", height:`${ea(2.8+i*0.05,0.45)*h}%`, background:i===11?"#99ea48":`rgba(153,234,72,${0.1+i*0.075})`, transition:"none" }} />
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:6 }}>
              <p style={{ ...pjsMed, color:"rgba(255,255,255,0.15)", fontSize:8 }}>Q1 2023</p>
              <p style={{ ...pjsBold, color:"#99ea48", fontSize:8 }}>Now ↑</p>
            </div>
          </div>
        </div>
      );
    }

    // ── S6: Testimonial ────────────────────────────────────────────────────────
    if (idx === 6) return (
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 56px", gap:40 }}>
        {/* Large quote mark */}
        <div style={{ flexShrink:0, opacity:ea(0,0.7) }}>
          <svg width="56" height="44" viewBox="0 0 56 44" fill="none">
            <path d="M0 44V26C0 11.641 9.4 0 26 0h4v10h-4C16 10 11 16 11 22v4h14v18H0zm30 0V26C30 11.641 39.4 0 56 0h0v10h0C46 10 41 16 41 22v4h15v18H30z" fill="rgba(153,234,72,0.18)"/>
          </svg>
        </div>
        {/* Quote + attribution */}
        <div>
          <div style={rise(0.3,18,0.75)}>
            <p style={{ ...pjsSemi, color:"rgba(255,255,255,0.88)", fontSize:18, lineHeight:1.72, letterSpacing:"-0.3px", maxWidth:500 }}>
              "VenCraft didn't just build our platform — they understood the vision and brought it to life better than we imagined. Techzilla wouldn't be where it is today without them."
            </p>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginTop:24, ...rise(1.6,14,0.55) }}>
            <img src="https://images.unsplash.com/photo-1620932934088-fbdb2920e484?w=120&q=80" alt="Techzilla Inc." style={{ width:48,height:48,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(153,234,72,0.35)",flexShrink:0 }} />
            <div>
              <p style={{ ...pjsBold, color:"white", fontSize:14, marginBottom:2 }}>Techzilla Inc.</p>
              <p style={{ ...pjsMed, color:"#99ea48", fontSize:11 }}>Founder &nbsp;·&nbsp; techzilla.online</p>
            </div>
            <div style={{ marginLeft:16, display:"flex", gap:3, opacity:ea(2.4,0.5) }}>
              {[1,2,3,4,5].map(i=><span key={i} style={{ color:"#99ea48", fontSize:16 }}>★</span>)}
            </div>
          </div>
        </div>
      </div>
    );

    // ── S7: Get Started ────────────────────────────────────────────────────────
    return (
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.03, pointerEvents:"none" }}>
          <defs><pattern id="vg2" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#vg2)" />
        </svg>
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse 60% 50% at 50% 50%, rgba(153,234,72,${ea(0,2)*0.09}) 0%, transparent 70%)`, pointerEvents:"none" }} />
        <div style={grow(0.2,0.8,0.8)}><VideoLogo size={52} /></div>
        <div style={{ ...rise(0.9,20,0.75), textAlign:"center", marginTop:24 }}>
          <p style={{ ...pjsSemi, color:"white", fontSize:36, lineHeight:1.15, letterSpacing:"-1px" }}>
            Stop dreaming.<br />Start building.
          </p>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:12, margin:"20px 0 14px", opacity:ea(1.7,0.7) }}>
          <div style={{ width:`${ea(1.7,0.7)*80}px`, height:1, background:"rgba(153,234,72,0.3)" }} />
          <div style={{ width:4, height:4, borderRadius:"50%", background:"#99ea48", opacity:0.5 }} />
          <div style={{ width:`${ea(1.7,0.7)*80}px`, height:1, background:"rgba(153,234,72,0.3)" }} />
        </div>
        <div style={{ ...rise(2.1,12,0.55), textAlign:"center" }}>
          <p style={{ ...pjsMed, color:"rgba(255,255,255,0.25)", fontSize:12 }}>Join 1,420+ founders already on the waitlist</p>
        </div>
        <div style={{ ...grow(2.6,0.88,0.6), marginTop:20 }}>
          <div style={{ background:"#99ea48", borderRadius:50, padding:"12px 28px", display:"flex", alignItems:"center", gap:10, boxShadow:"0 0 32px rgba(153,234,72,0.2)" }}>
            <span style={{ ...pjsBold, color:"#010205", fontSize:14 }}>Join the Waitlist</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M12 5l7 7-7 7" stroke="#010205" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position:"fixed", inset:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:"12px 16px", background:"rgba(0,0,0,0.96)" }} onClick={onClose}>
      <div ref={containerRef} style={{ position:"relative", width:"100%", maxWidth:860, borderRadius:20, overflow:"hidden", background:"#010205", aspectRatio:"16/9" }} onClick={e=>e.stopPropagation()}>
        {/* Scene content — scaled for mobile */}
        <div style={{ position:"absolute", inset:0, overflow:"hidden" }}>
          <div style={{ position:"absolute", width:860, height:484, top:"50%", left:"50%", transform:`translate(-50%, -50%) scale(${vscale})`, transformOrigin:"center center" }}>
            {renderScene()}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"rgba(255,255,255,0.08)", zIndex:5 }}>
          <div style={{ height:"100%", width:`${progress*100}%`, background:"#99ea48", transition:"none" }} />
        </div>

        {/* Chapter dots */}
        <div style={{ position:"absolute", bottom:14, left:0, right:0, display:"flex", justifyContent:"center", gap:6, zIndex:10 }}>
          {SCENE_LABELS.map((_,i)=>(
            <button key={i} onClick={()=>jumpTo(SCENE_TIMES[i]*1000)}
              style={{ width:scene===i?18:5, height:5, borderRadius:9, border:"none", cursor:"pointer", padding:0, background:i<=scene?"#99ea48":"rgba(255,255,255,0.18)", transition:"width 0.25s ease" }} />
          ))}
        </div>

        {/* Scene label */}
        <div style={{ position:"absolute", top:14, left:18, zIndex:10 }}>
          <p style={{ ...pjsBold, color:"rgba(255,255,255,0.22)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase" }}>{SCENE_LABELS[scene]}</p>
        </div>

        {/* Controls — always on top */}
        <div style={{ position:"absolute", top:10, right:10, display:"flex", gap:6, zIndex:20 }}>
          <button onClick={togglePlay} style={{ width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center" }}>
            {isPlaying
              ? <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><rect width="3.5" height="12" rx="1"/><rect x="6.5" width="3.5" height="12" rx="1"/></svg>
              : <svg width="11" height="12" viewBox="0 0 11 12" fill="white"><path d="M1.5 1l8 5-8 5V1z"/></svg>}
          </button>
          <button onClick={restart} style={{ width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.58"/></svg>
          </button>
          <button onClick={onClose} style={{ width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Pipeline Video Modal — explains the 4-step pipeline ───────────────────────
function PipelineVideoModal({ onClose }: { onClose: () => void }) {
  const TOTAL_MS = 28000;
  const ST = [0, 3, 7.5, 13.5, 19.5, 23.5, 28];
  const LABELS = ["Intro","The Consultation","Instant Prototype","The Pitch Engine","Launch & Scale","Day 47"];

  // Mobile scaling
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(860);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => setContainerW(entries[0].contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const vscale = Math.min(1, containerW / 860);

  const { elapsed, isPlaying, togglePlay, restart, jumpTo } = useVideoPlayer(TOTAL_MS);

  const t       = elapsed / 1000;
  const progress = elapsed / TOTAL_MS;
  const scene   = ST.slice(0,-1).reduce((acc,s,i) => t >= s && t < ST[i+1] ? i : acc, 0);
  const sceneT  = t - ST[scene];

  const ea = (d: number, dur = 0.5) => {
    const r = Math.min(Math.max((sceneT-d)/dur,0),1);
    return r<0.5 ? 2*r*r : 1-Math.pow(-2*r+2,2)/2;
  };
  const rise = (d:number,dist=18,dur=0.5) => ({ opacity:ea(d,dur), transform:`translateY(${(1-ea(d,dur))*dist}px)` });
  const drop = (d:number,dist=18,dur=0.5) => ({ opacity:ea(d,dur), transform:`translateY(${-(1-ea(d,dur))*dist}px)` });
  const grow = (d:number,from=0.85,dur=0.5) => ({ opacity:ea(d,dur), transform:`scale(${from+ea(d,dur)*(1-from)})` });

  function stepScene(num: string, title: string, desc: string, content: React.ReactNode) {
    return (
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", gap:48, padding:"0 52px" }}>
        <div style={{ minWidth:200 }}>
          <div style={{ ...drop(0,14,0.45), marginBottom:10 }}>
            <p style={{ ...pjsBold, color:"#99ea48", fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase" }}>Step {num}</p>
          </div>
          <div style={{ ...rise(0.3,18,0.65), marginBottom:10 }}>
            <p style={{ ...pjsSemi, color:"white", fontSize:32, lineHeight:1.15, letterSpacing:"-0.8px", whiteSpace:"pre-line" }}>{title}</p>
          </div>
          <div style={rise(0.7,14,0.5)}>
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.38)", fontSize:13, lineHeight:1.7 }}>{desc}</p>
          </div>
        </div>
        <div style={{ flex:1 }}>{content}</div>
      </div>
    );
  }

  function renderPScene() {
    const idx = Math.min(scene, 5);

    if (idx === 0) return (
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse 50% 40% at 50% 50%, rgba(153,234,72,${ea(0,1.5)*0.08}) 0%, transparent 70%)`, pointerEvents:"none" }} />
        <div style={grow(0.2,0.82,0.75)}><VideoLogo size={52} /></div>
        <div style={{ ...rise(0.9,14,0.65), textAlign:"center", marginTop:18 }}>
          <p style={{ ...pjsSemi, color:"white", fontSize:26, letterSpacing:"-0.6px" }}>The VenCraft Pipeline</p>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:10, margin:"18px 0 12px", opacity:ea(1.7,0.6) }}>
          <div style={{ width:`${ea(1.7,0.6)*70}px`, height:1, background:"rgba(153,234,72,0.3)" }} />
          <div style={{ width:4, height:4, borderRadius:"50%", background:"#99ea48", opacity:0.5 }} />
          <div style={{ width:`${ea(1.7,0.6)*70}px`, height:1, background:"rgba(153,234,72,0.3)" }} />
        </div>
        <div style={rise(2,10,0.5)}>
          <p style={{ ...pjsMed, color:"rgba(255,255,255,0.28)", fontSize:13, textAlign:"center" }}>How we turn your idea into a funded company.</p>
        </div>
      </div>
    );

    if (idx === 1) return stepScene("01", "The\nConsultation", "90 minutes to map your entire startup.",
      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        {["Market thesis extracted","User personas defined","MVP scope & architecture","Go-to-market strategy"].map((b,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", gap:12, opacity:ea(1.2+i*0.5,0.45), transform:`translateX(${(1-ea(1.2+i*0.5,0.45))*22}px)` }}>
            <div style={{ width:8,height:8,borderRadius:"50%",background:"#99ea48",flexShrink:0 }} />
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.65)", fontSize:14 }}>{b}</p>
          </div>
        ))}
        <div style={{ marginTop:10, padding:"10px 14px", borderRadius:10, border:"1px solid rgba(153,234,72,0.25)", opacity:ea(3.5,0.55) }}>
          <p style={{ ...pjsBold, color:"#99ea48", fontSize:11 }}>Brief locked in ✓</p>
        </div>
      </div>
    );

    if (idx === 2) {
      const day = Math.min(Math.floor(ea(0.8,4.5)*7),7);
      const items = ["Screens & flows","DB schema","API layer","Hi-fi prototype","Production deploy"];
      return stepScene("02", "Instant\nPrototype", "7 days. Production-ready.",
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {items.map((item,i)=>{
            const done = ea(1+i*0.55,0.3)>0.55;
            return (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:10, opacity:ea(1+i*0.55,0.3) }}>
                <div style={{ width:16,height:16,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:done?"#99ea48":"transparent",border:done?"none":"1px solid rgba(255,255,255,0.2)" }}>
                  {done && <svg width="8" height="8" viewBox="0 0 10 10"><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#010205" strokeWidth="1.6" strokeLinecap="round" fill="none"/></svg>}
                </div>
                <p style={{ ...pjsMed, color:done?"rgba(255,255,255,0.75)":"rgba(255,255,255,0.35)", fontSize:13 }}>{item}</p>
              </div>
            );
          })}
          <div style={{ marginTop:8, padding:"8px 14px", borderRadius:10, background:"rgba(153,234,72,0.08)", border:"1px solid rgba(153,234,72,0.2)", opacity:ea(4.5,0.55) }}>
            <p style={{ ...pjsBold, color:"#99ea48", fontSize:11 }}>{day===7 ? "Shipped — Day 7 ✓" : `Building... Day ${day}/7`}</p>
          </div>
        </div>
      );
    }

    if (idx === 3) {
      const cnt = Math.floor(ea(2,2.8)*200);
      const deck = ["Problem & Solution","Market Size ($4.2B)","Business Model","Projections & Unit Economics","Team & Traction"];
      return stepScene("03", "The Pitch\nEngine", "Investor-ready assets in 48 hours.",
        <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
          {deck.map((s,i)=>(
            <div key={i} style={{ height:32, borderRadius:8, display:"flex", alignItems:"center", padding:"0 10px", gap:9, opacity:ea(0.8+i*0.35,0.3), transform:`translateX(${(1-ea(0.8+i*0.35,0.3))*16}px)`, background:`rgba(153,234,72,${i===0?0.08:0.03})`, border:`1px solid rgba(153,234,72,${i===0?0.28:0.1})` }}>
              <div style={{ width:2,height:14,borderRadius:2,background:"#99ea48",opacity:0.35+i*0.12 }} />
              <p style={{ ...pjsMed, color:"rgba(255,255,255,0.72)", fontSize:11 }}>{s}</p>
              {ea(1+i*0.35,0.2)>0.75 && <svg width="8" height="8" viewBox="0 0 10 10" style={{ marginLeft:"auto" }}><path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#99ea48" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>}
            </div>
          ))}
          <div style={{ marginTop:8, textAlign:"center", opacity:ea(2.5,0.5) }}>
            <p style={{ ...pjsBold, color:"#99ea48", fontSize:24, letterSpacing:"-1px" }}>{cnt}</p>
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.28)", fontSize:10, marginTop:2 }}>investors notified</p>
          </div>
        </div>
      );
    }

    if (idx === 4) return stepScene("04", "Launch\n& Scale", "Live before dinner.",
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        {[
          { label:"Production live", status:"LIVE" },
          { label:"Stripe payments connected", status:"ACTIVE" },
          { label:"First users onboarded", status:"12 users" },
          { label:"Investor meetings scheduled", status:"3 booked" },
        ].map((s,i)=>(
          <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", opacity:ea(0.7+i*0.5,0.45) }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:7,height:7,borderRadius:"50%",background:"#99ea48",flexShrink:0 }} />
              <p style={{ ...pjsMed, color:"rgba(255,255,255,0.65)", fontSize:13 }}>{s.label}</p>
            </div>
            <p style={{ ...pjsBold, color:"#99ea48", fontSize:10, letterSpacing:"0.1em" }}>{s.status}</p>
          </div>
        ))}
        <div style={{ marginTop:8, padding:"10px 14px", borderRadius:10, border:"1px solid rgba(153,234,72,0.25)", opacity:ea(3,0.55) }}>
          <p style={{ ...pjsBold, color:"#99ea48", fontSize:11 }}>Live product · Day 47 ✓</p>
        </div>
      </div>
    );

    // idx === 5 — Day 47 result
    const n = Math.floor(ea(0.3,3)*47);
    return (
      <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
        <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse 50% 40% at 50% 50%, rgba(153,234,72,${ea(0,2)*0.08}) 0%, transparent 70%)`, pointerEvents:"none" }} />
        <div style={{ ...rise(0,22,0.7), display:"flex", alignItems:"flex-end", gap:14, marginBottom:12 }}>
          <p style={{ ...pjsBold, color:"white", fontSize:110, lineHeight:0.9, letterSpacing:"-5px" }}>{n}</p>
          <div style={{ paddingBottom:14 }}>
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.2)", fontSize:24, letterSpacing:"-0.5px" }}>days.</p>
            <p style={{ ...pjsMed, color:"rgba(255,255,255,0.12)", fontSize:12, marginTop:3 }}>idea → funded</p>
          </div>
        </div>
        <div style={{ ...rise(1.3,14,0.6), textAlign:"center" }}>
          <p style={{ ...pjsSemi, color:"rgba(255,255,255,0.42)", fontSize:16 }}>From raw idea to funded startup.</p>
        </div>
        <div style={{ ...rise(2.2,12,0.55), marginTop:24 }}>
          <VideoLogo size={38} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ position:"fixed", inset:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"center", padding:"12px 16px", background:"rgba(0,0,0,0.96)" }} onClick={onClose}>
      <div ref={containerRef} style={{ position:"relative", width:"100%", maxWidth:860, borderRadius:20, overflow:"hidden", background:"#010205", aspectRatio:"16/9" }} onClick={e=>e.stopPropagation()}>
        <div style={{ position:"absolute", inset:0, overflow:"hidden" }}>
          <div style={{ position:"absolute", width:860, height:484, top:"50%", left:"50%", transform:`translate(-50%, -50%) scale(${vscale})`, transformOrigin:"center center" }}>
            {renderPScene()}
          </div>
        </div>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"rgba(255,255,255,0.08)", zIndex:5 }}>
          <div style={{ height:"100%", width:`${progress*100}%`, background:"#99ea48", transition:"none" }} />
        </div>
        <div style={{ position:"absolute", bottom:14, left:0, right:0, display:"flex", justifyContent:"center", gap:6, zIndex:10 }}>
          {LABELS.map((_,i)=>(
            <button key={i} onClick={()=>jumpTo(ST[i]*1000)}
              style={{ width:scene===i?18:5, height:5, borderRadius:9, border:"none", cursor:"pointer", padding:0, background:i<=scene?"#99ea48":"rgba(255,255,255,0.18)", transition:"width 0.25s ease" }} />
          ))}
        </div>
        <div style={{ position:"absolute", top:14, left:18, zIndex:10 }}>
          <p style={{ ...pjsBold, color:"rgba(255,255,255,0.22)", fontSize:9, letterSpacing:"0.3em", textTransform:"uppercase" }}>{LABELS[scene]}</p>
        </div>
        <div style={{ position:"absolute", top:10, right:10, display:"flex", gap:6, zIndex:20 }}>
          <button onClick={togglePlay} style={{ width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center" }}>
            {isPlaying
              ? <svg width="10" height="12" viewBox="0 0 10 12" fill="white"><rect width="3.5" height="12" rx="1"/><rect x="6.5" width="3.5" height="12" rx="1"/></svg>
              : <svg width="11" height="12" viewBox="0 0 11 12" fill="white"><path d="M1.5 1l8 5-8 5V1z"/></svg>}
          </button>
          <button onClick={restart} style={{ width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.58"/></svg>
          </button>
          <button onClick={onClose} style={{ width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",background:"rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
function HeroSection({ mode, onToggle, onJoin, onVideoOpen, ready }: { mode: "founder" | "investor"; onToggle: (m: "founder" | "investor") => void; onJoin: () => void; onVideoOpen: () => void; ready: boolean }) {
  const founderAvatars = [U.founderMan1, U.founderWoman1, U.founderMan2, U.founderWoman2];
  // Animated counters — start once preloader is done
  const count1420 = useCounter(1420, 1800, ready);
  const count200  = useCounter(200,  1200, ready);
  const count47   = useCounter(47,   1500, ready);

  return (
    <section className="bg-white overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 grid md:grid-cols-2 gap-10 md:gap-6 items-center">
        {/* Left */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Mode toggle — plain text */}
          <div className="flex items-center gap-5 justify-center sm:justify-start">
            {(["founder", "investor"] as const).map((m, i) => (
              <span key={m} className="contents">
                {i > 0 && <span className="text-[#d9d9d9] text-[14px]">|</span>}
                <button onClick={() => onToggle(m)} className="text-[14px] transition-colors" style={{ ...pjsSemi, color: mode === m ? "#010205" : "#9ca3af", textDecoration: mode === m ? "underline" : "none" }}>
                  {m === "founder" ? "Founder View" : "Investor View"}
                </button>
              </span>
            ))}
          </div>

          <h1 className="text-[#010205] text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.1] tracking-[-2px] text-center sm:text-left"
            style={{ ...pjsSemi, opacity:ready?1:0, transform:ready?"none":"translateY(20px)", transition:"opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s" }}>
            Build fast. Pitch perfect. Fund faster.
          </h1>
          <p className="text-[#878c91] text-[15px] sm:text-[16px] leading-[1.8] max-w-[540px] text-center sm:text-left"
            style={{ ...pjsMed, opacity:ready?1:0, transform:ready?"none":"translateY(18px)", transition:"opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s" }}>
            Software agency builds cost $100k. Pitching VCs takes 12 months. We collapsed both into a single afternoon.
          </p>
          <div className="flex items-center gap-3 sm:gap-5 justify-center sm:justify-start"
            style={{ opacity:ready?1:0, transform:ready?"none":"translateY(16px)", transition:"opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s" }}>
            <button onClick={onJoin} className="bg-[#010205] rounded-full px-5 sm:px-7 py-4 flex items-center gap-4 sm:gap-8 text-white text-[14px] sm:text-[15px] hover:bg-[#99ea48] hover:text-black transition-colors shrink-0" style={pjsBold}>
              {mode === "founder" ? "Join Waitlist" : "Request Memo"}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={onVideoOpen} className="text-[#010205] text-[14px] sm:text-[15px] underline hover:text-[#99ea48] transition-colors shrink-0" style={pjsSemi}>Watch Demo ▶</button>
          </div>
          <div className="flex flex-wrap items-center gap-8 pt-2">
            <p className="text-[#010205] text-[13px] leading-[1.6] max-w-[140px]" style={pjsSemi}>Backed by the world's top investors</p>
            <div className="flex items-center gap-6 flex-nowrap overflow-x-auto sm:flex-wrap">
              {/* Y Combinator */}
              <div className="flex items-center gap-2 opacity-50 hover:opacity-75 transition-opacity">
                <div className="w-5 h-5 rounded-[3px] flex items-center justify-center" style={{ backgroundColor: "#FF6600" }}>
                  <span className="text-white font-bold" style={{ fontSize: 11, fontFamily: "sans-serif", lineHeight: 1 }}>Y</span>
                </div>
                <span className="text-[#1D2D35] text-[13px] font-semibold tracking-tight" style={{ fontFamily: "sans-serif" }}>Combinator</span>
              </div>
              {/* Sequoia */}
              <div className="opacity-45 hover:opacity-70 transition-opacity">
                <svg width="80" height="18" viewBox="0 0 80 18" fill="none">
                  <text x="0" y="14" fontSize="13" fontWeight="700" fontFamily="Georgia, serif" fill="#1D2D35" letterSpacing="-0.3">SEQUOIA</text>
                </svg>
              </div>
              {/* Andreessen Horowitz */}
              <div className="opacity-45 hover:opacity-70 transition-opacity">
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none">
                  <text x="0" y="14" fontSize="14" fontWeight="800" fontFamily="sans-serif" fill="#1D2D35">a16z</text>
                </svg>
              </div>
              {/* Accel */}
              <div className="opacity-45 hover:opacity-70 transition-opacity">
                <svg width="44" height="18" viewBox="0 0 44 18" fill="none">
                  <text x="0" y="13" fontSize="13" fontWeight="700" fontFamily="sans-serif" fill="#1D2D35" letterSpacing="0.5">ACCEL</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right — cards stack */}
        <div className="relative flex flex-col gap-4 md:block md:min-h-[480px]">
          {/* Hero photo card — hidden on mobile */}
          <div className="hidden md:block md:absolute md:right-0 md:top-0 md:w-[300px] rounded-[20px] overflow-hidden bg-[rgba(0,0,0,0.15)] backdrop-blur-lg md:h-[275px]">
            <img src={imgHeroPhoto} alt="Founders building" className="w-full h-full object-cover opacity-60 rotate-[115.48deg] scale-[1.8]" style={{ transformOrigin: "center" }} />
          </div>

          {/* Trending icon — desktop only */}
          <div className="hidden md:flex absolute right-[-12px] top-[172px] bg-[#010205] rounded-full w-[76px] h-[76px] items-center justify-center shadow-[0px_20px_40px_-6px_rgba(0,0,0,0.5)] z-10">
            <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
              <path d="M46 12L27 31L17 21L2 36" stroke="#A8D67B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d="M34 12H46V24" stroke="#A8D67B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>

          {/* Cards: 2-col grid on mobile, stacked on sm, absolutely positioned on lg */}
          <div className="grid grid-cols-2 gap-3 md:contents">
            {/* Waitlist count card */}
            <div className="bg-[#f0f0f0] backdrop-blur-[42px] rounded-[20px] p-4 sm:p-5 md:mb-0 md:absolute md:right-0 md:top-[195px] md:w-[259px]">
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-1">
                  {founderAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="founder"
                      className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#f0f0f0]"
                      style={{ marginLeft: i > 0 ? -8 : 0, zIndex: founderAvatars.length - i }}
                    />
                  ))}
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#010205] border-2 border-[#f0f0f0] flex items-center justify-center" style={{ marginLeft: -8 }}>
                    <span className="text-[9px] sm:text-[10px] text-white" style={pjsBold}>+1k</span>
                  </div>
                </div>
                <span className="text-[#010205] text-[36px] sm:text-[52px] lg:text-[64px] leading-none tracking-[-2px]" style={pjsBold}>
                  {mode === "founder" ? `${count1420.toLocaleString()}+` : `${count200}+`}
                </span>
                <div className="w-full h-[5px] bg-[#d9d9d9] rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-[67%] bg-black rounded-full" />
                </div>
                <p className="text-[#5c5d5f] text-[11px] sm:text-[13px] leading-[1.5]" style={pjsMed}>
                  {mode === "founder" ? "founders & angels on the waitlist" : "vetted startups in active deal flow"}
                </p>
              </div>
            </div>

            {/* Metric card */}
            <div className="bg-[#010205] rounded-[20px] p-4 sm:p-5 md:mt-0 md:absolute md:left-[-30px] md:bottom-0 md:w-[380px]"
              style={{ maskImage: `url("${imgRectangle23804}")`, maskSize: "100% 100%" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-white/40" />
                <p className="text-white text-[10px] sm:text-[12px]" style={pjsSemi}>
                  {mode === "founder" ? "Average Time to First Term Sheet" : "Average Cohort Return"}
                </p>
              </div>
              <p className="text-white text-[18px] sm:text-[26px] lg:text-[30px] leading-[1.3] tracking-[-0.5px] mb-3" style={pjsSemi}>
                {mode === "founder" ? `${count47} days from idea to funded startup` : "3.1× return across 12 completed cohorts"}
              </p>
              <div className="flex items-end gap-1.5 h-[56px] sm:h-[80px]">
                <div className="bg-[#bae289] flex-1 rounded-t-sm" style={{ height: "55%" }} />
                <div className="bg-[#99cf63] flex-1 rounded-t-sm" style={{ height: "75%" }} />
                <div className="bg-[#77b248] flex-1 rounded-t-sm" style={{ height: "95%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────
function ServicesSection({ mode }: { mode: "founder" | "investor" }) {
  const { ref: svcRef, inView: svcVisible } = useInView(0.08);
  const [activeSvc, setActiveSvc] = useState(0);
  const svcTouchX = useRef(0);
  const handleSvcTouchStart = (e: React.TouchEvent) => { svcTouchX.current = e.touches[0].clientX; };
  const handleSvcTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - svcTouchX.current;
    if (dx < -40) setActiveSvc((s) => Math.min(2, s + 1));
    if (dx > 40)  setActiveSvc((s) => Math.max(0, s - 1));
  };

  const statCard = (
    <div className="bg-[#010205] rounded-[30px] relative overflow-hidden h-full min-h-[300px]"
      style={{ maskImage: `url("${imgImage61}")`, maskSize: "100% 100%" }}>
      <div className="absolute flex h-full w-full items-center justify-center opacity-40 rotate-[115.48deg] scale-[2]" style={{ top: 0, left: 0 }}>
        <img src={U.teamLaptops} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        <div>
          <p className="text-white leading-none tracking-[-2.5px]" style={{ ...pjsBold, fontSize: "clamp(64px,8vw,84px)" }}>
            {mode === "founder" ? <><span>$48</span><span className="text-[#99cf63]">M</span></> : <><span>3.1</span><span className="text-[#99cf63]">×</span></>}
          </p>
          <p className="text-[#878c91] text-[17px] leading-[1.7] mt-2" style={pjsMed}>
            {mode === "founder" ? "Capital raised by VenCraft alumni" : "Average return across all cohorts"}
          </p>
        </div>
        <div className="flex items-center gap-1 mt-8">
          {[
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
          ].map((src, i) => (
            <img key={i} src={src} alt="" className="w-[52px] h-[52px] rounded-full border-2 border-[#010205] object-cover" style={{ marginLeft: i > 0 ? -8 : 0 }} />
          ))}
          <p className="text-white text-[48px] leading-none ml-1" style={pjsBold}>+</p>
        </div>
      </div>
    </div>
  );

  const teamCard = (
    <div className="rounded-[30px] overflow-hidden relative h-full min-h-[300px]">
      <img src={U.teamLaptops} alt="VenCraft founders collaborating" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(1,2,5,0.55) 0%, transparent 60%)" }} />
      <div className="absolute bottom-5 left-6">
        <p className="text-white/60 text-[11px] uppercase tracking-widest mb-1" style={pjsSemi}>Our team</p>
        <p className="text-white text-[22px] leading-tight" style={pjsSemi}>Founders building<br/>with founders</p>
      </div>
    </div>
  );

  const vcCard = (
    <div className="rounded-[30px] overflow-hidden relative h-full min-h-[300px]">
      <img src={U.boardMeeting} alt="Investor pitch meeting" className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(1,2,5,0.7) 10%, transparent 60%)" }} />
      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div>
          <p className="text-white/60 text-[11px] uppercase tracking-widest mb-1" style={pjsSemi}>Investor network</p>
          <p className="text-white text-[22px] leading-tight" style={pjsSemi}>200+ active VCs<br/>ready to invest</p>
        </div>
        <div className="bg-[#99ea48] rounded-full px-4 py-2 shrink-0">
          <p className="text-[#010205] text-[12px]" style={pjsBold}>Live network →</p>
        </div>
      </div>
    </div>
  );

  const mobileCards = [statCard, teamCard, vcCard];

  return (
    <section className="bg-white overflow-hidden" ref={svcRef as React.RefObject<HTMLElement>}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-10 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start justify-between mb-10 sm:mb-14">
          <h2 className="text-[#010205] text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.3] tracking-[-1.4px] max-w-[640px]"
            style={{ ...pjsSemi, opacity:svcVisible?1:0, transform:svcVisible?"none":"translateY(28px)", transition:"opacity 0.75s ease, transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
            From idea to funded in a single afternoon
          </h2>
          <p className="text-[#878c91] text-[15px] sm:text-[16px] leading-[1.8] max-w-[520px]"
            style={{ ...pjsMed, opacity:svcVisible?1:0, transform:svcVisible?"none":"translateY(20px)", transition:"opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s" }}>
            We are a passionate team of founders, engineers, and ex-VCs dedicated to collapsing the gap between idea and investment. With a proven process and a curated investor network, we stay at the forefront of what it takes to build and fund a startup in today's market.
          </p>
        </div>

        {/* Mobile carousel — full-width, swipeable */}
        <div
          className="sm:hidden relative overflow-hidden rounded-[30px]"
          style={{ height: 460 }}
          onTouchStart={handleSvcTouchStart}
          onTouchEnd={handleSvcTouchEnd}
        >
          <div
            className="flex h-full"
            style={{
              width: `${mobileCards.length * 100}%`,
              transform: `translateX(-${activeSvc * (100 / mobileCards.length)}%)`,
              transition: "transform 350ms cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          >
            {mobileCards.map((card, i) => (
              <div key={`card-${i}`} className="h-full" style={{ width: `${100 / mobileCards.length}%` }}>
                {card}
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {mobileCards.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => setActiveSvc(i)}
                className={`rounded-full transition-all duration-300 ${i === activeSvc ? "w-6 h-2 bg-[#99ea48]" : "w-2 h-2 bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop layout (sm+) */}
        <div className="hidden sm:flex flex-row gap-4 sm:gap-6">
          {/* $48M stat card — left */}
          <div className="bg-[#010205] rounded-[30px] relative overflow-hidden flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[382px]"
            style={{ maskImage: `url("${imgImage61}")`, maskSize: "100% 100%" }}>
            <div className="absolute flex h-full w-full items-center justify-center opacity-40 rotate-[115.48deg] scale-[2]" style={{ top: 0, left: 0 }}>
              <img src={U.teamLaptops} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full">
              <div>
                <p className="text-white leading-none tracking-[-2.5px]" style={{ ...pjsBold, fontSize: "clamp(64px,8vw,84px)" }}>
                  {mode === "founder" ? <><span>$48</span><span className="text-[#99cf63]">M</span></> : <><span>3.1</span><span className="text-[#99cf63]">×</span></>}
                </p>
                <p className="text-[#878c91] text-[17px] sm:text-[19px] leading-[1.7] mt-2" style={pjsMed}>
                  {mode === "founder" ? "Capital raised by VenCraft alumni" : "Average return across all cohorts"}
                </p>
              </div>
              <div className="flex items-center gap-1 mt-8">
                {[
                  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-[52px] h-[52px] rounded-full border-2 border-[#010205] object-cover" style={{ marginLeft: i > 0 ? -8 : 0 }} />
                ))}
                <p className="text-white text-[48px] leading-none ml-1" style={pjsBold}>+</p>
              </div>
            </div>
          </div>

          {/* Right — image panel */}
          <div className="flex-[2] flex flex-col gap-4 sm:gap-5">
            <div className="rounded-[30px] overflow-hidden relative flex-1 min-h-[180px] sm:min-h-[200px]">
              <img src={U.teamLaptops} alt="VenCraft founders collaborating" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(1,2,5,0.55) 0%, transparent 60%)" }} />
              <div className="absolute bottom-5 left-6">
                <p className="text-white/60 text-[11px] uppercase tracking-widest mb-1" style={pjsSemi}>Our team</p>
                <p className="text-white text-[18px] sm:text-[22px] leading-tight" style={pjsSemi}>Founders building<br/>with founders</p>
              </div>
            </div>
            <div className="rounded-[30px] overflow-hidden relative flex-1 min-h-[180px] sm:min-h-[200px]">
              <img src={U.boardMeeting} alt="Investor pitch meeting" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(1,2,5,0.7) 10%, transparent 60%)" }} />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white/60 text-[11px] uppercase tracking-widest mb-1" style={pjsSemi}>Investor network</p>
                  <p className="text-white text-[18px] sm:text-[22px] leading-tight" style={pjsSemi}>200+ active VCs<br/>ready to invest</p>
                </div>
                <div className="bg-[#99ea48] rounded-full px-4 py-2 shrink-0">
                  <p className="text-[#010205] text-[12px]" style={pjsBold}>Live network →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pipeline ──────────────────────────────────────────────────
function PipelineSection({ onVideoOpen }: { onVideoOpen: () => void }) {
  const { ref: pipeRef, inView: pipeVisible } = useInView(0.08);
  const [mobileStep, setMobileStep] = useState(0);
  const steps = [
    {
      num: "01", title: "The Consultation",
      desc: "Voice or text your raw idea. Our team extracts the market thesis, user personas, and product architecture in real-time.",
      extra: (
        <div className="mt-auto bg-white/10 backdrop-blur-sm rounded-[14px] p-4 border border-white/10">
          <p className="text-[10px] text-[#99ea48] uppercase tracking-widest mb-2" style={pjsSemi}>FOUNDER IN</p>
          <p className="text-white/70 text-[13px] leading-[1.6]" style={pjsMed}>"I want to build a platform that automatically handles invoicing for freelancers..."</p>
        </div>
      ),
    },
    {
      num: "02", title: "Instant Prototype",
      desc: "A working MVP materializes: production-ready screens, database schemas, flows, and a clickable high-fidelity prototype.",
      extra: (
        <div className="mt-auto flex flex-col gap-2">
          {["Screens & flows", "DB schema", "Hi-fi prototype"].map((s) => (
            <div key={s} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#99ea48]" />
              <span className="text-white/60 text-[13px]" style={pjsMed}>{s}</span>
              <span className="ml-auto text-[11px] text-[#99ea48]" style={pjsSemi}>✓ Done</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: "03", title: "The Pitch Engine",
      desc: "Auto-generated investor deck, financial projections model, and market analysis. One-click broadcast out to 200+ seed investors.",
      extra: (
        <div className="mt-auto flex flex-col gap-2">
          <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
            <span className="text-white/60 text-[13px]" style={pjsMed}>Investors reached</span>
            <span className="text-[#99ea48] text-[15px]" style={pjsBold}>200+</span>
          </div>
          <div className="flex items-end gap-1.5 h-[44px] px-1">
            {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-[#99cf63]" style={{ height: `${h}%`, opacity: 0.5 + i * 0.07 }} />
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "04", title: "Launch & Scale",
      desc: "Deploy to staging and production instantly, connect Stripe payments, and onboard your first users. Your brand new company is live before dinner.",
      extra: (
        <div className="mt-auto flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#99ea48] animate-pulse" />
            <span className="text-[#99ea48] text-[11px] uppercase tracking-widest" style={pjsBold}>PRODUCTION LIVE</span>
          </div>
          <div className="bg-white/5 rounded-xl px-4 py-3 flex items-center justify-between">
            <span className="text-white/60 text-[13px]" style={pjsMed}>Stripe connected</span>
            <span className="text-[#99ea48] text-[13px]" style={pjsSemi}>✓</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#fafafa] py-2" ref={pipeRef as React.RefObject<HTMLElement>}>
      <div className="bg-[#020609] mx-3 sm:mx-4 rounded-[24px] sm:rounded-[30px] overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -right-[20%] -top-[20%] w-[150%] h-[150%] rotate-[115.48deg]">
            <img src={imgHeroPhoto} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative z-10 px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
          {/* Header: desktop = h2 | play button | description side by side; mobile = stacked */}
          <div className="mb-12 sm:mb-16">
            {/* Desktop layout — 3 columns: heading | play button | description */}
            <div className="hidden lg:grid grid-cols-[5fr_auto_4fr] items-center gap-10 xl:gap-14">
              <h2 className="text-white text-[40px] xl:text-[52px] leading-[1.15] tracking-[-1.4px]"
                style={{ ...pjsSemi, opacity:pipeVisible?1:0, transform:pipeVisible?"none":"translateY(24px)", transition:"opacity 0.75s ease, transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
                From raw idea to revenue in four moves.
              </h2>
              {/* Play button — centered column */}
              <div className="relative flex items-center justify-center w-[96px] h-[96px] shrink-0" title="THE PIPELINE">
                <div className="absolute inset-0 rounded-full border border-white/15" />
                <div className="absolute inset-[9px] rounded-full border border-white/25" />
                <button
                  onClick={onVideoOpen}
                  title="THE PIPELINE"
                  className="relative w-[60px] h-[60px] rounded-full bg-[#99ea48] flex items-center justify-center hover:bg-[#8fd43e] transition-colors cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 44 44" fill="none">
                    <path d={svgPaths.p47bb2f0} fill="black" />
                  </svg>
                </button>
              </div>
              <p className="text-white/40 text-[15px] leading-[1.8]" style={pjsMed}>
                Our process runs in parallel — while your product is being built, your pitch is being perfected.
              </p>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden text-center">
              <h2 className="text-white text-[28px] sm:text-[40px] leading-[1.2] tracking-[-1.4px]"
                style={{ ...pjsSemi, opacity:pipeVisible?1:0, transform:pipeVisible?"none":"translateY(20px)", transition:"opacity 0.7s ease, transform 0.7s ease" }}>
                From raw idea to revenue in four moves.
              </h2>
              <p className="text-white/40 text-[14px] sm:text-[15px] leading-[1.8] mt-4" style={pjsMed}>
                Our process runs in parallel — while your product is being built, your pitch is being perfected.
              </p>
            </div>

            {/* Mobile play button — centered below description */}
            <div className="flex lg:hidden justify-center mt-6">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-[72px] h-[72px] shrink-0">
                  <div className="absolute inset-0 rounded-full border border-white/15" />
                  <div className="absolute inset-[6px] rounded-full border border-white/25" />
                  <button
                    onClick={onVideoOpen}
                    className="relative w-[46px] h-[46px] rounded-full bg-[#99ea48] flex items-center justify-center hover:bg-[#8fd43e] transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 44 44" fill="none">
                      <path d={svgPaths.p47bb2f0} fill="black" />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-white/60 text-[9px] uppercase tracking-[0.25em]" style={pjsBold}>THE</p>
                  <p className="text-white text-[10px] uppercase tracking-[0.25em]" style={pjsBold}>PIPELINE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: 1-at-a-time step card with arrows */}
          <div className="sm:hidden">
            <div className="bg-[#c3c3c3]/10 backdrop-blur-[67px] rounded-[20px] border border-white/10 flex flex-col gap-5 p-6 min-h-[360px]">
              <div className="flex items-center justify-between">
                <span className="text-white/25 text-[13px]" style={pjsBold}>{steps[mobileStep].num}</span>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <p className="text-white text-[22px] leading-[1.3] tracking-[-0.4px]" style={pjsSemi}>{steps[mobileStep].title}</p>
              <p className="text-white/50 text-[14px] leading-[1.7]" style={pjsMed}>{steps[mobileStep].desc}</p>
              {steps[mobileStep].extra}
            </div>
            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <button
                onClick={() => setMobileStep((s) => Math.max(0, s - 1))}
                disabled={mobileStep === 0}
                className="border border-white/25 rounded-full px-6 py-3 disabled:opacity-25 hover:bg-white/10 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <p className="text-white/40 text-[13px]" style={pjsSemi}>
                <span className="text-white">{String(mobileStep + 1).padStart(2, "0")}</span>
                <span className="mx-1">/</span>
                {String(steps.length).padStart(2, "0")}
              </p>
              <button
                onClick={() => setMobileStep((s) => Math.min(steps.length - 1, s + 1))}
                disabled={mobileStep === steps.length - 1}
                className="bg-[#99ea48] rounded-full px-6 py-3 disabled:opacity-25 hover:bg-[#8fd43e] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19" stroke="#010205" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 5L19 12L12 19" stroke="#010205" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>

          {/* Desktop + tablet step cards grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((step) => (
              <div key={step.num} className="bg-[#c3c3c3]/10 backdrop-blur-[67px] rounded-[20px] sm:rounded-[24px] border border-white/10 flex flex-col gap-5 p-6 min-h-[320px] sm:min-h-[360px]">
                <div className="flex items-center justify-between">
                  <span className="text-white/25 text-[13px]" style={pjsBold}>{step.num}</span>
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
                <p className="text-white text-[20px] sm:text-[22px] leading-[1.3] tracking-[-0.4px]" style={pjsSemi}>{step.title}</p>
                <p className="text-white/50 text-[13px] sm:text-[14px] leading-[1.7]" style={pjsMed}>{step.desc}</p>
                {step.extra}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Portfolio ─────────────────────────────────────────────────
type Project = { cohort: string; title: string; img: string; stage: "pre-seed" | "seed" | "series-a"; badge: string; url: string; desc: string };

const ALL_PROJECTS: Project[] = [
  // ── Real featured clients ─────────────────────────────────────────────────
  {
    cohort: "Featured · Techzilla Inc. 2026",
    title: "Techzilla Inc. — Full-Stack Digital Product Studio",
    img: imgTechzilla,
    stage: "pre-seed",
    badge: "Full Build",
    url: "https://www.techzilla.online/",
    desc: "Techzilla builds scalable web apps, mobile products, and AI-powered tools — code with craft, ship with intention. VenCraft co-built their brand platform, portfolio, and go-to-market presence from the ground up, helping them land their first enterprise clients.",
  },
  {
    cohort: "Featured · Maser Global 2026",
    title: "Maser Global Travels — Elegance in Global Flight",
    img: imgMaserTravel,
    stage: "seed",
    badge: "MVP Launch",
    url: "https://maser-global-travels.vercel.app/",
    desc: "Maser Global Travels redefines the standard of travel — from bespoke Hajj & Umrah experiences to seamless corporate visa processing. VenCraft built their web platform and brand identity end-to-end, enabling them to go from idea to live product in record time.",
  },
  {
    cohort: "Featured · Malete Hostels 2026",
    title: "Malete Hostels — Get Your Dream Hostel, Stress-Free",
    img: imgMaleteHostels,
    stage: "series-a",
    badge: "Site + Brand",
    url: "https://malete-hostels.vercel.app/",
    desc: "Malete Hostels lets students find affordable KWASU hostels directly from landlords — no agents, no walking under the hot Malete sun. VenCraft built their booking platform and online presence from scratch.",
  },
  // ── Cohort portfolio ──────────────────────────────────────────────────────
  { cohort: "Cohort 03. 2024", title: "FlowFund – AI-Powered Financial Planning for Founders", img: U.fintechApp,    stage: "pre-seed", badge: "$1.2M raised", url: "#", desc: "FlowFund automates financial planning for early-stage founders — from runway modeling to investor-ready statements." },
  { cohort: "Cohort 04. 2024", title: "DriftAI – Revenue Intelligence Platform for SaaS",      img: U.analytics,     stage: "pre-seed", badge: "$2.8M raised", url: "#", desc: "DriftAI gives SaaS founders real-time revenue intelligence — churn prediction, expansion signals, and growth playbooks." },
  { cohort: "Cohort 05. 2024", title: "Loopcast – Podcast Monetization for Creators",          img: U.mobileApp,     stage: "seed",     badge: "$3.5M raised", url: "#", desc: "Loopcast turns podcast audiences into recurring revenue with native sponsorships, paid memberships, and AI-matched ads." },
  { cohort: "Cohort 06. 2024", title: "Nexos – B2B Procurement Intelligence",                  img: U.pitchMeeting,  stage: "seed",     badge: "$4.2M raised", url: "#", desc: "Nexos surfaces hidden procurement inefficiencies across enterprise supply chains using real-time contract intelligence." },
  { cohort: "Cohort 01. 2023", title: "Buildfast – No-Code App Builder for Enterprises",       img: U.screenMonitor, stage: "series-a", badge: "$12M raised",  url: "#", desc: "Buildfast lets non-technical teams ship internal tools and customer portals in hours — without writing a line of code." },
  { cohort: "Cohort 02. 2023", title: "Skywise – AI Flight Operations Platform",               img: U.collab,        stage: "series-a", badge: "$18M raised",  url: "#", desc: "Skywise gives commercial airlines predictive maintenance signals and operational intelligence to reduce delays and costs." },
];

const portfolioTabs = ["All Cohorts [20]", "Pre-Seed [10]", "Seed Round [5]", "Series A [5]"];

// The 3 real featured clients — always used for the chooser popup and tab card pairs
const REAL_PROJECTS = ALL_PROJECTS.slice(0, 3); // Techzilla, Maser, Malete

// 2 project cards shown per tab (rotating combinations of the 3 real projects)
const TAB_PAIRS: [Project, Project][] = [
  [REAL_PROJECTS[0], REAL_PROJECTS[1]], // All Cohorts:  Techzilla + Maser
  [REAL_PROJECTS[0], REAL_PROJECTS[2]], // Pre-Seed:     Techzilla + Malete
  [REAL_PROJECTS[1], REAL_PROJECTS[2]], // Seed Round:   Maser + Malete
  [REAL_PROJECTS[0], REAL_PROJECTS[1]], // Series A:     Techzilla + Maser
];

function PortfolioSection() {
  const { ref: portRef, inView: portVisible } = useInView(0.06);
  const [activeTab, setActiveTab]     = useState(0);
  const [chooserOpen, setChooserOpen] = useState(false);
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  const shown = TAB_PAIRS[activeTab];

  const openDetail = (p: Project) => { setDetailProject(p); setChooserOpen(false); };

  return (
    <>
      {/* ── Chooser popup — pick one of the 3 real featured projects ── */}
      {chooserOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.88)" }} onClick={() => setChooserOpen(false)}>
          <div className="relative w-full max-w-[780px]" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6 px-1">
              <h3 className="text-white text-[22px] sm:text-[26px] leading-tight tracking-[-0.5px]" style={pjsSemi}>Our Featured Clients</h3>
              <button onClick={() => setChooserOpen(false)} className="text-white/50 hover:text-white transition-colors text-[28px] leading-none">×</button>
            </div>
            {/* 3 project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {REAL_PROJECTS.map((p, ri) => (
                <button
                  key={`chooser-${ri}`}
                  onClick={() => openDetail(p)}
                  className="group rounded-[20px] overflow-hidden relative h-[200px] sm:h-[240px] text-left cursor-pointer border-2 border-white/10 hover:border-[#99ea48] transition-colors"
                >
                  <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(2,6,9,0.85))" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-[#99ea48] rounded-full px-2.5 py-0.5 text-[11px] text-[#010205] mb-2" style={pjsBold}>{p.badge}</span>
                    <p className="text-white text-[13px] sm:text-[14px] leading-[1.4]" style={pjsSemi}>{p.title}</p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#99ea48] rounded-full w-7 h-7 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M12 5l7 7-7 7" stroke="#010205" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Project detail modal ── */}
      {detailProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.88)" }} onClick={() => setDetailProject(null)}>
          <div className="relative bg-white rounded-[24px] overflow-hidden w-full max-w-[620px]" onClick={(e) => e.stopPropagation()}>
            <div className="h-[220px] overflow-hidden relative">
              <img src={detailProject.img} alt={detailProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6))" }} />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-8 h-px bg-white" />
                <p className="text-white text-[14px]" style={pjsSemi}>{detailProject.cohort}</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[#010205] text-[20px] sm:text-[24px] leading-[1.4] tracking-[-0.5px]" style={pjsSemi}>{detailProject.title}</h3>
                <span className="shrink-0 bg-[#99ea48] rounded-full px-3 py-1 text-[13px] text-[#010205]" style={pjsBold}>{detailProject.badge}</span>
              </div>
              <p className="text-[#878c91] text-[15px] leading-[1.8]" style={pjsMed}>{detailProject.desc}</p>
              <div className="flex gap-3 pt-2">
                {detailProject.url !== "#" ? (
                  <a href={detailProject.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#010205] rounded-full py-3.5 text-white text-[14px] hover:bg-[#99ea48] hover:text-black transition-colors text-center" style={pjsBold}>
                    Visit Website →
                  </a>
                ) : (
                  <button className="flex-1 bg-[#010205] rounded-full py-3.5 text-white text-[14px] hover:bg-[#99ea48] hover:text-black transition-colors" style={pjsBold}>
                    View Full Case Study →
                  </button>
                )}
                <button onClick={() => setDetailProject(null)} className="border border-gray-200 rounded-full px-5 py-3.5 text-[14px] text-[#010205] hover:bg-gray-50 transition-colors" style={pjsSemi}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-[#fafafa] py-2" ref={portRef as React.RefObject<HTMLElement>}>
        <div className="bg-[#020609] mx-3 sm:mx-4 rounded-[24px] sm:rounded-[30px] overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden opacity-60">
            <div className="absolute -right-[20%] -top-[20%] w-[150%] h-[150%] rotate-[115.48deg]">
              <img src={imgHeroPhoto} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="relative z-10 px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
            <h2 className="text-white text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.3] tracking-[-1.4px] text-center max-w-[900px] mx-auto mb-10 sm:mb-14"
              style={{ ...pjsSemi, opacity:portVisible?1:0, transform:portVisible?"none":"translateY(24px)", transition:"opacity 0.75s ease, transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
              Real-world examples of how we've helped startups raise their first round.
            </h2>

            <div className="flex flex-wrap gap-3 justify-center mb-10 sm:mb-14">
              {portfolioTabs.map((tab, i) => (
                <button key={tab} onClick={() => setActiveTab(i)}
                  className={`rounded-full px-5 py-3 text-[14px] sm:text-[15px] transition-colors ${i === activeTab ? "bg-[#99cf63] text-[#010205]" : "border border-white text-white hover:bg-white/10"}`}
                  style={manBold}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch overflow-x-auto pb-2">
              {/* Circle "See Details" — opens chooser */}
              <div className="flex items-center justify-center shrink-0">
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border-[11px] border-white/20 overflow-hidden mx-auto">
                  <img src={U.pitchMeeting} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setChooserOpen(true)}
                      className="bg-[#99ea48] rounded-full px-5 py-3 text-black text-[16px] hover:bg-[#8fd43e] transition-colors"
                      style={pjsBold}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>

              {/* 2 project cards — hidden on mobile, visible on sm+ */}
              <div className="hidden sm:contents">
                {shown.map((p, si) => (
                  <ProjectCard key={`tab${activeTab}-card${si}`} project={p} onClick={() => openDetail(p)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      className="rounded-[20px] sm:rounded-[30px] border-[10px] border-white/20 flex-1 min-w-[220px] min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] relative overflow-hidden flex flex-col justify-between p-5 sm:p-8 cursor-pointer group"
      onClick={onClick}
    >
      <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-300" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(2,6,9,0.3) 0%, rgba(2,6,9,0.75) 100%)" }} />
      <div className="relative flex items-center gap-3">
        <div className="w-10 h-px bg-white" />
        <p className="text-white text-[14px] sm:text-[16px]" style={pjsSemi}>{project.cohort}</p>
      </div>
      <div className="relative">
        <p className="text-white text-[18px] sm:text-[22px] leading-[1.4] mb-3" style={pjsSemi}>{project.title}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#99ea48] text-[13px]" style={pjsBold}>{project.badge} · VenCraft</span>
          <div className="bg-white/20 rounded-full p-2 group-hover:bg-[#99ea48] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Testimonial ───────────────────────────────────────────────
const testimonials = [
  { quote: "VenCraft didn't just build our platform — they understood the vision and brought it to life better than we imagined. From our brand identity to our first enterprise client pitch, everything was handled with craft and speed. Techzilla wouldn't be where it is today without them.", name: "Techzilla Inc.", title: "Founder, Techzilla Inc. · techzilla.online", avatar: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?w=120&q=80" },
  { quote: "We raised our seed round six weeks after joining VenCraft. Our investor said our deck was the best they'd seen all year. What sets VenCraft apart is their ability to collapse months of work into days — they built our prototype and our pitch in the same breath.", name: "Amara Osei",   title: "Founder, FlowFund · $1.2M raised", avatar: U.amaraAvatar },
  { quote: "VenCraft's prototype was more polished than what most funded startups ship in v1. The pitch deck they generated was investor-ready out of the box. I had a term sheet within 5 weeks. It's genuinely unfair to founders who don't know about this.",             name: "Soren Malik",  title: "Founder, DriftAI · $2.8M raised",  avatar: U.sorenAvatar },
  { quote: "The pipeline is real. I came in with a napkin sketch and left 47 days later with a live product and a signed term sheet. The team knows exactly what VCs want to see — because half of them used to be VCs.",                                                    name: "Keiko Tanaka", title: "Founder, Loopcast · $900K raised",  avatar: U.keikoAvatar },
];

function TestimonialSection() {
  const { ref: testRef, inView: testVisible } = useInView(0.1);
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <section className="bg-[#fafafa] py-10 sm:py-16" ref={testRef as React.RefObject<HTMLElement>}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <p className="text-[#010205] text-[22px] sm:text-[30px] lg:text-[36px] leading-[1.6] tracking-[-1px] mb-10 sm:mb-14"
          style={{ ...pjsSemi, opacity:testVisible?1:0, transform:testVisible?"none":"translateY(24px)", transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
          " {t.quote}"
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img src={t.avatar} alt={t.name} className="w-[70px] h-[70px] rounded-full object-cover" />
            <div>
              <p className="text-[#010205] text-[18px] sm:text-[20px] leading-[1.8]" style={pjsBold}>{t.name}</p>
              <p className="text-[#878c91] text-[14px] sm:text-[16px] leading-[1.8]" style={pjsMed}>{t.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)} className="border border-[#010205] rounded-full px-7 py-4 hover:bg-black hover:text-white transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <p className="text-[#010205] text-[15px]" style={pjsSemi}>
              <span className="underline">{String(idx + 1).padStart(2, "0")}</span>
              <span className="text-[rgba(1,2,5,0.4)]">/{String(testimonials.length).padStart(2, "0")}</span>
            </p>
            <button onClick={() => setIdx((idx + 1) % testimonials.length)} className="bg-[#010205] rounded-full px-7 py-4 hover:bg-[#99ea48] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const faqs = [
  { q: "How is VenCraft different from a traditional accelerator or incubator?", a: "Traditional accelerators take equity and run 3-month cohorts. VenCraft is an embedded co-builder: we build your MVP and pitch assets simultaneously, then connect you directly to investors — all in weeks, not months. You keep more equity and move faster." },
  { q: "How long does the prototype phase actually take?", a: "Our standard prototype turnaround is 7 days from the end of your consultation session. This includes production-ready screens, database schemas, user flows, and a fully clickable high-fidelity prototype." },
  { q: "What types of startups does VenCraft work with?", a: "We work with early-stage software startups across all verticals — B2B SaaS, consumer apps, fintech, healthtech, and more. The only requirement is that you have a clear problem you're trying to solve." },
  { q: "How do you help with the fundraising process?", a: "We generate your full pitch package (deck, financial model, market analysis), then broadcast it directly to our network of 200+ seed-stage investors. We facilitate warm intros and help you navigate term sheets through closing." },
];

function FAQSection({ onJoin, onContact }: { onJoin: () => void; onContact: () => void }) {
  const { ref: faqRef, inView: faqVisible } = useInView(0.06);
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-[#f3f3f3] p-3 sm:p-4" ref={faqRef as React.RefObject<HTMLElement>}>
      <div className="bg-white rounded-[20px] sm:rounded-[28px] overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 px-6 sm:px-10 lg:px-16 py-10 sm:py-16">
          <div className="flex flex-col gap-8 lg:gap-12 shrink-0 lg:w-[480px]">
            <h2 className="text-[#010205] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.3] tracking-[-1.4px]"
              style={{ ...pjsSemi, opacity:faqVisible?1:0, transform:faqVisible?"none":"translateY(22px)", transition:"opacity 0.75s ease, transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)" }}>Startup &amp; Funding FAQs</h2>
            <p className="text-[#878c91] text-[15px] sm:text-[16px] leading-[1.8] max-w-[480px]" style={pjsMed}>
              As the leading startup co-builder and capital connector, we're dedicated to answering every question founders have before taking the leap.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <button onClick={onJoin} className="border border-[#010205] rounded-full px-6 py-4 text-[15px] text-[#010205] hover:bg-[#99ea48] hover:border-[#99ea48] transition-colors" style={manBold}>Ask a Question</button>
              <button onClick={onContact} className="text-[#010205] text-[15px] underline hover:text-[#99ea48] transition-colors" style={pjsSemi}>Contact Us</button>
            </div>
          </div>
          <div className="flex-1 border-t border-black">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black">
                <button className="w-full flex items-center justify-between px-5 sm:px-6 py-5 sm:py-6 text-left gap-4" onClick={() => setOpenIdx(i === openIdx ? -1 : i)}>
                  <p className="text-[#010205] text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.5] tracking-[-0.5px] flex-1" style={pjsSemi}>{faq.q}</p>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={`shrink-0 transition-transform ${openIdx === i ? "rotate-45" : ""}`}>
                    {openIdx === i
                      ? <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                      : <><path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" /><path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" /></>}
                  </svg>
                </button>
                {openIdx === i && (
                  <div className="px-5 sm:px-6 pb-6">
                    <p className="text-[#878c91] text-[14px] sm:text-[16px] leading-[1.8]" style={pjsMed}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Blog ──────────────────────────────────────────────────────
type BlogPost = { dot: string; title: string; excerpt: string; img: string; readTime: string; fullContent: string };

const blogPosts: BlogPost[] = [
  {
    dot: "#45A7DE", img: U.collab, readTime: "5 min read",
    title: "Why Founders Who Build First Raise Faster (And Why VCs Prefer It)",
    excerpt: "In the current funding climate, investors want to see traction before they write a check. Founders who arrive at pitch meetings with a live product close rounds 3× faster on average...",
    fullContent: "In the current funding climate, investors want to see traction before they write a check. Founders who arrive at pitch meetings with a live product — not just a deck — close rounds 3× faster on average.\n\nThe reason is simple: a working prototype eliminates the biggest risk investors are pricing — execution risk. When you show up with something users can click through, the conversation shifts from \"will this work?\" to \"how fast can this scale?\"\n\nAt VenCraft, we've seen this pattern repeat across 20+ cohorts. Founders who join with nothing but an idea and leave 47 days later with a funded product didn't get there by luck — they got there because we collapsed prototype + pitch into a single sprint. The result: investors trust you more, your valuation goes up, and your terms get better.",
  },
  {
    dot: "#EA5F38", img: U.presentation, readTime: "5 min read",
    title: "The New Fundraising Playbook: How to Land a Seed Round in 2025",
    excerpt: "The days of raising on a story are over. Today's seed investors want to see a working prototype, a clear path to product-market fit, and a founder who moves fast...",
    fullContent: "The days of raising on a story are over. Today's seed investors want to see a working prototype, a clear path to product-market fit, and a founder who moves fast.\n\nHere's what the best seed decks in 2025 all have in common: a live product, a cohort of early users, and a financial model that tells a credible story to Series A.\n\nThe playbook that worked in 2021 — large TAM, bold vision, founding team — still matters, but it's table stakes. What closes rounds today is proof. Proof that you've shipped. Proof that users care. Proof that you can execute under pressure.\n\nVenCraft's Pitch Engine is designed around this reality. We don't just help you build a deck — we help you build the evidence that makes the deck unignorable.",
  },
  {
    dot: "#6A26F1", img: U.blogTeam, readTime: "8 min read",
    title: "From Prototype to Term Sheet: A Real Founder's 47-Day Journey",
    excerpt: "Soren Malik had been working on DriftAI for three months before joining VenCraft. Six weeks later, he had a term sheet for $2.8M. This is the exact process he followed...",
    fullContent: "Soren Malik had been working on DriftAI for three months before joining VenCraft. Six weeks later, he had a term sheet for $2.8M. This is the exact process he followed.\n\nDay 1–2: The Consultation. Soren came in with a rough thesis about revenue intelligence for SaaS teams. In 90 minutes, our team extracted his market thesis, mapped his ICP, and defined the MVP scope.\n\nDay 3–9: The Prototype. Our engineers built a working product — real data ingestion, real dashboards, real alerts. Soren shipped it to 12 beta users by day 10.\n\nDay 10–21: The Pitch Engine. We generated his investor deck, financial model, and market analysis. We broadcast to 200+ investors on day 14. Soren had 11 meetings booked by day 18.\n\nDay 22–47: Fundraising. Three term sheets. He signed the best one — $2.8M from a top-tier seed fund — on day 47.",
  },
];

function BlogArticleModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.88)" }} onClick={onClose}>
      <div className="relative bg-white rounded-[24px] overflow-hidden w-full max-w-[680px] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="h-[240px] overflow-hidden relative shrink-0">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.7))" }} />
          <div className="absolute bottom-5 left-6">
            <div className="flex items-center gap-2 mb-2">
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill={post.dot} /></svg>
              <p className="text-white/70 text-[12px]" style={pjsMed}>{post.readTime}</p>
            </div>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div className="p-6 sm:p-8 flex flex-col gap-5">
          <h2 className="text-[#010205] text-[22px] sm:text-[26px] leading-[1.4] tracking-[-0.5px]" style={pjsSemi}>{post.title}</h2>
          <div className="flex flex-col gap-4">
            {post.fullContent.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#5a6070] text-[15px] leading-[1.85]" style={pjsMed}>{para}</p>
            ))}
          </div>
          <button onClick={onClose} className="mt-2 bg-[#010205] rounded-full py-4 text-white text-[15px] hover:bg-[#99ea48] hover:text-black transition-colors" style={pjsBold}>
            Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
}

function BlogSection({ onJoin }: { onJoin: () => void }) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  return (
    <>
      {selectedPost && <BlogArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />}

      <section className="bg-[#fafafa] py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between mb-10 sm:mb-14">
            <h2 className="text-[#010205] text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.3] tracking-[-1.4px] max-w-[620px]" style={pjsSemi}>
              Startup Insights &amp; Fundraising Strategies That Accelerate Growth
            </h2>
            <div className="flex flex-col gap-8 max-w-[520px]">
              <p className="text-[#878c91] text-[15px] sm:text-[16px] leading-[1.8]" style={pjsMed}>
                Built from real founder experiences inside VenCraft cohorts — covering MVP development, pitch strategy, VC relationships, and everything in between.
              </p>
              <button onClick={onJoin} className="border border-[#010205] rounded-full w-[140px] py-4 text-[14px] text-[#010205] hover:bg-black hover:text-white transition-colors self-start" style={manBold}>
                See more
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden flex flex-col">
                {/* Article thumbnail */}
                <div className="h-[180px] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3))" }} />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-between gap-8 flex-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill={post.dot} /></svg>
                      <p className="text-[#878c91] text-[13px]" style={pjsMed}>{post.readTime}</p>
                    </div>
                    <p className="text-[#010205] text-[18px] sm:text-[20px] leading-[1.5] tracking-[-0.4px]" style={pjsSemi}>{post.title}</p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-[#878c91] text-[13px] leading-[1.6] line-clamp-2 flex-1" style={pjsMed}>{post.excerpt}</p>
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="bg-[#010205] rounded-full p-4 hover:bg-[#99ea48] transition-colors shrink-0"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── CTA ───────────────────────────────────────────────────────
function CTASection({ mode, ctaRef }: { mode: "founder" | "investor"; ctaRef: React.RefObject<HTMLElement> }) {
  const { ref: ctaSectionRef, inView: ctaVisible } = useInView(0.1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    await submitToWeb3Forms({
      subject: `VenCraft CTA — ${mode}`,
      email,
      message: `New ${mode} signed up from the CTA section.`,
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section ref={ctaRef} className="bg-[#fafafa] px-3 sm:px-4 pb-4">
      <div className="bg-[#020609] rounded-[24px] sm:rounded-[30px] relative overflow-hidden py-14 sm:py-20 px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <img src={imgHeroPhoto} alt="" className="absolute w-full h-full object-cover -scale-y-100 rotate-[65deg] scale-[1.5]" style={{ transformOrigin: "right center" }} />
        </div>
        <div ref={ctaSectionRef as React.RefObject<HTMLDivElement>} style={{ position:"absolute", inset:0, pointerEvents:"none" }} />
        <h2 className="relative text-white text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-2px]"
          style={{ ...pjsSemi, opacity:ctaVisible?1:0, transform:ctaVisible?"none":"translateY(28px)", transition:"opacity 0.8s ease, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}>
          Stop dreaming.<br />Start building.
        </h2>
        <div className="relative flex flex-col gap-4 shrink-0 w-full sm:w-auto sm:min-w-[340px]">
          <p className="text-white/50 text-[13px] uppercase tracking-widest" style={pjsSemi}>
            {mode === "founder" ? "1,420 founders already on the list" : "42 active investors in current cohort"}
          </p>
          {submitted ? (
            <div className="bg-[#99ea48] rounded-full flex items-center gap-3 px-7 py-4 text-[15px] text-[#010205]" style={pjsBold}>✓ You're on the list!</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={mode === "founder" ? "Enter your founder email" : "Enter your investor email"}
                className="bg-white/10 rounded-full px-6 py-4 text-[15px] text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#99ea48] transition-colors w-full"
                style={pjsMed}
                disabled={loading}
              />
              <button type="submit" disabled={loading} className="bg-white rounded-full flex items-center justify-center px-7 py-4 text-[15px] text-[#010205] hover:bg-[#99ea48] transition-colors disabled:opacity-80" style={pjsBold}>
                {loading ? <Spinner size={22} /> : (
                  <span className="flex items-center justify-between w-full gap-8">
                    {mode === "founder" ? "Join Waitlist" : "Request Memo"}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Legal Modal ───────────────────────────────────────────────
const legalContent = {
  "Privacy Policy": {
    lastUpdated: "September 1, 2026",
    sections: [
      { title: "1. Information We Collect", body: "We collect information you provide directly to us, such as when you create an account, join the waitlist, or contact us for support. This includes your name, email address, company name, and any other information you choose to provide.\n\nWe automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, referring URLs, and pages visited." },
      { title: "2. How We Use Your Information", body: "We use the information we collect to provide, maintain, and improve our services; send you technical notices and support messages; send you marketing communications (with your consent); respond to your comments and questions; and monitor and analyze trends and usage." },
      { title: "3. Information Sharing", body: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.\n\nWe may also release information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety." },
      { title: "4. Data Retention", body: "We retain your personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we securely delete or anonymize it." },
      { title: "5. Security", body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure." },
      { title: "6. Your Rights", body: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@vencraft.io." },
      { title: "7. Contact Us", body: "If you have any questions about this Privacy Policy, please contact us at privacy@vencraft.io or write to us at 340 Pine St, Suite 800, San Francisco, CA 94104." },
    ],
  },
  "Terms of Service": {
    lastUpdated: "September 1, 2026",
    sections: [
      { title: "1. Acceptance of Terms", body: "By accessing or using VenCraft's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services." },
      { title: "2. Description of Services", body: "VenCraft provides a startup co-building and capital connection platform. Our services include MVP prototyping, pitch deck generation, financial modeling, and investor introductions. We reserve the right to modify or discontinue any service at any time without notice." },
      { title: "3. User Accounts", body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.\n\nYou must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this requirement." },
      { title: "4. Intellectual Property", body: "The VenCraft platform, including its original content, features, and functionality, is and will remain the exclusive property of VenCraft and its licensors. Our trademarks may not be used in connection with any product or service without prior written consent.\n\nWork product created for you during our engagement (prototypes, decks, models) transfers to you upon full payment of applicable fees." },
      { title: "5. Limitation of Liability", body: "VenCraft shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability to you for any claims arising from these terms shall not exceed the amount you paid us in the 12 months preceding the claim." },
      { title: "6. Governing Law", body: "These Terms shall be governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved exclusively in the state or federal courts located in San Francisco County, California." },
      { title: "7. Changes to Terms", body: "We reserve the right to modify these terms at any time. We will notify registered users of material changes via email. Continued use of our services after changes constitutes acceptance of the new terms." },
    ],
  },
  "Cookie Policy": {
    lastUpdated: "September 1, 2026",
    sections: [
      { title: "1. What Are Cookies", body: "Cookies are small text files that are placed on your device when you visit our website. They allow us to recognize your device, store your preferences, and improve your experience. Cookies can be 'session' cookies (deleted when you close your browser) or 'persistent' cookies (stored until they expire or you delete them)." },
      { title: "2. Cookies We Use", body: "Essential Cookies: Required for our platform to function. These cannot be disabled.\n\nAnalytics Cookies: Help us understand how visitors interact with our site (e.g., Google Analytics). All data is aggregated and anonymized.\n\nFunctional Cookies: Remember your preferences such as language or region.\n\nMarketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness." },
      { title: "3. Third-Party Cookies", body: "We use trusted third-party services that may set cookies on your device, including Google Analytics, Intercom (customer support), and Stripe (payments). These third parties have their own privacy policies governing their use of cookies." },
      { title: "4. Managing Cookies", body: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of our platform.\n\nYou can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on." },
      { title: "5. Cookie Consent", body: "By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us directly." },
      { title: "6. Updates to This Policy", body: "We may update this Cookie Policy from time to time. We will notify you of significant changes by posting a notice on our website. The date at the top of this policy indicates when it was last revised." },
    ],
  },
};

type LegalPage = keyof typeof legalContent;

function LegalModal({ page, onClose }: { page: LegalPage; onClose: () => void }) {
  const content = legalContent[page];
  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center" style={{ background: "rgba(1,2,5,0.75)", backdropFilter: "blur(6px)" }} onClick={onClose}>
      <div
        className="relative w-full max-w-[680px] max-h-[90vh] bg-white rounded-t-[28px] sm:rounded-[28px] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-5 border-b border-gray-100 shrink-0">
          <div>
            <div className="h-1 w-12 bg-[#99ea48] rounded-full mb-4" />
            <h2 className="text-[#010205] text-[26px] leading-[1.2] tracking-[-0.6px]" style={pjsSemi}>{page}</h2>
            <p className="text-[#9b9b9c] text-[12px] mt-1" style={pjsMed}>Last updated: {content.lastUpdated} · VenCraft, Inc.</p>
          </div>
          <button onClick={onClose} className="bg-gray-100 hover:bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0 ml-4 mt-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#010205" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        {/* Scrollable body */}
        <div className="overflow-y-auto px-8 py-6 flex flex-col gap-6">
          {content.sections.map((s) => (
            <div key={s.title}>
              <h3 className="text-[#010205] text-[15px] mb-2" style={pjsSemi}>{s.title}</h3>
              {s.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#5c5d5f] text-[13px] leading-[1.8] mb-2" style={pjsMed}>{para}</p>
              ))}
            </div>
          ))}
          <div className="bg-[#f0fde8] rounded-2xl p-5 mt-2">
            <p className="text-[#010205] text-[13px] leading-[1.7]" style={pjsMed}>
              Questions? Contact us at <span className="text-[#99ea48]" style={pjsBold}>legal@vencraft.io</span> or write to 340 Pine St, Suite 800, San Francisco, CA 94104.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Footer Nav Link with speech bubble ───────────────────────
function FooterNavLink({ label, onContact }: { label: string; onContact: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const items = navDropdowns[label];

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (label === "Contact") {
    return (
      <p className="text-[#9b9b9c] text-[13px] mb-5 cursor-pointer hover:text-[#99ea48] transition-colors" style={robReg} onClick={onContact}>Contact</p>
    );
  }
  if (!items) return <p className="text-[#9b9b9c] text-[13px] mb-5 cursor-pointer hover:text-[#99ea48] transition-colors" style={robReg}>{label}</p>;
  return (
    <div ref={ref} className="relative mb-5">
      <button
        className={`text-[13px] transition-colors flex items-center gap-1 ${open ? "text-[#99ea48]" : "text-[#9b9b9c] hover:text-[#99ea48]"}`}
        style={robReg}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg width="11" height="11" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute bottom-[calc(100%+12px)] left-0 w-[280px] bg-[#010205] rounded-[18px] shadow-[0_-8px_40px_-4px_rgba(1,2,5,0.32)] z-50 overflow-visible">
          {/* Tail pointing down-left */}
          <div className="absolute -bottom-[8px] left-5 w-[16px] h-[9px] overflow-hidden">
            <div className="w-[12px] h-[12px] bg-[#010205] rotate-45 mx-auto -mt-[5px]" />
          </div>
          {/* Header */}
          <div className="px-4 pt-4 pb-3 border-b border-white/10 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#99ea48]" />
            <p className="text-white/40 text-[10px] uppercase tracking-[0.25em]" style={pjsBold}>{label}</p>
          </div>
          <div className="p-2">
            {items.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setOpen(false)}
                className="w-full text-left px-3 py-2.5 rounded-[12px] hover:bg-white/8 transition-colors group flex items-start gap-3"
                style={{ backgroundColor: undefined }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
              >
                <div className="w-7 h-7 rounded-[8px] bg-white/10 group-hover:bg-[#99ea48] transition-colors flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-white group-hover:text-[#010205] transition-colors" style={pjsBold}>{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-white text-[12px]" style={pjsSemi}>{item.title}</p>
                    {item.tag && (
                      <span className="text-[9px] bg-[#99ea48] text-[#010205] rounded-full px-1.5 py-0.5 shrink-0" style={pjsBold}>{item.tag}</span>
                    )}
                  </div>
                  <p className="text-white/40 text-[11px] leading-[1.4]" style={pjsMed}>{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 pb-3 pt-1 border-t border-white/10">
            <p className="text-white/25 text-[10px]" style={pjsMed}>vencraft.io · {label.toLowerCase()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────
function Footer({ onContact, onLegal }: { onContact: () => void; onLegal: (p: LegalPage) => void }) {
  return (
    <footer className="bg-[#fafafa] px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex flex-col gap-6 max-w-[480px]">
            <Logo size="lg" />
            <p className="text-[#9b9b9c] text-[14px] leading-[24px]" style={robReg}>
              VenCraft is the fastest path from idea to funded startup. We co-build your MVP and pitch assets in parallel, then connect you directly to our network of 200+ active investors.
            </p>
            <div className="flex gap-3 flex-wrap">
              {/* X / Twitter */}
              <a href="https://x.com/vencraft_io" target="_blank" rel="noopener noreferrer" title="X" className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer hover:bg-[#99ea48] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4h5l11 16h-5L4 4z" fill="#192031" /><path d="M4 20L20 4" stroke="#192031" strokeWidth="2" strokeLinecap="round" /></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@vencraft.io" target="_blank" rel="noopener noreferrer" title="TikTok" className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer hover:bg-[#99ea48] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#192031"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/vencraft.io/" target="_blank" rel="noopener noreferrer" title="Instagram" className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer hover:bg-[#99ea48] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#192031" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61594411436008" target="_blank" rel="noopener noreferrer" title="Facebook" className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer hover:bg-[#99ea48] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#192031"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              {/* LinkedIn — link coming soon */}
              <a href="#" title="LinkedIn" className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer hover:bg-[#99ea48] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#192031"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* GitHub — link coming soon */}
              <a href="#" title="GitHub" className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center cursor-pointer hover:bg-[#99ea48] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#192031"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 flex-1">
            <div>
              <p className="text-[#192031] text-[17px] mb-5" style={robSemi}>Navigation</p>
              {["Platform", "Pipeline", "Case Studies", "Resources", "Contact"].map((l) => (
                <FooterNavLink key={l} label={l} onContact={onContact} />
              ))}
            </div>
            <div>
              <p className="text-[#192031] text-[17px] mb-5" style={robSemi}>Legal</p>
              {(["Privacy Policy", "Terms of Service", "Cookie Policy"] as LegalPage[]).map((l) => (
                <p key={l} className="text-[#9b9b9c] text-[13px] mb-5 cursor-pointer hover:text-[#99ea48] transition-colors" style={robReg} onClick={() => onLegal(l)}>{l}</p>
              ))}
            </div>
            <div>
              <p className="text-[#192031] text-[17px] mb-5" style={robSemi}>Contact</p>
              <div className="flex flex-col gap-4 text-[#9b9b9c] text-[13px]" style={robReg}>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p3972a900} fill="#192031" /></svg>
                  <span>+234 704 634 6780</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d={svgPaths.p126a9080} fill="#192031" /></svg>
                  <span>vencraft.io@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0"><path d={svgPaths.p239f000} fill="#192031" /></svg>
                  <span className="leading-[1.7]">Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Custom scrollbar — slim, auto-hides, appears on scroll or hover ──
function CustomScrollbar({ hidden }: { hidden: boolean }) {
  const [thumbTop,    setThumbTop]    = useState(0);
  const [thumbHeight, setThumbHeight] = useState(60);
  const [visible,     setVisible]     = useState(false);
  const dragging    = useRef(false);
  const dragStartY  = useRef(0);
  const dragStartS  = useRef(0);
  const hideTimer   = useRef<ReturnType<typeof setTimeout>>();

  const TRACK_VH   = 0.5;   // track spans middle 50 vh
  const HOVER_ZONE = 60;     // px from right edge that counts as "near"

  const scheduleHide = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 1400);
  };

  const show = () => {
    setVisible(true);
    scheduleHide();
  };

  const update = () => {
    const scrollH   = document.documentElement.scrollHeight;
    const viewH     = window.innerHeight;
    const scrollY   = window.scrollY;
    const trackH    = viewH * TRACK_VH;
    const ratio     = scrollH > 0 ? viewH / scrollH : 1;
    const tH        = Math.max(ratio * trackH, 36);
    const maxScroll = scrollH - viewH;
    const tTop      = maxScroll > 0 ? (scrollY / maxScroll) * Math.max(trackH - tH, 0) : 0;
    setThumbTop(tTop);
    setThumbHeight(tH);
  };

  useEffect(() => {
    const onScroll = () => { update(); show(); };
    const onMouse  = (e: MouseEvent) => {
      if (e.clientX >= window.innerWidth - HOVER_ZONE) { setVisible(true); clearTimeout(hideTimer.current); }
      else if (!dragging.current) scheduleHide();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("mousemove", onMouse);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      window.removeEventListener("mousemove", onMouse);
      clearTimeout(hideTimer.current);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current   = true;
    dragStartY.current = e.clientY;
    dragStartS.current = window.scrollY;
    clearTimeout(hideTimer.current);

    const onMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      const scrollH     = document.documentElement.scrollHeight;
      const viewH       = window.innerHeight;
      const trackH      = viewH * TRACK_VH;
      const tH          = Math.max(scrollH > 0 ? (viewH / scrollH) * trackH : trackH, 36);
      const dy          = ev.clientY - dragStartY.current;
      const scrollRange = scrollH - viewH;
      const thumbRange  = trackH - tH;
      if (thumbRange > 0)
        window.scrollTo(0, dragStartS.current + (dy / thumbRange) * scrollRange);
    };
    const onUp = () => {
      dragging.current = false;
      scheduleHide();
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
  };

  if (hidden) return null;

  return (
    <div style={{
      position:"fixed", right:6, top:"25vh",
      height:"50vh", width:4,
      zIndex:998, pointerEvents:"none",
      opacity: visible ? 1 : 0,
      transition:"opacity 0.35s ease",
    }}>
      <div
        onMouseDown={onMouseDown}
        style={{
          position:"absolute", left:0, width:"100%",
          top:thumbTop, height:thumbHeight,
          background:"linear-gradient(to bottom, #99ea48 0%, #191f33 100%)",
          /* V tip at top, ∪ dome at bottom */
          clipPath:`polygon(
            50%  0%,
            100% 18%,
            100% 82%,
            82%  94%,
            65%  99%,
            50%  100%,
            35%  99%,
            18%  94%,
            0%   82%,
            0%   18%
          )`,
          cursor:"grab",
          pointerEvents:"all",
          userSelect:"none",
        }}
      />
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────
export default function App() {
  // Show preloader on every page load; it dismisses itself after the animation
  const [showPreloader, setShowPreloader] = useState(true);
  const [pageVisible,   setPageVisible]   = useState(false);
  const [ready,         setReady]         = useState(false);

  const [mode,            setMode]            = useState<"founder" | "investor">("founder");
  const [videoOpen,       setVideoOpen]       = useState(false);
  const [pipelineVideoOpen, setPipelineVideoOpen] = useState(false);
  const [waitlistOpen,    setWaitlistOpen]    = useState(false);
  const [contactOpen,     setContactOpen]     = useState(false);
  const [legalPage,       setLegalPage]       = useState<LegalPage | null>(null);
  const [bellDone,        setBellDone]        = useState(false);
  const ctaRef = useRef<HTMLElement>(null!);
  const openWaitlist = () => setWaitlistOpen(true);
  const openContact  = () => setContactOpen(true);

  return (
    <>
      <CustomScrollbar hidden={showPreloader} />
      {showPreloader && (
        <Preloader
          onFadeStart={() => { setPageVisible(true); }}
          onDone={() => { setShowPreloader(false); setReady(true); }}
        />
      )}
      <div className="min-h-full bg-white overflow-x-hidden"
        style={{ opacity: pageVisible ? 1 : 0, transition: pageVisible ? "opacity 0.15s ease" : "none" }}>
        {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
        {pipelineVideoOpen && <PipelineVideoModal onClose={() => setPipelineVideoOpen(false)} />}
        {waitlistOpen && <WaitlistModal mode={mode} onClose={() => setWaitlistOpen(false)} onSubmitted={() => setBellDone(true)} />}
        {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
        {legalPage && <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />}
        <Navbar onJoin={openWaitlist} onContact={openContact} bellDone={bellDone} />
        <HeroSection mode={mode} onToggle={setMode} onJoin={openWaitlist} onVideoOpen={() => setVideoOpen(true)} ready={ready} />
        <ServicesSection mode={mode} />
        <PipelineSection onVideoOpen={() => setPipelineVideoOpen(true)} />
        <PortfolioSection />
        <TestimonialSection />
        <FAQSection onJoin={openWaitlist} onContact={openContact} />
        <BlogSection onJoin={openWaitlist} />
        <CTASection mode={mode} ctaRef={ctaRef} />
        <Footer onContact={openContact} onLegal={setLegalPage} />
      </div>
    </>
  );
}
