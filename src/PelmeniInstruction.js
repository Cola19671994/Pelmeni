import React, { useState } from 'react';
import './PelmeniInstruction.css'; // Для стилей

const steps = [
  'Приготовление теста: Муку просеять горкой. Сделать сверху углубление, влить в него яйцо и 1 ст. л. воды, добавить щепотку соли.',
  'Замешивание теста.',
  'Приготовление начинки.',
  'Разделение теста.',
  'Начинка и лепка.',
  'Подготовка к варке.',
  'Варка пельменей.',
];

function PelmeniInstruction() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="app">
      <h1>Инструкция по готовке пельменей</h1>
      <div className="step-content">
        <p>{steps[currentStep]}</p>
      </div>

      <div className="step-navigation">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`step-btn ${index === currentStep ? 'active' : ''}`}
            onClick={() => goToStep(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="controls">
        <button onClick={handlePrevious} disabled={currentStep === 0}>
          Назад
        </button>
        <button onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Начать сначала' : 'Далее'}
        </button>
      </div>
    </div>
  );
}

export default PelmeniInstruction;
