import type { NodeIdAccessor, SankeyGraphLink } from "./index";

export declare function incline(link: SankeyGraphLink): "up" | "down";
export declare function selfLinking(
  link: SankeyGraphLink,
  id: NodeIdAccessor
): boolean;
export declare function onlyCircularLink(link: SankeyGraphLink): boolean;
export declare function linkColumnDistance(link: SankeyGraphLink): number;
export declare function linkXLength(link: SankeyGraphLink): number;
export declare function linkPerpendicularYToLinkTarget(
  longerLink: SankeyGraphLink,
  shorterLink: SankeyGraphLink
): number;
export declare function linkPerpendicularYToLinkSource(
  longerLink: SankeyGraphLink,
  shorterLink: SankeyGraphLink
): number;
