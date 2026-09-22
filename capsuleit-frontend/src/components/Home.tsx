import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <main className="min-h-[calc(100vh-73px)] bg-(--color-background-value) px-6 py-20 text-(--color-foreground-value)">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-(--color-primary-value)">
                    CapsuleIt
                </p>

                <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    Write something today.
                    <br />
                    Open it in the future.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-(--color-muted-value)">
                    CapsuleIt lets you create digital time capsules for your
                    future self. Write a message, choose when it should open,
                    and let time take care of the rest.
                </p>

                <div className="mt-10 flex items-center gap-4">
                    <NavLink
                        to="/create"
                        className="bg-(--color-primary-value) px-5 py-3 text-sm font-medium text-(--color-background-value) transition hover:bg-(--color-secondary-value)"
                    >
                        Create a capsule
                    </NavLink>

                    <NavLink
                        to="/capsules"
                        className="border border-(--color-muted-value)/30 px-5 py-3 text-sm font-medium text-(--color-foreground-value) transition hover:border-(--color-foreground-value)"
                    >
                        View capsules
                    </NavLink>
                </div>

                <div className="mt-20 w-full max-w-xl border-t border-(--color-muted-value)/20 pt-8">
                    <p className="text-sm leading-6 text-(--color-muted-value)">
                        A place for thoughts, memories, promises, and moments
                        you want to leave for another version of yourself.
                    </p>
                </div>
            </div>
        </main>
    );
}
