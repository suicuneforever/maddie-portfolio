import type { Metadata } from 'next';

import Header from './components/header/header';

export const metadata: Metadata = {
  title: 'Madison Blaylock',
  description: 'My App is a...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
