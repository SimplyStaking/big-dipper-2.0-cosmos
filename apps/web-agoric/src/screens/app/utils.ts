import { chainConfig } from 'ui/src';

export const OPEN_GRAPH_SEO = {
  type: 'website',
  site_name: 'Big Dipper',
  images: [
    {
      url: chainConfig.previewImage,
      width: 800,
      height: 600,
      alt: 'Preview Photo',
    },
  ],
};

export const TWITTER_SEO = {
  cardType: 'summary_large_image',
};

export const ADDITIONAL_LINK_TAGS_SEO = [
  {
    rel: 'apple-touch-icon',
    href: `/${chainConfig.chainname}/icons/apple-touch-icon.png`,
    sizes: '180x180',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: `/${chainConfig.chainname}/icons/favicon-32x32.png`,
    sizes: '32x32',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: `/${chainConfig.chainname}/icons/favicon-16x16.png`,
    sizes: '16x16',
  },
  {
    rel: 'manifest',
    href: `/${chainConfig.chainname}/icons/site.webmanifest`,
  },
  {
    rel: 'mask-icon',
    href: `/${chainConfig.chainname}/icons/safari-pinned-tab.svg`,
    color: '#5bbad5',
  },
  {
    rel: 'shortcut icon',
    href: `/${chainConfig.chainname}/icons/favicon.ico`,
  },
];

export const ADDITIONAL_META_TAGS = [
  {
    property: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width',
  },
  {
    property: 'msapplication-TileColor',
    content: '#da532c',
  },
  {
    name: 'msapplication-config',
    content: '/icons/browserconfig.xml',
  },
  {
    name: 'theme-color',
    content: '#ffffff',
  },
];