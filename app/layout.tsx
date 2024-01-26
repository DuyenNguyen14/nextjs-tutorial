import '@/app/ui/global.css'
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased: Tailwind class for font-smoothing */}
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
