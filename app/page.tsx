// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top navigation */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                TECGIN SOLUTION AN ENGINEERING
              </div>
              <div className="text-sm text-slate-400">
                Technology · Analytics · Solutions
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#services" className="hover:text-emerald-300">
              Services
            </a>
            <a href="#solutions" className="hover:text-emerald-300">
              Solutions
            </a>
            <a href="#pricing" className="hover:text-emerald-300">
              Pricing
            </a>
            <a href="#contact" className="hover:text-emerald-300">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-200 hover:bg-emerald-500/20"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Modern technology partner for your business
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Build, automate & scale
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                your digital business.
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
              We help companies design, build and operate modern web platforms,
              dashboards and automation systems. From prototypes to production,
              we turn ideas into stable, scalable products.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Book a free consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-emerald-400 hover:text-emerald-200"
              >
                View services
              </a>
            </div>
            <div className="mt-6 text-xs md:text-sm text-slate-400">
              Trusted for analytics, trading tools, finance dashboards and
              internal platforms.
            </div>
          </div>

          {/* Right side "preview" card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs text-slate-400">Live Environment</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex justify-between items-center mb-4 text-xs text-slate-400">
                  <span>Real-time Dashboard</span>
                  <span>Updated now</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4 text-xs">
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                    <div className="text-slate-400 mb-1">Automation</div>
                    <div className="text-lg font-semibold text-emerald-300">
                      92%
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-1">
                      Manual tasks reduced
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
                    <div className="text-slate-400 mb-1">Response time</div>
                    <div className="text-lg font-semibold text-slate-50">
                      180ms
                    </div>
                    <div className="text-[10px] text-cyan-300 mt-1">
                      Global edge delivery
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
                    <div className="text-slate-400 mb-1">Uptime</div>
                    <div className="text-lg font-semibold text-emerald-300">
                      99.9%
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Monitored 24/7
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400">
                  We design and build internal tools, client portals, trading
                  dashboards and automation pipelines tailored to your
                  operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section
        id="services"
        className="border-b border-slate-800 bg-slate-900/60"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Services
              </h2>
              <p className="text-sm md:text-base text-slate-300">
                End-to-end solutions for web platforms, dashboards and
                automation.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-medium text-slate-50 mb-2">
                Web Platforms & Portals
              </h3>
              <p className="text-slate-300 mb-3">
                Design and development of secure, responsive web platforms for
                internal teams or external clients.
              </p>
              <ul className="space-y-1 text-slate-400 text-xs">
                <li>• Company websites & landing pages</li>
                <li>• Self-service client portals</li>
                <li>• Authentication & access control</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-medium text-slate-50 mb-2">
                Dashboards & Analytics
              </h3>
              <p className="text-slate-300 mb-3">
                Custom dashboards for finance, trading, operations and
                performance monitoring.
              </p>
              <ul className="space-y-1 text-slate-400 text-xs">
                <li>• Real-time KPIs & alerts</li>
                <li>• Integrations with APIs & databases</li>
                <li>• Drill-down reports & exports</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="font-medium text-slate-50 mb-2">
                Automation & Integration
              </h3>
              <p className="text-slate-300 mb-3">
                Replace manual spreadsheets and emails with automated flows and
                integrated systems.
              </p>
              <ul className="space-y-1 text-slate-400 text-xs">
                <li>• Process automation</li>
                <li>• 3rd-party API integrations</li>
                <li>• Scheduled jobs & notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / industries */}
      <section
        id="solutions"
        className="border-b border-slate-800 bg-slate-950"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Solutions for your industry
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl">
              We work with finance, logistics, healthcare and technology teams
              to design tools that match real workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="text-xs text-emerald-300 mb-1">
                Finance & Trading
              </div>
              <h3 className="font-medium mb-2">Trading & analytics tools</h3>
              <p className="text-slate-300 text-xs">
                Portfolio dashboards, intraday tools, reporting and automation
                around your existing platforms.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="text-xs text-emerald-300 mb-1">Operations</div>
              <h3 className="font-medium mb-2">Internal tools & workflows</h3>
              <p className="text-slate-300 text-xs">
                Tailored internal apps to replace manual spreadsheets, email
                approvals and fragmented processes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="text-xs text-emerald-300 mb-1">
                SMBs & Startups
              </div>
              <h3 className="font-medium mb-2">Launch-ready platforms</h3>
              <p className="text-slate-300 text-xs">
                Launch your MVP, marketing site or customer portal quickly, with
                a scalable technical foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Simple engagement model
              </h2>
              <p className="text-sm md:text-base text-slate-300 max-w-xl">
                Start small with a scoped project, or work with us on an ongoing
                basis to maintain and evolve your platforms.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col">
              <div className="text-xs text-slate-400 mb-1">
                For prototypes & tests
              </div>
              <h3 className="font-medium mb-2">Project Sprint</h3>
              <p className="text-slate-300 mb-4 text-xs">
                Fixed-scope engagement to deliver a working prototype or
                feature.
              </p>
              <div className="text-2xl font-semibold mb-1">From $X,XXX</div>
              <div className="text-xs text-slate-400 mb-4">
                One-time project fee
              </div>
              <ul className="space-y-1 text-slate-400 text-xs mb-4">
                <li>• 2–4 week timeline</li>
                <li>• Design + development</li>
                <li>• Deployed to production</li>
              </ul>
              <div className="mt-auto">
                <span className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300">
                  Good for MVPs and internal tools
                </span>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-emerald-500 bg-slate-950 p-6 flex flex-col shadow-lg">
              <div className="text-xs text-emerald-300 mb-1">Most popular</div>
              <h3 className="font-medium mb-2">Product Partner</h3>
              <p className="text-slate-300 mb-4 text-xs">
                Ongoing partnership to design, build and maintain your core
                platform.
              </p>
              <div className="text-2xl font-semibold mb-1">Custom</div>
              <div className="text-xs text-slate-400 mb-4">
                Monthly or quarterly engagement
              </div>
              <ul className="space-y-1 text-slate-200 text-xs mb-4">
                <li>• Roadmap & prioritisation</li>
                <li>• Continuous improvement</li>
                <li>• Dedicated contact & support</li>
              </ul>
              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400"
                >
                  Discuss a project
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col">
              <div className="text-xs text-slate-400 mb-1">
                For ongoing support
              </div>
              <h3 className="font-medium mb-2">Support & Care</h3>
              <p className="text-slate-300 mb-4 text-xs">
                Keep your existing systems healthy with maintenance and small
                improvements.
              </p>
              <div className="text-2xl font-semibold mb-1">From $X00</div>
              <div className="text-xs text-slate-400 mb-4">Per month</div>
              <ul className="space-y-1 text-slate-400 text-xs mb-4">
                <li>• Bug fixes & small changes</li>
                <li>• Monitoring & uptime checks</li>
                <li>• Priority issue response</li>
              </ul>
              <div className="mt-auto">
                <span className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300">
                  Ideal for existing platforms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Let’s talk about your project
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4 max-w-lg">
                Share a bit about your idea, current systems and goals. We’ll
                follow up with next steps and a suggested approach.
              </p>
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  {/* Use your free email here for now */}
                  <a
                    href="mailto:yourfreeemail@example.com"
                    className="text-emerald-300 hover:underline"
                  >
                    yourfreeemail@example.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div>Australia · Available remotely</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm">
              <form className="space-y-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    What are you looking to build?
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                    rows={4}
                    placeholder="Briefly describe your project, timeline and goals."
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400"
                >
                  Send (wire up later)
                </button>
                <p className="text-[11px] text-slate-500">
                  This form is visual only for now. We can connect it later to
                  send emails or store leads.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
          <div className="flex gap-3">
            <span>Built with Next.js & Vercel</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
