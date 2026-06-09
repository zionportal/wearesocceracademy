export const logoUrl = "/images/we-are-soccer-logo-200x200.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      srcSet="/images/we-are-soccer-logo-50x50.png 50w, /images/we-are-soccer-logo-100x100.png 100w, /images/we-are-soccer-logo-200x200.png 200w, /images/we-are-soccer-logo-1000x1000.png 1000w"
      sizes="(max-width: 640px) 50px, (max-width: 1024px) 100px, 200px"
      alt="We Are Soccer Academy crest"
      className={className}
    />
  );
}
