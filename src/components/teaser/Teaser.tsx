import TeaserByline from './teaser-byline';
import TeaserContext from './teaser-context';
import TeaserDescription from './teaser-description';
import TeaserHeader from './teaser-header';
import TeaserImage from './teaser-image';
import TeaserInfo from './teaser-info';
import TeaserTitle from './teaser-title';
import { TeaserProps } from './types';

function Teaser({ teaser, img, header, info, action }: TeaserProps) {
  return (
    <TeaserContext.Provider value={{ teaser }}>
      <div>
        {img}
        <div className="bg-slate-50 px-8 py-3 text-center text-slate-950">
          {header}
          {info}
          {action}
        </div>
      </div>
    </TeaserContext.Provider>
  );
}

Teaser.Image = TeaserImage;
Teaser.Header = TeaserHeader;
Teaser.Byline = TeaserByline;
Teaser.Title = TeaserTitle;
Teaser.Description = TeaserDescription;
Teaser.Info = TeaserInfo;

export default Teaser;
