import React from 'react'

const Finish = ({ startTime, endTime }) => {
    return (
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
    )
}

export default Finish
