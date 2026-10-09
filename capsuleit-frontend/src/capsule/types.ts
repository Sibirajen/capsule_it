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
    status: "opened" | "sealed"
};

export type CreateCapsule = {
    title: string;
    description: string;
    opensAt: string;
};

export type SelectCapsuleState = {
    capsule: CapsuleData | null;
    isLoading: boolean;
    error: string | null;
};

export type CapsuleFormFieldsProps = {
    title: string;
    setTitle: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
    opensAt: string;
    setOpensAt: (value: string) => void;
    minDate: string;
    maxDate: string;
};