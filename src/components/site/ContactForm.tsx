import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const programs = [
  "Toddlers / First Touch",
  "U6 Fundamentals",
  "U9 Skill Builder",
  "U13 Player Development",
  "U15 Academy Prep",
  "Private & Small Group Training",
  "Seasonal Camps & Clinics",
  "Not Sure Yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green/30 bg-white p-10 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green/10">
          <CheckCircle2 className="h-8 w-8 text-green" />
        </div>
        <h3 className="font-display text-2xl text-navy uppercase tracking-wide">
          Request received
        </h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Thank you. A member of the We Are Soccer team will reach out within one business day to
          confirm your session and answer any questions.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Parent Name"><input required className={field} placeholder="Jane Smith" /></Field>
        <Field label="Player Name"><input required className={field} placeholder="Alex Smith" /></Field>
        <Field label="Player Age"><input required type="number" min={4} max={20} className={field} placeholder="12" /></Field>
        <Field label="Email"><input required type="email" className={field} placeholder="you@email.com" /></Field>
        <Field label="Phone"><input required type="tel" className={field} placeholder="(000) 000-0000" /></Field>
        <Field label="Program Interest">
          <select required defaultValue="" className={field}>
            <option value="" disabled>Select a program</option>
            {programs.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea rows={3} className={field} placeholder="Tell us a bit about your player and goals." />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        className="btn-green w-full mt-5 font-display uppercase tracking-wider text-base px-6 py-3 rounded-md"
      >
        Book a Session
      </button>
      <p className="mt-3 text-xs text-muted-foreground text-center">
        We respect your privacy. Your information is only used to coordinate your session.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-widest text-navy/80 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
