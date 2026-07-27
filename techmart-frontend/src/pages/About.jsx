import { Target, Users, Award } from "lucide-react";
import siteConfig from "../data/siteConfig.json";
import Testimonials from "../components/Testimonials";

const milestones = [
  { year: "2019", event: "Founded as a single kiosk in Hi-Tech City, Hyderabad." },
  { year: "2021", event: "Crossed 10,000 devices sold; launched the online store." },
  { year: "2023", event: "Introduced full-datasheet listings for every product." },
  { year: "2026", event: "120+ laptops & mobiles, serving customers pan-India." },
];

export default function About() {
  return (
    <div>
      <section className="container-shell py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">
            About {siteConfig.siteName}
          </p>
          <h1 className="font-display font-bold text-4xl text-ink leading-tight">
            We sell the spec sheet, not the slogan.
          </h1>
          <p className="text-ink-muted mt-4 leading-relaxed">
            {siteConfig.siteName} started because comparing laptops and phones
            online meant wading through marketing copy to find the one number
            that actually mattered. So we built a store where every listing
            leads with hardware — processor, RAM, storage, battery — and the
            adjectives come second.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border aspect-video">
          <img
            src="https://i.pinimg.com/736x/92/05/e8/9205e834361d147e5131acf8282da03f.jpg"
            alt="Our store"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-shell py-10 grid sm:grid-cols-3 gap-6">
        <ValueCard icon={Target} title="Precision over hype" text="Specs, benchmarks, and honest comparisons — no filler." />
        <ValueCard icon={Users} title="Real support" text="Our team actually uses the devices we sell." />
        <ValueCard icon={Award} title="Backed by warranty" text="Every device ships with full brand warranty." />
      </section>

      <section className="container-shell py-16">
        <h2 className="font-display font-bold text-2xl text-ink mb-8">Our journey</h2>
        <div className="flex flex-col gap-6">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-6 items-start">
              <span className="font-mono text-accent font-bold shrink-0 w-14">{m.year}</span>
              <div className="flex-1 border-l border-border pl-6 pb-6">
                <p className="text-ink-muted">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}

function ValueCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6">
      <span className="inline-flex bg-accent/10 text-accent rounded-lg p-2.5 mb-4">
        <Icon size={20} />
      </span>
      <h3 className="font-display font-semibold text-ink mb-1.5">{title}</h3>
      <p className="text-sm text-ink-muted">{text}</p>
    </div>
  );
}
