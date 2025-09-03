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
  const stats = [
    { k: '333+', v: 'Hours Class' },
    { k: '100+', v: 'Hours Online Training' },
    { k: '20+', v: 'Online Assignments' },
  ];
  const inclusions = [
    'Costume',
    'Theme photoshoot',
    'Ramp photo',
    'Ramp video',
    'Digital Magazine',
    'Grooming',
    'Choreography',
    'Make up',
    'Hairstyling',
    'Food',
    'Certificate',
    'Momento',
    'A/C venue',
    'Self introduction video',
    'PhotoBooth',
    'Casting Support',
    'Social media Promotion',
    'Micro Celebrity Chart',
    'Professional Co-ordinators',
    'International Fashion show support',
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageTitle sectionKey="academy" />
        <p className="text-lg text-gray-700 mb-8">Professional training with direct entry — no auditions required. Kids • Teens • Adults.</p>
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05} className="rounded-lg border p-5 bg-white shadow-sm text-center">
              <div className="text-2xl font-bold tracking-tight">{s.k}</div>
              <div className="text-gray-600 text-sm mt-1">{s.v}</div>
            </Reveal>
          ))}
        </div>
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
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-3">What you get in the program</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {inclusions.map((t, i) => (
              <Reveal key={t} delay={i * 0.02} className="rounded-md border bg-white px-3 py-2 text-sm text-gray-700">
                {t}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Reveal className="rounded-lg border p-5 bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Digital Magazine & Casting Support</h3>
            <p className="text-gray-600 text-sm">
              Every participant’s best images are published in Fashion Zoom’s digital magazine — helpful for casting. Our team also guides your submissions to directors, brands, and agencies.
            </p>
          </Reveal>
          <Reveal className="rounded-lg border p-5 bg-white shadow-sm" delay={0.05}>
            <h3 className="text-lg font-semibold mb-2">Micro-Celebrity Path</h3>
            <p className="text-gray-600 text-sm">
              Get a practical social media plan for the next 100 days — crafted by digital media experts — to grow your presence with consistent posting, reels, and engagement.
            </p>
          </Reveal>
          <Reveal className="rounded-lg border p-5 bg-white shadow-sm" delay={0.1}>
            <h3 className="text-lg font-semibold mb-2">Venue & Production</h3>
            <p className="text-gray-600 text-sm">
              3-star venues, A/C halls, 32-ft ramp, professional lighting, sound, LED wall, and co-ordinators ensure a safe, organized, and professional show experience.
            </p>
          </Reveal>
          <Reveal className="rounded-lg border p-5 bg-white shadow-sm" delay={0.15}>
            <h3 className="text-lg font-semibold mb-2">Coaches & Co-ordinators</h3>
            <p className="text-gray-600 text-sm">
              Experienced choreographers, grooming experts, and production co-ordinators guide you from training to show day.
            </p>
          </Reveal>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href="/admissions" className="inline-flex h-11 px-6 rounded-md bg-[#F81F2E] text-white hover:bg-[#d11322]">Apply for Admissions</Link>
          <Link href="/docs/fashion-zoom-academy-brochure.pdf" target="_blank" rel="noopener" className="inline-flex h-11 px-6 rounded-md border border-gray-300 bg-white text-gray-900 hover:bg-gray-50">
            Download Brochure (PDF)
          </Link>
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
