import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true // mandatory, otherwise won't export
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en'
  }
}

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})
 
export default withNextra(nextConfig);
 
// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })