import { Truck, ShieldCheck, RotateCcw, BadgeCheck } from "lucide-react";
import siteConfig from "../data/siteConfig.json";

const icons = [Truck, ShieldCheck, RotateCcw, BadgeCheck];

export default function WhyUs() {
  return (
    <section className="container-shell py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {siteConfig.trustBadges.map((badge, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={badge.label}
              className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4"
            >
              <span className="bg-accent/10 text-accent rounded-lg p-2.5 shrink-0">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{badge.label}</p>
                <p className="text-xs text-ink-faint">{badge.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
