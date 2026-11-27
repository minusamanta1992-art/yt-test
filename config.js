/* ================= EDIT THIS FILE ONLY. Every text, link, color and effect lives here. ================= */
window.SITE = {
  name: "DONS MC",
  tagline: "Survive, compete and build with friends.",
  description: "Lifesteal SMP, SMP, Economy and FFA & Practice on one fast network for Java and Bedrock players.",
  logo: "assets/logo.png", favicon: "assets/logo.png", background: "assets/background.jpg",
  color: "emerald",   // emerald, blue, gold, red, purple, cyan, pink, orange  (visitors can switch with the palette button)
  colors: {},         // optional override, e.g. { accent: "#34d399", accent2: "#f2b45a" }
  java: { ip: "play.donsmc.qd.je", version: "1.21+" },
  bedrock: { ip: "play.donsmc.qd.je", port: 19179 },
  links: { discord: "https://discord.gg/XuqyWav8va", support: "https://discord.gg/XuqyWav8va", store: "", youtube: "" }, // empty = hidden / "Store soon"
  effects: { intro: true, introSeconds: 2.6, fog: true, fireflies: true, thunder: true, parallax: true, cursor: true, themeSwitcher: true },
  nav: [["Game modes", "#modes"], ["Why us", "#why"], ["How to join", "#join"], ["FAQ", "#faq"]],
  status: { online: "players online", offline: "Server is offline", checking: "Checking server" },
  modes: { title: "Four ways to play", subtitle: "One account, one network. Switch modes any time.", items: [
    { icon: "heart", name: "Lifesteal SMP", tag: "Hardcore", desc: "Steal hearts from rivals and lose one every time you fall." },
    { icon: "globe", name: "SMP", tag: "Survival", desc: "Build, trade and explore with a friendly community." },
    { icon: "coin", name: "Economy", tag: "Trading", desc: "Run shops, sell resources and climb the money board." },
    { icon: "target", name: "FFA & Practice", tag: "PvP", desc: "Instant fights and duels to sharpen your combat." } ] },
  features: { title: "Built to be played every day", subtitle: "The basics, done properly.", items: [
    { icon: "zap", title: "Fast, stable servers", text: "Low latency hardware and DDoS protection keep every fight smooth.", wide: true },
    { icon: "users", title: "Java and Bedrock", text: "Friends on any device join the same network." },
    { icon: "shield", title: "Fair play", text: "Anti-cheat and clear rules keep every mode competitive." },
    { icon: "clock", title: "Active staff", text: "Reports and questions are answered every day." },
    { icon: "star", title: "Regular updates", text: "New seasons, events and features announced on Discord.", wide: true } ] },
  join: { title: "Join in under a minute", steps: {
    java: ["Open Minecraft Java Edition ({version})", "Choose Multiplayer, then Add Server", "Enter the address {ip}", "Save, select the server and press Join"],
    bedrock: ["Open Minecraft Bedrock Edition", "Choose Play, Servers, then Add Server", "Enter the address {bip} and port {port}", "Save and press Join"] } },
  faq: { title: "Questions, answered", items: [
    { q: "Can Bedrock players join?", a: "Yes. Use the Bedrock address and port shown in the join guide." },
    { q: "Do I need a premium account?", a: "Ask in Discord. Our staff will tell you which versions and accounts are supported." },
    { q: "How do I report a player?", a: "Open a ticket from the support link in Discord with proof and the player's name." },
    { q: "Is there a store?", a: "A store is coming soon. Updates will be posted on Discord." } ] },
  cta: { title: "Meet the community", text: "Get updates, find teammates and talk to staff on Discord.", button: "Join our Discord" },
  footer: "Not affiliated with Mojang or Microsoft."
};
