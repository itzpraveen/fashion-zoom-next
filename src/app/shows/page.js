import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export const metadata = {
  title: "Fashion Shows — Fashion Zoom",
  description:
    "Explore Fashion Zoom’s seasonal fashion shows across Kerala with categories for Teen, Miss, Traditional, and Kids — plus winners and highlights.",
};

export default function ShowsPage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="shows" />
        <div className="mb-10 text-lg text-gray-700">Walk seasonal fashion shows across Kerala — inclusive categories, supervised rehearsals, and real runway experience.</div>
        <h3 className="text-2xl font-bold mb-4">Upcoming shows</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { city: 'Kochi', date: 'Dates announcing soon' },
            { city: 'Calicut', date: 'Dates announcing soon' },
            { city: 'Trivandrum', date: 'Dates announcing soon' },
          ].map((e, i) => (
            <Reveal key={e.city} className="rounded-lg border p-5 bg-white shadow-sm" delay={i * 0.05}>
              <div className="font-semibold">{e.city}</div>
              <div className="text-sm text-gray-600">{e.date}</div>
              <div className="mt-3">
                <a href={`/admissions?preferredCity=${encodeURIComponent(e.city)}`} className="text-[#F81F2E] underline underline-offset-4">Register interest</a>
              </div>
            </Reveal>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">Categories & eligibility</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[{ t:'Kids (3–12)', d:'Fun, age‑appropriate sequences and styling with parent support.' },{ t:'Teens (13–17)', d:'Runway, grooming, and camera presence with mentoring.' },{ t:'Adults (18+)', d:'Contemporary and traditional segments with editorial styling.' }].map((c,i)=>(
            <Reveal key={c.t} className="rounded-lg border p-5 bg-white shadow-sm" delay={i*0.05}>
              <div className="font-semibold">{c.t}</div>
              <div className="text-sm text-gray-600 mt-1">{c.d}</div>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Season 8 — Current</h3>
            <p className="text-gray-600 mb-6">Traditional and contemporary fashion with categories for all ages: Teen, Miss, Traditional, and Kids.</p>
            <div className="space-y-2 text-sm text-gray-700">
              <div><span className="inline-block bg-[#F81F2E] text-white rounded px-2 py-0.5 mr-2">Winner</span> Cover Girl: Aditri Gouri</div>
              <div><span className="inline-block bg-[#F81F2E] text-white rounded px-2 py-0.5 mr-2">Location</span> Thrissur, Kerala</div>
              <div><span className="inline-block bg-[#F81F2E] text-white rounded px-2 py-0.5 mr-2">Categories</span> Teen • Miss • Traditional • Kids</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <Image src="/assets/fashion-show-1.jpg" alt="Fashion Show 1" width={800} height={600} className="rounded-lg shadow-lg w-full h-auto" />
            </Reveal>
            <Reveal delay={0.05}>
              <Image src="/assets/fashion-show-2.jpg" alt="Fashion Show 2" width={800} height={600} className="rounded-lg shadow-lg w-full h-auto" />
            </Reveal>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">Posters & Creatives</h3>
        <div className="relative mb-12">
          <Carousel className="px-10">
            <CarouselContent>
              {[
              { src: '/assets/showcase/webp/frame-65.webp', alt: 'Season poster – Frame 65' },
              { src: '/assets/showcase/webp/poster-a4-6.webp', alt: 'Season poster – A4 6' },
              { src: '/assets/showcase/webp/frame-66.webp', alt: 'Season poster – Frame 66' },
              { src: '/assets/showcase/webp/poster-a4-7.webp', alt: 'Season poster – A4 7' },
              { src: '/assets/showcase/webp/story-3.webp', alt: 'Instagram story creative 3' },
              { src: '/assets/showcase/webp/story-8.webp', alt: 'Instagram story creative 8' },
              ].map((p) => (
                <CarouselItem key={p.src} className="basis-full md:basis-1/3">
                  <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                    <AspectRatio ratio={3/4}>
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2" />
            <CarouselNext className="-right-2" />
          </Carousel>
          <div className="text-right text-sm">
            <Link href="/portfolio" className="underline underline-offset-4 text-[#F81F2E]">See all creatives →</Link>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">LED Wall Previews</h3>
        <div className="relative mb-12">
          <Carousel className="px-10">
            <CarouselContent>
              {[
                { src: '/assets/ledwall/webp/ledwall.webp', alt: 'LED wall visual 1' },
                { src: '/assets/ledwall/webp/ledwall2.webp', alt: 'LED wall visual 2' },
              ].map((p) => (
                <CarouselItem key={p.src} className="basis-full md:basis-1/2">
                  <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2" />
            <CarouselNext className="-right-2" />
          </Carousel>
        </div>
        <h3 className="text-xl font-semibold mb-4">Season history</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <Reveal className="rounded-lg border p-4">
            <div className="font-medium">Season 8 (2024–2025)</div>
            <ul className="list-disc pl-5 mt-2">
              <li>Winner: Cover Girl — Aditri Gouri</li>
              <li>Categories: Teen • Miss • Traditional • Kids</li>
              <li>Locations: Thrissur and across Kerala</li>
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border p-4" delay={0.05}>
            <div className="font-medium">Season 7 (2023–2024)</div>
            <ul className="list-disc pl-5 mt-2">
              <li>Event: Thrissur — Aug 25, 2024 (Hotel Holiday Park)</li>
              <li>Multiple category winners</li>
              <li>State‑wide participation</li>
            </ul>
          </Reveal>
        </div>
      </div>
      {/* Structured data (Event Series) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EventSeries',
            name: 'Fashion Zoom — Seasonal Fashion Shows',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            organizer: {
              '@type': 'Organization',
              name: 'Fashion Zoom Magazine',
            },
            location: [{ '@type': 'Place', name: 'Kerala, India' }],
            audience: { '@type': 'Audience', audienceType: ['Kids','Teens','Adults'] },
          }),
        }}
      />
    </section>
  );
}
