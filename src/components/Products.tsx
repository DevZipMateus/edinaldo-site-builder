import { Shirt, Watch, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsImage from '@/assets/products-display.jpg';

const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nossos produtos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção exclusiva de peças que combinam elegância, conforto e modernidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={productsImage}
              alt="Coleção de produtos masculinos"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          {/* Categories */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                <Shirt className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Alfaiataria</h3>
                <p className="text-muted-foreground">
                  Ternos, blazers e calças sociais para ocasiões formais e profissionais. Peças sob medida que valorizam seu estilo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                <ShoppingBag className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Casual</h3>
                <p className="text-muted-foreground">
                  Camisas, camisetas, jeans e bermudas para o dia a dia. Conforto e estilo para todas as situações.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                <Watch className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Acessórios</h3>
                <p className="text-muted-foreground">
                  Gravatas, cintos, meias e outros itens que completam seu visual com sofisticação.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-secondary"
              >
                <a href="https://wa.me/5577988743588" target="_blank" rel="noopener noreferrer">
                  Consulte nossos produtos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
