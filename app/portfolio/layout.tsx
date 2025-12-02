import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio - Una Idea Más",
  description: "Explora nuestro portafolio de productos personalizados para empresas y eventos. Descubre cómo podemos ayudarte a destacar tu marca con artículos únicos y de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
