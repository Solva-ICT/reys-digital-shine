import reysLogo from "@/assets/reys-logo.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
      <img src={reysLogo} alt="REYS Digital Agency" className="h-9 w-9 object-contain" />
      <span className="font-display text-lg font-bold tracking-tight text-heading">
        REYS
        <span className="ml-1 text-xs font-medium text-muted-foreground">Digital Agency</span>
      </span>
    </a>
  );
}
