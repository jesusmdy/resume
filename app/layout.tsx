import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

const TITLE = 'Jesusmdy / Portfolio';
const DESCRIPTION = 'Jesusmdy\'s portfolio to showcase his experience and projects involved.';
const OG_IMAGE = {
  url: 'https://jesusmdy.dev/images/og.png',
  width: 1280,
  height: 800,
  alt: 'Jesusmdy\'s Portfolio',
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: {
    url: 'https://jesusmdy.dev',
    name: 'Jesus Marcano',
  },
  keywords: [
    'jesusmdy',
    'jesus',
    'marcano',
    'jesus marcano',
    'jesusmdy dev',
    'jesus marcano dev',
    'jesusmdy portfolio',
    'jesus marcano portfolio',
    'jesusmdy dev portfolio',
    'jesus marcano dev portfolio',
    'jesusmdy dev portfolio',
    'react',
    'nextjs',
    'typescript',
    'javascript',
    'portfolio',
    'developer',
    'software engineer',
    'software developer',
    'software engineering',
    'software development',
    'full stack',
    'full stack developer',
    'full stack engineer',
    'full stack development',
    'full stack software engineer',
    'full stack software developer',
    'front end',
    'front end developer',
    'front end engineer',
    'front end development',
    'front end software engineer',
    'front end software developer',
    'react.js',
    'next.js',
  ],
  robots: 'index, follow',
  publisher: 'Jesus Marcano',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  openGraph: {
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    url: 'https://jesusmdy.dev',
    images: [OG_IMAGE],
  },
  twitter: {
    creator: '@jesusmdy',
    card: 'summary_large_image',
    site: '@jesusmdy',
    images: [OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
