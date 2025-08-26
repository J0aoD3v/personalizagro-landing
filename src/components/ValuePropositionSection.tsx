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
          {/* Item 1 */}
          <div className="card">
            <div className="card-icon">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Tempo de Voo Superior</h3>
              <p className="card-description">
                Menos paradas para recarga, mais eficiência em cada missão de
                mapeamento.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="card">
            <div className="card-icon">
              <span className="material-symbols-outlined">attach_money</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Custo Inteligente</h3>
              <p className="card-description">
                Tecnologia de ponta com um modelo de serviço que cabe no seu
                orçamento.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="card">
            <div className="card-icon">
              <span className="material-symbols-outlined">settings</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Customização Essencial</h3>
              <p className="card-description">
                Sensores e configurações adaptadas às suas culturas e
                necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
