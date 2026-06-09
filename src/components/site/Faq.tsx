import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What ages do you train?",
    a: "We train young players from early childhood through the teen years, with sessions grouped by age, skill level, and readiness.",
  },
  {
    q: "Is this for beginners or advanced players?",
    a: "Both. New players learn rhythm, confidence, and ball comfort. Advanced players work on speed of play, decision-making, and competitive habits.",
  },
  {
    q: "How does a session work?",
    a: "Each session starts with activation, moves into skill work, adds game-based pressure, and ends with a reset so players know what to practice next.",
  },
  {
    q: "What makes We Are Soccer different?",
    a: "We combine soccer skill, fitness, confidence, discipline, and character in one clear training system, so players grow on and off the field.",
  },
  {
    q: "Do you offer private training?",
    a: "Yes. Private sessions, small groups, seasonal camps, and focused clinics are available for players who want extra reps or targeted development.",
  },
  {
    q: "How do families join?",
    a: "Start by booking a session. After we see your player train, we recommend the right age group, training rhythm, and next step.",
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
