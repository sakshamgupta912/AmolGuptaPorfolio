import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

import MaskCursor from "./components/MaskCursor";
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amol Gupta | Senior HR Leader and Organizational Strategist",
  description:
    "Amol Gupta is a Senior HR Leader specializing in leading human resources strategies and organizational development initiatives within global financial technology organizations.",
  keywords: [
    "Amol Gupta",
    "Senior HR Leader",
    "Organizational Strategist",
    "Human Resources",
    "Organizational Development",
    "Financial Technology",
    "Employee Experience",
    "Cultural Transformation",
    "Global HR Strategies",
    "Leadership",
    "Mentorship",
    "HR Consulting",
    "Talent Management",
    "Workforce Development",
    "Change Management",
    "Career Development",
    "Professional Networking",
    "Employee Engagement",
    "HR Innovation",
    "Strategic HR Planning",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Amol Gupta | Senior HR Leader and Organizational Strategist",
    description:
      "Explore the professional profile of Amol Gupta, a Senior HR Leader specializing in human resources strategies and organizational development within global financial technology organizations.",
    url: "https://www.linkedin.com/in/amol-gupta-arg/",
    type: "profile",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/C4E03AQGalxY1OYPldA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1585834488612?e=1748476800&v=beta&t=HmWn9Acmx-cu4ylNbBBb3mk8FHi6XII05Oru7bxVVoA",
        alt: "Amol Gupta Profile Picture",
        width: 800,
        height: 800,
      },
    ],
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(
    "%cMade by Saksham Gupta",
    "font-weight: bold; font-size: 14px; color: #0077b5;"
  );
  console.log("LinkedIn: https://www.linkedin.com/in/sakshamgupta912");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        
        <Providers>
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <MaskCursor />
            <main className=" px-5 sm:px-12">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
        <GoogleAnalytics gaId="G-FHL88G3PMS" />
        <Analytics />
      </body>
    </html>
  );
}
