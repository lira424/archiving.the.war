// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    experimental:{
        fonts: [{
            provider: fontProviders.google(),
            name: "Vazirmatn",
            cssVariable: "--font-vazirmatn",
        }]
    },
  integrations: [
      starlight({
          title: 'My Docs',
          customCss: ['./styles/custom.css'],
          components: {
            Head: './src/components/Head.astro'
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: vercel(),
});