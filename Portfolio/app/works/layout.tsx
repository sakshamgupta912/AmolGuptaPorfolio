import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amol Gupta",
  description: "Senior HR",
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
