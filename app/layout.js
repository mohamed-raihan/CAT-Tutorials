import { Geist, Geist_Mono, Young_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: ['400'], // Adjust weight as needed
  variable: '--font-young-serif',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${youngSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
