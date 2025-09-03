import { Users, Camera, Award } from "lucide-react";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Fashion Zoom",
  description:
    "Learn about Fashion Zoom — Kerala’s premier fashion magazine and modeling academy shaping talent with professional training, editorial portfolios, and seasonal fashion shows since 2013.",
};

export default function AboutPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <PageTitle sectionKey="about" />
        </div>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
          Since 2013, Fashion Zoom has been Kerala’s leading fashion magazine and modeling academy — nurturing talent with expert mentorship, editorial portfolio shoots, and seasonal fashion shows across multiple cities. Our work is led by KB Group International and Founder & Chief Editor K.B. Bineesh, bringing 15+ years across events, media, and modeling — with a focus on personal branding and industry readiness.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1">
            <Users className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
            <h3 className="text-xl font-semibold mb-1">Professional Training</h3>
            <p className="text-gray-600">Comprehensive courses for ages 3–60 led by industry mentors.</p>
          </Reveal>
          <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1" delay={0.05}>
            <Camera className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
            <h3 className="text-xl font-semibold mb-1">Editorial Portfolio</h3>
            <p className="text-gray-600">Photoshoots and reels, with best images published in our digital magazine for casting support.</p>
          </Reveal>
          <Reveal className="text-center rounded-lg border p-6 bg-white shadow-sm transition-transform hover:-translate-y-1" delay={0.1}>
            <Award className="h-10 w-10 mx-auto text-[#F81F2E] mb-3" />
            <h3 className="text-xl font-semibold mb-1">Real Shows</h3>
            <p className="text-gray-600">Walk seasonal fashion shows in 3‑star venues with 32‑ft ramp, pro lighting, sound, and LED wall.</p>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <Reveal className="rounded-lg border p-5 bg-white shadow-sm">
            <h3 className="text-base font-semibold mb-2">Founder</h3>
            <p>
              K.B. Bineesh — Founder & Chief Editor, Fashion Zoom Magazine. Active for 15+ years across event management, media, and modeling; leads a team of professionals across choreography, grooming, and production.
            </p>
          </Reveal>
          <Reveal className="rounded-lg border p-5 bg-white shadow-sm" delay={0.05}>
            <h3 className="text-base font-semibold mb-2">Our Ecosystem</h3>
            <p>
              Training, portfolio shoots, and shows — reinforced by digital magazine publishing and casting support. A practical 100‑day social media plan helps turn participants into micro‑celebrities.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
