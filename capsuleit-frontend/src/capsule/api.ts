import type { CapsuleData } from "./types";

const url: string = "http://localhost:8080";

export async function getAllCapsules(): Promise<CapsuleData[]> {
    const response = await fetch(`${url}/capsule/all`)
    console.log("response", response);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }      
    return response.json();
}