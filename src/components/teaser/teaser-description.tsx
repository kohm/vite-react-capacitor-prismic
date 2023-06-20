import useTeaserContext from './teaser-context-use';

function TeaserDescription() {
  const { teaser } = useTeaserContext();
  return <p className="line-clamp-3 text-slate-500">{teaser.description}</p>;
}

export default TeaserDescription;
