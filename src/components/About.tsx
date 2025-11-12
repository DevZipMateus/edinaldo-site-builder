import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sobre nós</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa história, valores e compromisso com a excelência em moda masculina
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 mx-auto">
              <Target className="text-primary-foreground" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-center mb-4">Missão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Oferecer estilo, qualidade e confiança aos homens que buscam se vestir bem em todas as ocasiões, proporcionando uma experiência de compra acessível, moderna e autêntica.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 mx-auto">
              <Eye className="text-primary-foreground" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-center mb-4">Visão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Ser referência regional em moda masculina, reconhecida pela inovação, atendimento de excelência e pelas tendências que inspiram o homem moderno a expressar sua personalidade através do estilo.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow md:col-span-3 lg:col-span-1">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 mx-auto">
              <Heart className="text-primary-foreground" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-center mb-4">Valores</h3>
            <ul className="text-muted-foreground space-y-2 max-w-md mx-auto">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Estilo e autenticidade:</strong> valorizamos a identidade de cada cliente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Qualidade:</strong> produtos que garantem conforto e durabilidade</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Confiança:</strong> relações de respeito e transparência</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Inovação:</strong> atentos às tendências da moda masculina</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Atendimento humanizado:</strong> cada cliente é único</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Paixão:</strong> vestir bem é transformar autoestima</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
