# Sankey Plus React + Vite Example

This example shows how to render a `SankeyChart` instance from the `sankey-plus` package in a React + TypeScript application bootstrapped with Vite.

## Getting started

```bash
npm install
npm run dev
```

The example's `package.json` links to the local `sankey-plus` package via `"file:../../"`, so you can test changes from this repository without publishing the library.

## Project structure

- `src/data.ts` – demo nodes and links used to populate the chart.
- `src/App.tsx` – React component that instantiates and renders the chart.
- `src/App.css` – minimal styling for the container.

Feel free to edit any of these files while `npm run dev` is running to see live updates.
