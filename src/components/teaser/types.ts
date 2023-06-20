import { ImageFieldImage } from '@prismicio/client';
import { ReactNode } from 'react';

export type TeaserProps = {
  teaser: TeaserData;
  img?: ReactNode;
  header?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

export type TeaserData = {
  img: ImageFieldImage;
  altText?: string;
  byline?: string | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  className?: string;
  clickAction?: () => void;
};

export type TeaserInfoProps = {
  children: ReactNode;
};

export type TeaserHeaderProps = {
  children: ReactNode;
};
