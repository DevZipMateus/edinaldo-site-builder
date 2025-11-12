import { Mail, Phone, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e ajudar você a encontrar o estilo perfeito
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">Telefone</h3>
                  <a
                    href="https://wa.me/5577988743588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (77) 98874-3588
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">E-mail</h3>
                  <a
                    href="mailto:es0630535@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    es0630535@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-2">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">Segunda: 8:00 - 17:00</p>
                  <p className="text-muted-foreground">Sábado: 8:00 - 19:00</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Instagram className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">Instagram</h3>
                  <a
                    href="https://www.instagram.com/ns_modams?igsh=OGhqZWs0cXMwYjJ3&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @ns_modams
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 shadow-xl flex flex-col justify-center">
            <h3 className="font-serif text-3xl font-bold mb-4">Visite nossa loja</h3>
            <p className="text-primary-foreground/90 mb-6 text-lg">
              Venha conhecer nossa coleção e receba atendimento personalizado. Nossa equipe está pronta para ajudar você a encontrar o look perfeito.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-muted"
            >
              <a href="https://wa.me/5577988743588" target="_blank" rel="noopener noreferrer">
                Agendar visita pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
