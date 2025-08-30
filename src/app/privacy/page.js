export const metadata = {
  title: "Privacy Policy — Fashion Zoom",
  description:
    "Privacy policy for Fashion Zoom Magazine & Modeling Academy.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <div className="h-1 w-16 bg-[#F81F2E] rounded mb-6" />
        <div className="prose prose-gray max-w-none">
          <p>
            We respect your privacy. Contact details submitted via our Admissions and Contact forms are used only to respond to your inquiry and share program information. We do not sell your data.
          </p>
          <h2>Data We Collect</h2>
          <ul>
            <li>Basic contact details (name, phone, email)</li>
            <li>City and program preferences</li>
            <li>Any goals you share with us</li>
          </ul>
          <h2>How We Use Your Data</h2>
          <ul>
            <li>To contact you regarding batches, fees, and schedules</li>
            <li>To coordinate portfolio sessions and show participation</li>
          </ul>
          <p>
            For questions about this policy, contact us via the <a className="underline" href="/contact">Contact</a> page.
          </p>
        </div>
      </div>
    </section>
  );
}

