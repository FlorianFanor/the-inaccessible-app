import React, { useState } from "react";
import Form from "./form/form.tsx";
import ColorTest from "./color-test/color-test.tsx";
import LinkTrap from "./link-trap/link-trap.tsx";
import Start from "./start/start.tsx";
import Finish from "./finish/finish.tsx";

type StepType = "start" | "form" | "color-test" | "link-trap" | "finished";
enum Step {
    START = "start",
    FORM = "form",
    COLOR_TEST = "color-test",
    LINK_TRAP = "link-trap",
    FINISHED = "finished",
}

export const Daltonisme = () => {
    const [step, setStep] = useState<StepType>("start");
    const [startTime, setStartTime] = useState<number | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);

    return (
        <div>
            <div className="mt-20 p-8 max-w-xl mx-auto bg-gray-300">
                <h2 className="text-2xl font-bold mb-4">Parcours Daltonisme</h2>
                {step === Step.START && (
                    <Start setStep={setStep} setStartTime={setStartTime} />
                )}

                {step === Step.FORM && (
                    <Form setStep={setStep} />
                )}

                {step === Step.COLOR_TEST && (
                    <ColorTest setStep={setStep} />
                )}

                {step === Step.LINK_TRAP && (
                    <LinkTrap setEndTime={setEndTime} setStep={setStep} />
                )}

                {step === Step.FINISHED && (
                    <Finish startTime={startTime} endTime={endTime} />
                )}
            </div>
        </div>
    );
}
