import type { CapsuleFormFieldsProps } from "../types";

export default function CapsuleFormFields({
    title,
    setTitle,
    description,
    setDescription,
    opensAt,
    setOpensAt,
    minDate,
    maxDate,
}: CapsuleFormFieldsProps) {
    return (
        <>
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
                    min={minDate}
                    max={maxDate}
                    onChange={(e) => setOpensAt(e.target.value)}
                    className="w-full rounded-lg border border-(--color-muted-value)/30 bg-(--color-background-value) px-4 py-3 text-sm text-(--color-foreground-value) outline-none transition focus:border-(--color-primary-value) focus:ring-2 focus:ring-(--color-primary-value)/20"
                />

                <p className="mt-2 text-xs text-(--color-muted-value)">
                    Your capsule will remain locked until this date.
                </p>
            </div>
        </>
    );
}