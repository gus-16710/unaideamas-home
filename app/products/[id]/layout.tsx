import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producto",
  description: "Producto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
