import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import appMockupLight from "@/assets/app-mockup.png";
import appMockupDark from "@/assets/app-mockup-dark.png";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { theme } = useTheme();

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
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Complete the Qur'an Together.
            <br />
            <span className="text-primary">Beautifully. In Unity.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Khatamly is a modern platform for your family, mosque, or community to share in the
            blessing of a group Qur'an reading (Tilawah). Simple, real-time, and built for
            connection.
          </p>
        </div>

        <form
          name="waitlist-hero"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12 sm:mb-16 animate-fade-in px-2"
          style={{ animationDelay: "0.2s" }}
        >
          <input type="hidden" name="form-name" value="waitlist-hero" />
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-11 sm:h-12 px-4 sm:px-6 text-sm sm:text-base border-2 border-border focus:border-primary"
          />
          <Button
            type="submit"
            className="h-11 sm:h-12 px-6 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base"
          >
            Get Early Access
          </Button>
        </form>

        <div
          className="relative max-w-xs mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <img
            src={theme === 'dark' ? appMockupDark : appMockupLight}
            alt="Khatamly App Interface"
            className="relative z-10 w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
