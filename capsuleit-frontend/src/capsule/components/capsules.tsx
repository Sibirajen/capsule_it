import { useState } from "react";
import { getCapsuleById } from "../api";
import Capsule from "../ui/capsule";
import CapsuleDetails from "../ui/capsuleDetails";
import type { SelectCapsuleState } from "../types";
import Loading from "../../components/ui/loading";
import { useCapsules } from "../hooks/useCapsules";

export default function Capsules() {
    const { capsulesData, capsulesLoading, capsuleError } = useCapsules();
    const [capsuleData, setSelectCapsuleState] = useState<SelectCapsuleState>({ capsule: null, isLoading: false, error: null });
    console.log("capsuleData", capsuleData);

    const handleCapsuleClick = async (id: number) => {
        setSelectCapsuleState({ capsule: null, isLoading: true, error: null });
        try {
            const capsule = await getCapsuleById(id);
            console.log("capsuleeee", capsule);
            setSelectCapsuleState({ capsule: capsule, isLoading: false, error: null });
            console.log("capsuleDataaaaa", capsuleData);
        } catch {
            setSelectCapsuleState({ capsule: null, isLoading: false, error: "Unable to load this capsule." });
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

                        {capsulesLoading ? (
                            <Loading value="fetching capsules"/>
                        ) : capsuleError ? (
                            <p className="text-sm text-(--color-muted-value)">
                                {capsuleError}
                            </p>
                        ) : (
                            <div className="space-y-4">
                                {capsulesData.map((capsule) => (
                                    <div
                                        key={capsule.id}
                                        onClick={() =>
                                            handleCapsuleClick(capsule.id)
                                        }
                                        className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                                            capsuleData.capsule?.id === capsule.id
                                                ? "border-(--color-primary-value) bg-(--color-primary-value)/5"
                                                : "border-(--color-foreground-value)/10 hover:border-(--color-primary-value)/40"
                                        }`}
                                    >
                                        <Capsule {...capsule} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Right side */}
                <section className="w-1/2 px-12 py-12">
                    {capsuleData.isLoading ? (
                        <Loading value="fetching capsule"/>
                    ) : capsuleData.error ? (
                        <p className="text-sm text-(--color-muted-value)">
                            {capsuleData.error}
                        </p>
                    ) : capsuleData.capsule ? (
                        <CapsuleDetails {...capsuleData.capsule} />
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