import React, { useState } from "react";

export default function Daltonisme() {
    const [step, setStep] = useState<"start" | "form" | "color-test" | "link-trap" | "finished">("start");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pseudo: "",
        phone: "",
        password: "",
        code: "",
        country: "",
    });

    const [attemptedSubmit, setAttemptedSubmit] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);


    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);



    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAttemptedSubmit(true);

        const isFormValid =
            formData.name.trim() !== "" &&
            isValidEmail(formData.email) &&
            /^X_.*\d$/.test(formData.pseudo) &&
            /^\+33\d{9}$/.test(formData.phone) &&
            /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(formData.password) &&
            /^[a-zA-Z]{4}[^a-zA-Z0-9]{2}$/.test(formData.code) &&
            /^[A-Z]+$/.test(formData.country);

        if (isFormValid) {
            setStep("color-test");
        }
    };


    return (
        <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-8" >
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-4">Bienvenue sur The inaccessible app</h1>
                <p className="text-lg mb-6">
                    Explorez différents parcours pour découvrir les défis de l'accessibilité web.
                </p>

                <div className="grid gap-6">
                    <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold mb-2">Parcours 1 – Daltonisme</h2>
                        <p className="mb-4">
                            Naviguez un site avec une vision simulée d'une personne daltonienne.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 p-8 max-w-xl mx-auto bg-gray-300">
                <h2 className="text-2xl font-bold mb-4">Parcours Daltonisme</h2>
                {step === "start" && (
                    <div>
                        <p className="mb-4">
                            Pour commencer, installe l'extension{" "}
                            <a
                                href="https://chrome.google.com/webstore/detail/web-disability-simulator/djcbedpbcajholncbgdcdnhmlblkpggk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Web Disability Simulator
                            </a>{" "}
                            et active <strong>Total Color Blindness</strong>.
                        </p>
                        <button
                            onClick={() => {
                                setStartTime(Date.now());
                                setStep("form");
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Démarrer le parcours
                        </button>
                    </div>
                )}

                {step === "form" && (
                    <>
                        <p className="mb-6 text-gray-800">
                            Avant de continuer ton aventure, on va te demander quelques petites infos. Rien de bien sorcier, c’est juste un
                            formulaire tout ce qu’il y a de plus basique. Tu vas voir, ça va aller vite. Vraiment.
                        </p>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <Field
                                label="Nom"
                                value={formData.name}
                                onChange={(v) => setFormData({ ...formData, name: v })}
                                isValid={formData.name.trim() !== ""}
                                attempted={attemptedSubmit}
                            />

                            <Field
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={(v) => setFormData({ ...formData, email: v })}
                                isValid={isValidEmail(formData.email)}
                                attempted={attemptedSubmit}
                            />

                            <Field
                                label="Pseudo"
                                value={formData.pseudo}
                                onChange={(v) => setFormData({ ...formData, pseudo: v })}
                                isValid={/^X_.*\d$/.test(formData.pseudo)}
                                attempted={attemptedSubmit}
                                hint="Doit commencer par 'X_' et finir par un chiffre. Ex: X_user9"
                            />

                            <Field
                                label="Téléphone"
                                value={formData.phone}
                                onChange={(v) => setFormData({ ...formData, phone: v })}
                                isValid={/^\+33\d{9}$/.test(formData.phone)}
                                attempted={attemptedSubmit}
                                hint="+33 suivi de 9 chiffres sans espace"
                            />

                            <Field
                                label="Mot de passe"
                                type="password"
                                value={formData.password}
                                onChange={(v) => setFormData({ ...formData, password: v })}
                                isValid={/^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(formData.password)}
                                attempted={attemptedSubmit}
                                hint="Majuscule, 2 chiffres et un caractère spécial requis"
                            />

                            <Field
                                label="Code secret"
                                value={formData.code}
                                onChange={(v) => setFormData({ ...formData, code: v })}
                                isValid={/^[a-zA-Z]{4}[^a-zA-Z0-9]{2}$/.test(formData.code)}
                                attempted={attemptedSubmit}
                                hint="4 lettres suivies de 2 symboles spéciaux (Ex: abCD#@)"
                            />

                            <Field
                                label="Pays"
                                value={formData.country}
                                onChange={(v) => setFormData({ ...formData, country: v })}
                                isValid={/^[A-Z]+$/.test(formData.country)}
                                attempted={attemptedSubmit}
                                hint="Tout en MAJUSCULES, pas d'accent, pas d'espace"
                            />

                            <button
                                type="submit"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Valider
                            </button>
                        </form>
                    </>
                )}


                {step === "color-test" && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">🌿 Mission : Arrose la bonne plante</h2>
                        <p>
                            Trois plantes ont besoin d’eau, mais attention ! Seule la plante avec le feuillage <strong>vert</strong> a soif. Clique sur le <strong>bouton vert</strong> pour l’arroser. Ne te fie qu'à la couleur... bonne chance !
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="bg-gray-100 rounded p-4 text-center shadow">
                                <div className="text-3xl mb-2">🪴</div>
                                <button className="w-full h-12 rounded bg-red-500" aria-label="Plante rouge" />
                            </div>
                            <div className="bg-gray-100 rounded p-4 text-center shadow">
                                <div className="text-3xl mb-2">🌱</div>
                                <button className="w-full h-12 rounded bg-green-500" onClick={() => {
                                    setEndTime(Date.now());
                                    setStep("link-trap");
                                }} aria-label="Plante verte" />
                            </div>
                            <div className="bg-gray-100 rounded p-4 text-center shadow">
                                <div className="text-3xl mb-2">🌵</div>
                                <button className="w-full h-12 rounded bg-yellow-500" aria-label="Plante jaune" />
                            </div>
                        </div>
                        <p className="text-sm italic text-gray-600 mt-4">
                            Astuce : Si tu ne peux pas distinguer les couleurs, imagine devoir deviner à chaque fois que tu interagis avec un site...
                        </p>
                    </div>
                )}

                {step === "link-trap" && (
                    <div className="space-y-6 max-w-xl">
                        <h2 className="text-xl font-bold">🔗 Trouver le lien</h2>

                        <p>
                            Dans le paragraphe suivant, un lien est caché. Il est uniquement identifiable par sa couleur.
                            À toi de le trouver et de cliquer dessus 👀
                        </p>

                        <p className="text-gray-800">
                            L'accessibilité est essentielle pour tout le monde. Si tu veux en savoir plus, tu peux visiter ce site
                            <a href="#" className="text-blue-800 ml-1 cursor-auto" onClick={() => {
                                setEndTime(Date.now());
                                setStep("finished");
                            }}>
                                ici
                            </a>
                            .
                        </p>

                        <p className="text-sm italic text-gray-600">
                            Et oui… pas de soulignement, pas de hover clair, pas d’alternative. Imagine lire ça sans percevoir le bleu.
                        </p>
                    </div>
                )}


                {step === "finished" && (
                    <div className="space-y-4 text-center">
                        <h2 className="text-2xl font-bold">🎉 Parcours terminé !</h2>
                        {startTime && endTime && (
                            <p>
                                Tu as complété l'expérience en{" "}
                                <strong>
                                    {Math.floor((endTime - startTime) / 60000)} min{" "}
                                    {Math.floor(((endTime - startTime) % 60000) / 1000)} sec
                                </strong>
                                .
                            </p>
                        )}
                        <p className="text-gray-700 mt-4">
                            Imagine devoir faire ça chaque jour... L’accessibilité, c’est pas une option.
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}


function Field({
    label,
    value,
    onChange,
    type = "text",
    isValid,
    attempted,
    hint,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    isValid: boolean;
    attempted: boolean;
    hint: string;
}) {
    const [showHint, setShowHint] = useState(false);

    return (
        <div className="relative">
            <label className="block mb-1 font-medium">{label}</label>
            <div className="flex items-center gap-2">
                <input
                    type={type}
                    className={`w-full border rounded px-3 py-2 ${!isValid && attempted ? "border-red-500" : "border-gray-500"
                        }`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />

                {/* 👻 Invisible hint button */}
                <button
                    type="button"
                    onClick={() => setShowHint((prev) => !prev)}
                    className="bg-[#b6e4b5] text-gray-300 border border-[#b6e4b5] text-sm rounded-full px-2 py-1 hover:none focus:outline-none"
                    title="Indice"
                >
                    ?
                </button>
            </div>

            {/* 💬 Hint popup */}
            {showHint && (
                <div className="absolute left-0 mt-1 p-2 bg-white border border-gray-300 text-sm shadow z-10 max-w-xs">
                    {hint}
                </div>
            )}
        </div>
    );
}

