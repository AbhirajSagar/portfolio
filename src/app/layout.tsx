import { Parkinsans } from "next/font/google";
import "./globals.css";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Abhiraj Sagar · Unity Game Developer",
  description:
    "Portfolio of Abhiraj Sagar — Unity Game Developer with 2+ years of experience building gameplay systems, custom editor tooling, and shipping games.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${parkinsans.variable} scroll-smooth`}>
      <body className="bg-[#0c0d10] text-zinc-100 antialiased selection:bg-amber-500/25 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
