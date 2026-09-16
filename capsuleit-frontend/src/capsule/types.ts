export type CapsuleData = {
    id: number,
    title: string,
    description: string,
    opensAt: string
    status: "opened" | "sealed"
}

export type CapsuleProps = {
    title: string;
    description: string;
    opensAt: string;
};