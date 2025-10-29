import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categorías - unaidea+",
  description: "Categorías de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
