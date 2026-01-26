import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/ap/', // Disallow admin path crawling
        },
        sitemap: 'https://alcipanbaku.com/sitemap.xml',
    };
}
