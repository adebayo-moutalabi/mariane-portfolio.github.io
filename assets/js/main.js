/* =========================================================
   Mariane Hounsou — interactions
   ========================================================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = () => window.matchMedia("(min-width: 861px)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* ---------------------------------------------------------
     i18n — French is in the HTML, English lives here
     --------------------------------------------------------- */
  const EN = {
    "nav.profile": "Profile", "nav.journey": "Experience", "nav.skills": "Skills",
    "nav.education": "Education", "nav.projects": "Projects", "nav.contact": "Contact",

    "hero.eyebrow": "Wilmington, Delaware · Open to new opportunities",
    "hero.role": "Focused on", "hero.cta1": "Explore my journey", "hero.cta2": "Get in touch",

    "profile.eyebrow": "Profile",
    "profile.text": "I make technology reliable, simple and human. As an IT Support and Network technician, I install, configure and troubleshoot — from the workstation to the router — so every user can focus on what matters.",

    "stats.exp": "professional IT experiences", "stats.countries": "countries — Benin &amp; United States",
    "stats.degrees": "university degrees — one in progress", "stats.langs": "languages — French &amp; English",

    "journey.eyebrow": "Professional experience",
    "journey.title": "Hands-on,", "journey.titleEm": "serving users.",
    "journey.outro": "“Every ticket resolved is someone who can move forward again.”",
    "journey.next": "See my skills",
    "common.current": "Current", "common.internship": "Internship", "common.ongoing": "In progress",
    "common.graduated": "Graduated · 2023", "common.training22": "Training · 2022", "common.benin": "Benin",
    "common.today": "present",

    "xp1.date": "June 2026 — Present", "xp1.role": "Associate Support Analyst Intern",
    "xp1.b1": "First-level technical support for end users in a corporate environment.",
    "xp1.b2": "Incident tracking and ticket management with ServiceNow.",
    "xp1.b3": "Support for Microsoft 365 applications, including Outlook and Teams.",
    "xp1.b4": "Troubleshooting user access, password and account-related issues.",
    "xp1.b5": "Documenting support activities according to IT service management procedures.",

    "xp2.date": "October 2024 — Present", "xp2.role": "IT Support",
    "xp2.b1": "On-site support for staff on hardware and network connectivity issues.",
    "xp2.b2": "Installing and configuring routers, Wi-Fi access points and printers.",
    "xp2.b3": "Troubleshooting internet and system performance issues.",
    "xp2.b4": "Workstation setup, Windows installation and user login configuration.",

    "xp3.date": "July — August 2022", "xp3.role": "Network Intern",
    "xp3.org": "ICT Promotion Service (SPTIC)<span>Calavi · Benin</span>",
    "xp3.b1": "Configured Cisco access points and reset MikroTik routers.",
    "xp3.b2": "Supported fiber optic replacements and connectivity diagnostics.",
    "xp3.b3": "Resolved local and remote network issues alongside senior technicians.",

    "chips.routers": "Routers", "chips.printers": "Printers", "chips.fiber": "Fiber optics",
    "chips.cisco": "Cisco routers", "chips.nettest": "Network testing",

    "skills.eyebrow": "Skills", "skills.title": "A complete", "skills.titleEm": "toolbox.",
    "skills.net": "Networking", "skills.netText": "Designing, configuring and troubleshooting wired and wireless networks.",
    "skills.sys": "Systems &amp; software", "skills.ad": "Active Directory — accounts &amp; passwords",
    "skills.hw": "Hardware", "skills.hwText": "Printers, scanners, routers, switches, PCs, tablets and mobile devices.",
    "skills.tools": "Tools", "skills.ent": "Enterprise environment",
    "skills.entText": "Tools I use every day to secure and manage end-user environments.",
    "skills.langs": "Languages", "skills.support": "End-user support",
    "skills.supportText": "Tier-1 support: diagnosing, resolving and documenting incidents following ITSM procedures.",
    "chips.ticketing": "Ticket management", "skills.fr": "French", "skills.en": "English",

    "soft.row1": "<span>Problem solving</span><b>✦</b><span>Teamwork</span><b>✦</b><span>Customer service</span><b>✦</b><span>Adaptability</span><b>✦</b><span>Time management</span><b>✦</b><span>Communication</span><b>✦</b>",
    "soft.row2": "<span>Listening</span><b>✦</b><span>Rigor</span><b>✦</b><span>Curiosity</span><b>✦</b><span>Patience</span><b>✦</b><span>Teaching</span><b>✦</b><span>Reliability</span><b>✦</b>",

    "edu.eyebrow": "Education", "edu.title": "Learning,", "edu.titleEm": "from Cotonou to Wilmington.",
    "edu.lead": "A solid foundation in network administration, expanded with computer science, design and cybersecurity.",
    "edu1.title": "Bachelor of Science in Computer Science",
    "edu1.text": "Deepening computer science: programming, systems, networks and security.",
    "edu2.title": "Bachelor’s in Network Administration",
    "edu2.text": "Network architecture and administration, protocols and interconnection equipment.",
    "edu3.title": "UI/UX Design",
    "edu3.text": "User-centered interface design — a real asset for understanding the people I support.",
    "edu4.title": "Ethical Hacking",
    "edu4.text": "An introduction to offensive security, to better protect systems and users.",

    "certs.eyebrow": "Certifications", "certs.title": "Always", "certs.titleEm": "moving forward.",
    "certs.done": "Earned", "certs.progress": "In progress", "certs.planned": "Planned",

    "projects.eyebrow": "Projects &amp; achievements", "projects.title": "What I’ve", "projects.titleEm": "built.",
    "p1.title": "Wi-Fi infrastructure &amp; workstations",
    "p1.text": "Installed and configured routers, Wi-Fi access points and printers, and set up Windows workstations and user logins for a Wilmington nonprofit.",
    "p2.tag": "CCNA labs · in progress", "p2.title": "Cisco network labs",
    "p2.text": "Building topologies in Packet Tracer and GNS3: VLANs, IP addressing, DHCP, DNS and Cisco routing — hands-on preparation for the CCNA certification.",
    "p3.title": "Enterprise end-user support",
    "p3.text": "End-to-end incident handling in ServiceNow: diagnosis, resolution and documentation. Helping users with Microsoft 365 and the company’s secure tooling.",
    "p3.t1": "Password reset", "p3.t2": "Outlook / Teams access", "p3.t3": "Citrix sign-in", "p3.resolved": "Resolved",
    "p4.title": "Fiber optics &amp; access points",
    "p4.text": "Took part in fiber link replacements, Cisco access point configuration and MikroTik router recovery in Benin.",

    "contact.eyebrow": "Contact", "contact.title": "Let’s work", "contact.titleEm": "together.",
    "contact.lead": "An opportunity, a question, or just want to connect? My inbox is open.",
    "contact.email": "Email", "contact.copy": "Click to copy", "contact.location": "Location",
    "contact.country": "United States", "contact.langs": "Languages", "contact.langsVal": "French · English",
    "contact.bilingual": "Bilingual",
    "footer.top": "Back to top ↑",
    "toast.copied": "Email copied ✓"
  };

  const ROLES = {
    fr: ["IT Support", "Réseaux", "Help Desk", "Microsoft 365", "Cisco"],
    en: ["IT Support", "Networking", "Help Desk", "Microsoft 365", "Cisco"]
  };
  const KEYWORDS = { fr: ["fiable,", "simple", "humaine.", "l'essentiel."], en: ["reliable,", "simple", "human.", "matters."] };

  const FR = {};
  $$("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.innerHTML; });
  FR["toast.copied"] = "E-mail copié ✓";

  let lang = "fr";
  try {
    lang = localStorage.getItem("lang") || ((navigator.language || "fr").startsWith("fr") ? "fr" : "en");
  } catch (e) { /* storage unavailable */ }

  const t = key => (lang === "en" ? EN : FR)[key] ?? FR[key] ?? "";

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => {
      const v = (lang === "en" ? EN : FR)[el.dataset.i18n];
      if (v !== undefined) el.innerHTML = v;
    });
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    splitStatement();
    buildMarquees();
    resetRotator();
    requestAnimationFrame(onScroll);
  }
  $("#langToggle").addEventListener("click", () => applyLang(lang === "fr" ? "en" : "fr"));

  /* ---------------------------------------------------------
     Statement — words light up as you scroll
     --------------------------------------------------------- */
  const statement = $("#statement");
  let words = [];
  function splitStatement() {
    const text = statement.textContent.trim();
    statement.innerHTML = text.split(/\s+/).map(w =>
      `<span class="w${KEYWORDS[lang].includes(w) ? " is-key" : ""}">${w}</span>`).join(" ");
    words = $$(".w", statement);
  }

  /* ---------------------------------------------------------
     Marquee — duplicate content for a seamless loop
     --------------------------------------------------------- */
  function buildMarquees() {
    $$(".marquee__track").forEach(track => {
      const html = t(track.dataset.i18n);
      track.innerHTML = html + html;
    });
  }

  /* ---------------------------------------------------------
     Hero role rotator
     --------------------------------------------------------- */
  const rotator = $("#rotator");
  let roleIdx = 0;
  function resetRotator() { roleIdx = 0; rotator.textContent = ROLES[lang][0]; }
  if (!reduceMotion) {
    setInterval(() => {
      rotator.classList.add("is-out");
      setTimeout(() => {
        roleIdx = (roleIdx + 1) % ROLES[lang].length;
        rotator.textContent = ROLES[lang][roleIdx];
        rotator.classList.remove("is-out");
        rotator.classList.add("is-in");
        void rotator.offsetWidth;
        rotator.classList.remove("is-in");
      }, 600);
    }, 2600);
  }

  /* ---------------------------------------------------------
     Hero network canvas
     --------------------------------------------------------- */
  const canvas = $("#netCanvas");
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, nodes = [], heroVisible = true;
  const mouse = { x: -9999, y: -9999 };

  function initCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(clamp((W * H) / 16000, 30, 90));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.6 + .8,
      gold: Math.random() > .25
    }));
  }

  function drawCanvas() {
    ctx.clearRect(0, 0, W, H);
    const maxD = 140;
    for (const n of nodes) {
      if (!reduceMotion) { n.x += n.vx; n.y += n.vy; }
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
      if (d < 180) { n.x -= dx * .004; n.y -= dy * .004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < maxD) {
          ctx.strokeStyle = `rgba(255,213,140,${(1 - d / maxD) * .22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(mouse.x - nodes[i].x, mouse.y - nodes[i].y);
      if (md < 200) {
        ctx.strokeStyle = `rgba(255,213,140,${(1 - md / 200) * .5})`;
        ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = n.gold ? "rgba(255,213,140,.85)" : "rgba(196,40,80,.9)";
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop() {
    if (heroVisible) drawCanvas();
    if (!reduceMotion) requestAnimationFrame(loop);
  }
  const hero = $("#hero");
  hero.addEventListener("pointermove", e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(hero);

  /* ---------------------------------------------------------
     Reveal on scroll + counters + cert rings
     --------------------------------------------------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      $$("[data-count]", e.target).forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: .18, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal, .project").forEach(el => io.observe(el));

  function countUp(el) {
    const target = +el.dataset.count;
    if (reduceMotion) { el.textContent = target; return; }
    const start = performance.now(), dur = 1400;
    const step = now => {
      const p = clamp((now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------
     Journey — horizontal pinned scroll (desktop)
     --------------------------------------------------------- */
  const journey = $("#parcours");
  const track = $("#journeyTrack");
  const journeyBar = $("#journeyBar");
  let trackDistance = 0;

  function sizeJourney() {
    if (isDesktop()) {
      trackDistance = Math.max(0, track.scrollWidth - window.innerWidth);
      journey.style.height = `${window.innerHeight + trackDistance}px`;
    } else {
      journey.style.height = "";
      track.style.transform = "";
      trackDistance = 0;
    }
  }

  /* ---------------------------------------------------------
     Education — stacked cards
     --------------------------------------------------------- */
  const stackCards = $$(".stack__card");
  stackCards.forEach((c, i) => c.style.setProperty("--i", i));

  /* ---------------------------------------------------------
     Scroll handler
     --------------------------------------------------------- */
  const nav = $("#nav");
  const progress = $(".progress span");
  const sections = $$("main section[id]");
  const navLinks = $$(".nav__links a");
  let lastY = window.scrollY, ticking = false;

  function onScroll() {
    ticking = false;
    const y = window.scrollY, vh = window.innerHeight;
    const docH = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${docH > 0 ? y / docH : 0})`;

    // nav state
    nav.classList.toggle("is-scrolled", y > 40);
    if (!nav.classList.contains("is-open")) nav.classList.toggle("is-hidden", y > lastY && y > vh * .8);
    lastY = y;

    // active link
    let current = "";
    sections.forEach(s => { if (s.getBoundingClientRect().top < vh * .45) current = s.id; });
    navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${current}`));

    // statement words
    if (words.length) {
      const r = statement.getBoundingClientRect();
      const p = clamp((vh * .85 - r.top) / (r.height + vh * .35));
      const lit = Math.floor(p * words.length * 1.05);
      words.forEach((w, i) => w.classList.toggle("is-on", i < lit));
    }

    // journey horizontal
    if (trackDistance > 0) {
      const r = journey.getBoundingClientRect();
      const p = clamp(-r.top / trackDistance);
      track.style.transform = `translate3d(${-p * trackDistance}px,0,0)`;
      journeyBar.style.transform = `scaleX(${p})`;
    }

    // stacked education cards: shrink cards that are being covered
    if (isDesktop()) {
      stackCards.forEach((card, i) => {
        const next = stackCards[i + 1];
        if (!next) return;
        const cr = card.getBoundingClientRect(), nr = next.getBoundingClientRect();
        const p = clamp(1 - (nr.top - cr.top) / cr.height);
        card.style.setProperty("--scale", 1 - p * .06);
        card.style.setProperty("--dim", p * .25);
      });
    } else {
      stackCards.forEach(c => { c.style.setProperty("--scale", 1); c.style.setProperty("--dim", 0); });
    }
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });

  /* ---------------------------------------------------------
     Pointer effects: bento spotlight, tilt, magnetic
     --------------------------------------------------------- */
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  $$(".tile").forEach(tile => {
    tile.addEventListener("pointermove", e => {
      const r = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
      tile.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  if (finePointer && !reduceMotion) {
    $$(".tilt").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });

    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * .18}px, ${y * .28}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------------------------------------------------------
     Mobile menu, copy email, year
     --------------------------------------------------------- */
  const burger = $("#burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
    nav.classList.remove("is-hidden");
  });
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }));

  const toast = $("#toast");
  $("#copyMail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText("hounsounorma@gmail.com"); }
    catch (e) { window.location.href = "mailto:hounsounorma@gmail.com"; return; }
    toast.textContent = t("toast.copied");
    toast.classList.add("is-on");
    setTimeout(() => toast.classList.remove("is-on"), 1800);
  });

  $("#year").textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Init
     --------------------------------------------------------- */
  function onResize() { initCanvas(); sizeJourney(); onScroll(); if (reduceMotion) drawCanvas(); }
  let rT;
  window.addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(onResize, 150); });

  applyLang(lang);
  initCanvas();
  sizeJourney();
  loop();
  onScroll();
  if (document.fonts) document.fonts.ready.then(() => { sizeJourney(); onScroll(); });
  requestAnimationFrame(() => document.body.classList.add("is-loaded"));
})();
