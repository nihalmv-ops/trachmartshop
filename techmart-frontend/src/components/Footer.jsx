import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin } from "lucide-react";
import siteConfig from "../data/siteConfig.json";
import { InstagramIcon, TwitterIcon, FacebookIcon, YoutubeIcon } from "./icons/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 mt-24">
      <div className="container-shell py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-accent/10 border border-accent/30 text-accent rounded-lg p-1.5">
              <Cpu size={18} />
            </span>
            <span className="font-display font-bold text-lg">{siteConfig.siteName}</span>
          </div>
          <p className="text-sm text-ink-muted max-w-xs mb-4">{siteConfig.tagline}</p>
          <div className="flex flex-col gap-2 text-sm text-ink-muted">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} /> {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} /> {siteConfig.contact.email}
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" /> {siteConfig.contact.address}
            </p>
          </div>
        </div>

        <FooterCol title="Shop" links={siteConfig.footerLinks.shop} />
        <FooterCol title="Company" links={siteConfig.footerLinks.company} />
        <FooterCol title="Support" links={siteConfig.footerLinks.support} />
      </div>

      <div className="border-t border-border">
        <div className="container-shell py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint font-mono">
            © {year} {siteConfig.siteName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <SocialIcon href={siteConfig.social.instagram} Icon={InstagramIcon} label="Instagram" />
            <SocialIcon href={siteConfig.social.twitter} Icon={TwitterIcon} label="Twitter" />
            <SocialIcon href={siteConfig.social.facebook} Icon={FacebookIcon} label="Facebook" />
            <SocialIcon href={siteConfig.social.youtube} Icon={YoutubeIcon} label="YouTube" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-sm mb-3 text-ink">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.path} className="text-sm text-ink-muted hover:text-accent transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-2 rounded-lg border border-border text-ink-muted hover:text-accent hover:border-accent/50 transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}
