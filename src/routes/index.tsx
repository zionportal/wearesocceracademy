import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Compass,
  Dumbbell,
  Flag,
  Heart,
  Mail,
  MapPin,
  Phone,
  Quote,
  Shield,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Logo } from "@/components/site/Logo";
import { Faq } from "@/components/site/Faq";
import { ContactForm } from "@/components/site/ContactForm";

import heroImg from "@/assets/hero-training.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "We Are Soccer | Youth Soccer Training & Player Development" },
      {
        name: "description",
        content:
          "We Are Soccer develops young players through elite training, strong character, and purpose-driven soccer development.",
      },
      { property: "og:title", content: "We Are Soccer | Youth Soccer Training & Player Development" },
      {
        property: "og:description",
        content:
          "We Are Soccer develops young players through elite training, strong character, and purpose-driven soccer development.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "We Are Soccer Academy",
          description:
            "Youth soccer academy developing complete players through elite training, character, and a clear pathway.",
          sport: "Soccer",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Programs />
      <Pathway />
      <Philosophy />
      <Coaches />
      <Testimonials />
      <Values />
      <FaqSection />
      <FinalCta />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section className="relative bg-pitch pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-40" />
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/70 to-navy-deep" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-silver">
              Elite Youth Player Development
            </span>
          </div>

          <h1 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Train With Truth.
            <br />
            <span className="text-green">Play With Purpose.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-silver font-medium">
            Elite training. Strong character. Bright futures.
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            We Are Soccer develops complete players on and off the field through structured training,
            high standards, and a clear pathway toward the next level.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="btn-green inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md"
            >
              Book a Trial Session <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#programs"
              className="btn-outline-light inline-flex items-center justify-center font-display uppercase tracking-wider text-base px-7 py-4 rounded-md"
            >
              Join Academy
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Trophy, label: "Elite Coaching" },
              { icon: Shield, label: "Character Development" },
              { icon: Compass, label: "Clear Player Pathway" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <Icon className="h-5 w-5 text-green" />
                <span className="font-display uppercase tracking-wider text-sm text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gold/90 flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" />
            Limited training spots available for committed players and families.
          </p>
        </div>

        {/* Hero crest panel */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-full bg-green/10 blur-3xl" />
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="relative h-full w-full flex items-center justify-center">
              <Logo className="h-80 w-80 drop-shadow-[0_20px_60px_rgba(31,168,91,0.35)]" />
            </div>
            <Star className="absolute top-6 right-10 h-5 w-5 text-gold fill-gold" />
            <Star className="absolute bottom-10 left-4 h-4 w-4 text-gold fill-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TRUST BAR ----------------------------- */
function TrustBar() {
  const items = [
    "Player-first training",
    "Parent-trusted development",
    "Structured academy pathway",
    "Purpose-driven coaching",
  ];
  return (
    <section className="bg-charcoal border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2.5 text-white/85">
            <CheckCircle2 className="h-4 w-4 text-green flex-shrink-0" />
            <span className="font-display uppercase tracking-wider text-xs sm:text-sm">
              {t}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- ABOUT -------------------------------- */
function About() {
  const cards = [
    {
      icon: Target,
      title: "Technical Training",
      body: "Master the fundamentals — first touch, passing, finishing, and 1v1 play — through disciplined, repetition-based sessions.",
    },
    {
      icon: Heart,
      title: "Strong Character",
      body: "Players learn responsibility, resilience, and respect. Habits built in training carry into school, home, and life.",
    },
    {
      icon: Compass,
      title: "Clear Pathway",
      body: "Every player follows a structured progression with measurable goals, honest feedback, and a path toward higher levels.",
    },
  ];
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About We Are Soccer"
          title={<>Built for Development. <span className="text-green">Trained for the Next Level.</span></>}
          body="We Are Soccer helps young players grow technically, mentally, physically, and personally through structured training, high standards, and purpose-driven coaching."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-green/40 transition shadow-sm hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display uppercase tracking-wide text-xl text-navy">
                {c.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-5 h-1 w-10 bg-green rounded-full group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROGRAMS ------------------------------ */
function Programs() {
  const programs = [
    {
      tag: "Ages 5–9",
      title: "Foundation Training",
      who: "New and early-stage players building a love for the game.",
      benefit: "Develops first touch, coordination, confidence, and core fundamentals.",
    },
    {
      tag: "Ages 10–14",
      title: "Competitive Player Development",
      who: "Players ready to compete and refine technical-tactical ability.",
      benefit: "Sharpens decision-making, positional awareness, and game speed.",
    },
    {
      tag: "Ages 13–18",
      title: "Elite Academy Pathway",
      who: "Committed players targeting club, college, and high-level opportunities.",
      benefit: "High-intensity training, performance tracking, and pathway guidance.",
    },
    {
      tag: "All Ages",
      title: "Private & Small Group Training",
      who: "Players seeking individualized attention and accelerated growth.",
      benefit: "Personalized sessions to fix gaps and unlock the next level.",
    },
  ];
  return (
    <section id="programs" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Programs"
          title={<>Choose the <span className="text-green">Right Training Path</span></>}
          body="Structured programs by age and ability, each engineered to develop the complete player."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-card border border-border p-7 sm:p-8 hover:border-green/40 transition shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-display text-green bg-green/10 px-2.5 py-1 rounded">
                  {p.tag}
                </span>
                <Trophy className="h-5 w-5 text-gold" />
              </div>
              <h3 className="mt-5 font-display uppercase tracking-wide text-2xl text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-navy">Who it's for: </span>{p.who}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold text-navy">Key benefit: </span>{p.benefit}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-display uppercase tracking-wider text-sm text-green hover:text-navy transition"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PATHWAY ------------------------------- */
function Pathway() {
  const steps = [
    { n: "01", title: "Learn the Game", body: "Foundations, fundamentals, and a true love for the ball." },
    { n: "02", title: "Build Discipline", body: "Consistency, focus, and habits that define every elite player." },
    { n: "03", title: "Compete With Purpose", body: "Apply technique under pressure. Train to win the right way." },
    { n: "04", title: "Prepare for Opportunity", body: "Club, college, and the next stage — ready, evaluated, and equipped." },
  ];
  return (
    <section id="pathway" className="relative py-20 sm:py-28 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Player Pathway"
          title={<>A Clear Pathway from <span className="text-green">First Touch</span> to Future Opportunity</>}
          body="Every player follows a structured journey. Each stage builds the skill, mindset, and standards required for the next."
        />

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-green/0 via-green to-green/0" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="relative z-10 mx-auto lg:mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-navy border-2 border-green">
                  <span className="font-display text-2xl text-green">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display uppercase tracking-wide text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-white/70 leading-relaxed">{s.body}</p>
                {i < steps.length - 1 && (
                  <div className="lg:hidden mx-auto my-6 h-10 w-px bg-green/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PHILOSOPHY ----------------------------- */
function Philosophy() {
  const blocks = [
    { icon: Target, title: "Technical Skill", body: "Repeatable, high-quality execution under pressure." },
    { icon: Brain, title: "Tactical Understanding", body: "Reading the game, choosing right, playing smarter." },
    { icon: Dumbbell, title: "Athletic Development", body: "Speed, strength, and durability built for soccer." },
    { icon: Shield, title: "Mental Discipline", body: "Focus, composure, and the ability to compete." },
    { icon: Heart, title: "Character & Leadership", body: "Players who lead themselves and lift others." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Training Philosophy"
          title={<>More Than Drills. <span className="text-green">A Complete Player System.</span></>}
          body="Five pillars define every session. Together they develop the player and the person."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 hover:border-green/40 transition">
              <b.icon className="h-7 w-7 text-green" />
              <h3 className="mt-4 font-display uppercase tracking-wide text-lg text-navy">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ COACHES ------------------------------- */
function Coaches() {
  const coaches = [
    { img: coach1, name: "Marco Alvarez", role: "Academy Director", bio: "Two decades developing players from grassroots to professional pathways across Europe and the US." },
    { img: coach2, name: "James Whitfield", role: "Technical Coach", bio: "Specialist in technical mastery and possession-based development for ages 8–14." },
    { img: coach3, name: "Lena Carter", role: "Player Development Coach", bio: "Performance-focused coach building elite-level players and confident competitors." },
  ];
  return (
    <section id="coaches" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Coaches"
          title={<>Led by Coaches <span className="text-green">Who Build Players</span></>}
          body="Experienced, licensed coaches who combine elite standards with genuine care for every player."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {coaches.map((c) => (
            <div key={c.name} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="text-[10px] font-display uppercase tracking-[0.25em] text-green">{c.role}</div>
                  <div className="mt-1 font-display text-2xl uppercase tracking-wide">{c.name}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{c.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- TESTIMONIALS ---------------------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Our son's confidence and technical ability have completely transformed. The coaches treat him like a real player and push him with care.",
      name: "Sarah M.",
      role: "Parent of U12 Player",
    },
    {
      quote:
        "The structure and discipline at We Are Soccer carry into school and home. He shows up early, listens, and works. That's the real win.",
      name: "David R.",
      role: "Parent of U14 Player",
    },
    {
      quote:
        "I've trained at clubs before, but the coaching here is different. Every session has a purpose and I can see myself getting better every week.",
      name: "Marcus T.",
      role: "Academy Player, Age 16",
    },
  ];
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Trusted by Families. <span className="text-green">Built for Players.</span></>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm flex flex-col">
              <Quote className="h-7 w-7 text-green" />
              <blockquote className="mt-4 text-base text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <figcaption className="mt-3">
                <div className="font-display uppercase tracking-wide text-navy">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- VALUES ------------------------------- */
function Values() {
  const values = [
    { icon: Flag, label: "Truth" },
    { icon: Shield, label: "Discipline" },
    { icon: Target, label: "Development" },
    { icon: Users, label: "Teamwork" },
    { icon: Compass, label: "Purpose" },
    { icon: Award, label: "Excellence" },
  ];
  return (
    <section className="py-20 sm:py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Our Values"
          title={<>The Standards <span className="text-green">We Train By</span></>}
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:border-green/40 hover:bg-white/[0.06] transition"
            >
              <v.icon className="h-7 w-7 text-green mx-auto" />
              <div className="mt-3 font-display uppercase tracking-widest text-lg">{v.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ --------------------------------- */
function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions Parents <span className="text-green">Ask First</span></>}
        />
        <div className="mt-10">
          <Faq />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ------------------------------ */
function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28 bg-pitch text-white overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-30" />
      <div className="relative mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <Star className="h-5 w-5 fill-gold text-gold mx-auto mb-4" />
        <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Ready to Give Your Player a <span className="text-green">Serious Place to Grow?</span>
        </h2>
        <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
          Book a trial session and see how structured, purpose-driven training can help your player
          develop on and off the field.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a href="#contact" className="btn-green inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md">
            Book a Trial Session <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#programs" className="btn-outline-light inline-flex items-center justify-center font-display uppercase tracking-wider text-base px-7 py-4 rounded-md">
            Join Academy
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------- */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="section-eyebrow">Contact</div>
          <h2 className="mt-3 font-display uppercase text-4xl sm:text-5xl text-navy leading-[1.05]">
            Start the <span className="text-green">Conversation</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your player and we'll recommend the right path. A coach will be in touch
            within one business day.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow icon={Mail} label="Email" value="hello@wearesoccer.com" />
            <ContactRow icon={Phone} label="Phone" value="(000) 000-0000" />
            <ContactRow icon={MapPin} label="Training Location" value="Your City, Your State" />
          </div>

          <div className="mt-8 rounded-xl border border-green/20 bg-green/5 p-5">
            <div className="flex items-center gap-2 text-green font-display uppercase tracking-wider text-sm">
              <Star className="h-4 w-4 fill-green" /> Limited Spots
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              We intentionally cap each training group to protect quality coaching. Reserve a trial
              while spots are open.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-green flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest font-display text-navy/70">{label}</div>
        <div className="text-base text-foreground font-medium">{value}</div>
      </div>
    </div>
  );
}

/* ------------------------------- FOOTER ------------------------------- */
function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-white tracking-wider text-lg">WE ARE SOCCER</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-silver/80">Academy</span>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">
            We Are Soccer develops complete players through elite training, strong character, and
            purpose-driven development.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="font-display uppercase tracking-widest text-xs text-green">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["About","Programs","Pathway","Coaches","FAQ","Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-white/80 hover:text-white">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="font-display uppercase tracking-widest text-xs text-green">Get In Touch</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>hello@wearesoccer.com</li>
            <li>(000) 000-0000</li>
            <li>Your City, Your State</li>
          </ul>
          <div className="mt-5 flex gap-3 text-xs text-white/60">
            <span className="hover:text-white cursor-pointer">Instagram</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">YouTube</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">TikTok</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
        <div>© {new Date().getFullYear()} We Are Soccer Academy. All rights reserved.</div>
        <div className="font-display uppercase tracking-widest">Train With Truth. Play With Purpose.</div>
      </div>
    </footer>
  );
}

/* --------------------------- SECTION HEADER --------------------------- */
function SectionHeader({
  eyebrow, title, body, dark = false,
}: { eyebrow: string; title: React.ReactNode; body?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2
        className={`mt-3 font-display uppercase text-4xl sm:text-5xl leading-[1.05] tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/75" : "text-muted-foreground"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
