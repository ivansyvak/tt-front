import { ClientFile } from "./client-file";

export interface Client {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    registrationDate?: Date;
    ipAddress?: string;
    status: 'lead' | 'demo' | 'client';
    files: ClientFile[]
};
