import { ImageFieldImage, KeyTextField } from '@prismicio/client';
import Chip from '../chip';
import { PrismicImage } from '@prismicio/react';

type Props = {
  articleName?: string | KeyTextField;
  heading: string | KeyTextField;
  mainImage: ImageFieldImage;
  byline?: string | KeyTextField;
};

function ArticleHeader({ articleName, mainImage, heading, byline }: Props) {
  return (
    <header className="relative flex h-[700px] flex-col justify-end pb-8 pl-8 pr-8">
      <PrismicImage
        className="absolute left-0 top-0 h-[400px] w-full object-cover opacity-25 lg:h-full	"
        field={mainImage}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-slate-950"></div>
      <div className="z-0 ml-auto mr-auto lg:max-w-screen-lg">
        {articleName && <Chip text={articleName} />}
        {byline && <p>${byline}</p>}
        <h1>${heading}</h1>
      </div>
    </header>
  );
}

export default ArticleHeader;
