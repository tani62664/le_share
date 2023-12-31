export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/style/reset.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Header />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
