import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Slingshot IEP',
  description: 'No parent should walk into an IEP meeting alone. Slingshot prepares families and advocates to get the services children are owed.',
  openGraph: {
    title: 'Slingshot IEP',
    description: 'No parent should walk into an IEP meeting alone.',
    url: 'https://slingshotiep.com',
    siteName: 'Slingshot IEP',
    type: 'website',
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen antialiased flex flex-col font-sans bg-[#FBF7F2]">
        <div className="flex-1">{children}</div>
        <footer className="border-t border-[#E8DFD0] px-6 py-5">
          <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B6B6B]">
            <span>2026 Slingshot Labs Benefit LLC</span>
            <div className="flex gap-5">
              <a href="/privacy"          className="hover:text-[#2F2F2F] transition-colors">Privacy Policy</a>
              <a href="/terms"            className="hover:text-[#2F2F2F] transition-colors">Terms of Use</a>
              <a href="mailto:hello@slingshotiep.com" className="hover:text-[#2F2F2F] transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
