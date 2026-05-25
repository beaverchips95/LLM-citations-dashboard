/**
 * data.js — Lesvos Woodcraft LLM Citations Tracker
 * Mock dataset. Can be imported as an ES module or used standalone.
 * The same data object is also inlined in index.html for standalone operation.
 *
 * Usage (ES module):
 *   import { DATA } from './data.js';
 *
 * Usage (CommonJS):
 *   const { DATA } = require('./data.js');
 */

export const DATA = {

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

  /**
   * Citation rate (0–100%) per search category, per brand.
   * Represents: of all LLM responses to a query in that category,
   * what % mentioned the brand by name?
   */
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

  /**
   * Striking distance terms — where the brand is ranked 2nd–5th
   * but within striking distance of the #1 position.
   * gap = citation rate difference to #1 brand for this term.
   */
  strikingDistance: [
    { term: "Custom Furniture",         rank: 2, gap: 9,  volume: "High",   trend: "↑" },
    { term: "Live Edge Tables",         rank: 3, gap: 22, volume: "High",   trend: "↑" },
    { term: "Wood Home Decor",          rank: 4, gap: 23, volume: "Medium", trend: "→" },
    { term: "Reclaimed Wood Furniture", rank: 2, gap: 6,  volume: "High",   trend: "↑" },
    { term: "Sustainable Wood Gifts",   rank: 3, gap: 14, volume: "Low",    trend: "↑" },
    { term: "Oak Serving Boards",       rank: 5, gap: 31, volume: "Medium", trend: "→" },
    { term: "Hand-Turned Wood Art",     rank: 4, gap: 18, volume: "Low",    trend: "↓" }
  ],

  /**
   * Monthly citation counts per LLM source.
   * pct = percentage share of total brand citations.
   */
  llmCitations: {
    "ChatGPT":    { count: 387, pct: 31, trend: "+5%"  },
    "Perplexity": { count: 298, pct: 24, trend: "+12%" },
    "Claude":     { count: 241, pct: 19, trend: "+8%"  },
    "Gemini":     { count: 218, pct: 17, trend: "-3%"  },
    "Copilot":    { count: 112, pct: 9,  trend: "+1%"  }
  },

  /**
   * 30-day daily citation counts per LLM source.
   * Index 0 = 29 days ago, index 29 = today.
   */
  trendData: {
    "ChatGPT":    [9,11,8,13,12,14,11,16,14,13,15,18,14,16,17,19,16,18,20,17,19,21,18,20,22,19,21,23,20,22],
    "Perplexity": [6,7,8,9,8,10,9,11,10,12,11,13,12,11,13,14,13,15,14,13,15,16,14,16,15,17,16,15,17,18],
    "Claude":     [5,6,5,7,8,7,9,8,10,9,8,10,11,10,11,10,12,11,13,12,11,13,12,14,13,12,14,13,15,14],
    "Gemini":     [8,7,9,8,10,9,8,10,9,8,9,10,9,11,10,9,11,10,9,10,11,10,9,11,10,9,10,11,9,10],
    "Copilot":    [2,3,2,4,3,4,3,4,5,4,3,5,4,5,4,6,5,4,6,5,4,5,6,5,4,6,5,6,5,4]
  },

  /**
   * Opportunity matrix — scored per search term.
   * opp   = composite opportunity score (0–100): volume × gap × trend
   * gap   = citation gap to #1 brand (pts)
   * vol   = estimated query volume index (0–100)
   * priority = critical | high | medium | low
   */
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

  /**
   * AI-generated recommendations, ordered by priority (p1 = highest).
   * score = opportunity score used for ranking (0–100).
   */
  recommendations: [
    {
      priority: "p1",
      label: "P1",
      title: "Target 'Custom Furniture' — #2, only 9pts behind",
      body: "Lesvos Woodcraft is ranked #2 for 'Custom Furniture' with a gap of just 9 points to TimberCraft Co. Publish 3 long-form LLM-optimised content pieces covering custom commission process, material sourcing, and portfolio showcases.",
      action: "Create content brief →",
      score: 94
    },
    {
      priority: "p1",
      label: "P1",
      title: "Capitalise on 'Reclaimed Wood Furniture' momentum",
      body: "Gap to #1 is only 6 points with a strong upward trend. Reclaimed wood queries are growing 18% month-over-month across all LLMs. Add structured data markup and FAQ schema to existing product pages.",
      action: "Update schema markup →",
      score: 91
    },
    {
      priority: "p2",
      label: "P2",
      title: "Expand Perplexity presence for 'Live Edge Tables'",
      body: "Perplexity citations for 'Live Edge Tables' are up 22% this month, but Lesvos is only #3. Perplexity favours citations from review sites and forums. Engage with woodworking community posts and request reviews.",
      action: "Outreach strategy →",
      score: 78
    },
    {
      priority: "p2",
      label: "P2",
      title: "Strengthen ChatGPT visibility for 'Wood Home Decor'",
      body: "ChatGPT is the highest-volume LLM source (31% share). For 'Wood Home Decor', Lesvos ranks #4. Adding detailed product descriptions with semantic richness could improve OpenAI's training data alignment.",
      action: "Optimise product pages →",
      score: 72
    },
    {
      priority: "p3",
      label: "P3",
      title: "Develop 'Sustainable Wood Gifts' content cluster",
      body: "This emerging term shows a steady upward trend and Lesvos is at #3. Creating a dedicated gift guide with gifting use cases and eco-credentials would align well with LLM citation patterns.",
      action: "Plan content cluster →",
      score: 61
    },
    {
      priority: "p4",
      label: "P4",
      title: "Monitor 'Bespoke Shelving' as competitor activity increases",
      body: "Lesvos holds #1 for Bespoke Shelving (79% citation rate) but TimberCraft Co has been publishing aggressively in this category. Set up monitoring alerts for any ranking changes.",
      action: "Set up alert →",
      score: 55
    }
  ]
};

// CommonJS compat shim
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DATA };
}
