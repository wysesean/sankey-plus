import type { SankeyChartConfig } from "./index";

export declare class SankeyChart {
    constructor(config: SankeyChartConfig);
    process(): void;
    draw(id: string): void;
}
export default SankeyChart;
