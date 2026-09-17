import type { CapsuleProps } from "../types";

export default function Capsule({
    title,
    description,
    opensAt,
    status
}: CapsuleProps) {
    return (
        <article className="w-full max-w-2xl border border-neutral-300 bg-white p-8 text-neutral-950">
            {/* Header */}
            <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em]">
                    Capsule
                </span>

                <span className="text-xs uppercase tracking-wider text-neutral-500">
                    Private
                </span>
            </div>

            {/* Content */}
            <div className="space-y-6">
                <h1 className="text-4xl font-normal tracking-tight">
                    {title}
                </h1>

                <div className="h-px w-full bg-neutral-200" />

                <p className="max-w-xl text-base leading-7 text-neutral-600">
                    {description}
                </p>
            </div>

            {/* Opening date */}
            <div className="mt-16">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {status}
                </p>

                <p className="text-lg">
                    {new Date(opensAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
            </div>
        </article>
    );
}