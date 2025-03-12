export default function manifest() {
  return {
    name: 'WebNN Documentation',
    short_name: 'webnn_doc',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#fff',
    background_color: '#fff',
    display: 'standalone'
  }
}