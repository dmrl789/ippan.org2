import "./globals.css";

export const metadata = {
  title: "IPPAN Foundation",
  description: "Official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
