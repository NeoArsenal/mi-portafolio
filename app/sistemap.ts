import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3000/homepage',
      lastModified: new Date('2026-03-18'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}