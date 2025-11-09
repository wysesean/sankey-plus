import type { NodeIdAccessor, SankeyGraph } from "./index";

export declare function addCircularPathData(
  inputGraph: SankeyGraph,
  id: NodeIdAccessor,
  circularLinkGap: number,
  baseRadius: number,
  verticalMargin: number
): SankeyGraph;
