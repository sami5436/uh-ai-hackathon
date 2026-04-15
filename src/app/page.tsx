import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-uh-red selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-white flex items-center justify-center overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-8 mt-8">
          {/* Logo with mix-blend-multiply to hide absolute white backgrounds */}
          <div className="w-32 h-32 md:w-56 md:h-56 relative mb-4 mix-blend-multiply hover:scale-105 transition-transform duration-500">
            <Image
              src="/uh-logo-new1.png"
              alt="UH Circuit Board Logo"
              width={224}
              height={224}
              className="object-contain w-full h-full"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight relative group pb-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="font-black text-uh-red">AI</span>
            <span className="font-light text-uh-charcoal/40">HACKATHON</span>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-uh-red to-rose-600 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out animate-expand"></div>
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-uh-charcoal/70 text-sm md:text-xl font-medium bg-white/50 backdrop-blur-md py-3 px-6 sm:px-8 rounded-2xl border border-uh-charcoal/5 shadow-sm text-center">
            <span>April 24th, 2026</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-uh-red animate-pulse"></span>
            <span>PGH 232</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-uh-red animate-pulse"></span>
            <span>10 AM – 6 PM</span>
          </div>

          {/* Big RSVP Button */}
          <a
            href="https://forms.gle/aPqQtow9XUoMYFcB7"
            target="_blank"
            rel="noopener noreferrer"
            id="rsvp-button"
            className="inline-flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 bg-uh-red text-white text-lg sm:text-2xl font-black tracking-wide rounded-2xl shadow-[0_8px_30px_rgba(200,16,46,0.4)] hover:shadow-[0_12px_40px_rgba(200,16,46,0.6)] hover:scale-105 hover:bg-[#a80d25] active:scale-[0.98] transition-all duration-300 animate-rsvp-glow"
          >
            RSVP HERE
          </a>
          <p className="text-uh-charcoal/50 text-xs sm:text-sm -mt-3">
            All teams must RSVP before the event — spots are limited!
          </p>

          <div className="inline-flex items-center px-4 sm:px-6 py-2.5 rounded-xl border border-uh-red/20 bg-uh-red/5 text-uh-red shadow-[0_4px_20px_rgba(200,16,46,0.1)] backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-uh-red/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-center">
              Free Food · Medals for Top 3 · Open to All Students
            </span>
          </div>

          <p className="tracking-[0.3em] md:tracking-[0.5em] text-uh-charcoal/40 text-xs md:text-sm pt-8 md:pt-12 uppercase font-bold">
            Innovate · Compete · Solve
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full py-24 md:py-32 bg-uh-gray px-6 border-y border-uh-charcoal/5">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-uh-charcoal/[0.02] to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-uh-charcoal mb-4 tracking-tight">The Event</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-uh-red to-orange-500 rounded-r-full"></div>
            </div>
            <p className="text-xl text-uh-charcoal/80 font-light leading-relaxed">
              Hosted by <strong className="font-semibold text-uh-charcoal">Dr. Nouhad Rizk</strong>, Director of Undergraduate Studies for the Computer Science Department, this intensive Kaggle-based <strong className="font-semibold text-uh-charcoal">Data Science &amp; AI competition</strong> challenges teams to solve <strong className="font-semibold text-uh-charcoal">three real-world problems</strong> under a strict deadline.
            </p>
            <p className="text-lg text-uh-charcoal/60 font-light leading-relaxed border-l-2 border-uh-red/30 pl-4">
              Push your limits. The ultimate catch? No internet, no phones—only printed physical references are allowed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Duration", value: "5 Hours" },
              { label: "Team Size", value: "3 per Team" },
              { label: "Problems", value: "3 DS Problems" },
              { label: "Platform", value: "Kaggle" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-uh-charcoal/5 hover:-translate-y-1 hover:shadow-xl hover:border-uh-red/30 transition-all duration-300 group">
                <p className="text-xs text-uh-red uppercase tracking-widest font-bold mb-2 group-hover:text-uh-charcoal transition-colors">{stat.label}</p>
                <p className="text-3xl font-black text-uh-charcoal tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative w-full py-24 md:py-32 bg-white px-6 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-64 bg-uh-red/5 blur-[80px] rounded-bl-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-uh-charcoal mb-4 tracking-tight">Rules</h2>
            <div className="w-16 h-1.5 bg-uh-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Allowed */}
            <div className="bg-green-50 border border-green-200/60 rounded-2xl p-8 space-y-5">
              <h3 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                Allowed
              </h3>
              <ul className="space-y-3 text-green-900/80 font-light text-base">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5 shrink-0">•</span>
                  <span>Physical printed references with <strong className="font-semibold">no restriction</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5 shrink-0">•</span>
                  <span>Code snippets and syntax guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5 shrink-0">•</span>
                  <span>Relevant parts of Python documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5 shrink-0">•</span>
                  <span>Algorithms, formulas, etc.</span>
                </li>
              </ul>
            </div>

            {/* Not Allowed */}
            <div className="bg-red-50 border border-red-200/60 rounded-2xl p-8 space-y-5">
              <h3 className="text-2xl font-bold text-red-800 flex items-center gap-2">
                Not Allowed
              </h3>
              <ul className="space-y-3 text-red-900/80 font-light text-base">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0">•</span>
                  <span>Communication outside the team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0">•</span>
                  <span>Access to internet, phones, or any electronic resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5 shrink-0">•</span>
                  <span>Access to devices except the <strong className="font-semibold">one laptop allowed per team</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="relative w-full py-24 md:py-32 bg-uh-gray px-6 overflow-hidden border-y border-uh-charcoal/5">
        <div className="absolute left-0 bottom-0 w-1/2 h-96 bg-uh-red/5 rounded-tr-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-uh-charcoal mb-4 tracking-tight">Agenda</h2>
            <div className="w-16 h-1.5 bg-uh-red mx-auto rounded-full"></div>
          </div>

          <div className="relative border-l-2 border-uh-charcoal/10 ml-4 md:mx-auto md:max-w-2xl space-y-12">
            {[
              { time: "10:00 AM", title: "Arrival & Check-in", desc: "Sign in, find your team, and get settled." },
              { time: "11:00 AM", title: "Lunch", desc: "Pizza and drinks provided before the competition begins." },
              { time: "12:00 PM", title: "Hack Time Begins", desc: "Kaggle competition opens — 5 hours to tackle 3 Data Science problems." },
              { time: "5:00 PM", title: "Submissions Close", desc: "Final predictions submitted and results tallied." },
              { time: "5:30 PM", title: "Results & Wrap Up", desc: "Winners announced and closing remarks." },
            ].map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-12 group">
                {/* Glowing Timeline dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full border-[3px] border-uh-red group-hover:scale-125 group-hover:bg-uh-red transition-all duration-300 shadow-[0_0_10px_rgba(200,16,46,0.5)]"></div>

                <div className="flex flex-col md:flex-row md:items-baseline md:gap-8 bg-white/50 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
                  <span className="text-uh-red font-mono font-bold text-xl md:w-36 shrink-0">{item.time}</span>
                  <div>
                    <h3 className="text-xl font-bold text-uh-charcoal mb-1 group-hover:text-uh-red transition-colors">{item.title}</h3>
                    <p className="text-uh-charcoal/60 font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="w-full py-24 md:py-32 bg-uh-charcoal px-6 text-uh-white relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-uh-red to-transparent opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-uh-red/20 blur-[100px] rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Hosted By</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            {/* IEEE-NSM Card */}
            <div className="p-8 border border-uh-white/10 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-3 text-uh-red group-hover:text-white transition-colors">IEEE-NSM</h3>
              <p className="text-uh-white/70 font-light text-base leading-relaxed mb-8">
                IEEE-NSM at the University of Houston connects students with projects, research, competitions, and community—advancing technology for the benefit of humanity.
              </p>
              <a href="https://ieee-nsm-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white border-b border-uh-red pb-1 hover:text-uh-red transition-colors">
                Explore IEEE-NSM →
              </a>
            </div>

            {/* Dr Rizk Card */}
            <div className="p-8 border border-uh-white/10 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-3 text-uh-red group-hover:text-white transition-colors">Dr. Nouhad Rizk</h3>
              <p className="text-uh-white/70 font-light text-base leading-relaxed mb-8">
                An esteemed professor and visionary at the University of Houston, deeply dedicated to innovating edge-cutting curricula and shaping the next generation of AI engineers.
              </p>
              <a href="https://www.uh.edu/nouhadrizk/index.php" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white border-b border-uh-red pb-1 hover:text-uh-red transition-colors">
                View Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-16 md:py-20 bg-uh-gray px-6 border-y border-uh-charcoal/5">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-uh-charcoal mb-4 tracking-tight">Contact</h2>
            <div className="w-12 h-1.5 bg-uh-red mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-uh-charcoal/5 text-center">
              <p className="text-xs text-uh-red uppercase tracking-widest font-bold mb-2">Host</p>
              <p className="text-lg font-bold text-uh-charcoal">Dr. Nouhad Rizk</p>
              <a href="mailto:njrizk@Central.UH.EDU" className="text-sm text-uh-charcoal/60 hover:text-uh-red transition-colors break-all">
                njrizk@Central.UH.EDU
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-uh-charcoal/5 text-center">
              <p className="text-xs text-uh-red uppercase tracking-widest font-bold mb-2">Coordinator</p>
              <p className="text-lg font-bold text-uh-charcoal">Mohamed</p>
              <p className="text-xs text-uh-charcoal/50 mb-1">IEEE-NSM Competitions Director</p>
              <a href="mailto:msabdelrahman@uh.edu" className="text-sm text-uh-charcoal/60 hover:text-uh-red transition-colors break-all">
                msabdelrahman@uh.edu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-white text-uh-charcoal px-6 border-t border-uh-charcoal/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            {/* Same mix-blend trick for footer logo */}
            <div className="w-16 h-16 relative mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <Image
                src="/uh-logo-new1.png"
                alt="UH Logo"
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="border-l-2 border-uh-charcoal/10 pl-5">
              <p className="font-black text-uh-charcoal tracking-wide">Hosted by IEEE-NSM</p>
              <p className="text-sm font-light text-uh-charcoal/60">University of Houston</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="tracking-[0.2em] text-[10px] uppercase font-bold text-uh-charcoal/40 mb-2">
              Innovate · Compete · Solve
            </p>
            <p className="text-xs font-medium text-uh-charcoal/50">
              © 2026 Dr. Rizk and IEEE-NSM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
