export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")})`;

  return (
    <footer
      className="bg-muted/40 border-t border-border"
      data-ocid="footer.section"
    >
      <div className="h-0.5 bg-accent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <img
              src="/assets/motofence-logo.jpeg"
              alt="MotoFence"
              className="h-10 object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Courses", "Certification", "Training Facility", "Contact"].map(
              (item) => (
                <span
                  key={item}
                  className="text-muted-foreground hover:text-accent font-body text-xs uppercase tracking-widest cursor-pointer transition-smooth"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-muted-foreground text-xs">
            MotoFence © {year}. All Rights Reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
