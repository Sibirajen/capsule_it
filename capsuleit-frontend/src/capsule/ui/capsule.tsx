import type { CapsuleProps } from "../types";

export default function Capsule({
    title,
    description,
    opensAt,
    status,
}: CapsuleProps) {
    const formattedDate = new Date(opensAt).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <article className="group w-full max-w-2xl border border-(--color-foreground-value) bg-(--color-background-value) p-7 text-(--color-foreground-value) transition-shadow duration-200 hover:shadow-[6px_6px_0px_var(--color-foreground-value)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-(--color-muted-value)/30 pb-5">
                <span className="text-xs font-medium uppercase tracking-[0.2em]">
                    Capsule
                </span>

                {/* <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-primary-value)" />
                    <span className="text-xs uppercase tracking-wider text-(--color-muted-value)">
                        Private
                    </span>
                </div> */}
            </div>

            {/* Content */}
            <div className="py-10">
                <h1 className="text-3xl font-normal tracking-tight">
                    {title}
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-(--color-muted-value)">
                    {description}
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between border-t border-(--color-muted-value)/30 pt-6">
                <div>
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-muted-value)">
                        {status}
                    </p>

                    <p className="text-lg">
                        {formattedDate}
                    </p>
                </div>

                <span className="text-xs text-(--color-muted-value) transition-transform duration-200 group-hover:translate-x-1">
                    →
                </span>
            </div>
        </article>
    );
}