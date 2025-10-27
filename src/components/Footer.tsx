import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 bg-muted/30 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Khatamly" className="h-7 sm:h-8 w-auto" />
            <span className="text-lg sm:text-xl font-bold text-foreground">Khatamly</span>
          </div>

          <div className="text-center px-4">
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              Contact us:{" "}
              <a
                href="mailto:info@khatamly.com"
                className="text-primary hover:underline font-medium break-all"
              >
                info@khatamly.com
              </a>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Khatamly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
