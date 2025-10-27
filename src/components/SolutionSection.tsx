import { Sparkles, Activity, PartyPopper } from "lucide-react";

const solutions = [
  {
    icon: Sparkles,
    title: "Create & Invite in Seconds",
    description:
      "Start a private reading room. A single, shareable link or QR code is all members need to join.",
  },
  {
    icon: Activity,
    title: "Reserve & Track in Real-Time",
    description:
      "See a live grid of all Juz or Surahs. Tap to reserve. Our system prevents any double-booking, guaranteed.",
  },
  {
    icon: PartyPopper,
    title: "Celebrate Completion Together",
    description:
      "When the final section is done, the app shows a beautiful celebration screen with du'a and shareable stats.",
  },
];

const SolutionSection = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
          Khatamly makes it{" "}
          <span className="text-primary">Simple, Spiritual, and Shared.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
          Everything you need to complete a group Qur'an reading, beautifully designed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 mb-4 sm:mb-6 rounded-xl bg-primary/10">
                <solution.icon className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{solution.title}</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
