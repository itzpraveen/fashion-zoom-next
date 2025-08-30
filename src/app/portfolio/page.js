import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Portfolio — Fashion Zoom",
  description:
    "Editorial portfolio highlights from Fashion Zoom — lookbooks, editorials, and alumni showcases shot across Kerala.",
};

export default function PortfolioPage() {
  const images = [
    { src: "/assets/ledwall/webp/ledwall.webp", alt: "LED wall visual 1", w: 1920, h: 1080 },
    { src: "/assets/ledwall/webp/ledwall2.webp", alt: "LED wall visual 2", w: 1920, h: 1080 },
    { src: "/assets/showcase/webp/frame-65.webp", alt: "Poster – Frame 65" },
    { src: "/assets/showcase/webp/poster-a4-6.webp", alt: "Poster – A4-6" },
    { src: "/assets/showcase/webp/frame-66.webp", alt: "Poster – Frame 66" },
    { src: "/assets/showcase/webp/poster-a4-7.webp", alt: "Poster – A4-7" },
    { src: "/assets/showcase/webp/story-3.webp", alt: "Instagram Story 3" },
    { src: "/assets/showcase/webp/story-8.webp", alt: "Instagram Story 8" },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="gallery" />
        <p className="text-lg text-gray-700 mb-8">Posters, stories, and runway creatives from recent seasons.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <Reveal key={img.src} className="rounded-lg overflow-hidden border shadow-sm bg-white">
              <Image src={img.src} alt={img.alt} width={img.w || 1080} height={img.h || 1440} sizes="(min-width: 1024px) 33vw, 100vw" className="w-full h-auto" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
