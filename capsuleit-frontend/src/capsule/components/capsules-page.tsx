import { getAllCapsules } from "../api";
import Capsule from "../ui/capsule";
import type { CapsuleData } from "../types";
import { useEffect, useState } from "react";

export default function CapsulePages() {
    const [capsules, setCapsules] = useState<CapsuleData[]>([]);

    useEffect(() => {
        getAllCapsules().then(setCapsules);
    }, []);

    return <div>
        {capsules.map((capsule: CapsuleData) => (
            <Capsule key={capsule.id} {...capsule} />
        ))}
    </div>
}