import type { SankeyGraphNode, NodeIdentifier } from "./index";

export declare function find(
  nodeById: Map<NodeIdentifier, SankeyGraphNode>,
  id: NodeIdentifier
): SankeyGraphNode;
