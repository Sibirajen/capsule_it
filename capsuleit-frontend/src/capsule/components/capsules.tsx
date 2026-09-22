import { useEffect, useState } from "react";
import { getAllCapsules } from "../api";
import Capsule from "../ui/capsule";
import type { CapsuleData } from "../types";
import { NavLink } from "react-router-dom";

export default function Capsules() {
    const [capsules, setCapsules] = useState<CapsuleData[]>([]);

    useEffect(() => {
        getAllCapsules().then(setCapsules);
    }, []);

    return (
        <main className="min-h-screen bg-(--color-background-value) px-6 py-12 text-(--color-foreground-value)">
            <div className="mx-auto w-full max-w-3xl">
                <header className="mb-12">
                    <h1 className="text-xl font-semibold">
                        My Capsules
                    </h1>

                    <p className="mt-2 text-sm text-(--color-muted-value)">
                        Your memories, waiting for their time.
                    </p>
                </header>

                <div className="space-y-6">
                    {capsules.map((capsule) => (
                        <NavLink to={`/capsule/${capsule.id}`} key={capsule.id} className="block">
                            <Capsule {...capsule} />
                        </NavLink>
                    ))}
                </div>
            </div>
        </main>
    );
}