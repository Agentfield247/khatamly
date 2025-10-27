import { MessageCircle, FileSpreadsheet, Clock, Unlink } from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    title: "Endless back-and-forth in WhatsApp groups",
  },
  {
    icon: FileSpreadsheet,
    title: "Losing track of who is reading what",
  },
  {
    icon: Clock,
    title: "Progress stalls when a reading is reserved but forgotten",
  },
  {
    icon: Unlink,
    title: "The spiritual connection gets lost in the logistics",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-3 sm:mb-4 px-2">
          Coordinating a group Khatam can be messy.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
          Traditional methods create unnecessary friction and confusion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 mb-4 sm:mb-6 rounded-2xl bg-destructive/10">
                <problem.icon className="w-8 sm:w-10 h-8 sm:h-10 text-destructive" />
              </div>
              <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed px-2">{problem.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
