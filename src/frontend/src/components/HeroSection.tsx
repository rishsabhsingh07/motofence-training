import { Button } from "@/components/ui/button";

export default function HeroSection() {
  function handleEnroll() {
    const section = document.getElementById("courses-section");
    section?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-automotive.dim_1400x700.jpg')",
        }}
      />
      {/* Light overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white" />
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.3 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.3 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-24">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="h-px w-10 bg-accent" />
          <span className="text-accent font-display font-bold text-xs tracking-[0.4em] uppercase">
            Professional Training Program
          </span>
          <div className="h-px w-10 bg-accent" />
        </div>

        <h1 className="font-display font-black text-foreground uppercase leading-[1.05] mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight">
            START YOUR
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight text-accent-glow">
            JOURNEY TODAY
          </span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto leading-relaxed">
          We Provide Both{" "}
          <span className="text-foreground font-semibold">
            Group &amp; Individual
          </span>{" "}
          Training Batches — Certified by Industry Experts
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-accent text-accent-foreground font-display font-black uppercase tracking-widest px-10 py-6 text-base hover:bg-accent/80 hover:shadow-elevated transition-smooth"
            onClick={handleEnroll}
            data-ocid="hero.enroll_button"
          >
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="border-foreground/30 text-foreground hover:border-accent hover:text-accent font-display font-bold uppercase tracking-widest px-10 py-6 text-base transition-smooth"
            onClick={handleEnroll}
            data-ocid="hero.view_courses_button"
          >
            View Courses
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-border pt-10">
          {[
            { value: "500+", label: "Students Trained" },
            { value: "3", label: "Course Tiers" },
            { value: "100%", label: "Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-display font-black text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
