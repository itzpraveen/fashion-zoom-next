import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Modeling Academy — Fashion Zoom",
  description:
    "Professional modeling courses in Kerala covering runway, grooming, camera presence, portfolio shoots, and industry readiness — with direct entry, no auditions required.",
};

export default function AcademyPage() {
  const modules = [
    { title: "Runway Basics", text: "Posture, balance, turns, and walk variations." },
    { title: "Grooming", text: "Skin, hair, and styling for editorial & runway." },
    { title: "Camera Presence", text: "Posing for photo, framing, angles, movement." },
    { title: "Confidence & Voice", text: "Presence, poise, and on‑stage communication." },
    { title: "Industry Readiness", text: "Etiquette, casting, brand communication." },
    { title: "Portfolio & Reels", text: "Editorial shoots and short reels to pitch." },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="academy" />
        <p className="text-lg text-gray-700 mb-8">Professional training with direct entry — no auditions required. Kids • Teens • Adults.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {modules.map((m, i) => (
            <Reveal key={m.title} className="rounded-lg border p-5 bg-white shadow-sm" delay={i * 0.05}>
              <h3 className="font-semibold mb-2">{m.title}</h3>
              <p className="text-gray-600 text-sm">{m.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3">Programs by Age</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              t: 'Kids (3–12)', d: 'Confidence, posture, coordination, and fun stage presence.',
            }, {
              t: 'Teens (13–17)', d: 'Runway, grooming, camera presence, and portfolio basics.',
            }, {
              t: 'Adults (18+)', d: 'Editorial styling, advanced runway, reels, and industry etiquette.',
            }].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.05} className="rounded-lg border p-5 bg-white shadow-sm">
                <div className="font-medium">{p.t}</div>
                <div className="text-gray-600 text-sm mt-1">{p.d}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link href="/admissions" className="inline-flex h-11 px-6 rounded-md bg-[#F81F2E] text-white hover:bg-[#d11322]">Apply for Admissions</Link>
        </div>
      </div>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Fashion Zoom Modeling Academy',
            description: 'Runway, grooming, camera presence, portfolio shoots, and industry readiness with batches for Kids, Teens, and Adults across Kerala.',
            provider: {
              '@type': 'Organization',
              name: 'Fashion Zoom Magazine',
              url: 'https://fashion-zoom.example',
            },
            areaServed: 'Kerala, India',
          }),
        }}
      />
    </section>
  );
}
