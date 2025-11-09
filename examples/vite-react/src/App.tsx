import { useEffect, useRef } from "react";
import SankeyChart, { type SankeyChartConfig } from "sankey-plus";
import { nodes, links } from "./data";
import "./App.css";

const chartConfig: SankeyChartConfig = {
  id: (node) => String(node.name ?? node.id ?? ""),
  width: 960,
  height: 540,
  padding: 48,
  align: "justify",
  nodes: {
    data: nodes,
    width: 20,
    fill: "#2a9d8f",
    stroke: "#1c6b5a",
    opacity: 0.9,
  },
  links: {
    data: links,
    color: "#264653",
    opacity: 0.6,
    circularGap: 12,
  },
  arrows: {
    enabled: true,
    color: "#e76f51",
    headSize: 5,
  },
};

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const chart = new SankeyChart(chartConfig);
    chart.process();
    chart.draw("sankey-container");

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Sankey Plus React Example</h1>
        <p>
          This demo shows how to render a <code>SankeyChart</code> instance inside a
          React component using Vite and TypeScript.
        </p>
      </header>
      <div ref={containerRef} id="sankey-container" className="sankey-wrapper" />
      <footer>
        <p>
          Nodes and links are defined in <code>src/data.ts</code>. Try editing the
          data or chart configuration to experiment with different layouts.
        </p>
      </footer>
    </div>
  );
}

export default App;
