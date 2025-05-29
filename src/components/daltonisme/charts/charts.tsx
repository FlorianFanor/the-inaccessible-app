import React, { useState } from "react";
import { Step } from "../daltonisme.tsx";

const categories = [
  { key: "inscrits", label: "Utilisateurs inscrits" },
  { key: "actifs", label: "Utilisateurs actifs" },
  { key: "inactifs", label: "Utilisateurs inactifs" },
  { key: "premium", label: "Utilisateurs premium" },
];

const colors = [
  { key: "green", fill: "#16a34a", legend: "bg-green-600" },
  { key: "red", fill: "#ef4444", legend: "bg-red-500" },
  { key: "blue", fill: "#3b82f6", legend: "bg-blue-500" },
  { key: "violet", fill: "#8b5cf6", legend: "bg-violet-500" },
];

const Charts = ({ setStep }) => {
  const [message, setMessage] = useState("");

  const shufflePie = (array) => {
    return [...array].sort(() => 0.5 - Math.random());
  };

  const getShuffledParts = () => {
    const inscritsPart = {
      ...categories[0],
      color: colors[0],
    };
    const otherCategories = shufflePie(categories.slice(1));
    const otherColors = shufflePie(colors.slice(1));
    const otherParts = otherCategories.map((cat, i) => ({
      ...cat,
      color: otherColors[i],
    }));

    return shufflePie([inscritsPart, ...otherParts]);
  };

  const [parts, setParts] = useState(getShuffledParts);

  const inscritsColor = colors[0].fill;

  const handleClick = (fill: string) => {
    if (fill === inscritsColor) {
      setMessage("Bravo ! Tu as trouvé la part des utilisateurs inscrits.");
      setStep(Step.CHARTS);
    } else {
      setParts(getShuffledParts());
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
        <svg viewBox="0 0 200 200" width="256" height="256">
          <path
            d="M 100,100 L 0.0,100.00000000000001 A 100,100 0 0 1 99.99999999999999,0.0 Z"
            fill={parts[0].color.fill}
            onClick={() => handleClick(parts[0].color.fill)}
            style={{ cursor: "pointer" }}
          />

          <path
            d="M 100,100 L 200.0,100.0 A 100,100 0 0 1 100.0,200.0 Z"
            fill={parts[1].color.fill}
            onClick={() => handleClick(parts[1].color.fill)}
            style={{ cursor: "pointer" }}
          />

          <path
            d="M 100,100 L 100.0,200.0 A 100,100 0 0 1 0.0,100.00000000000001 Z"
            fill={parts[2].color.fill}
            onClick={() => handleClick(parts[2].color.fill)}
            style={{ cursor: "pointer" }}
          />

          <path
            d="M 100,100 L 99.99999999999999,0.0 A 100,100 0 0 1 200.0,99.99999999999997 Z"
            fill={parts[3].color.fill}
            onClick={() => handleClick(parts[3].color.fill)}
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        {parts.map((part, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={`w-4 h-4 rounded-full ${part.color.legend}`} />

            <span>{part.label}</span>
          </div>
        ))}
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
