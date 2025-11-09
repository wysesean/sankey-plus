import type { SankeyGraph } from "./index";

export declare function adjustGraphExtents(
  inputGraph: SankeyGraph,
  chartPadding: number,
  svgHeight: number,
  svgWidth: number,
  nodeWidth: number
): SankeyGraph;
