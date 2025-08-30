import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <HomeHero />

      {/* Shows-first Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Kerala Fashion Shows</h2>
            <div className="h-1 w-20 bg-[#F81F2E] rounded mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Walk with us across Kerala — Trivandrum, Kochi, Calicut, Thrissur, and Kottayam. Inclusive categories for Kids, Teens, and Adults with real runway experience and professional guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.05}>
              <h3 className="text-xl font-semibold mb-2">Categories</h3>
              <p className="text-gray-600">Kids (3–12), Teens (13–17), Adults (18+) — with Traditional and Contemporary segments.</p>
            </Reveal>
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.1}>
              <h3 className="text-xl font-semibold mb-2">State‑wide</h3>
              <p className="text-gray-600">Multiple city chapters and seasonal events across Kerala.</p>
            </Reveal>
            <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm" delay={0.15}>
              <h3 className="text-xl font-semibold mb-2">Family‑friendly</h3>
              <p className="text-gray-600">Age‑appropriate direction, supervised rehearsals, and a welcoming community.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partners / Seen in */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs uppercase tracking-wider text-gray-500 mb-4">Community & Partners</div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="px-3 py-1 rounded border bg-gray-50">Kerala Chapters</span>
            <span className="px-3 py-1 rounded border bg-gray-50">Local Designers</span>
            <span className="px-3 py-1 rounded border bg-gray-50">Photo Studios</span>
            <span className="px-3 py-1 rounded border bg-gray-50">Event Partners</span>
          </div>
        </div>
      </section>

      {/* Upcoming shows */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Upcoming Shows</h2>
            <div className="h-1 w-20 bg-[#F81F2E] rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'Kochi', date: 'Dates announcing soon', img: '/assets/showcase/frame-65.png' },
              { city: 'Calicut', date: 'Dates announcing soon', img: '/assets/showcase/poster-a4-6.png' },
              { city: 'Trivandrum', date: 'Dates announcing soon', img: '/assets/showcase/frame-66.png' },
            ].map((e, i) => (
              <Reveal key={e.city} className="rounded-lg overflow-hidden border shadow-sm bg-white">
                <Image src={e.img} alt={`Fashion Zoom upcoming show — ${e.city} poster`} width={1080} height={1440} className="w-full h-auto" />
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{e.city}</div>
                    <div className="text-sm text-gray-600">{e.date}</div>
                  </div>
                  <Link href={`/admissions?preferredCity=${encodeURIComponent(e.city)}`} className="text-[#F81F2E] underline underline-offset-4">Register interest</Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shows" className="inline-flex items-center underline underline-offset-4 text-[#F81F2E]">All shows & seasons →</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{n:'2013', l:'Founded'}, {n:'8+', l:'Seasons'}, {n:'5+', l:'Cities'}, {n:'1500+', l:'Alumni & Trainees'}].map((s) => (
            <div key={s.n} className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold font-[var(--font-display)]">{s.n}</div>
              <div className="text-sm text-gray-600 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      {/* CTA band */}
      <section className="py-10 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Ready to start your journey?</h3>
            <p className="text-gray-300">Request a callback — we’ll share batch dates, fees, and next steps.</p>
          </div>
          <Link href="/admissions" className="h-12 px-6 inline-flex items-center justify-center rounded-md bg-[#F81F2E] hover:bg-[#d11322] text-white font-semibold">
            Apply for Admissions
          </Link>
        </div>
      </section>
    </div>
  );
}
