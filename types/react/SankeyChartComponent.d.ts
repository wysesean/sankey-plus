import type { CSSProperties, ReactElement } from "react";
import type { SankeyChartConfig } from "../index";

export interface SankeyChartComponentProps {
  config: SankeyChartConfig;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export declare function SankeyChartComponent(
  props: SankeyChartComponentProps
): ReactElement | null;
