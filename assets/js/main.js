/* =========================================================
   Mariane Hounsou — v2 « Chapitres » · interactions
   ========================================================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const EMAIL = "hounsounorma@gmail.com";

  /* =======================================================
     CONTENT  (fr / en)
     ======================================================= */
  const EN = {
    "boot.skip": "Click to skip",
    "nav.story": "Story", "nav.field": "Field", "nav.projects": "Projects", "nav.skills": "Skills",
    "nav.human": "Human", "nav.education": "Education", "nav.contact": "Contact",
    "ch.1": "01 · Origins", "ch.2": "02 · Field", "ch.3": "03 · Projects", "ch.4": "04 · Skills",
    "ch.5": "05 · Human", "ch.6": "06 · Education", "ch.7": "07 · What's next", "ch.8": "Epilogue",

    "pro.kicker": "Prologue · Wilmington, Delaware",
    "pro.hello": "Hi, I'm",
    "pro.lead": "<strong>IT Support &amp; Network</strong> technician. I make technology work — so people can keep moving forward.",
    "pro.cta1": "Read my story", "pro.cta2": "Open the terminal ›_",
    "badge.role": "IT Support &amp; Network Technician", "badge.ok": "● Access granted",
    "badge.back": "Languages", "badge.base": "Based in", "badge.origin": "Origin", "badge.originVal": "Cotonou · Benin",
    "badge.hint": "↻ Click the badge",

    "man.text": "Behind every screen, there is a person. Behind every outage, a day that stops. My job is to get it running again.",

    "map.bj": "Benin",
    "s.title": "The", "s.titleEm": "origins.",
    "s1.title": "It all starts with networks.",
    "s1.text": "A Bachelor's in Network Administration at ENEAM. In 2022, my first internship at SPTIC in Calavi: Cisco access points, MikroTik routers, fiber optic replacements. The field quickly became obvious.",
    "s2.tag": "2022 · Widening the horizon",
    "s2.title": "Understand people, protect machines.",
    "s2.text": "Alongside, I trained in UI/UX Design and Ethical Hacking. Two angles that change everything: putting myself in the user's shoes, and thinking like an attacker to defend better.",
    "s3.title": "New country, same passion.",
    "s3.text": "A new life, a new working language. IT Support at the Police Athletic League since 2024, Associate Support Analyst at Berkley Technology Services in 2026 — while pursuing a B.Sc. in Computer Science.",

    "f.title": "In the", "f.titleEm": "field.",
    "f.lead": "Three roles, one common thread: being there when technology lets people down.",
    "sim.kicker": "A typical day · Interactive simulation",
    "sim.title": "Your turn: solve the tickets.", "sim.solved": "solved",

    "p.title": "What I've", "p.titleEm": "built.",
    "p.lead": "Every project is a story: a need, an action, an outcome. Click to open it.",

    "k.title": "The", "k.titleEm": "toolbox.",
    "k.lead": "Pick a domain, then click a card to see how I use each skill.",

    "h.title": "The human", "h.titleEm": "behind the screen.",
    "h.lead": "Technology fixes the problem. Listening fixes the situation. Flip the cards to see my approach.",

    "e.title": "Always", "e.titleEm": "learning.",
    "e.lead": "From Cotonou to Wilmington. Drag to browse.",
    "c.ongoing": "In progress", "c.grad": "Graduated", "c.training": "Training · 2022", "c.earned": "Earned",
    "e1.title": "Bachelor of Science in Computer Science",
    "e1.text": "Programming, systems, networks, security: strengthening the theory behind field practice.",
    "e2.title": "Bachelor's in Network Administration",
    "e2.text": "Network architecture, protocols, interconnection equipment. The foundation for everything else.",
    "e3.text": "Designing for the user. A mindset I bring to every support conversation.",
    "e4.text": "Understanding attacks to better protect systems — and raise user awareness.",
    "e5.school": "Professional certificate",
    "e5.text": "Technical support, networking, operating systems, system administration and IT security.",

    "g.title": "What's", "g.titleEm": "next.",
    "g.lead": "The story is only beginning. Click a goal.",

    "ct.num": "Epilogue", "ct.title": "Let's write what comes next", "ct.titleEm": "together.",
    "ct.lead": "An opportunity, a project, a question? Compose your message — it will open straight in your mail app.",
    "ct.email": "Email", "ct.copy": "Click to copy", "ct.where": "Location", "ct.country": "United States",
    "ct.new": "New message", "ct.to": "To", "ct.from": "From", "ct.subject": "Subject", "ct.send": "Send",
    "ct.fromPh": "Your name", "ct.subjectPh": "IT Support opportunity", "ct.msgPh": "Hi Mariane, …",
    "foot.egg": "Tip: type “help” in the terminal ›_", "foot.top": "Back to top ↑"
  };

  const BOOT = {
    fr: ["init --profil mariane", "chargement des compétences…", "connexion au réseau… OK", "accès autorisé ✓"],
    en: ["init --profile mariane", "loading skills…", "connecting to network… OK", "access granted ✓"]
  };

  const MANIFESTO_KEYS = { fr: ["personne.", "remettre", "marche."], en: ["person.", "running", "again."] };

  const RT = { fr: "Routeurs", en: "Routers" }, PR = { fr: "Imprimantes", en: "Printers" }, FO = { fr: "Fibre optique", en: "Fiber optics" };
  const XP = [
    {
      big: "BTS", live: true,
      date: { fr: "Juin 2026 — Aujourd'hui", en: "June 2026 — Present" },
      role: { fr: "Associate Support Analyst · Stagiaire", en: "Associate Support Analyst Intern" },
      org: "Berkley Technology Services", place: "Wilmington, DE · USA",
      story: { fr: "Le monde de l'entreprise : des centaines d'utilisateurs, des outils exigeants, zéro place à l'approximation.", en: "The corporate world: hundreds of users, demanding tools, no room for guesswork." },
      list: {
        fr: ["Support technique de niveau 1 en environnement corporate.", "Suivi des incidents et gestion des tickets sous ServiceNow.", "Support Microsoft 365 : Outlook, Teams.", "Résolution des problèmes d'accès, de mots de passe et de comptes.", "Documentation selon les procédures ITSM, en équipe avec les analystes."],
        en: ["First-level technical support in a corporate environment.", "Incident tracking and ticket management in ServiceNow.", "Microsoft 365 support: Outlook, Teams.", "Resolving access, password and account issues.", "Documentation per ITSM procedures, working with fellow analysts."]
      },
      tools: ["ServiceNow", "Microsoft 365", "Citrix Workspace", "Tanium", "Azure", "Zscaler"]
    },
    {
      big: "PALW", live: true,
      date: { fr: "Octobre 2024 — Aujourd'hui", en: "October 2024 — Present" },
      role: { fr: "IT Support", en: "IT Support" },
      org: "Police Athletic League of Wilmington", place: "Wilmington, DE · USA",
      story: { fr: "Être la personne qu'on appelle quand plus rien ne marche — et repartir quand tout fonctionne.", en: "Being the person people call when nothing works — and leaving once everything runs." },
      list: {
        fr: ["Support sur site : matériel et connectivité réseau.", "Installation et configuration de routeurs, points d'accès Wi-Fi et imprimantes.", "Diagnostic des problèmes Internet et de performance système.", "Mise en service de postes : installation Windows, sessions utilisateurs."],
        en: ["On-site support: hardware and network connectivity.", "Installing and configuring routers, Wi-Fi access points and printers.", "Troubleshooting internet and system performance issues.", "Workstation setup: Windows installation, user logins."]
      },
      tools: ["Windows 10/11", "Wi-Fi", RT, PR, "Active Directory"]
    },
    {
      big: "SPTIC", live: false,
      date: { fr: "Juillet — Août 2022", en: "July — August 2022" },
      role: { fr: "Stagiaire Réseau", en: "Network Intern" },
      org: { fr: "Service de Promotion des TIC", en: "ICT Promotion Service" }, place: { fr: "Calavi · Bénin", en: "Calavi · Benin" },
      story: { fr: "Le premier terrain. Des câbles, des antennes, et des techniciens seniors qui transmettent.", en: "The first field. Cables, antennas, and senior technicians passing on their know-how." },
      list: {
        fr: ["Configuration de points d'accès Cisco.", "Réinitialisation de routeurs MikroTik.", "Remplacement de fibre optique et diagnostics de connectivité.", "Résolution d'incidents réseau locaux et distants."],
        en: ["Configuring Cisco access points.", "Resetting MikroTik routers.", "Fiber optic replacements and connectivity diagnostics.", "Resolving local and remote network issues."]
      },
      tools: ["Cisco", "MikroTik", FO]
    }
  ];

  const TICKETS = [
    {
      id: "INC-0412", prio: { fr: "Urgent", en: "Urgent" },
      q: { fr: "Je n'arrive plus à me connecter à ma session.", en: "I can't log into my account anymore." },
      steps: {
        fr: ["Vérifier l'identité de l'utilisateur", "Contrôler le compte dans Active Directory", "Déverrouiller et réinitialiser le mot de passe", "Confirmer la connexion et documenter"],
        en: ["Verify the user's identity", "Check the account in Active Directory", "Unlock and reset the password", "Confirm sign-in and document"]
      }
    },
    {
      id: "INC-0413", prio: { fr: "Haute", en: "High" },
      q: { fr: "Plus d'Internet dans la salle de réunion.", en: "No internet in the meeting room." },
      steps: {
        fr: ["Vérifier câble et Wi-Fi côté poste", "ipconfig : adresse IP et passerelle", "Tester le point d'accès et le routeur", "Corriger, retester, documenter"],
        en: ["Check cable and Wi-Fi on the device", "ipconfig: IP address and gateway", "Test the access point and router", "Fix, retest, document"]
      }
    },
    {
      id: "INC-0414", prio: { fr: "Moyenne", en: "Medium" },
      q: { fr: "L'imprimante ne répond plus.", en: "The printer stopped responding." },
      steps: {
        fr: ["Vider la file d'attente bloquée", "Vérifier la connexion réseau de l'imprimante", "Réinstaller le pilote", "Page de test imprimée ✓"],
        en: ["Clear the stuck print queue", "Check the printer's network connection", "Reinstall the driver", "Test page printed ✓"]
      }
    }
  ];

  const PROJECTS = [
    {
      vis: "wifi", tag: "PALW · 2024 →",
      title: { fr: "Infrastructure Wi-Fi & postes de travail", en: "Wi-Fi infrastructure & workstations" },
      need: { fr: "Une association de Wilmington a besoin d'un réseau stable et de postes prêts à l'emploi pour son personnel.", en: "A Wilmington nonprofit needs a stable network and ready-to-use workstations for its staff." },
      action: { fr: "Installation et configuration des routeurs, points d'accès Wi-Fi et imprimantes ; installation de Windows, configuration des sessions ; dépannage sur site.", en: "Installed and configured routers, Wi-Fi access points and printers; Windows installs and user logins; on-site troubleshooting." },
      result: { fr: "Des opérations fluides au quotidien et un personnel qui peut se concentrer sur sa mission.", en: "Smooth day-to-day operations and staff who can focus on their mission." },
      tools: ["Wi-Fi", RT, "Windows", PR]
    },
    {
      vis: "lab", tag: "CCNA · Labs",
      title: { fr: "Labs réseau Cisco", en: "Cisco network labs" },
      need: { fr: "Se préparer à la certification CCNA par la pratique, pas seulement par la théorie.", en: "Preparing for the CCNA through practice, not just theory." },
      action: { fr: "Construction de topologies dans Packet Tracer et GNS3 : VLANs, adressage IP, DHCP, DNS, routage sur équipements Cisco.", en: "Building topologies in Packet Tracer and GNS3: VLANs, IP addressing, DHCP, DNS, routing on Cisco gear." },
      result: { fr: "Des réflexes de diagnostic réseau qui servent directement sur le terrain.", en: "Network troubleshooting reflexes that pay off directly in the field." },
      tools: ["Packet Tracer", "GNS3", "VLANs", "Cisco IOS"]
    },
    {
      vis: "desk", tag: "BTS · 2026",
      title: { fr: "Support utilisateurs en entreprise", en: "Enterprise end-user support" },
      need: { fr: "Des utilisateurs bloqués — accès, comptes, outils — qui doivent reprendre leur travail rapidement.", en: "Blocked users — access, accounts, tools — who need to get back to work fast." },
      action: { fr: "Gestion des incidents dans ServiceNow, support Microsoft 365, environnements Citrix, Tanium, Azure et Zscaler, documentation ITSM.", en: "Incident management in ServiceNow, Microsoft 365 support, Citrix, Tanium, Azure and Zscaler environments, ITSM documentation." },
      result: { fr: "Des tickets traités de bout en bout et des solutions documentées pour l'équipe.", en: "Tickets handled end-to-end and solutions documented for the team." },
      tools: ["ServiceNow", "Microsoft 365", "Citrix", "ITSM"]
    },
    {
      vis: "fiber", tag: "SPTIC · 2022",
      title: { fr: "Fibre optique & points d'accès", en: "Fiber optics & access points" },
      need: { fr: "Maintenir la connectivité d'un service public des TIC au Bénin.", en: "Keeping a public ICT service in Benin connected." },
      action: { fr: "Remplacement de liaisons fibre, configuration de points d'accès Cisco, remise en service de routeurs MikroTik, diagnostics.", en: "Fiber link replacements, Cisco access point configuration, MikroTik router recovery, diagnostics." },
      result: { fr: "Une première expérience terrain qui a confirmé ma vocation pour les réseaux.", en: "A first field experience that confirmed my calling for networking." },
      tools: [FO, "Cisco", "MikroTik"]
    }
  ];

  const SKILL_CATS = [
    { id: "net", fr: "Réseaux", en: "Networking" },
    { id: "sys", fr: "Systèmes", en: "Systems" },
    { id: "itsm", fr: "Support & ITSM", en: "Support & ITSM" },
    { id: "sec", fr: "Cloud & Sécurité", en: "Cloud & Security" },
    { id: "hw", fr: "Matériel", en: "Hardware" },
    { id: "tools", fr: "Outils", en: "Tools" }
  ];
  const S = (cat, ico, name, ctx, fr, en) => ({ cat, ico, name, ctx, how: { fr, en } });
  const SKILLS = [
    S("net", "⌁", "TCP/IP & OSI", "Formation · Terrain", "Raisonner couche par couche pour isoler l'origine d'une panne.", "Reasoning layer by layer to isolate the root of an outage."),
    S("net", "⌗", { fr: "Adressage IP & sous-réseaux", en: "IP addressing & subnetting" }, "CCNA", "Planifier et vérifier des plans d'adressage dans mes labs.", "Planning and checking addressing schemes in my labs."),
    S("net", "⇄", "DHCP & DNS", "PALW · Labs", "Diagnostiquer « pas d'Internet » : bail DHCP, résolution DNS, passerelle.", "Diagnosing “no internet”: DHCP lease, DNS resolution, gateway."),
    S("net", "▦", { fr: "VLANs & switching", en: "VLANs & switching" }, "Packet Tracer · GNS3", "Segmenter un réseau pour la sécurité et la performance.", "Segmenting a network for security and performance."),
    S("net", "⟁", { fr: "Routage Cisco", en: "Cisco routing" }, "CCNA · SPTIC", "Configurer routeurs et points d'accès Cisco en ligne de commande.", "Configuring Cisco routers and access points via CLI."),
    S("net", "◎", { fr: "Wi-Fi & points d'accès", en: "Wi-Fi & access points" }, "PALW · SPTIC", "Installer, configurer et dépanner la couverture sans fil.", "Installing, configuring and troubleshooting wireless coverage."),
    S("net", "✦", { fr: "Fibre optique", en: "Fiber optics" }, "SPTIC", "Participer au remplacement de liaisons et aux tests de connectivité.", "Taking part in link replacements and connectivity tests."),
    S("net", "⌕", { fr: "Diagnostic réseau", en: "Network diagnostics" }, "Terrain", "ping, tracert, ipconfig, nslookup : mes premiers réflexes.", "ping, tracert, ipconfig, nslookup: my first reflexes."),

    S("sys", "⊞", "Windows 10 / 11", "PALW · BTS", "Installer, configurer et remettre en état des postes utilisateurs.", "Installing, configuring and restoring user workstations."),
    S("sys", "⚿", "Active Directory", "PALW · BTS", "Créer des comptes, déverrouiller, réinitialiser les mots de passe.", "Creating accounts, unlocking, resetting passwords."),
    S("sys", "✉", "Microsoft 365", "BTS", "Accompagner les utilisateurs sur Outlook, Teams et OneDrive.", "Helping users with Outlook, Teams and OneDrive."),
    S("sys", "⇆", "Exchange & Teams", "BTS", "Résoudre les soucis de messagerie et de collaboration.", "Solving mail and collaboration issues."),
    S("sys", "◐", { fr: "Gestion des comptes & accès", en: "Account & access management" }, "BTS", "Garantir le bon accès, à la bonne personne, au bon moment.", "Ensuring the right access, for the right person, at the right time."),
    S("sys", "▶", "Zoom", "PALW", "Préparer réunions et salles pour que tout marche du premier coup.", "Setting up meetings and rooms so it all works first time."),

    S("itsm", "☰", "ServiceNow", "BTS", "Créer, suivre, escalader et clôturer les incidents.", "Creating, tracking, escalating and closing incidents."),
    S("itsm", "⚑", { fr: "Gestion des incidents", en: "Incident management" }, "BTS", "Prioriser selon l'impact et l'urgence, comme le prévoit l'ITSM.", "Prioritising by impact and urgency, as ITSM prescribes."),
    S("itsm", "☏", { fr: "Help desk niveau 1", en: "Tier-1 help desk" }, "BTS · PALW", "Premier contact : écouter, diagnostiquer, résoudre ou escalader.", "First contact: listen, diagnose, resolve or escalate."),
    S("itsm", "✎", { fr: "Documentation", en: "Documentation" }, "BTS", "Documenter chaque solution pour que l'équipe gagne du temps.", "Documenting every fix so the team saves time."),
    S("itsm", "⌂", { fr: "Support sur site & à distance", en: "On-site & remote support" }, "PALW · BTS", "Intervenir au bureau de l'utilisateur ou à distance.", "Helping at the user's desk or remotely."),
    S("itsm", "◇", { fr: "Bonnes pratiques ITIL", en: "ITIL practices" }, { fr: "Notions", en: "Basics" }, "Comprendre le cycle de vie des services et des incidents.", "Understanding the service and incident lifecycle."),

    S("sec", "☁", "Azure", "BTS", "Utiliser l'environnement Azure dans le support aux postes.", "Using the Azure environment for end-user support."),
    S("sec", "⛨", "Zscaler", "BTS", "Comprendre la sécurité d'accès web et dépanner la connectivité.", "Understanding web access security and fixing connectivity."),
    S("sec", "◉", "Tanium", "BTS", "Gestion et visibilité des postes de travail.", "Endpoint management and visibility."),
    S("sec", "▣", "Citrix Workspace", "BTS", "Assister les utilisateurs sur les postes et applications virtualisés.", "Supporting users on virtualised desktops and apps."),
    S("sec", "⚠", "Ethical hacking", "AEI-Synergie", "Penser comme un attaquant pour mieux protéger.", "Thinking like an attacker to protect better."),
    S("sec", "⚿", { fr: "Hygiène de sécurité", en: "Security hygiene" }, { fr: "Sensibilisation", en: "Awareness" }, "Mots de passe solides, MFA, repérer le phishing.", "Strong passwords, MFA, spotting phishing."),

    S("hw", "▭", { fr: "Postes de travail", en: "Workstations" }, "PALW", "Préparer et installer des PC prêts à l'emploi.", "Preparing and deploying ready-to-use PCs."),
    S("hw", "⎙", { fr: "Imprimantes & scanners", en: "Printers & scanners" }, "PALW", "Installation réseau, pilotes, files d'attente.", "Network setup, drivers, print queues."),
    S("hw", "⇋", { fr: "Routeurs & switches", en: "Routers & switches" }, "PALW · SPTIC", "Brancher, configurer, tester, documenter.", "Plug in, configure, test, document."),
    S("hw", "▯", { fr: "Tablettes & mobiles", en: "Tablets & mobiles" }, "PALW", "Configurer les appareils mobiles et leur accès au réseau.", "Configuring mobile devices and their network access."),

    S("tools", "◬", "Cisco Packet Tracer", "CCNA", "Simuler des réseaux complets avant de toucher au matériel.", "Simulating full networks before touching hardware."),
    S("tools", "◭", "GNS3", "Labs", "Émuler de vrais équipements pour des labs avancés.", "Emulating real devices for advanced labs."),
    S("tools", "▤", "Microsoft Office", { fr: "Quotidien", en: "Daily" }, "Rapports, suivi, documentation claire.", "Reports, tracking, clear documentation."),
    S("tools", "✐", { fr: "Maquettage UI/UX", en: "UI/UX wireframing" }, "EIG Bénin", "Penser les interfaces du point de vue de l'utilisateur.", "Thinking about interfaces from the user's point of view.")
  ];

  const SOFT = [
    { e: "🧩", t: { fr: "Résolution de problèmes", en: "Problem solving" }, s: { fr: "Méthode avant tout.", en: "Method first." },
      b: { fr: "J'isole les variables une à une. Une panne n'est qu'une énigme qu'on n'a pas encore bien regardée.", en: "I isolate variables one at a time. An outage is just a puzzle nobody has looked at properly yet." } },
    { e: "💬", t: { fr: "Communication", en: "Communication" }, s: { fr: "Traduire la technique.", en: "Translating tech." },
      b: { fr: "J'explique sans jargon, je reformule, et je m'assure que l'utilisateur a compris — pas seulement que c'est réparé.", en: "I explain without jargon, rephrase, and make sure the user understood — not just that it's fixed." } },
    { e: "🤝", t: { fr: "Service client", en: "Customer service" }, s: { fr: "L'utilisateur d'abord.", en: "User first." },
      b: { fr: "Derrière un ticket, il y a quelqu'un de stressé. Je commence toujours par rassurer.", en: "Behind a ticket is someone stressed. I always start by reassuring them." } },
    { e: "👥", t: { fr: "Travail d'équipe", en: "Teamwork" }, s: { fr: "Ensemble, plus vite.", en: "Faster together." },
      b: { fr: "Je partage mes solutions, je documente, et je n'hésite pas à demander quand un collègue sait mieux.", en: "I share my fixes, document them, and ask when a colleague knows better." } },
    { e: "🌍", t: { fr: "Adaptabilité", en: "Adaptability" }, s: { fr: "Deux pays, deux langues.", en: "Two countries, two languages." },
      b: { fr: "Du Bénin aux États-Unis, du français à l'anglais : changer d'environnement est devenu une force.", en: "From Benin to the US, from French to English: changing environments has become a strength." } },
    { e: "⏱️", t: { fr: "Gestion du temps", en: "Time management" }, s: { fr: "Prioriser l'impact.", en: "Prioritise impact." },
      b: { fr: "Urgence et impact d'abord. Je travaille en parallèle de mes études, l'organisation n'est pas une option.", en: "Urgency and impact first. I work alongside my studies — being organised isn't optional." } },
    { e: "🧘", t: { fr: "Patience & calme", en: "Patience & calm" }, s: { fr: "Sous pression, posée.", en: "Calm under pressure." },
      b: { fr: "Quand tout le monde s'agite, je ralentis, je respire, et je suis la procédure.", en: "When everyone rushes, I slow down, breathe, and follow the procedure." } },
    { e: "📚", t: { fr: "Curiosité", en: "Curiosity" }, s: { fr: "Toujours en apprentissage.", en: "Always learning." },
      b: { fr: "Bachelor, CCNA, CompTIA A+ : j'apprends en continu, parce que la technologie ne s'arrête jamais.", en: "B.Sc., CCNA, CompTIA A+: I keep learning, because technology never stops." } },
    { e: "🔒", t: { fr: "Discrétion & éthique", en: "Discretion & ethics" }, s: { fr: "La confiance d'abord.", en: "Trust first." },
      b: { fr: "J'accède à des comptes et à des données sensibles : la confidentialité fait partie du métier.", en: "I access accounts and sensitive data: confidentiality is part of the job." } }
  ];

  const GOALS = [
    { label: "G", p: 100, st: "done", t: "Google IT Support",
      d: { fr: "Certificat obtenu : support, réseaux, systèmes, administration et sécurité.", en: "Certificate earned: support, networking, systems, administration and security." } },
    { label: "CCNA", p: 60, st: "prog", t: "Cisco CCNA",
      d: { fr: "En préparation, avec des labs Packet Tracer et GNS3.", en: "In preparation, with Packet Tracer and GNS3 labs." } },
    { label: "B.Sc.", p: 50, st: "prog", t: { fr: "Bachelor Informatique", en: "B.Sc. Computer Science" },
      d: { fr: "En cours à Wilmington University, en parallèle du travail.", en: "In progress at Wilmington University, alongside work." } },
    { label: "A+", p: 12, st: "plan", t: "CompTIA A+",
      d: { fr: "Prochaine étape pour valider officiellement les fondamentaux du support.", en: "Next step to formally validate support fundamentals." } }
  ];
  const STATUS = { done: { fr: "Obtenue", en: "Earned" }, prog: { fr: "En cours", en: "In progress" }, plan: { fr: "Prévue", en: "Planned" } };

  const RIBBON = {
    fr: ["Résolution de problèmes", "<em>Écoute</em>", "Travail d'équipe", "<em>Adaptabilité</em>", "Service client", "<em>Rigueur</em>", "Communication", "<em>Curiosité</em>"],
    en: ["Problem solving", "<em>Listening</em>", "Teamwork", "<em>Adaptability</em>", "Customer service", "<em>Rigor</em>", "Communication", "<em>Curiosity</em>"]
  };
  const SUBJECTS = {
    fr: ["Opportunité d'emploi", "Stage", "Projet freelance", "Simple bonjour 👋"],
    en: ["Job opportunity", "Internship", "Freelance project", "Just saying hi 👋"]
  };
  const UI = {
    fr: { solve: "Résoudre", solving: "En cours…", solved: "Résolu ✓", open: "Ouvrir le projet", need: "Le besoin", action: "Mon action", result: "Le résultat", tools: "Outils", how: "Comment je l'utilise", approach: "Mon approche", turn: "↻ retourner", more: "En savoir plus", less: "Réduire", copied: "E-mail copié ✓", allSolved: "Tous les tickets sont résolus ! 🎉", sent: "Votre messagerie s'ouvre…", empty: "Écrivez d'abord un petit message 🙂", all: "Tout" },
    en: { solve: "Resolve", solving: "Working…", solved: "Resolved ✓", open: "Open project", need: "The need", action: "What I did", result: "The outcome", tools: "Tools", how: "How I use it", approach: "My approach", turn: "↻ flip", more: "Learn more", less: "Show less", copied: "Email copied ✓", allSolved: "All tickets resolved! 🎉", sent: "Opening your mail app…", empty: "Write a short message first 🙂", all: "All" }
  };

  /* =======================================================
     i18n
     ======================================================= */
  const FR = {};
  $$("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.innerHTML; });
  $$("[data-i18n-ph]").forEach(el => { FR[el.dataset.i18nPh] = el.placeholder; });
  $$("[data-i18n-label]").forEach(el => { FR[el.dataset.i18nLabel] = el.dataset.label; });

  let lang = "fr";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en"); } catch (e) { /* storage blocked */ }
  const L = v => (v && typeof v === "object" && "fr" in v ? v[lang] : v);
  const T = k => (lang === "en" ? EN[k] : FR[k]) ?? FR[k] ?? "";

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { el.innerHTML = T(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach(el => { el.placeholder = T(el.dataset.i18nPh); });
    $$("[data-i18n-label]").forEach(el => { el.dataset.label = T(el.dataset.i18nLabel); });
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    splitManifesto(); renderXP(xpIndex, false); renderTickets(); renderProjects(); renderSkillTabs(); renderSkills(false);
    renderSoft(); renderGoals(); renderRibbon(); renderSubjects();
    requestAnimationFrame(onScroll);
  }
  $("#langToggle").addEventListener("click", () => applyLang(lang === "fr" ? "en" : "fr"));

  /* =======================================================
     FX canvas: click sparks + confetti
     ======================================================= */
  const fx = $("#fx"), fctx = fx.getContext("2d");
  let parts = [], fxRunning = false;
  function sizeFx() { const d = Math.min(devicePixelRatio || 1, 2); fx.width = innerWidth * d; fx.height = innerHeight * d; fctx.setTransform(d, 0, 0, d, 0, 0); }
  const COLORS = ["#69001c", "#ffd58c", "#e8b663", "#e2486c", "#a87c56"];
  function sparks(x, y, n = 14, power = 1) {
    if (reduce) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = (2 + Math.random() * 4) * power;
      parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: .12, life: 1, decay: .02 + Math.random() * .02, r: 2 + Math.random() * 3, c: COLORS[i % COLORS.length], shape: Math.random() > .5 ? "c" : "s", rot: Math.random() * 6 });
    }
    runFx();
  }
  function confetti() {
    if (reduce) return;
    for (let i = 0; i < 160; i++) {
      parts.push({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .55, vx: (Math.random() - .5) * 16, vy: -8 - Math.random() * 12, g: .3, life: 1, decay: .006 + Math.random() * .006, r: 4 + Math.random() * 4, c: COLORS[i % COLORS.length], shape: "s", rot: Math.random() * 6 });
    }
    runFx();
  }
  function runFx() { if (!fxRunning) { fxRunning = true; requestAnimationFrame(tickFx); } }
  function tickFx() {
    fctx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => p.life > 0);
    for (const p of parts) {
      p.vx *= .98; p.vy = p.vy * .98 + p.g; p.x += p.vx; p.y += p.vy; p.life -= p.decay; p.rot += .1;
      fctx.globalAlpha = Math.max(p.life, 0); fctx.fillStyle = p.c;
      if (p.shape === "c") { fctx.beginPath(); fctx.arc(p.x, p.y, p.r, 0, 7); fctx.fill(); }
      else { fctx.save(); fctx.translate(p.x, p.y); fctx.rotate(p.rot); fctx.fillRect(-p.r / 2, -p.r, p.r, p.r * 2); fctx.restore(); }
    }
    fctx.globalAlpha = 1;
    if (parts.length) requestAnimationFrame(tickFx); else fxRunning = false;
  }
  document.addEventListener("pointerdown", e => {
    if (e.target.closest("input, textarea, .term, .rail")) return;
    sparks(e.clientX, e.clientY, 12, .8);
    const btn = e.target.closest(".btn");
    if (btn) {
      const r = btn.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2.2, rip = document.createElement("span");
      rip.className = "ripple"; rip.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      btn.appendChild(rip); setTimeout(() => rip.remove(), 700);
    }
  });

  /* =======================================================
     Custom cursor
     ======================================================= */
  const cursor = $("#cursor"), cDot = $(".cursor__dot"), cRing = $(".cursor__ring");
  if (fine && !reduce) {
    document.documentElement.classList.add("has-cursor");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; cDot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
    (function follow() { rx += (mx - rx) * .18; ry += (my - ry) * .18; cRing.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(follow); })();
    document.addEventListener("pointerover", e => cursor.classList.toggle("is-hover", !!e.target.closest("a, button, .flip, .soft, .proj, .goal, .rail, label")));
    addEventListener("pointerdown", () => cursor.classList.add("is-down"));
    addEventListener("pointerup", () => cursor.classList.remove("is-down"));
  }

  /* =======================================================
     Boot sequence
     ======================================================= */
  const boot = $("#boot");
  let booted = false;
  function endBoot() {
    if (booted) return; booted = true;
    boot.classList.add("is-done"); document.body.classList.remove("is-booting");
    setTimeout(() => document.body.classList.add("is-ready"), 250);
  }
  (function runBoot() {
    let seen = false;
    try { seen = sessionStorage.getItem("booted") === "1"; sessionStorage.setItem("booted", "1"); } catch (e) { /* ignore */ }
    if (seen || reduce) { boot.style.transition = "none"; endBoot(); return; }
    boot.addEventListener("click", endBoot);
    const lines = BOOT[lang], out = $("#bootText"), bar = $("#bootBar");
    let li = 0, ci = 0;
    (function type() {
      if (booted) return;
      const line = lines[li];
      out.textContent = line.slice(0, ++ci);
      bar.style.width = `${((li + ci / line.length) / lines.length) * 100}%`;
      if (ci < line.length) return setTimeout(type, 22);
      li++; ci = 0;
      if (li < lines.length) setTimeout(type, 260); else setTimeout(endBoot, 450);
    })();
  })();

  /* =======================================================
     Prologue: badge + blobs + QR
     ======================================================= */
  const badge = $("#badge");
  const qr = $("#qr");
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 121; i++) {
    const r = Math.floor(i / 11), c = i % 11;
    const finder = (r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3);
    const on = finder ? !(r % 10 === 1 && c % 10 === 1) && !((r === 1 && c === 9) || (r === 9 && c === 1)) : rnd() > .5;
    qr.insertAdjacentHTML("beforeend", `<i class="${on ? "" : "o"}"></i>`);
  }
  badge.addEventListener("click", e => {
    badge.classList.toggle("is-flipped");
    const r = badge.getBoundingClientRect();
    sparks(r.left + r.width / 2, r.top + r.height / 2, 26, 1.4);
  });
  badge.addEventListener("animationend", () => { badge.style.animation = "none"; });
  if (fine && !reduce) {
    badge.addEventListener("pointermove", e => {
      const r = badge.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      badge.style.setProperty("--ry", `${(x - .5) * 22}deg`); badge.style.setProperty("--rx", `${(.5 - y) * 18}deg`);
      $$(".badge__face", badge).forEach(f => { f.style.setProperty("--sx", `${x * 100}%`); f.style.setProperty("--sy", `${y * 100}%`); });
    });
    badge.addEventListener("pointerleave", () => { badge.style.setProperty("--ry", "0deg"); badge.style.setProperty("--rx", "0deg"); });
    const prologue = $("#prologue"), bW = $(".blob--wine"), bG = $(".blob--gold");
    prologue.addEventListener("pointermove", e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      bW.style.transform = `translate(${x * 80}px, ${y * 60}px)`; bG.style.transform = `translate(${x * -60}px, ${y * -50}px)`;
    });
  }
  $("#ctaTerminal").addEventListener("click", () => openTerm());

  /* =======================================================
     Manifesto (words light up)
     ======================================================= */
  const manifesto = $("#manifesto");
  let words = [];
  function splitManifesto() {
    const keys = MANIFESTO_KEYS[lang];
    manifesto.innerHTML = manifesto.textContent.trim().split(/\s+/).map(w => `<span class="w${keys.includes(w) ? " k" : ""}">${w}</span>`).join(" ");
    words = $$(".w", manifesto);
  }

  /* =======================================================
     01 Story (scrollytelling)
     ======================================================= */
  const map = $("#map"), arc = $("#mapArc"), plane = $("#mapPlane"), mapCaption = $("#mapCaption");
  const arcLen = arc.getTotalLength();
  arc.style.strokeDasharray = arcLen; arc.style.strokeDashoffset = arcLen;
  const steps = $$(".story-step");
  const stepIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      steps.forEach(s => s.classList.toggle("is-current", s === en.target));
      map.dataset.step = en.target.dataset.step;
      mapCaption.textContent = `0${+en.target.dataset.step + 1} / 03`;
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  steps.forEach(s => stepIO.observe(s));
  const story = $("#histoire");
  function updateArc() {
    const r = story.getBoundingClientRect();
    const p = clamp((-r.top + innerHeight * .2) / (r.height - innerHeight * .6));
    const t = clamp((p - .3) / .55);
    arc.style.strokeDashoffset = arcLen * (1 - t);
    // plane flies Cotonou → Wilmington (path is drawn Wilmington → Cotonou, so reverse)
    const pt = arc.getPointAtLength(arcLen * (1 - t));
    plane.setAttribute("cx", pt.x); plane.setAttribute("cy", pt.y);
  }

  /* =======================================================
     02 Field: segmented control + XP panel
     ======================================================= */
  const xpTabs = $("#xpTabs"), xpPanel = $("#xpPanel"), pill = $(".segmented__pill", xpTabs);
  let xpIndex = 0;
  function movePill() {
    const b = $(`[data-xp="${xpIndex}"]`, xpTabs);
    pill.style.width = `${b.offsetWidth}px`; pill.style.transform = `translateX(${b.offsetLeft}px)`;
  }
  function renderXP(i, anim = true) {
    xpIndex = i; const x = XP[i];
    $$("button", xpTabs).forEach(b => b.classList.toggle("is-active", +b.dataset.xp === i));
    movePill();
    xpPanel.dataset.i = i;
    xpPanel.innerHTML = `
      <span class="xp__big">${x.big}</span>
      <div>
        <div class="xp__top">${x.live ? `<span class="tag tag--live">${lang === "fr" ? "En poste" : "Current"}</span>` : `<span class="tag">${lang === "fr" ? "Stage" : "Internship"}</span>`}<span class="xp__date">${L(x.date)}</span></div>
        <h3 class="xp__role">${L(x.role)}</h3>
        <p class="xp__org">${L(x.org)}<span>${L(x.place)}</span></p>
        <p class="xp__story">${L(x.story)}</p>
      </div>
      <div>
        <ul class="xp__list">${L(x.list).map((l, n) => `<li><b>0${n + 1}</b>${l}</li>`).join("")}</ul>
        <div class="pills">${x.tools.map(t => `<span>${L(t)}</span>`).join("")}</div>
      </div>`;
    if (!anim) $$(":scope > *", xpPanel).forEach(el => { el.style.animation = "none"; });
  }
  xpTabs.addEventListener("click", e => { const b = e.target.closest("button"); if (b) renderXP(+b.dataset.xp); });
  let swipeX = null;
  xpPanel.addEventListener("pointerdown", e => { swipeX = e.clientX; });
  xpPanel.addEventListener("pointerup", e => {
    if (swipeX === null) return; const dx = e.clientX - swipeX; swipeX = null;
    if (Math.abs(dx) > 60) renderXP((xpIndex + (dx < 0 ? 1 : XP.length - 1)) % XP.length);
  });

  /* Ticket simulator */
  const simGrid = $("#simGrid"), simScore = $("#simScore");
  const solved = new Set();
  function renderTickets() {
    simGrid.innerHTML = TICKETS.map((t, i) => `
      <article class="ticket${solved.has(i) ? " is-solved" : ""}" data-t="${i}">
        <div class="ticket__head"><span class="ticket__id">${t.id}</span><span class="ticket__prio">${solved.has(i) ? UI[lang].solved : L(t.prio)}</span></div>
        <p class="ticket__q">${L(t.q)}</p>
        <ol class="ticket__steps">${L(t.steps).map(s => `<li class="${solved.has(i) ? "on" : ""}">${s}</li>`).join("")}</ol>
        <button class="ticket__btn" ${solved.has(i) ? "disabled" : ""}>${solved.has(i) ? UI[lang].solved : UI[lang].solve}</button>
      </article>`).join("");
  }
  simGrid.addEventListener("click", e => {
    const btn = e.target.closest(".ticket__btn"); if (!btn || btn.disabled) return;
    const card = btn.closest(".ticket"), i = +card.dataset.t, lis = $$("li", card);
    btn.disabled = true; btn.textContent = UI[lang].solving;
    lis.forEach((li, n) => {
      setTimeout(() => li.classList.add("run"), n * 650);
      setTimeout(() => { li.classList.remove("run"); li.classList.add("on"); }, n * 650 + 550);
    });
    setTimeout(() => {
      solved.add(i); card.classList.add("is-solved"); btn.textContent = UI[lang].solved;
      $(".ticket__prio", card).textContent = UI[lang].solved;
      simScore.textContent = solved.size; simScore.parentElement.classList.remove("bump"); void simScore.offsetWidth; simScore.parentElement.classList.add("bump");
      const r = card.getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + r.height / 2, 30, 1.6);
      if (solved.size === TICKETS.length) { confetti(); toast(UI[lang].allSolved); }
    }, lis.length * 650 + 200);
  });

  /* =======================================================
     03 Projects + FLIP modal
     ======================================================= */
  const projGrid = $("#projGrid");
  const visual = v => ({
    wifi: `<div class="vis vis--wifi"><div class="waves"><i></i><i></i><i></i><i></i></div></div>`,
    lab: `<div class="vis vis--lab"><svg viewBox="0 0 300 200"><g class="lab-links"><path d="M150 40 L70 110"/><path d="M150 40 L230 110"/><path d="M70 110 L40 170"/><path d="M70 110 L110 170"/><path d="M230 110 L190 170"/><path d="M230 110 L260 170"/><path d="M70 110 L230 110"/></g><g class="lab-nodes"><rect x="130" y="25" width="40" height="30" rx="6"/><rect x="50" y="95" width="40" height="30" rx="6"/><rect x="210" y="95" width="40" height="30" rx="6"/><circle cx="40" cy="170" r="11"/><circle cx="110" cy="170" r="11"/><circle cx="190" cy="170" r="11"/><circle cx="260" cy="170" r="11"/></g><circle class="packet" r="4"><animateMotion dur="3s" repeatCount="indefinite" path="M40 170 L70 110 L150 40 L230 110 L260 170"/></circle><circle class="packet packet--2" r="4"><animateMotion dur="3.6s" repeatCount="indefinite" path="M190 170 L230 110 L70 110 L110 170"/></circle></svg></div>`,
    desk: `<div class="vis vis--desk"><div class="mini-tickets"><span style="--n:0">INC-0412 <em>✓</em></span><span style="--n:1">INC-0413 <em>✓</em></span><span style="--n:2">INC-0414 <em>✓</em></span><span style="--n:3">INC-0415 <em>✓</em></span></div></div>`,
    fiber: `<div class="vis vis--fiber">${[0, 1, 2, 3, 4, 5].map(n => `<i style="--n:${n}"></i>`).join("")}</div>`
  })[v];
  function renderProjects() {
    projGrid.innerHTML = PROJECTS.map((p, i) => `
      <button class="proj rv" data-p="${i}" style="--d:${(i % 2) * .1}s">
        <span class="proj__visual">${visual(p.vis)}</span>
        <span class="proj__tag">${p.tag}</span>
        <span class="proj__title">${L(p.title)}</span>
        <span class="proj__open"><i>+</i>${UI[lang].open}</span>
      </button>`).join("");
    $$(".rv", projGrid).forEach(el => io.observe(el));
  }
  const modal = $("#modal"), mCard = $(".modal__card", modal);
  let lastProj = null;
  function openProject(i, from) {
    const p = PROJECTS[i]; lastProj = from;
    $("#modalVisual").innerHTML = visual(p.vis);
    $("#modalBody").innerHTML = `
      <span class="proj__tag" style="color:var(--brown-300)">${p.tag}</span>
      <h3 id="modalTitle">${L(p.title)}</h3>
      <div class="m-block"><h4>${UI[lang].need}</h4><p>${L(p.need)}</p></div>
      <div class="m-block"><h4>${UI[lang].action}</h4><p>${L(p.action)}</p></div>
      <div class="m-block"><h4>${UI[lang].result}</h4><p>${L(p.result)}</p></div>
      <div class="m-block"><h4>${UI[lang].tools}</h4><div class="m-pills">${p.tools.map(t => `<span>${L(t)}</span>`).join("")}</div></div>`;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); document.body.classList.add("is-locked");
    const a = from.getBoundingClientRect(), b = mCard.getBoundingClientRect();
    if (!reduce) mCard.animate([
      { transform: `translate(${a.left - b.left}px, ${a.top - b.top}px) scale(${a.width / b.width}, ${a.height / b.height})`, borderRadius: "32px", opacity: .6 },
      { transform: "none", opacity: 1 }
    ], { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" });
    requestAnimationFrame(() => modal.classList.add("is-shown"));
    $(".modal__close", modal).focus({ preventScroll: true });
  }
  function closeModal() {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-shown");
    const done = () => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); document.body.classList.remove("is-locked"); lastProj && lastProj.focus({ preventScroll: true }); };
    if (reduce || !lastProj) return done();
    const a = lastProj.getBoundingClientRect(), b = mCard.getBoundingClientRect();
    mCard.animate([{ transform: "none", opacity: 1 }, { transform: `translate(${a.left - b.left}px, ${a.top - b.top}px) scale(${a.width / b.width}, ${a.height / b.height})`, opacity: 0 }],
      { duration: 450, easing: "cubic-bezier(.22,1,.36,1)" }).onfinish = done;
  }
  projGrid.addEventListener("click", e => { const b = e.target.closest(".proj"); if (b) openProject(+b.dataset.p, b); });
  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });

  /* =======================================================
     04 Skills: filters + flip cards
     ======================================================= */
  const skillTabs = $("#skillTabs"), skillGrid = $("#skillGrid");
  let skillCat = "net";
  function renderSkillTabs() {
    skillTabs.innerHTML = SKILL_CATS.map(c => `<button role="tab" data-c="${c.id}" class="${c.id === skillCat ? "is-active" : ""}">${c[lang]}<sup>${SKILLS.filter(s => s.cat === c.id).length}</sup></button>`).join("");
  }
  function renderSkills(anim = true) {
    skillGrid.innerHTML = SKILLS.filter(s => s.cat === skillCat).map((s, i) => `
      <button class="flip${anim ? " enter" : ""}" style="--d:${i * .05}s" aria-label="${L(s.name)}">
        <span class="flip__face flip__front">
          <span class="flip__icon">${s.ico}</span><span class="flip__plus">+</span>
          <span class="flip__name">${L(s.name)}</span><span class="flip__ctx">${L(s.ctx)}</span>
        </span>
        <span class="flip__face flip__back"><b>${UI[lang].how}</b><p>${L(s.how)}</p></span>
      </button>`).join("");
  }
  skillTabs.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b || b.dataset.c === skillCat) return;
    skillCat = b.dataset.c; renderSkillTabs(); renderSkills();
  });
  skillGrid.addEventListener("click", e => { const f = e.target.closest(".flip"); if (f) f.classList.toggle("is-flipped"); });
  skillGrid.addEventListener("pointermove", e => {
    const f = e.target.closest(".flip__front"); if (!f) return;
    const r = f.getBoundingClientRect(); f.style.setProperty("--mx", `${e.clientX - r.left}px`); f.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  /* Ribbon */
  function renderRibbon() {
    const html = RIBBON[lang].map(w => `<span>${w}</span><b>✦</b>`).join("");
    $("#ribbon").innerHTML = html + html;
  }

  /* =======================================================
     05 Soft skills
     ======================================================= */
  const softGrid = $("#softGrid");
  function renderSoft() {
    softGrid.innerHTML = SOFT.map((s, i) => `
      <button class="soft rv" style="--d:${(i % 3) * .08}s">
        <span class="soft__face soft__front"><span class="soft__emoji">${s.e}</span><span class="soft__turn">${UI[lang].turn}</span>
          <span class="soft__title">${L(s.t)}</span><span class="soft__tagline">${L(s.s)}</span></span>
        <span class="soft__face soft__back"><b>${UI[lang].approach}</b><p>${L(s.b)}</p></span>
      </button>`).join("");
    $$(".rv", softGrid).forEach(el => io.observe(el));
  }
  softGrid.addEventListener("click", e => {
    const s = e.target.closest(".soft"); if (!s) return;
    s.classList.toggle("is-flipped");
    const r = s.getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + r.height / 2, 16, 1.1);
  });

  /* =======================================================
     06 Education rail (drag + inertia)
     ======================================================= */
  const rail = $("#rail"), railTrack = $("#railTrack");
  let rx = 0, rv = 0, dragging = false, startX = 0, startRx = 0, lastX = 0, lastT = 0, moved = 0;
  const railMax = () => Math.min(0, rail.clientWidth - railTrack.scrollWidth);
  function setRail(x) { rx = x; railTrack.style.transform = `translate3d(${rx}px,0,0)`; }
  rail.addEventListener("pointerdown", e => {
    dragging = true; moved = 0; startX = lastX = e.clientX; startRx = rx; lastT = performance.now(); rv = 0;
    rail.classList.add("is-drag"); rail.setPointerCapture(e.pointerId);
  });
  rail.addEventListener("pointermove", e => {
    if (!dragging) return;
    const now = performance.now(); rv = (e.clientX - lastX) / Math.max(now - lastT, 1) * 16; lastX = e.clientX; lastT = now;
    moved = Math.abs(e.clientX - startX);
    let x = startRx + (e.clientX - startX); const m = railMax();
    if (x > 0) x *= .35; if (x < m) x = m + (x - m) * .35;
    setRail(x);
  });
  const endDrag = () => {
    if (!dragging) return; dragging = false; rail.classList.remove("is-drag");
    (function glide() {
      if (dragging) return;
      const m = railMax();
      if (rx > 0 || rx < m) { const target = rx > 0 ? 0 : m; setRail(rx + (target - rx) * .18); if (Math.abs(target - rx) > .5) requestAnimationFrame(glide); else setRail(target); return; }
      rv *= .94; setRail(rx + rv);
      if (Math.abs(rv) > .3) requestAnimationFrame(glide);
    })();
  };
  rail.addEventListener("pointerup", endDrag); rail.addEventListener("pointercancel", endDrag);
  const stepRail = dir => {
    const card = $(".edu-card", railTrack), w = card.offsetWidth + 20, m = railMax();
    const from = rx, to = clamp(Math.round((rx - dir * w) / w) * w, m, 0), t0 = performance.now();
    (function anim(now) { const p = clamp((now - t0) / 600), e = 1 - Math.pow(1 - p, 4); setRail(from + (to - from) * e); if (p < 1) requestAnimationFrame(anim); })(t0);
  };
  $("#eduNext").addEventListener("click", () => stepRail(1));
  $("#eduPrev").addEventListener("click", () => stepRail(-1));

  /* =======================================================
     07 Goals
     ======================================================= */
  const goalGrid = $("#goalGrid");
  function renderGoals() {
    goalGrid.innerHTML = GOALS.map((g, i) => `
      <button class="goal rv" style="--d:${i * .08}s" data-p="${g.p}">
        <span class="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="54"/><circle class="ring__val" cx="60" cy="60" r="54"/></svg><span class="ring__label">${g.label}</span></span>
        <h3>${L(g.t)}</h3>
        <span class="goal__status goal__status--${g.st}">${STATUS[g.st][lang]}</span>
        <span class="goal__more"><p>${L(g.d)}</p></span>
        <span class="goal__toggle">${UI[lang].more} ↓</span>
      </button>`).join("");
    $$(".rv", goalGrid).forEach(el => io.observe(el));
  }
  const fillRing = g => { $(".ring__val", g).style.strokeDashoffset = 339.3 * (1 - g.dataset.p / 100); };
  goalGrid.addEventListener("click", e => {
    const g = e.target.closest(".goal"); if (!g) return;
    const open = g.classList.toggle("is-open");
    $(".goal__toggle", g).textContent = `${open ? UI[lang].less + " ↑" : UI[lang].more + " ↓"}`;
    const ring = $(".ring__val", g);
    ring.style.transition = "none"; ring.style.strokeDashoffset = 339.3; void ring.getBoundingClientRect();
    ring.style.transition = ""; fillRing(g);
    if (open && g.dataset.p === "100") { const r = g.getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + 80, 40, 1.8); }
  });

  /* =======================================================
     Contact composer
     ======================================================= */
  const composer = $("#composer"), subjInput = $('[name="subject"]', composer);
  function renderSubjects() {
    $("#subjectChips").innerHTML = SUBJECTS[lang].map(s => `<button type="button">${s}</button>`).join("");
  }
  $("#subjectChips").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#subjectChips button").forEach(x => x.classList.toggle("is-on", x === b)); subjInput.value = b.textContent;
  });
  composer.addEventListener("submit", e => {
    e.preventDefault();
    const name = composer.elements.name.value.trim(), subject = subjInput.value.trim() || T("ct.subjectPh"), msg = composer.elements.message.value.trim();
    if (!msg) { composer.classList.remove("shake"); void composer.offsetWidth; composer.classList.add("shake"); toast(UI[lang].empty); composer.elements.message.focus(); return; }
    composer.classList.add("is-sent"); setTimeout(() => composer.classList.remove("is-sent"), 1000);
    const r = $(".composer__send", composer).getBoundingClientRect(); sparks(r.left + r.width / 2, r.top + r.height / 2, 34, 1.6);
    toast(UI[lang].sent);
    const body = msg + (name ? `\n\n— ${name}` : "");
    setTimeout(() => { location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; }, 500);
  });
  $("#copyMail").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(EMAIL); toast(UI[lang].copied); }
    catch (err) { location.href = `mailto:${EMAIL}`; }
  });

  /* Toast */
  const toastEl = $("#toast"); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add("is-on"); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("is-on"), 2200); }

  /* =======================================================
     Terminal
     ======================================================= */
  const term = $("#term"), termOut = $("#termOut"), termInput = $("#termInput");
  const hist = []; let hIdx = 0;
  const p = (html, cls = "") => termOut.insertAdjacentHTML("beforeend", `<div class="${cls}">${html}</div>`);
  const CMDS = {
    help: () => p(lang === "fr"
      ? `Commandes disponibles :\n  <span class="c">about</span>       qui est Mariane ?\n  <span class="c">experience</span>  son parcours\n  <span class="c">skills</span>      ses compétences\n  <span class="c">education</span>   ses formations\n  <span class="c">goals</span>       ses objectifs\n  <span class="c">contact</span>     la joindre\n  <span class="c">ping</span>        tester la connexion\n  <span class="c">goto</span> &lt;section&gt; naviguer (histoire, terrain, projets…)\n  <span class="c">lang</span>        FR ⇄ EN\n  <span class="c">clear</span>       effacer\n  <span class="c">sudo hire mariane</span>  🤫`
      : `Available commands:\n  <span class="c">about</span>       who is Mariane?\n  <span class="c">experience</span>  her journey\n  <span class="c">skills</span>      her skills\n  <span class="c">education</span>   her education\n  <span class="c">goals</span>       her goals\n  <span class="c">contact</span>     reach her\n  <span class="c">ping</span>        test the connection\n  <span class="c">goto</span> &lt;section&gt; navigate (story, field, projects…)\n  <span class="c">lang</span>        FR ⇄ EN\n  <span class="c">clear</span>       clear screen\n  <span class="c">sudo hire mariane</span>  🤫`),
    about: () => p(lang === "fr" ? "Mariane Inès Norma Hounsou — Technicienne IT Support & Réseaux.\nDe Cotonou (Bénin) à Wilmington (Delaware, USA). Bilingue français / anglais." : "Mariane Inès Norma Hounsou — IT Support & Network Technician.\nFrom Cotonou (Benin) to Wilmington (Delaware, USA). Bilingual French / English."),
    experience: () => XP.forEach(x => p(`<span class="c">▸ ${L(x.role)}</span> — ${L(x.org)} <span class="m">(${L(x.date)})</span>`)),
    skills: () => SKILL_CATS.forEach(c => p(`<span class="c">${c[lang]}</span>: ${SKILLS.filter(s => s.cat === c.id).map(s => L(s.name)).join(", ")}`)),
    education: () => p(lang === "fr" ? "▸ B.Sc. Informatique — Wilmington University (en cours)\n▸ Licence Administration Réseaux — ENEAM (2023)\n▸ UI/UX Design — EIG Bénin (2022)\n▸ Ethical Hacking — AEI-Synergie (2022)" : "▸ B.Sc. Computer Science — Wilmington University (in progress)\n▸ Bachelor's in Network Administration — ENEAM (2023)\n▸ UI/UX Design — EIG Benin (2022)\n▸ Ethical Hacking — AEI-Synergie (2022)"),
    goals: () => GOALS.forEach(g => p(`${g.st === "done" ? '<span class="ok">✓</span>' : g.st === "prog" ? '<span class="c">◐</span>' : '<span class="m">○</span>'} ${L(g.t)} <span class="m">[${"█".repeat(Math.round(g.p / 10))}${"░".repeat(10 - Math.round(g.p / 10))}] ${g.p}%</span>`)),
    contact: () => p(`✉  <a href="mailto:${EMAIL}">${EMAIL}</a>\n📍 Wilmington, DE · USA`),
    ping: () => {
      p("PING mariane.profil (127.0.0.1): 56 data bytes");
      [0, 1, 2].forEach(i => setTimeout(() => { p(`64 bytes: icmp_seq=${i} ttl=64 time=${(Math.random() * 3 + 1).toFixed(2)} ms`, "m"); termOut.scrollTop = 1e9; }, 300 * (i + 1)));
      setTimeout(() => { p(lang === "fr" ? "✓ Mariane est disponible et répond rapidement." : "✓ Mariane is available and responds fast.", "ok"); termOut.scrollTop = 1e9; }, 1200);
    },
    lang: () => { applyLang(lang === "fr" ? "en" : "fr"); p(lang === "fr" ? "Langue : français" : "Language: English", "ok"); },
    clear: () => { termOut.innerHTML = ""; },
    whoami: () => p(lang === "fr" ? "un·e visiteur·se curieux·se 👀" : "a curious visitor 👀"),
    ls: () => p("histoire/  terrain/  projets/  competences/  humain/  formations/  objectifs/  contact/", "c")
  };
  const GOTO = { histoire: "histoire", story: "histoire", terrain: "terrain", field: "terrain", projets: "projets", projects: "projets", competences: "competences", skills: "competences", humain: "humain", human: "humain", formations: "formations", education: "formations", objectifs: "objectifs", goals: "objectifs", contact: "contact" };
  function run(raw) {
    const cmd = raw.trim(); if (!cmd) return;
    hist.push(cmd); hIdx = hist.length;
    p(`<span class="c">mariane@profil:~$</span> ${cmd.replace(/</g, "&lt;")}`);
    const [c, ...args] = cmd.toLowerCase().split(/\s+/);
    if (cmd.toLowerCase().startsWith("sudo hire")) {
      p(lang === "fr" ? "[sudo] mot de passe : ********\n✓ Excellente décision. Redirection vers le contact…" : "[sudo] password: ********\n✓ Excellent decision. Redirecting to contact…", "ok");
      confetti(); setTimeout(() => { closeTerm(); $("#contact").scrollIntoView({ behavior: "smooth" }); }, 1400);
    } else if (c === "goto" || c === "cd") {
      const id = GOTO[(args[0] || "").replace(/[\/.]/g, "")];
      if (id) { p("→ " + id, "ok"); setTimeout(() => { closeTerm(); $("#" + id).scrollIntoView({ behavior: "smooth" }); }, 400); }
      else p(lang === "fr" ? "Section inconnue. Essayez : goto projets" : "Unknown section. Try: goto projects", "r");
    } else if (CMDS[c]) CMDS[c](args);
    else p(lang === "fr" ? `commande introuvable : ${c.replace(/</g, "&lt;")} — tapez <span class="c">help</span>` : `command not found: ${c.replace(/</g, "&lt;")} — type <span class="c">help</span>`, "r");
    termOut.scrollTop = 1e9;
  }
  function openTerm() {
    term.classList.add("is-open"); term.setAttribute("aria-hidden", "false");
    if (!termOut.innerHTML) p(lang === "fr" ? `Bienvenue dans le terminal de Mariane.\nTapez <span class="c">help</span> pour commencer.` : `Welcome to Mariane's terminal.\nType <span class="c">help</span> to get started.`, "m");
    setTimeout(() => termInput.focus(), 100);
  }
  function closeTerm() { term.classList.remove("is-open"); term.setAttribute("aria-hidden", "true"); }
  $("#termOpen").addEventListener("click", openTerm);
  term.addEventListener("click", e => { if (e.target === term || e.target.closest("[data-term-close]")) closeTerm(); });
  $("#termForm").addEventListener("submit", e => { e.preventDefault(); run(termInput.value); termInput.value = ""; });
  termInput.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") { hIdx = Math.max(0, hIdx - 1); termInput.value = hist[hIdx] || ""; e.preventDefault(); }
    if (e.key === "ArrowDown") { hIdx = Math.min(hist.length, hIdx + 1); termInput.value = hist[hIdx] || ""; e.preventDefault(); }
    if (e.key === "Tab") { e.preventDefault(); const m = Object.keys(CMDS).concat("goto", "sudo hire mariane").find(k => k.startsWith(termInput.value)); if (m) termInput.value = m; }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeTerm(); closeModal(); }
    if (e.key === "`" && !e.target.closest("input, textarea")) { e.preventDefault(); term.classList.contains("is-open") ? closeTerm() : openTerm(); }
  });

  /* =======================================================
     Reveal observer
     ======================================================= */
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    if (en.target.classList.contains("goal")) setTimeout(() => fillRing(en.target), 200);
    io.unobserve(en.target);
  }), { threshold: .15, rootMargin: "0px 0px -6% 0px" });

  /* =======================================================
     Scroll: progress, nav, chapter dots, manifesto, arc
     ======================================================= */
  const nav = $("#nav"), chapters = $("#chapters"), progress = $(".progress span");
  const sections = $$("main > section[id]");
  const navLinks = $$(".nav__links a"), dots = $$("a", chapters);
  let lastY = scrollY, ticking = false;
  const themed = $$("main > section, .footer");
  function themeAt(y) {
    const sec = themed.find(s => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
    return !!sec && (sec.dataset.theme === "dark" || sec.classList.contains("footer"));
  }
  function onScroll() {
    ticking = false;
    const y = scrollY, vh = innerHeight, max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle("is-scrolled", y > 30);
    if (!nav.classList.contains("is-open")) nav.classList.toggle("is-hidden", y > lastY && y > vh * .9);
    lastY = y;
    const navDark = themeAt(30), midDark = themeAt(vh / 2);
    nav.classList.toggle("on-dark", !!navDark); chapters.classList.toggle("on-dark", !!midDark); cursor.classList.toggle("on-dark", !!midDark);
    let cur = sections[0].id;
    sections.forEach(s => { if (s.getBoundingClientRect().top < vh * .5) cur = s.id; });
    if (cur === "manifeste") cur = "prologue";
    navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${cur}`));
    dots.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${cur}`));
    if (words.length) {
      const r = manifesto.getBoundingClientRect();
      const p = clamp((vh * .8 - r.top) / (r.height + vh * .3)), lit = Math.floor(p * words.length * 1.05);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
    }
    updateArc();
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* Mobile menu */
  const burger = $("#burger");
  burger.addEventListener("click", () => { const o = nav.classList.toggle("is-open"); burger.setAttribute("aria-expanded", o); nav.classList.remove("is-hidden"); });
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }));

  /* =======================================================
     Init
     ======================================================= */
  $("#year").textContent = new Date().getFullYear();
  let rT;
  addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(() => { sizeFx(); movePill(); setRail(clamp(rx, railMax(), 0)); onScroll(); }, 120); });
  sizeFx();
  applyLang(lang);
  $$(".chapter-head, .edu-card, .sim__head, .contact__grid > *").forEach((el, i) => { el.classList.add("rv"); io.observe(el); });
  if (document.fonts) document.fonts.ready.then(() => { movePill(); onScroll(); });
  onScroll();
})();
