import Navbar from '@/components/Navbar';
import { Outfit, Parkinsans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400"],
})

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["800"]
})

export const metadata = 
{
  title: "Abhiraj Sagar",
  description: "Unity Game Developer | Full Stack Web Developer",
};

export default function RootLayout({children} : { children: React.ReactNode }) 
{
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${parkinsans.variable} bg-background-alt dark:bg-background-dark antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}