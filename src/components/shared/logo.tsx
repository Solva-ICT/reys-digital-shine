import reysLogo from "@/assets/5714565a-5f41-4d8a-948a-75fe14f755c6.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#home" className={`inline-flex items-center ${className}`}>
      <img
        src={reysLogo}
        alt="REYS Digital Agency"
        className="h-10 w-auto max-w-[200px] object-contain sm:h-11 sm:max-w-[220px]"
      />
    </a>
  );
}
