import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description: "Productos de unaidea+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
