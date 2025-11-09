import type {
  NodeIdAccessor,
  SankeyGraphLink,
  SankeyGraphNode,
} from "./index";

export declare function getNodeID(node: SankeyGraphNode, id: NodeIdAccessor): string | number;
export declare function linkSourceCenter(link: SankeyGraphLink): number;
export declare function linkTargetCenter(link: SankeyGraphLink): number;
export declare function nodeCenter(node: SankeyGraphNode): number;
export declare function targetDepth(d: SankeyGraphLink): number;
export declare function value(d: SankeyGraphLink): number;
export declare function numberOfNonSelfLinkingCycles(
  node: SankeyGraphNode,
  id: NodeIdAccessor
): number;
