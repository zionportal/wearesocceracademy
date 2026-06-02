import crest from "@/assets/was-crest.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={crest} alt="We Are Soccer Academy crest" className={className} />;
}
