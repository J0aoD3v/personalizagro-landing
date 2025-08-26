// src/components/SolutionSection.tsx
import React from "react";

const SolutionSection = () => {
  return (
    <section id="solution-section" className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-600 mb-6">
          Nossa Proposta: Mapeamento Personalizado
        </h2>
        <div className="card justify-center items-center">
          <div className="card-icon">
            <span className="material-symbols-outlined">insights</span>
          </div>
          <div className="card-content">
            <h3 className="card-title">Foco em:</h3>
            <ul className="text-lg text-green-700 mt-2 text-left inline-block">
              <li className="list-disc ml-6">Maior Autonomia de Voo</li>
              <li className="list-disc ml-6">
                Sensores Específicos para Análise
              </li>
              <li className="list-disc ml-6">Custo Operacional Reduzido</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
