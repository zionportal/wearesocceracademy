import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What ages do you train?",
    a: "We train young players from toddler and preschool ages through the teen years, with sessions grouped by age, skill level, and readiness.",
  },
  {
    q: "Is this for beginners or advanced players?",
    a: "Both. Beginners learn movement, confidence, listening, and ball comfort. More experienced players work on stronger technique, decisions, teamwork, and speed of play.",
  },
  {
    q: "How does a session work?",
    a: "Each session starts with an active warmup game, moves into a soccer skill, adds small-sided play, and ends with a quick huddle around the day's skill or character focus.",
  },
  {
    q: "What makes We Are Soccer different?",
    a: "We combine soccer skill, active play, confidence, teamwork, and character in one clear program so kids improve while still having fun.",
  },
  {
    q: "Do you offer private training?",
    a: "Yes. Private sessions, small groups, seasonal camps, and focused clinics are available for players who want extra reps, targeted development, or school-break activity.",
  },
  {
    q: "Can you bring soccer to a school or childcare center?",
    a: "Yes. We can discuss school, preschool, daycare, after-school, and community enrichment options based on location, schedule, space, and age group.",
  },
  {
    q: "How do families join?",
    a: "Start by sending a request. We will learn about your player, recommend a class or training option, and help you understand the next step.",
  },
  {
    q: "Where are sessions held?",
    a: "Florida training locations will be listed as they are confirmed. For now, use the contact form and we will route your family to the right option.",
  },
  {
    q: "How often should players train?",
    a: "Most players improve fastest with steady weekly training. We recommend a cadence based on age, goals, schedule, and current ability.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
          <AccordionTrigger className="text-left font-display uppercase tracking-wide text-sm sm:text-base text-navy py-3.5 hover:text-green hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
