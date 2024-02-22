import React from "react";
import Head from "next/head";

type HeadMetaDataProps = {
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
};

export const HeadMetaData = ({
  title = "Find the best movie for you",
  metaDescription = "A website that provides a collection of movies from various genres, allowing users to explore and discover new films.",
  ogImageUrl = "https://21cineplex.com//theme/v5/assets/img/logo.png",
  pathname = "",
}: HeadMetaDataProps) => {
  const defaultTitle = "21Cinema Next";

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://21cinema-next.vercel.app/";

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{title + " | " + defaultTitle}</title>

      {/* metadata */}
      <meta name="title" content={title + " | " + defaultTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:url" content={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:image" itemProp="image" content={ogImageUrl} />
      <meta property="og:title" content={title + " | " + defaultTitle} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title + " | " + defaultTitle} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
};
