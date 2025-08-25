// components/Layout.tsx
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-grow container mx-auto px-6 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
