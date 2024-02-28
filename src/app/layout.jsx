import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

import 'styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const aeonik = localFont({
  src: '../assets/fonts/aeonik-regular.woff2',
  display: 'swap',
  variable: '--font-aeonik',
});

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en" className={`${inter.variable} ${aeonik.variable}`}>
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
