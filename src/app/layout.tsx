import ThemeProvider from '../components/context/ThemeProvider';
import TopHeader from '../components/TopHeader';
import { cookies } from 'next/headers';
import { RequestCookie } from 'next/dist/server/web/spec-extension/cookies';

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    
    return (
      <html lang="kr">
        <body>
        <ThemeProvider>
          <TopHeader/>
            {children}
        </ThemeProvider>
        </body>
      </html>
    );
  }