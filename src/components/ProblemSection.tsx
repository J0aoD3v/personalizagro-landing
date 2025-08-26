// src/components/ProblemSection.tsx
import React from "react";

const ProblemSection = () => {
  return (
    <section id="problem-section" className="py-20 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-600 mb-6">
          O Principal Desafio do Produtor Moderno
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          Drones agrícolas atuais oferecem autonomia limitada e pouca
          flexibilidade. Isso significa mais tempo de recarga, menos área
          coberta por dia e um custo operacional que pode pesar no bolso,
          especialmente para quem está começando ou tem propriedades de médio
          porte.
        </p>
        <p className="text-lg text-gray-600">
          A necessidade de tecnologia acessível, customizável e com alto
          desempenho é cada vez maior.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
