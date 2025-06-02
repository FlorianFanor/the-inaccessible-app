import React from "react";
import { Step } from "../daltonisme.tsx";

const LinkTrap = ({ setEndTime, setStep }) => {
  return (
    <div className="space-y-6 max-w-xl">
      <h2 className="text-xl font-bold">🔗 Trouver le lien</h2>

      <p>
        Dans le paragraphe suivant, un lien est caché. Il est uniquement
        identifiable par sa couleur. À toi de le trouver et de cliquer dessus 👀
      </p>

      <p className="text-gray-800">
        L'accessibilité est essentielle pour tout le monde. Si tu veux en savoir
        plus, tu peux visiter ce site
        <a
          href="#"
          className="text-blue-800 ml-1 cursor-auto"
          onClick={() => {
            setEndTime(Date.now());
            setStep(Step.LINK_TRAP);
          }}
        >
          ici
        </a>
        .
      </p>

      <p className="text-sm italic text-gray-600">
        Et oui… pas de soulignement, pas de hover clair, pas d’alternative.
        Imagine lire ça sans pouvoir percevoir le bleu.
      </p>
    </div>
  );
};

export default LinkTrap;
