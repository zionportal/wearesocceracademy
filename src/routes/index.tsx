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
      { title: "We Are Soccer | Fun Youth Soccer Programs & Player Development" },
      {
        name: "description",
        content:
          "We Are Soccer helps kids build soccer skills, confidence, teamwork, and a love for the game through fun age-based youth soccer programs.",
      },
      { property: "og:title", content: "We Are Soccer | Fun Youth Soccer Programs & Player Development" },
      {
        property: "og:description",
        content:
          "Fun youth soccer classes focused on age-appropriate skills, confidence, teamwork, character, and game understanding.",
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
            "Youth soccer academy helping kids develop soccer skills, confidence, teamwork, character, and game understanding through age-based programs.",
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
      <About />
      <Programs />
      <Pathway />
      <Philosophy />
      <SessionFlow />
      <SchoolPartners />
      <Parents />
      <Values />
      <Testimonials />
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
    <section className="snap-section relative bg-pitch pt-16 sm:pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-40" />
      <div className="absolute inset-0 soccer-pattern opacity-40" />
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
              Fun Youth Soccer Programs for Growing Players
            </span>
          </div>

          <h1 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Let&apos;s Play Soccer.
            <br />
            <span className="text-green">Grow With Confidence.</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-silver font-medium">
            A high-energy youth soccer academy where kids learn skills, teamwork, and joy for the game.
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            We help children build dribbling, passing, shooting, coordination, confidence, and character
            through age-appropriate sessions that feel active, positive, and fun from the first whistle.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="btn-green inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md"
            >
              Find Your Program <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#programs"
              className="btn-outline-light inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md"
            >
              Explore Classes
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Trophy, label: "Ages 2-16" },
              { icon: Heart, label: "Confidence & Character" },
              { icon: Compass, label: "Skills Through Play" },
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
            Built for beginners, growing players, and kids ready for a bigger soccer challenge.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 max-w-2xl">
            {[
              "Fun-first coaching",
              "Age-friendly groups",
              "Character each session",
              "Classes, camps, clinics",
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
            <div className="ball-badge absolute -right-4 top-8 h-20 w-20 rounded-full border-4 border-white shadow-2xl" />
            <div className="ball-badge absolute left-2 bottom-12 h-12 w-12 rounded-full border-2 border-white shadow-xl" />
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
      title: "Soccer Skills",
      body: "Players build dribbling, passing, shooting, ball control, and comfort through games, challenges, and guided repetition.",
    },
    {
      icon: Heart,
      title: "Fun & Confidence",
      body: "Sessions keep kids moving, smiling, trying new things, and learning that progress comes from effort.",
    },
    {
      icon: Compass,
      title: "Character Growth",
      body: "Coaches reinforce teamwork, respect, listening, independence, and positive habits that carry beyond the field.",
    },
  ];
  return (
    <section id="about" className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About We Are Soccer"
          title={<>Youth Soccer Should Feel <span className="text-green">Exciting, Safe, and Worthwhile.</span></>}
          body="We Are Soccer blends skill-building, movement, imagination, teamwork, and positive coaching into a program kids look forward to and parents can trust."
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
      tag: "Ages 2-3",
      title: "Mini Kickers",
      who: "Toddlers discovering movement, balance, listening, and the ball.",
      benefit: "Uses songs, simple games, and parent-friendly coaching to make soccer feel joyful.",
    },
    {
      tag: "Ages 4-6",
      title: "Classic Starters",
      who: "Preschool and early elementary players ready for simple skills and fun game play.",
      benefit: "Develops dribbling, passing, shooting basics, confidence, and group participation.",
    },
    {
      tag: "Ages 7-9",
      title: "Skill Builders",
      who: "Players building stronger technique, faster decisions, and teamwork.",
      benefit: "Improves first touch, 1v1 play, ball control, small-sided games, and sportsmanship.",
    },
    {
      tag: "Ages 10-13",
      title: "Premier Development",
      who: "Players ready for a more demanding soccer environment.",
      benefit: "Adds tactical habits, fitness, discipline, team play, and a healthy competitive rhythm.",
    },
    {
      tag: "Ages 14-16",
      title: "Academy Prep",
      who: "Older players who want higher standards and sharper execution.",
      benefit: "Builds speed of play, leadership, conditioning, and next-level readiness.",
    },
    {
      tag: "All Ages",
      title: "Camps, Clinics & Private Training",
      who: "Players who need seasonal fun, focused reps, or extra development.",
      benefit: "Targets specific skills through small groups, school-break camps, clinics, and private sessions.",
    },
  ];
  return (
    <section id="programs" className="snap-section py-8 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Programs"
          title={<>Programs for <span className="text-green">Every Age and Stage</span></>}
          body="From toddler first touches to academy preparation, each class is built around age, ability, attention span, and the way young players actually learn."
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
    { n: "01", title: "Discover", body: "Meet the ball, move the body, listen to the coach, and learn that soccer is fun." },
    { n: "02", title: "Build", body: "Grow dribbling, passing, shooting, coordination, confidence, and teamwork." },
    { n: "03", title: "Play", body: "Use skills in small-sided games where kids make decisions and support teammates." },
    { n: "04", title: "Progress", body: "Move into higher-level training, camps, clinics, school teams, clubs, or private development." },
  ];
  return (
    <section id="pathway" className="snap-section relative py-8 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Player Pathway"
          title={<>From <span className="text-green">First Kicks</span> to Bigger Goals</>}
          body="Every player follows a simple, encouraging journey. Each stage adds the next layer of skill, confidence, teamwork, and game understanding."
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
    { icon: Target, title: "Ball Skills", body: "Dribbling, passing, shooting, control, and comfort with both feet." },
    { icon: Brain, title: "Smart Choices", body: "Reading space, finding teammates, and learning simple game ideas." },
    { icon: Dumbbell, title: "Active Bodies", body: "Balance, speed, coordination, agility, and healthy movement." },
    { icon: Shield, title: "Confidence", body: "Trying again, listening well, staying focused, and handling challenges." },
    { icon: Heart, title: "Character", body: "Respect, teamwork, appreciation, independence, and positive energy." },
  ];
  return (
    <section className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Training Philosophy"
          title={<>More Than Drills. <span className="text-green">Skills Kids Can Feel Proud Of.</span></>}
          body="Each session builds the player and the person with soccer skill, active play, simple teaching, and character moments kids can understand."
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
    { icon: Dumbbell, title: "Kickoff Game", body: "Players start moving right away with a fun activity that gets their bodies and attention ready." },
    { icon: Target, title: "Skill Adventure", body: "Coaches teach dribbling, passing, shooting, and control through challenges kids can understand." },
    { icon: Users, title: "Team Play", body: "Small-sided games help players make decisions, share the ball, compete, and cheer each other on." },
    { icon: Brain, title: "Victory Huddle", body: "Players review the day's skill or character word and leave with something simple to practice." },
  ];
  return (
    <section id="sessions" className="snap-section py-8 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Session Flow"
          title={<>A Class Rhythm That Keeps Kids <span className="text-green">Moving and Smiling</span></>}
          body="Every class has a clear rhythm: start with energy, learn a soccer skill, use it in play, then finish with encouragement and a simple next step."
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

/* --------------------------- SCHOOL PARTNERS --------------------------- */
function SchoolPartners() {
  const partners = [
    "Preschools",
    "Daycares",
    "Elementary schools",
    "Community groups",
  ];

  return (
    <section className="snap-section py-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 soccer-pattern opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Schools & Community"
            title={<>Bring Youth Soccer <span className="text-green">to Your School or Center</span></>}
            body="We Are Soccer can partner with local schools, childcare centers, and community programs to bring a positive soccer enrichment experience directly to kids."
          />
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-green flex-shrink-0" />
                <span className="font-display uppercase tracking-wide text-navy">{partner}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Programs can be shaped around age groups, space, schedule, and the goals of the organization.
            The goal is simple: more kids moving, learning, laughing, and building confidence through soccer.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl bg-navy text-white p-6 sm:p-8 shadow-xl overflow-hidden">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green/20" />
            <div className="ball-badge absolute right-6 top-6 h-14 w-14 rounded-full border-2 border-white shadow-lg" />
            <h3 className="font-display uppercase text-3xl leading-tight pr-16">
              Soccer enrichment that feels organized, upbeat, and kid-friendly.
            </h3>
            <p className="mt-4 text-white/75 text-sm leading-relaxed">
              Ideal for after-school activities, seasonal sessions, youth events, and introductory soccer programs.
            </p>
            <a href="#contact" className="mt-6 inline-flex btn-green font-display uppercase tracking-wider text-sm px-5 py-3 rounded-md">
              Ask About School Programs
            </a>
          </div>
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
      title: "Clear Class Fit",
      body: "Families get help choosing the right age group, skill level, and training option for their player.",
    },
    {
      icon: Heart,
      title: "Positive Coaching",
      body: "Players are encouraged to improve without losing the fun, patience, and confidence young athletes need.",
    },
    {
      icon: Shield,
      title: "Organized Sessions",
      body: "Classes are built around movement, skill work, game play, and simple feedback so development stays easy to follow.",
    },
  ];
  return (
    <section className="snap-section py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="For Parents"
          title={<>Easy for Parents. <span className="text-green">Exciting for Kids.</span></>}
          body="Parents should not have to guess what their player is getting. We make the class rhythm, expectations, and next step clear."
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
    { icon: Flag, label: "Fun" },
    { icon: Shield, label: "Respect" },
    { icon: Target, label: "Skill" },
    { icon: Users, label: "Teamwork" },
    { icon: Compass, label: "Confidence" },
    { icon: Award, label: "Effort" },
  ];
  return (
    <section className="snap-section py-8 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 field-lines opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Our Values"
          title={<>The Character Words <span className="text-green">We Coach By</span></>}
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

/* ----------------------------- TESTIMONIALS ---------------------------- */
function Testimonials() {
  const quotes = [
    {
      title: "Confidence after the first class",
      quote:
        "Our son was nervous at first, but the coaches made it fun right away. He left talking about his new moves and asking when he could come back.",
      name: "Parent of a Mini Kicker",
    },
    {
      title: "Organized and upbeat",
      quote:
        "The class had structure without feeling too serious. The kids were active the whole time, learning skills and cheering for each other.",
      name: "Local soccer parent",
    },
    {
      title: "More than soccer drills",
      quote:
        "We love that they teach listening, teamwork, and effort alongside the soccer skills. It feels like a great first sports experience.",
      name: "Youth program family",
    },
  ];

  return (
    <section className="snap-section py-8 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Parent Proof"
          title={<>Kids Feel the Fun. <span className="text-green">Parents See the Growth.</span></>}
          body="Families want soccer to be active, organized, encouraging, and worth the time. That is the experience we are building."
        />
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {quotes.map((item) => (
            <figure key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex gap-1 text-gold" aria-label="5 star review">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <h3 className="mt-4 font-display uppercase tracking-wide text-lg text-navy">{item.title}</h3>
              <blockquote className="mt-2 text-sm text-muted-foreground leading-relaxed">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-4 font-display uppercase tracking-widest text-xs text-green">
                {item.name}
              </figcaption>
            </figure>
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
          Ready to Give Your Player a <span className="text-green">Fun Place to Grow?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Find the right class, camp, clinic, or training option and help your child build soccer skills,
          confidence, teamwork, and a lasting love for the game.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <a href="#contact" className="btn-green inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider text-base px-7 py-4 rounded-md">
            Find a Class <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#programs" className="btn-outline-light inline-flex items-center justify-center font-display uppercase tracking-wider text-base px-7 py-4 rounded-md">
            View Programs
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
            Find the <span className="text-green">Right Soccer Program</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            Tell us about your player and we&apos;ll recommend the right class, camp, clinic, school program,
            or training path. Our team will be in touch within one business day.
          </p>

          <div className="mt-5 space-y-3">
            <ContactRow icon={Mail} label="Email" value="hello@wearesoccer.com" />
            <ContactRow icon={Phone} label="Phone" value="(000) 000-0000" />
            <ContactRow icon={MapPin} label="Training Location" value="Your City, Your State" />
          </div>

          <div className="mt-5 rounded-xl border border-green/20 bg-green/5 p-4">
            <div className="flex items-center gap-2 text-green font-display uppercase tracking-wider text-sm">
              <Star className="h-4 w-4 fill-green" /> Class Spots
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Groups are kept organized so every child gets attention, encouragement, and enough touches
              on the ball. Reach out to check class availability.
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
            We Are Soccer helps kids build soccer skills, confidence, teamwork, and character through
            fun age-based classes, camps, clinics, and training programs.
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
        <div className="font-display uppercase tracking-widest">Let's Play Soccer. Grow With Confidence.</div>
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
