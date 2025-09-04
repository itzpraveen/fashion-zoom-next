import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Magazine — Fashion Zoom",
  description:
    "Fashion Zoom Magazine: editorials, covers, and press mentions celebrating Kerala’s fashion culture and talent.",
};

export default function MagazinePage() {
  // Read cover images from public/magazine-covers at build/request time
  const coversDir = path.join(process.cwd(), "public", "magazine-covers");
  let covers = [];
  try {
    const entries = fs.readdirSync(coversDir, { withFileTypes: true });
    covers = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((n) => /\.(jpe?g|png|webp|avif)$/i.test(n))
      .sort((a, b) => b.localeCompare(a));
  } catch (_) {
    // Directory may not exist yet; show guidance below.
    covers = [];
  }
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="magazine" />
        <div className="mt-2 mb-8 text-gray-600">Covers, editorials, and press from Fashion Zoom Magazine.</div>

        {/* Covers grid (auto from public/magazine-covers) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Magazine Covers</h2>
          {covers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {covers.map((file) => (
                <div key={file} className="rounded-lg border bg-white shadow-sm overflow-hidden">
                  <AspectRatio ratio={3/4}>
                    <Image
                      src={`/magazine-covers/${file}`}
                      alt={`Fashion Zoom Magazine cover ${file}`}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-600 border rounded-md p-4 bg-gray-50">
              Place cover images in <code className="px-1 py-0.5 bg-white rounded border">public/magazine-covers/</code> (jpg, png, webp, or avif) and they will appear here automatically.
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Editorials</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Kerala Couture — Monsoon Edit</li>
              <li>Traditional Elegance — Onam Special</li>
              <li>Street to Studio — Calicut</li>
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border p-5" delay={0.05}>
            <h3 className="font-semibold mb-2">Covers</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Season 8 — Cover Girl Aditri</li>
              <li>Teens Edition — Kochi</li>
              <li>Festival Issue — Thrissur</li>
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border p-5" delay={0.1}>
            <h3 className="font-semibold mb-2">Press</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Local Daily: Fashion Zoom Season 8</li>
              <li>Channel Feature: Modeling Careers</li>
              <li>Photo Expo: Alumni Showcase</li>
            </ul>
          </Reveal>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600">For press and editorial submissions, contact us via the Contact page.</p>
        </div>
      </div>
    </section>
  );
}
