import React from "react";
import { Step } from "../daltonisme.tsx";

const FavoriteProduct = ({ setStep }) => {
  const products = [
    {
      id: 1,
      name: "T-shirt Rouge",
      available: false,
      color: "bg-orange-500",
    },
    {
      id: 2,
      name: "T-shirt Bleu",
      available: false,
      color: "bg-orange-500",
    },
    {
      id: 3,
      name: "T-shirt Jaune",
      available: true,
      color: "bg-green-500",
    },
    {
      id: 4,
      name: "T-shirt Vert",
      available: false,
      color: "bg-orange-500",
    },
    {
      id: 5,
      name: "T-shirt Rose",
      available: false,
      color: "bg-orange-500",
    },
    {
      id: 6,
      name: "T-shirt Orange",
      available: false,
      color: "bg-orange-500",
    },
    {
      id: 7,
      name: "T-shirt Violet",
      available: false,
      color: "bg-orange-500",
    },
    {
      id: 8,
      name: "T-shirt Gris",
      available: true,
      color: "bg-green-500",
    },
  ];

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
        {products.map((product) => (
          <button
            key={product.id}
            className={`p-4 rounded-lg shadow text-white font-semibold ${product.color}`}
            onClick={() => {
              alert(
                product.available
                  ? `Tu as choisi le ${product.name} qui est disponible, bien joué !`
                  : "Ce produit n'est pas disponible"
              );
              if (product.available) {
                setStep(Step.FAVORITE_PRODUCT);
              }
            }}
          >
            {product.name}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-600 italic">
        Sans perception des couleurs, tu devrais deviner à chaque fois que tu
        intéragis avec un site...
      </p>
    </div>
  );
};

export default FavoriteProduct;
