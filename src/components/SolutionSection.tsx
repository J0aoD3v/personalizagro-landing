// src/components/SolutionSection.tsx
import React from "react";

const SolutionSection = () => {
  return (
    <section id="solution-section" className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-600 mb-6">
          Nossa Proposta: Mapeamento Personalizado
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          O PersonalizAgro oferece um serviço de mapeamento agrícola que se
          adapta às suas necessidades. Com drones de maior autonomia e sensores
          de precisão, cobrimos mais área em menos tempo e com um
          custo-benefício que você sente no bolso.
        </p>
        <p className="text-lg text-gray-600">Foco em:</p>
        <ul className="text-lg text-green-700 mt-2 inline-block text-left">
          <li className="list-disc ml-6">Maior Autonomia de Voo</li>
          <li className="list-disc ml-6">Sensores Específicos para Análise</li>
          <li className="list-disc ml-6">Custo Operacional Reduzido</li>
        </ul>
      </div>
    </section>
  );
};

export default SolutionSection;
