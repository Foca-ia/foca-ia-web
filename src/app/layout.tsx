import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/code-highlight/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "@/Context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foca.ia",
  description: "Desenvolvido por Foca.ia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <MantineProvider>
            <Providers>{children}</Providers>
          </MantineProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
