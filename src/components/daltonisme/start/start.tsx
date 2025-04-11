import React from 'react'

const Start = ({ setStartTime, setStep }) => {
    return (
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
    )
}

export default Start
