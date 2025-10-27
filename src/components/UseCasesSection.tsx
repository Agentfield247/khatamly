import { Users, Building2, Heart, Globe } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Families",
    description: "Keep loved ones connected through shared spiritual practice, near or far.",
  },
  {
    icon: Building2,
    title: "Mosque Communities",
    description: "Unite your congregation in collective worship and strengthen bonds.",
  },
  {
    icon: Heart,
    title: "Friends & Study Circles",
    description: "Turn learning into action with your close circle of believers.",
  },
  {
    icon: Globe,
    title: "Online Communities",
    description: "Connect Muslims worldwide in the shared blessing of Qur'an recitation.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-3 sm:mb-4 px-2">
          Perfect for Any Group, Anywhere.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
          Whether you're 5 or 500, near or far, Khatamly brings you together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-accent/10">
                <useCase.icon className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{useCase.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
