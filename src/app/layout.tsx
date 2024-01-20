import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Metric, Subtitle, Text, Title } from "@tremor/react";

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
        <div className="py-3">
          <div className="max-w-[1920px] px-3 mx-auto text-center lg:text-right">
            <Text className="inline-block">
              <a href="tel:+5355330476">(+53) 553-304-76</a>
            </Text>
            <Text className="inline-block ml-2 lg:mr-3.5">
              <a href="mailto:ossmanys@gmail.com">ossmanys@gmail.com</a>
            </Text>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] max-w-[1920px] px-3 pb-3">
          <div className="lg:pr-2 mb-5 lg:mb-0">
            <div className="text-left">
              <Metric>Osmanys Fuentes Lombá</Metric>
              <Title className="mt-1 mb-4">Web Developer</Title>
              <Subtitle>
                Years of experience building B2B web applications
              </Subtitle>
            </div>
          </div>
          <div className="lg:pl-2">
            <section>{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
