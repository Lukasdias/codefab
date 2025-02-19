import Footer from "@/components/footer";
import Header from "@/components/header";

export default function FableViewer({ fableId }: { fableId: string }) {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Viewing Fable: {fableId}</h1>
        <div className="prose max-w-none">
          <h2>My Fable</h2>
          <p>Once upon a time...</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
