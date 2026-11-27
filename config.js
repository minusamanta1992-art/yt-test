/* =====================================================================
   DONS MC website: the ONLY file you need to edit.
   Keep these files in ONE folder: index.html, config.js, logo.png, background.jpg
   Change the text between the quotes, save, refresh.
   ===================================================================== */
window.SITE = {

  /* ---------------- EASY SETTINGS ---------------- */
  name: "DONS MC",
  tagline: "Survive, compete and build with friends.",
  description: "Lifesteal SMP, SMP, Economy and FFA & Practice on one fast network for Java and Bedrock players.",
  logo: "DONSMC Royal Minecraft Emblem.png",                // your logo file (same folder)
  background: "Moonlit Castle Over Misty Voxel Valleys.png",    // your background image (same folder). A default scene shows if the file is missing.
  color: "emerald",                // emerald, blue, gold, red, purple, cyan, pink, orange
  java:    { ip: "play.donsmc.qd.je", version: "1.21+" },
  bedrock: { ip: "play.donsmc.qd.je", port: 19179 },
  links: { discord: "https://discord.gg/XuqyWav8va", support: "https://discord.gg/XuqyWav8va", store: "", youtube: "" },  // store empty = "Store soon"
  effects: { intro: true, fog: true, fireflies: true, thunder: true, parallax: true, cursor: true, themeSwitcher: true },  // true = on, false = off

  /* ---------------- ADVANCED (optional) ---------------- */
  favicon: "logo.png", colors: {},   // colors: { accent: "#34d399", accent2: "#f2b45a" } overrides the preset
  introSeconds: 2.6,
  nav: [["Game modes", "#modes"], ["Why us", "#why"], ["How to join", "#join"], ["News", "#news"], ["FAQ", "#faq"]],
  status: { online: "players online", offline: "Server is offline", checking: "Checking server" },
  /* icons: heart, globe, coin, target, zap, shield, users, star, clock, server */
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
  news: { title: "Latest news", subtitle: "Updates, events and resets.", items: [
    { date: "2026-11-26", title: "Welcome to our new website", text: "Server info, live player count and community links in one place." },
    { date: "2026-11-20", title: "Season reset coming soon", text: "Watch Discord for the date and event prizes." } ] },
  faq: { title: "Questions, answered", items: [
    { q: "Can Bedrock players join?", a: "Yes. Use the Bedrock address and port shown in the join guide." },
    { q: "Do I need a premium account?", a: "Ask in Discord. Our staff will tell you which versions and accounts are supported." },
    { q: "How do I report a player?", a: "Open a ticket from the support link in Discord with proof and the player's name." },
    { q: "Is there a store?", a: "A store is coming soon. Updates will be posted on Discord." } ] },
  cta: { title: "Meet the community", text: "Get updates, find teammates and talk to staff on Discord.", button: "Join our Discord" },
  footer: "Not affiliated with Mojang or Microsoft."
};
