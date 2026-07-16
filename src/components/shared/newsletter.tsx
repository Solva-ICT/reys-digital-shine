import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

type NewsletterProps = {
  variant?: "light" | "dark";
};

export function Newsletter({ variant = "light" }: NewsletterProps) {
  const isDark = variant === "dark";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("You're subscribed! Watch your inbox for growth tips.");
  };

  return (
    <div
      className={cn(
        "rounded-2xl border p-5",
        isDark
          ? "border-white/10 bg-white/5"
          : "border-border bg-surface",
      )}
    >
      {!isDark && (
        <>
          <div className="text-sm font-semibold text-heading">Stay in the loop</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Monthly tips on web, ads, and brand growth.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className={cn("flex gap-2", !isDark && "mt-4")}>
        <Input
          type="email"
          required
          placeholder="you@email.com"
          className={cn(
            "h-10 flex-1 rounded-xl",
            isDark &&
              "border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-orange/50",
          )}
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 rounded-xl px-4 text-sm font-semibold transition-colors",
            isDark
              ? "bg-gradient-orange text-white shadow-[var(--shadow-glow)] hover:opacity-90"
              : "bg-navy text-white hover:bg-navy-deep",
          )}
        >
          Join
        </button>
      </form>
    </div>
  );
}
