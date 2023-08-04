import Header from "@/components/mobile/Header";
import Home from "@/components/mobile/Home";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <section className="w-full lg:hidden">
        <Header />
        <Home />
      </section>
    </main>
  );
}
