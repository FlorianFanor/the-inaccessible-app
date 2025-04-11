import React, { useEffect, useState } from "react";

type Step = "form" | "buttons" | "plant" | "done";

export default function ScreenReaderExperience({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({ name: "", email: "", country: "" });
  const [clickedButtons, setClickedButtons] = useState<string[]>([]);
  const [mode, setMode] = useState<"hidden" | "visible">("hidden");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.name.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      form.country.trim()
    ) {
      setStep("buttons");
    }
  };

  const handleButtonClick = (id: string) => {
    if (!clickedButtons.includes(id)) {
      const next = [...clickedButtons, id];
      setClickedButtons(next);
      if (next.length >= 3) setStep("plant");
    }
  };

  const handlePlantClick = (plant: string) => {
    if (plant === "green") {
      setStep("done");
      setIsFinished(true);
      if (mode === "visible") {
        onFinish();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* 🔲 Overlay visuel opaque */}
      <div
        className="absolute inset-0 bg-black opacity-100 z-50"
        aria-hidden="true"
      >
        <div className="sr-only">Parcours lecteur d’écran actif</div>
      </div>

      {/* 🔘 Contenu accessible derrière */}
      <div className="inset-0 p-8 flex flex-col items-center justify-center gap-6 pointer-events-auto z-0 max-w-xl mx-auto text-center">
        {step === "form" && (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Nom</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-2 rounded"
                placeholder="Nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-2 rounded"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="country" className="sr-only">Pays</label>
              <input
                id="country"
                type="text"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                className="px-4 py-2 rounded"
                placeholder="Pays"
              />
            </div>
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
              Continuer
            </button>
          </form>
        )}

        {step === "buttons" && (
          <div className="space-y-4">
            <p className="sr-only">Cliquez sur 3 bons boutons pour continuer</p>
            <button onClick={() => handleButtonClick("1")} className="bg-gray-700 px-4 py-2 rounded" aria-label="Premier bouton d’action">Action 1</button>
            <button onClick={() => handleButtonClick("2")} className="bg-gray-700 px-4 py-2 rounded" aria-label="Deuxième bouton d’action">Action 2</button>
            <button onClick={() => handleButtonClick("fake")} className="bg-gray-700 px-4 py-2 rounded" aria-label="Bouton inutile">Bouton sans effet</button>
            <button onClick={() => handleButtonClick("3")} className="bg-gray-700 px-4 py-2 rounded" aria-label="Troisième bouton d’action">Action 3</button>
            <button onClick={() => handleButtonClick("reset")} className="bg-gray-700 px-4 py-2 rounded" aria-label="Réinitialiser (non requis)">Réinitialiser</button>
          </div>
        )}

        {step === "plant" && (
          <div className="space-y-4">
            <p className="sr-only">Sélectionnez la bonne plante. La plante verte est la bonne.</p>
            <div className="flex gap-6 justify-center">
              <button onClick={() => handlePlantClick("red")} aria-label="Plante rouge">
                <img src="/plants/red.png" alt="Plante rouge" className="w-20 h-20" />
              </button>
              <button onClick={() => handlePlantClick("green")} aria-label="Plante verte">
                <img src="/plants/green.png" alt="Plante verte" className="w-20 h-20" />
              </button>
              <button onClick={() => handlePlantClick("cactus")} aria-label="Cactus">
                <img src="/plants/cactus.png" alt="Un cactus" className="w-20 h-20" />
              </button>
            </div>
          </div>
        )}

        {step === "done" && (
          <div>
            <h2 className="text-2xl font-bold">🎉 Bien joué !</h2>
            <p className="mt-2">Tu as terminé le parcours lecteur d’écran avec succès.</p>
          </div>
        )}
      </div>

      {mode === "hidden" && (
        <div
          className="absolute inset-0 bg-black opacity-100 z-50"
          aria-hidden="true"
        />
      )}

      {/* Masquer les focus visuels */}

      <style jsx>{`
        ${mode === "hidden" ? `
          *:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          ` : ""}
`}</style>
    </div>
  );
}
