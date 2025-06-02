import React from "react";
import { Step } from "../daltonisme.tsx";

const Start = ({ setStep }) => {
  return (
    <div>
      <p className="mb-4">
        Pour commencer, installe l'extension{" "}
        <a
          href="https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Web Disability Simulator
        </a>{" "}
        et active <strong>Total Color Blindness</strong>.
      </p>
      <button
        onClick={() => setStep(Step.START)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Démarrer le parcours
      </button>
    </div>
  );
};

export default Start;
