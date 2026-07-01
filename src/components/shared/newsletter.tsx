import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    toast.success("You're subscribed! Watch your inbox for growth tips.");
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="text-sm font-semibold text-navy">Stay in the loop</div>
      <p className="mt-1 text-sm text-muted-foreground">
        Monthly tips on web, ads, and brand growth.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <Input
          type="email"
          required
          placeholder="you@email.com"
          className="h-10 flex-1 rounded-xl"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-navy px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          Join
        </button>
      </form>
    </div>
  );
}
