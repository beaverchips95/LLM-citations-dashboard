/**
 * data.js — Lesvos Woodcraft LLM Citations Tracker
 * Single source of truth for all dashboard data.
 *
 * Usage (browser script tag):  <script src="data.js"></script>  → window.DATA
 * Usage (CommonJS):            const { DATA } = require('./data.js');
 */

const DATA = {

  brand: "Lesvos Woodcraft",

  competitors: [
    "TimberCraft Co",
    "WoodWorks Studio",
    "OakHaven Designs",
    "PineCrest Creations"
  ],

  categories: [
    "Custom Furniture",
    "Handmade Wooden Bowls",
    "Artisan Cutting Boards",
    "Live Edge Tables",
    "Wood Home Decor",
    "Bespoke Shelving",
    "Reclaimed Wood Furniture"
  ],

  sources: ["ChatGPT", "Perplexity", "Claude", "Gemini", "Copilot"],

  sourceColors: {
    "ChatGPT":    "#10A37F",
    "Perplexity": "#6366F1",
    "Claude":     "#D97706",
    "Gemini":     "#1A73E8",
    "Copilot":    "#0078D4"
  },

  sourceIcons: {
    "ChatGPT":    "🤖",
    "Perplexity": "🔍",
    "Claude":     "🧠",
    "Gemini":     "✨",
    "Copilot":    "🪟"
  },

  // ── Tiered query tracker (used by the main dashboard table) ──────────────

  tiers: [
    { id: 1, label: "Tier 1", name: "Brand-Defensible Long-Tail",
      desc: "You should already be winning these",
      color: "#3A5940", light: "#EDF7EE" },
    { id: 2, label: "Tier 2", name: "Mission + Gift Intent",
      desc: "Your highest-conversion territory",
      color: "#8B5E3C", light: "#FDF4EC" },
    { id: 3, label: "Tier 3", name: "Commercial-Intent Product Queries",
      desc: "Harder, but worth tracking",
      color: "#C4700A", light: "#FEF8F0" },
    { id: 4, label: "Tier 4", name: "Category-Defining",
      desc: "Long game — track to measure brand authority growth",
      color: "#1565C0", light: "#EBF3FD" }
  ],

  // Citation rate (0–100%) per query, per LLM source
  queries: [
    // Tier 1 — brand-defensible, you should own these
    { tier: 1, query: "olive wood utensils made in Greece",
      citations: { ChatGPT: 94, Perplexity: 89, Claude: 96, Gemini: 81, Copilot: 86 },
      trend: "+8%", volume: "Medium" },
    { tier: 1, query: "refugee-made kitchen products",
      citations: { ChatGPT: 88, Perplexity: 91, Claude: 84, Gemini: 72, Copilot: 78 },
      trend: "+14%", volume: "Low" },
    { tier: 1, query: "handcrafted olive wood Lesvos",
      citations: { ChatGPT: 97, Perplexity: 93, Claude: 98, Gemini: 88, Copilot: 90 },
      trend: "+3%", volume: "Low" },

    // Tier 2 — mission & gift intent
    { tier: 2, query: "ethical customer appreciation gifts for clients",
      citations: { ChatGPT: 44, Perplexity: 38, Claude: 47, Gemini: 29, Copilot: 33 },
      trend: "+22%", volume: "High" },
    { tier: 2, query: "meaningful corporate gifts that give back",
      citations: { ChatGPT: 36, Perplexity: 41, Claude: 39, Gemini: 25, Copilot: 29 },
      trend: "+18%", volume: "High" },
    { tier: 2, query: "sustainable wedding gifts handmade",
      citations: { ChatGPT: 28, Perplexity: 33, Claude: 31, Gemini: 19, Copilot: 23 },
      trend: "+11%", volume: "Medium" },

    // Tier 3 — commercial product queries
    { tier: 3, query: "best olive wood cooking utensils",
      citations: { ChatGPT: 62, Perplexity: 56, Claude: 59, Gemini: 48, Copilot: 52 },
      trend: "+9%", volume: "High" },
    { tier: 3, query: "handmade wooden coffee scoop",
      citations: { ChatGPT: 48, Perplexity: 44, Claude: 51, Gemini: 36, Copilot: 40 },
      trend: "+6%", volume: "Medium" },
    { tier: 3, query: "olive wood charcuterie board handmade",
      citations: { ChatGPT: 72, Perplexity: 66, Claude: 69, Gemini: 58, Copilot: 63 },
      trend: "+15%", volume: "High" },

    // Tier 4 — category authority
    { tier: 4, query: "best ethical kitchenware brands",
      citations: { ChatGPT: 18, Perplexity: 23, Claude: 16, Gemini: 12, Copilot: 10 },
      trend: "+31%", volume: "High" }
  ],

  // ── Competitor citation rates by product category ────────────────────────
  // Of all LLM responses to a query in that category, what % mentioned the brand?

  citationRates: {
    "Custom Furniture": {
      "Lesvos Woodcraft":    72,
      "TimberCraft Co":      81,
      "WoodWorks Studio":    58,
      "OakHaven Designs":    44,
      "PineCrest Creations": 31
    },
    "Handmade Wooden Bowls": {
      "Lesvos Woodcraft":    88,
      "TimberCraft Co":      64,
      "WoodWorks Studio":    71,
      "OakHaven Designs":    52,
      "PineCrest Creations": 38
    },
    "Artisan Cutting Boards": {
      "Lesvos Woodcraft":    91,
      "TimberCraft Co":      55,
      "WoodWorks Studio":    48,
      "OakHaven Designs":    67,
      "PineCrest Creations": 42
    },
    "Live Edge Tables": {
      "Lesvos Woodcraft":    63,
      "TimberCraft Co":      77,
      "WoodWorks Studio":    85,
      "OakHaven Designs":    49,
      "PineCrest Creations": 55
    },
    "Wood Home Decor": {
      "Lesvos Woodcraft":    55,
      "TimberCraft Co":      60,
      "WoodWorks Studio":    70,
      "OakHaven Designs":    78,
      "PineCrest Creations": 45
    },
    "Bespoke Shelving": {
      "Lesvos Woodcraft":    79,
      "TimberCraft Co":      71,
      "WoodWorks Studio":    44,
      "OakHaven Designs":    39,
      "PineCrest Creations": 28
    },
    "Reclaimed Wood Furniture": {
      "Lesvos Woodcraft":    68,
      "TimberCraft Co":      74,
      "WoodWorks Studio":    66,
      "OakHaven Designs":    56,
      "PineCrest Creations": 61
    }
  },

  // Terms where Lesvos Woodcraft is ranked 2nd–5th but within striking distance of #1
  strikingDistance: [
    { term: "Custom Furniture",         rank: 2, gap: 9,  volume: "High",   trend: "↑" },
    { term: "Live Edge Tables",         rank: 3, gap: 22, volume: "High",   trend: "↑" },
    { term: "Wood Home Decor",          rank: 4, gap: 23, volume: "Medium", trend: "→" },
    { term: "Reclaimed Wood Furniture", rank: 2, gap: 6,  volume: "High",   trend: "↑" },
    { term: "Sustainable Wood Gifts",   rank: 3, gap: 14, volume: "Low",    trend: "↑" },
    { term: "Oak Serving Boards",       rank: 5, gap: 31, volume: "Medium", trend: "→" },
    { term: "Hand-Turned Wood Art",     rank: 4, gap: 18, volume: "Low",    trend: "↓" }
  ],

  // ── Monthly LLM citation counts ──────────────────────────────────────────

  llmCitations: {
    "ChatGPT":    { count: 589, pct: 37, trend: "+11%" },
    "Perplexity": { count: 418, pct: 26, trend: "+16%" },
    "Claude":     { count: 336, pct: 21, trend: "+9%"  },
    "Gemini":     { count: 176, pct: 11, trend: "-2%"  },
    "Copilot":    { count:  81, pct:  5, trend: "+3%"  }
  },

  // 30-day daily citation counts per LLM source (index 0 = 29 days ago, 29 = today)
  trendData: {
    "ChatGPT":    [22,25,21,27,26,29,24,32,28,27,31,35,29,33,36,38,33,37,41,35,39,43,37,41,44,39,43,47,41,45],
    "Perplexity": [14,16,17,19,17,21,19,23,21,24,22,26,24,23,26,28,26,30,28,26,30,32,28,32,30,34,32,30,34,36],
    "Claude":     [11,13,11,15,17,15,19,17,21,19,17,21,23,21,23,21,25,23,27,25,23,27,25,29,27,25,29,27,31,29],
    "Gemini":     [ 9, 8,10, 9,11,10, 9,11,10, 9,10,11,10,12,11,10,12,11,10,11,12,11,10,12,11,10,11,12,10,11],
    "Copilot":    [ 4, 5, 4, 6, 5, 6, 5, 6, 7, 6, 5, 7, 6, 7, 6, 8, 7, 6, 8, 7, 6, 7, 8, 7, 6, 8, 7, 8, 7, 6]
  },

  // Opportunity matrix — scored per search term
  // opp = composite opportunity score (0–100): volume × gap × trend
  opportunities: [
    { term: "Custom Furniture",         opp: 88, gap: 9,  vol: 95, priority: "critical" },
    { term: "Reclaimed Wood Furniture", opp: 85, gap: 6,  vol: 82, priority: "critical" },
    { term: "Live Edge Tables",         opp: 76, gap: 22, vol: 88, priority: "high"     },
    { term: "Handmade Wooden Bowls",    opp: 73, gap: 12, vol: 70, priority: "high"     },
    { term: "Wood Home Decor",          opp: 65, gap: 23, vol: 75, priority: "high"     },
    { term: "Bespoke Shelving",         opp: 60, gap: 21, vol: 55, priority: "medium"   },
    { term: "Artisan Cutting Boards",   opp: 52, gap: 9,  vol: 60, priority: "medium"   },
    { term: "Hand-Turned Wood Art",     opp: 38, gap: 18, vol: 40, priority: "low"      }
  ],

  // ── AI-generated recommendations (ordered by priority) ──────────────────

  recommendations: [
    {
      priority: "p1", label: "P1", tier: 2,
      title: "Push Tier 2: 'ethical customer appreciation gifts for clients'",
      body: "High purchase intent, +22% growth, and only 38% avg citation rate. This is your largest revenue gap. Create a dedicated B2B gift guide featuring your refugee-artisan story and Lesvos origin — LLMs cite narrative-rich landing pages preferentially in gift recommendation queries.",
      action: "Build gift guide page →",
      score: 96
    },
    {
      priority: "p1", label: "P1", tier: 3,
      title: "Convert Tier 3: 'olive wood charcuterie board handmade' → Owned",
      body: "At 66% avg citation this is your closest-to-winning commercial query. Two high-authority product reviews (food blogs, gift guides) will push you across the 75% ownership threshold. Highest-volume Tier 3 term — worth immediate focus.",
      action: "Target review outreach →",
      score: 91
    },
    {
      priority: "p2", label: "P2", tier: 1,
      title: "Reinforce Tier 1 on Gemini & Copilot — your weakest LLM sources",
      body: "Your Tier 1 queries are well-owned on ChatGPT (94–97%) and Claude (84–98%), but Gemini (72–88%) and Copilot (78–90%) lag. Add structured JSON-LD product schema and FAQ schema to your key pages — these sources index structured data most aggressively.",
      action: "Add schema markup →",
      score: 79
    },
    {
      priority: "p2", label: "P2", tier: 2,
      title: "Target Tier 2: 'meaningful corporate gifts that give back'",
      body: "Growing +18% and perfectly aligned with your brand mission. At 34% avg citation, one well-placed press feature in a corporate gifting or CSR publication could move this from striking → owned within 60 days.",
      action: "Pitch press coverage →",
      score: 74
    },
    {
      priority: "p3", label: "P3", tier: 3,
      title: "Build content for Tier 3: 'best olive wood cooking utensils'",
      body: "High volume, 55% avg citation. A comparison-style content series (video, blog, social) focusing on olive wood's antibacterial properties and Mediterranean provenance will give LLMs quotable authority signals that push you from striking → owning.",
      action: "Plan content series →",
      score: 62
    },
    {
      priority: "p4", label: "P4", tier: 4,
      title: "Seed Tier 4: 'best ethical kitchenware brands' — long game starts now",
      body: "Only 16% avg citation but +31% growth rate — the fastest rising query you track. Podcast appearances, sustainability awards, and press features in ethical lifestyle media all feed LLM authority over 6–18 months. Start seeding now.",
      action: "Plan authority campaign →",
      score: 48
    }
  ]

};

// CommonJS compat
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DATA };
}

// Browser global (script tag usage)
if (typeof window !== 'undefined') {
  window.DATA = DATA;
}
