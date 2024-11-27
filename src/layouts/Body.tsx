import React from "react";

interface BodyProps {
    page: React.ComponentType;
}

export default function Body({ page: Page }: BodyProps) {
    return (
        <main className="flex-grow px-4 md:px-8 lg:px-[16%] py-10 bg-[#F2F2F2]">
            <Page />
        </main>
    );
}