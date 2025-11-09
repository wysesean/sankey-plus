import type {
  NodeIdAccessor,
  SankeyGraph,
  SankeyGraphLink,
  SankeyGraphNode,
} from "./index";

export declare function sortLinkSourceYAscending(
  link1: SankeyGraphLink,
  link2: SankeyGraphLink
): number;
export declare function sortLinkSourceYDescending(
  link1: SankeyGraphLink,
  link2: SankeyGraphLink
): number;
export declare function sortLinkTargetYAscending(
  link1: SankeyGraphLink,
  link2: SankeyGraphLink
): number;
export declare function sortLinkTargetYDescending(
  link1: SankeyGraphLink,
  link2: SankeyGraphLink
): number;
export declare function ascendingSourceBreadth(
  a: SankeyGraphLink,
  b: SankeyGraphLink
): number;
export declare function ascendingTargetBreadth(
  a: SankeyGraphLink,
  b: SankeyGraphLink
): number;
export declare function ascendingBreadth(
  a: SankeyGraphNode,
  b: SankeyGraphNode
): number;
export declare function sortLinkColumnAscending(
  link1: SankeyGraphLink,
  link2: SankeyGraphLink
): number;
export declare function sortSourceLinks(
  inputGraph: SankeyGraph,
  id?: NodeIdAccessor
): SankeyGraph;
export declare function sortTargetLinks(
  inputGraph: SankeyGraph,
  id?: NodeIdAccessor
): SankeyGraph;
export declare function sortLinks(inputGraph: SankeyGraph): SankeyGraph;
