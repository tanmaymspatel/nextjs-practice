export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="py-6 px-8 flex justify-between items-center border-b border-orange-500">
        <img src="/your-logo.svg" alt="Logo" className="h-10" />
        <button className="bg-orange-500 text-black font-semibold px-6 py-2 rounded-full">
          Book a Call
        </button>
      </header>
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Unlock Scroll-Stopping Creatives That Drive Clicks
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
          We combine psychology-backed hooks, killer scripts, and data-driven
          design to create ads that actually convert.
        </p>
        <button className="bg-orange-500 text-black font-semibold px-8 py-3 text-lg rounded-full">
          Book Your Free Strategy Call
        </button>
      </section>
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold">Brands That Trust Us</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 py-8">
          <img src="/brand1-logo.svg" alt="Brand 1" className="h-12" />
          <img src="/brand2-logo.svg" alt="Brand 2" className="h-12" />
          <img src="/brand3-logo.svg" alt="Brand 3" className="h-12" />
          <img src="/brand4-logo.svg" alt="Brand 4" className="h-12" />
        </div>
      </section>
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold">Our 4-Step Framework</h2>
      </section>
      <section className="grid md:grid-cols-2 gap-12 px-8 py-16 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ⿡ Psychology-Driven Research & Hook Development
          </h3>
          <p>
            We uncover your audience’s pain points and desires using proven
            psychology to create scroll-stopping hooks.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ⿢ Scriptwriting & Creative Concepting
          </h3>
          <p>
            We craft high-converting scripts with Problem → Solution frameworks,
            emotional storytelling, and strong CTAs.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ⿣ Content Production & Design
          </h3>
          <p>
            We build thumb-stopping visuals with mobile-first framing, bold text
            overlays, and fast-paced formats.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ⿤ Data-Driven Testing & Iteration
          </h3>
          <p>
            We track metrics like CTR and Thumbstop Ratio, doubling down on what
            works and cutting what doesn’t.
          </p>
        </div>
      </section>
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          [Insert portfolio showcase here]
        </p>
      </section>
      <section className="text-center py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Proven KPIs</h2>
        <p className="text-lg max-w-3xl mx-auto">
          [Insert key performance metrics and results here]
        </p>
      </section>
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <p className="text-lg max-w-3xl mx-auto">
          [Insert client reviews and testimonials here]
        </p>
      </section>
      <section className="bg-orange-500 text-black py-16 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Why it works:</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Audience psychology + proven creative strategy + real-time data = Ads
          that don’t just look good — they drive results.
        </p>
        <button className="bg-black text-orange-500 font-semibold px-8 py-3 text-lg rounded-full">
          View Our Portfolio
        </button>
      </section>
      <footer className="py-6 px-8 text-center border-t border-orange-500">
        <p className="text-sm">
          © {currentYear} Your Agency Name. All rights reserved.
        </p>
      </footer>
         
    </div>
  );
}
