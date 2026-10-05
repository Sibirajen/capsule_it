import type { CapsuleData } from "../types";

export default function CapsuleDetails(capsule : CapsuleData) {
    return (
        <div className="mx-auto max-w-xl">
            <div className="mb-10">
                <span className="text-xs font-medium uppercase tracking-wider text-(--color-primary-value)">
                    Capsule
                </span>

                <h2 className="mt-3 text-3xl font-semibold">
                    {capsule.title}
                </h2>
            </div>

            <div className="mb-8">
                <h3 className="mb-2 text-sm font-medium">
                    Description
                </h3>

                <p className="text-sm leading-7 text-(--color-muted-value)">
                    {capsule.description}
                </p>
            </div>

            <div className="mb-8">
                <h3 className="mb-2 text-sm font-medium">
                    Opens on
                </h3>

                <p className="text-sm text-(--color-muted-value)">
                    {new Date(capsule.opensAt).toLocaleString()}
                </p>
            </div>

            <div>
                <h3 className="mb-2 text-sm font-medium">
                    Status
                </h3>

                <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        capsule.status === "opened"
                            ? "bg-(--color-primary-value)/10 text-(--color-primary-value)"
                            : "bg-(--color-secondary-value)/10 text-(--color-secondary-value)"
                    }`}
                >
                    {capsule.status === "opened" ? "Opened" : "Sealed"}
                </span>
            </div>
        </div>
    );
}