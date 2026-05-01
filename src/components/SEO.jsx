import React from "react";
import { Helmet } from "react-helmet-async";

/* ═══════════════════════════════════════════════════════════════════════════
   SEO Component — full metadata, Open Graph, Twitter Card, JSON-LD
   Props:
     title        (string)  — page <title>
     description  (string)  — meta description (keep under 160 chars)
     keywords     (string)  — comma-separated keyword list
     canonical    (string)  — canonical URL for this page
     image        (string)  — absolute URL for OG/Twitter image
     name         (string)  — author / creator name
     type         (string)  — og:type ("website" | "article" | "profile")
     robots       (string)  — robots directive (default: "index, follow")
     jsonLd       (object)  — structured data object (serialised to JSON-LD)
═══════════════════════════════════════════════════════════════════════════ */

const SITE_NAME  = "Litheesh Velakaturi Rambabu";
const SITE_URL   = "https://litheesh.dev";
const OG_IMAGE   = `${SITE_URL}/og-image.png`;   // place a 1200×630 image in /public
const AUTHOR     = "Litheesh Velakaturi Rambabu";
const TWITTER_HANDLE = "@litheeshvr";

const SEO = ({
  title,
  description,
  keywords     = "",
  canonical    = SITE_URL,
  image        = OG_IMAGE,
  name         = AUTHOR,
  type         = "website",
  robots       = "index, follow",
  jsonLd       = null,
}) => {
  return (
    <Helmet>
      {/* ── Basic ── */}
      <title>{title}</title>
      <meta name="description"  content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author"       content={name} />
      <meta name="robots"       content={robots} />
      <link rel="canonical"     href={canonical} />

      {/* ── Open Graph (Facebook / LinkedIn / general) ── */}
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="en_US" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={TWITTER_HANDLE} />
      <meta name="twitter:creator"     content={name} />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image} />

      {/* ── JSON-LD Structured Data ── */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
