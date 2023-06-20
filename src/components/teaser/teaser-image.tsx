import { PrismicImage } from '@prismicio/react';
import useTeaserContext from './teaser-context-use';

function TeaserImage() {
  const { teaser } = useTeaserContext();
  return (
    <div>
      <PrismicImage field={teaser.img} />
    </div>
  );
}

export default TeaserImage;
