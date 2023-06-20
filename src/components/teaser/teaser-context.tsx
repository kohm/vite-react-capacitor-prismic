import { createContext } from 'react';
import { TeaserData } from './types';

const TeaserContext = createContext<{ teaser: TeaserData } | null>(null);

export default TeaserContext;
