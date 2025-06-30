/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.deinsa.com',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/404', '/error'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/admin/'],
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://www.deinsa.com/sitemap.xml',
      ],
    },
    transform: async (config, path) => {
      // Configurar prioridades específicas para cada página
      let priority = 0.7;
      let changefreq = 'weekly';
      
      if (path === '/') {
        priority = 1.0;
        changefreq = 'daily';
      } else if (path === '/delphos') {
        priority = 0.9;
        changefreq = 'weekly';
      } else if (path === '/servicios') {
        priority = 0.8;
        changefreq = 'weekly';
      } else if (path === '/nosotros') {
        priority = 0.8;
        changefreq = 'monthly';
      } else if (path === '/contacto') {
        priority = 0.7;
        changefreq = 'monthly';
      } else if (path.startsWith('/noticias/')) {
        priority = 0.6;
        changefreq = 'monthly';
      }
      
      return {
        loc: path,
        changefreq,
        priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    },
  };
  