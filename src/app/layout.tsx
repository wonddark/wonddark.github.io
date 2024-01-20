import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Bold, Metric, Subtitle, Title } from "@tremor/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osmanys Fuentes Lombá - Web Developer",
  description: "Professional CV of Osmanys Fuentes Lombá Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="py-3 mb-3 bg-gradient-to-b from-sky-500 to-sky-300 dark:from-slate-950 dark:to-gray-950">
          <div className="max-w-[1920px] px-3 mx-auto">
            <div className="text-right">
              <Bold className="inline-block text-amber-800 dark:text-amber-600">
                <a href="tel:+5355330476">(+53) 553-304-76</a>
              </Bold>
              <Bold className="inline-block text-amber-800 dark:text-amber-600 ml-2 lg:mr-3.5">
                <a href="mailto:ossmanys@gmail.com">ossmanys@gmail.com</a>
              </Bold>
            </div>
            <div className="text-left">
              <Metric>Osmanys Fuentes Lombá</Metric>
              <Title className="mt-1 mb-4">Web Developer</Title>
              <Subtitle className="text-amber-800 dark:text-amber-500 dark:opacity-75">
                Years of experience building B2B web applications
              </Subtitle>
            </div>
          </div>
        </div>
        <div className="max-w-[1920px] px-3 pb-3 mx-auto">
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
}
