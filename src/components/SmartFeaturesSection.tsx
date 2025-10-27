import { CheckCircle } from "lucide-react";

const SmartFeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-3 sm:mb-4 px-2">
          Smart Tools for <span className="text-accent">Effortless Momentum.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
          Automated features that keep your Khatam flowing smoothly.
        </p>

        <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-card border-2 border-primary/20 shadow-xl animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-primary/10">
                <CheckCircle className="w-7 sm:w-9 h-7 sm:h-9 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Reservation Expiry</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Group admins can set a gentle deadline (e.g., 3 days) for completing a reserved
                section. If a section becomes idle, it automatically becomes available again for
                others to pick up, ensuring your Khatam never stalls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeaturesSection;
