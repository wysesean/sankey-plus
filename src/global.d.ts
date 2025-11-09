type D3Accessor<Datum, Return> = (
  datum: Datum,
  index: number,
  iterable: Iterable<Datum>
) => Return;

type D3GroupAccessor<Datum, Key> = D3Accessor<Datum, Key>;

type SelectionValue<ElementType extends Element, Datum, Return> =
  | Return
  | D3Accessor<Datum, Return>
  | ((this: ElementType, datum: Datum, index: number) => Return);

interface D3Selection<ElementType extends Element = Element, Datum = unknown> {
  node(): ElementType | null;
  remove(): this;
  select(
    selector: string | Element | Document
  ): D3Selection<Element, Datum>;
  selectChildren<ChildElement extends Element = Element>(): D3Selection<
    ChildElement,
    Datum
  >;
  selectAll<ChildDatum = Datum>(selector: string): D3Selection<Element, ChildDatum>;
  append<ChildElement extends Element = Element>(
    name: string
  ): D3Selection<ChildElement, Datum>;
  attr(
    name: string,
    value:
      | SelectionValue<ElementType, Datum, string | number | null | undefined>
  ): this;
  style(
    name: string,
    value:
      | SelectionValue<ElementType, Datum, string | number | null | undefined>
  ): this;
  classed(
    name: string,
    value: SelectionValue<ElementType, Datum, boolean>
  ): this;
  text(value: SelectionValue<ElementType, Datum, string | number>): this;
  data<NewDatum>(
    data: Iterable<NewDatum>,
    key?: (datum: NewDatum, index: number) => unknown
  ): D3Selection<ElementType, NewDatum>;
  filter(
    predicate: D3Accessor<Datum, boolean>
  ): D3Selection<ElementType, Datum>;
  each(
    callback: (
      this: ElementType,
      datum: Datum,
      index: number,
      nodes: ElementType[]
    ) => void
  ): this;
  enter(): D3Selection<ElementType, Datum>;
  exit(): D3Selection<ElementType, Datum>;
}

type PointTuple = [number, number];

interface D3HorizontalLink<Datum, Point extends PointTuple> {
  (datum: Datum): string | null;
  source(
    accessor: (datum: Datum) => Point
  ): D3HorizontalLink<Datum, Point>;
  target(
    accessor: (datum: Datum) => Point
  ): D3HorizontalLink<Datum, Point>;
}

interface D3LinearScale<Domain extends number | { valueOf(): number }, Range> {
  (value: Domain): Range;
  domain(domain: readonly Domain[]): D3LinearScale<Domain, Range>;
  range(range: readonly Range[]): D3LinearScale<Domain, Range>;
}

declare module "d3" {
  export type Selection<
    ElementType extends Element = Element,
    Datum = unknown
  > = D3Selection<ElementType, Datum>;
  export type HorizontalLink<
    Datum = unknown,
    Point extends PointTuple = PointTuple
  > = D3HorizontalLink<Datum, Point>;
  export type ScaleLinear<
    Domain extends number | { valueOf(): number } = number,
    Range = number
  > = D3LinearScale<Domain, Range>;
  export function group<Datum, Key>(
    iterable: Iterable<Datum>,
    key: D3GroupAccessor<Datum, Key>
  ): Map<Key, Datum[]>;
  export function groups<Datum, Key>(
    iterable: Iterable<Datum>,
    key: D3GroupAccessor<Datum, Key>
  ): Array<[Key, Datum[]]>;
  export function sum<Datum>(
    iterable: Iterable<Datum>,
    accessor?: D3Accessor<Datum, number>
  ): number;
  export function mean<Datum>(
    iterable: Iterable<Datum>,
    accessor?: D3Accessor<Datum, number>
  ): number | undefined;
  export function min<Datum>(
    iterable: Iterable<Datum>,
    accessor?: D3Accessor<Datum, number>
  ): number | undefined;
  export function max<Datum>(
    iterable: Iterable<Datum>,
    accessor?: D3Accessor<Datum, number>
  ): number | undefined;
  export function select<ElementType extends Element = Element, Datum = unknown>(
    selector: string | ElementType | Document
  ): D3Selection<ElementType, Datum>;
  export function range(stop: number): number[];
  export function range(start: number, stop: number, step?: number): number[];
  export function linkHorizontal<Datum = unknown, Point extends PointTuple = PointTuple>(): D3HorizontalLink<Datum, Point>;
  export function scaleLinear<
    Domain extends number | { valueOf(): number } = number,
    Range = number
  >(): D3LinearScale<Domain, Range>;
}

declare const Buffer: typeof import("buffer").Buffer;

declare module "d3-array" {
  export function min<Datum>(
    iterable: Iterable<Datum>,
    accessor?: D3Accessor<Datum, number>
  ): number | undefined;
  export function max<Datum>(
    iterable: Iterable<Datum>,
    accessor?: D3Accessor<Datum, number>
  ): number | undefined;
}
