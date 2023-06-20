import { useContext } from 'react';
import TeaserContext from './teaser-context';

export default function useTeaserContext() {
  const context = useContext(TeaserContext);
  if (!context) {
    throw new Error(
      'Teaser.* Component must be rendered as child of Teaser component.'
    );
  }
  return context;
}
