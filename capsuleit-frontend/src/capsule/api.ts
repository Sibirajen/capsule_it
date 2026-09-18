import type { CapsuleData, CreateCapsule } from "./types";

const url: string = "http://localhost:8080";

export async function getAllCapsules(): Promise<CapsuleData[]> {
    const response = await fetch(`${url}/capsule/all`)
    console.log("response", response);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }      
    return response.json();
}

export async function getCapsuleById(id: number): Promise<CapsuleData> {
    const response = await fetch(`${url}/capsule/${id}`)
    console.log("response", response);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }      
    return response.json();
}

export async function createCapsule(capsule: CreateCapsule): Promise<CapsuleData> {
    const response = await fetch(`${url}/capsule`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(capsule)
    });
    console.log("response", response);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }      
    return response.json();
}