import type { SankeyGraph } from "./index";

export declare function adjustSankeySize(
  inputGraph: SankeyGraph,
  useManualScale?: boolean,
  nodePadding?: number,
  nodeWidth?: number,
  scaleDomain?: [number, number],
  scaleRange?: [number, number],
  circularLinkPortionTopBottom?: number,
  circularLinkPortionLeftRight?: number,
  scale?: number,
  baseRadius?: number
): SankeyGraph;
