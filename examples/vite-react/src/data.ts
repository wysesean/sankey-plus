import type { SankeyLinkDatum, SankeyNodeDatum } from "sankey-plus";

export const nodes: SankeyNodeDatum[] = [
  { name: "Generation" },
  { name: "Transmission" },
  { name: "Industry" },
  { name: "Residential" },
  { name: "Commercial" },
  { name: "Transport" },
  { name: "Losses" }
];

export const links: SankeyLinkDatum[] = [
  { source: "Generation", target: "Transmission", value: 120 },
  { source: "Transmission", target: "Industry", value: 35 },
  { source: "Transmission", target: "Residential", value: 25 },
  { source: "Transmission", target: "Commercial", value: 20 },
  { source: "Transmission", target: "Transport", value: 15 },
  { source: "Transmission", target: "Losses", value: 10 },
  { source: "Industry", target: "Losses", value: 5 },
  { source: "Commercial", target: "Transport", value: 8 },
  { source: "Residential", target: "Commercial", value: 6 },
  { source: "Transport", target: "Losses", value: 4 }
];
