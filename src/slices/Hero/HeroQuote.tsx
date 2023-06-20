import { KeyTextField } from '@prismicio/client';

type Props = {
  quote: string | KeyTextField;
  author: string | KeyTextField;
};

function HeroQuote({ quote, author }: Props) {
  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
}

export default HeroQuote;
