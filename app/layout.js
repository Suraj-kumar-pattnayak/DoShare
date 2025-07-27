import {  Outfit } from "next/font/google";        // chnaging font from google font
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'

const OutfitT = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "DO Share : File-Sharing application"
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
      <html lang="en">
      <body
        className={`${OutfitT.variable} antialiased`}
      >
        {children}
      </body>
    </html>

    </ClerkProvider>
  );
}
