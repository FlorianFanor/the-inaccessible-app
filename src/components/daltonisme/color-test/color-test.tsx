import React, { useState } from "react";
import { Step } from "../daltonisme.tsx";

const plants = [
  { emoji: "🪴", color: "red", bg: "bg-red-500", label: "Plante rouge" },
  {
    emoji: "🌱",
    color: "pink",
    bg: "bg-pink-400",
    label: "Plante rose",
  },
  { emoji: "🌵", color: "blue", bg: "bg-blue-500", label: "Plante bleue" },
  {
    emoji: "🌸",
    color: "green",
    bg: "bg-green-500",
    label: "Plante verte",
  },
  { emoji: "🌻", color: "orange", bg: "bg-orange-500", label: "Plante orange" },
  {
    emoji: "🌼",
    color: "yellow",
    bg: "bg-yellow-500",
    label: "Plante jaune",
  },
];

const ColorTest = ({ setStep }) => {
  const [error, setError] = useState("");
  const [shuffled, setShuffled] = useState(() => shufflePlants());

  function shufflePlants() {
    return [...plants].sort(() => 0.5 - Math.random());
  }

  const handleClick = (color: string) => {
    if (color === "green") {
      setStep(Step.COLOR_TEST);
    } else {
      setError("Oups, ce n'était pas la bonne plante ! Essaie encore.");
      setShuffled(shufflePlants());
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">🌿 Mission : Arrose la bonne plante</h2>

      <p>
        Plusieurs plantes ont besoin d’eau, mais attention ! Seule la plante
        avec le feuillage <strong>vert</strong> a soif. Clique sur le{" "}
        <strong>bouton vert</strong> pour l’arroser. Ne te fie qu'à la
        couleur... bonne chance !
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {shuffled.map((plant, idx) => (
          <div key={idx} className="bg-gray-100 rounded p-4 text-center shadow">
            <div className="text-3xl mb-2">{plant.emoji}</div>

            <button
              className={`w-full h-12 rounded ${plant.bg}`}
              aria-label={plant.label}
              onClick={() => handleClick(plant.color)}
            />
          </div>
        ))}
      </div>

      {error && <div className="text-red-600 font-semibold">{error}</div>}

      <p className="text-sm italic text-gray-600 mt-4">
        Astuce : Si tu ne peux pas distinguer les couleurs, imagine devoir
        deviner à chaque fois que tu interagis avec un site...
      </p>
    </div>
  );
};

export default ColorTest;
