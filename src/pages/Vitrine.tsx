import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 143px)');
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateHeight = () => {
      // Altura = 100vh - 80px (header) - 63px (badge)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(`${height}px`);
    };

    // Calcular altura inicial
    calculateHeight();

    // Recalcular ao redimensionar
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  useEffect(() => {
    // Carregar o script do badge MonteSite
    if (badgeRef.current && !document.getElementById('montesite-badge-script')) {
      const script = document.createElement('script');
      script.id = 'montesite-badge-script';
      script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Iframe - altura dinâmica, começa após o header */}
      <main className="pt-20 flex-1" style={{ height: iframeHeight }}>
        <iframe
          src="https://es0809468.egestor.com.br/vitrine/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Demonstração de Vitrine"
        />
      </main>

      {/* Badge MonteSite - 63px */}
      <div ref={badgeRef} id="montesite-footer-badge" className="h-[63px]" />
    </div>
  );
};

export default Vitrine;
