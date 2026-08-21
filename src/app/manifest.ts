import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Desnine Studio - Independent Design Studio',
    short_name: 'Desnine Studio',
    description: 'Multi-disciplinary independent design studio specializing in branding, web design, SEO, and AI automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '2500x2500',
        type: 'image/png',
      },
    ],
  }
}
