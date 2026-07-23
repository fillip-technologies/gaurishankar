import { Footer } from "@/components/layout/Footer";
import { FloatingQuickActions } from "@/components/layout/FloatingQuickActions";
import { Header } from "@/components/layout/Header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingQuickActions />
    </>
  );
}
