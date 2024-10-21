import Header from '@/components/Header';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}