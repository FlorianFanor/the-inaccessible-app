import React from "react";
import { Step } from "../daltonisme.tsx";

const ColorTest = ({ setStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">🌿 Mission : Arrose la bonne plante</h2>

      <p>
        Trois plantes ont besoin d’eau, mais attention ! Seule la plante avec le
        feuillage <strong>vert</strong> a soif. Clique sur le{" "}
        <strong>bouton vert</strong> pour l’arroser. Ne te fie qu'à la
        couleur... bonne chance !
      </p>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-100 rounded p-4 text-center shadow">
          <div className="text-3xl mb-2">🪴</div>

          <button
            className="w-full h-12 rounded bg-red-500"
            aria-label="Plante rouge"
          />
        </div>

        <div className="bg-gray-100 rounded p-4 text-center shadow">
          <div className="text-3xl mb-2">🌱</div>
          <button
            className="w-full h-12 rounded bg-green-500"
            onClick={() => {
              setStep(Step.COLOR_TEST);
            }}
            aria-label="Plante verte"
          />
        </div>

        <div className="bg-gray-100 rounded p-4 text-center shadow">
          <div className="text-3xl mb-2">🌵</div>

          <button
            className="w-full h-12 rounded bg-yellow-500"
            aria-label="Plante jaune"
          />
        </div>
      </div>

      <p className="text-sm italic text-gray-600 mt-4">
        Astuce : Si tu ne peux pas distinguer les couleurs, imagine devoir
        deviner à chaque fois que tu interagis avec un site...
      </p>
    </div>
  );
};

export default ColorTest;
