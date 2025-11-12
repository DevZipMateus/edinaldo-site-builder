import { useEffect, useState } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 143px)');

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

  return (
    <div className="h-screen overflow-hidden">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Iframe - altura dinâmica, começa após o header */}
      <main className="pt-20" style={{ height: iframeHeight }}>
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
    </div>
  );
};

export default Vitrine;
