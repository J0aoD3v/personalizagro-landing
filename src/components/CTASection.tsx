// src/components/CTASection.tsx
import React from "react";

const CTASection = () => {
  return (
    <section className="bg-green-600 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Pronto para a Próxima Geração da Agricultura?
        </h2>
        <p className="text-xl mb-8">
          Não fique para trás. Descubra como a tecnologia pode otimizar sua
          produção e reduzir seus custos.
        </p>
        <a
          href="#form-section" // Link para o formulário
          className="bg-white hover:bg-gray-200 text-green-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Quero Meu Mapeamento Personalizado!
        </a>
      </div>
    </section>
  );
};

export default CTASection;
