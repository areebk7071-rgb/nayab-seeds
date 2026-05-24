import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site';
import { seoKeywords, businessFacts, seoFaqItems } from '../../config/seo';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'product';
  /** Include FAQ JSON-LD (home, contact) */
  includeFaqSchema?: boolean;
  noSuffix?: boolean;
}

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: businessFacts.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: {
      '@type': 'City',
      name: businessFacts.location.city,
      containedInPlace: {
        '@type': 'Country',
        name: businessFacts.location.country,
      },
    },
    knowsAbout: businessFacts.specializes,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
  };
}

function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessFacts.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-PK',
    about: {
      '@type': 'Thing',
      name: 'Karachi gardening and ecological seeds in Pakistan',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/shop?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export default function Seo({
  title,
  description = siteConfig.description,
  path = '',
  image,
  type = 'website',
  includeFaqSchema = false,
  noSuffix = false,
}: SeoProps) {
  const brandSuffix = noSuffix ? '' : ` | ${siteConfig.name}`;
  const fullTitle = title ? `${title}${brandSuffix}` : `${siteConfig.name} — ${siteConfig.tagline} | Karachi Gardening Seeds Pakistan`;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-default.jpg`;
  const keywords = seoKeywords.join(', ');

  const schemas: Record<string, unknown>[] = [buildOrganizationSchema(), buildWebSiteSchema()];
  if (includeFaqSchema) schemas.push(buildFaqSchema());

  return (
    <Helmet>
      <html lang="en-PK" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="geo.region" content="PK-SD" />
      <meta name="geo.placename" content="Karachi" />
      <meta name="geo.position" content="24.8607;67.0011" />
      <meta name="ICBM" content="24.8607, 67.0011" />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
