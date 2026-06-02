import logoAsset from "@/assets/we-are-soccer-logo.png.asset.json";

export const logoUrl = logoAsset.url;

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoUrl} alt="We Are Soccer Academy crest" className={className} />;
}
