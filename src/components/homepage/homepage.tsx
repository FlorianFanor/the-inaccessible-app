import React from 'react'
import { Daltonisme } from '../daltonisme/daltonisme.tsx';


export const Homepage = () => {
    return (
        <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-8">
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
            <Daltonisme />
        </main>
    )
}

