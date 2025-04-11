import React from 'react';

export default function Header() {
    return (
        <header className="w-full bg-white border-b shadow-sm px-4 py-3 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-lg font-semibold">The inaccessible app</h1>
            </div>
        </header>
    );
}