import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/code-highlight/styles.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "@/Context/AuthProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Foca.ia",
  description: "Desenvolvido por Foca.ia",
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Foca.ia",
    description: "Desenvolvido por Foca.ia",
    url: "https://foca-ia.com",
    siteName: "Foca.ia",
    images: [
      {
        url: "https://foca.ia",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "pt-AO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>Foca.ia - Proxima Melhor HealthTech startup de Africa</title>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <MantineProvider>
            <Providers>{children}</Providers>
          </MantineProvider>
        </AuthProvider>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
