import React, { useState } from "react";
import { Step } from "../daltonisme.tsx";

const products = [
  { id: 1, name: "T-shirt Rouge", available: false, color: "bg-orange-500" },
  { id: 2, name: "T-shirt Bleu", available: false, color: "bg-orange-500" },
  { id: 3, name: "T-shirt Vert", available: false, color: "bg-orange-500" },
  { id: 4, name: "T-shirt Jaune", available: true, color: "bg-green-500" },
  {
    id: 5,
    name: "T-shirt Turquoise",
    available: false,
    color: "bg-orange-500",
  },
  { id: 6, name: "T-shirt Orange", available: false, color: "bg-orange-500" },
  { id: 7, name: "T-shirt Violet", available: false, color: "bg-orange-500" },
  { id: 8, name: "T-shirt Gris", available: false, color: "bg-orange-500" },
  { id: 9, name: "T-shirt Noir", available: false, color: "bg-orange-500" },
  { id: 10, name: "T-shirt Blanc", available: false, color: "bg-orange-500" },
  {
    id: 11,
    name: "T-shirt Bordeaux",
    available: false,
    color: "bg-orange-500",
  },
  { id: 12, name: "T-shirt Rose", available: true, color: "bg-green-500" },
  { id: 13, name: "T-shirt Marine", available: false, color: "bg-orange-500" },
  {
    id: 14,
    name: "T-shirt Kaki",
    available: false,
    color: "bg-orange-500",
  },
  { id: 15, name: "T-shirt Corail", available: false, color: "bg-orange-500" },
  { id: 16, name: "T-shirt Menthe", available: true, color: "bg-green-500" },
];

const FavoriteProduct = ({ setStep }) => {
  const shuffleProducts = () => {
    return [...products].sort(() => 0.5 - Math.random());
  };


  const [shuffled, setShuffled] = useState(() => shuffleProducts());
  const [tries, setTries] = useState(0);


  const handleClick = (product) => {
    setTries(tries + 1);
    alert(
      product.available
        ? `Tu as choisi le ${product.name} qui est disponible, bien joué !`
        : "Ce produit n'est pas disponible, essaie encore."
    );
    if (product.available) {
      setStep(Step.FAVORITE_PRODUCT);
    } else {
      setShuffled(shuffleProducts());
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Mission : Choisis un produit disponible
      </h2>

      <p className="mb-6 text-gray-700">
        Tu veux acheter un t-shirt, mais attention : seuls ceux disponibles sont
        marqués d'un fond <strong>vert</strong>. Clique sur un t-shirt
        disponible pour le commander. Facile, non ?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shuffled.map((product) => (
          <button
            key={product.id}
            className={`p-4 rounded-lg shadow text-white font-semibold ${product.color}`}
            onClick={() => handleClick(product)}
          >
            {product.name}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-600 italic">
        Nombre d'essais : {tries}
        <br />
        Sans perception des couleurs, tu devrais deviner à chaque fois que tu
        intéragis avec un site...
      </p>
    </div>
  );
};

export default FavoriteProduct;
