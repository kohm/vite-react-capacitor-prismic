import { KeyTextField, LinkField, RichTextField } from '@prismicio/client';
import { PrismicLink, PrismicRichText } from '@prismicio/react';

type Props = {
  title: KeyTextField;
  subtitle: KeyTextField;
  description: RichTextField;
  ctaLink: LinkField;
  ctaLabel: KeyTextField;
};

function HeroContent({
  title,
  subtitle,
  ctaLink,
  description,
  ctaLabel,
}: Props) {
  return (
    <div className="lg:tet flex w-full transform flex-col text-center text-2xl text-stone-50 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <h1 className="mb-8 text-xl lg:text-2xl">{title}</h1>
      {subtitle && <p className="mb-4 text-sm lg:text-2xl">{subtitle}</p>}
      {description && <PrismicRichText field={description} />}
      {ctaLink && (
        <PrismicLink className="button-primary mt-4" field={ctaLink}>
          {ctaLabel}
        </PrismicLink>
      )}
    </div>
  );
}

export default HeroContent;
