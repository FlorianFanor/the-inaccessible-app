import React, { useState } from "react";

type FieldProps = {
    label: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    isValid: boolean;
    attempted: boolean;
    hint?: string;
};

export const Field = ({
    label,
    value,
    onChange,
    type = "text",
    isValid,
    attempted,
    hint,
}: FieldProps) => {

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