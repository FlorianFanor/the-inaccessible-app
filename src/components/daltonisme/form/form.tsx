import React, { useState } from 'react'
import { Field } from '../field/field.tsx';

const Form = ({ setStep }) => {
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
    )
}

export default Form
