const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const tabButtons = document.querySelectorAll(".results-tab");
const tabPanels = document.querySelectorAll(".results-panel");
const revealItems = document.querySelectorAll(".reveal");
const motionZones = document.querySelectorAll("[data-motion-zone]");
const introScene = document.querySelector(".intro-scene");
const introStage = document.querySelector(".intro-stage");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const writeupCatalog = [
  {
    id: "l3m0nctf-2025",
    name: "L3m0nCTF 2025",
    description: "CTF from Amrita Vishwa Vidyapeetham, Coimbatore.",
    sourceStatus: "Verified raw markdown archive available.",
    available: true,
    challenges: [
      {
        id: "lastcall",
        title: "LastCall",
        category: "Forensics",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Forensics/LastCall/Readme.md",
      },
      {
        id: "layers-of-trust",
        title: "LayersOfTrust",
        category: "Forensics",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Forensics/LayersOfTrust/Readme.md",
      },
      {
        id: "lost-signal",
        title: "LostSignal",
        category: "Forensics",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Forensics/LostSignal/Readme.md",
      },
      {
        id: "nowhere-on-the-road",
        title: "NowhereOnTheRoad",
        category: "Forensics",
        difficulty: "Easy",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Forensics/NowhereOnTheRoad/Readme.md",
      },
      {
        id: "the-cicada-archives",
        title: "TheCicadaArchives",
        category: "Forensics",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Forensics/TheCicadaArchives/Readme.md",
      },
      {
        id: "agent45",
        title: "Agent45",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/agent45/writeup.md",
      },
      {
        id: "the-shadow-flag",
        title: "The Shadow Flag",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/The%20Shadow%20Flag/writeup.md",
      },
      {
        id: "the-locked-market",
        title: "The Locked Market",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/%20%20The%20Locked%20Market/FULL_WRITEUP.md",
      },
      {
        id: "secure-calculator-challenge",
        title: "Secure Calculator Challenge",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/l3mon_web_command_injection/writeup.md",
      },
      {
        id: "format-pie",
        title: "Format Pie",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/lemon%20pie/WRITEUP.md",
      },
      {
        id: "lemon-tube",
        title: "Lemon Tube",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/lemon%20tube/lemontube_writeup.md",
      },
      {
        id: "neonvault",
        title: "NeonVault",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/Akashvarunn14/Akash-challs-main/refs/heads/master/neon%20vault/writeup.md",
      },
      {
        id: "chromatic-trilogy",
        title: "Chromatic Trilogy",
        category: "Misc",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/Dineshkriss/L3m0nCTF_Challenges/refs/heads/main/Misc/chromatic_trilogy/README.md",
      },
      {
        id: "vault-breach",
        title: "VAULT BREACH",
        category: "Misc",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/Dineshkriss/L3m0nCTF_Challenges/refs/heads/main/Misc/vault/dist/WRITEUP.md",
      },
      {
        id: "jailer",
        title: "Jailer",
        category: "Pwn",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/Dineshkriss/L3m0nCTF_Challenges/refs/heads/main/Pwn/Jailer/JAILER_WRITEUP.md",
      },
      {
        id: "ouroboros-archive",
        title: "Ouroboros Archive",
        category: "Pwn",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/Dineshkriss/L3m0nCTF_Challenges/refs/heads/main/Pwn/ouroboros_archive/OUROBOROS_ARCHIVE_WRITEUP.md",
      },
      {
        id: "lockdown",
        title: "Lockdown",
        category: "Rev",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/Dineshkriss/L3m0nCTF_Challenges/refs/heads/main/REV/Lockdown/Lockdown_dev_info.md",
      },
      {
        id: "log4shell",
        title: "Log4Shell",
        category: "Rev",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/Dineshkriss/L3m0nCTF_Challenges/refs/heads/main/REV/Log4Shell/LOG4SHELL_WRITEUP.md",
      },
      {
        id: "internal-notation",
        title: "Internal Notation",
        category: "Crypto",
        difficulty: "Easy",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Cryptography/InternalNotation/Readme.md",
      },
      {
        id: "rotating-shadows",
        title: "Rotating Shadows",
        category: "Crypto",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/Cryptography/RotatingShadows/Readme.md",
      },
      {
        id: "hotel-bagavathi",
        title: "Hotel Bagavathi",
        category: "OSINT",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/rozariyomartin/L3m0nCTF2025-Writeups/refs/heads/main/OSINT/Hotel%20Bagavathi/Readme.md",
      },
      {
        id: "multiverse-of-madness",
        title: "Multiverse of Madness",
        category: "Web",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/PraneeshRV/L3m0nCTF2025-Challenges/refs/heads/main/Web/Multiverse_of_Madness_The_Fractured_Timeline/README.md",
      },
      {
        id: "forbidden-zanpakuto-compiler",
        title: "\u5c01\u5370\u89e3\u653e - Forbidden Zanpakut\u014d Compiler",
        category: "Web",
        difficulty: "Hard",
        live: true,
        url: "https://raw.githubusercontent.com/PraneeshRV/L3m0nCTF2025-Challenges/refs/heads/main/Web/%E5%B0%81%E5%8D%B0%E8%A7%A3%E6%94%BE_Forbidden_Zanpakut%C5%8D_Compiler/README.md",
      },
      {
        id: "echoes-of-the-abyss",
        title: "Echoes of the Abyss",
        category: "OSINT",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/PraneeshRV/L3m0nCTF2025-Challenges/refs/heads/main/OSINT/Echoes_of_the_Abyss/README.md",
      },
      {
        id: "shattered-echoes",
        title: "Shattered Echoes",
        category: "Misc",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/PraneeshRV/L3m0nCTF2025-Challenges/refs/heads/main/Misc/Shattered_Echoes/README.md",
      },
      {
        id: "bureaucratic-loophole",
        title: "The Bureaucratic Loophole",
        category: "AI",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/PraneeshRV/L3m0nCTF2025-Challenges/refs/heads/main/Unreleased%26Incomplete/AI/Bureaucratic%20loophole/SOLUTION.md",
      },
      {
        id: "project-mnemosyne",
        title: "Project Mnemosyne",
        category: "AI",
        difficulty: "Medium",
        live: true,
        url: "https://raw.githubusercontent.com/PraneeshRV/L3m0nCTF2025-Challenges/refs/heads/main/Unreleased%26Incomplete/AI/Project%20Mnemosyne/SOLUTION.md",
      },
    ],
  },
  {
    id: "aitu-ctf-2026",
    name: "AITU CTF 2026 Quals",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "aitu-ctf-2026-nounce", title: "Nounce", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/AITU-2026/cryptography/nounce.md" },
      { id: "aitu-ctf-2026-nouncee", title: "Nouncee", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/AITU-2026/cryptography/nouncee.md" },
    ],
  },
  {
    id: "htb-chennai-2026",
    name: "HTB Chennai 2026",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "htb-chennai-2026-delis", title: "Delis", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/HTB_Chennai_2026/rev/delis.md" },
      { id: "htb-chennai-2026-el-pablo", title: "El Pablo", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/HTB_Chennai_2026/rev/El_pablo.md" },
    ],
  },
  {
    id: "tamu-ctf-2026",
    name: "TAMU CTF 2026",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "tamu-ctf-2026-bad-apple", title: "Bad Apple", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/TAMU_CTF_2026/web/bad_apple.md" },
      { id: "tamu-ctf-2026-broken-website", title: "Broken Website", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/TAMU_CTF_2026/web/Broken_Website.md" },
    ],
  },
  {
    id: "texsaw-2026",
    name: "TexSAW 2026",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from both TexSaw_2026 and texsaw_2026 folders in kvprasannakumar05/CTF_writeups.",
    available: true,
    challenges: [
      { id: "texsaw-2026-lost-my-keys", title: "Lost My Keys", category: "Forensics", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/TexSaw_2026/forensics/Lost_my_keys.md" },
      { id: "texsaw-2026-model-heist", title: "Model Heist", category: "Misc", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/TexSaw_2026/misc/Model_Heist.md" },
      { id: "texsaw-2026-return-to-sender", title: "Return To Sender", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/texsaw_2026/pwn/return_to_Sender.md" },
      { id: "texsaw-2026-what-time", title: "What Time", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/texsaw_2026/pwn/what_time.md" },
      { id: "texsaw-2026-broken-quest", title: "Broken Quest", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/texsaw_2026/rev/broken_quest.md" },
      { id: "texsaw-2026-ragebait", title: "Ragebait", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/texsaw_2026/rev/ragebait.md" },
      { id: "texsaw-2026-switcher", title: "Switcher", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/texsaw_2026/rev/switcher.md" },
    ],
  },
  {
    id: "umassctf-2026",
    name: "UMassCTF 2026",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "umassctf-2026-rooster", title: "Rooster", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/crypto/rooster.md" },
      { id: "umassctf-2026-the-accursed-lego-bin", title: "The Accursed Lego Bin", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/crypto/The%20Accursed%20Lego%20Bin%20.md" },
      { id: "umassctf-2026-unfinished-game", title: "Unfinished Game", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/crypto/unfinished_game.md" },
      { id: "umassctf-2026-lost-n-found", title: "Lost N Found", category: "Forensics", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/forensics/lost_n_found.md" },
      { id: "umassctf-2026-ninja-nerd", title: "Ninja Nerd", category: "Forensics", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/forensics/ninja_nerd.md" },
      { id: "umassctf-2026-brickbybrick", title: "Brickbybrick", category: "Hardware", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/hardware/brickbybrick.md" },
      { id: "umassctf-2026-smart-brick-v2", title: "Smart Brick V2", category: "Hardware", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/hardware/smart_brick_v2.md" },
      { id: "umassctf-2026-knex", title: "Knex", category: "Misc", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/misc/knex.md" },
      { id: "umassctf-2026-take-a-slice", title: "Take A Slice", category: "Misc", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/misc/take-a-slice.md" },
      { id: "umassctf-2026-bad-eraser", title: "Bad Eraser", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/pwn/bad_eraser.md" },
      { id: "umassctf-2026-brick-city-office-space", title: "Brick City Office Space", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/pwn/Brick%20City%20Office%20Space.md" },
      { id: "umassctf-2026-bitflip", title: "Bitflip", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/reverse/bitflip.md" },
      { id: "umassctf-2026-lego-clicker", title: "Lego Clicker", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/reverse/lego_clicker.md" },
      { id: "umassctf-2026-block-city-times", title: "Block City Times", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/web/Block%20City%20Times.md" },
      { id: "umassctf-2026-browser-boss-fight", title: "BrOWSER BOSS FIGHT", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/web/BrOWSER%20BOSS%20FIGHT.md" },
      { id: "umassctf-2026-order66", title: "Order66", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/UMASS_2026/web/order66.md" },
    ],
  },
  {
    id: "apoorvctf-2026",
    name: "ApoorvCTF 2026",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "apoorvctf-2026-a-golden-experience-requiem", title: "A Golden Experience Requiem", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/apoorv_ctf/pwn/A_Golden_Experience_Requiem%20.md" },
      { id: "apoorvctf-2026-abyss", title: "Abyss", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/apoorv_ctf/pwn/abyss.md" },
      { id: "apoorvctf-2026-draw-me", title: "Draw Me", category: "Rev", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/apoorv_ctf/reverse/draw_me.md" },
      { id: "apoorvctf-2026-cosplayers-delight", title: "Cosplayer's Delight", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/apoorv_ctf/web/cosplayer%27s_delight.md" },
      { id: "apoorvctf-2026-sugar-heist", title: "Sugar Heist", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/apoorv_ctf/web/sugar_heist.md" },
      { id: "apoorvctf-2026-typing-tycoon", title: "Typing Tycoon", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/apoorv_ctf/web/typing_tycoon.md" },
    ],
  },
  {
    id: "crest-ctf",
    name: "CREST CTF",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "crest-ctf-next-token", title: "Next Token", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/crest/cryptography/next_token.md" },
      { id: "crest-ctf-transmission", title: "Transmission", category: "Crypto", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/crest/cryptography/transmission.md" },
      { id: "crest-ctf-false-flag", title: "False Flag", category: "General", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/crest/False_flag.md" },
    ],
  },
  {
    id: "utctf-2026",
    name: "UTCTF 2026",
    description: "Writeups imported from the CTF_writeups GitHub archive.",
    sourceStatus: "Raw markdown links are generated from kvprasannakumar05/CTF_writeups on the main branch.",
    available: true,
    challenges: [
      { id: "utctf-2026-insanity-check", title: "Insanity Check", category: "General", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/utctf_2026/insanity_check.md" },
      { id: "utctf-2026-rude-guard", title: "Rude Guard", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/utctf_2026/pwn/rude_guard.md" },
      { id: "utctf-2026-small-blind", title: "Small Blind", category: "Pwn", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/utctf_2026/pwn/small_blind.md" },
      { id: "utctf-2026-breakthebank-writeup", title: "BreakTheBank Writeup", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/utctf_2026/web/BreakTheBank_Writeup.md" },
      { id: "utctf-2026-crab-mentality", title: "Crab Mentality", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/utctf_2026/web/crab_mentality.md" },
      { id: "utctf-2026-time-to-pretend", title: "Time To Pretend", category: "Web", difficulty: "Unspecified", live: true, url: "https://raw.githubusercontent.com/kvprasannakumar05/CTF_writeups/refs/heads/main/utctf_2026/web/time_to_pretend.md" },
    ],
  },
];

const archiveElements = {
  section: document.querySelector(".section-writeups"),
  rail: document.getElementById("writeups-rail"),
  note: document.getElementById("writeups-note"),
  title: document.getElementById("writeups-event-title"),
  description: document.getElementById("writeups-event-description"),
  availability: document.getElementById("writeups-event-availability"),
  count: document.getElementById("writeups-event-count"),
  categories: document.getElementById("writeups-event-categories"),
  filters: document.getElementById("writeups-filters"),
  grid: document.getElementById("writeups-grid"),
};

const readerElements = {
  page: document.querySelector(".writeup-route"),
  event: document.getElementById("writeup-route-event"),
  title: document.getElementById("writeup-route-title"),
  summary: document.getElementById("writeup-route-summary"),
  category: document.getElementById("writeup-route-category"),
  difficulty: document.getElementById("writeup-route-difficulty"),
  availability: document.getElementById("writeup-route-availability"),
  sourceStatus: document.getElementById("writeup-route-source-status"),
  status: document.getElementById("writeup-route-status"),
  content: document.getElementById("writeup-route-content"),
  source: document.getElementById("writeup-route-source"),
  toc: document.getElementById("writeup-route-toc"),
  progress: document.getElementById("writeup-progress-bar"),
};

const archiveState = {
  activeCtfId: writeupCatalog[0]?.id ?? null,
  activeFilter: "All",
};

const markdownCache = new Map();
let readerTocObserver = null;
let scrollEffectsFrame = 0;

function activateTab(button) {
  const targetId = button.dataset.tabTarget;

  tabButtons.forEach((tab) => {
    const isActive = tab === button;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

function closeNav() {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
  body.classList.remove("nav-open");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function buildWriteupUrl(ctfId, challengeId) {
  const params = new URLSearchParams({
    ctf: ctfId,
    challenge: challengeId,
  });

  return `writeup.html?${params.toString()}`;
}

function getCtfById(ctfId) {
  return writeupCatalog.find((ctf) => ctf.id === ctfId) ?? null;
}

function getChallengeById(ctf, challengeId) {
  return ctf?.challenges.find((challenge) => challenge.id === challengeId) ?? null;
}

function getActiveArchiveCtf() {
  return getCtfById(archiveState.activeCtfId) ?? writeupCatalog[0];
}

function getChallengeCategories(ctf) {
  return [...new Set(ctf.challenges.map((challenge) => challenge.category))];
}

function getFilteredChallenges(ctf) {
  if (archiveState.activeFilter === "All") {
    return ctf.challenges;
  }

  return ctf.challenges.filter((challenge) => challenge.category === archiveState.activeFilter);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateIntroScene() {
  if (!body.classList.contains("home-page") || !introScene) {
    return;
  }

  if (prefersReducedMotion) {
    body.style.setProperty("--intro-progress", "1");
    body.style.setProperty("--site-reveal", "1");
    body.style.setProperty("--intro-backdrop-opacity", "0");
    body.style.setProperty("--intro-easter-opacity", "0");
    body.style.setProperty("--intro-easter-shift", "1");
    body.classList.add("site-chrome-live", "intro-complete");
    return;
  }

  const stageProgress = introStage
    ? clamp((-introStage.getBoundingClientRect().top) / Math.max(introStage.offsetHeight, 1), 0, 1)
    : clamp(window.scrollY / Math.max(window.innerHeight, 1), 0, 1);
  const progress = stageProgress;
  const reveal = clamp((progress - 0.78) / 0.18, 0, 1);
  const backdropOpacity = 1 - clamp((progress - 0.18) / 0.58, 0, 1);
  const easterRise = clamp((progress - 0.16) / 0.16, 0, 1);
  const easterFall = 1 - clamp((progress - 0.68) / 0.16, 0, 1);
  const easterOpacity = clamp(easterRise * easterFall, 0, 1);
  const easterShift = clamp((progress - 0.2) / 0.42, 0, 1);

  body.style.setProperty("--intro-progress", progress.toFixed(4));
  body.style.setProperty("--site-reveal", reveal.toFixed(4));
  body.style.setProperty("--intro-backdrop-opacity", backdropOpacity.toFixed(4));
  body.style.setProperty("--intro-easter-opacity", easterOpacity.toFixed(4));
  body.style.setProperty("--intro-easter-shift", easterShift.toFixed(4));
  body.classList.toggle("site-chrome-live", reveal > 0.08);
  body.classList.toggle("intro-complete", progress > 0.985);
}

function setReaderState(message, tone = "default") {
  if (!readerElements.status) {
    return;
  }

  readerElements.status.textContent = message;
  readerElements.status.className = "viewer-state";

  if (tone === "loading") {
    readerElements.status.classList.add("is-loading");
  } else if (tone === "error") {
    readerElements.status.classList.add("is-error");
  }
}

function renderArchiveRail() {
  if (!archiveElements.rail) {
    return;
  }

  archiveElements.rail.innerHTML = "";

  writeupCatalog.forEach((ctf) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "writeups-rail-button";
    button.classList.toggle("is-active", ctf.id === archiveState.activeCtfId);
    button.classList.toggle("is-offline", !ctf.available);
    button.innerHTML = `
      <span class="writeups-rail-name">${escapeHtml(ctf.name)}</span>
      <span class="writeups-rail-meta">
        <span>${ctf.challenges.length} challenges</span>
        <span class="writeups-rail-state">${ctf.available ? "Live" : "Archive"}</span>
      </span>
    `;

    button.addEventListener("click", () => {
      if (archiveState.activeCtfId === ctf.id) {
        return;
      }

      selectArchiveCtf(ctf.id);
    });

    archiveElements.rail.appendChild(button);
  });
}

function renderArchiveSummary(ctf) {
  if (!archiveElements.title) {
    return;
  }

  const categories = getChallengeCategories(ctf);
  const liveCount = ctf.challenges.filter((challenge) => challenge.live).length;

  archiveElements.title.textContent = ctf.name;
  archiveElements.description.textContent = ctf.description;
  archiveElements.availability.textContent = ctf.available ? "Live Routes" : "Archive Notes";
  archiveElements.count.textContent = `${ctf.challenges.length} tracked / ${liveCount} live`;
  archiveElements.categories.textContent = `${categories.length} categories`;
  archiveElements.note.textContent = ctf.sourceStatus;
}

function renderArchiveFilters(ctf) {
  if (!archiveElements.filters) {
    return;
  }

  const categories = ["All", ...getChallengeCategories(ctf)];
  archiveElements.filters.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "writeups-filter";
    button.textContent = category;
    button.classList.toggle("is-active", category === archiveState.activeFilter);

    button.addEventListener("click", () => {
      if (archiveState.activeFilter === category) {
        return;
      }

      archiveState.activeFilter = category;
      renderArchiveFilters(ctf);
      renderArchiveGrid(ctf);
    });

    archiveElements.filters.appendChild(button);
  });
}

function renderArchiveGrid(ctf) {
  if (!archiveElements.grid) {
    return;
  }

  const filteredChallenges = getFilteredChallenges(ctf);
  archiveElements.grid.innerHTML = "";

  if (!filteredChallenges.length) {
    archiveElements.grid.innerHTML = `<div class="writeups-empty">No challenges match the current filter.</div>`;
    return;
  }

  filteredChallenges.forEach((challenge, index) => {
    const card = document.createElement("a");
    card.href = buildWriteupUrl(ctf.id, challenge.id);
    card.className = "writeup-card";
    card.classList.toggle("is-disabled", !challenge.live);
    card.innerHTML = `
      <span class="writeup-card-top">
        <span class="writeup-chip">${escapeHtml(challenge.category)}</span>
        <span class="writeup-chip writeup-chip-difficulty">${escapeHtml(challenge.difficulty)}</span>
      </span>
      <h4>${escapeHtml(challenge.title)}</h4>
      <p>${
        challenge.live
          ? "Open a dedicated writeup page with clean markdown rendering and source metadata."
          : "Open a dedicated archive page that explains the current source-verification state."
      }</p>
      <span class="writeup-card-status">${challenge.live ? "Open writeup page" : "Open archive note"}</span>
    `;

    archiveElements.grid.appendChild(card);

    requestAnimationFrame(() => {
      card.style.transitionDelay = `${Math.min(index * 28, 220)}ms`;
      card.classList.add("is-mounted");
    });
  });
}

function selectArchiveCtf(ctfId) {
  archiveState.activeCtfId = ctfId;
  archiveState.activeFilter = "All";

  const ctf = getActiveArchiveCtf();
  renderArchiveRail();
  renderArchiveSummary(ctf);
  renderArchiveFilters(ctf);
  renderArchiveGrid(ctf);
}

function initArchivePage() {
  if (!archiveElements.section || !archiveElements.rail) {
    return;
  }

  selectArchiveCtf(archiveState.activeCtfId);
}

async function fetchMarkdown(url) {
  if (markdownCache.has(url)) {
    return markdownCache.get(url);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const markdown = await response.text();
  markdownCache.set(url, markdown);
  return markdown;
}

function renderMarkdownInto(container, markdown) {
  if (!container) {
    return;
  }

  let html = `<pre>${escapeHtml(markdown)}</pre>`;

  if (window.marked && typeof window.marked.parse === "function") {
    html = window.marked.parse(markdown, {
      gfm: true,
      breaks: false,
      headerIds: false,
      mangle: false,
    });
  }

  if (window.DOMPurify) {
    html = window.DOMPurify.sanitize(html);
  }

  container.innerHTML = html;

  container.querySelectorAll("a").forEach((link) => {
    link.target = "_blank";
    link.rel = "noreferrer noopener";
  });

  container.querySelectorAll("img").forEach((image) => {
    image.loading = "lazy";
    image.decoding = "async";
  });
}

function clearReaderTocObserver() {
  if (readerTocObserver) {
    readerTocObserver.disconnect();
    readerTocObserver = null;
  }
}

function buildReaderToc() {
  if (!readerElements.toc || !readerElements.content) {
    return;
  }

  clearReaderTocObserver();
  readerElements.toc.innerHTML = "";

  const headings = [...readerElements.content.querySelectorAll("h1, h2, h3")].filter((heading) =>
    heading.textContent.trim()
  );

  if (!headings.length) {
    readerElements.toc.innerHTML = `<p class="writeup-route-toc-empty">No section headings available in this writeup.</p>`;
    return;
  }

  const seenIds = new Set();
  headings.forEach((heading, index) => {
    let id = heading.id || slugify(heading.textContent) || `section-${index + 1}`;
    while (seenIds.has(id)) {
      id = `${id}-${index + 1}`;
    }
    seenIds.add(id);
    heading.id = id;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.className = `writeup-route-toc-link level-${heading.tagName.toLowerCase()}`;
    link.textContent = heading.textContent.trim();
    readerElements.toc.appendChild(link);
  });

  if (prefersReducedMotion) {
    return;
  }

  const tocLinks = [...readerElements.toc.querySelectorAll(".writeup-route-toc-link")];
  readerTocObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        tocLinks.forEach((link) =>
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 1,
    }
  );

  headings.forEach((heading) => readerTocObserver.observe(heading));
}

function renderReaderNotFound(message) {
  if (!readerElements.title || !readerElements.content) {
    return;
  }

  clearReaderTocObserver();
  if (readerElements.event) {
    readerElements.event.textContent = "Writeup Route";
  }
  readerElements.title.textContent = "Writeup unavailable";
  readerElements.summary.textContent = message;
  readerElements.category.textContent = "Unknown";
  readerElements.difficulty.textContent = "Unknown";
  readerElements.availability.textContent = "Unavailable";
  readerElements.sourceStatus.textContent = message;
  if (readerElements.source) {
    readerElements.source.hidden = true;
    readerElements.source.removeAttribute("href");
  }
  readerElements.content.innerHTML = `<div class="writeups-empty">${escapeHtml(message)}</div>`;
  readerElements.toc.innerHTML = `<p class="writeup-route-toc-empty">No contents available.</p>`;
  setReaderState(message, "error");
  document.title = "Writeup unavailable | Team Hunter";
}

function renderReaderUnavailable(ctf, challenge) {
  clearReaderTocObserver();
  readerElements.content.innerHTML = `
    <div class="writeups-empty">
      ${escapeHtml(
        `${challenge.title} is listed under ${ctf.name}, but the referenced raw markdown source was unavailable during verification.`
      )}
    </div>
  `;
  readerElements.toc.innerHTML = `<p class="writeup-route-toc-empty">This archive note has no section map.</p>`;
  if (readerElements.source) {
    readerElements.source.hidden = true;
    readerElements.source.removeAttribute("href");
  }
  setReaderState("Source unavailable for this archive entry.", "error");
}

function renderReaderMeta(ctf, challenge) {
  if (!readerElements.title) {
    return;
  }

  readerElements.event.textContent = ctf.name;
  readerElements.title.textContent = challenge.title;
  readerElements.summary.textContent = challenge.live
    ? "This page renders the original Team Hunter writeup cleanly inside the site while preserving the source link."
    : "This page preserves the archive structure for the challenge, but the source markdown is currently unavailable.";
  readerElements.category.textContent = challenge.category;
  readerElements.difficulty.textContent = challenge.difficulty;
  readerElements.availability.textContent = challenge.live ? "Live source" : "Source unavailable";
  readerElements.sourceStatus.textContent = ctf.sourceStatus;

  if (readerElements.source) {
    if (challenge.live && challenge.url) {
      readerElements.source.hidden = false;
      readerElements.source.href = challenge.url;
    } else {
      readerElements.source.hidden = true;
      readerElements.source.removeAttribute("href");
    }
  }

  document.title = `${challenge.title} | ${ctf.name} | Team Hunter`;
}

async function initReaderPage() {
  if (!readerElements.page) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const ctfId = params.get("ctf") ?? writeupCatalog[0]?.id;
  const challengeId = params.get("challenge");
  const ctf = getCtfById(ctfId);
  const fallbackChallenge = ctf?.challenges.find((challenge) => challenge.live) ?? ctf?.challenges[0];
  const challenge = challengeId ? getChallengeById(ctf, challengeId) : fallbackChallenge;

  if (!ctf || !challenge) {
    renderReaderNotFound("The requested writeup page could not be resolved from the current Team Hunter archive.");
    return;
  }

  renderReaderMeta(ctf, challenge);

  if (!challenge.live || !challenge.url) {
    renderReaderUnavailable(ctf, challenge);
    return;
  }

  setReaderState("Loading writeup...", "loading");

  try {
    const markdown = await fetchMarkdown(challenge.url);
    renderMarkdownInto(readerElements.content, markdown);
    buildReaderToc();
    setReaderState("Writeup loaded.");
  } catch (error) {
    readerElements.content.innerHTML = `
      <div class="writeups-empty">
        Could not load the original markdown source for this writeup page. Use the archive link and try again later.
      </div>
    `;
    readerElements.toc.innerHTML = `<p class="writeup-route-toc-empty">No contents available.</p>`;
    setReaderState(`Load failed: ${error.message}`, "error");
  }
}

function updateWriteupsProgress() {
  if (!archiveElements.section) {
    return;
  }

  const rect = archiveElements.section.getBoundingClientRect();
  const travelled = window.innerHeight - rect.top;
  const total = rect.height + window.innerHeight;
  const progress = Math.min(Math.max(travelled / total, 0), 1);

  archiveElements.section.style.setProperty("--writeups-progress", progress.toFixed(4));
}

function updateMotionZones() {
  if (!motionZones.length || prefersReducedMotion) {
    return;
  }

  const viewportHeight = window.innerHeight;
  const viewportMidpoint = viewportHeight * 0.5;
  const travelRange = Math.max(viewportHeight * 0.9, 1);

  motionZones.forEach((zone) => {
    const rect = zone.getBoundingClientRect();
    const zoneMidpoint = rect.top + rect.height * 0.5;
    const progress = clamp((viewportMidpoint - zoneMidpoint) / travelRange, -1, 1);
    const visibility = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);

    zone.style.setProperty("--zone-progress", progress.toFixed(4));
    zone.style.setProperty("--zone-visibility", visibility.toFixed(4));
  });
}

function updateReaderProgress() {
  if (!readerElements.page || !readerElements.progress) {
    return;
  }

  const root = document.documentElement;
  const maxScroll = root.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;

  readerElements.progress.style.transform = `scaleX(${progress.toFixed(4)})`;
  readerElements.page.style.setProperty("--reader-progress", progress.toFixed(4));
}

function queueScrollEffects() {
  if (scrollEffectsFrame) {
    return;
  }

  scrollEffectsFrame = window.requestAnimationFrame(() => {
    updateIntroScene();
    updateMotionZones();
    updateWriteupsProgress();
    updateReaderProgress();
    scrollEffectsFrame = 0;
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    body.classList.toggle("nav-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeNav();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button));

  button.addEventListener("keydown", (event) => {
    const currentIndex = Array.from(tabButtons).indexOf(button);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabButtons.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
    } else {
      return;
    }

    event.preventDefault();
    tabButtons[nextIndex].focus();
    activateTab(tabButtons[nextIndex]);
  });
});

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
  window.addEventListener("scroll", queueScrollEffects, { passive: true });
  window.addEventListener("resize", queueScrollEffects);
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

initArchivePage();
initReaderPage();
updateIntroScene();
updateMotionZones();
updateWriteupsProgress();
updateReaderProgress();

if (window.lucide) {
  window.lucide.createIcons();
}
