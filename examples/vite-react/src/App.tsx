import { SankeyChartComponent, type SankeyChartConfig } from "sankey-plus";
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
  return (
    <div className="app">
      <header>
        <h1>Sankey Plus React Example</h1>
        <p>
          This demo shows how to render a <code>SankeyChart</code> instance inside a
          React component using Vite and TypeScript.
        </p>
      </header>
      <SankeyChartComponent
        id="sankey-container"
        className="sankey-wrapper"
        config={chartConfig}
      />
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
