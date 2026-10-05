import { useEffect, useState } from "react";
import { getAllCapsules, getCapsuleById } from "../api";
import Capsule from "../ui/capsule";
import CapsuleDetails from "../ui/capsuleDetails";
import type { CapsuleData } from "../types";

export default function Capsules() {
    const [capsules, setCapsules] = useState<CapsuleData[]>([]);
    const [selectedCapsule, setSelectedCapsule] = useState<CapsuleData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAllCapsules().then(setCapsules);
    }, []);

    const handleCapsuleClick = async (id: number) => {
        setLoading(true);
        setError(null);

        try {
            const capsule = await getCapsuleById(id);
            setSelectedCapsule(capsule);
        } catch {
            setError("Unable to load this capsule.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-(--color-background-value) text-(--color-foreground-value)">
            <div className="flex min-h-screen w-full">

                {/* Left side */}
                <section className="w-1/2 border-r border-(--color-foreground-value)/10 px-8 py-12">
                    <div className="mx-auto max-w-xl">
                        <header className="mb-10">
                            <h1 className="text-xl font-semibold">
                                My Capsules
                            </h1>

                            <p className="mt-2 text-sm text-(--color-muted-value)">
                                Your memories, waiting for their time.
                            </p>
                        </header>

                        <div className="space-y-4">
                            {capsules.map((capsule) => (
                                <div
                                    key={capsule.id}
                                    onClick={() =>
                                        handleCapsuleClick(capsule.id)
                                    }
                                    className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                                        selectedCapsule?.id === capsule.id
                                            ? "border-(--color-primary-value) bg-(--color-primary-value)/5"
                                            : "border-(--color-foreground-value)/10 hover:border-(--color-primary-value)/40"
                                    }`}
                                >
                                    <Capsule {...capsule} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Right side */}
                <section className="w-1/2 px-12 py-12">
                    {loading ? (
                        <p>Loading capsule...</p>
                    ) : error ? (
                        <p className="text-sm text-(--color-muted-value)">
                            {error}
                        </p>
                    ) : selectedCapsule ? (
                        <CapsuleDetails {...selectedCapsule} />
                    ) : (
                        <p className="text-sm text-(--color-muted-value)">
                            Select a capsule to view it.
                        </p>
                    )}
                </section>

            </div>
        </main>
    );
}