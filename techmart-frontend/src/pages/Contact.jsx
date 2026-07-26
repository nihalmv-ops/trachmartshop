import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import siteConfig from "../data/siteConfig.json";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="container-shell py-16">
      <div className="mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Contact</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink">
          Talk to someone who reads spec sheets for fun
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-5">
          <ContactRow icon={Phone} label="Phone" value={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phone}`} />
          <ContactRow icon={Mail} label="Email" value={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
          <ContactRow icon={MapPin} label="Store" value={siteConfig.contact.address} />
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2 bg-surface border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-accent outline-none"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-accent outline-none"
              />
            </Field>
          </div>
          <Field label="Message">
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-accent outline-none resize-none"
            />
          </Field>
          <button type="submit" className="btn-primary self-start">
            <Send size={16} /> Send message
          </button>
          {sent && (
            <p className="text-sm text-success font-mono">
              ✓ Message sent — this is a demo form, no email actually goes out.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4">
      <span className="bg-accent/10 text-accent rounded-lg p-2 shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-xs text-ink-faint uppercase tracking-wide">{label}</p>
        <p className="text-sm text-ink mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-ink-muted font-medium">{label}</span>
      {children}
    </label>
  );
}
