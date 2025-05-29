import React, { useState } from "react";
import { Step } from "../daltonisme.tsx";

const Charts = ({ setStep }) => {
  const [message, setMessage] = useState("");

  const handleClick = (part: string) => {
    if (part === "amber") {
      setMessage("Bravo ! Tu as trouvé la part des utilisateurs inscrits.");
      setStep(Step.CHARTS);
    } else {
      setMessage(
        "Ce n'était pas la bonne réponse. Sans vision des couleurs, c'est presque mission impossible."
      );
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">
        Mission : Comprendre ce graphique
      </h2>

      <p className="mb-6 text-gray-700">
        Clique sur la part verte du graphique qui représente les utilisateurs
        inscrits. Facile, non?
      </p>

      <div className="w-64 h-64 mx-auto relative">
        <svg
          xlmsx="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="256"
          height="256"
        >
          <path
            d="M 100,100 L 0.0,100.00000000000001 A 100,100 0 0 1 99.99999999999999,0.0 Z"
            fill="#16a34a"
            onClick={() => handleClick("amber")}
          />
          <path
            d="M 100,100 L 200.0,100.0 A 100,100 0 0 1 100.0,200.0 Z"
            fill="#ef4444"
            onClick={() => handleClick("red")}
          />
          <path
            d="M 100,100 L 100.0,200.0 A 100,100 0 0 1 0.0,100.00000000000001 Z"
            fill="#3b82f6"
            onClick={() => handleClick("orange")}
          />
          <path
            d="M 100,100 L 99.99999999999999,0.0 A 100,100 0 0 1 200.0,99.99999999999997 Z"
            fill="#8b5cf6"
            onClick={() => handleClick("yellow")}
          />
        </svg>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span>Utilisateurs actifs</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
          <span>Utilisateurs inactifs</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-600 rounded-full"></span>
          <span>Utilisateurs inscrits</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-violet-500 rounded-full"></span>
          <span>Utilisateurs premium</span>
        </div>
      </div>

      {message && (
        <div className="mt-6 text-sm text-gray-800 font-medium bg-yellow-100 border border-yellow-300 rounded p-4">
          {message}
        </div>
      )}
    </div>
  );
};

export default Charts;
