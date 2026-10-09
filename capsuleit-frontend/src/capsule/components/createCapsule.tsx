import { useState } from "react";
import type { SubmitEventHandler } from "react";
import { createCapsule } from "../api";
import CapsuleFormFields from "./capsuleFormFields";
import { useNavigate } from "react-router-dom";

export default function CreateCapsule() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [opensAt, setOpensAt] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const today = new Date();
    const minDate = new Date(today);
    const maxDate = new Date(today);
    const navigate = useNavigate();

    minDate.setDate(today.getDate() + 1);
    maxDate.setFullYear(today.getFullYear() + 100);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (loading) return;

        setError("");

        if (!title.trim()) {
            setError("Title is required.");
            return;
        }

        if (!opensAt) {
            setError("Please select when the capsule should open.");
            return;
        }

        try {
            setLoading(true);

            await createCapsule({
                title: title.trim(),
                description: description.trim(),
                opensAt: `${opensAt}T00:00:00Z`,
            });

            setTitle("");
            setDescription("");
            setOpensAt("");

            navigate("/capsules");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to create capsule."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-(--color-background-value) px-6 py-12 text-(--color-foreground-value)"
            aria-busy={loading}
        >
            <div className="mx-auto w-full max-w-xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold">
                        Create Capsule
                    </h1>

                    <p className="mt-2 text-sm text-(--color-muted-value)">
                        Write something now and open it in the future.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <fieldset
                        disabled={loading}
                        className="m-0 min-w-0 space-y-6 border-0 p-0"
                    >
                        <CapsuleFormFields
                            title={title}
                            setTitle={setTitle}
                            description={description}
                            setDescription={setDescription}
                            opensAt={opensAt}
                            setOpensAt={setOpensAt}
                            minDate={formatDate(minDate)}
                            maxDate={formatDate(maxDate)}
                        />

                        {error && (
                            <p className="text-sm text-(--color-secondary-value)">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-(--color-primary-value) px-4 py-3 text-sm font-medium text-(--color-background-value) transition hover:bg-(--color-secondary-value) disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Create Capsule
                        </button>
                    </fieldset>
                </form>
            </div>

            {/* Full-page loading overlay */}
            {loading && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-(--color-background-value)/85 backdrop-blur-sm"
                    role="status"
                    aria-live="polite"
                    aria-label="Creating your capsule"
                >
                    <div className="flex flex-col items-center gap-5">
                        <div className="relative flex h-16 w-16 items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-4 border-(--color-muted-value)/20" />

                            <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-(--color-primary-value) border-r-(--color-secondary-value)" />

                            <div className="h-3 w-3 rounded-full bg-(--color-primary-value)" />
                        </div>

                        <div className="text-center">
                            <p className="text-base font-semibold text-(--color-foreground-value)">
                                Creating your capsule
                            </p>

                            <p className="mt-2 text-sm text-(--color-muted-value)">
                                Sealing your memories for the future...
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}