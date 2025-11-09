import SankeyChartBase from "./sankeyPlus";

export interface SankeyNodeDatum {
  [key: string]: any;
}

export interface SankeyLinkDatum {
  source: SankeyNodeDatum | string;
  target: SankeyNodeDatum | string;
  value?: number;
  [key: string]: any;
}

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

export default SankeyChart;
