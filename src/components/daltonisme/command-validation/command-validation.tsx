import React, { useState, useEffect, useRef } from "react";
import { Step } from "../daltonisme.tsx";

const initialColors = [
  { name: "red", hex: "#ef4444" },
  { name: "orange", hex: "#fb923c" },
  { name: "yellow", hex: "#facc15" },
  { name: "green", hex: "#22c55e" },
  { name: "blue", hex: "#3b82f6" },
  { name: "purple", hex: "#8b5cf6" },
  { name: "red", hex: "#ef9999" },
  { name: "orange", hex: "#fb345d" },
  { name: "yellow", hex: "#fa5ddd" },
  { name: "blue", hex: "#3b03ff" },
  { name: "purple", hex: "#8b0ddd" },
];

const CommandValidation = ({ setStep }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<{ color: string; success: boolean }[]>(
    []
  );
  const intervalRef = useRef<NodeJS.Timer | null>(null);
  const isRunning = useRef(true);

  const shuffleColors = (array) => {
    return [...array].sort(() => 0.5 - Math.random());
  };

  const [colors, setColors] = useState(() => shuffleColors(initialColors));
  const currentColor = colors[currentColorIndex];
  const success = currentColor.name === "green";

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 700);

    return () => clearInterval(intervalRef.current!);
  }, [colors.length]);

  const handleClick = () => {
    if (!isRunning.current) return;

    isRunning.current = false;
    clearInterval(intervalRef.current!);

    setHistory((prev) => [...prev, { color: currentColor.name, success }]);

    setMessage(
      success
        ? "Bravo ! Tu as cliqué au bon moment : c'était vert !"
        : "Raté ! Ce n'était pas vert. Imagine ne pas pouvoir distinguer cette couleur…"
    );

    if (success) {
      setTimeout(() => {
        setStep(Step.COMMAND_VALIDATION);
      }, 2000);
    }
  };

  const handleRetry = () => {
    setMessage("");
    isRunning.current = true;
    const shuffled = shuffleColors(initialColors);
    setColors(shuffled);
    setCurrentColorIndex(0);

    intervalRef.current = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % shuffled.length);
    }, 700);
  };

  return (
    <div className="p-8 text-center max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Clique quand la couleur est verte
      </h2>

      <button
        type="button"
        className="w-full h-12 rounded transition-all duration-300 border cursor-pointer"
        style={{ backgroundColor: colors[currentColorIndex].hex }}
        onClick={handleClick}
        aria-label="Clique quand la couleur est verte"
      />

      {message && (
        <div className="mt-6 text-md font-medium bg-yellow-100 border border-yellow-300 p-2 rounded text-gray-800 max-w-xs mx-auto">
          {message}

          {!success && (
            <button
              onClick={handleRetry}
              className="mt-4 block mx-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Rejouer
            </button>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-8 text-left">
          <h3 className="font-semibold mb-2">Historique des tentatives :</h3>

          <ul className="space-y-1 text-sm">
            {history.map((entry, index) => (
              <li
                key={index}
                className={`flex justify-between ${
                  entry.success ? "text-green-600" : "text-red-600"
                }`}
              >
                <span>
                  Couleur : <strong>{entry.color}</strong>
                </span>

                <span>{entry.success ? "✓ Succès" : "✗ Échec"}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommandValidation;
