import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What ages do you train?",
    a: "We train committed players from ages 5 through 18, with programs structured by age group, ability, and developmental stage.",
  },
  {
    q: "Is this for beginners or advanced players?",
    a: "Both. Our Foundation Training welcomes players who are new to the game, while our Competitive and Elite Academy tracks challenge experienced players aiming for higher-level opportunities.",
  },
  {
    q: "How does a trial session work?",
    a: "Book online, arrive 15 minutes early, and your player will join a live training session alongside our coaches. Afterward you'll receive direct feedback and a recommended pathway.",
  },
  {
    q: "What makes We Are Soccer different?",
    a: "We develop the complete player. Every session blends technical training, tactical understanding, athletic development, and character — guided by purpose-driven coaches with elite standards.",
  },
  {
    q: "Do you offer private training?",
    a: "Yes. Private 1-on-1 and small group sessions are available for players who want accelerated, personalized development between team training.",
  },
  {
    q: "How do families join?",
    a: "Start with a trial session. After the trial we'll recommend the right program for your player and walk your family through enrollment, schedule, and expectations.",
  },
  {
    q: "Where are sessions held?",
    a: "All training takes place at our home training ground. Specific field locations and times are shared after your trial is confirmed.",
  },
  {
    q: "How often should players train?",
    a: "Most developing players train 2–4 times per week. Our coaches will recommend the right cadence based on your player's age, level, and goals.",
  },
];

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
          <AccordionTrigger className="text-left font-display uppercase tracking-wide text-base sm:text-lg text-navy py-5 hover:text-green hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
