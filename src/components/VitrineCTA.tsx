import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Sparkles } from 'lucide-react';

const VitrineCTA = () => {
  return (
    <section id="vitrine" className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={20} className="text-primary-foreground" />
            <span className="text-sm font-semibold">Novidade</span>
          </div>

          {/* Título */}
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Conheça nossa vitrine online
          </h2>

          {/* Descrição */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Navegue por nossa coleção completa de produtos com fotos, descrições e preços atualizados em tempo real.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4 mx-auto">
                <ShoppingBag className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Catálogo completo</h3>
              <p className="text-primary-foreground/80 text-sm">
                Todas as peças disponíveis em um só lugar
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4 mx-auto">
                <Eye className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Fotos detalhadas</h3>
              <p className="text-primary-foreground/80 text-sm">
                Veja cada produto em alta qualidade
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4 mx-auto">
                <Sparkles className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">Preços atualizados</h3>
              <p className="text-primary-foreground/80 text-sm">
                Valores sempre em dia para você
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 h-auto shadow-xl"
            >
              <Link to="/vitrine">
                Ver vitrine completa
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto"
            >
              <a href="https://wa.me/5577988743588" target="_blank" rel="noopener noreferrer">
                Falar com vendedor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineCTA;
