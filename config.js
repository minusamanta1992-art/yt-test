/* ===== Edit everything here. No other file needs to change. ===== */
window.SITE = {
  name: "DONS MC",
  tagline: "One network. Four ways to play.",
  description: "Lifesteal SMP, SMP, Economy and FFA & Practice, run on fast hardware by a team that is online every day.",
  logo: "assets/logo.png",              // put your emblem here (png/svg)
  favicon: "assets/logo.png",
  background: "assets/background.jpg",  // put your castle background here
  java:    { ip: "play.donsmc.qd.je", version: "1.21+" },
  bedrock: { ip: "play.donsmc.qd.je", port: 19179 },
  links: { discord: "https://discord.gg/yourinvite", support: "https://discord.gg/yourinvite", youtube: "", store: "" }, // empty store = "Store soon"
  colors: { accent: "#34d399", accent2: "#f2b45a", bg: "#050807" },
  effects: { intro: true, fog: true, fireflies: true, thunder: true, parallax: true },
  modes: [
    { name: "Lifesteal SMP", tag: "Hardcore", desc: "Take hearts from rivals, lose them when you fall. Every fight matters." },
    { name: "SMP", tag: "Survival", desc: "Build, trade and explore with a friendly community." },
    { name: "Economy", tag: "Trading", desc: "Run shops, sell resources and climb the money leaderboard." },
    { name: "FFA & Practice", tag: "PvP", desc: "Jump into instant fights and sharpen your combat." }
  ],
  whyTitle: "Built to be played every day",
  features: [
    { t: "Low-latency servers", d: "Fast hardware and DDoS protection keep gameplay smooth." },
    { t: "Java and Bedrock", d: "Friends on any device can join the same network." },
    { t: "Active staff", d: "Reports and questions are handled quickly, every day." },
    { t: "Fair play", d: "Anti-cheat and clear rules keep every mode competitive." }
  ],
  community: { title: "Meet the community", text: "Get updates, find teammates and talk to staff on Discord.", button: "Join our Discord" }
};
