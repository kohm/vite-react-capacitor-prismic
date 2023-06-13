import { Content } from '@prismicio/client';
import {
  PrismicRichText,
  SliceComponentProps,
  PrismicLink,
  PrismicImage,
} from '@prismicio/react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicImage
        className="aspect-video w-full object-cover"
        field={slice.primary.image}
      />
      <div className="flex w-full transform flex-col text-center text-2xl text-stone-50 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <h1 className="mb-8 text-xl lg:text-8xl ">
          {slice.primary.main_title}
        </h1>
        {slice.primary.subtitle && (
          <p className="mb-4 text-sm lg:text-2xl">{slice.primary.subtitle}</p>
        )}
        {slice.primary.description && (
          <PrismicRichText field={slice.primary.description} />
        )}
        {slice.primary.cta_url && (
          <PrismicLink
            className="button-primary mt-4"
            field={slice.primary.cta_url}
          >
            {slice.primary.cta_label}
          </PrismicLink>
        )}
      </div>
    </section>
  );
};

export default Hero;
