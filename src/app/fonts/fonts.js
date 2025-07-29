// app/fonts.ts
import localFont from 'next/font/local'
// app/fonts.ts

import { GeistSans as GeistSansFont, GeistMono as GeistMonoFont } from 'next/font/google';

export const GeistSans = GeistSansFont({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const GeistMono = GeistMonoFont({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const geistSans = localFont({
  src: './fonts/GeistSans.woff2',
  variable: '--font-geist-sans',
})

export const geistMono = localFont({
  src: './fonts/GeistMono.woff2',
  variable: '--font-geist-mono',
})
