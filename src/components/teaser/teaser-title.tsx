import useTeaserContext from './teaser-context-use';

function TeaserTitle() {
  const { teaser } = useTeaserContext();
  return <p className="mb-4 mt-6 text-2xl font-bold">{teaser.title}</p>;
}

export default TeaserTitle;
