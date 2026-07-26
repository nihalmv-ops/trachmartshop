import { Link } from "react-router-dom";
import {
  Cpu,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import siteConfig from "../data/siteConfig.json";

import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
} from "./icons/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-[#F8F7F3] border-t border-[#E4E8E2]">

      <div className="container-shell py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo */}

        <div className="lg:col-span-2">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF5EC] border border-[#D5E0D2]">
              <Cpu className="text-[#5E7D5A]" size={22} />
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-[#243224]">
                {siteConfig.siteName}
              </h2>

              <p className="text-sm text-[#7A847A]">
                {siteConfig.tagline}
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-3 text-[#667266]">

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-3 hover:text-[#5E7D5A] transition"
            >
              <Phone size={18} />
              {siteConfig.contact.phone}
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 hover:text-[#5E7D5A] transition"
            >
              <Mail size={18} />
              {siteConfig.contact.email}
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />
              <span>{siteConfig.contact.address}</span>
            </div>

          </div>

        </div>

        <FooterColumn
          title="Shop"
          links={siteConfig.footerLinks.shop}
        />

        <FooterColumn
          title="Company"
          links={siteConfig.footerLinks.company}
        />

        <FooterColumn
          title="Support"
          links={siteConfig.footerLinks.support}
        />

      </div>

      {/* Bottom */}

      <div className="border-t border-[#E4E8E2]">

        <div className="container-shell py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-[#7A847A]">
            © {year} {siteConfig.siteName}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">

            <SocialIcon
              href={siteConfig.social.instagram}
              Icon={InstagramIcon}
              label="Instagram"
            />

            <SocialIcon
              href={siteConfig.social.twitter}
              Icon={TwitterIcon}
              label="Twitter"
            />

            <SocialIcon
              href={siteConfig.social.facebook}
              Icon={FacebookIcon}
              label="Facebook"
            />

            <SocialIcon
              href={siteConfig.social.youtube}
              Icon={YoutubeIcon}
              label="YouTube"
            />

          </div>

        </div>

      </div>

    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3 className="mb-5 text-lg font-semibold text-[#243224]">
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="text-[#667266] hover:text-[#5E7D5A] transition-colors duration-300"
            >
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF5EC] text-[#5E7D5A] border border-[#D5E0D2] hover:bg-[#5E7D5A] hover:text-white transition-all duration-300"
    >
      <Icon size={18} />
    </a>
  );
}