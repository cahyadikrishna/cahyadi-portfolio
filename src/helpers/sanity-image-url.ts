import { sanityClient } from '~/api/sanity-api';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export function sanityImageUrl(source: string) {
  return builder.image(source);
}
