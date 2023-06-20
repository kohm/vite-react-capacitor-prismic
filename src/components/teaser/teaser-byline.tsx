import useTeaserContext from './teaser-context-use';

function TeaserByline() {
  const { teaser } = useTeaserContext();
  return <p className="text-slate-500">{teaser.byline}</p>;
}

export default TeaserByline;
