import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', ],
  display: 'swap',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Rendered Collectives",
  description: "Professional Photography Team Based in Region VIII",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen bg-gray-100 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
