import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScholarLens",
  description: "AI 기반 논문 근거 탐색 및 연구 효율화 솔루션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
