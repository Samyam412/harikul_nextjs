import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import Homepage from "@/components/homepage";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Homepage />
      <Herosection />
      <Footer />
    </div>
  );
}
