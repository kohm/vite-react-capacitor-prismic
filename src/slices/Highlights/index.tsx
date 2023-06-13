import { Content } from '@prismicio/client';
import { PrismicLink, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Highlights`.
 */
export type HighlightsProps = SliceComponentProps<Content.HighlightsSlice>;

/**
 * Component for "Highlights" Slices.
 */
const Highlights = ({ slice }: HighlightsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h3 className="mb-3 font-bold">{slice.primary.title}</h3>
      <h4 className="mb-2">{slice.primary.subtitle}</h4>
      <div className="flex flex-col">
        {slice.items.map((item, index) => (
          <PrismicLink className="mb-1" key={index} field={item.highlight_item}>
            Link
          </PrismicLink>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
