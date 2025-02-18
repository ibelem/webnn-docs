export default function manifest() {
  return {
    name: 'WebNN Documentation',
    short_name: 'webnn_doc',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#fff',
    background_color: '#fff',
    display: 'standalone'
  }
}