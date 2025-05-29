import React, { useState } from "react";
import FavoriteProduct from "./favorite-product/favorite-product.tsx";
import Charts from "./charts/charts.tsx";
import CommandValidation from "./command-validation/command-validation.tsx";
import Form from "./form/form.tsx";
import ColorTest from "./color-test/color-test.tsx";
import LinkTrap from "./link-trap/link-trap.tsx";
import Start from "./start/start.tsx";
import Finish from "./finish/finish.tsx";

type StepType = "start" | "form" | "color-test" | "link-trap" | "finished";

export enum Step {
  START = "start",
  FAVORITE_PRODUCT = "favorite-product",
  CHARTS = "charts",
  COMMAND_VALIDATION = "command-validation",
  FORM = "form",
  COLOR_TEST = "color-test",
  LINK_TRAP = "link-trap",
  FINISHED = "finished",
}

const firstSteps: Step[] = [
  Step.FAVORITE_PRODUCT,
  Step.CHARTS,
  Step.COMMAND_VALIDATION,
  Step.COLOR_TEST,
];

function getRandomFirstStep(): Step {
  const idx = Math.floor(Math.random() * firstSteps.length);
  return firstSteps[idx];
}

export const Daltonisme = () => {
  const [step, setStep] = useState<StepType>("start");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const goToNextStep = (currentStep: Step) => {
    switch (currentStep) {
      case Step.FAVORITE_PRODUCT:
      case Step.CHARTS:
      case Step.COMMAND_VALIDATION:
      case Step.COLOR_TEST:
        setStep(Step.FORM);
        break;
      case Step.FORM:
        setStep(Step.LINK_TRAP);
        break;
      case Step.LINK_TRAP:
        setStep(Step.FINISHED);
        break;
      default:
        setStep(Step.FINISHED);
    }
  };

  const handleStart = (startTime: number) => {
    setStartTime(startTime);
    setStep(getRandomFirstStep());
  };

  return (
    <div>
      <div className="mt-20 p-8 max-w-xl mx-auto bg-gray-300">
        <h2 className="text-2xl font-bold mb-4">Parcours Daltonisme</h2>
        {step === Step.START && (
          <Start setStep={handleStart} setStartTime={setStartTime} />
        )}

        {step === Step.FAVORITE_PRODUCT && (
          <FavoriteProduct setStep={goToNextStep} />
        )}

        {step === Step.CHARTS && <Charts setStep={goToNextStep} />}

        {step === Step.COMMAND_VALIDATION && (
          <CommandValidation setStep={goToNextStep} />
        )}

        {step === Step.COLOR_TEST && <ColorTest setStep={goToNextStep} />}

        {step === Step.FORM && <Form setStep={goToNextStep} />}

        {step === Step.LINK_TRAP && (
          <LinkTrap setEndTime={setEndTime} setStep={goToNextStep} />
        )}

        {step === Step.FINISHED && (
          <Finish startTime={startTime} endTime={endTime} />
        )}
      </div>
    </div>
  );
};
