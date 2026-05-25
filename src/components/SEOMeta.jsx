import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Brain Logic Info Solutions';
const BASE_URL  = 'https://www.brainlogicinfosolutions.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEOMeta = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType  = 'website',
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Magento & eCommerce Development – Ahmedabad`;

  const fullCanonical = canonical
    ? `${BASE_URL}${canonical}`
    : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={fullCanonical} />
      <meta property="og:type"        content={ogType} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:site_name"   content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
};

export default SEOMeta;
