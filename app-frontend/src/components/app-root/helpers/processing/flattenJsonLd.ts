import * as jsonld from 'jsonld';

export const flattenJsonLd = (jsonLd: any) => {
  return jsonld.flatten(jsonLd);
};
