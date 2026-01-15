import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/ap/', // Disallow admin path crawling
        },
        sitemap: 'https://alcipan-baku.vercel.app/sitemap.xml',
    };
}
