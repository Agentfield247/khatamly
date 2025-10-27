import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list! 🎉",
        description: "Insha Allah, We'll notify you when we launch.",
      });
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
          Be the First to Bring Your Community Together.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto px-2">
          Sign up today for exclusive early access and to be notified the moment we launch.
        </p>

        <form
          name="waitlist-cta"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto px-2"
        >
          <input type="hidden" name="form-name" value="waitlist-cta" />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 sm:h-14 px-4 sm:px-6 text-base sm:text-lg border-2 border-border focus:border-primary"
          />
          <Button
            type="submit"
            className="h-12 sm:h-14 px-8 sm:px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg"
          >
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
