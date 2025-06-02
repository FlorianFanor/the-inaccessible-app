import React from "react";

const Check = ({ handleStart }: { handleStart: () => void }) => {
    const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-400",
        "bg-pink-500",
        "bg-purple-500",
        "bg-orange-400",
        "bg-lime-500",
        "bg-teal-500",
        "bg-amber-500",
    ];

    return (
        <section className=" flex flex-col items-center justify-center bg-white px-6 py-12 text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
                Test de vision des couleurs
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-xl">
                Si tous les carrés ci-dessous vous paraissent gris ou similaires, vous pouvez continuer.
                Sinon, activez le simulateur de daltonisme{" "}
                <a
                    href="https://chrome.google.com/webstore/detail/web-disability-simulator/djcbedpbcajholncbgdcdnhmlblkpggk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sky-800 hover:text-sky-600"
                >
                    Web Disability Simulator
                </a>{" "}
                et sélectionnez l’option <strong>Total Color Blindness</strong>.
            </p>

            <div className="grid grid-cols-5 gap-4 mb-10">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className={`w-20 h-20 rounded ${color}`}
                        aria-hidden="true"
                    />
                ))}
            </div>

            <button
                onClick={handleStart}
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 outline-none"
            >
                Commencer l’expérience d’accessibilité
            </button>
        </section>
    );
}

export default Check;
