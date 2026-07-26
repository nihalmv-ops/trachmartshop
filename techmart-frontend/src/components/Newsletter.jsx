import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="container-shell py-16">
      <div className="relative rounded-2xl border border-accent/30 bg-gradient-to-br from-surface to-surface-light p-8 sm:p-12 overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl text-ink">
              Get the price-drop alert first
            </h3>
            <p className="text-ink-muted mt-2 max-w-md">
              One email a week when a laptop or phone you'd actually want goes on sale.
              No spam, unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 lg:w-72 bg-base border border-border rounded-lg px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent outline-none"
            />
            <button type="submit" className="btn-primary shrink-0">
              <Send size={16} />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </form>
        </div>
        {submitted && (
          <p className="relative text-sm text-success mt-3 font-mono">
            ✓ You're on the list.
          </p>
        )}
      </div>
    </section>
  );
}
