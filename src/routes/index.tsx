import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "We Are Soccer | Youth Soccer Training & Player Development" },
      {
        name: "description",
        content:
          "We Are Soccer helps young players build skill, fitness, confidence, discipline, and love for the game through age-based soccer training.",
      },
      { property: "og:title", content: "We Are Soccer | Youth Soccer Training & Player Development" },
      {
        property: "og:description",
        content:
          "Age-based youth soccer training focused on skill, confidence, discipline, fitness, and game understanding.",
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
            "Youth soccer academy developing players through age-based training, technical skill, fitness, discipline, and game confidence.",
          sport: "Soccer",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useSectionSnap();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Pathway />
      <Philosophy />
      <SessionFlow />
      <Parents />
      <Values />
      <FaqSection />
      <FinalCta />
      <Contact />
      <Footer />
    </div>
  );
}

function useSectionSnap() {
  useEffect(() => {
    let timer: number | undefined;
    let snapping = false;

    const snapToNearestSection = () => {
      if (snapping) return;

      const sections = Array.from(document.querySelectorAll<HTMLElement>(".snap-section"));
      if (!sections.length) return;

      const currentY = window.scrollY;
      const nearest = sections.reduce((closest, section) => {
        const sectionTop = section.offsetTop;
        const closestTop = closest.offsetTop;
        return Math.abs(sectionTop - currentY) < Math.abs(closestTop - currentY) ? section : closest;
      }, sections[0]);

      const targetTop = nearest.offsetTop;
      if (Math.abs(targetTop - currentY) < 8) return;

      snapping = true;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
      window.setTimeout(() => {
        snapping = false;
      }, 260);
    };

    const onScroll = () => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(snapToNearestSection, 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timer) window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

/* ------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section className="snap-section relative bg-pitch pt-16 sm:pt-20 pb-8 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-silver">
              Year-Round Youth Soccer Development
            </span>
          </div>

          <h1 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Train With Truth.
            <br />
            <span className="text-green">Play With Purpose.</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-silver font-medium">
            Age-based training. Real confidence. Better habits with the ball.
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            We help young players build soccer skill, fitness, discipline, and joy for the game
            through structured sessions designed for each stage of development.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="btn-green inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md"
            >
              Join Academy <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Trophy, label: "Age-Based Classes" },
              { icon: Shield, label: "Fitness & Discipline" },
              { icon: Compass, label: "Skill Progression" },
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

          <p className="mt-5 text-sm text-gold/90 flex items-center gap-2">
            <Star className="h-4 w-4 fill-gold text-gold" />
            Limited training spots available for committed players and families.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 max-w-2xl">
            {[
              "Player-first training",
              "Parent-trusted development",
              "Year-round development",
              "Camps, clinics, private training",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="h-4 w-4 text-green flex-shrink-0" />
                <span className="font-display uppercase tracking-wider text-xs">{item}</span>
              </div>
            ))}
          </div>
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

/* -------------------------------- ABOUT -------------------------------- */
function About() {
  const cards = [
    {
      icon: Target,
      title: "Skill First",
      body: "Players build touch, passing, finishing, control, and confidence through focused repetition and live pressure.",
    },
    {
      icon: Heart,
      title: "Active & Confident",
      body: "Training keeps kids moving while developing coordination, flexibility, focus, and a stronger relationship with the game.",
    },
    {
      icon: Compass,
      title: "Clear Progression",
      body: "Each age group has a purpose, so players know what they are learning and families know what comes next.",
    },
  ];
  return (
    <section id="about" className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About We Are Soccer"
          title={<>Built for Young Players. <span className="text-green">Structured for Growth.</span></>}
          body="We Are Soccer blends ball mastery, movement, confidence, discipline, and game play into a training experience players can enjoy while improving."
        />
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-border bg-card p-5 hover:border-green/40 transition shadow-sm hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display uppercase tracking-wide text-lg text-navy">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-4 h-1 w-10 bg-green rounded-full group-hover:w-16 transition-all" />
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
      tag: "Ages 2-4",
      title: "Toddlers / First Touch",
      who: "Early learners discovering movement, balance, and the ball.",
      benefit: "Builds comfort, coordination, listening habits, and soccer curiosity.",
    },
    {
      tag: "Ages 4-6",
      title: "U6 Fundamentals",
      who: "Young players ready for simple skills and fun game play.",
      benefit: "Develops dribbling, passing basics, confidence, and group participation.",
    },
    {
      tag: "Ages 7-9",
      title: "U9 Skill Builder",
      who: "Players building stronger technique and faster decisions.",
      benefit: "Improves first touch, 1v1 play, ball control, and small-sided awareness.",
    },
    {
      tag: "Ages 10-13",
      title: "U13 Development",
      who: "Players preparing for a more demanding soccer environment.",
      benefit: "Adds tactical habits, fitness, discipline, and competitive rhythm.",
    },
    {
      tag: "Ages 14-16",
      title: "U15 Academy Prep",
      who: "Older players who want higher standards and sharper execution.",
      benefit: "Builds speed of play, leadership, conditioning, and next-level readiness.",
    },
    {
      tag: "All Ages",
      title: "Private, Camps & Clinics",
      who: "Players who need focused reps, seasonal activity, or extra development.",
      benefit: "Targets specific skills through private sessions, camps, and clinics.",
    },
  ];
  return (
    <section id="programs" className="snap-section py-8 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Programs"
          title={<>Classes for <span className="text-green">Every Stage</span></>}
          body="From first touches to academy preparation, each group is built around age, ability, and the way young players actually learn."
        />
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-card border border-border p-4 hover:border-green/40 transition shadow-sm hover:shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-display text-green bg-green/10 px-2 py-1 rounded">
                  {p.tag}
                </span>
                <Trophy className="h-4 w-4 text-gold" />
              </div>
              <h3 className="mt-3 font-display uppercase tracking-wide text-lg text-navy">
                {p.title}
              </h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                <span className="font-semibold text-navy">Who: </span>{p.who}
              </p>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                <span className="font-semibold text-navy">Focus: </span>{p.benefit}
              </p>
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
    { n: "04", title: "Prepare for Opportunity", body: "Club, school, travel, and the next stage - ready, evaluated, and equipped." },
  ];
  return (
    <section id="pathway" className="snap-section relative py-8 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Player Pathway"
          title={<>A Clear Pathway from <span className="text-green">First Touch</span> to Future Opportunity</>}
          body="Every player follows a structured journey. Each stage builds the skill, mindset, and standards required for the next."
        />

        <div className="mt-6 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-green/0 via-green to-green/0" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="relative z-10 mx-auto lg:mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-navy border-2 border-green">
                  <span className="font-display text-2xl text-green">{s.n}</span>
                </div>
                <h3 className="mt-4 font-display uppercase tracking-wide text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
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
    <section className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Training Philosophy"
          title={<>More Than Drills. <span className="text-green">A Complete Player System.</span></>}
          body="Five pillars define every session. Together they develop the player and the person."
        />
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-5 hover:border-green/40 transition">
              <b.icon className="h-6 w-6 text-green" />
              <h3 className="mt-3 font-display uppercase tracking-wide text-base text-navy">{b.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SESSION FLOW ---------------------------- */
function SessionFlow() {
  const steps = [
    { icon: Dumbbell, title: "Warm Up", body: "Players activate their bodies, get focused, and prepare for the session with movement and ball touches." },
    { icon: Target, title: "Skill Work", body: "Guided reps build dribbling, passing, shooting, control, and confidence." },
    { icon: Users, title: "Game Play", body: "Small-sided games turn skills into decisions, teamwork, vision, and competitive habits." },
    { icon: Brain, title: "Cool Down", body: "Players reset, review what they learned, and leave with a simple focus for the next session." },
  ];
  return (
    <section id="sessions" className="snap-section py-8 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Session Flow"
          title={<>What Players <span className="text-green">Can Expect</span></>}
          body="Every class has a rhythm: prepare the body, build the skill, apply it in play, then leave with a clear next step."
        />
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-2xl text-gold">0{index + 1}</span>
              </div>
              <h3 className="mt-4 font-display uppercase tracking-wide text-lg text-navy">{step.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ------------------------------ PARENTS ------------------------------- */
function Parents() {
  const items = [
    {
      icon: CheckCircle2,
      title: "Clear Expectations",
      body: "Families know what each session is for, what players are practicing, and how the next step is chosen.",
    },
    {
      icon: Heart,
      title: "Positive Standards",
      body: "Players are pushed to improve without losing the fun, encouragement, and confidence young athletes need.",
    },
    {
      icon: Shield,
      title: "Organized Training",
      body: "Sessions are built around movement, skill work, game play, and simple feedback so development stays easy to follow.",
    },
  ];
  return (
    <section className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="For Parents"
          title={<>Simple to Follow. <span className="text-green">Built for Progress.</span></>}
          body="Parents should not have to guess what their player is getting. We make the training rhythm, expectations, and next step clear."
        />
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <item.icon className="h-6 w-6 text-green" />
              <h3 className="mt-3 font-display uppercase tracking-wide text-lg text-navy">{item.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
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
    <section className="snap-section py-8 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Our Values"
          title={<>The Standards <span className="text-green">We Train By</span></>}
        />
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center hover:border-green/40 hover:bg-white/[0.06] transition"
            >
              <v.icon className="h-6 w-6 text-green mx-auto" />
              <div className="mt-3 font-display uppercase tracking-widest text-base">{v.label}</div>
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
    <section id="faq" className="snap-section py-8 bg-muted/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions Parents <span className="text-green">Ask First</span></>}
        />
        <div className="mt-6">
          <Faq />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ------------------------------ */
function FinalCta() {
  return (
    <section className="snap-section relative py-8 bg-pitch text-white overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-30" />
      <div className="relative mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <Star className="h-5 w-5 fill-gold text-gold mx-auto mb-4" />
        <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
          Ready to Give Your Player a <span className="text-green">Serious Place to Grow?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Book a session and see how structured, purpose-driven training can help your player
          develop on and off the field.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <a href="#contact" className="btn-green inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md">
            Book a Session <ArrowRight className="h-5 w-5" />
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
    <section id="contact" className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="section-eyebrow">Contact</div>
          <h2 className="mt-3 font-display uppercase text-3xl sm:text-4xl text-navy leading-[1.05]">
            Start the <span className="text-green">Conversation</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            Tell us about your player and we'll recommend the right path. Our team will be in touch
            within one business day.
          </p>

          <div className="mt-5 space-y-3">
            <ContactRow icon={Mail} label="Email" value="hello@wearesoccer.com" />
            <ContactRow icon={Phone} label="Phone" value="(000) 000-0000" />
            <ContactRow icon={MapPin} label="Training Location" value="Your City, Your State" />
          </div>

          <div className="mt-5 rounded-xl border border-green/20 bg-green/5 p-4">
            <div className="flex items-center gap-2 text-green font-display uppercase tracking-wider text-sm">
              <Star className="h-4 w-4 fill-green" /> Limited Spots
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              We intentionally cap each training group to protect quality coaching. Reserve a session
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
            {["About","Programs","Pathway","Sessions","FAQ","Contact"].map((l) => (
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
        className={`mt-2 font-display uppercase text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.05] tracking-tight ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${dark ? "text-white/75" : "text-muted-foreground"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
