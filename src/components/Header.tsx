import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoNs from '@/assets/logo-ns-moda.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-background'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
          >
            <img src={logoNs} alt="NS Moda Masculina Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
            <span className="font-serif text-xl font-bold hidden sm:inline">NS Moda Masculina</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('produtos')}
              className="text-foreground hover:text-primary"
            >
              Produtos
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-foreground hover:text-primary"
            >
              <a href="/vitrine">Vitrine</a>
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary"
            >
              Contato
            </Button>
            <Button
              asChild
              className="ml-4 bg-primary text-primary-foreground hover:bg-secondary"
            >
              <a href="https://wa.me/5577988743588" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary justify-start"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary justify-start"
              >
                Sobre
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('produtos')}
                className="text-foreground hover:text-primary justify-start"
              >
                Produtos
              </Button>
              <Button
                variant="ghost"
                asChild
                className="text-foreground hover:text-primary justify-start"
              >
                <a href="/vitrine">Vitrine</a>
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary justify-start"
              >
                Contato
              </Button>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-secondary"
              >
                <a href="https://wa.me/5577988743588" target="_blank" rel="noopener noreferrer">
                  Fale conosco
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
