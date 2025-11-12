import { Mail, Phone, Clock, Instagram, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logoNs from '@/assets/logo-ns-moda.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div className="md:col-span-1">
            <img src={logoNs} alt="NS Moda Masculina" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm mb-4">
              Seu estilo começa aqui
            </p>
            <p className="text-primary-foreground/60 text-xs leading-relaxed">
              Oferecemos estilo, qualidade e confiança aos homens que buscam se vestir bem em todas as ocasiões.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('hero')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('sobre')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('produtos')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <Link
                  to="/vitrine"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Vitrine
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contato')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/5577988743588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  (77) 98874-3588
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:es0630535@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  es0630535@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-1 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/ns_modams?igsh=OGhqZWs0cXMwYjJ3&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  @ns_modams
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Casa
                </span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Horário</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">Segunda</p>
                  <p className="text-primary-foreground/60">8:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">Sábado</p>
                  <p className="text-primary-foreground/60">8:00 - 19:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} NS Moda Masculina. Todos os direitos reservados.
            </p>
            <a
              href="https://wa.me/5577988743588"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              Desenvolvido com dedicação
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
