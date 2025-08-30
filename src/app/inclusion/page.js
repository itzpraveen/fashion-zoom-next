export const metadata = {
  title: "Diversity, Safety & Inclusion — Fashion Zoom",
  description:
    "Fashion Zoom’s commitment to inclusive, family‑friendly programs and safe experiences for kids, teens, and adults across Kerala.",
};

export default function InclusionPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Diversity, Safety & Inclusion</h1>
        <div className="h-1 w-16 bg-[#F81F2E] rounded mb-6" />
        <div className="prose prose-gray max-w-none">
          <p>
            Fashion Zoom is open to everyone — all ages, backgrounds, and body types. We’ve been proudly family‑friendly since 2013 and design our programs to be positive, respectful, and confidence‑building for kids, teens, and adults alike.
          </p>
          <h2>Our Principles</h2>
          <ul>
            <li><strong>Inclusive by design:</strong> Programs for Kids (3–12), Teens (13–17), and Adults (18+).</li>
            <li><strong>Safety first:</strong> Supervised sessions, vetted mentors, and clear guidelines for minors.</li>
            <li><strong>Professional standards:</strong> Respectful styling and age‑appropriate creative direction.</li>
            <li><strong>Consent and privacy:</strong> Written permissions for minors and opt‑in media release.</li>
          </ul>
          <h2>Parents & Guardians</h2>
          <p>
            Parents are welcome during orientations and show rehearsals. We provide clear schedules, batch communication, and a single point of contact for each city chapter.
          </p>
          <h2>Reporting & Support</h2>
          <p>
            If you ever have a concern, please reach out at <a className="underline" href="tel:+918590866865">+91 85908 66865</a> or via our <a className="underline" href="/contact">Contact</a> page.
          </p>
        </div>
      </div>
    </section>
  );
}

