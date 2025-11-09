import { createElement, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import SankeyChart from "../sankeyPlus";
import type { SankeyChartConfig } from "../types";

const DEFAULT_ID_PREFIX = "sankey-plus-react";
let instanceCounter = 0;

export interface SankeyChartComponentProps {
  config: SankeyChartConfig;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const getNextId = () => {
  instanceCounter += 1;
  return `${DEFAULT_ID_PREFIX}-${instanceCounter}`;
};

export function SankeyChartComponent({
  config,
  id,
  className,
  style,
}: SankeyChartComponentProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const idRef = useRef<string | null>(null);

  if (id && idRef.current !== id) {
    idRef.current = id;
  } else if (!id && idRef.current === null) {
    idRef.current = getNextId();
  }

  const containerId = idRef.current as string;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    container.innerHTML = "";

    const chartConfig: SankeyChartConfig = {
      ...config,
      container: containerId,
    };

    const chart = new SankeyChart(chartConfig);
    chart.process();
    chart.draw(containerId);

    return () => {
      container.innerHTML = "";
    };
  }, [config, containerId]);

  return createElement("div", {
    ref: containerRef,
    id: containerId,
    className,
    style,
  });
}
