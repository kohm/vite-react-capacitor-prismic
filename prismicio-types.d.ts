// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

import {
  SliceSimulatorProps as BaseSliceSimulatorProps,
  SliceSimulatorState,
} from '@prismicio/slice-simulator-core';
export type SliceSimulatorSliceZoneProps = {
  slices: SliceSimulatorState['slices'];
};
export type SliceSimulatorProps = {
  /**
   * React component to render simulated Slices.
   *
   * @example
   *
   * ```tsx
   * import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
   * import { SliceZone } from "@prismicio/react";
   *
   * import { components } from "../slices";
   *
   * <SliceSimulator
   * 	sliceZone={({ slices }) => (
   * 		<SliceZone slices={slices} components={components} />
   * 	)}
   * />;
   * ```
   */
  sliceZone: (props: SliceSimulatorSliceZoneProps) => JSX.Element;
  className?: string;
} & Omit<BaseSliceSimulatorProps, 'state'>;
export declare const SliceSimulator: ({
  sliceZone: SliceZoneComp,
  background,
  zIndex,
  className,
}: SliceSimulatorProps) => JSX.Element;

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Event documents */
interface EventDocumentData {
  /**
   * Byline field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.byline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  byline: prismic.KeyTextField;
  /**
   * Title field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Main Text field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.main_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  main_text: prismic.RichTextField;
  /**
   * Slice Zone field in *Event*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: event.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<EventDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: event.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: event.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Event → Slice Zone*
 *
 */
type EventDocumentDataSlicesSlice = QuoteSlice;
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventDocumentData>, 'event', Lang>;
export type AllDocumentTypes = EventDocument;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
  /**
   * Main Text field in *Quote → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.primary.main_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  main_text: prismic.RichTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismic.SharedSlice<'quote', QuoteSliceVariation>;
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      EventDocumentData,
      EventDocumentDataSlicesSlice,
      EventDocument,
      AllDocumentTypes,
      QuoteSliceDefaultPrimary,
      QuoteSliceDefault,
      QuoteSliceVariation,
      QuoteSlice,
    };
  }
}
