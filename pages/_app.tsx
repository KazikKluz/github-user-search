import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={['light', 'dark']} defaultTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
