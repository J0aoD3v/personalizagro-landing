// src/components/ValuePropositionSection.tsx
import React from "react";

const ValuePropositionSection = () => {
  return (
    <section
      id="value-proposition-section"
      className="py-20 bg-gray-50 text-center"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-600 mb-12">
          Por Que PersonalizAgro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Item 1: Autonomia */}
          <div>
            <div className="text-6xl text-green-500 mb-4">⏱️</div>{" "}
            {/* Emoji ou ícone */}
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Tempo de Voo Superior
            </h3>
            <p className="text-gray-700">
              Menos paradas para recarga, mais eficiência em cada missão de
              mapeamento.
            </p>
          </div>
          {/* Item 2: Custo-Benefício */}
          <div>
            <div className="text-6xl text-green-500 mb-4">💰</div>{" "}
            {/* Emoji ou ícone */}
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Custo Inteligente
            </h3>
            <p className="text-gray-700">
              Tecnologia de ponta com um modelo de serviço que cabe no seu
              orçamento.
            </p>
          </div>
          {/* Item 3: Adaptação */}
          <div>
            <div className="text-6xl text-green-500 mb-4">⚙️</div>{" "}
            {/* Emoji ou ícone */}
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Customização Essencial
            </h3>
            <p className="text-gray-700">
              Sensores e configurações adaptadas às suas culturas e necessidades
              específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
