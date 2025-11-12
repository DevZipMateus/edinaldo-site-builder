import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-fashion.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moda masculina elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            NS Moda Masculina
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Seu estilo começa aqui
          </h2>
          <p className="text-lg md:text-xl mb-10 text-foreground/90 max-w-xl">
            Oferecemos estilo, qualidade e confiança aos homens que buscam se vestir bem em todas as ocasiões, proporcionando uma experiência de compra acessível, moderna e autêntica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-secondary text-base"
            >
              <a href="https://wa.me/5577988743588" target="_blank" rel="noopener noreferrer">
                Entre em contato
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/60 text-foreground hover:bg-primary/10 text-base"
            >
              <Link to="/vitrine" className="flex items-center gap-2">
                Ver vitrine online
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/60 text-foreground hover:bg-primary/10 text-base"
            >
              <a
                href="https://www.instagram.com/ns_modams?igsh=OGhqZWs0cXMwYjJ3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram size={20} />
                Siga no Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
