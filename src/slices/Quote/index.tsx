import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
function Quote({ slice }: QuoteProps): JSX.Element {
  return (
    <>
      {slice.variation == 'withLines' && <hr className="mb-2 mt-5" />}
      <section
        className={`${
          slice.variation === 'light' && 'bg-white text-slate-950'
        } p-8 text-center`}
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <h3 className="text-lg font-bold uppercase">{slice.primary.quote}</h3>
        {slice.primary.author && (
          <p className="mt-4 font-bold">{slice.primary.author}</p>
        )}
      </section>
      {slice.variation == 'withLines' && <hr className="mb-2 mt-5" />}
    </>
  );
}

export default Quote;
