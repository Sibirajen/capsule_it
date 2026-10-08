export default function Loading({ value }: { value: string }) {
    return (
        <div className="flex min-h-50 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-(--color-secondary-value) border-t-(--color-primary-value)" />

                <p className="text-sm text-(--color-muted-value)">
                    {value}...
                </p>
            </div>
        </div>
    );
}