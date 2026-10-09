import type { CapsuleData } from "../types";
import { useEffect, useState } from "react";
import { getAllCapsules } from "../api";

export function useCapsules() {
    const [capsulesData, setCapsulesData] = useState<CapsuleData[]>([]);
    const [capsulesLoading, setCapsulesLoading] = useState(false);
    const [capsuleError, setCapsuleError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchCapsules() {
            setCapsulesLoading(true);
            setCapsuleError(null);

            try {
                const data = await getAllCapsules(controller.signal);
                setCapsulesData (data);
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    // controller.abort();
                    return;
                }
                setCapsuleError("Failed to fetch capsules.");
            } finally {
                setCapsulesLoading(false);
            }
        }

        fetchCapsules();

        return () => controller.abort();
    }, []);

    return { capsulesData, capsulesLoading, capsuleError };
}