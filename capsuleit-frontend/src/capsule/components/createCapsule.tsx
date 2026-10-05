import { useState } from "react";
import type { SubmitEventHandler } from "react";
import { createCapsule } from "../api";

export default function CreateCapsule() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [opensAt, setOpensAt] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
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
                opensAt: `${opensAt}T00:00:00Z`
            });

            setTitle("");
            setDescription("");
            setOpensAt("");
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
        <div className="min-h-screen bg-(--color-background-value) px-6 py-12 text-(--color-foreground-value)">
            <div className="mx-auto w-full max-w-xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold">
                        Create Capsule
                    </h1>

                    <p className="mt-2 text-sm text-(--color-muted-value)">
                        Write something now and open it in the future.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="title"
                            className="mb-2 block text-sm font-medium"
                        >
                            Title
                        </label>

                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="My future self"
                            className="w-full rounded-lg border border-(--color-muted-value)/30 bg-(--color-background-value) px-4 py-3 text-sm text-(--color-foreground-value) outline-none transition placeholder:text-(--color-muted-value) focus:border-(--color-primary-value) focus:ring-2 focus:ring-(--color-primary-value)/20"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="mb-2 block text-sm font-medium"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Write something you want to remember..."
                            rows={6}
                            className="w-full resize-none rounded-lg border border-(--color-muted-value)/30 bg-(--color-background-value) px-4 py-3 text-sm text-(--color-foreground-value) outline-none transition placeholder:text-(--color-muted-value) focus:border-(--color-primary-value) focus:ring-2 focus:ring-(--color-primary-value)/20"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="opensAt"
                            className="mb-2 block text-sm font-medium"
                        >
                            Open on
                        </label>

                        <input
                            id="opensAt"
                            type="date"
                            value={opensAt}
                            onChange={(e) => setOpensAt(e.target.value)}
                            className="w-full rounded-lg border border-(--color-muted-value)/30 bg-(--color-background-value) px-4 py-3 text-sm text-(--color-foreground-value) outline-none transition focus:border-(--color-primary-value) focus:ring-2 focus:ring-(--color-primary-value)/20"
                        />

                        <p className="mt-2 text-xs text-(--color-muted-value)">
                            Your capsule will remain locked until this date.
                        </p>
                    </div>

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
                        {loading ? "Creating..." : "Create Capsule"}
                    </button>
                </form>
            </div>
        </div>
    );
}