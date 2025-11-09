import SankeyChartBase from "./sankeyPlus";
import type { CSSProperties, ReactElement } from "react";

export interface SankeyNodeDatum {
  [key: string]: unknown;
}

export interface SankeyLinkDatum {
  source: SankeyNodeDatum | string | number;
  target: SankeyNodeDatum | string | number;
  value?: number;
  [key: string]: unknown;
}

export type SankeyCircularLinkType = "top" | "bottom";

export interface SankeyCircularPathData {
  arcRadius?: number;
  rightNodeBuffer?: number;
  leftNodeBuffer?: number;
  sourceWidth?: number;
  sourceX?: number;
  targetX?: number;
  sourceY?: number;
  targetY?: number;
  rightSmallArcRadius?: number;
  rightLargeArcRadius?: number;
  leftSmallArcRadius?: number;
  leftLargeArcRadius?: number;
  verticalFullExtent?: number;
  verticalBuffer?: number;
  verticalRightInnerExtent?: number;
  verticalLeftInnerExtent?: number;
  rightInnerExtent?: number;
  leftInnerExtent?: number;
  rightFullExtent?: number;
  leftFullExtent?: number;
}

export type NodeIdentifier = string | number;

export interface SankeyGraphNode extends SankeyNodeDatum {
  index: number;
  column: number;
  depth: number;
  height: number;
  value: number;
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  y: number;
  partOfCycle?: boolean;
  circularLinkType?: SankeyCircularLinkType;
  virtual?: boolean;
  replacedLink?: number;
  sourceLinks: SankeyGraphLink[];
  targetLinks: SankeyGraphLink[];
}

export interface SankeyGraphLink extends SankeyLinkDatum {
  index: number;
  source: SankeyGraphNode;
  target: SankeyGraphNode;
  value: number;
  width: number;
  y0: number;
  y1: number;
  circular?: boolean;
  circularLinkID?: number;
  circularLinkType?: SankeyCircularLinkType;
  circularPathData?: SankeyCircularPathData;
  path?: string;
  virtual?: boolean;
}

export interface SankeyGraph {
  nodes: SankeyGraphNode[];
  links: SankeyGraphLink[];
  virtualLinks?: SankeyGraphLink[];
  virtualNodes?: SankeyGraphNode[];
  x0: number;
  x1: number;
  y0: number;
  y1: number;
  ky: number;
  py: number;
}

export type NodeIdAccessor = (node: SankeyGraphNode) => NodeIdentifier;

export interface SankeyNodeOptions {
  data: SankeyNodeDatum[];
  width?: number;
  padding?: number;
  minPadding?: number;
  virtualPadding?: number;
  horizontalSort?: ((node: SankeyNodeDatum) => number) | null;
  verticalSort?: ((node: SankeyNodeDatum) => number) | null;
  setPositions?: boolean;
  fill?: string;
  stroke?: string;
  opacity?: number;
  scaleDomain?: [number, number];
  scaleRange?: [number, number];
  scale?: number;
}

export interface SankeyLinkOptions {
  data: SankeyLinkDatum[];
  circularGap?: number;
  circularLinkPortionTopBottom?: number;
  circularLinkPortionLeftRight?: number;
  opacity?: number;
  useVirtualRoutes?: boolean;
  baseRadius?: number;
  verticalMargin?: number;
  virtualLinkType?: "both" | "bezier" | "virtual";
  color?: string;
}

export interface SankeyArrowOptions {
  enabled?: boolean;
  color?: string;
  length?: number;
  gap?: number;
  headSize?: number;
}

export interface SankeyChartConfig {
  nodes: SankeyNodeOptions;
  links: SankeyLinkOptions;
  arrows?: SankeyArrowOptions;
  align?: "left" | "right" | "center" | "justify";
  id?: (node: SankeyNodeDatum) => string;
  iterations?: number;
  padding?: number;
  width?: number;
  height?: number;
  useManualScale?: boolean;
  showCanvasBorder?: boolean;
  scale?: number;
  container?: string;
}

export declare class SankeyChart extends SankeyChartBase {
  constructor(config: SankeyChartConfig);
}

export interface SankeyChartComponentProps {
  config: SankeyChartConfig;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function SankeyChartComponent(
  props: SankeyChartComponentProps
): ReactElement | null;

export default SankeyChart;
