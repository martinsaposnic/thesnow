import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

