import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logoNs from '@/assets/logo-ns-moda.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll para seção quando há hash na URL
  useEffect(() => {
    if (location.hash && isHomePage) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [location.hash, isHomePage]);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // Se já está na home, apenas faz scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // Se está em outra página, navega para home com hash
      navigate(`/#${sectionId}`);
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
            onClick={() => handleNavigation('hero')}
            className="flex items-center space-x-3 group"
          >
            <img src={logoNs} alt="NS Moda Masculina Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
            <span className="font-serif text-xl font-bold hidden sm:inline">NS Moda Masculina</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              onClick={() => handleNavigation('hero')}
              className="text-foreground hover:text-primary"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation('sobre')}
              className="text-foreground hover:text-primary"
            >
              Sobre
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation('produtos')}
              className="text-foreground hover:text-primary"
            >
              Produtos
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-foreground hover:text-primary"
            >
              <Link to="/vitrine">Vitrine</Link>
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleNavigation('contato')}
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
                onClick={() => handleNavigation('hero')}
                className="text-foreground hover:text-primary justify-start"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('sobre')}
                className="text-foreground hover:text-primary justify-start"
              >
                Sobre
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('produtos')}
                className="text-foreground hover:text-primary justify-start"
              >
                Produtos
              </Button>
              <Button
                variant="ghost"
                asChild
                className="text-foreground hover:text-primary justify-start"
              >
                <Link to="/vitrine" onClick={() => setIsMobileMenuOpen(false)}>Vitrine</Link>
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('contato')}
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
